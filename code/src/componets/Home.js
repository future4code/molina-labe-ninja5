import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import WorkIcon from "@material-ui/icons/Work";
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

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <MyButton onClick={this.props.toContract}>
          <FolderSpecialIcon className="icon" />
          Contract
        </MyButton>
        <MyButton onClick={this.props.toCreateService}>
          <WorkIcon className="icon" />
          Create Service
        </MyButton>
        <MyButton onClick={this.props.toShoppingCart}>
          <ShoppingCartIcon className="icon" />
          Shopping Cart
        </MyButton>
        <h1>Home</h1>
        <MyButton>
          <HomeIcon className="icon" />
        </MyButton>
        <h3>Hello, Home!</h3>
      </div>
    );
  }
}
