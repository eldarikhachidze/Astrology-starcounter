export interface Zodiaco {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: number;
  files: string[];
  name: string;
  startDate: string;
  endDate: string;
}
export interface Prognoses {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: string;
  title: string;
  description: string;
  zodiacoId: string;
  categoryId: string;
  category?: any;
  zodiaco: Zodiaco;
}
export interface PrognosesResponse<T> {
  data: Prognoses[];
  total: number;
  limit: number;
  page: number;
}
