import contact from '../assets/contact.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const emailAddress = 'bartosznowickihq@gmail.com';
  const fbMessengerLink = 'https://m.me/BardoLanguageDevelopment';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    alert('email skopiowany');
  };

  const handleOpenEmailApp = () => {
    const subject = 'Conversation Inquiry';
    const body = 'Hi, I would like to inquire about...';
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleOpenMessenger = () => {
    const message = 'Hi, I would like to inquire about...';
    window.open(`${fbMessengerLink}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div id="contact" className="section">
        <h1>Kontakt</h1>
        <img src={contact} alt="contact" className="" />
        <div className="email">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>bartosznowickihq@gmail.com</span>
                  {/*<a href="https://www.facebook.com/BardoLanguageDevelopment" target="_blank" rel="noopener noreferrer" className="facebook-icon">
                      <FontAwesomeIcon icon={faFacebook} />*/}
                  </a>
        </div>
           {/*<div className="button-group">
               <button
                 className="modern-button"
                 onClick={() => {
                   fbq('track', 'Lead', { content_name: 'Skopiuj Adres Button' }); // Track "Lead" event for this button
                   handleCopyEmail(); // Keep the original functionality
                 }}>
                 Skopiuj adres
               </button>

               <button
                 className="modern-button"
                 onClick={() => {
                   fbq('track', 'Contact', { content_name: 'Wyślij Email Button' }); // Track "Contact" event for this button
                   handleOpenEmailApp(); // Keep the original functionality
                 }}>
                 Wyślij email
               </button>

               <button
                 className="modern-button"
                 onClick={() => {
                   fbq('track', 'Contact', { content_name: 'Messenger Button' }); // Track "Contact" event for this button
                   handleOpenMessenger(); // Keep the original functionality
                 }}>
                 Wyślij wiadomość przez Messenger
               </button>
           </div>*/}
    </div>
  );
};

export default Contact;