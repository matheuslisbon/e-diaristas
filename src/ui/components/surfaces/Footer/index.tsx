import React from "react";
import { FooterStyled, FooterContainer, FooterTitle, AppList } from "./styles";
import { Typography, Box } from "@material-ui/core";
export const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem Somos</FooterTitle>

          <Typography variant={"body2"} sx={{ marginTop: "16px" }}>
            E-Diarista te ajuda a encontrar um professional perfeito para
            realizar a limpeza da sua casa. Garantimos a melhor professional com
            total segurança e praticidade! São milhares de clientes satisfeitos
            por todo país.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos aplicativos </FooterTitle>
          <AppList>
            <li>
              <a
                href="https://matheus-dev.vercel.app"
                rel={"noopener noreferrer"}
              >
                <img src="img/logos/app-store.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://matheus-dev.vercel.app"
                rel={"noopener noreferrer"}
              >
                <img src="img/logos/google-play.png" alt="" />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};
