
import "./Form.css"


let formData = {
    klass: '',
    numTickets: '1',
    title: '',
    firstName: '',
    lastName: '',
    agreeTerms: false
}

function handleKlass(event) {
    const klass = event.target.value

    formData = {
        ...formData,
        klass: klass
    }
}

function handleNumTickets(event) {
    const numTickets = event.target.value

    formData = {
        ...formData,
        numTickets: numTickets
    }
}

function handleTitle(event) {
    const title = event.target.value

    formData = {
        ...formData,
        title: title
    }
}

function handleFirstName(event) {
    const firstName = event.target.value

    formData = {
        ...formData,
        firstName: firstName
    }
}

function handleLastName(event) {
    const lastName = event.target.value

    formData = {
        ...formData,
        lastName: lastName
    }
}

function handleAgreeTerms(event) {
    const agreeTerms = event.target.checked

    formData = {
        ...formData,
        agreeTerms: agreeTerms
    }

}

function handleBtnClick(event) {
    console.log(formData)
    event.preventDefault()
}



function Form() {

    return (
        <form action="#">
            <section className='form__klass'>
                <label className='label-radio' htmlFor="">
                    <input onClick={ handleKlass } className='form__radio' value="1" type="radio" name="klass" id="klass-1" />
                    <p>1:a klass</p>
                </label>
                <label className='label-radio' htmlFor="">
                    <input onClick={ handleKlass }  className='form__radio' value="2" type="radio" name="klass" id="klass-2" />
                    <p>2:a klass</p>
                </label>       
            </section>
            <label className='label-short' htmlFor="">
                Antal biljetter
                <select onChange={ handleNumTickets } name="amt-tickets" id="amt-tickets">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                </select>
            </label>
            <label className='label-short' htmlFor="">
                Titel
                <select onChange={ handleTitle } name="titel" id="titel">
                    <option value="-">-</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Mr">Mr</option>
                </select>
            </label>
            <label htmlFor="">
                Förnamn
                <input onChange={ handleFirstName } id='first-name' type="text" placeholder='Ditt förnamn' required />
            </label>
            <label htmlFor="">
                Efternamn
                <input onChange={ handleLastName }  id='last-name' type="text" placeholder='Ditt efternamn' required />
            </label>
            <label onChange={ handleAgreeTerms }  className='accept-terms' htmlFor="">
                <input type="checkbox" name="accept" id="accept" />
                Godkänner villkoren
            </label>
            <button onClick={ handleBtnClick }>Boka biljetter</button>
        </form>
    )
}

export default Form