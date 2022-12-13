import ScicalItem from "./ScicalItem";

export default function ScicalList({ sciCalEvents }) {
  return (
    <table className="table-auto container mx-auto border my-4">
      <thead>
        <tr className="bg-blue-900 text-white">
          <th className="border-r">Event Data</th>
          <th className="border-r">Event Title</th>
          <th>Contact Information</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sciCalEvents.map((event) => (
          <ScicalItem event={event} key={event.eventId} />
        ))}
      </tbody>
    </table>
  );
}
