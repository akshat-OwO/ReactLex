// react imports
import { useState, useEffect } from 'react';

// library imports
import { MoonIcon } from '@heroicons/react/24/outline';
import { Switch } from '@mui/material';

// custom hook
import useLocalStorage from '../hooks/useLocalStorage';

const ColorModeSelection = () => {
    const [mode, setMode] = useLocalStorage('mode', 'light');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', mode);
        if (mode === 'light') {
            setChecked(false);
        }
        if (mode === 'dark') {
            setChecked(true);
        }
    }, [mode]);

    const handleChange = (e) => {
        setChecked(e.target.checked);
        if (e.target.checked) {
            setMode('dark');
        }
        if (!e.target.checked) {
            setMode('light');
        }
    }

    return (
        <div className="colorMode-selector">
            <Switch size="small" color="secondary" checked={checked} onChange={handleChange} />
            <MoonIcon width={20} />
        </div>
    );
};

export default ColorModeSelection;
