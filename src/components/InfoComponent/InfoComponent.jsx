import React, { useState, useEffect } from "react";
import {
  Set,
  Title,
  Input,
  Button,
  PwChanger,
  Wrapper,
  Container,
  Info,
  PwTitle,
  PwInput,
  PwSet,
} from "./InfoComponent.style";

function InfoComponent() {
  // 사용자 정보를 담을 상태 정의
  const [userData, setUserData] = useState({
    id: "",
    password: "", // 서버에서는 패스워드를 전송하지 않아야 함.
    phone_num: "",
    student_id: "",
    name: "",
    affiliation: "",
    division: "",
  });

  // 서버에서 데이터를 받아와서 상태 업데이트
  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/userdata"); // 서버에 사용자 정보를 요청하는 API 엔드포인트
      const data = await response.json();

      // 서버에서 받아온 데이터를 상태로 업데이트
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // 컴포넌트가 마운트되면 사용자 데이터를 받아옴
  useEffect(() => {
    fetchUserData();
  }, []); // 빈 배열을 전달하면 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      <Wrapper>
        <Container>
          <Info>내 정보</Info>
          <Set>
            <Title>아이디</Title>
            <Input type="text" value={userData.id} readOnly />
          </Set>
          <PwSet>
            <PwTitle>비밀번호</PwTitle>
            <PwInput type="password" value={userData.password} readOnly />
            <PwChanger>변경</PwChanger>
          </PwSet>
          <Set>
            <Title>이름</Title>
            <Input type="text" value={userData.name} readOnly />
          </Set>
          <Set>
            <Title>학번</Title>
            <Input type="text" value={userData.student_id} readOnly />
          </Set>
          <Set>
            <Title>이메일</Title>
            <Input type="text" value={userData.email} readOnly />
          </Set>
          <Set>
            <Title>휴대전화</Title>
            <Input type="text" value={userData.phone_num} readOnly />
          </Set>
          <Set>
            <Title>
              소속 단위/
              <br />
              동아리 이름
            </Title>
            <Input type="text" value={userData.affiliation} readOnly />
          </Set>
          <Set>
            <Title>분과</Title>
            <Input type="text" value={userData.division} readOnly />
          </Set>

          <Button>저장하기</Button>
        </Container>
      </Wrapper>
    </div>
  );
}

export default InfoComponent;
