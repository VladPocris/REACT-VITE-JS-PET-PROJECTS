import React from "react"
import { useState, useEffect } from "react"
import confetti from "canvas-confetti"
import { languagesData } from "./languages.js";
import { getRandomWord } from "./words.js"
import { getFarewellText } from "./utils.js"

import Header from "./components/Header.jsx"
import GameStatus from "./components/GameStatus.jsx"
import Languages from "./components/Languages.jsx"
import GuessWord from "./components/GuessWord.jsx"
import Keyboard from "./components/Keyboard.jsx"

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
  letter => !currentWord.toUpperCase().includes(letter.toUpperCase())
).length;
  const isGameLost = wrongGuessCount >= languagesData.length - 1;
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter.toUpperCase()))
  const isGameOver = isGameWon || isGameLost
  const lastLostLanguage = wrongGuessCount > 0 ? languagesData[wrongGuessCount - 1] : null

  useEffect(() => {
    if (isGameWon) {
      confetti()
    }
  }, [isGameWon])

  function handleLetterGuess(event, letter) {
    const upper = letter.toUpperCase();
    setGuessedLetters(prevGuessedLetters =>
      prevGuessedLetters.includes(upper)
        ? prevGuessedLetters
        : [...prevGuessedLetters, upper]
    );
  }

  function handleNewGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }

  return (
    <>
      <main>
        <Header />
        <GameStatus 
          gameStatus = {({
            lost: isGameLost, 
            won: isGameWon, 
            over: isGameOver,
            lastLostLanguageName: lastLostLanguage?.name,
            farewellMessage: lastLostLanguage ? getFarewellText(lastLostLanguage.name) : undefined
          })}
        />
        <Languages 
          wrongGuessCount={wrongGuessCount}
        />
        <GuessWord
          word={currentWord}
          guessedLetters={guessedLetters}
          isGameLost={isGameLost}
        />
        <Keyboard
          handleButtonPress={handleLetterGuess}
          word={currentWord}
          guessedLetters={guessedLetters}
          isGameOver={isGameOver}
        />
        {isGameOver? <button className="game-new-game-button" onClick={handleNewGame}>New game</button>: <div className="placeholder-btn"></div>}
      </main>
    </>
  )
}
