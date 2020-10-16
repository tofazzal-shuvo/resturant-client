import {
  CallWaiter,
  Card,
  CommingSoon,
  CompleteOrder,
  MenuItems,
  Scanner,
  Welcome,
} from "../pages";

// Public Routes
export const Public = [
  { path: "/scanner", exact: true, component: Scanner },
  { path: "/welcome", exact: true, component: Welcome },
  { path: "/menu-items", exact: true, component: MenuItems },
  { path: "/cards", exact: true, component: Card },
  { path: "/call-waiter", exact: true, component: CallWaiter },
  { path: "/comming-soon", exact: true, component: CommingSoon },
  { path: "/complete-order", exact: true, component: CompleteOrder },
];
