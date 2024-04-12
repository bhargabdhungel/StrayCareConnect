/* eslint-disable  */
import React from "react";

const Button = ({ primary, secondary, tertiary,darkButton, children, ...rest }) => {
  let classNames = "px-4 py-2 rounded-md text-white font-bold";

  if (primary) {
    classNames += " bg-custom-button-active hover:bg-custom-button-hover";
  } else if (secondary) {
    classNames +=
      " bg-custom-secondary-button-active hover:bg-custom-white-button-hover";
  } else if (tertiary) {
    classNames +=
      " bg-custom-white-button-active hover:bg-custom-white-button-hover";
  } else if (darkButton) {
    classNames +=
      " bg-custom-bg-dark-primary hover:bg-custom-bg-dark-secondary";
  }


  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
