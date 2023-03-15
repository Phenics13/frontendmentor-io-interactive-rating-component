import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  padding: 15px 0;
  letter-spacing: 0.125em;

  display: flex;
  align-items: center;
  justify-content: center;

  color: hsl(0, 0%, 100%);
  background-color: hsl(25, 97%, 53%);

  border: none;
  border-radius: 22.5px;

  transition: all 0.2s ease-in-out;

  &:hover {
    color: hsl(25, 97%, 53%);
    background-color: hsl(0, 0%, 100%);
  }
`;

export const ButtonText = styled.span`
  text-transform: uppercase;
  font-family: "Overpass", sans-serif;
`;

export const ButtonRadio = styled(BaseButton)`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  font-size: 15px;
  font-weight: 700;

  color: hsl(217, 12%, 63%);
  background-color: hsl(213, 19%, 18%);

  span {
    position: relative;
    top: 2px;
    left: 1px;
  }

  &:hover {
    color: hsl(0, 0%, 100%);
    background-color: hsl(25, 97%, 53%);
  }

  @media screen and (max-width: 425px) {
    width: 40px;
    height: 40px;
  }
`;

export const ButtonRadioActive = styled(ButtonRadio)`
  color: hsl(0, 0%, 100%);
  background-color: hsl(217, 12%, 63%);

  &:hover {
    color: hsl(0, 0%, 100%);
    background-color: hsl(217, 12%, 63%);
  }
`;
