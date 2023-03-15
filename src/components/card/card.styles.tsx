import styled from "styled-components";

export const CardContainer = styled.div`
  height: 100%;
  max-width: 410px;
  max-height: 425px;
  margin: 0 22px;

  display: flex;
  align-items: center;

  padding: 35px;
  border-radius: 28px;
  background: linear-gradient(
    180deg,
    rgba(101, 119, 139, 0.2) 0%,
    rgba(57, 73, 96, 0.2) 100%
  );

  @media screen and (max-width: 425px) {
    max-height: 360px;
    padding: 25px;
  }
`;
