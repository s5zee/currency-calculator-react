import "./style.css";
import { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const timeString = dateTime.toLocaleTimeString()
  const dateString = dateTime.toLocaleDateString(undefined,
    { weekday: "long", day: "numeric", month: "long" });

  useEffect(() => {
    const intervalID = setInterval(() =>
      setDateTime(new Date()), 1000);
    return () => (
      clearInterval(intervalID)
    )
  }, []);

  return (
    <span className="fullDate">
      Dzisiaj jest {dateString}, {timeString}
    </span>
  )
}
export default DateTime;

