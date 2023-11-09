export interface PaginatedResponse {
  data: Blog[];
  total: number;
  limit: number;
  page: number;
}

export interface Blog {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: number;
  title: string;
  description: string;
  files: string[];
}
