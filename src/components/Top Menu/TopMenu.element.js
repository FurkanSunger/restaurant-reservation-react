import styled from "styled-components";

export const TopMenuWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
`;

export const LocationInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
