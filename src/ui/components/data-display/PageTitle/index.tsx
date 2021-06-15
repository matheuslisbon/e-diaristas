import React from "react";
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./styles";

type PageTitleProps = {
  title: string;
  subtitle: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};
