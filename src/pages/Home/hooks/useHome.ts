import React, { ChangeEvent, useEffect, useState } from "react";
import { getCurrencies, getConvert } from "api/calls";
import { ICurrencies } from "models";

export const useHome = () => {
  const [currencies, setCurrencies] = useState<ICurrencies[] | []>([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState<number>(0);
  const [isError, setIsError] = useState(false);

  const handleChangeSelectFrom = (e: ChangeEvent<HTMLSelectElement>): void =>
    setFrom(e.target.value);

  const handleChangeSelectTo = (e: ChangeEvent<HTMLSelectElement>): void =>
    setTo(e.target.value);

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>): void =>
    setAmount(e.target.value);

  useEffect(() => {
    if (from && to && amount) {
      getConvert(from, to, amount)
        .then(({ data }) => setResult(data.value))
        .catch(() => setIsError(true));
    }
  }, [from, to, amount]);

  useEffect(() => {
    getCurrencies()
      .then(({ data }) => {
        setCurrencies(data.response);
        setFrom(data.response[0].short_code);
        setTo(data.response[0].short_code);
      })
      .catch(() => setIsError(true));
  }, []);

  return {
    handleChangeAmount,
    handleChangeSelectFrom,
    handleChangeSelectTo,
    result,
    isError,
    currencies,
    amount,
  };
};
