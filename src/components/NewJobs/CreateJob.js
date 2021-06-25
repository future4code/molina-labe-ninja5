import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardJob = styled.div`
  border: 1px solid black;
  background-color:black;
  color:yellow;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 600px;
  display: grid;
  
  //justify-content: space-between;
`;
const CardList = styled.div`
  border: 1px solid black;
  background-color:black;
  color:black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 // background-color:black;
`;
const Button = styled.button`
   background-color:black;
   border: 1px solid black;
  border-radius: 10px;
  padding: 1px;
  margin:1px;
  //display: grid;
  flex-direction: column;
  justify-content: space-between;
  
`
const CardMap = styled.div`
   background-color:#ffea00;
   border: 5px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  width: 200px;
  display: flex;
  flex-direction: column;
 justify-content: space-between;
  
`
const H2= styled.div`
  color: yellow;
  
`
const CardInput = styled.div`
  background-color:black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  
`
const url = "https://labeninjas.herokuapp.com/jobs";
const headers = {
  headers: {
    Authorization: "328e52fd-c2e4-4e3d-8eda-1497a41c008b"
  }
};

export default class createJob extends React.Component {
  state = {
    job: [],
    title: "",
    description: "",
    price: "",
    paymentMethods: "",
    dueDate: ""
  };
  componentDidMount() {
    this.getJobs();
  }

  onChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  };
  onChangeDescription = (event) => {
    this.setState({
      description: event.target.value
    });
  };
  onChangePrice = (event) => {
    this.setState({
      price: event.target.value
    });
  };
  onChangePayMethod = (event) => {
    this.setState({
      paymentMethods: event.target.value
    });
  };
  onChangeDueDate = (event) => {
    this.setState({
      dueDate: event.target.value
    });
  };
  createJob = () => {
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: [this.state.paymentMethods],
      dueDate: this.state.dueDate
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Job foi criado com sucesso!");
        console.log(res);
        this.setState({
          title: "",
          description: "",
          price: "",
          paymentMethods: "",
          dueDate: ""
        });
      })
      .catch((err) => {
        alert("err");
        console.log(err.response.data.message);
      });
  };
  getJobs = () => {
    axios
      .get(url, headers)
      .then((res) => {
        console.log(res.data.jobs);
        this.setState({
          job: res.data.jobs
        });
      })
      .catch((err) => {
        alert("Nenhum job adicionado!");
        console.log(err.response.data.message);
      });
  };
  render() {
    return (
      <div>
        <CardJob>
          <h1>Criar Serviço</h1>
          <CardInput>
          <input
            placeholder={"Título"}
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
          <input
            placeholder={"Descrição"}
            value={this.state.description}
            onChange={this.onChangeDescription}
          />

          <input
            type="Number"
            placeholder={"Preço"}
            value={this.state.price}
            onChange={this.onChangePrice}
          />
          <label>Tipo de pagamento:</label>
          <select
            placeholder={"Tipo de pagamento"}
            value={this.state.paymentMethods}
            onChange={this.onChangePayMethod}
          >
            <option value="cartao-credito">Cartão de crédito</option>
            <option value="cartao-debito">Cartão de débito</option>
            <option value="boleto-bancario">Boleto bancário</option>
            <option value="paypal">Paypal</option>
            <option value="pix">Pix</option>
          </select>
          <input
            type="date"
            placeholder="Prazo (AAAA-MM-DD)"
            value={this.state.dueDate}
            onChange={this.onChangeDueDate}
          />
          </CardInput>
          <button onClick={this.createJob}>Criar job</button>
        </CardJob>
        <CardList>
          <div>
            <H2>Serviços Cadastrados</H2>
            {this.state.job.map((jobs) => {
              return (
                <CardMap key={jobs.id}>
                <p>
                  {""}
                  {jobs.title}
                 
                </p>
                </CardMap>
              );
            })}
          </div>
        </CardList>
      </div>
    );
  }
}

//<button onClick={() => this.delJobs(jobs.id)}>X</button>