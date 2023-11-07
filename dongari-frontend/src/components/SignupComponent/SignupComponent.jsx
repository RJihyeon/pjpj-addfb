import { useState } from "react";
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
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwcheck, setPwcheck] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [division, setDivision] = useState("");

  //서버에 코드 보내기
  const register = () => {
    axios
      .post("/signup", {
        id: id,
        password: pw,
        phone_num: phone,
        student_id: number,
        name: name,
        affiliation: affiliation,
        division: division,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

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
            <IdCheck>중복확인</IdCheck>
          </IdSet>
          <Set>
            <Title>비밀번호</Title>
            <Input
              type="text"
              value={pw}
              onChange={(event) => setPw(event.target.value)}
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
            <input type="checkbox" />
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
