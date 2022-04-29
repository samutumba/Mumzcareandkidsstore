import React, { FC } from "react";

interface IBadgeProps {
  children: any,
  cname?: string
}

export const Badge: FC<IBadgeProps> = ({ children , cname}) => {

  return (
    <>
      <span className={`badge ${cname}`}>{children}</span>
    </>
  );
};
