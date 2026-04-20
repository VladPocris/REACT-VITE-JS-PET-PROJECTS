import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [recipeData, setRecipeData] = React.useState(null)
    
    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        console.log(recipeMarkdown)
        setRecipeData(recipeMarkdown)
        setRecipeShown(prevShown => !prevShown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && <IngredientsList
                ingredients={ingredients}
                toggleRecipeShown={getRecipe}
                getAiResponse={getRecipeFromMistral}
            />}
            
            {recipeData && <ClaudeRecipe aiResponse = {recipeData}/>}
        </main>
    )
}