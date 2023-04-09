import { useState } from "react";

// We recive the key of the state and the value(which is the whole list of news from favorites reducer -> for the Favorites page)
const useLocalStorage = (key, value) => {
    // First get the key value from local storage and parse it(JSON text from localStorage -> JSON normal object)
    const localStorageNews = JSON.parse(localStorage.getItem(key));
    // Second create the initial state. If we have no value in localStorage we set the value from parameters
    const initialState = localStorageNews || value;

    const [initialNews, setInitialNews] = useState(initialState);

    // Third update the state and modify the value from localStorage
    const setNewsInLocalStorage = (value) => {
        setInitialNews(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [initialNews, setNewsInLocalStorage];
};

export default useLocalStorage;
