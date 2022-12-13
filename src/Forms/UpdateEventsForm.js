import { useEffect, useState } from "react";
import FormInput from "../Components/FormInput";
import Button from "../Components/Button";
import { API } from "aws-amplify";

export default function NewEventsForm({ eventToUpdate }) {
  const [event, setEvent] = useState(eventToUpdate);

  useEffect(() => {
    setEvent(eventToUpdate);
  }, [eventToUpdate]);

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (
        event.title === "" ||
        event.date === "" ||
        event.time === "" ||
        event.email === ""
      ) {
        setLoading(false);
        setError("All fields are required.");
        setTimeout(() => setError(""), 3000);
        return;
      }

      API.put("scicalApi", `/events`, {
        body: {
          published: event.published,
          title: event.title,
          date: event.date,
          time: event.time,
          email: event.email,
          eventId: event.eventId,
        },
      })
        .then((response) => {
          setSuccess(true);
          setLoading(false);
          setMessage("Event added successfully");
        })
        .catch((error) => {
          console.log(error.response.data.error.message);
          setSuccess(false);
          setLoading(false);
          setError("Something went wrong. Please try again later.");
        });
    } catch (error) {
      console.error(error);
    }
  };

  if (success) {
    return <div>{message && <p className="text-green-500">{message}</p>}</div>;
  }

  return (
    <>
      <form onSubmit={onSubmit} className="py-4">
        <FormInput
          label="Event Title"
          name="title"
          type="text"
          onChange={onChange}
          value={event.title || ""}
        />
        <FormInput
          label="Event Date"
          name="date"
          type="date"
          onChange={onChange}
          value={event.date || ""}
        />
        <FormInput
          label="Event Time"
          name="time"
          type="time"
          onChange={onChange}
          value={event.time || ""}
        />
        <FormInput
          label="Admin Email"
          name="email"
          type="text"
          onChange={onChange}
          value={event.email || ""}
        />
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <Button
          type="submit"
          label={loading ? "Processing" : "Submit"}
          styleClasses="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-all"
        />
      </form>
    </>
  );
}
