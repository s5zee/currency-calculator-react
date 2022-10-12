import { useState } from "react";
import Button from "../Button";
import Label from "../Label"
import { Header, Paragraph, Field } from "./styled";

const Form = ({ calculateResult }) => {
  const [amountValue, setAmountValue] = useState("");
  const [initialCurrency, setinitialCurrency] = useState("");
  const [secondaryCurrency, setSecondaryCurrency] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amountValue, initialCurrency, secondaryCurrency);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Header>Kalkulator walutowy</Header>
      <Paragraph>
        <Label title="Mam:" />
        <Field as="select"
          value={initialCurrency}
          onChange={({ target }) => setinitialCurrency(target.value)}
        >
          <option value="" />
          <option value="1">Złoty</option>
          <option value="5.44">Funt</option>
          <option value="4.72">Euro</option>
          <option value="4.88">Frank Szwajcarski</option>
        </Field>
      </Paragraph>
      <Paragraph>
        <Label title="Kwota do przeliczenia:" />
        <Field
          value={amountValue}
          required type="number"
          min="0.01"
          step="0.01"
          onChange={({ target }) => setAmountValue(target.value)}
        />
      </Paragraph>
      <Paragraph>
        <Label title="Chcę otrzymać" />
        <Field as="select"
          value={secondaryCurrency}
          onChange={({ target }) => setSecondaryCurrency(target.value)}
        >
          <option value="" />
          <option value="1">Złoty</option>
          <option value="5.44">Funt</option>
          <option value="4.72">Euro</option>
          <option value="4.88">Frank Szwajcarski</option>
        </Field>
      </Paragraph>
      <Button title={"Oblicz wartość"} />
    </form>
  )
};
export default Form;