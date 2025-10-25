import "./../css/ContactForm.css";

const ContactForm = () => {
    return (
        <div id="contact-form">
            <form method="POST" id="contact-form">
                <input type="hidden" name="access_key" value="79bfdd73-fff8-4a41-8eb2-23c90a33b16a" />
                <p>
                    <label for="name">Name:</label>
                    <input type="text" name="name" required />
                </p>
                <p>
                    <label for="name">Email:</label>
                    <input type="text" name="email" required />
                </p>
                <p>
                    <label for="name">Message:</label>
                    <textarea class="block" name="message" required></textarea>
                </p>
                <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
                <button type="submit">Submit Form</button>
                <div id="contact-result"></div>
            </form>
        </div>
    )
}

export default ContactForm;