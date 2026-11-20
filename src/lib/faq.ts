export const faq = [
  { q: "Is anything for sale?", a: "No. Every pack on this site is a planned offering. There is no checkout, no cart and no prices." },
  { q: "Are there reviews or customers?", a: "No. We have no sales, reviews, testimonials or download counts, and we will not show any until they are real." },
  { q: "How do I ask about a pack?", a: "Use the enquiry page. It currently explains that enquiries are coming soon and does not send anything." },
  { q: "What will packs cost?", a: "Prices are not decided. Until they are, every pack uses Request a quote." },
  { q: "Do you use AI tools to make the prompt packs?", a: "Prompts are written and tested by hand. We never put personal or client data into external AI models." },
];
export const faqLd = () => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
