import { styled } from "@material-ui/core/styles";
import { Avatar, Rating } from "@material-ui/core";

export const UserInformationContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";

  background-color: ${(props) => props.theme.palette.grey[50]};
  padding: ${(props) => props.theme.spacing(3)};
  gap: ${(props) => props.theme.spacing(0.5)} + " " +
    ${(props) => props.theme.spacing(2)};
  align-items: center;
`;

export const UserName = styled("div")`
  grid-area: name;
  font-weight: bold;
  color: ${(props) => props.theme.palette.text.primary};
  font-size: ${(props) => props.theme.typography.body2.fontSize};
`;

export const UserDescription = styled("div")`
  grid-area: description;
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: ${(props) => props.theme.typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

export const RatingStyled = styled(Rating)`
  grid-area: rating;
  font-size: 14px;
`;
