import { css } from 'emotion';

const header = css`
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const offlineView = css`
  text-align: center;
  margin-top: 100px;
  font-size: 24px;
`;

const contentWrapper = css`
  width: 90%;
  margin: 0 auto;
  position: relative;
`;

const refreshButton = (isOnline: boolean) => css`
  position: absolute;
  top: 0;
  right: 0;
  color: #FFF;
  padding: 5px 20px;
  border-radius: 3px;
  ${isOnline ? `
    cursor: pointer;
    background-color: #4CAF50;
  `: `
    cursor: no-drop;
    opacity: 0.5;
    background-color: #F44336;
  `}
`;

export default {
  header,
  contentWrapper,
  refreshButton,
  offlineView
};