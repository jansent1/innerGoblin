import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h1>CAREERS</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
        efficitur odio. Proin in elit et nulla ultrices ultricies.
      </p>
      <hr />
      <Outlet />
    </div>
  );
}
