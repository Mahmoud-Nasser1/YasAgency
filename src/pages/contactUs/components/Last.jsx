import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Last = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // يمنع الصفحة تعيد تحميل نفسها

    emailjs.sendForm(
      "service_f34xk87",   // حط هنا الـ Service ID من EmailJS
      "template_gnklqph",  // حط هنا الـ Template ID
      formRef.current,
      "IN9PgARj8ldGq7U54"    // حط هنا الـ Public Key
    ).then(
      () => {
        alert("Email sent successfully 🚀");
        formRef.current.reset();
      },
      (error) => {
        alert("Something went wrong ❌");
        console.error(error);
      }
    );
  };

  return (
    <section className="border-t border-border bg-secondary">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">
            Ready to Start?
          </p>
          <h2 className="text-4xl font-light tracking-tight leading-[1.1] text-foreground">
            Let's Create Impact Together
          </h2>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-3 bg-transparent border border-foreground/30 text-foreground text-sm"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 bg-transparent border border-foreground/30 text-foreground text-sm"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="px-4 py-3 bg-transparent border border-foreground/30 text-foreground text-sm resize-none"
          />

          <button
            type="submit"
            className="border border-foreground/30 px-12 py-4 text-xs uppercase tracking-[0.25em] text-foreground 
            hover:bg-foreground/10 transition-all duration-500"
          >
            Send Us an Email
          </button>
        </form>

      </div>
    </section>
  );
};

export default Last;