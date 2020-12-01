import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const FilterItem = ({ item, onClose, open }) => {
  const [activeKeys, setActiveKeys] = useState([]);
  const { category, submenu } = item;
  const { Panel } = Collapse;
  const onchange = (value) => setActiveKeys(value);
  useEffect(() => {
    setActiveKeys([]);
  }, [open]);
  return submenu.length === 0 ? (
    <Link
      to={item._id}
      spy={true}
      smooth={true}
      duration={500}
      onClick={onClose}
      style={sortItemStyle}
    >
      {category}
    </Link>
  ) : (
    <Collapse bordered={false} activeKey={activeKeys} onChange={onchange}>
      <Panel
        header={category}
        key="1"
        showArrow={false}
        className="custom-collaps"
      >
        {submenu.map((singleItem) => (
          <Link
            to={singleItem._id}
            key={singleItem._id}
            spy={true}
            smooth={true}
            duration={500}
            onClick={onClose}
            style={sortItemStyle}
          >
            {singleItem.category}
          </Link>
        ))}
      </Panel>
    </Collapse>
  );
};
export default FilterItem;

const sortItemStyle = {
  display: "block",
  border: "none",
  paddingLeft: 0,
  paddingRight: 0,
  fontSize: "1.5rem",
  color: "#6d9d62",
  marginBottom: "10px",
  textTransform: "capitalize",
};
