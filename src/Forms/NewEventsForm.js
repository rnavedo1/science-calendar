import { useState } from "react";
import FormInput from "../Components/FormInput";
import Button from "../Components/Button";
import { DataStore } from "@aws-amplify/datastore";
import { Submits } from "../models";

export default function NewEventsForm() {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    time: "",
    speakerDegree: "",
    speakerTitleAndInstitution: "",
    speakerFirstAndLastname: "",
    contactPersonFirstAndLastName: "",
    contactPersonEmail: "",
    adminEmail: "",
    sponsoringDepartmentOrganization: "",
    phoneNumberInfo: "",
    isPublished: false,
  });

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
        setError("Please fill all required fields.");
        setTimeout(() => setError(""), 3000);
        return;
      }

      if (
        event.adminEmail.endsWith("@jh.edu") ||
        event.adminEmail.endsWith("@jhmi.edu")
      ) {
        const newEvent = await DataStore.save(
          new Submits({
            title: event.title,
            date: event.date,
            time: event.time,
            speakerDegree: event.speakerDegree,
            speakerTitleAndInstitution: event.speakerTitleAndInstitution,
            speakerFirstAndLastname: event.speakerFirstAndLastname,
            contactPersonFirstAndLastName: event.contactPersonFirstAndLastName,
            contactPersonEmail: event.contactPersonEmail,
            adminEmail: event.adminEmail,
            sponsoringDepartmentOrganization:
              event.sponsoringDepartmentOrganization,
            phoneNumberInfo: event.phoneNumberInfo,
            isPublished: event.isPublished,
          })
        );
        if (newEvent) {
          setSuccess(true);
          setMessage("Event successfully created");
        }
      } else {
        setError("Please enter a valid JHU email address.");
        setTimeout(() => setError(""), 3000);
        return;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <div>{message && <p className="text-green-800">{message}</p>}</div>;
  }

  return (
    <>
      <form onSubmit={onSubmit} className="py-4">
        <FormInput
          label="Title"
          name="title"
          type="text"
          onChange={onChange}
          value={event.title}
        />
        <FormInput
          label="Date"
          name="date"
          type="date"
          onChange={onChange}
          value={event.date}
        />
        <FormInput
          label="Time"
          name="time"
          type="time"
          onChange={onChange}
          value={event.time}
        />
        <FormInput
          label="Speaker Degree"
          name="speakerDegree"
          type="text"
          onChange={onChange}
          value={event.speakerDegree}
        />
        <FormInput
          label="Speaker Title and Institution"
          name="speakerTitleAndInstitution"
          type="text"
          onChange={onChange}
          value={event.speakerTitleAndInstitution}
        />
        <FormInput
          label="Speaker First and Last Name"
          name="speakerFirstAndLastname"
          type="text"
          onChange={onChange}
          value={event.speakerFirstAndLastname}
        />
        <FormInput
          label="Contact Person First and Last Name"
          name="contactPersonFirstAndLastName"
          type="text"
          onChange={onChange}
          value={event.contactPersonFirstAndLastName}
        />
        <FormInput
          label="Contact Person Email"
          name="contactPersonEmail"
          type="text"
          onChange={onChange}
          value={event.contactPersonEmail}
        />
        <FormInput
          label="Admin Email"
          name="adminEmail"
          type="text"
          onChange={onChange}
          value={event.adminEmail}
        />
        <FormInput
          label="Sponsoring Department or Organization"
          name="sponsoringDepartmentOrganization"
          type="text"
          onChange={onChange}
          value={event.sponsoringDepartmentOrganization}
        />
        <FormInput
          label="Phone Number Info"
          name="phoneNumberInfo"
          type="tel"
          onChange={onChange}
          value={event.phoneNumberInfo}
        />
        <div>{error && <p className="text-red-800">{error}</p>}</div>
        <Button
          type="submit"
          // label={loading ? "Processing" : "Submit"}
          label={loading ? "Processing" : "Submit"}
          styleClasses="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-all"
        />
      </form>
    </>
  );
}
