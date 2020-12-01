import {
  AskForBill,
  CallWaiter,
  Cart,
  AskForWaiter,
  CompleteOrder,
  MenuItems,
  Language,
  Welcome,
  CommingSoon,
} from "../pages";

// Public Routes
export const Public = [
  { path: "/", exact: true, component: Welcome },
  { path: "/language", exact: true, component: Language },
  { path: "/menu-items", exact: true, component: MenuItems },
  { path: "/cart", exact: true, component: Cart },
  { path: "/call-waiter", exact: true, component: CallWaiter },
  { path: "/ask-for-waiter", exact: true, component: AskForWaiter },
  { path: "/ask-for-bill", exact: true, component: AskForBill },
  { path: "/comming-soon", exact: true, component: CommingSoon },
  { path: "/complete-order", exact: true, component: CompleteOrder },
];
