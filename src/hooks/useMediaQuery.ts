import * as React from "react";

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };
        setMatches(mediaQueryList.matches);
        mediaQueryList.addEventListener("change", listener);

        return () => {
            mediaQueryList.removeEventListener("change", listener);
        };
    }, [query]);

    return matches;
};

export default useMediaQuery;
