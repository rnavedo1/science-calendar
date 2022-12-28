import ScicalItem from "./ScicalItem";

// pass the events as props from the EventsPage component
export default function ScicalList({ sciCalEvents }) {
  const tableCustomStyles = {
    minWidth: "800px",
    maxWidth: "100%",
    width: "100%",
  };

  return (
    <div className="overflow-x-auto">
      <table
        style={tableCustomStyles}
        className="table-auto min-w-full mx-auto border my-4"
      >
        {/* table header */}
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border-r">Date & Time</th>
            <th className="border-r">Details</th>
            <th className="border-r">Information</th>
            <th>Download Calendar</th>
          </tr>
        </thead>
        {/* check if there are events */}
        {sciCalEvents.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan="4" className="text-center">
                No events to display
              </td>
            </tr>
          </tbody>
        ) : (
          // return the events
          <tbody>
            {sciCalEvents.map((event) => (
              <ScicalItem event={event} key={event.id} />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}
