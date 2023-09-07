import "./Contact.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function About() {
	const [formData, setFormData] = useState({
		to: "",
    from:"info@nftstore.com",
		subject: "",
		message: ""
	});

  const [data, setData] = useState(null);

	const {to, from, subject, message} = formData;

	const handleChange = (e) => {
    e.preventDefault();
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

  const contact = async () => {
		try {
			console.log(formData);
			const { data } = await axios ("/api/sendgrid/contact", {
				method: "POST",
				data: formData
			});
			console.log(data.message);
			setData(data.message);
		} catch (error) {
			console.log(error);
			setData(error.message);
		}
	}

  return (
    <div className="page-conteiner" id="About">
      <div className="contact">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Have questions or comments? We&apos;d love to hear from you! Fill out the form and we&apos;ll be in touch as soon as possible.</p>
        </div>
        <div className="contact-content">
          <div className="logo-div">
            <img src="#" alt="Nft logo"/>
          </div>
          <div className="contact-form">
            <form onSubmit={contact}>
              <div>
                <label htmlFor="">Email address</label>
                <input type="text"name="to" aria-describedby="emailHelp" placeholder="To whom may we reply?" value={to} onChange={handleChange} required/>
                <small>We&apos;ll never share your email with anyone else.</small>
              </div>
              <div>
                <label htmlFor="">Subject</label>
                <input type="text" name="subject" aria-describedby="emailHelp" placeholder="What's the topic?" value={subject} onChange={handleChange} required/>
              </div>
              <div>
                <label htmlFor="">Message</label>
                <textarea name="message" placeholder="Please, proceed to explain the situation" cols="30" rows="5" value={message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    </div>
  </div>
  )
}
