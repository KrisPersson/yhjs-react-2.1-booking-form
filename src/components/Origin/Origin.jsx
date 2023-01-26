import "./Origin.css"

function Origin({ time, endPoint }) {

    return (
        <article className="travel-end-point travel-end-point__origin">
            <h2>{ endPoint }</h2>
            <p>{ time }</p>
            <img className="arrow" src="/arrow.png" />
        </article>
    )
}

export default Origin