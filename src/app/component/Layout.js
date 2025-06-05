"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </div>
  );
};

export default Layout;
