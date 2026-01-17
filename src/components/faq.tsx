import React, { useState, type ReactNode } from "react";
import styles from './faq.module.css';
import { Plus, Minus } from "lucide-react";

interface FAQCell {
  question: string;
  answer: ReactNode;
}

const faqData: FAQCell[] = [
  {
    question: "What are ways I can contribute to the community?",
    answer: (
      <> 
        There are many ways to contribute to the community. You can volunteer at local shelters, food banks, or other service organizations, participate in civic activities like voting, or simply make a positive difference in your daily interactions with others.
      </>
    ),
  },
  {
    question: "How do I contact the City of Friendswood?",
    answer: (
      <>
        You can contact us by visiting the official Friendswood{" "}
        <a
          href="https://www.ci.friendswood.tx.us/directory.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          directory page
        </a>{" "}
        for general information and department contacts. You can also call Friendswood City Hall at (281) 996-3320 or visit in-person at 910 S Friendswood Drive, Friendswood TX 77546.
      </>
    ),
  },
  {
    question: "How can I stay up to date with events happening in Friendswood?",
    answer: (
      <>
        Check out the events calendar on this website or visit the official Friendswood{" "}
        <a
          href="https://www.ci.friendswood.tx.us/371/Events"
          target="_blank"
          rel="noopener noreferrer"
        >
          events page
        </a>{" "}
        for the latest information on upcoming events and activities in the community!
      </>
    ),
  },
  {
    question: "What do I do in case of an emergency?",
    answer: (
      <>
      You can contact Emergency Management using this{" "}
        <a
          href="https://www.ci.friendswood.tx.us/formcenter/Fire-Marshal-Emergency-Management-10/Contact-Us-Office-of-Emergency-Managemen-56"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact form
        </a>{""}
        . If you would like to submit a Public Information Request, you may use the City's{" "}
        <a
          href="https://www.ci.friendswood.tx.us/745/Public-Records-Research"
          target="_blank"
          rel="noopener noreferrer"
        >
          Public Information Request (PIR) System
        </a>{""}, email your request to the City's designated PIR email at records@friendswood.com, or hand-deliver or mail your request to the attention of the City Secretary, Raquel Martinez, 910 S. Friendswood Drive, Friendswood, Texas 77546-4856.
        <br />
        <br />

        In case of life-threatening emergencies, always dial 911.
      </>
    ),
  },
  {
    question: "How do I report an incident?",
    answer: (
    <>
    To report an incident, use the {" "}
        <a
          href="https://www.ci.friendswood.tx.us/778/Citizens-Online-Reporting-System"
          target="_blank"
          rel="noopener noreferrer"
        >
          online citizen police report system
        </a>{" "}to submit a report immediately and print a copy of the police report for free. If this is an emergency, please call 911.
    </>
    ),
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
        <div className={styles.faqGrid}>
          {faqData.map((cell, index) => (
            <div className={styles.faqCell} key={index}>
              <div className={styles.faqQuestion}>
                <h2 className={styles.questionText}>{cell.question}</h2>  
                <button className={styles.questionButton} onClick={() => toggleQuestion(index)}>
                  {openIndex === index ? <Minus size={32} strokeWidth={2} /> : <Plus size={32} strokeWidth={2} />}
                </button>
              </div>
              <div className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ""}`}>
                <p className={styles.answerText}>{cell.answer}</p>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default FAQ;