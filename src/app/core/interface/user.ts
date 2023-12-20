export interface User {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  timeOfBirth: string;
  country: string;
  city: string;
  roles: string;
  password: string;
  email: string;
  phoneNumber: string;
  isSubscribe: boolean;
  zodiacoId: number;
  eventsSubscription: any[];
  zodiaco: Zodiaco;
}

export interface Zodiaco {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: number;
  name: string;
  startDate: string;
  endDate: string;
}

export interface Token {
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
}
