// react imports
import { useState } from "react"

// components
import Navbar from "./components/Navbar"
import Search from "./components/Search"

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState('');

  return (
    <div className="App">
      <Navbar />
      <Search search={search} setSearch={setSearch} setData={setData} />
    </div>
  )
}

export default App
