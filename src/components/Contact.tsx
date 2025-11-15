import React, { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

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
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? "" : "Invalid email address";
};

const validatePhone = (phone: string) => {
  const regex = /^[0-9]{10}$/; // 10-digit number
  return regex.test(phone) ? "" : "Phone must be 10 digits";
};


const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });

  if (name === "email") {
    setErrors({ ...errors, email: validateEmail(value) });
  }
  if (name === "phone") {
    setErrors({ ...errors, phone: validatePhone(value) });
  }
};


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

     const emailError = validateEmail(formData.email);
  const phoneError = formData.phone ? validatePhone(formData.phone) : "";

  setErrors({ email: emailError, phone: phoneError });

  if (emailError || phoneError) {
    return; // Stop submission
  }
    setSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

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
      <div className="flex justify-center mb-12">
        <div className="w-44 h-1 bg-[#814142] rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Contact Info + Map */}
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
              <p className="text-gray-500">
                Yenakapalli, Ranga Reddy, Telangana 501504
              </p>
            </div>
          </div>

          {/* Google Map iframe */}
        {/*   <div className="overflow-hidden rounded-xl shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.456789!3d17.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb1234567890%3A0xabcdef123456789!2sYenakapalli%2C%20Ranga%20Reddy%2C%20Telangana%20501504!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div> */}
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
          {errors.email && (
  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
)}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
          />

          {errors.phone && (
  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
)}
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
