import { useContext } from "react";

import { CurrentNumberContext } from "../../context/current-number.context";

import { CardContainer } from "./card.styles";

import CardRate from "../card-rate/card-rate.component";
import CardThanks from "../card-thanks/card-thanks.component";
import { motion } from "framer-motion";

function Card() {
  const { submit } = useContext(CurrentNumberContext);

  return (
    <CardContainer
      as={motion.div}
      initial={{ rotate: 180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
    >
      {submit ? <CardThanks /> : <CardRate />}
    </CardContainer>
  );
}

export default Card;
