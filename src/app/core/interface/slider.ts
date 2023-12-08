export interface Slider {
  description: string;
  url: string;
  files: string[];
  deletedAt?: any;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface SliderResponse {
  data: Slider[];
  total: number;
  limit: number;
  page: number;
}
