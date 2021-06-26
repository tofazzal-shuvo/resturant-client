import gql from "graphql-tag";

export const CREATE_ORDER = gql`
mutation CreateOrder($orderData: OrderInput) {
  CreateOrder(data: $orderData) {
    code
    success
    message
  }
}
`;

export const CALL_WEITER = gql`
  mutation CallWaiter($tableId: ID!) {
    CallWaiter(tableId: $tableId) {
      code
      message
      success
    }
  }
`;

export const ASK_FOR_BILL = gql`
  mutation AskForBill($tableId: ID!) {
    AskForBill(tableId: $tableId) {
      code
      message
      success
    }
  }
`;