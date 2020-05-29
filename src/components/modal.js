import React from "react";

const Modal = (props) => {
  return (
    <div className={"modal-wrapper"}>
      <div onClick={props.onCancel} className={"modal-backdrop"} />
      <div className={"modal-box"}>{props.children}</div>
    </div>
  );
};

export default Modal;
