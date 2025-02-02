import { CaretDown, CaretUp } from "@phosphor-icons/react";
import React from "react";

const PriceChange = (props) => {
  const { priceChange } = props;

  // Ambil nilai absolut dari priceChange
  const absolutePriceChange = Math.abs(priceChange);

  return (
    <>
      {priceChange < 0 ? ( 
        <div className="p-5 w-[116px] flex items-center place-content-end">
          <CaretDown size={16} weight="fill" className="text-red-600" />
          <p className="text-base text-red-600 font-medium">
            {absolutePriceChange}%
          </p>
        </div>
      ) : priceChange === 0 ? ( 
        <div className="p-5 w-[116px] text-end">
          <p className="text-base text-gray-500 font-medium">
            {absolutePriceChange}%
          </p>
        </div>
      ) : ( 
        <div className="p-5 w-[116px] flex items-center place-content-end">
          <CaretUp size={16} weight="fill" className="text-green-600" />
          <p className="text-base text-green-600 font-medium">
            {absolutePriceChange}%
          </p>
        </div>
      )}
    </>
  );
};

export default PriceChange;