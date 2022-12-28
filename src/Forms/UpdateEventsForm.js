import { useEffect, useState } from "react";
import FormInput from "../Components/FormInput";
import Button from "../Components/Button";
import { DataStore } from "@aws-amplify/datastore";
import { Submits } from "../models";
import { useNavigate } from "react-router-dom";

export default function NewEventsForm({ eventToUpdate }) {
  const navigate = useNavigate();
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
        event.adminEmail === ""
      ) {
        setLoading(false);
        setError("All fields are required.");
        setTimeout(() => setError(""), 3000);
        return;
      }
      if (
        event.adminEmail.endsWith("@jh.edu") ||
        event.adminEmail.endsWith("@jhmi.edu")
      ) {
        await DataStore.save(
          Submits.copyOf(eventToUpdate, (updated) => {
            updated.title = event.title;
            updated.date = event.date;
            updated.time = event.time;
            updated.speakerDegree = event.speakerDegree;
            updated.speakerTitleAndInstitution =
              event.speakerTitleAndInstitution;
            updated.speakerFirstAndLastname = event.speakerFirstAndLastname;
            updated.contactPersonFirstAndLastName =
              event.contactPersonFirstAndLastName;
            updated.contactPersonEmail = event.contactPersonEmail;
            updated.adminEmail = event.adminEmail;
            updated.sponsoringDepartmentOrganization =
              event.sponsoringDepartmentOrganization;
            updated.phoneNumberInfo = event.phoneNumberInfo;
            updated.isPublished = event.isPublished;
          })
        );
        setLoading(false);
        setSuccess(true);
        setMessage("Event updated successfully.");
        setTimeout(() => {
          navigate("/");
        });
      } else {
        setError("Please enter a valid JHU email address.");
        setLoading(false);
        setTimeout(() => setError(""), 3000);
        return;
      }
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
          label="Speaker Degree"
          name="speakerDegree"
          type="text"
          onChange={onChange}
          value={event.speakerDegree || ""}
        />
        <FormInput
          label="Speaker Title and Institution"
          name="speakerTitleAndInstitution"
          type="text"
          onChange={onChange}
          value={event.speakerTitleAndInstitution || ""}
        />
        <FormInput
          label="Speaker First and Last Name"
          name="speakerFirstAndLastname"
          type="text"
          onChange={onChange}
          value={event.speakerFirstAndLastname || ""}
        />
        <FormInput
          label="Contact Person First and Last Name"
          name="contactPersonFirstAndLastName"
          type="text"
          onChange={onChange}
          value={event.contactPersonFirstAndLastName || ""}
        />
        <FormInput
          label="Contact Person Email"
          name="contactPersonEmail"
          type="text"
          onChange={onChange}
          value={event.contactPersonEmail || ""}
        />
        <FormInput
          label="Admin Email"
          name="adminEmail"
          type="text"
          onChange={onChange}
          value={event.adminEmail || ""}
        />
        <FormInput
          label="Sponsoring Department or Organization"
          name="sponsoringDepartmentOrganization"
          type="text"
          onChange={onChange}
          value={event.sponsoringDepartmentOrganization || ""}
        />
        <FormInput
          label="Phone Number Info"
          name="phoneNumberInfo"
          type="tel"
          onChange={onChange}
          value={event.phoneNumberInfo || ""}
        />
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <Button
          type="submit"
          label={loading ? "Processing" : "Update"}
          styleClasses="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-all"
        />
      </form>
    </>
  );
}
