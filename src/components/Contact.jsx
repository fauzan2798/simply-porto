import { CONTACT } from "../constants";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20 text-center">
      <h2 className="my-10 text-4xl">Get in Touch</h2>
      <div className="tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Contact;
