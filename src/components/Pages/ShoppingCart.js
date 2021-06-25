import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
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

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <MyButton onClick={this.props.toHome}>
          <HomeIcon className="icon" />
          Home
        </MyButton>
        <MyButton onClick={this.props.toCreateService}>
          <WorkIcon className="icon" />
          Create Service
        </MyButton>
        <MyButton onClick={this.props.toContract}>
          <FolderSpecialIcon className="icon" />
          Contract
        </MyButton>
        <h2> Shopping Cart </h2>
        <MyButton>
          <ShoppingCartIcon className="icon" />
        </MyButton>
        <h3>Hello it's in the Cart:</h3>
      </div>
    );
  }
}
