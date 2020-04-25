import React, { Fragment } from "react";
const FormettedTime = (props) => {
  return <Fragment>{props.cutterntTime.toLocaleTimeString()}</Fragment>;
};
export default FormettedTime;
