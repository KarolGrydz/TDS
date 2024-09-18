import { ChangeEvent } from "react";
import { ICurrencies } from "./home";

export interface ISelectCurrencies {
  handleChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  dataOptions: ICurrencies[];
  label: string;
  name: string;
  id: string;
}
