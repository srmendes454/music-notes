export default interface IFormLogin {
  email: string;
  password: string;
}

export interface Response<Data> {
  data: {
    data: Data;
    success: boolean;
    message: string;
    time: Date;
    environment: string;
    router: string;
    tokenValidTotalMinutesTo: number;
    errorMessage: [string];
  };
}
