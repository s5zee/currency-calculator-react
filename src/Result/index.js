import { Container } from "./styled"

const Result = ({ resultElement }) => (
  resultElement.map(({ id, content }) =>
    <Container
      key={id}
    >
      Kwota w PLN:
      <span>{typeof content === "number" ? content.toFixed(2) : content}</span>
    </Container>)
);
export default Result;