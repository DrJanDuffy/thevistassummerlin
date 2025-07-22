import Head from "next/head";

const faqs = [
  {
    question: "What is The Vistas Summerlin?",
    answer: "The Vistas Summerlin is a master-planned community in Las Vegas, featuring 28 unique subcommunities, parks, and top-rated schools."
  },
  {
    question: "How can I find available homes in The Vistas?",
    answer: "You can use our property search tool or browse by subcommunity to see current listings."
  }
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <Head>
        <title>Frequently Asked Questions | The Vistas Summerlin</title>
        <meta name="description" content="Find answers to common questions about The Vistas Summerlin." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 