import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';


function NewMeetupPage() {
    const history = useNavigate();

    function addMeetupData(meetupData) {
        fetch(
                'https://my-first-react-78cc5-default-rtdb.firebaseio.com/meetups.json',
                {
                    method: 'POST',
                    body: JSON.stringify(meetupData),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            ).then(() => {
                console.log(JSON);
                history('/', { replace: true });
            })
    }

    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetupForm={addMeetupData} />
        </section>
    )
}

export default NewMeetupPage;