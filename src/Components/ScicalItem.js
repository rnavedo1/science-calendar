import { atcb_action } from "add-to-calendar-button";
import "add-to-calendar-button/assets/css/atcb.css";

export default function ScicalItem({ event }) {
  const addToCalendar = () => {
    atcb_action({
      name: event.title,
      startDate: event.date,
      endDate: event.date,
      options: [
        "Apple",
        "Google",
        "iCal",
        "Microsoft365",
        "Outlook.com",
        "Yahoo",
      ],
      timeZone: "America/New_York",
      iCalFileName: event.title,
    });
  };

  return (
    <>
      {event.isPublished && (
        <tr className="col-md-4 even:bg-gray-200 mb-0" key={event.eventId}>
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
          <td className="p-1">
            <p>
              <strong>Title: </strong>
              {event.title}
            </p>
            <p>
              <strong>Speaker: </strong>
              {event.speakerFirstAndLastname}
            </p>
            <p>
              <strong>Location: </strong>
              Add new field
            </p>
          </td>
          <td className="p-1">
            <p>
              <strong>Contact: </strong>
              {event.contactPersonFirstAndLastName}
            </p>
            <p>
              <strong>Email: </strong>
              {event.contactPersonEmail}
            </p>
            <p>
              <strong>Phone: </strong>
              {event.phoneNumberInfo}
            </p>
          </td>
          <td
            onClick={addToCalendar}
            className="p-1 text-center cursor-pointer"
          >
            <span className="text-blue-900 underline">Add To Calendar</span>
            <div className="atcb" style={{ display: "none" }}></div>
          </td>
        </tr>
      )}
    </>
  );
}
