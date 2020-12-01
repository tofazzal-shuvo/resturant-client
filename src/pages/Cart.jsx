import React, { useEffect, useState } from "react";
import { notification } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import Items from "../components/Menu/Items";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_ORDER } from "../graphql/modules";
import { addInfo, clearCard, clearNote } from "../store/modules";
import { useHistory } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

const Cart = () => {
  const [cardItems, setCardItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const { card, info } = useSelector((state) => state);

  const onChange = (e) => dispatch(addInfo({ note: e.target.value }));

  const orderData = {
    tableId: info?.tableId,
    currency: "RSD",
    total: String(total),
    paymentMethod: "cash",
    paymentStatus: "paid",
  };
  const [createOrder, { loading }] = useMutation(CREATE_ORDER);
  const onOrder = async () => {
    try {
      const {
        data: { CreateOrder },
      } = await createOrder({
        variables: {
          orderData: {
            ...orderData,
            note: info?.note,
            items,
          },
        },
      });
      if (CreateOrder.success) {
        // dispatch(clearCard());
        // dispatch(clearNote());
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

  useEffect(() => {
    let sum = 0,
      quant = 0;
    const menuItems = [];
    const data = Object.keys(card).map((item) => {
      const temp = card[item];
      sum = sum + +temp.price * +temp.quantity;
      quant = quant + Number(temp.quantity);
      menuItems.push({ item: temp._id, quantity: temp.quantity });
      return temp;
    });
    setItems(menuItems);
    setCardItems(data);
    setTotal(sum);
    setQuantity(quant);
  }, [card]);

  useEffect(() => {
    if (!info.tableId) history.push("/language");
  }, [info]);

  return (
    <div className="cart">
      <h2 className="main-title mb-4">
        {cardItems.length ? "Your orders" : "Empty cart"}
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {cardItems.map((item) => (
              <Items item={item} key={item._id} />
            ))}
            <div style={{ width: "95%", margin: "150px auto 0" }}>
              <p style={{ color: "#6d9d62", fontSize: "1.5rem" }}>Order note</p>
              <TextArea
                value={info?.note}
                onChange={onChange}
                placeholder="order note..."
                rows={5}
                style={{ borderColor: "#717171" }}
              />
            </div>
            <div
              style={{
                border: "1px solid #717171",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <p style={{ color: "#6d9d62", fontSize: "1.3rem" }}>
                {quantity} items in cart
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <p style={{ color: "#6d9d62", fontSize: "1.6rem" }}>Total</p>
                <p style={{ color: "#6d9d62", fontSize: "1.3rem" }}>
                  RSD {total}
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button
                disabled={!cardItems.length}
                style={{
                  backgroundColor: "#717171",
                  color: "#fff",
                  border: "none",
                  fontSize: "20px",
                  marginBottom: "30px",
                }}
                onClick={onOrder}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  {loading && (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  <span className="ml-2">Order</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
