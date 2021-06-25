import React from "react";
import WidgetsIcon from "@material-ui/icons/Widgets";
import HelpIcon from "@material-ui/icons/Help";
import Home from "./componets/Home";
import Contract from "./componets/Contract";
import CreateService from "./componets/CreateService";
import ShoppingCart from "./componets/ShoppingCart";
import styled from "styled-components";

const Background = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  padding: 100px;
  color: yellow;
`;
export default class App extends React.Component {
  state = {
    currentScreen: "home"
  };
  choiceScreen = () => {
    switch (this.state.currentScreen) {
      case "home":
        return (
          <Home
            toContract={this.toContract}
            toCreateService={this.toCreateService}
            toShoppingCart={this.toShoppingCart}
          />
        );
      case "contract":
        return (
          <Contract
            toHome={this.toHome}
            toCreateService={this.toCreateService}
            toShoppingCart={this.toShoppingCart}
          />
        );
      case "createService":
        return (
          <CreateService
            toHome={this.toHome}
            toContract={this.toContract}
            toShoppingCart={this.toShoppingCart}
          />
        );
      case "shoppingCart":
        return (
          <ShoppingCart
            toHome={this.toHome}
            toContract={this.toContract}
            toCreateService={this.toCreateService}
          />
        );
      default:
        return (
          <div>
            {" "}
            Error! <HelpIcon className="icon" />{" "}
          </div>
        );
    }
  };

  toHome = () => {
    this.setState({ currentScreen: "home" });
  };

  toContract = () => {
    this.setState({ currentScreen: "contract" });
  };

  toCreateService = () => {
    this.setState({ currentScreen: "createService" });
  };

  toShoppingCart = () => {
    this.setState({ currentScreen: "shoppingCart" });
  };

  render() {
    return (
      <div className="App">
        <Background>
          <div>
            <h1>
              GetNinja <WidgetsIcon className="icon" />
            </h1>
            {this.choiceScreen()}
          </div>
        </Background>
      </div>
    );
  }
}
