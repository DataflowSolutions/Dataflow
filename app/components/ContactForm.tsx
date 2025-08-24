"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    if (!name) return toast.error("Var vänlig ange ditt namn.");
    if (!email) return toast.error("Var vänlig ange din e-postadress.");
    if (!message) return toast.error("Var vänlig ange ditt meddelande.");

    const templateParams = {
      name: name,
      title: email,
      message: message,
    };

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setName("");
      setEmail("");
      setMessage("");
      toast.success("Ditt meddelande har skickats framgångsrikt!");
    } catch {
      toast.error("Misslyckades med att skicka meddelandet. Försök igen senare.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center text-center mt-10 w-full max-w-[600px] space-y-8 px-4"
    >
      {/* Name Input */}
      <div className="relative w-full">
        <input
          type="text"
          id="name"
          placeholder="Ditt namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="peer w-full px-4 py-3 border border-gray-700 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-transparent text-white"
        />
        <label
          htmlFor="name"
          className={`absolute left-4 top-3 text-gray-400 text-sm transition-all
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            peer-focus:top-[-24px] peer-focus:text-accent peer-focus:text-sm
            ${name && "top-[-24px] text-accent text-sm"}
          `}
        >
          Ditt namn
        </label>
      </div>

      {/* Email Input */}
      <div className="relative w-full">
        <input
          type="email"
          id="email"
          placeholder="Din e-postadress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="peer w-full px-4 py-3 border border-gray-700 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-transparent text-white"
        />
        <label
          htmlFor="email"
          className={`absolute left-4 top-3 text-gray-400 text-sm transition-all
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            peer-focus:top-[-24px] peer-focus:text-accent peer-focus:text-sm
            ${email && "top-[-24px] text-accent text-sm"}
          `}
        >
          Din e-postadress
        </label>
      </div>

      {/* Message Input */}
      <div className="relative w-full">
        <textarea
          id="message"
          placeholder="Ditt meddelande"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="peer w-full px-4 py-3 border border-gray-700 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-transparent text-white"
        ></textarea>
        <label
          htmlFor="message"
          className={`absolute left-4 top-3 text-gray-400 text-sm transition-all
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            peer-focus:top-[-24px] peer-focus:text-accent peer-focus:text-sm
            ${message && "top-[-24px] text-accent text-sm"}
          `}
        >
          Ditt meddelande
        </label>
      </div>

      {/* Submit Button or Spinner */}
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all cursor-pointer ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? (
            <ClipLoader size={22} color="#fff" />
          ) : (
            "Skicka meddelande"
          )}
        </button>
      </div>
    </form>
  );
}
