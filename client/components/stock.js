import React from "react";

export const Stock = props => {
  const { stock } = props;
  let color = "equal-to-open";
  if (stock.openingPrice > stock.value / stock.totalQuantity) {
    color = "less-than-open";
  } else if (stock.openingPrice < stock.value / stock.totalQuantity) {
    color = "greater-than-open";
  }

  return (
    <div className={`line-item ${color}`}>
      <div className="column">{stock.ticker}</div>
      <div className="column">{stock.totalQuantity} Shares</div>
      {/* Prices are recorded accurately but rounded for cleaner display */}
      {/* <div className="column">${stock.value.toFixed(2)}</div> */}
    </div>
  );
};
