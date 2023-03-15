import styled from "styled-components";

export const ThanksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
`;

export const ThanksImage = styled.img`
  height: 108px;

  @media screen and (max-width: 425px) {
    height: 96px;
  }
`;

export const ThanksContent = styled.div``;

export const ThanksTitle = styled.h1``;

export const ThanksParagraph = styled.p``;

export const SelectedNumberContainer = styled.div`
  padding: 5px 15px;
  font-size: 15px;

  color: hsl(25, 97%, 53%);
  background-color: hsl(213, 19%, 18%);
  border-radius: 15px;
`;

export const SelectedNumber = styled.span`
  display: inline-block;
  margin-top: 4px;
`;
