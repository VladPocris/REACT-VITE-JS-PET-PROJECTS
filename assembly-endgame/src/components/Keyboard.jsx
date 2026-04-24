import { clsx } from "clsx"

export default function Keyboard(props) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keyElements = alphabet.split("").map(letter => {
        const guessedLetter = letter.toUpperCase();
        const hasBeenGuessed = props.guessedLetters.includes(guessedLetter);
        const isCorrect = props.word.toUpperCase().includes(guessedLetter);

        const className = clsx("game-keyboard-letter-button", {
            right: hasBeenGuessed && isCorrect,
            wrong: hasBeenGuessed && !isCorrect,
        });

        return (
            <button 
                onClick={e => props.handleButtonPress(e, letter)} 
                key={letter} 
                className={className}
                disabled={props.isGameOver || hasBeenGuessed}
                aria-label={`Letter ${guessedLetter}${hasBeenGuessed ? (isCorrect ? ", correct" : ", incorrect") : ""}`}
                >
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <>
            <section className="game-keyboard-letter-container" aria-label="Keyboard">
                {keyElements}
            </section>
        </>
    )
}
