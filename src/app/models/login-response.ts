// import { IStatus } from './status'; // statusCode: number;  message: string;

export interface ILoginResponseModel {
  accessToken: string;
  user: {
    name: string;
    confirmPassword: string;
    email: string;
    username: string;
  };
}
