import { IResult } from "models";
import React from "react";

export const Result = ({ result }: IResult) => (
  <div>
    <label>Exchange result: </label>
    <span>
      <b>{result?.toFixed(2)}</b>
    </span>
  </div>
);
