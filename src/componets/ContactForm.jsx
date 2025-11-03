import "./../css/ContactForm.css";
import {useState} from "react";

const ContactForm = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "79bfdd73-fff8-4a41-8eb2-23c90a33b16a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact-form">
      <form onSubmit={onSubmit}>
        <div>
            <p>Name:</p>
            <input type="text" name="name" required/>
        </div>
        <div>
            <p>Email:</p>
            <input type="email" name="email" required/>
        </div>
        <div>
            <p>Message</p>
            <textarea name="message" required></textarea>
        </div>
       

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  );
};

export default ContactForm;