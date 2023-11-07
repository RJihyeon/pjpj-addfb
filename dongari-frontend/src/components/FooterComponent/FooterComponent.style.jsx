// FooterStyles.js

import styled from "styled-components";

const FooterWrapper = styled.div`
  margin-top: 0px;
  padding-top: 0px;
  background: #1c1c1c;
`;

const HorizontalDivider = styled.hr`
  margin-top: 0px;
  border: none;
  border-top: 1px solid #6e6e6e;
`;

const VerticalDivider = styled.div``;

const FlexContainer = styled.div`
  /* Flex Container 스타일 설정 */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 140px;
  padding-top: 15px;
`;

const Text = styled.p`
  padding-bottom: 0px;
  padding-top: 0px;
  margin-top: 0px;
  color: #6f6f6f;
  font-size: 13px;
  font-weight: 500;
`;

export {
  FooterWrapper,
  HorizontalDivider,
  VerticalDivider,
  FlexContainer,
  ColumnContainer,
  Text,
};
