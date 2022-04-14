import "./styles.css";

export const BookCard = ({ title, description, img }) => (

    <div className="BookCard__container">
        <h2>{title}</h2>
        <img alt={title} src={img} />
        <p>{description}</p>
    </div>

);