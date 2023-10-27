export interface User {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  timeOfBirth: string;
  country: string;
  city: string;
  roles: string;
  password: string;
  email: string;
}
export interface Token {
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
}
