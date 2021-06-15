import { styled } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${(props) => props.theme.palette.grey[50]};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.grey[100]};
  }
`;
