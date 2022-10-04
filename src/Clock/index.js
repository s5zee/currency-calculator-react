import { StyledDateTime } from "./styled";
import { useCurrentDate } from "./useCurrentDate"

const formatDate = (dateTime) => 
  dateTime.toLocaleString(undefined,
   {
     weekday: "long",
     day: "numeric",
     month: "long",
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit"
   });


const Clock = () => {
  const dateTime = useCurrentDate();

  return (
    <StyledDateTime>
      Dzisiaj jest {formatDate(dateTime)}
    </StyledDateTime>
  )
};
export default Clock;

