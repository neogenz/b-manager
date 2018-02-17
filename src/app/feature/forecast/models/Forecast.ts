import {Movement} from './Movement';

export interface Forecast {
  _id: string;
  baseAmount: number;
  name: string;
  updatedAt: string;
  createdAt: string;
  isModel: boolean;
  movements: Movement[];
  valid: boolean;
}
