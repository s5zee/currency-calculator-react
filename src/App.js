import Form from "./Form";
import Container from "./Container";
import Clock from "./Clock";


function App() {
  return (
    <Container
      date={<Clock />}
      body={<Form />}
    />
  );
};
export default App;