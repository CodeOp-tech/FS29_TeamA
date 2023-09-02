import "./Contact.css";

export default function Contact() {
	return (
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
					<form action="">
						<div>
							<label htmlFor="">Email address</label>
							<input type="text"name="email" aria-describedby="emailHelp" placeholder="Enter email" />
							<small>We&apos;ll never share your email with anyone else.</small>
						</div>
						<div>
							<label htmlFor="">Subject</label>
							<input type="text" name="subject" aria-describedby="emailHelp" placeholder="Subject"/>
						</div>
						<div>
							<label htmlFor="">Message</label>
							<textarea name="message" placeholder="Message"></textarea>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
	</div>
	)
}
