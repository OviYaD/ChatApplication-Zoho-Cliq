import React, { useState, useRef, useEffect } from 'react'
import { emailOtp } from '../../api/authentication/user';

const ResendOtp = ({email}) => {
	const Ref = useRef(null);
	const [isValid,setValidity] = useState(true);
	const [timer, setTimer] = useState('00');
    const [enable,setEnable] = useState(false);


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		return {
			total, seconds
		};
	}


	const startTimer = (e) => {
		let { total,  seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			setTimer(
				(seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (e) => {

		setTimer('60');
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();
		deadline.setSeconds(deadline.getSeconds() + 60);
		return deadline;
	}
	useEffect(() => {
        clearTimer(getDeadTime());
        setTimeout(()=>setEnable(true),61000)
        if(!isValid)
        {
            setEnable(true)
        }
        else{
            setEnable(false)
        }

	}, [isValid]);

	const onClickReset = async() => {
        setValidity(true);
		clearTimer(getDeadTime());
        setEnable((enable)=>!enable)
		await emailOtp({email});
        setTimeout(()=>setEnable(true),61000)
	}

	return (
		<>
        {enable?<span onClick={onClickReset} className="bluetext_action bluetext_action_right">Resend OTP</span>
        :<span className="bluetext_action bluetext_action_right  nonclickelem" id="blueforgotpassword"  style={{color:"#626262"}}>Resend in {timer}s</span>}
		</>
	
		)
}

export default ResendOtp;
