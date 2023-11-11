import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #1c1c1c;
  height: 140vh;
  padding-top: 0px;
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vh;
`;

const Set = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 70vh;
`;

const Title = styled.p`
  color: #9b9b9b;
  font-size: 15px;
  font-weight: 600;
`;

const Input = styled.input`
  color: #fff;
  background-color: rgb(217, 217, 217, 0.05);
  border: 2px solid #141414;
  width: 350px;
  padding-left: 15px;
  height: 40px;
`;

const Button = styled.button`
  background-color: rgba(78, 85, 149, 0.3);
  border: none;
  width: 350px;
  height: 50px;
  font-weight: 500px;
  margin-top: 10px;
  color: #fff;
  font-size: 18px;
`;

const IdCheck = styled.button`
  background-color: #1e1e1e;
  border: 2px solid #141414;
  color: #9b9b9b;
  font-weight: 500;
`;

const Info = styled.p`
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

const IdTitle = styled.p`
  color: #9b9b9b;
  font-size: 15px;
  font-weight: 600;
  padding-right: 0px;
  margin-right: 0px;
  margin-left: 105px;
`;

const IdInput = styled.input`
  color: #fff;
  background-color: rgb(217, 217, 217, 0.05);
  border: 2px solid #141414;
  width: 355px;
  margin-left: 40px;
  padding-left: 10px;
  height: 40px;
`;

const IdSet = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100vh;
`;

const Comments = styled.p`
  color: #9b9b9b;
  font-size: 14px;
  font-weight: 500;
  line-height : normal : 
text-align : center;


`;
const Privacy = styled.div`
  color: #9b9b9b;
  font-size: 13px;
  margin-bottom: 0px;
`;


export {
  Info,
  Set,
  Title,
  Input,
  Button,
  IdCheck,
  Wrapper,
  Container,
  IdTitle,
  IdInput,
  IdSet,
  Comments,
  Privacy,

};
