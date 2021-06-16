import { styled } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${(props) => props.theme.spacing(7)};
`;

export const ProfissionaisPaper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(7)};
  margin: 0 120px ${(props) => props.theme.spacing(10)};
  ${(props) => props.theme.breakpoints.down("md")} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }
`;

export const ProfissionaisContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;

  ${(props) => props.theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${(props) => props.theme.spacing(6)};
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    margin-left: ${(props) => props.theme.spacing(-2)};
    margin-right: ${(props) => props.theme.spacing(-2)};
    > :nth-of-type(odd) {
      background-color: ${(props) => props.theme.palette.background.paper};
    }
  }
`;

export const ModalWelcome = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 24px;
  background-color: ${(props) => props.theme.palette.primary.main};
  min-width: 400px;
  height: auto;
  @media (max-width: 600px) {
    min-width: 300px;
  }
  span {
    width: 100%;
    text-align: right;
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-right: 50px;
    padding-top: 5px;
    cursor: pointer;
  }
  h1,
  p {
    margin: 0;
  }
  h1 {
    border-bottom: 1px solid grey;
    width: 100%;
    padding: 25px 0;
    padding-top: 0;
    color: white;
    font-size: 46px;
    @media (max-width: 600px) {
      font-size: 22px;
    }
  }
  div {
    background-color: white;
    width: 100%;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    padding: 30px 0;
    padding-bottom: 50px;
    font-size: 22px;
    color: #353535;
    font-weight: bold;

    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
`;
