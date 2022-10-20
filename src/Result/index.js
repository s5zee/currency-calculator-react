import { Container } from "./styled";

const Result = ({ result }) => (
  <Container>
    {result.InputAmount} {""}
    {result.initialCurrency} = {""}
    {typeof result.calculatedAmount === "number" ?
      result.calculatedAmount.toFixed(2) :
      result.calculatedAmount} {""}
    {result.secondaryCurrency}
  </Container>
);
export default Result;