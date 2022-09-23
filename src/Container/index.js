import "./style.css";

const Container = ({body, extraContent, date}) => (
    <main className="container">
        {date}
        {body}
        {extraContent}
    </main>
);

export default Container;