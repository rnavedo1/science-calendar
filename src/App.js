import { Routes, Route, Navigate } from "react-router-dom";
import EventsPage from "./Views/EventsPage";
import EventsNewPage from "./Views/EventsNewPage";
import EventsUpdatePage from "./Views/EventsUpdatePage";
import EventsDetailsPage from "./Views/EventsDetailPage";
import MainLayout from "./Components/MainLayout";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import AdminEvents from "./Views/AdminEvents";

Amplify.configure(config);

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventsDetailsPage />} />
        <Route path="/events/new" element={<EventsNewPage />} />
        <Route path="/events/update/:eventId" element={<EventsUpdatePage />} />
        <Route path="/admin" element={<AdminEvents />} />
        {/* make home page /events */}
        {/* if the route does not match redirect to all pages */}
        <Route path="*" element={<Navigate to="/events" />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
