import Form from "./Form";
import Container from "./Container";
import { useState } from "react";
import Result from "./Result";
import Clock from "./Clock";


function App() {
  const [resultElement, setResultElement] = useState([
    { id: 1, content: "N/A" },
  ]);

  const calculateResult =
    (amountValue, initialCurrency, secondaryCurrency) => {
      setResultElement(resultElement.map(result => {
        return {
          ...result, content: amountValue *
            initialCurrency / secondaryCurrency
        }
      }));
    };

  return (
    <Container
      date={<Clock />}
      body={
        <Form
          calculateResult={calculateResult}
        />
      }
      extraContent={
        <Result
          resultElement={resultElement}
        />
      }
    />
  );
}
export default App;