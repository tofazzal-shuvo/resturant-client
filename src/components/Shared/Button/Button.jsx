import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';


const CustomButton = ({btnText,...props})=>{
return <button className="custom-btn">{btnText}</button>
}
propTypes.CustomButton ={
    btnText: String,

}
export default CustomButton;