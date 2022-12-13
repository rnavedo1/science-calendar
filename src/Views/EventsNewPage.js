import Container from "../Components/Container";
import EventsForm from "../Forms/NewEventsForm";
import Jumbotron from "../Components/Jumbotron";

export default function EventsNewPage() {
  return (
    <>
      <Jumbotron
        pageTitle="Science Calendar Entry Form"
        pageSubTitle="Add a New Event"
      />
      <Container>
        <EventsForm formType="new-event" />
      </Container>
    </>
  );
}
