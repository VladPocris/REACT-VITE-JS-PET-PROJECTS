import { languagesData } from "../languages.js";

export default function Languages(props) {
    const languagesElements = languagesData.map((language, index) => {
        const isLanguageLost = index < props.wrongGuessCount
        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }
        return (
            <div key={language.name} className={`game-language-container game-${language.name}-language-container ${isLanguageLost? "lost" : ""}`} style={styles}>
                {language.name}
            </div>
        )
    })

    return (
        <>
            <section className="game-languages-container">
                {languagesElements}
            </section>
        </>
    )
}