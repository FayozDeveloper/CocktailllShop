import React from 'react';
import CocktailList from "../Components/CocktailList";
import SearchTerm from "../Components/SearchTerm";

function Home() {
    return (
        <main>
            <SearchTerm/>
           <CocktailList/>
        </main>
    );
}

export default Home;

