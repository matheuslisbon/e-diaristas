import { Container } from "@material-ui/core";
import React from "react";
import { SafeEnvironmentContainer } from "./styles";

export const SafeEnvironment: React.FC = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro
        <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
};
