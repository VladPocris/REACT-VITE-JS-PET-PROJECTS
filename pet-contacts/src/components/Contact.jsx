export default function Contact({img, name, phone, email}) {
    return (
        <article className="contact-card">
                <img 
                    src={img}
                    alt={`Photo of ${name}`}
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src="../src/assets/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="../src/assets/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
        </article>
    )
}