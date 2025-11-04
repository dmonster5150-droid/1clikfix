import { Link } from "react-router-dom";

export default function Client() {
  const jobs = [
    { id: 1, title: "Plumbing Repair", price: "$120" },
    { id: 2, title: "Electrical Fix", price: "$140" },
    { id: 3, title: "Painting", price: "$100" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Here at 1ClikFix we aim to satisfy clients with trusted professionals.
      </h2>
      <ul className="space-y-3">
        {jobs.map((job) => (
          <li key={job.id} className="p-4 bg-white shadow rounded flex justify-between">
            <span>{job.title}</span>
            <span>{job.price}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/profileform"
        className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded"
      >
        Create Profile
      </Link>
    </div>
  );
}
