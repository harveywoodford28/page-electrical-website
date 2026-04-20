'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { siteConfig, services } from '@/lib/data';

// Using mailto as the launch default — swap the `action` to a Formspree endpoint
// when Harvey wires that up. Mailto works on every device with zero config.
export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Service: ${data.get('service')}`,
      '',
      'Message:',
      `${data.get('message')}`,
    ].join('\n');
    const url = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `Quote request — ${data.get('service') ?? 'General'}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1200);
  };

  if (done) {
    return (
      <div className="rounded-3xl bg-white border border-ink/5 shadow-sm p-10 md:p-14 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand mb-6">
          <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
        </div>
        <h3 className="text-2xl font-bold text-ink mb-3">Thanks — your email is drafted.</h3>
        <p className="text-muted leading-relaxed max-w-md mx-auto">
          Your email client should have opened with your enquiry ready to send. If not, please
          email us directly at{' '}
          <a href={siteConfig.emailHref} className="text-brand-dark font-semibold">
            {siteConfig.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 text-sm text-brand-dark font-semibold hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-white border border-ink/5 shadow-sm p-8 md:p-10 space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-ink mb-2">
          Service
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
        >
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition resize-none"
        />
      </div>
      <button type="submit" disabled={submitting} className="btn-primary w-full">
        {submitting ? 'Opening email…' : (
          <>
            Send enquiry <Send className="h-4 w-4" strokeWidth={2.5} />
          </>
        )}
      </button>
      <p className="text-xs text-muted text-center">
        Prefer to call? {siteConfig.phone}. We aim to reply within 24 hours.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
      />
    </div>
  );
}
