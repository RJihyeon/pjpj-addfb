import HeaderComponent from "../components/HeadComponent/HeadComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavComponent from "../components/NavComponent/NavComponent";


function SetpwPage() {
  return (
    <div>
      <NavComponent headerText="비밀번호 재설정" bannerText="비밀번호 재설정" />
      <p></p>
      <button>비밀번호재설정</button>
      
    
      
      <FooterComponent/>

    </div>
  );
}

export default SetpwPage;
