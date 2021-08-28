import { useState } from "react";
import styles from "../../styles/LoginCard.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import flags from "country-flag-icons/react/3x2";
import { useRouter } from 'next/router';
import Loader from "../Loader";
import OtpInput from "../OtpInput";
import "react-phone-number-input/style.css";
{
  /* import "react-phone-number-input/style.css" is not UI Library its just for Country Flag Icons for Mobile Input 
 All the required styling is inside /styles/LoginCard.module.css */
}

const RenderIf = (props) => {
  return props.condition && props.children ? props.children : null;
};

const MyButton = ({isValid,onClickHandler,buttonText, showLoader}) => {
 return (<button
    disabled={!isValid}
    className={
        isValid
        ? styles.sendOtpButtonValid
        : styles.sendOtpButton
    }
    onClick={onClickHandler}
  >
    <RenderIf condition={!showLoader}>{buttonText}</RenderIf>
    <RenderIf condition={showLoader}>
      <Loader />
    </RenderIf>
  </button>)
}


const LoginCard = (props) => {
  const router = useRouter()
  const [mobileNumber, setMobileNumber] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showEnterOtpScreen, setShowEnterOtpScreen] = useState(false);
  const [otpInput,setOtpInput] = useState("");

  const onClickSendOtpHandler = () => {
    // Impression of API Call
    loaderCallback(() => {
        setShowEnterOtpScreen(true);
        window.alert(`Please enter OTP sent to your mobile: ${mobileNumber}`);
    })
  };

  const resendOtpHandler = () =>{
    loaderCallback(() => {
      window.alert("OTP resend success!");
    })
  }

  const loaderCallback = callback => {
    setShowLoader((val) => {
        setTimeout(() => {
          setShowLoader(false);
          callback();
        }, 1000);
        return true;
    });
  }

  const verifyOtp = () => {
      if(isValidOtp(otpInput)){
        loaderCallback(() =>{
            router.push('/login-success')
        })
      }
      else{
          window.alert(`Not a valid OTP: ${otpInput}`);
      }
  }

  const isValidOtp = (otp) => {
    return otp && otp.includes("1111");
  }

  const isValidNumber = (number) => {
    if(typeof number === "string")
    return isValidPhoneNumber(number);

    return false;
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.loginTitle}>Login with Mobile Number</div>
        <RenderIf condition={!showEnterOtpScreen}>
          <div className={styles.numberBox}>
            <div className={styles.enterMobileText}>
              Please enter your mobile number
            </div>

            <PhoneInput
              flags={flags}
              value={mobileNumber}
              defaultCountry="IN"
              className={styles.mobileNumberInputField}
              onChange={setMobileNumber}
              placeholder="e.g 9975061158"
            />
          </div>
           <MyButton isValid={isValidNumber(mobileNumber)} onClickHandler={onClickSendOtpHandler} showLoader={showLoader} buttonText="Send OTP"/>
          <div className={styles.loginWithPassword}>
            or <span>Login with Password</span>
          </div>
        </RenderIf>
        <RenderIf condition={showEnterOtpScreen}>
            <OtpInput setOtpHandler={setOtpInput}/>
            <MyButton isValid={otpInput.length === 4} onClickHandler={verifyOtp} showLoader={showLoader} buttonText="Verify OTP"/>
            <div className={styles.afterEnterNumberOptions}>
                <div onClick={resendOtpHandler}>Resend OTP</div>
                <div onClick={()=> setShowEnterOtpScreen(false)}>Reset Number</div>
            </div>
        </RenderIf>
      </div>
    </>
  );
};

export default LoginCard;
