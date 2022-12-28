import { useEffect, useState } from "react";
import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";
import { useParams } from "react-router-dom";
import UpdateEventsForm from "../Forms/UpdateEventsForm";
import { DataStore } from "aws-amplify";
import { Submits } from "../models";

export default function EventsUpdatePage() {
  // get the id from the url
  const { id } = useParams();

  const [event, setEventToUpdate] = useState({});

  const getEventToUpdate = async (id) => {
    const event = await DataStore.query(Submits, id);
    setEventToUpdate(event);
  };

  // get the event from the database
  useEffect(() => {
    getEventToUpdate(id);
  }, [id]);

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
