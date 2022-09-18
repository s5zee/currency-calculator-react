import Form from "./Form";
import Container from "./Container";
import { useState } from "react";
import Result from "./Result";


function App() {
  const [resultElement, setResultElement] = useState([
    { id: 1, content: "N/A" },
  ]);

  const calculateResult = (amountValue, currency) => {
    if (currency === "") {
      return;
    };
    setResultElement(resultElement.map(result => {
      return { ...result, content: amountValue * currency }
    }));
  };

  return (
    <Container
      body={
        <Form
          calculateResult={calculateResult}
          resultElement={resultElement}
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