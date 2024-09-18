import { ChangeEvent } from "react";

export interface ICurrencies {
  code: string;
  decimal_mark: string;
  id: number;
  name: string;
  precision: number;
  short_code: string;
  subunit: number;
  symbol: string;
  symbol_first: boolean;
  thousands_separator: string;
}

export interface IConvert {
  amount: number;
  date: string;
  from: string;
  timestamp: number;
  to: string;
  value: number;
}

export interface IAmount {
  amount: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IResult {
  result: number;
}
