import "./Destination.css"

function Destination(props) {

    const { time, endPoint } = props

    return (
        <article className="travel-end-point travel-end-point__destination">
            <h2>{ endPoint }</h2>
            <p>{ time }</p>
        </article>
    )
}

export default Destination