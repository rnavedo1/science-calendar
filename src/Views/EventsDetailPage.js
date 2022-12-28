import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { Submits } from "../models";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";

export default function EventsDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState({});

  const getEventDetail = useCallback(
    async (id) => {
      const event = await DataStore.query(Submits, id);
      if (event) {
        setEventDetail(event);
      } else {
        navigate("/");
      }
    },
    [navigate]
  );

  useEffect(() => {
    getEventDetail(id);
  }, [id]);

  // prompt to delete event
  const confirmDeleteEvent = async (id) => {
    const isConfirmed = window.confirm("Delete this event?");
    if (isConfirmed) {
      await DataStore.delete(Submits, id);
      navigate("/");
    }
    return;
  };

  const confirmApproveEvent = async (id) => {
    const isConfirmed = window.confirm("Approve this event?");
    if (isConfirmed) {
      await DataStore.save(
        Submits.copyOf(eventDetail, (updated) => {
          updated.isPublished = true;
        })
      );
      navigate("/");
    }
    return;
  };

  return (
    <>
      <Jumbotron
        pageTitle={eventDetail.title}
        pageSubTitle={`This event is ${
          eventDetail.isPublished ? "published" : "not published"
        }`}
      />
      <Container>
        <div className="mt-4">
          <div>
            <span className="text-2xl font-bold text-blue-900">
              Date & Time
            </span>
          </div>
          <div className="border border-blue-900 rounded-lg p-2 mt-2">
            <div>
              <Moment format="MMMM Do, YYYY, hh:mm A">
                {eventDetail.date + "T" + eventDetail.time}
              </Moment>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <span className="text-2xl font-bold text-blue-900">Sponsoring</span>
          </div>
          <div className="border border-blue-900 rounded-lg p-2 mt-2">
            <div>
              <span className="font-bold mr-2">Department / Organization:</span>
              <span className="mr-4">
                {eventDetail.sponsoringDepartmentOrganization}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <span className="text-2xl font-bold text-blue-900">
              For more information
            </span>
          </div>
          <div className="border border-blue-900 rounded-lg p-2 mt-2">
            <div>
              <span className="font-bold mr-2">Name:</span>
              <span>{eventDetail.contactPersonFirstAndLastName}</span>
            </div>
            <div>
              <span className="font-bold mr-2">Phone:</span>
              <span>{eventDetail.phoneNumberInfo}</span>
            </div>
            <div>
              <span className="font-bold mr-2">Email:</span>
              <span>{eventDetail.contactPersonEmail}</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <span className="text-2xl font-bold text-blue-900">
              Speaker information
            </span>
          </div>
          <div className="border border-blue-900 rounded-lg p-2 mt-2">
            <div>
              <span className="font-bold mr-2">Name:</span>
              <span>{eventDetail.speakerFirstAndLastname}</span>
            </div>
            <div>
              <span className="font-bold mr-2">Title And Institution:</span>
              <span>{eventDetail.speakerTitleAndInstitution}</span>
            </div>
            <div>
              <span className="font-bold mr-2">Degree:</span>
              <span>{eventDetail.speakerDegree}</span>
            </div>
          </div>
        </div>
        {/* approve button */}
        <Button
          type="button"
          styleClasses="bg-green-900 text-white mt-4 p-2 rounded-lg mr-2"
          label="Approve"
          onClick={() => confirmApproveEvent(eventDetail.id)}
        />
        {/* edit link */}
        <Link to={`/events/update/${eventDetail.id}`}>
          <Button
            type="button"
            styleClasses="bg-yellow-700 text-white mt-4 p-2 rounded-lg mr-2"
            label="Update"
          />
        </Link>
        {/* delete button */}
        <Button
          type="button"
          styleClasses="bg-red-900 text-white mt-4 p-2 rounded-lg mr-2"
          label="Delete"
          onClick={() => confirmDeleteEvent(eventDetail.id)}
        />
      </Container>
    </>
  );
}
