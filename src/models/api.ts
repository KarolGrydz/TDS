import { ICurrencies } from "./home";

export interface ICurrenciesResponse {
  response: ICurrencies[];
  [x: number]: ICurrencies;
}
