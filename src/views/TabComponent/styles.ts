import { css } from 'emotion';

const cardsWrapper = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: 560px) {
    justify-content: space-around;
  }
`;

const loaderWrapper = css`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

export default {
  cardsWrapper,
  loaderWrapper
};