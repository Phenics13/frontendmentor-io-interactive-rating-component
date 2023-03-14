import { useContext } from "react";

import { CurrentNumberContext } from "../../context/current-number.context";

import { CardContainer } from "./card.styles";

import CardRate from "../card-rate/card-rate.component";
import CardThanks from "../card-thanks/card-thanks.component";

function Card() {
  const { submit } = useContext(CurrentNumberContext);
  return (
    <CardContainer>{submit ? <CardThanks /> : <CardRate />}</CardContainer>
  );
}

export default Card;
