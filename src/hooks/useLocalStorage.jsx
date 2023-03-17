// react imports
import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        let localValue = window.localStorage.getItem(key);
        return localValue ? localValue : initialValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}
 
export default useLocalStorage;