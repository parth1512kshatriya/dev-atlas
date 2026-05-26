import {
    createContext,
    useContext,
    useState,
} from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <SearchContext.Provider
            value={{
                isOpen,
                setIsOpen,
                searchQuery,
                setSearchQuery,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    return useContext(SearchContext);
}