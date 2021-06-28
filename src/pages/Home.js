import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { MyButton } from "../componets/styled";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <MyButton>
          <HomeIcon className="icon" />
          Home
        </MyButton>
        <Container>
          <h3>Benvindo(a) ao LabeNinja!</h3>
          <MyButton onClick={this.props.toCreateJob}>
            <WorkOutlineIcon className="icon" />
            Criar Serviço
          </MyButton>
          <MyButton onClick={this.props.toContract}>
            <WorkIcon className="icon" />
            Contratar Serviço
          </MyButton>
        </Container>
      </div>
    );
  }
}
