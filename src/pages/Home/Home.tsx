import React from "react";
import { SelectCurrencies } from "components";

import { useHome } from "./hooks";
import { Amount, Result } from "./components";
import { LastResults } from "./components/LastResults/LastResults";

export const Home = () => {
  const {
    handleChangeAmount,
    handleChangeSelectFrom,
    handleChangeSelectTo,
    result,
    isError,
    currencies,
    amount,
    lastResults,
  } = useHome();

  if (!currencies.length) return <div>Loading...</div>;

  if (isError) return <div>Error page</div>;

  return (
    <div className="container">
      <div className="row">
        <SelectCurrencies
          handleChangeSelect={handleChangeSelectFrom}
          dataOptions={currencies}
          label="From: "
          name="from"
          id="from-currencies"
        />
        <Amount amount={amount} handleChange={handleChangeAmount} />
      </div>
      <div className="row">
        <SelectCurrencies
          handleChangeSelect={handleChangeSelectTo}
          dataOptions={currencies}
          label="To: "
          name="to"
          id="to-currencies"
        />
        <Result result={result} />
        <LastResults lastResults={lastResults} maxItems={5} />
      </div>
    </div>
  );
};
