import React, { useEffect, useState } from "react";
import { IncDecBtn } from "../Shared";

const Items = ({ item = {}, fromCard = true, menuStyle = {} }) => {
  const [style, setStyle] = useState(initialStyle);
  const { _id, price, desc } = item;
  let name =
    item?.translation?.length === 0
      ? item?.name
      : Array.isArray(item?.translation) && item?.translation[0].name;
  if (!name) name = item.name;
  console.log({ menuStyle });
  useEffect(() => {
    if (Object.keys(menuStyle).length !== 0) {
      setStyle(menuStyle);
    }
  }, [menuStyle]);
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <h3 style={style}>{name}</h3>
        <IncDecBtn fromCard={fromCard} id={_id} name={name} price={price} />
      </div>
      <p style={{ width: "75%", color: "#717171" }}>{desc}</p>
      <p style={{...style, fontSize:"1.2rem"}}>RSD {Number(price || 0).toFixed(2)}</p>
    </div>
  );
};
export default Items;

const initialStyle = { color: "#6d9d62", fontSize: "1.3rem" };
