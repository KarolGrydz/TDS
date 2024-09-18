import React from "react";
import { IAmount } from "models";

export const Amount = ({ amount, handleChange }: IAmount) => (
  <div>
    <label>Amount: </label>
    <input type="number" value={amount} onChange={handleChange} />
  </div>
);
