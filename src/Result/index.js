import "./style.css";

const Result = ({ resultElement }) => (
  resultElement.map(result =>
    <div
      className="block"
      key={result.id}
    >
      Kwota w PLN:
      <span>{result.content}</span>
    </div>)
);
export default Result;