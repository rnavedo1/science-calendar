import { useEffect, useState } from "react";
import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";
import { API } from "aws-amplify";
import ScicalList from "../Components/ScicalList";

export default function AdminEvents() {
  const [sciCalEvents, setSciCalEvents] = useState([]);

  useEffect(() => {
    const apiName = "scicalApi";
    const path = "/events/eventId";
    const myInit = {
      headers: {}, // OPTIONAL
    };
    API.get(apiName, path, myInit)
      .then((response) => {
        setSciCalEvents(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <>
      <Jumbotron />
      <Container>
        <ScicalList sciCalEvents={sciCalEvents} />
      </Container>
    </>
  );
}
