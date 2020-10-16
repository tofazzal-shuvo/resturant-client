import React, { useEffect, useState } from "react";
import { notification } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import Items from "../components/Menu/Items";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_ORDER } from "../graphql/modules";
import { clearCard } from "../store/modules";
import { useHistory } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

const Card = () => {
  const cards = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const history = useHistory();

  const [cardItems, setCardItems] = useState([]);
  const [note, setNote] = useState("");
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  const orderData = {
    tableId: "5f764c0d284f9c47dd588128",
    currency: "RSD",
    total: String(total),
    paymentMethod: "cash",
    paymentStatus: "paid",
  };

  useEffect(() => {
    let sum = 0;
    const menuItems = [];
    const data = Object.keys(cards).map((item) => {
      const temp = cards[item];
      sum = sum + +temp.price * +temp.quantity;
      menuItems.push({ item: temp._id, quantity: temp.quantity });
      return temp;
    });
    setItems(menuItems);
    setCardItems(data);
    setTotal(sum);
  }, [cards]);

  const onChange = (e) => setNote(e.target.value);
  const [createOrder, { loading }] = useMutation(CREATE_ORDER);
  const onOrder = async () => {
    try {
      const {
        data: { CreateOrder },
      } = await createOrder({
        variables: {
          orderData: {
            ...orderData,
            note,
            items,
          },
        },
      });
      if (CreateOrder.success) {
        // dispatch(clearCard());
        notification.success({
          message: CreateOrder.message,
          placement: "bottomRight",
        });
        history.push("/complete-order");
      } else {
        notification.warn({
          message: CreateOrder.message,
          placement: "bottomRight",
        });
      }
    } catch (err) {}
  };
  return (
    <div className="cards">
      <h2 className="main-title mb-4">Your orders</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {cardItems.map((item) => {
              return <Items item={item} />;
            })}
            <div style={{ width: "95%", margin: "150px auto 0" }}>
              <p style={{ color: "#6d9d62", fontSize: "1.5rem" }}>Order note</p>
              <TextArea
                value={note}
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
                {cardItems.length} items in chart
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
                style={{
                  backgroundColor: "#6d9d62",
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

export default Card;
