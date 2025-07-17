import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What technologies do you work with?",
    answer: `<p>At ventriloc, our expertise is centralized across all <a href="#" class="faq-link">Microsoft <em>data analytics</em> technologies</a>. The majority of solutions offered to our customers therefore involve technologies such as Azure Synapse, Azure Data Factory, Azure Databricks, Microsoft Power BI, Microsoft Power Apps, Microsoft Power Automate, Azure Storage account (Data Lake), Azure Logic Apps, Azure Functions, Azure Cognitive Services, Azure SQL DB, Azure Purview and several others. All managed in continuous integration and delivery (CI/CD) processes under Azure DevOps.</p><p>Our expertise is extensive in the Microsoft cloud and on-premise ecosystem, which allows us to always determine the right technologies to support your business needs.</p><p>ventriloc is a trusted Microsoft partner, see <a href="#" class="faq-link">our certifications</a>.</p>`
  },
  {
    question: "How do you ensure a high adoption rate for your solutions?",
    answer: "Our data value experts all have strong business and technical knowledge. They are able to speak the same language as the end users and involve them quickly in the solution design process. Real emphasis is placed on user experience and interface (UX/UI) with all components developed in the analytics solution. By implementing analytics interfaces that focus on data storytelling and optimized integration pipelines for maintenance, this is how we foster adoption!"
  },
  {
    question: "What is your approach when starting a new initiative?",
    answer: "When we develop a new initiative with a partner, we always favor a risk-reducing approach. We always propose to start with an 'iteration 0' where we target a specific project that can be completed in a few weeks and quickly bring value to our partner. This way, we learn to work as a team quickly and get to know the business context well. Once our experts have mastered the business context, we can advise and accurately estimate the effort required to implement a complete analytics solution that truly meets business needs."
  },
  {
    question: "Do you work with partners of all sizes?",
    answer: "Absolutely! We adapt to each of our partners in our approach and in the solutions we offer. We are always ready to solve new challenges and support our partners in choosing solutions tailored to their business situation."
  },
  {
    question: "Are the solutions you implement hosted in your environments?",
    answer: "Never. Your data, your analytics infrastructure, your reports, your integration flows, or any artifacts of your solution are never hosted in our environments. For the sake of transparency and security for your organization, we ensure that we develop solutions that you own and control."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="faq-section">
      <div className="faq-grid">
        <div className="faq-left">
          <h2 className="faq-title">FAQ</h2>
          <p className="faq-desc">Here are some of our most frequently asked questions. If yours isn't here, please don't hesitate to contact us.</p>
        </div>
        <div className="faq-right">
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
                <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                  <span className="faq-toggle">{openIndex === i ? '-' : '+'}</span>
                  {faq.question}
                </button>
                {openIndex === i && (
                  <div className="faq-answer-box">
                    <button className="faq-close" onClick={() => setOpenIndex(null)} aria-label="Close">×</button>
                    <div className="faq-answer" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 