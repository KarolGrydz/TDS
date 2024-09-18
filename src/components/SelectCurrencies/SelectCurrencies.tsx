import React from "react";
import { ISelectCurrencies } from "models/components";

export const SelectCurrencies = ({
  handleChangeSelect,
  dataOptions,
  label,
  name,
  id,
}: ISelectCurrencies) => (
  <div>
    <label>{label}</label>
    <select name={name} id={id} onChange={handleChangeSelect}>
      {dataOptions.map((item: any) => (
        <option key={item.id} value={item.short_code}>
          {item.name}
        </option>
      ))}
    </select>
  </div>
);
