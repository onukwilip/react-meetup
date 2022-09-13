import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from 'react'

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeeups] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://my-first-react-78cc5-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {

            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeeups(meetups);
            console.log(loadedMeetups);
        })
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    else {
        return (
            <div>
                <h1>All meetups</h1>
                <MeetupList meetup={loadedMeetups} />
            </div>
        )
    }
}

export default AllMeetupsPage;