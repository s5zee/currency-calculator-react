import { useState, useEffect } from "react";
import { Span } from "./styled"

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
    <Span>
      Dzisiaj jest {dateString}, {timeString}
    </Span>
  )
}
export default DateTime;

