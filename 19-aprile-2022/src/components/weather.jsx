const Weather = (props) => {

    const location = props.location || "seleziona una città";
    const temp = props.temp || 273.15;
    const status = props.status || "N/A";
    const img = props.img || "50n";

    const urlImg = `http://openweathermap.org/img/wn/${img}@4x.png`;

    const kelvinToCelcius = (kelvin) => Math.floor(kelvin - 273.15) + "°";


    return (
        <section className="card__weather">
                <img src={urlImg} alt={status} width="200" height="200" />
            <ul>
                <li><i className="fa-solid fa-location-dot"></i>{location}</li>
                <li><i className="fa-solid fa-temperature-full"></i>{kelvinToCelcius(temp)}</li>
                <li><i className="fa-solid fa-note-sticky"></i>{status}</li>
            </ul>
        </section>
    )
}

export { Weather }