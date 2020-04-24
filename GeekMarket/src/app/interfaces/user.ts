export interface User {
  userId: number;
  Name: string;
  Surname: string;
  login: string;
  password: string;
}
export class LoginResponse {
  token: string;
}

