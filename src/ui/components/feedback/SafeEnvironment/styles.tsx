import { styled } from "@material-ui/core/styles";

export const SafeEnvironmentContainer = styled("div")`
  color: ${(props) => props.theme.palette.text.secondary};
  text-align: right;
  padding: ${(props) => props.theme.spacing(2)} 0;
  font-size: 12px;
`;
