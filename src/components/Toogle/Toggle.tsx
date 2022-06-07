import React from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { useTheme } from 'next-themes'

export const Toggle = () => {
    const { theme, setTheme } = useTheme()

  const handleChange = () => {
    
   if(theme ==="light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }

  }
  
  return (
    <>
      <label className="swap swap-rotate mr-2 inline">
        <input
          id="theme-toggle"
          name="theme-toggle"
          type="checkbox"
          onClick={handleChange}
        />
        <RiSunLine className="swap-on hover:text-2xl text-xl mb-1" />
        <RiMoonLine className="swap-off hover:text-2xl text-xl mb-1" />
      </label>
    </>
  );
}