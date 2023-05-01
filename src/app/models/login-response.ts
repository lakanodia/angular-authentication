import { IStatus } from './status';

export interface ILoginResponseModel extends IStatus {
  token: string;
  refreshToken: string;
  expiration: string;
  name: string;
  username: string;
}
