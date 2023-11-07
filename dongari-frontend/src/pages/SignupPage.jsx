import HeaderComponent from "../components/HeadComponent/HeadComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import SignupComponent from "../components/SignupComponent/SignupComponent";

function SignupPage() {
  return (
    <div>
      <HeaderComponent headerText="회원가입" bannerText="회원가입" />
      <SignupComponent />
      <FooterComponent />
    </div>
  );
}

export default SignupPage;
