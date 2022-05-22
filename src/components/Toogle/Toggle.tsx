import React from "react";
import { useTheme, useToggle } from "../../hooks";
import {RiSunLine, RiMoonLine} from "react-icons/ri";

export const Toggle = () => {
  const theme = useTheme();
  const toggle = useToggle();

  function changeTheme() {
    toggle();    
  }

  return (
    <>
      <label className="swap swap-rotate mr-2  inline">
        <input
          id="theme-toggle"
          name="theme-toggle"
          type="checkbox"
          onClick={changeTheme}
        />
        <RiSunLine className="swap-on hover:text-2xl text-xl mb-1" />
        <RiMoonLine className="swap-off hover:text-2xl text-xl mb-1" />
      </label>
    </>
  );
}