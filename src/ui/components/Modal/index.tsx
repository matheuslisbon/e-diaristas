import React, { ReactNode } from "react";
import { Container } from "./styles";
type Props = {
  children: ReactNode;
  onClose: () => void;
};

export const ModalComp: React.FC<Props> = ({ children, onClose }) => {
  return <Container onClick={() => onClose()}>{children}</Container>;
};
