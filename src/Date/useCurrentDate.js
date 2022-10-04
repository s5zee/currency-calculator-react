import { useState, useEffect } from "react";


export const useCurrentDate = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const date = dateTime.toLocaleString(undefined,
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })

  useEffect(() => {
    const intervalID = setInterval(() =>
      setDateTime(new Date()), 1000);
    return () => (
      clearInterval(intervalID)
    )
  }, []);

  return date
}