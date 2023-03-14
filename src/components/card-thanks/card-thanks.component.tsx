import { useContext } from "react";
import { CurrentNumberContext } from "../../context/current-number.context";

import {
  ThanksContainer,
  ThanksImage,
  ThanksTitle,
  ThanksParagraph,
  SelectedNumberContainer,
  SelectedNumber,
} from "./card-thanks.styles";

import thanksLogo from "../../assets/illustration-thank-you.svg";

const CardThanks = () => {
  const { currentNumber } = useContext(CurrentNumberContext);
  return (
    <ThanksContainer>
      <ThanksImage src={thanksLogo} alt="thanksLogo" />
      <SelectedNumberContainer>
        <SelectedNumber>{`You selected ${currentNumber} out of 5`}</SelectedNumber>
      </SelectedNumberContainer>
      <ThanksTitle>Thank you!</ThanksTitle>
      <ThanksParagraph>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </ThanksParagraph>
    </ThanksContainer>
  );
};

export default CardThanks;
