
import { useState } from "react";
import { db, auth } from "../firebase";
import {
  addDoc,
  collection,
  serverTimestamp
} from "firebase/firestore";

export default function Booking() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const now = new Date();

  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");

  const submitBooking = async (e) => {
    e.preventDefault();

    if (loading) return;

    setStatus("");
    setSuccess(false);

    const user = auth.currentUser;

    if (!user) {
      setStatus("Please sign in before booking a service.");
      return;
    }

    if (!service || !date || !time) {
      setStatus("Please complete all required fields.");
      return;
    }

    const appointment = new Date(`${date}T${time}`);

    if (
      Number.isNaN(appointment.getTime()) ||
      appointment <= new Date()
    ) {
      setStatus("Please select a future date and time.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "bookings"), {
        uid: user.uid,
        email: user.email,
        service,
        date,
        time,
        notes: notes.trim(),
        status: "pending",
        paid: false,
        created: serverTimestamp()
      });

      setSuccess(true);
      setStatus("Your booking request was submitted successfully.");

      setService("");
      setDate("");
      setTime("");
      setNotes("");

    } catch (error) {
      setStatus(
        "Unable to submit your booking. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const fieldStyle =
    "w-full rounded-xl border border-gray-700 " +
    "bg-black px-4 py-4 text-white text-base " +
    "focus:outline-none focus:ring-2 focus:ring-red-600";

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-10 text-white">

      <div className="mx-auto max-w-2xl">

        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-500">
            1ClikFix Service Center
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Book a <span className="text-red-500">Service</span>
          </h1>

          <p className="mt-4 leading-relaxed text-gray-400">
            Tell us what you need and choose your
            preferred appointment date and time.
          </p>
        </div>

        <form
          onSubmit={submitBooking}
          className="space-y-6 rounded-2xl border border-gray-800 bg-[#171717] p-5 shadow-xl sm:p-8"
        >

          <div>
            <label htmlFor="service" className="mb-2 block font-semibold">
              Service type *
            </label>

            <select
              id="service"
              className={fieldStyle}
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select a service</option>
              <option value="phone repair">Phone Repair</option>
              <option value="computer repair">Computer Repair</option>
              <option value="diagnostic">Diagnostic Service</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label htmlFor="date" className="mb-2 block font-semibold">
                Preferred date *
              </label>

              <input
                id="date"
                type="date"
                min={today}
                value={date}
                className={fieldStyle}
                style={{ colorScheme: "dark" }}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="time" className="mb-2 block font-semibold">
                Preferred time *
              </label>

              <input
                id="time"
                type="time"
                value={time}
                className={fieldStyle}
                style={{ colorScheme: "dark" }}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>

          </div>

          <div>
            <label htmlFor="notes" className="mb-2 block font-semibold">
              Additional details
            </label>

            <textarea
              id="notes"
              rows={5}
              maxLength={1000}
              value={notes}
              className={fieldStyle}
              placeholder="Describe the issue or service you need..."
              onChange={(e) => setNotes(e.target.value)}
            />

            <p className="mt-2 text-right text-xs text-gray-400">
              {notes.length}/1000
            </p>
          </div>

          <div className="rounded-xl border border-gray-700 bg-black p-4">
            <p className="font-semibold">
              Appointment request
            </p>

            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Your request will remain pending until
              availability is confirmed. No payment
              is collected through this form.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-red-700 px-6 py-4 text-lg font-bold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Submitting request..."
              : "Request Booking"}
          </button>

          {status && (
            <div
              role="status"
              className={`rounded-xl border p-4 text-sm ${
                success
                  ? "border-green-800 bg-green-950 text-green-300"
                  : "border-red-800 bg-red-950 text-red-300"
              }`}
            >
              {status}
            </div>
          )}

        </form>

        <p className="mt-8 text-center text-xs text-gray-500">
          1ClikFix — Professional Service Management
        </p>

      </div>
    </main>
  );
}
