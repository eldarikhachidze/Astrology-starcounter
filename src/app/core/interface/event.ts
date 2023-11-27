export interface Event {
  id: string;
  name: string;
  location: string;
  description: string;
  organizedBy: string;
  price: string;
  startDate: string;
  endDate: string;
  files: string[];
  deletedAt?: any;
  createdAt: string;
  updatedAt: string;
}

export interface EventsResponse {
  data: Event[];
  total: number;
  limit: number;
  page: number;
}
