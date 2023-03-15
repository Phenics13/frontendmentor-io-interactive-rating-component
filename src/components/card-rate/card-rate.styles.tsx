import styled from "styled-components";

export const Form = styled.form`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StarContainer = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: hsl(213, 19%, 18%);

  @media screen and (max-width: 425px) {
    width: 40px;
    height: 40px;
  }
`;

export const Star = styled.img`
  width: 17px;
  height: min-content;
`;

export const CardContent = styled.div``;

export const CardTitle = styled.h1``;

export const CardParagraph = styled.p``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
