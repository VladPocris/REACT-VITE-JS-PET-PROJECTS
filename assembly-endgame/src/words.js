export const words = [
    "react", "javascript", "python", "typescript", "angular",
    "svelte", "redux", "express", "django", "flask",
    "kotlin", "swift", "rust", "java", "ruby",
    "html", "docker", "linux", "mysql", "mongo",
    "webpack", "babel", "deno", "next", "vite",
    "node", "vercel", "heroku", "remix", "astro"
]

export function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}
