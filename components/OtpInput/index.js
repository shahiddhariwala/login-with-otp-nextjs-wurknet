import { useState } from "react";
import styles from "../../styles/OtpInput.module.css";

const OtpInput = ({setOtpHandler, otpInput}) =>{

    const [localOtpState,setLocalOtpState] = useState(otpInput.split(""));

    const otpChangeHandler = (event) => {
        let currentVal = event.target.value;
        setLocalOtpState(val =>{
                const currentIndex = event.target.getAttribute("data-index-number");
                let tempVal = val;
                tempVal[currentIndex] = currentVal;
                if(!tempVal.join("").includes("#")){
                    setOtpHandler(tempVal.join(""));
                }
                if(currentVal.length === 1 && currentIndex < 3){
                    document.getElementById(`otpInput${Number(currentIndex)+1}`).focus()
                }

                return tempVal;
            })
    }

    return (
        <>
            <div className={styles.otpContainer}>
                {localOtpState.map((val,index) => {
                    return (
                        <input key={`otpInput${index}`} id={`otpInput${index}`} maxLength={1} data-index-number={index} onChange={(event) => otpChangeHandler(event)} autoComplete="off"/>
                    )
                })}
            </div>
        </>
    )
}

export default OtpInput;