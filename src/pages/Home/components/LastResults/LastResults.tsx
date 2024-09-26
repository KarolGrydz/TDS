import React, { useState } from "react";

export const LastResults = ({ lastResults, maxItems }: any) => {
  console.log(lastResults);
  return (
    <div>
      {lastResults.slice(0, maxItems).map((item: any, index: number) => (
        <div key={index} style={{ border: "1px solid black", padding: "10px" }}>
          <span>To: {item.to}</span>
          <br />
          <span>From: {item.from}</span>
          <br />
          <span>Amount: {item.amount}</span>
          <br />
          <div>LastResult: {item.lastResult}</div>
        </div>
      ))}
    </div>
  );
};
