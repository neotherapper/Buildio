import { Address } from './address';
import { Room } from './room';

export interface Building {
  address: Address;
  id: number;
  description: string;
  rooms?: Room[];
  nicknames: string[];
}
