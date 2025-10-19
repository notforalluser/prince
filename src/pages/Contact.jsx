import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [cooldown, setCooldown] = useState(30);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_20prince",
        "template_20prince",
        form.current,
        "K8lZMtfk_jQIi20Ak"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setStatus("success");

          setTimeout(() => {
            setStatus("cooldown");
            setCooldown(30);
          }, 3000);
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message.");
          setStatus("idle");
        }
      );
  };

  useEffect(() => {
    let timer;
    if (status === "cooldown" && cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    if (cooldown === 0 && status === "cooldown") {
      setStatus("idle");
    }
    return () => clearInterval(timer);
  }, [status, cooldown]);

  return (
    <>
      <div className="back border-b-2 border-b-white border-t-2 border-t-black h-5 md:h-8 w-full"></div>
      <main className="container mx-auto px-4 md:px-8 py-5 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-2xl font-bold font-myriad">Contact</h1>

            <div className="space-y-2">
              <div
                id="contactus"
                className="relative"
              >

                <div className="max-w-6xl mx-auto">
                  {/* Contact Form */}
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-6"
                  >
                    <div className="flex flex-col gap-4">
                      <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full bg-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400"
                      />
                      <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full bg-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400"
                      />
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="w-full bg-gray-200 px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400"
                      ></textarea>
                    </div>

                    {/* Status + Button */}
                    <div className="text-center mt-6">
                      {status === "success" && (
                        <div className="flex items-center justify-center text-green-400 gap-2 mb-2">
                          <CheckCircle className="w-5 h-5" />
                          <span>Message sent successfully!</span>
                        </div>
                      )}
                      {status === "cooldown" && (
                        <p className="text-yellow-400 mb-2 text-sm">
                          Please wait <b>{cooldown}s</b> before sending another
                          message.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading" || status === "cooldown"}
                        className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition ${
                          status === "loading" || status === "cooldown"
                            ? "bg-gray-600 cursor-not-allowed"
                            : "back hover:bg-gray-700"
                        } text-white`}
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="animate-spin w-4 h-4" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="p-4">
              <div className="text-sm">
                <div className="mt-3">
                  <p>I’m always open to discussing new opportunities,
                      collaborations, or just a quick chat about technology.
                      Feel free to reach out!</p>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-500">princetiwari.profes@gmail.com</div>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">Phone Number</div>
                  <div className="text-sm text-gray-500">+91 7891922459</div>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">Address</div>
                  <div className="text-sm text-gray-500">Jaipur, Rajasthan</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default Contact;
