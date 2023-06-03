// react imports
import { useState } from "react";

// components
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import WordHeader from "./components/WordHeader";

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState('');


  return (
    <div className="App">
      <Navbar />
      <Search search={search} setSearch={setSearch} setData={setData} />
      <WordHeader data={data} />
    </div>
  )
}

export default App
