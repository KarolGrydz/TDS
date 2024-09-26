import { ChangeEvent, useEffect, useState } from "react";
import { getConvert, getCurrencies } from "api/calls";
import { ICurrencies } from "models";

// const TODAY = new Date();
// const is_request_sended = localStorage.set(TODAY);
// const is_request_sended = localStorage.get(TODAY);

export const useHome = () => {
  const [currencies, setCurrencies] = useState<ICurrencies[] | []>([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState<number>(0);
  const [isError, setIsError] = useState(false);
  const [lastResults, setLastResults] = useState<any[]>([]); //

  const handleChangeSelectFrom = (e: ChangeEvent<HTMLSelectElement>): void =>
    setFrom(e.target.value);

  const handleChangeSelectTo = (e: ChangeEvent<HTMLSelectElement>): void =>
    setTo(e.target.value);

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>): void =>
    setAmount(e.target.value);

  useEffect(() => {
    if (from && to && amount) {
      getConvert(from, to, amount)
        .then(({ data }) => {
          console.log(data);
          setResult(data.value);
          setLastResults((prevValue) => [
            {
              from,
              to,
              amount,
              lastResult: data.value.toFixed(2),
            },
            ...prevValue,
          ]);
        })
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
    lastResults,
  };
};
