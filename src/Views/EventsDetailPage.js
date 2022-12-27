import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";
import { API } from "aws-amplify";

export default function EventsDetailsPage() {
  const { eventId } = useParams();
  const [eventDetail, setEventDetail] = useState({});
  useEffect(() => {
    const apiName = "scicalApi";
    const path = `/events/${eventId}`;
    const myInit = {
      headers: {}, // OPTIONAL
    };
    API.get(apiName, path, myInit)
      .then((response) => {
        setEventDetail(response);
        console.log(response);
        console.log("some");
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [eventId]);

  return (
    <>
      <Jumbotron
        pageTitle="Event Title"
        pageSubTitle="See the details of this event"
      />
      <Container>Events Detail Page</Container>
    </>
  );
}
