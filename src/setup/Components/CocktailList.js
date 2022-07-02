import React from 'react';
import {useGlobalOurContext} from "../OurContext";
import Loading from "./Loading";
import Cocktail from "./Cocktail";




function CocktailList() {
    const {cocktails, loading} = useGlobalOurContext()
    if (loading){
        return <Loading/>
    }
    if (cocktails.length < 1){
        return (
            <h2 className='section-title'>
                no cocktails matched your search criteria
            </h2>
        )
    }


    return (
        <section className='section'>
            <h2 className='section-title'>coctails</h2>
            <div className="cocktails-center">
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item}/>
                })}
            </div>
        </section>
    );
}

export default CocktailList;