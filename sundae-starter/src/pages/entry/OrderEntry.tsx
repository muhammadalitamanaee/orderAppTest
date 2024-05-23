import React from "react";
import Options from "./Option";

function OrderEntry() {
  return (
    <>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </>
  );
}

export default OrderEntry;
