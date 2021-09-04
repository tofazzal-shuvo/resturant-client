import { useMutation } from '@apollo/react-hooks';
import { notification } from 'antd';
import React, { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navber from '../components/Navber';
import { CREATE_ORDER } from '../graphql/modules';
import { clearCard, clearNote } from '../store/modules';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const history = useHistory();
  const [showOrderBtn, setShowOrderBtn] = useState(false);
  const dispatch = useDispatch();
  const { addedItems } = useSelector((state) => state.cart);
  const { tableId, note } = useSelector((state) => state.info);

  const [createNewOrder, { loading: createOrderLoading }] = useMutation(CREATE_ORDER);
  const createOrder = async () => {
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
      } = await createNewOrder({
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

  return (
    <NavbarContext.Provider
      value={{
        showOrderBtn,
        setShowOrderBtn,
        createOrder,
        createOrderLoading,
      }}
    >
      {children}

      <Navber />
    </NavbarContext.Provider>
  );
};

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
    recommendation.dropdowns = data.recommendation?.dropdowns?.map(({ extra, dropdown }) => ({ extra, dropdown }));
    recommendation.sizing = data.recommendation?.sizing?.map(({ menuSizingItem, menuSizing }) => ({
      menuSizingItem,
      menuSizing,
    }));

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
