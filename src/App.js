import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import { publicRoutes } from "./routes/index";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      error: null,
      loading: false,
      redirect: false,
      isAuthenticated: false,
      isLoading: false,
    };
  }
  render() {
    return (
      <>
        <Routes>
          {publicRoutes.map((item, index) => {
            const Page = item.component;
            return <Route path={item.path} key={index} element={<DefaultLayout><Page /></DefaultLayout>} />;
          })}

          {/* <Route path="user" element={<UserRoute />} /> */}
        </Routes>
      </>
    );
  }
}
