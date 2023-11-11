import HeaderComponent from "../components/HeadComponent/HeadComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import SignupComponent from "../components/SignupComponent/SignupComponent";
import NavComponent from "../components/NavComponent/NavComponent";

function SignupPage() {
  return (
    <div>
      <NavComponent headerText="회원가입" bannerText="회원가입" />
      <SignupComponent />
      <FooterComponent />
    </div>
  );
}

export default SignupPage;
