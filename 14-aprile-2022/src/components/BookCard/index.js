import "./styles.css";

export const BookCard = ({ title, description, img }) => (

    <div className="BookCard__container">
        <img className="BookCard__img" alt={title} src={img} />

        <div className="BookCard__info">
            <h2 className="BookCard__title">{title}</h2>
            <p className="BookCard__description">{description}</p>
        </div>

        <a className="BookCard__btn" href="https://edgemony.com/" target="_blank" rel="noreferrer">Add to cart</a>

    </div>

);