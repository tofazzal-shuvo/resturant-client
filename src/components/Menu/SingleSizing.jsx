import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const currency = useSelector(
    (state) => state?.info?.resInfo?.currency || "$"
  );
  const [value, setDefaultValue] = useState(null);
  const handleChange = (value, { item: selectedItem }) => {
    setDefaultValue(value);
    let temp = selectSizing,
      isFound = false;
    console.log(selectedItem);
    temp.map((item) => {
      if (item.menuSizing === menuSizing) {
        item.menuSizingItem = selectedItem?._id;
        item.name = selectedItem?.item?.name;
        item.translation = selectedItem?.item.translation;
        item.price = selectedItem.price;
        isFound = true;
      }
    });
    if (!isFound)
      temp.push({
        menuSizing,
        menuSizingItem: selectedItem?._id,
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
            menuSizingItem: _id,
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
  if (!items?.length) return null;
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
        {items?.map((item) => (
          <Option value={item._id} key={item._id} item={item}>
            {`${getTranslation(item.item)} - ${currency}${Number(
              item.price || 0
            ).toFixed(2)}`}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SingleSizing;
