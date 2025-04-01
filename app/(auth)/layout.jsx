import React from "react";
import { Children } from "react/cjs/react.production.min";

const AuthLayout = ({ Children }) => {
  return <div className="flex justify-center pt-40">{Children}</div>;
};

export default AuthLayout;
