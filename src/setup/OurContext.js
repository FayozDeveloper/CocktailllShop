import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const OurContext = React.createContext()

const OurProvider = ({children}) =>  {

    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm]  = useState('a')
    const [cocktails, setCocktails] = useState([])


    const FetchDrinks = useCallback (async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            console.log(data)

            const {drinks} = data
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = item

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })

                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm])


    useEffect( () => {
        FetchDrinks()
    },[searchTerm, FetchDrinks])


    return (
        <OurContext.Provider value = {{ loading, cocktails, searchTerm, setSearchTerm}}>
            {children}
        </OurContext.Provider>
    );
}

export const useGlobalOurContext = () => {
    return useContext(OurContext)
}


export {OurContext, OurProvider};