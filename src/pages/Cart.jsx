import React from 'react';
import { notification, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_ORDER } from '../graphql/modules';
import { addInfo, clearCard, clearNote } from '../store/modules';
import { useHistory } from 'react-router-dom';
import { CartItem, NoOrder } from '../components/Cart';
import { Banner } from '../components/Shared';
import { FormattedMessage } from 'react-intl';

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { addedItems } = useSelector((state) => state.cart);
  const { tableId, note, resTemplate } = useSelector((state) => state.info);
  const currency = useSelector(
    (state) => state?.info?.resInfo?.currency || '$'
  );

  const background = resTemplate?.bottomNavigation?.background;
  // console.log(addedItems)
  const onChangeNote = (e) => {
    dispatch(addInfo({ note: e.target.value }));
  };

  const [createOrder, { loading }] = useMutation(CREATE_ORDER);
  const onOrder = async () => {
    const items = getFormatedData(addedItems);
    const orderData = {
      items,
      tableId,
      paymentMethod: 'cash',
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
        history.push(`/complete-order`);
      } else {
        notification.warn({
          message: CreateOrder.message,
          placement: 'bottomRight',
        });
      }
    } catch (err) {}
  };

  if (!addedItems.length) return <NoOrder {...resTemplate} />;
  const defaultColor = resTemplate?.general?.defaultColor;
  let total = 0;
  addedItems.map(({ itemTotal, quantity }) => (total += itemTotal * quantity));

  return (
    <div className="cart">
      <div
        className="cart-section"
        style={{
          height: 'calc(100vh - 129px)',
          overflowY: 'scroll',
        }}
      >
        <Banner
          showBookIcon={true}
          text={<FormattedMessage id="APP.NAVBER.YOUR_ORDER" />}
        />
        {addedItems.map((item, idx) => (
          <CartItem
            {...item}
            key={idx}
            idx={idx}
            defaultColor={defaultColor}
            currency={currency}
          />
        ))}
        <p
          className="text-right mr-2 mt-3"
          style={{ color: defaultColor, fontSize: '16px' }}
        >
          <strong style={{ fontSize: '19px', marginRight: '5px' }}>
            Total:{' '}
          </strong>
          {currency} {total}
        </p>
        <div className="p-2 mt-4">
          <h3
            style={{
              color: defaultColor || 'black',
              textTransform: 'capitalize',
              fontWeight: '700',
              fontSize: '28px',
            }}
          >
            Add note
          </h3>
          <TextArea
            className="mt-2 mb-2"
            rows="5"
            value={note}
            onChange={onChangeNote}
          />
        </div>
      </div>
      {addedItems?.length !== 0 && (
        <div
          className="cart-action text-center"
          style={{
            background: background,
            display: 'block',
            padding: 10,
            borderBottom: '2px solid #fff'
          }}
        >
          <Button
            disabled={!addedItems.length}
            className="order-btn "
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
    const sizing = data?.sizing?.map(({ menuSizingItem, menuSizing }) => ({
      menuSizingItem,
      menuSizing,
    }));
    const recommendation = { item: data.recommendation.item };
    recommendation.dropdowns = data.recommendation?.dropdowns?.map(
      ({ extra, dropdown }) => ({ extra, dropdown })
    );
    recommendation.sizing = data.recommendation?.sizing?.map(
      ({ menuSizingItem, menuSizing }) => ({ menuSizingItem, menuSizing })
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
