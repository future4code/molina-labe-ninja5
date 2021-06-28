import React from "react";
import ShoppingCart from "../componets/ShoppingCart/ShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import { MyButton } from "../componets/styled";

export default class ShoppingCartPage extends React.Component {
  render() {
    const cartComponets = this.props.cart.map((item) => {
      return (
        <ShoppingCart
          key={item.id}
          title={item.title}
          price={item.price}
          id={item.id}
          removeFromCart={this.props.removeFromCart}
        />
      );
    });

    let totalPrice = 0;

    this.props.cart.forEach((item) => {
      totalPrice += item.price;
    });
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
        {cartComponets.length > 0 ? (
          <div>
            {cartComponets}
            <span>Total: R${totalPrice.toFixed(2)}</span>
            <button onClick={() => this.props.clearCart()}>
              Concluir Compra
            </button>
            <button onClick={() => this.props.changePage("list")}>
              Volta para Lista
            </button>
          </div>
        ) : (
          <h1>Carrinho Vazio</h1>
        )}
      </div>
    );
  }
}
