import {
  AskForBill,
  CallWaiter,
  Card,
  AskForWaiter,
  CompleteOrder,
  MenuItems,
  Scanner,
  Welcome,
  CommingSoon,
} from "../pages";

// Public Routes
export const Public = [
  { path: "/", exact: true, component: Scanner },
  { path: "/welcome", exact: true, component: Welcome },
  { path: "/menu-items", exact: true, component: MenuItems },
  { path: "/cards", exact: true, component: Card },
  { path: "/call-waiter", exact: true, component: CallWaiter },
  { path: "/ask-for-waiter", exact: true, component: AskForWaiter },
  { path: "/ask-for-bill", exact: true, component: AskForBill },
  { path: "/comming-soon", exact: true, component: CommingSoon },
  { path: "/complete-order", exact: true, component: CompleteOrder },
];
