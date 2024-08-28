import Cards from "./components/ui/Cards"
import SearchFilter from "./components/SearchFilter"

function App() {

  return (
    <>
      <SearchFilter className="bg-violet-1000" />
      <div className="space-y-3">
      <Cards />
      <Cards/>
      <Cards/>
      </div>
    </>
  )
}

export default App
