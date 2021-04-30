import { Select } from "antd";
import React, { useEffect, useState } from "react";

const SingleSizing = ({ name, items }) => {
  const [value, setDefaultValue] = useState(null);
  const handleChange = (value) => setDefaultValue(value);

  useEffect(() => {
    items.map(({ _id, default: isDefaultValue }) => {
      if (isDefaultValue) setDefaultValue(_id);
    });
  }, [items]);

  const { Option } = Select;
  return (
    <div>
      <h3>{name}</h3>
      <Select value={value} style={{ width: "100%" }} onChange={handleChange}>
        {items.map(({ _id, item, price }) => (
          <Option value={_id} key={_id}>
            {`${item.name} - $${price}`}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SingleSizing;
