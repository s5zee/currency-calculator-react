import { useState } from "react";
import Button from "../Button";
import "./style.css";
import Label from "../Label"

const Form = ({calculateResult}) => {
  const [amountValue, setAmountValue] = useState("");
  const [currency, setCurrency] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amountValue, currency);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h1 className="form__header">Kalkulator walutowy</h1>
      <p className="form__paragraph">
        <Label title="Wybierz waluty:" />
        <select
          className="form__field"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          <option value="" />
          <option value="5.44">Funt-Złoty</option>
          <option value="4.72">Euro-Złoty</option>
          <option value="4.88">Frank Szwajcarski-Złoty</option>
        </select>
      </p>
      <p className="form__paragraph">
        <Label title="Kwota:" />
        <input
          value={amountValue}
          className="form__field js-amount"
          required type="number"
          min="0.01"
          step="0.01"
          onChange={({ target }) => setAmountValue(target.value)}
        />
      </p>
      <Button title={"Oblicz wartość"} />
    </form>
  )
};
export default Form;