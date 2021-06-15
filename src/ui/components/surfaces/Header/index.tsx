import React from "react";
import { HeaderBarApp, HeaderLogo } from "./styles";
import { Container, Toolbar } from "@material-ui/core";

export const Header: React.FC = () => {
  return (
    <HeaderBarApp position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"img/logos/logo.svg"} alt={"logo"} />
      </Toolbar>
    </HeaderBarApp>
  );
};
