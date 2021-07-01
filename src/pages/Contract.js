import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import CreateJob from "../componets/NewJob/CreateJob";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { MyButton } from "../componets/styled";
import { BASE_URL, headers } from "../constants/urls";
import axios from "axios";
import styled from "styled-components";

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 32px 24px 0 24px;
`;
export default class Contract extends React.Component {
  state = {
    jobsList: [],
    filteredJobsList: [],
    minVal: "",
    maxVal: "",
    search: "",
    order: ""
  };

  componentDidMount() {
    this.getJobs();
    this.filterJobs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.minVal !== prevState.minVal ||
      this.state.maxVal !== prevState.maxVal ||
      this.state.search !== prevState.search ||
      this.state.order !== prevState.order
    ) {
      this.filterJobs();
    }
  }

  handleMinVal = (e) => {
    this.setState({ minVal: e.target.value });
  };

  handleMaxVal = (e) => {
    this.setState({ maxVal: e.target.value });
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleOrder = (e) => {
    this.setState({ order: e.target.value });
  };

  getJobs = () => {
    axios
      .get(`${BASE_URL}/jobs`, headers)
      .then((res) => {
        this.setState({
          jobsList: res.data.jobs,
          filteredJobsList: res.data.jobs
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  filterJobs = () => {
    const maximum = this.state.maxVal ? Number(this.state.maxVal) : Infinity;
    const minimum = this.state.minVal ? Number(this.state.minVal) : -Infinity;

    const newJobsList = this.state.jobsList
      .filter((job) => job.price >= minimum)
      .filter((job) => job.price <= maximum)
      .filter((job) => {
        const jobTitle = job.title.toLowerCase();
        const jobDescription = job.description.toLowerCase();
        const searchText = this.state.search.toLocaleLowerCase();
        return (
          jobTitle.includes(searchText) || jobDescription.includes(searchText)
        );
      })
      .sort((a, b) => {
        switch (this.state.order) {
          case "Menor Valor":
            return a.price - b.price;
          case "Maior Valor":
            return b.price - a.price;
          case "Título":
            return a.title.localeCompare(b.title);
          case "Prazo":
            return a.dueDate.localeCompare(b.dueDate);
        }
      });
    this.setState({ filteredJobsList: newJobsList });
  };
  render() {
    const jobComponents = this.state.filteredJobsList.map((job) => {
      return (
        <CreateJob
          key={job.id}
          job={job}
          goToDetailPage={this.props.goToDetailPage}
          toShoppingCart={this.props.toShoppingCart}
        />
      );
    });
    return (
      <div>
        <MyButton onClick={this.props.toHome}>
          <HomeIcon className="icon" />
          Home
        </MyButton>
        <MyButton onClick={this.props.toCreateJob}>
          <WorkOutlineIcon className="icon" />
          Criar Serviço
        </MyButton>
        <MyButton onClick={this.props.toShoppingCart}>
          <ShoppingCartIcon className="icon" />
          Shopping Cart
        </MyButton>
        <h1>Contratar Serviços</h1>
        <div>
          <h2>Serviços Cadastrados</h2>
          <FiltersContainer>
            <input
              value={this.state.minVal}
              onChange={this.handleMinVal}
              placeholder="Valor Mínimo"
            />
            <input
              value={this.state.maxVal}
              onChange={this.handleMaxVal}
              placeholder="Valor Máximo"
            />
            <input
              value={this.state.search}
              onChange={this.handleSearch}
              placeholder="Busca por título ou descrição"
            />
            <select value={this.state.order} onChange={this.handleOrder}>
              <option>Sem Ordenação</option>
              <option>Menor Valor</option>
              <option>Maior Valor</option>
              <option>Título</option>
              <option>Prazo</option>
            </select>
          </FiltersContainer>
        </div>
      </div>
    );
  }
}
