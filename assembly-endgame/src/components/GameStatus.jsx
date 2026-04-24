export default function GameStatus(props) {
    return (
        <>
            {props.gameStatus.over
                ? <section className={`game-status-container ${props.gameStatus.won ? "game-status-win" : "game-status-lost"}`} aria-live="polite" role="status">
                    {props.gameStatus.won
                        ?
                        <>
                            <h2 className="game-status-title">
                                You win! 🎉
                            </h2>
                            <p className="game-status-description">
                                Well done!
                            </p>
                        </>
                        : <>
                            <h2 className="game-status-title">
                                Game over!
                            </h2>
                            <p className="game-status-description">
                                You lose! Better start learning Assembly 😭
                            </p>
                        </>
                    }
                </section>
                : props.gameStatus.farewellMessage
                    ? <section className="game-status-container game-status-farewell" aria-live="polite" role="status">
                        <h2 className="game-status-title">
                            Farewell, {props.gameStatus.lastLostLanguageName}! 👋
                        </h2>
                        <p className="game-status-description">
                            {props.gameStatus.farewellMessage}
                        </p>
                    </section>
                    : <section className="placeholder" aria-live="polite" role="status">

                    </section>
            }
        </>
    )
}
