import { useState } from "react";
import Button from "../Button";
import Label from "../Label";
import Result from "../Result";
import { Header, Paragraph, Field, Container, Span } from "./styled";
import { useApiData } from "./useApiData";

const Form = () => {
  const [amountValue, setAmountValue] = useState("");
  const [initialCurrency, setinitialCurrency] = useState("PLN");
  const [secondaryCurrency, setSecondaryCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const { ratesData } = useApiData();

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amountValue, initialCurrency, secondaryCurrency, ratesData);
  };

  const calculateResult =
    (amountValue, initialCurrency, secondaryCurrency, ratesData) => {
      const initialSelectRate = ratesData.rates[initialCurrency];
      const secondarySelectRate = ratesData.rates[secondaryCurrency];
      setResult({
        inputAmount: amountValue,
        initialCurrency,
        calculatedAmount: amountValue * initialSelectRate / secondarySelectRate,
        secondaryCurrency
      });
    };

  return (
    <form onSubmit={onFormSubmit}>
      <Header>Kalkulator walutowy</Header>
      {ratesData.state === "loading" ? (
        <Span>Trwa ładowanie proszę czekać.</Span>) :
        (ratesData.state === "error") ?
          (<Span>Uwaga wystąpił błąd,
            sprawdź swoje połączenie internetowe
            lub spróbuj ponownie za chwile.</Span>) :
          ratesData.state === "success" ? (
            <>
              <Paragraph>
                <Label title="Mam:" />
                <Field as="select"
                  value={initialCurrency}
                  onChange={({ target }) => setinitialCurrency(target.value)}
                >
                  {Object.keys(ratesData.rates).map((rate) => (
                    <option key={rate} value={rate}>{rate}</option>
                  ))}
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
                  {Object.keys(ratesData.rates).map(rate => (
                    <option key={rate} value={rate}>{rate}</option>
                  ))}
                </Field>
              </Paragraph>
              <Button title={"Oblicz wartość"} />
              <Container>
                Kursy walut pobierane są z ECB (European central bank)
              </Container>
              <Container>aktualne na dzień: <b>{ratesData.date}</b> </Container>
              <Result result={result} />
            </>
          )
            : null
      }
    </form>
  );
};
export default Form;