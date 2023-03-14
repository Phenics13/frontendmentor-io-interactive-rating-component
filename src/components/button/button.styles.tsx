import styled from "styled-components";

export const BaseButton = styled.button`
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: hsl(0, 0%, 100%);
  background-color: orange;
  border: none;
  border-radius: 15px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: orange;
    background-color: hsl(0, 0%, 100%);
  }
`;

export const ButtonText = styled.span`
  text-transform: uppercase;
  font-family: "Overpass", sans-serif;
`;

export const ButtonRadio = styled(BaseButton)`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  color: hsl(217, 12%, 63%);
  background-color: #272e38;

  &:hover {
    color: hsl(0, 0%, 100%);
    background-color: orange;
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
