import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-700 text-center py-6 text-gray-400 text-sm">
      <p>© 2025 1clikfix.com — All Rights Reserved</p>
      <p className="mt-2">
        <a href="/terms" className="hover:text-white">Terms of Service</a> |{" "}
        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
      </p>
    </footer>
  );
}
