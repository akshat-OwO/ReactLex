// react imports
import { useEffect } from 'react';

// library imports
import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({ search, setSearch, setData }) => {
    useEffect(() => {
        if (search) {
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error) => console.log(error.message));
        }
    }, [search]);

    return (
        <div className="search">
            <input
                type="search"
                name="search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <AiOutlineSearch width={32} className="icon search-icon" />
        </div>
    );
};

export default Search;
