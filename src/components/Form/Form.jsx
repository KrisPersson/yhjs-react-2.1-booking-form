
import "./Form.css"

function Form() {

    return (
        <form action="#">
            <section class='form__klass'>
                <label class='label-radio' htmlFor="">
                    <input class='form__radio' type="radio" name="klass" id="klass-1" />
                    <p>1:a klass</p>
                </label>
                <label class='label-radio' htmlFor="">
                    <input class='form__radio' type="radio" name="klass" id="klass-2" />
                    <p>2:a klass</p>
                </label>       
            </section>
            <label class='label-short' htmlFor="">
                Antal biljetter
                <select name="amt-tickets" id="amt-tickets">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4+</option>
                </select>
            </label>
            <label class='label-short' htmlFor="">
                Titel
                <select name="titel" id="titel">
                    <option value="-">-</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Mr">Mr</option>
                </select>
            </label>
            <label htmlFor="">
                Förnamn
                <input id='first-name' type="text" placeholder='Ditt förnamn' required />
            </label>
            <label htmlFor="">
                Efternamn
                <input id='last-name' type="text" placeholder='Ditt efternamn' required />
            </label>
            <label class='accept-terms' htmlFor="">
                <input type="checkbox" name="accept" id="accept" />
                Godkänner villkoren
            </label>
            <button>Boka biljetter</button>
        </form>
    )
}

export default Form