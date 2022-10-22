import { Container } from "./styled";

const Result = ({ result }) => {
  const { inputAmount, initialCurrency,
    calculatedAmount, secondaryCurrency } = result;

  const roundedCalculatedAmount =
    typeof calculatedAmount === "number" ?
      calculatedAmount.toFixed(2) :
      calculatedAmount;

  const formattedResult = result
  && `${inputAmount} 
  ${initialCurrency} = 
  ${roundedCalculatedAmount}
  ${secondaryCurrency}`;

  return (
    <Container>
      {formattedResult}
    </Container>
  );
};
export default Result;