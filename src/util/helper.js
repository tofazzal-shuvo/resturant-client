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

export const getTranslation = (data) => {
  const { translation, name } = data || {};
  if (Array.isArray(translation) && translation.length > 0)
    return translation[0].name;
  else return name;
};

export const getScheduleTime = (schedule) => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const cntDay = days[new Date().getDay()];
  const { from, to, active } = schedule.find((item) => item?.day == cntDay);

  if (!active) {
    return { disabled: true, text: "Not suplyed today." };
  }

  const cntDate = new Date();
  const startDate = new Date().setHours(
    from.split(":")[0],
    from.split(":")[1],
    0
  );
  const endDate = new Date().setHours(to.split(":")[0], to.split(":")[1], 0);

  if (cntDate >= startDate && cntDate < endDate) {
    return { disabled: false, text: `${from} - ${to}` };
  } else {
    return { disabled: true, text: `${from} - ${to}` };
  }
};
