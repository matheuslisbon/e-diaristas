import { styled } from "@material-ui/core/styles";

export const PageTitleContainer = styled("div")`
  margin: ${(props) => props.theme.spacing(5) + " " + 0};
  text-align: center;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${(props) => props.theme.palette.primary.main};
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: 600;

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${(props) => props.theme.typography.body1.fontSize};
  }
`;
export const PageSubtitleStyled = styled("h3")`
  margin: ${(props) => props.theme.spacing(1.5) + " " + "0"};
  color: ${(props) => props.theme.palette.text.primary};

  font-size: ${(props) => props.theme.typography.body1.fontSize};
  font-weight: normal;

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${(props) => props.theme.typography.body2.fontSize};
  }
`;
