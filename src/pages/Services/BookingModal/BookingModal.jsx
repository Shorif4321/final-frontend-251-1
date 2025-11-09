import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/UserContext";
import toast from "react-hot-toast";

const BookingModal = ({ service, date, setService, refetch }) => {
  const { slots, name } = service;
  const { user } = useContext(AuthContext);

  const bookingService = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.select.value;
    const phone = form.phone.value;
    const patient = form.patient.value;

    const booking = {
      appointmentDate: date,
      slot,
      patient,
      email: user?.email,
      phone,
      treatment: name,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking Successful");
          setService("");
          refetch();
        }
        if (data.message) {
          alert(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{name}</h3>
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="modal-action">
            <form onSubmit={bookingService}>
              <input
                type="text"
                name="date"
                readOnly
                value={date}
                className="input w-full"
                placeholder="Date"
              />

              <select
                defaultValue="Pick a Slot"
                name="select"
                className="select select-primary w-full mt-5"
              >
                {slots?.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="patient"
                className="input w-full mt-5"
                placeholder="Name"
                defaultValue={user?.displayName}
              />

              <input
                type="email"
                name="email"
                className="input w-full mt-5"
                placeholder="Email"
                defaultValue={user?.email}
                readOnly
              />

              <input
                type="number"
                name="phone"
                className="input w-full mt-5"
                placeholder="Phone Number"
              />

              <input
                value="Submit Now"
                type="submit"
                className="btn btn-primary mt-4 w-full"
              />
            </form>

            {/* <label htmlFor="bookingModal" className="btn">
              Close!
            </label> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
