import "./style.css";
import { useState, useEffect } from "react";

const DateTime = () => {
 const [dateTime, setDateTime] = useState(new Date());

 useEffect(() => {
  const intervalID = setInterval(() =>
   setDateTime(new Date()), 1000);
  return () => (
   clearInterval(intervalID)
  )
 }, []);

 return (
  <span className="fullDate">
   Dzisiaj jest {`${dateTime.toLocaleDateString
    ("pl",
     { weekday: "long", day: "numeric", month: "long" })},
      ${dateTime.toLocaleTimeString()}`}
  </span>
 )
}
export default DateTime;

