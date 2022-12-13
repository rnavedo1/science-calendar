import { useEffect, useState } from "react";
import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";
import { API } from "aws-amplify";
import { useParams } from "react-router-dom";
import UpdateEventsForm from "../Forms/UpdateEventsForm";

export default function EventsUpdatePage() {
  // get the id from the url
  const { eventId } = useParams();

  const [event, setEventToUpdate] = useState({});

  // get the event from the database
  useEffect(() => {
    const apiName = "scicalApi";
    const path = `/events/eventId`;
    const myInit = {
      headers: {}, // OPTIONAL
    };
    API.get(apiName, path, myInit)
      .then((response) => {
        const event = response.filter((event) => event.eventId === eventId);
        setEventToUpdate(event[0]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [eventId]);

  return (
    <>
      <Jumbotron
        pageTitle="Update Event"
        pageSubTitle="Update an event in the Science Calendar"
      />
      <Container>
        <UpdateEventsForm formType="update-event" eventToUpdate={event} />
      </Container>
    </>
  );
}
