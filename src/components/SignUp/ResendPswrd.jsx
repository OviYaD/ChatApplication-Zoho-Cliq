import React, { useState, useRef, useEffect } from 'react'


const ResendPswrd = ({setValidity,isValid}) => {
	const Ref = useRef(null);
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

	const onClickReset = () => {
        setValidity(true);
		clearTimer(getDeadTime());
        setEnable((enable)=>!enable)
        setTimeout(()=>setEnable(true),61000)
	}

	return (
		<>
        {enable?<span onClick={onClickReset} className="resendotp">Resend OTP</span>
        :<span className="resendotp nonclickelem" >Resend in <span>{timer}</span>s</span>}
		</>
	)
}

export default ResendPswrd;
