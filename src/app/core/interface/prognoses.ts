import {Category} from "./category";

export interface Zodiaco {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  files: string[];
}
export interface Prognoses {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: number;
  title: string;
  description: string;
  zodiacoId: number;
  categoryId: number;
  category: Category;
  zodiaco: Zodiaco;
}
export interface PrognosesResponse<T> {
  data: Prognoses[];
  total: number;
  limit: number;
  page: number;
}
