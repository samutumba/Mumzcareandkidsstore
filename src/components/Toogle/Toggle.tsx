import React from "react";
import { useTheme, useToggle } from "../../hooks";
import { BsBrightnessHighFill, BsMoonFill } from "react-icons/bs";

export const Toggle = () => {
  const theme = useTheme();
  const toggle = useToggle();


  function changeTheme() {
    toggle();    
  }

  return (
    <>
      <label className="swap swap-rotate">
        <input
          id="theme-toggle"
          name="theme-toggle"
          type="checkbox"
          onClick={changeTheme}
        />
        <BsBrightnessHighFill className="swap-on" />
        <BsMoonFill className="swap-off" />
      </label>
    </>
  );
}