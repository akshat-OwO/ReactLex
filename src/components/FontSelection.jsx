// react imports
import { useState } from 'react';

// library imports
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { AiFillCheckCircle } from 'react-icons/ai';

// custom hook
import useLocalStorage from '../hooks/useLocalStorage';

const FontSelection = () => {
    const [currentFont, setCurrentFont] = useLocalStorage('font', 'serif');
    const [fontSelector, setFontSelector] = useState(false);

    const selectFont = (e) => {
        let font = e.target.dataset.font;
        document.documentElement.style.setProperty('--_font', font);
        setCurrentFont(font);
        setFontSelector(false);
    };

    return (
        <div className="fonts-selector">
            <div
                className="fonts"
                onClick={() => setFontSelector(!fontSelector)}
            >
                <p>{currentFont}</p>
                <ChevronDownIcon width={20} className="icon" />
            </div>
            {fontSelector && (
                <div className="font-toggle hide">
                    <p data-font="sans-serif" onClick={selectFont}>
                        sans-serif{' '}
                        <span>
                            {currentFont === 'sans-serif' ? (
                                <AiFillCheckCircle className="icon" />
                            ) : (
                                ''
                            )}
                        </span>
                    </p>
                    <p data-font="serif" onClick={selectFont}>
                        serif{' '}
                        <span>
                            {currentFont === 'serif' ? (
                                <AiFillCheckCircle className="icon" />
                            ) : (
                                ''
                            )}
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default FontSelection;
