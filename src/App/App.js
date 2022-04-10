import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import Login from "./pages/login";
import Layout from "./components/layout";
import Account from "./pages/account";
import "./App.scss";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/user" element={<Account />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
