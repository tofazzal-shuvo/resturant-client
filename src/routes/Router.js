import { MenuItems } from '../components/Menu';
import {
  AskForBill,
  CallWaiter,
  Cart,
  AskForWaiter,
  CompleteOrder,
  Menu,
  Language,
  CommingSoon,
} from '../pages';

// Public Routes
export const Public = [
  // { path: "/welcome", exact: true, component: Welcome },
  { path: '/', exact: true, component: Language },
  { path: '/menu', exact: true, component: Menu },
  { path: '/menu/items', hasNavbar: true, exact: true, component: MenuItems },

  { path: '/cart', exact: true, component: Cart, hasNavbar: false },
  {
    path: '/call-waiter',
    exact: true,
    component: CallWaiter,
    hasNavbar: true,
  },
  {
    path: '/ask-for-waiter',
    exact: true,
    component: AskForWaiter,
    hasNavbar: true,
  },
  {
    path: '/ask-for-bill',
    exact: true,
    component: AskForBill,
    hasNavbar: true,
  },
  {
    path: '/comming-soon',
    exact: true,
    component: CommingSoon,
    hasNavbar: true,
  },
  {
    path: '/complete-order',
    exact: true,
    component: CompleteOrder,
    hasNavbar: true,
  },
];
