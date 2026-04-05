export default function Entry() {
    return (
        <article className="entry">
            <div className="entry-container">
                <img className="entry-container-image" src="./src/assets/mount-fuji.jpg" alt="Picture of mount Fuji"></img>
            </div>
            <div className="entry-content">
                <div className="entry-content-reference">
                    <img className="entry-content-reference-marker" src="./src/assets/marker.png" alt="Location marker"></img>
                    <span className="entry-content-reference-location">Japan</span>
                    <a className="entry-content-reference-link" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                </div>
                <h1 className="entry-content-title">Mount Fuji</h1>
                <p className="entry-content-date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="entry-content-description">
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
         </article>
    )
}