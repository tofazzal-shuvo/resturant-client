// export const GRAPHQL_URL = "https://yellowcarte.herokuapp.com";
export const GRAPHQL_URL = process.env.NODE_ENV
  ? 'https://yellowcarte.herokuapp.com'
  : `http://118.179.129.213:3007`;
  
export const REACT_APP_IMAGE_URL =
  'https://ezcorps.s3.ap-south-1.amazonaws.com/';
