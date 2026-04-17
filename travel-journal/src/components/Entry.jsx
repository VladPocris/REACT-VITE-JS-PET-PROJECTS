export default function Entry(props) {
    return (
        <article className="entry">
            <div className="entry-container">
                <img className="entry-container-image" src={props.img.src} alt={props.img.alt}></img>
            </div>
            <div className="entry-content">
                <div className="entry-content-reference">
                    <img className="entry-content-reference-marker" src="./src/assets/marker.png" alt="Location marker"></img>
                    <span className="entry-content-reference-location">{props.country}</span>
                    <a className="entry-content-reference-link" href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1 className="entry-content-title">{props.title}</h1>
                <p className="entry-content-date">{props.dates}</p>
                <p className="entry-content-description">
                        {props.text}
                </p>
            </div>
         </article>
    )
}