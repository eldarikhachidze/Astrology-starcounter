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
  id: string;
  title: string;
  description: string;
  zodiacoId: number;
  categoryId: number;
  category: Category;
  zodiaco: Zodiaco;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
}

export interface PrognosesResponse<T> {
  data: Prognoses[];
  total: number;
  limit: number;
  page: number;
}
