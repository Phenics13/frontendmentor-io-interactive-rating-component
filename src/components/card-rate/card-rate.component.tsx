import { useContext, FormEvent, MouseEvent } from "react";

import { CurrentNumberContext } from "../../context/current-number.context";

import {
  Form,
  StarContainer,
  Star,
  CardContent,
  CardTitle,
  CardParagraph,
  ButtonsContainer,
} from "./card-rate.styles";
import starLogo from "../../assets/icon-star.svg";

import Button, { BUTTON_TYPES } from "../button/button.component";

const CardRate = () => {
  const { currentNumber, setCurrentNumber, setSubmit } =
    useContext(CurrentNumberContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!currentNumber) return;
    setSubmit(true);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const btn = event.target as HTMLElement;
    setCurrentNumber(parseInt(btn.innerText));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StarContainer>
        <Star className="star" src={starLogo} alt="starLogo" />
      </StarContainer>
      <CardContent>
        <CardTitle>How did we do?</CardTitle>
        <CardParagraph>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </CardParagraph>
      </CardContent>
      <ButtonsContainer>
        {[1, 2, 3, 4, 5].map((number) => (
          <Button
            buttonType={
              number === currentNumber
                ? BUTTON_TYPES.radio_active
                : BUTTON_TYPES.radio
            }
            onClick={handleClick}
            type="button"
            key={number}
          >
            {number}
          </Button>
        ))}
      </ButtonsContainer>
      <Button>Submit</Button>
    </Form>
  );
};

export default CardRate;
