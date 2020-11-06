import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Address, Building, Room } from '@buildio/building/models';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuildingDetailComponent {
  /**
   * Presentational components receive data through @Input() and communicate events
   * through @Output() but generally maintain no internal state of their
   * own. All decisions are delegated to 'container', or 'smart'
   * components before data updates flow back down.
   *
   * More on 'smart' and 'presentational' components: https://gist.github.com/btroncone/a6e4347326749f938510#utilizing-container-components
   */

  @Input() building!: Building;
  @Input() nicknames!: string[];

  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();

  /**
   * Tip: Utilize getters to keep templates clean
   */
  get id(): number {
    return this.building.id;
  }

  get address(): Address {
    return this.building.address;
  }

  get description(): string {
    return this.building.description;
  }

  get rooms(): Room[] {
    return this.building.rooms;
  }
}
