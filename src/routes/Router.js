import {
  AskForBill,
  CallWaiter,
  Cart,
  AskForWaiter,
  CompleteOrder,
  Menu,
  Language,
  Welcome,
  CommingSoon,
} from "../pages";

// Public Routes
export const Public = [
  // { path: "/welcome", exact: true, component: Welcome },
  { path: "/", exact: true, component: Language },
  { path: "/menu", exact: false, component: Menu },

  { path: "/cart", exact: true, component: Cart },
  { path: "/call-waiter", exact: true, component: CallWaiter },
  { path: "/ask-for-waiter", exact: true, component: AskForWaiter },
  { path: "/ask-for-bill", exact: true, component: AskForBill },
  { path: "/comming-soon", exact: true, component: CommingSoon },
  { path: "/complete-order", exact: true, component: CompleteOrder },
];
