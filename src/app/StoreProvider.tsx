'use client'

import {  store } from "@/store";
import { useState } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {

  const [reduxStore] = useState(() => store());

 
  return <Provider store={reduxStore}>{children}</Provider>;
};

export default StoreProvider;
