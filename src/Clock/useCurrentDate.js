import { useState, useEffect } from "react";


export const useCurrentDate = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() =>
      setDateTime(new Date()), 1000);
    return () => (
      clearInterval(intervalID)
    )
  }, []);

  return dateTime;
}