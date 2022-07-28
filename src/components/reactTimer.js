import { useEffect, useRef, useState } from "react";


const ReactTimer = () => {
  const timeValue = 190;
  const [timer, setTimer] = useState(timeValue); // 25 minutes
  const [start, setStart] = useState(false);
  const [btnStart, setBtnStart] = useState(false);
  const [btnPause, setBtnPause] = useState(true);
  const [btnReset, setBtnReset] = useState(true);
  const firstStart = useRef(true);
  const tick = useRef();

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }
    if (start) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      clearInterval(tick.current);
    }
    return () => clearInterval(tick.current);
  }, [start]);
  const startTime = () => {
    setStart(true);
    setBtnStart(true);
    setBtnPause(false);
    setBtnReset(false);
  };
  const stopTime = () => {
    setStart(false);
    setBtnStart(false);
    setBtnPause(true);
    setBtnReset(false);
  };

  const resetTime = () => {
    setTimer(timeValue);
    setStart(false);
    setBtnStart(false);
    setBtnPause(true);
    setBtnReset(true);
  };
  const dispSecondsAsMins = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const seconds_ = seconds % 60;
    return mins.toString() + ":" + (seconds_ == 0 ? "00" : seconds_.toString());
  };

  return (
    <div className="pomView">
      <h1>{dispSecondsAsMins(timer)}</h1>
      <div className="startDiv">
        <button disabled={btnStart} className="startBut" onClick={startTime}>
          START
        </button>
        <button disabled={btnPause} onClick={stopTime}>
          STOP
        </button>
        <button disabled={btnReset} onClick={resetTime}>
          {" "}
          Reset
        </button>
        {/* {start && <AiFillFastForward className="ff" onClick="" />} */}
      </div>
    </div>
  );
};

export default ReactTimer;
