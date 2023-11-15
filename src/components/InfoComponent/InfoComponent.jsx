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

function InfoComponent({ isLoggedIn }) {
  // 사용자 정보를 담을 상태 정의
  const [userData, setUserData] = useState({
    id: "",
    password: "", // 서버에서는 패스워드를 전송하지 않아야 함.
    name: "",
    student_id: "",
    email: "",
    phone_num: "",
    affiliation: "",
    division: "",
  });

  // 서버에서 데이터를 받아와서 상태 업데이트
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!isLoggedIn) {
          // 사용자가 로그인하지 않았으면 여기서 처리
          return;
        }

        const response = await fetch("/get_user_info", {
          method: "GET",
          // headers: {
          //   Authorization: `Bearer ${yourAuthToken}`, // yourAuthToken 대신 실제 토큰 사용
          // },
        });

        if (!response.ok) {
          console.error(
            "사용자 데이터를 불러오는 중 오류 발생:",
            response.statusText
          );
          return;
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("사용자 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchUserData();
  }, [isLoggedIn]); // isLoggedin이 변경될 때마다 실행

  // 사용자 정보를 서버에 저장하는 함수
  const saveUserData = async () => {
    try {
      const response = await fetch("/save_user_info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${yourAuthToken}`, // 필요한 경우에만 추가
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        window.alert(`사용자 데이터를 저장하는 중 오류 발생: ${errorMessage}`);
        return;
      }

      window.alert("수정되었습니다.");
    } catch (error) {
      window.alert(`사용자 데이터를 저장하는 중 오류 발생: ${error.message}`);
    }
  };

  return (
    <div>
      <Wrapper>
        <Container>
          <Info>내 정보</Info>
          <Set>
            <Title>아이디</Title>
            <Input
              type="text"
              value={userData.id}
              onChange={(e) => setUserData({ ...userData, id: e.target.value })}
            />
          </Set>
          <PwSet>
            <PwTitle>비밀번호</PwTitle>
            <PwInput
              type="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <PwChanger>변경</PwChanger>
          </PwSet>
          <Set>
            <Title>이름</Title>
            <Input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </Set>
          <Set>
            <Title>학번</Title>
            <Input
              type="text"
              value={userData.student_id}
              onChange={(e) =>
                setUserData({ ...userData, student_id: e.target.value })
              }
            />
          </Set>
          <Set>
            <Title>이메일</Title>
            <Input
              type="text"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Set>
          <Set>
            <Title>휴대전화</Title>
            <Input
              type="text"
              value={userData.phone_num}
              onChange={(e) =>
                setUserData({ ...userData, phone_num: e.target.value })
              }
            />
          </Set>
          <Set>
            <Title>
              소속 단위/
              <br />
              동아리 이름
            </Title>
            <Input
              type="text"
              value={userData.affiliation}
              onChange={(e) =>
                setUserData({ ...userData, affiliation: e.target.value })
              }
            />
          </Set>
          <Set>
            <Title>분과</Title>
            <Input
              type="text"
              value={userData.division}
              onChange={(e) =>
                setUserData({ ...userData, division: e.target.value })
              }
            />
          </Set>

          <Button>저장하기</Button>
        </Container>
      </Wrapper>
    </div>
  );
}

export default InfoComponent;
