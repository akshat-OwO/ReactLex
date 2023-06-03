// react imports
import { useEffect } from 'react';

// library imports
import { AiOutlineSearch } from 'react-icons/ai';
import { useDebounce } from 'use-debounce';

const Search = ({ search, setSearch, setData }) => {
    const [value] = useDebounce(search, 1000);
    useEffect(() => {
        if (value) {
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
                .then((response) => response.json())
                .then((data) => {
                    if (data.title) {
                        setData('');
                    } else {
                        setData(data);
                    }
                })
                .catch((error) => console.log(error));
        }
    }, [value]);

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
