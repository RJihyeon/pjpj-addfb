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
  return (
    <div>
      <Wrapper>
        <Container>
          <Info>내 정보</Info>
          <Set>
            <Title>아이디</Title>
            <Input type="text" value="데이터 값 들어가야함!! 수정필요"></Input>
          </Set>
          <PwSet>
            <PwTitle>비밀번호</PwTitle>
            <PwInput type="text" value="데이터 값 들어가야함!! 수정필요"></PwInput>
          <PwChanger>변경</PwChanger>

          </PwSet>

          <Set>
            <Title>이름</Title>
            <Input type="text" value="데이터 값 들어가야함!! 수정필요"></Input>
          </Set>
          <Set>
            <Title>학번</Title>
            <Input type="text" value="데이터 값 들어가야함!! 수정필요"></Input>
          </Set>
          <Set>
            <Title>이메일</Title>
            <Input type="text" value="데이터 값 들어가야함!! 수정필요"></Input>
          </Set>
          <Set>
            <Title>휴대전화</Title>
            <Input type="text" value="데이터 값 들어가야함!! 수정필요"></Input>
          </Set>
          <Set>
            <Title>
              소속 단위/
              <br />
              동아리 이름
            </Title>
            <Input type="text" value="데이터 값 들어가야함!! 수정필요"></Input>
          </Set>
          <Set>
            <Title>분과</Title>
            <Input type="text" value="데이터 값 들어가야함!! 수정필요"></Input>
          </Set>

          <Button>저장하기</Button>
        </Container>
      </Wrapper>
    </div>
  );
}

export default InfoComponent;
