import {Token, User} from "./user";

export interface Register {
  firstName: string;
  lastName: string;
  birthDate: string;
  timeOfBirth: string;
  country: string;
  city: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: Token;
  error?: any;
  status: number;
}
