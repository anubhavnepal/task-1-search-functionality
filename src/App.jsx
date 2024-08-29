import Note from "./components/Notice"
import SearchFilter from "./components/SearchFilter"
import ViewRepo from "./components/ui/ViewRepo"

function App() {

  return (
    <>
      <ViewRepo/>
      <Note />
      <SearchFilter className="bg-violet-1000" />
    </>
  )
}

export default App
