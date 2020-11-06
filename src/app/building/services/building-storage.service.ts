import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Building } from '../models';

export function storageFactory(): any {
  return typeof window === undefined || typeof localStorage === undefined
    ? null
    : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken(
  'buildio-local-storage',
  { factory: storageFactory }
);

@Injectable({ providedIn: 'root' })
export class BuildingStorageService {
  private collectionKey = 'pokemon-collection';

  supported(): Observable<boolean> {
    return this.storage !== null
      ? of(true)
      : throwError('Local Storage Not Supported');
  }

  getCollection(): Observable<Building[]> {
    return this.supported().pipe(
      map((_) => this.storage.getItem(this.collectionKey)),
      map((value: string | null) => (value ? JSON.parse(value) : []))
    );
  }

  addToCollection(records: Building[]): Observable<Building[]> {
    return this.getCollection().pipe(
      map((value: Building[]) => [...value, ...records]),
      tap((value: Building[]) =>
        this.storage.setItem(this.collectionKey, JSON.stringify(value))
      )
    );
  }

  removeFromCollection(ids: Array<string>): Observable<Building[]> {
    return this.getCollection().pipe(
      map((value: Building[]) =>
        value.filter((item) => !ids.includes(item.id.toString()))
      ),
      tap((value: Building[]) =>
        this.storage.setItem(this.collectionKey, JSON.stringify(value))
      )
    );
  }

  deleteCollection(): Observable<boolean> {
    return this.supported().pipe(
      tap(() => this.storage.removeItem(this.collectionKey))
    );
  }

  constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage) {}
}
