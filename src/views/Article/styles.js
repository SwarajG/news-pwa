import { css } from 'emotion';

const newsWrapper = css`
  width: 90%;
  margin: 40px auto;
  position: relative;
`;

const backbutton = css`
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  font-size: 24px;
`;

const contentWrapper = css`
  padding-top: 40px;
  display: flex;
  @media (max-width: 560px) {
    flex-wrap: wrap;
  }
`;

const imageWrapper = css`
  width: 30%;
  min-width: 30%;
  @media (max-width: 560px) {
    width: 100%;
    min-width: 100%;
  }
`;

const imageClass = css`
  width: 100%;
  height: auto;
`;

const infoWrapper = css`
  margin-left: 40px;
`;

const titleText = css`
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 10px;
`;

const description = css`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 16px;
`;

const author = css`
  margin-bottom: 5px;
`;

const readMore = css`
  cursor: pointer;
  &:hover {
    color: #2196F3;
  }
`;

const date = css``;

export default {
  newsWrapper,
  backbutton,
  imageClass,
  contentWrapper,
  infoWrapper,
  titleText,
  description,
  author,
  date,
  readMore,
  imageWrapper
};