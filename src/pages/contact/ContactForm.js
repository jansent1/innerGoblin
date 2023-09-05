import { Form, redirect, useActionData } from "react-router-dom";

export default function ContactForm() {
  const data = useActionData();

  return (
    <div className="contact-form">
      <h3>Contact Us</h3>
      <Form method="post" action="/contact/contactform">
        <div className="mb-3">
          {" "}
          {/* Add Bootstrap margin */}
          <label htmlFor="email">
            <span>Your email:</span>
            <input type="email" id="email" name="email" required />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="firstname">
            <span>Your Firstname:</span>
            <input type="text" id="firstname" name="firstname" required />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="lastname">
            <span>Your Lastname:</span>
            <input type="text" id="lastname" name="lastname" required />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="extrainfo">
            <span>Additional info:</span>
            <textarea id="extrainfo" name="extrainfo" required></textarea>
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="message">
            <span>Your message:</span>
            <textarea id="message" name="message" required></textarea>
          </label>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    firstName: data.get("firstname"),
    lastName: data.get("lastname"),
    extraInfo: data.get("extrainfo"),
    message: data.get("message"),
  };

  console.log(submission);

  // send post request:
  if (submission.message.length < 10) {
    return { error: "Message must be over 10 characters long." };
  }

  //redirect the user:
  return redirect("/");
};
