import { Link } from "react-router-dom";
import { API } from "aws-amplify";

export default function ScicalItem({ event }) {
  const deleteEvent = (eventId) => {
    API.del("scicalApi", `/events/${eventId}`, {
      params: { eventId },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const confirmDelete = (eventId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirm) {
      deleteEvent(eventId);
    }
  };
  return (
    <tr className="col-md-4 even:bg-gray-200" key={event.eventId}>
      <td className="p-1">
        <p>
          <strong>Date: </strong>
          {event.date}
        </p>
        <p>
          <strong>Time: </strong>
          {event.time}
        </p>
      </td>
      <td className="p-1">{event.title}</td>
      <td className="p-1">{event.email}</td>
      <td className="p-1 text-center border-x">
        <Link
          to={`/events/update/${event.eventId}`}
          className="bg-yellow-700 text-white p-2 rounded mx-2"
        >
          Edit
        </Link>
        <button
          onClick={() => confirmDelete(event.eventId)}
          className="text-red-900 p-2 rounded mx-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
