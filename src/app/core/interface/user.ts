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
}

export interface Token {
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
}
