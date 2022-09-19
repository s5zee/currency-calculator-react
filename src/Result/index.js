import "./style.css";

const Result = ({ resultElement }) => (
  resultElement.map(({ id, content }) =>
    <div
      className="block"
      key={id}
    >
      Kwota w PLN:
      <span>{typeof content === "number" ? content.toFixed(2) : content}</span>
    </div>)
);
export default Result;