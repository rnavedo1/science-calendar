import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";

export default function EventsDetailsPage() {
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
