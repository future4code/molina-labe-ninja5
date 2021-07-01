import React from "react";
import { HeaderStyled } from "./styled";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Logo from "../assets/ninja-logo-design.jpg";

const Header = (props) => {
  return (
    <HeaderStyled>
      <h2>
        LabeNinja <WidgetsIcon className="icon" />
      </h2>
      <div>
        <img src={Logo} width="100px" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
