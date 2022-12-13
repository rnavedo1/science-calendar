import Container from "./Container";

export default function Jumbotron({ pageTitle, pageSubTitle }) {
  return (
    <div className="border-b border-b-blue-900 pb-2 bg-gray-100">
      <Container>
        <h1>{pageTitle}</h1>
        <p>{pageSubTitle}</p>
      </Container>
    </div>
  );
}

Jumbotron.defaultProps = {
  pageTitle: "Science Calendar Admin",
  pageSubTitle: "Add, update, and delete events from the Science Calendar",
};
