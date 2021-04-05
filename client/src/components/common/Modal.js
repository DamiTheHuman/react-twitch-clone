import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from "mdi-react/CloseIcon";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="modal flex justify-center fixed">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="h-screen"
      >
        <div className="modal-content flex justify-center space-x-2">
          <div className="bg-white px-4 py-8 rounded w-96">
            <div className="header">{props.title}</div>
            <div className="content">{props.content}</div>
            <div className="actions">{props.actions}</div>
          </div>
          <div className="close">
            <button
              className="text-white px-1.5 py-1 hover:bg-gray-800 rounded"
              onClick={props.onDismiss}
            >
              <CloseIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
