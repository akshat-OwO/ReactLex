// react imports
import { useState } from 'react';

// components
import Meaning from './components/Meaning';
import Navbar from './components/Navbar';
import Search from './components/Search';
import WordHeader from './components/WordHeader';

function App() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState('');

    return (
        <div className="App">
            <Navbar />
            <Search search={search} setSearch={setSearch} setData={setData} />
            <WordHeader data={data} />
            {data
                ? data[0].meanings.map((meaning) => (
                      <Meaning meaning={meaning} setSearch={setSearch} key={meaning.partOfSpeech} />
                  ))
                : null}
            {data ? data[0].sourceUrls.length > 0 && (
              <div className='source'>
                <h3>Source:</h3>
                <p>{data[0].sourceUrls[0]}</p>
              </div>
            ) : null}
        </div>
    );
}

export default App;
