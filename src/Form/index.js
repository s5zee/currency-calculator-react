import { useState } from "react";
import Button from "../Button";
import Label from "../Label"
import { Header, Paragraph, Field } from "./styled";

const Form = ({ calculateResult }) => {
  const [amountValue, setAmountValue] = useState("");
  const [currency, setCurrency] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amountValue, currency);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Header>Kalkulator walutowy</Header>
      <Paragraph>
        <Label title="Wybierz waluty:" />
        <Field as="select"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          <option value="" />
          <option value="5.44">Funt-Złoty</option>
          <option value="4.72">Euro-Złoty</option>
          <option value="4.88">Frank Szwajcarski-Złoty</option>
        </Field>
      </Paragraph>
      <Paragraph>
        <Label title="Kwota:" />
        <Field
          value={amountValue}
          required type="number"
          min="0.01"
          step="0.01"
          onChange={({ target }) => setAmountValue(target.value)}
        />
      </Paragraph>
      <Button title={"Oblicz wartość"} />
    </form>
  )
};
export default Form;