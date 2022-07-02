import React from 'react';
import {useGlobalOurContext} from "../OurContext";

function SearchTerm(props) {
    const {setSearchTerm}  = useGlobalOurContext()
    const searchValue = React.useRef('')

    function searchCocktail() {
        setSearchTerm(searchValue.current.value)
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <article className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        ref={searchValue}
                        onChange={searchCocktail}
                    />
                </div>
            </form>
        </article>
    );
}

export default SearchTerm;