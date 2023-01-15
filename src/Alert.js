import React, { useEffect } from "react";

const Alert = ({ msg, type, show, handle }) => {
  useEffect(() => {
    setTimeout(() => {
      handle(false, "", "");
    }, 2000);
  }, []);
  return (
    <div className={`alert ${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
