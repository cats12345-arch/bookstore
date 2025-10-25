import "./../css/Contact.css";
import ContactForm from "./../componets/ContactForm";
import ContractIFrame from "./../componets/ContactIFrame";

const Contact = () => {
    return (
        <div id="contact">
            <h1>Contact Us</h1>
            <div id="content-columns">
                <ContactForm />
                <ContractIFrame />
            </div>
        </div>
    );
};

export default Contact;