// DB poort openzetten: json-server -p 4000 -w ./data/db.json

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import Blog from "./pages/Blog";
import ArtistsResources from "./pages/ArtistsResources";
import Shop from "./pages/Shop";
import ContactForm, { contactAction } from "./pages/contact/ContactForm";
import Faq from "./pages/contact/Faq";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

// Lay outs
import RootLayout from "./layouts/RootLayout";
import ContactLayout from "./layouts/ContactLayout";
import CareersLayout from "./layouts/CareersLayout";

// create router with component props
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactLayout />}>
        <Route
          path="/contact/contactform"
          element={<ContactForm />}
          action={contactAction}
        />
        <Route path="/contact/faq" element={<Faq />} />
      </Route>
      <Route path="/blog" element={<Blog />} />
      <Route path="/artistsresources" element={<ArtistsResources />} />
      <Route path="/shop" element={<Shop />} />

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
