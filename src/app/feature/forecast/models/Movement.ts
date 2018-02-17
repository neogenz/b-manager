export interface Movement {
  _id: string;
  createdAt: string;
  updatedAt: string;
  comment: string;
  amount: number;
  name: string;
  active: boolean;
  repeat: number;
  type: string;
}
