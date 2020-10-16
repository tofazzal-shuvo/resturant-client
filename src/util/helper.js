import { notification } from "antd";

const endpoint = process.env.REACT_APP_IMAGE_URL;
const noImage = "/img/noimage.png";
export const getImage = image => {
  if (!image) return noImage;
  return endpoint + image;
};


export const showNotification = (data) => {
  if (data.success) {
    notification.success({
      message: data.message,
      placement: "bottomLeft",
    });
  } else {
    notification.error({
      message: data.message,
      placement: "bottomLeft",
    });
  }
};