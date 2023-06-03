// library imports
import { AiFillPlayCircle } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WordHeader = ({ data }) => {
    const playPhonetic = () => {
        let url = data[0].phonetics.find((a) => a.audio !== '');
        try {
            let audio = new Audio(url.audio);
            audio.play();
        } catch (error) {
            toast.error('Audio not found', {
                theme: document.documentElement.getAttribute('color-scheme')
            });
        }
    };

    return (
        <>
            {data && (
                <div className="wordHeader">
                    <div className="wordWrapper">
                        <p>{data[0].word}</p>
                        {data[0].phonetics.length > 0 ? (
                            <i>{data[0].phonetics[0].text}</i>
                        ) : (
                            <i></i>
                        )}
                    </div>
                    {data[0].phonetics.length > 0 && (
                        <button onClick={playPhonetic}>
                            <AiFillPlayCircle className="icon" />
                        </button>
                    )}
                </div>
            )}
            <ToastContainer />
        </>
    );
};

export default WordHeader;
