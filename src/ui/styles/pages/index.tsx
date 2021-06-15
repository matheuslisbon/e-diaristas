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
