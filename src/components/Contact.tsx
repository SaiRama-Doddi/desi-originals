import React, { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Simulate API / EmailJS call
      await new Promise((res) => setTimeout(res, 1500));

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbebd5] flex flex-col items-center py-10 px-4 mt-4" id="contact">


        <h1 className="text-4xl md:text-5xl font-extrabold text-[#901f3b] mb-5 text-center">
        Get in Touch
      </h1>
      {/* Decorative divider */}
<div className="flex justify-center mb-12">
  <div className="w-44 h-1 bg-[#814142] rounded-full"></div>
</div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <Mail className="text-orange-500" size={28} />
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <p className="text-gray-500">desioriginals1997@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <Phone className="text-orange-500" size={28} />
            <div>
              <p className="font-semibold text-gray-700">Phone</p>
              <p className="text-gray-500">+91 63000 88675</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <MapPin className="text-orange-500" size={28} />
            <div>
              <p className="font-semibold text-gray-700">Address</p>
              <p className="text-gray-500">Yenakapalli, Ranga Reddy, Telangana 501504</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition resize-none"
            required
          />

          <button
            type="submit"
            disabled={submitting}
            className={`flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition ${
              submitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {submitting ? "Sending..." : "Send Message"}
            <Send size={20} />
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium mt-2">
              Message sent successfully! ✅
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
