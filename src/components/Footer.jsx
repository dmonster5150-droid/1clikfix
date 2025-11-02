import React from "react";
export default function Footer(){
  return (
    <footer className="bg-white mt-8 border-t">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} 1ClikFix • <a className="underline" href="/disclosure">Terms & Disclosure</a>
      </div>
    </footer>
  );
}
