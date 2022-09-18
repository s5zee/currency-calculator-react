import "./style.css";

const Container = ({body, extraContent}) => (
    <main className="container">
        {body}
        {extraContent}
    </main>
);

export default Container;