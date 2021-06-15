import Head from "next/head";
import React from "react";

import { PageTitle } from "ui/components/data-display/PageTitle/index";
import { UserInformation } from "ui/components/data-display/UserInformation";
import { SafeEnvironment } from "../ui/components/feedback/SafeEnvironment";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index";
import TextFieldMask from "../ui/components/Inputs/TextFieldMask";
import UseIndex from "../data/hooks/pages/useIndex";

export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissional,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = UseIndex();

  return (
    <React.Fragment>
      {" "}
      <Container>
        <SafeEnvironment />
        <PageTitle
          title={"Conheça os profissionais"}
          subtitle={
            "Preencha seu endereço e veja todos os profissionais da sua localidade"
          }
        />
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant="outlined"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          {erro && <Typography color={"error"}>{erro}</Typography>}

          <Button
            variant={"contained"}
            color="secondary"
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissional(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>

        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((diarista, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={diarista.nome_completo}
                      picture={diarista.foto_usuario}
                      rating={diarista.reputacao}
                      description={diarista.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {diaristasRestantes} profissionais
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diarista disponivel em sua região
            </Typography>
          ))}
      </Container>
    </React.Fragment>
  );
}
