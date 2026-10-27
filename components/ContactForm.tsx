"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Website inquiry from ${name || "a prospective client"}`);
    const body = encodeURIComponent(`${message}\n\nName: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:marcimetzger@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit} data-reveal>
      <p className="form-title">Drop Marci a line</p>
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>Email<input type="email" name="email" autoComplete="email" required /></label>
      <label>How can Marci help?<textarea name="message" rows={5} required /></label>
      <button className="primary-button" type="submit">Send message</button>
    </form>
  );
}
