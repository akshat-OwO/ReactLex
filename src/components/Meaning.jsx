const Meaning = ({ meaning, setSearch }) => {
    return (
        <>
            {meaning ? (
                <div className="meaning">
                    <i className="partOfSpeech">{meaning.partOfSpeech}</i>
                    <h3>Meanings</h3>
                    <ul className="meanings">
                        {meaning.definitions.map((d, i) => (
                            <li key={i}>{d.definition}</li>
                        ))}
                    </ul>
                    <div className="synonyms">
                        {meaning.synonyms.length > 0 && (
                            <>
                                <h3>Synonyms</h3>
                                <div className="synonym">
                                    {meaning.synonyms.map((s, i) => (
                                        <p onClick={() => setSearch(s)} key={i}>{s}</p>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Meaning;
