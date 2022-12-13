import { useEffect, useState } from "react";
import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";
import { API } from "aws-amplify";
import ScicalList from "../Components/ScicalList";

export default function EventsPage() {
  const [sciCalEvents, setSciCalEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const apiName = "scicalApi";
    const path = "/events/eventId";
    const myInit = {
      headers: {}, // OPTIONAL
    };
    API.get(apiName, path, myInit)
      .then((response) => {
        setSciCalEvents(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Jumbotron
        pageTitle="All Events"
        pageSubTitle="See all events in the Science Calendar"
      />
      <Container>
        {loading ? (
          "Loading events..."
        ) : (
          <ScicalList sciCalEvents={sciCalEvents} />
        )}
      </Container>
    </>
  );
}
