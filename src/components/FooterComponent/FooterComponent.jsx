// Footer.jsx

import React from "react";
import {
  FooterWrapper,
  HorizontalDivider,
  VerticalDivider,
  FlexContainer,
  ColumnContainer,
  Text,
} from "./FooterComponent.style"; // 스타일 컴포넌트를 가져옵니다.

function FooterComponent() {
  return (
    <FooterWrapper>
      {/* 첫 번째 구분선 */}
      <HorizontalDivider />

      {/* Flex Container */}
      <FlexContainer>
        <Text>개인정보보호정책</Text>
        <Text>이용약관</Text>
        <Text>이메일수집거부</Text>
      </FlexContainer>

      {/* 두 번째 구분선 */}
      <HorizontalDivider />

      {/* Column Container */}
      <ColumnContainer>
        <Text>문의 : dongari@yonsei.ac.kr</Text>
        <Text>연세대학교 : 서울특별시 서대문구 연세로 50</Text>
        <Text>
          Copyright (C)2020 연세대학교 동아리연합회 All rights reserved.
        </Text>
      </ColumnContainer>
    </FooterWrapper>
  );
}

export default FooterComponent;
