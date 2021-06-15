import React from "react";
import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
} from "./styles";

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

export const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={props.picture} />
      <UserName>{props.name}</UserName>
      <RatingStyled readOnly value={props.rating} />
      <UserDescription>{props.description}</UserDescription>
    </UserInformationContainer>
  );
};
