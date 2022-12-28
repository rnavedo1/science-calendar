import { useEffect, useState } from "react";
import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";
import ScicalList from "../Components/ScicalList";
import { DataStore } from "@aws-amplify/datastore";
import { Submits } from "../models";

export default function EventsPage() {
  const [sciCalEvents, setSciCalEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(sciCalEvents);

  const getAllEvents = async () => {
    const allEvents = await DataStore.query(Submits);
    setSciCalEvents(allEvents);
  };

  useEffect(() => {
    try {
      setLoading(true);
      getAllEvents();
    } catch (error) {
      console.error(error.response);
    } finally {
      setLoading(false);
    }
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
