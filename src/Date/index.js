import { Span } from "./styled"
import { useCurrentDate } from "./useCurrentDate";

const DateTime = () => {
  const date = useCurrentDate()

  return (
    <Span>
      Dzisiaj jest {date}
    </Span>
  )
}
export default DateTime;

