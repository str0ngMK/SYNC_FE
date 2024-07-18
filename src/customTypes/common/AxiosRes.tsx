export default interface AxiosRes<ResponseType> {
  message: string;
  result: boolean;
  value: ResponseType;
}
