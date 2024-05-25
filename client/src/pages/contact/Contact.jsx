import "./Contact.css"
import { useState } from "react";
import axios from "axios";
import Logo from "../../components/svg/logo";

export default function About() {
	const [formData, setFormData] = useState({
		to: "",
    from:"info@nftstore.com",
		subject: "",
		message: ""
	});

  const [data, setData] = useState(null);

	const {to, subject, message} = formData;

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
    <div className="h-screen sm:pt-5 pt-2 minmd:px-4 minlg:px-4 minlg:mb-[-98px] mt-[100px]" id="Contact">
      <div className="contact pt-3">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Have questions or comments? We&apos;d love to hear from you! Fill out the form and we&apos;ll be in touch as soon as possible.</p>
        </div>
        <div className="w-100 flex lg:flex-row justify-center align-center gap-10 sm:flex-col align-center">
          <div className="m-auto hidden lg:block">
            <Logo/>
          </div>
          <div className="contact-form w-1/2">
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
              <button className="text-neutral-100 bg-gradient-to-r from-primary-400 to-primary-800 focus:ring-4 focus:outline-none focus:bg-primary-400 font-medium text-md lg:w-full w-1/2 m-auto px-6 py-3 text-center rounded-full" type="submit">Submit</button>
            </form>
          </div>
        </div>
    </div>
  </div>
  )
}
