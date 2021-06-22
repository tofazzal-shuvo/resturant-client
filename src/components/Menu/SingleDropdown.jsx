import { Select, Tag } from "antd";
import React, { useState } from "react";
import { getTranslation } from "../../util";

const SingleDropdown = ({
  isFree,
  dropdown,
  setDropdown,
  selectDropdown,
  defaultColor,
  translation,
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
      temp = temp.filter((item) => item.dropdown !== dropdown._id);
      setDropdown([...temp]);
      return;
    }
    const selectedExtra = extras.find((item) => item._id === value);
    temp.map((item) => {
      if (item.dropdown === dropdown._id) {
        item.extra = value;
        item.translation = selectedExtra.translation;
        item.name = selectedExtra.name;
        item.price = selectedExtra?.menuItem?.price || selectedExtra.price || 0;
        isFound = true;
      }
    });

    if (!isFound)
      temp.push({
        dropdown: dropdown._id,
        extra: value,
        name: selectedExtra?.menuItem?.name || selectedExtra.name,
        translation:
          selectedExtra?.menuItem?.translation || selectedExtra.translation,
        price: isFree
          ? 0
          : selectedExtra?.menuItem?.price || selectedExtra.price || 0,
      });
    setDropdown([...temp]);
  };

  const { Option } = Select;

  return (
    <div>
      <h3
        style={{
          margin: "10px 0px 5px",
          fontSize: "14px",
          color: defaultColor,
        }}
      >
        {getTranslation({ name, translation })}{" "}
        {isFree && <Tag color="green">Free</Tag>}
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
        {extras?.map(({ _id, menuItem, name, price, translation }) => (
          <Option value={_id} key={_id} key={_id}>
            {menuItem
              ? getTranslation(menuItem)
              : getTranslation({ name, translation })}{" "}
            {!isFree && `- $${menuItem?.price || price}`}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SingleDropdown;
