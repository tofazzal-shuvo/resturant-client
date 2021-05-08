import React, { useEffect, useState } from "react";
import { notification, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_ORDER } from "../graphql/modules";
import { addInfo, clearCard, clearNote } from "../store/modules";
import { useHistory } from "react-router-dom";
import { CartItem, NoOrder } from "../components/Cart";
import { Banner } from "../components/Shared";

const Cart = () => {
  const [note, setNote] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const { addedItems } = useSelector((state) => state.cart);
  const info = useSelector((state) => state.info);
  // console.log({ addedItems });

  const [createOrder, { loading }] = useMutation(CREATE_ORDER);
  const onOrder = async () => {
    const items = getFormatedData(addedItems);
    const orderData = {
      items,
      tableId: "606d56ab45cbda7b7d23d704",
      paymentMethod: "cash",
      note,
    };
    try {
      const {
        data: { CreateOrder },
      } = await createOrder({
        variables: {
          orderData,
        },
      });
      if (CreateOrder.success) {
        dispatch(clearCard());
        dispatch(clearNote());
        notification.success({
          message: CreateOrder.message,
          placement: "bottomRight",
        });
        history.push(`/complete-order`);
      } else {
        notification.warn({
          message: CreateOrder.message,
          placement: "bottomRight",
        });
      }
    } catch (err) {}
  };

  if (!addedItems.length) return <NoOrder />;
  return (
    <div className="cart">
      <Banner text="Your Order" />
      {addedItems.map((item) => (
        <CartItem {...item} key={item._id} />
      ))}
      <h3
        style={{
          color: "black",
          textTransform: "capitalize",
          fontWeight: "700",
          fontSize: "28px",
        }}
      >
        Add note
      </h3>
      <TextArea
        className="mt-2 mb-2"
        onChange={(value) => {
          setNote(value);
        }}
      />
      {addedItems?.length !== 0 && (
        <div className="text-center">
          <Button
            disabled={!addedItems.length}
            className="order-btn"
            onClick={onOrder}
            loading={loading}
          >
            Order
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;

const getFormatedData = (addedItems) => {
  let items = addedItems.map((data) => {
    const extras = data?.extras?.map(({ extra, quantity }) => ({
      extra,
      quantity,
    }));
    const dropdowns = data?.dropdowns?.map(({ extra, dropdown }) => ({
      extra,
      dropdown,
    }));
    const sizing = data?.sizing?.map(({ size, menuSizing }) => ({
      size,
      menuSizing,
    }));
    const recommendation = { item: data.recommendation.item };
    recommendation.dropdowns = data.recommendation?.dropdowns?.map(
      ({ extra, dropdown }) => ({ extra, dropdown })
    );
    recommendation.sizing = data.recommendation?.sizing?.map(
      ({ size, menuSizing }) => ({ size, menuSizing })
    );

    const temp = {
      recommendation,
      sizing,
      extras,
      dropdowns,
      item: data.item,
      note: data.note,
      quantity: data.quantity,
    };
    return temp;
  });
  return items;
};
