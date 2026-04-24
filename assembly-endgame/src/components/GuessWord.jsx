export default function GuessWord(props) {
    const letterElements = props.word.split("").map((letter, index) => {
        const isMissed = props.isGameLost && !props.guessedLetters.includes(letter.toUpperCase())
        return (
            <div key={index} className={`game-word-letter-container ${isMissed ? "missed" : ""}`}>
                {
                    props.guessedLetters.includes(letter.toUpperCase()) || props.isGameLost
                    ? letter.toUpperCase() : undefined}
            </div>
        )
    })
    return (
        <>
            <section className="game-guess-word-container">
                {letterElements}
            </section>
        </>
    )
}
