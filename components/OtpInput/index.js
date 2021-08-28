import { useState } from "react";
import styles from "../../styles/OtpInput.module.css";

const OtpInput = ({setOtpHandler}) =>{

    const [localOtpState,setLocalOtpState] = useState(["#","#","#","#"]);

    const otpChangeHandler = (event) => {
        let currentVal = event.target.value;
        setLocalOtpState(val =>{
                const currentIndex = event.target.getAttribute("data-index-number");
                let tempVal = val;
                tempVal[currentIndex] = currentVal;
                if(!tempVal.join("").includes("#")){
                    setOtpHandler(tempVal.join(""));
                }
                return tempVal;
            })
    }

    return (
        <>
            <div className={styles.otpContainer}>
                {localOtpState.map((val,index) => {
                    return (
                        <input key={`otpInput${index}`} maxLength={1} data-index-number={index} onChange={(event) => otpChangeHandler(event)} autoComplete="off"/>
                    )
                })}
            </div>
        </>
    )
}

export default OtpInput;