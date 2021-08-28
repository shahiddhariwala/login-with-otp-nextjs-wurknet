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
                <input maxLength={1} data-index-number={0} onChange={(event) => otpChangeHandler(event)} />
                <input maxLength={1} data-index-number={1} onChange={(event) => otpChangeHandler(event)} />
                <input maxLength={1} data-index-number={2} onChange={(event) => otpChangeHandler(event)} />
                <input maxLength={1} data-index-number={3} onChange={(event) => otpChangeHandler(event)} />
            </div>
        </>
    )
}

export default OtpInput;