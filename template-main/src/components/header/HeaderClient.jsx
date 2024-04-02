import React from "react";
import PropTypes from "prop-types";
import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";

HeaderClient.propTypes = {};

function HeaderClient(props) {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderClient;
