import { CalendlyButton } from './components/CalendlyButton';

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Have questions or want to get in touch? Fill out the form below or email us at <a href="mailto:info@thevistassummerlin.com" className="text-blue-700 underline">info@thevistassummerlin.com</a>.
      </p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border rounded px-4 py-2" required />
        <input type="email" placeholder="Your Email" className="border rounded px-4 py-2" required />
        <textarea placeholder="Your Message" className="border rounded px-4 py-2" rows={5} required />
        <button type="submit" className="bg-blue-700 text-white font-semibold py-2 px-6 rounded hover:bg-blue-800 transition-colors">Send Message</button>
      </form>
      <div className="mb-8">
        <CalendlyButton url="https://calendly.com/your-link" />
      </div>
    </main>
  );
} 