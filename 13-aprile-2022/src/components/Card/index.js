import "./style.css"


export const Card = (props) => {
    return (
        <div className="card">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
    );
};

