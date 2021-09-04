import React, { useContext, useEffect } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { addInfo } from '../store/modules';
import { CartItem, NoOrder } from '../components/Cart';
import { Banner } from '../components/Shared';
import { FormattedMessage } from 'react-intl';
import { NavbarContext } from '../context';

const Cart = () => {
  const dispatch = useDispatch();

  const { addedItems } = useSelector((state) => state.cart);
  const { note, resTemplate } = useSelector((state) => state.info);
  const currency = useSelector((state) => state?.info?.resInfo?.currency || '$');
  const { setShowOrderBtn } = useContext(NavbarContext);

  useEffect(() => {
    setShowOrderBtn(true);
  }, []);

  const background = resTemplate?.bottomNavigation?.background;
  // console.log(addedItems)
  const onChangeNote = (e) => {
    dispatch(addInfo({ note: e.target.value }));
  };

  if (!addedItems.length) return <NoOrder {...resTemplate} />;
  const defaultColor = resTemplate?.general?.defaultColor;
  let total = 0;
  addedItems.map(({ itemTotal, quantity }) => (total += itemTotal * quantity));

  return (
    <div className="cart">
      <Banner showBookIcon={true} text={<FormattedMessage id="APP.NAVBER.YOUR_ORDER" />} />
      {addedItems.map((item, idx) => (
        <CartItem {...item} key={idx} idx={idx} defaultColor={defaultColor} currency={currency} />
      ))}
      <p className="text-right mr-2 mt-3" style={{ color: defaultColor, fontSize: '16px' }}>
        <strong style={{ fontSize: '19px', marginRight: '5px' }}>Total: </strong>
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
        <TextArea className="mt-2 mb-2" rows="5" value={note} onChange={onChangeNote} />
      </div>
    </div>
  );
};

export default Cart;
