import { NavLink, Outlet } from "react-router-dom";
import Banner from "../components/home/Banner";

export default function ContactLayout() {
  return (
    <div className="contact-layout">
      <h2>Artist's Contact and FAQ</h2>
      <p>
        Sed ultricies pretium turpis. Nullam sed ligula vestibulum, tincidunt
        erat ut, sagittis tellus. Maecenas urna turpis, imperdiet ut massa a,
        consequat fermentum quam. Aliquam eu nisl eget ex aliquet venenatis ut
        sit amet orci. Aenean egestas sollicitudin nisi vel hendrerit. Donec
        nisi lorem, condimentum quis enim id, imperdiet lobortis purus. Duis
        dolor nunc, molestie vel arcu et, tristique aliquet sem.
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contactForm">Contact the Artist</NavLink>
      </nav>
      <Outlet />
      <Banner />
    </div>
  );
}
