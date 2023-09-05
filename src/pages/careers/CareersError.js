import { Link, useRouteError } from "react-router-dom";

export default function CareersError() {
  const error = useRouteError();

  return (
    <div className="careers-error">
      <h2>ERROR</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the InnerGoblin Homepage</Link>
    </div>
  );
}
