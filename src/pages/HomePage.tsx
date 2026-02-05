import '.././reset.css';
import '.././App.css';

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import bardo from '../assets/bardo.jpg';
import Bartek_interpreting from '../assets/Bartek_interpreting.jpg';
import sections from '../assets/data/sections';

import Paragraph from '../components/Paragraph';
import CollapsibleParagraph from '../components/CollapsibleParagraph';

import Header from '../components/Header';
import EslDialog from '../components/EslDialog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import PriceList from '../components/PriceList';

import { scrollToSection } from '../utils';

function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<React.ReactNode>(null);

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

 const renderPriceList = (courseId: string) => {
   switch (courseId) {
     case 'course2':
       return (
         <PriceList
           price1="120zł"
           price2="60zł/osoba"
           price3="do negocjacji"
         />
       );

     default:
       return <PriceList />;
   }
 };


  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      scrollToSection(id, () => {}, 150);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <img src={bardo} alt="Bardo logo" className="bardo-logo" />

        {sections.map((section, index) => (
          <div key={index} id={section.id} className="section">
            <h1>{section.header}</h1>

            {section.id === 'courseList' ? (
              <div className="course-list">
                {section.courses && section.courses.map(course => (
                  <div key={course.id} className="course">
                    <img src={course.image} alt={course.title} />

                    {course.id === "course2" ? (
                      <h2>
                        <Link to="/english-in-sports-and-movement">
                          {course.title}
                        </Link>
                      </h2>
                    ) : (
                      <h2>{course.title}</h2>
                    )}

                    <p>{course.description}</p>

                    {course.id === "course1" && (
                      <>
                        <p>
                          Unless you suggest otherwise, we will mostly use
                          these kinds of dialogs as a starter for:
                        </p>
                        <ul>
                          <li>Discussion</li>
                          <li>Phrase analysis</li>
                          <li>Comparing and contrasting</li>
                          <li>Synonym and antonym practice</li>
                        </ul>
                        <EslDialog />
                      </>
                    )}

                   {renderPriceList(course.id)}

                    {/*course.id === 'course10' || course.id === 'course5' ? (
                      <PriceList
                        price1="120zł"
                        price2="60zł/osoba"
                        price3="140zł/grupa"
                      />
                    ) : (
                      <PriceList />
                    )*/}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <img src={section.image} alt={`Section ${index + 1}`} />
                {Array.isArray(section.text) ? (
                  section.text.map((paragraph, i) => (
                    <div
                      key={`${section.id}-${i}`}
                      className={
                        section.id === 'section5' && (i === 0 || i === 1 || i === 5)
                          ? 'darker-background'
                          : ''
                      }
                    >
                      {section.id === 'section1' ? (
                        <CollapsibleParagraph
                          header={paragraph.header}
                          content={paragraph.content}
                        />
                      ) : (
                        <Paragraph
                          header={paragraph.header}
                          content={paragraph.content}
                        />
                      )}

                      {section.id === 'section3' && i === 4 && (
                        <img src={Bartek_interpreting} alt="Bartek_interpreting" />
                      )}
                    </div>
                  ))
                ) : (
                  <p>{section.text}</p>
                )}
              </>
            )}
          </div>
        ))}

        <Contact />
      </div>

      <Footer />
      {isPopupOpen && <Popup popupContent={popupContent} onClose={closePopup} />}
    </div>
  );
}

export default HomePage;
