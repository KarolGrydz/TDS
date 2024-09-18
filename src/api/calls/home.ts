import { AxiosResponse } from "axios";
import { CURRENCIES, CONVERT } from "constants/api";
import { ICurrenciesResponse, IConvert } from "models";

import { axiosInstance } from "../config";

export const getCurrencies = (): Promise<
  AxiosResponse<ICurrenciesResponse, null>
> => axiosInstance.get(CURRENCIES);

export const getConvert = (
  from: string,
  to: string,
  amount: string
): Promise<AxiosResponse<IConvert, null>> =>
  axiosInstance.get(CONVERT, {
    params: {
      from,
      to,
      amount,
    },
  });
