import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavouritesContext from '../store/favourites-context';

function FavouritesPage()
{
    const favouriteCtx=useContext(FavouritesContext);
    let content;

    if(favouriteCtx.totalFavourites===0)
    {
        content=<p>You've got no favourites...</p>
    }

    else
    {
        content=<MeetupList meetup={favouriteCtx.favourites} />
    }

    return(
        <div>
            <h1>Favourites</h1>
            {content}
        </div>
    )
}

export default FavouritesPage;