import { notification } from "antd"

export const successNotify = (message)=>{
    notification.success({
        message,
        placement: 'bottomRight' 
    })
}

export const warnNotify = (message)=>{
    notification.warn({
        message,
        placement: 'bottomRight' 
    })
}

export const errorNotify = (message)=>{
    notification.error({
        message,
        placement: 'bottomRight' 
    })
}