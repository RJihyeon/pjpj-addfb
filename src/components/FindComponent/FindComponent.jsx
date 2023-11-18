import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

//요기는 백이랑 상의할게 변수명 확인, ! 잘돌아가는지 시험도 해봐야됨..

const TabMenu = styled.ul`
  color: rgb(232, 234, 237);
  display: flex;

  padding-left: 0px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0px;
`;

const Submenu = styled.li`
  display: flex;
  width: 250px;
  padding: 10px;
  margin-left: 0px;
  justify-content: center;
  font-size: 15px;
  align-items: center;
  height: 30px;

  &.focused {
    background-color: #4e55954d; /* 선택된 탭 색상 */
  }

  &:not(.focused) {
    background-color: #141414; /* 선택되지 않은 탭 색상 */
  }
`;
const Desc = styled.div`
  text-align: center;
  border-radius: 10px;
  border: 1px solid #9b9b9b;
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
`;

const FindComponent = () => {
  const [currentTab, clickTab] = React.useState(0);

  const menuArr = [
    { name: "아이디 찾기", content: "아이디 찾기 내용" },
    { name: "비밀번호 찾기", content: "로그인 찾기 내용" },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  //이름, 학번, 이메일, 아이디
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const findId = async () => {
    try {
      const response = await axios.post("/findInfo", {
        name: name,
        student_id: number,
      });

      // Assuming the response contains the user's information
      const userInfo = response.data;

      if (userInfo) {
        // json에서 보낸 string을 팝업으로 띄우는 거 같음 !
        alert(JSON.stringify(userInfo, null, 2));
      } else {
        // Handle case where no matching information is found
        alert("일치하는 정보의 ID가 없습니다.");
      }
    } catch (error) {
      // Handle error
      console.error("An error occurred:", error.response);
    }
  };

  const findPw = async () => {
    try {
      const response = await axios.post("/findPw", {
        name: name,
        student_id: number,
        id: id,
        email: email,
      });

      // 일치하는 데이터가 있는가?
      const emailSent = response.data;
      //있으면 이메일 발송
      if (emailSent) {
        // Display success message in a popup
        alert("이메일이 발송되었습니다.");
      } else {
        // Handle case where no matching information is found or email sending failed
        alert("일치하는 정보가 없거나 이메일 발송에 실패했습니다.");
      }
    } catch (error) {
      // Handle error
      console.error("An error occurred:", error.response);
    }
  };

  return (
    <div>
      <TabMenu>
        {menuArr.map((el, index) => (
          <Submenu
            key={index}
            className={index === currentTab ? "focused" : ""}
            onClick={() => selectMenuHandler(index)}
          >
            {el.name}
          </Submenu>
        ))}
      </TabMenu>
      <Desc>
        {/* content 내용 수정 */}
        {currentTab === 0 && (
          <>
            <div className="find-set">
              <p className="find-explain">이름</p>
              <input
                className="find-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{" "}
            </div>
            <div className="find-set">
              <p className="find-explain">학번</p>
              <input
                className="find-input"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />{" "}
            </div>

            <button className="find-button" onClick={findId}>
              찾기
            </button>
          </>
        )}
        {currentTab === 1 && (
          <>
            <div className="find-set">
              <p className="find-explain">이름</p>
              <input
                className="find-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{" "}
            </div>
            <div className="find-set">
              <p className="find-explain"> 학번</p>
              <input
                className="find-input"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />{" "}
            </div>
            <div className="find-set">
              <p className="find-explain">아이디</p>
              <input
                className="find-input"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />{" "}
            </div>{" "}
            <div className="find-set">
              <p className="find-explain">이메일</p>
              <input
                className="find-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
            </div>
            <button className="find-button" onClick={findPw}>
              찾기
            </button>
          </>
        )}
      </Desc>
    </div>
  );
};

export default FindComponent;
