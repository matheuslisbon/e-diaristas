import { styled } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

export const FooterStyled = styled("footer")`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  padding: ${(props) => props.theme.spacing(4)} 0;
  margin-top: auto;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing(2)};
  flex-wrap: wrap;
  ${(props) => props.theme.breakpoints.down("md")} {
    gap: ${(props) => props.theme.spacing(5)};
  }
`;

export const AppList = styled("ul")`
  display: flex;
  list-style: none;
  padding: 0;
  gap: ${(props) => props.theme.spacing()};
  img {
    width: 122px;
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body2"} {...props} />
))`
  font-weight: bold;
`;
