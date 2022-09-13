import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => { },
    removeFavourite: (meetupId) => { },
    itemIsFavourite: (meetupId) => { },
});

export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouritesHandler(favouriteMeetup) {
        setUserFavourites((prevFavourites) => {
            return prevFavourites.concat(favouriteMeetup);
        })
    }

    function removeFavouritesHandler(meetupId) {
        setUserFavourites((prevFavourites) => {
           return prevFavourites.filter((meetup) => 
                meetup.id !== meetupId
            )
        })
    }

    function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some((meetup) =>  meetup.id === meetupId );
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouritesHandler,
        removeFavourite: removeFavouritesHandler,
        itemIsFavourite: itemIsFavouriteHandler
    }

    return (
        <FavouritesContext.Provider value={context}>
            {props.children}
        </FavouritesContext.Provider>
    )
}

export default FavouritesContext