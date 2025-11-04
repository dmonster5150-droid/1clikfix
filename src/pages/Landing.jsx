import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h2 className="text-3xl font-bold mb-4">
        Welcome to 1ClikFix — please choose an option to continue
      </h2>
      <div className="space-y-4 w-full max-w-xs">
        <Link
          to="/login"
          className="block bg-blue-600 text-white py-2 rounded-lg shadow"
        >
          Sign In
        </Link>
        <Link
          to="/provider"
          className="block bg-red-600 text-white py-2 rounded-lg shadow"
        >
          Are you a Service Provider?
        </Link>
        <Link
          to="/client"
          className="block bg-green-600 text-white py-2 rounded-lg shadow"
        >
          Need a Service Provider?
        </Link>
      </div>
    </div>
  );
}
