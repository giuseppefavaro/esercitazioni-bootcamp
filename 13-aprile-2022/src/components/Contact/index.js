import "./style.css";


export const Contact = () => {
    return (
        <div className="contact">
            <h2>Contatti</h2>
            <form>
                <label for="oggetto">Oggetto: </label>
                <input type="text" name="oggetto" id="oggetto" />

                <label for="messaggio">Messaggio: </label>
                <textarea name="messaggio" id="messaggio"></textarea>
            </form>
        </div>
    );
};