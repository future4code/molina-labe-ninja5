import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const MyButton = styled(Button)({
  background: "yellow",
  border: 0,
  borderRadius: 10,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  padding: "12px",
  margin: "9px"
});

export default class CreateService extends React.Component {
  render() {
    return (
      <div>
        <MyButton onClick={this.props.toHome}>
          <HomeIcon className="icon" />
          Home
        </MyButton>
        <MyButton onClick={this.props.toContract}>
          <FolderSpecialIcon className="icon" />
          Contract
        </MyButton>
        <MyButton onClick={this.props.toShoppingCart}>
          <ShoppingCartIcon className="icon" />
          Shopping Cart
        </MyButton>
        <h1>Create Service</h1>
        <MyButton>
          <WorkIcon className="icon" />
        </MyButton>
        <h3>Hello, add service:</h3>
      </div>
    );
  }
}
