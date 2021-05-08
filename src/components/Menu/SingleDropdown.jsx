import { Select, Tag } from "antd";
import React, { useEffect, useState } from "react";

const SingleDropdown = ({
  isFree,
  dropdown,
  setDropdown,
  selectDropdown,
  _id,
}) => {
  const [value, setDefaultValue] = useState(null);
  const { extras = [], name } = dropdown || {};
  // console.log({ selectDropdown });

  const handleChange = (value) => {
    setDefaultValue(value ? value : null);
    let temp = selectDropdown,
      isFound = false;
    if (!value) {
      temp = temp.filter((item) => item.dropdown !== _id);
      setDropdown([...temp]);
      return;
    }
    const selectedExtra = extras.find((item) => item._id === value);
    temp.map((item) => {
      if (item.dropdown === _id) {
        item.extra = value;
        item.name = selectedExtra.name;
        item.price = selectedExtra?.menuItem?.price || selectedExtra.price || 0;
        isFound = true;
      }
    });

    if (!isFound)
      temp.push({
        dropdown: _id,
        name: name,
        extra: value,
        name: selectedExtra.name,
        price: isFree
          ? 0
          : selectedExtra?.menuItem?.price || selectedExtra.price || 0,
      });
    setDropdown([...temp]);
  };

  const { Option } = Select;

  return (
    <div>
      <h3 style={{ margin: "10px 0px 5px", fontSize: "14px" }}>
        {name} {isFree && <Tag color="green">Free</Tag>}
      </h3>
      <Select
        value={value}
        className="custom-select-padding"
        style={{ width: "100%" }}
        onChange={handleChange}
        allowClear
      >
        <Option value={null} disabled>
          Select
        </Option>
        {extras?.map(({ _id, menuItem, name, price }) => (
          <Option value={_id} key={_id} key={_id}>
            {menuItem?.name || name}{" "}
            {!isFree && `- $${menuItem?.price || price}`}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SingleDropdown;
