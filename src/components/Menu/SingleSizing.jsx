import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { getTranslation } from "../../util";

const SingleSizing = ({
  selectSizing,
  setSizing,
  name,
  items,
  _id: menuSizing,
  defaultSelected,
  translation,
  defaultColor,
}) => {
  const [value, setDefaultValue] = useState(null);
  const handleChange = (value) => {
    setDefaultValue(value);
    let temp = selectSizing,
      isFound = false;
    const selectedItem = items.find((item) => item._id === value);
    temp.map((item) => {
      if (item.menuSizing === menuSizing) {
        item.size = selectedItem?.item?._id;
        item.name = selectedItem?.item?.name;
        item.translation = selectedItem?.item.translation;
        item.price = selectedItem.price;
        isFound = true;
      }
    });
    if (!isFound)
      temp.push({
        menuSizing,
        size: selectedItem?.item?._id,
        sizingName: name,
        sizingTranslation: translation,
        name: selectedItem?.item?.name,
        translation: selectedItem?.item?.translation,
        price: selectedItem.price,
      });
    setSizing([...temp]);
  };

  useEffect(() => {
    if (Array.isArray(items)) {
      items.map(({ _id, default: isDefaultValue, item, price }) => {
        if (isDefaultValue) {
          let temp = {
            menuSizing,
            size: item._id,
            sizingName: name,
            sizingTranslation: translation,
            name: item.name,
            translation: item.translation,
            price,
          };
          defaultSelected.push(temp);
          setDefaultValue(_id);
        }
      });
      setSizing(defaultSelected);
    }
  }, [items]);

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
        {getTranslation({ name, translation })}
      </h3>
      <Select
        value={value}
        className="custom-select-padding"
        style={{ width: "100%" }}
        onChange={handleChange}
      >
        {items?.map(({ _id, item, price }) => (
          <Option value={_id} key={_id} key={_id}>
            {`${getTranslation(item)} - $${price}`}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SingleSizing;
