import { useState } from "react";
import { isRouteErrorResponse, useNavigate } from "react-router-dom";
import {
  Set,
  Title,
  Input,
  Button,
  IdCheck,
  Wrapper,
  Container,
  Info,
  IdTitle,
  IdInput,
  IdSet,
  Comments,
  Privacy,
} from "./SignupComponent.style";
import axios from "axios";

function SignupComponent() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwcheck, setPwcheck] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [division, setDivision] = useState("");
  const [idChecked, setIdChecked] = useState(false);

  //서버에 보내기
  const register = () => {
    // 각 필드의 데이터가 비어있는지 확인
    if (
      !id ||
      !pw ||
      !pwcheck ||
      !name ||
      !number ||
      !email ||
      !phone ||
      !affiliation ||
      !division
    ) {
      alert("항목을 모두 입력해주세요.");
      return;
    }
    //개인정보 수집 동의 안했으면 return
    if (!agreePrivacy) {
      alert("개인 정보 수집 및 이용에 동의해주세요.");
      return;
    }

    // 아이디 영어 , (한국어 막기)+숫자나 특수문자는 자유
    const idRegex = /^[A-Za-z\d!@#$%^&*()_+]+$/;
    if (!idRegex.test(id)) {
      alert("아이디는 영어,숫자,특수문자만으로 이뤄져야합니다.");
      return;
    }
    //아이디 중복확인 여부 확인하고 안했으면 거르기
    if (!idChecked) {
      alert("아이디 중복확인을 해주세요.");
      return;
    }

    // 비밀번호 영어 숫자포함 8자 이상
    const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!pwRegex.test(pw)) {
      alert("비밀번호는 영어와 숫자를 포함하여 8자 이상으로 설정해주세요.");
      return;
    }

    axios
      .post("/signup", {
        id: id,
        password: pw,
        phone_num: phone,
        student_id: number,
        name: name,
        affiliation: affiliation,
        division: division,
        email: email,
      })
      .then((response) => {
        // Handle success.
        //회원가입 성공했으면 login 페이지로 라우팅
        alert("회원가입 성공. 로그인을 진행해주세요.");
        navigate("/login");
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  //아이디 중복확인
  const checkDuplicateId = () => {
    // 중복 확인을 위한 서버 요청
    axios
      .post("/checkDuplicateId", { id: id })
      .then((response) => {
        // 서버 응답에 따라 팝업 표시
        if (response) {
          alert("이미 존재하는 ID입니다.");
        } else {
          alert("사용 가능한 ID입니다.");
          setIdChecked(true);
        }
      })
      .catch((error) => {
        // 서버 통신 중 에러 발생한 경우
        console.error("서버 통신 오류:", error);
        // 추가적인 에러 처리
      });
  };

  //개인정보 이용동의 여부 확인
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  return (
    <div>
      <Wrapper>
        <Container>
          <Info>
            회원가입
            <br />
            <Comments>회원가입을 위해 정보를 입력해주세요.</Comments>
          </Info>
          <IdSet>
            <IdTitle>아이디</IdTitle>
            <IdInput
              type="text"
              value={id}
              onChange={(event) => setId(event.target.value)}
            ></IdInput>
            <IdCheck onClick={checkDuplicateId}>중복확인</IdCheck>
          </IdSet>
          <Set>
            <Title>비밀번호</Title>
            <Input
              type="password"
              value={pw}
              onChange={(event) => setPw(event.target.value)}
              placeholder="영어, 숫자 포함하여 8자 이상으로 입력"
            ></Input>
          </Set>
          <Set>
            <Title>비밀번호 확인</Title>
            <Input
              type="text"
              value={pwcheck}
              onChange={(event) => setPwcheck(event.target.value)}
            ></Input>
          </Set>

          <Set>
            <Title>이름</Title>
            <Input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></Input>
          </Set>
          <Set>
            <Title>학번</Title>
            <Input
              type="text"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            ></Input>
          </Set>
          <Set>
            <Title>이메일</Title>
            <Input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></Input>
          </Set>
          <Set>
            <Title>휴대전화</Title>
            <Input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            ></Input>
          </Set>
          <Set>
            <Title>
              소속 단위/
              <br />
              동아리 이름
            </Title>
            <Input
              type="text"
              placeholder="예: 중앙동아리/싸울아비"
              value={affiliation}
              onChange={(event) => setAffiliation(event.target.value)}
            ></Input>
          </Set>

          <Set>
            <Title>분과</Title>
            <Input
              type="text"
              placeholder="예: 공연예술분과"
              value={division}
              onChange={(event) => setDivision(event.target.value)}
            ></Input>
          </Set>

          <Privacy>
            <input
              type="checkbox"
              checked={agreePrivacy}
              onChange={() => setAgreePrivacy(!agreePrivacy)}
            />
            <label for="myCheckbox"> 개인 정보 수집 및 이용 동의</label>
          </Privacy>

          <Button
            onClick={() => {
              register();
            }}
          >
            회원가입
          </Button>
        </Container>
      </Wrapper>
    </div>
  );
}

export default SignupComponent;
