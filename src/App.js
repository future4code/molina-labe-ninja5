import React from "react";
import HelpIcon from "@material-ui/icons/Help";
import Home from "./pages/Home";
import Contract from "./pages/Contract";
import CreateJob from "./componets/NewJob/CreateJob";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Header from "./componets/Header/Header";
import JobDetailPage from "./pages/JobDetailPage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: gray;
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }

  input {
    width: 300px;
    margin-bottom: 12px;
    border-radius: 10px;
  }

  select {
    width: 308px;
    margin-bottom: 12px;
  }
`;
export default class App extends React.Component {
  state = {
    currentScreen: "home",
    jobDetail: "",
    cart: []
  };

  toHome = () => {
    this.setState({ currentScreen: "home" });
  };

  goToDetailPage = (jobId) => {
    this.setState({ currentScreen: "detail", jobDetailId: jobId });
  };

  toCreateJob = () => {
    this.setState({ currentScreen: "createJob" });
  };

  toContract = () => {
    this.setState({ currentScreen: "contract" });
  };

  toShoppingCart = (job) => {
    const newCart = [...this.state.cart, job];
    this.setState({ cart: newCart });
    alert(`O serviço ${job.title} foi adicionado ao carrinho`);
  };

  removeFromCart = (id) => {
    const canDelete = window.confirm("Remover este produto?");
    if (canDelete) {
      const newCart = this.state.cart.filter((cartItem) => {
        return cartItem.id !== id;
      });
      this.setState({ cart: newCart });
    }
  };

  clearCart = () => {
    this.setState({ cart: [] });
    alert("Agradecemos a preferencia!");
  };

  choiceScreen = () => {
    switch (this.state.currentScreen) {
      case "home":
        return (
          <Home toCreateJob={this.toCreateJob} toContract={this.toContract} />
        );
      case "createJob":
        return (
          <CreateJob
            toHome={this.toHome}
            toContract={this.toContract}
            toShoppingCart={this.toShoppingCart}
          />
        );
      case "contract":
        return (
          <Contract
            toHome={this.toHome}
            toShoppingCart={this.toShoppingCart}
            toCreateJob={this.toCreateJob}
          />
        );
      case "shoppingCartPage":
        return (
          <ShoppingCartPage
            toHome={this.toHome}
            toCreateService={this.toCreateJob}
          />
        );
      case "detail":
        return <JobDetailPage toHome={this.toHome} />;
      default:
        return (
          <div>
            {" "}
            Error! <HelpIcon className="icon" />{" "}
          </div>
        );
    }
  };
  render() {
    return (
      <div className="App">
        <div>
          <GlobalStyle />
          <Header toHome={this.toHome} />
          {this.choiceScreen()}
        </div>
      </div>
    );
  }
}
