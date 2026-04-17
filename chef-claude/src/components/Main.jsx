export default function Main() {
    return (
        <main>
            <form>
                <input type="text" placeholder="e.g. oregano" className="ingredient-input-text" aria-label="Add ingredient"/>
                <button  type="button" className="ingredient-input-add-button">Add Ingredient</button>
            </form>
        </main>
    )
}