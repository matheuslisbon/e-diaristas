import { useMemo, useState } from "react";
import { UserShortInterface } from "../../@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export default function UseIndex() {
  const [cep, setCep] = useState("");
  const [erro, setErro] = useState("");
  const [buscaFeita, setBuscaFeita] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [diaristas, setDiaristas] = useState([] as UserShortInterface[]);
  const [diaristasRestantes, setDiaristasRestantes] = useState(0);

  const cepValido = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]);

  async function buscarProfissional(cep) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setErro("CEP não econtrado");
      setCarregando(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissional,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  };
}
