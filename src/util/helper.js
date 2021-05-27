import { notification } from "antd";

const endpoint = process.env.REACT_APP_IMAGE_URL;
const noImage = "/img/noimage.png";
export const getImage = (image) => {
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

export const getTranslation = (data = {}) => {
  const { translation, name } = data;
  if (Array.isArray(translation) && translation.length > 0)
    return translation[0].name;
  else return name;
};
