import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import Data from "../src/data/data.js"

export default function App() {
  const entryElements = Data.map(({id, ...rest}) => <Entry 
        key = {id}
        {...rest}
      />)
  return(
    <>
      <Header />
      {entryElements}
    </>
  )
}