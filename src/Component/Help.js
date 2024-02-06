import React, { useState } from "react";

const Help = () => {
  const [ticketText, setTicketText] = useState("");
  const [isTicketSubmitted, setIsTicketSubmitted] = useState(false);

  const submitTicket = () => {
    setIsTicketSubmitted(true);
    setTicketText("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-vector/clean-medical-background_53876-116875.jpg?size=626&ext=jpg&ga=GA1.1.528249459.1700570054&semt=ais')` }}>
      <div className="w-full max-w-md p-8  rounded-md ">
        <h1 className="text-2xl font-bold text-teal-600 mb-4">PharmaEasy Help Center</h1>
        <p className="text-gray-700 mb-8">
          Welcome to PharmaEasy's Help Center. For assistance, raise a support ticket below.
        </p>

        <div className="mb-8">
          <textarea
            className="w-full p-8 border border-gray-300 rounded-md"
            placeholder="Describe your issue..."
            value={ticketText}
            onChange={(e) => setTicketText(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-md cursor-pointer"
          onClick={submitTicket}
        >
          Raise Ticket
        </button>

        {isTicketSubmitted && (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-teal-600 mb-2">Successful Submission</h3>
            <p className="text-gray-700">
              We have received your ticket. Our support team will get back to you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Help;