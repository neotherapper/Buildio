import { Address } from './address';
import { Room } from './room';

export interface Building {
  address: Address;
  id: number;
  rooms?: Room[];
  nicknames: string[];
}
