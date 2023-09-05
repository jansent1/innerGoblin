import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Mauris mollis rhoncus consequat. Suspendisse
          potenti. Curabitur volutpat velit vitae urna facilisis, quis auctor
          augue porttitor. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed eu accumsan lacus.
          Curabitur diam massa, ultrices eget nisl sed, porta bibendum diam.
        </p>
      </div>
    </div>
  );
}

// Loader Function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw Error("Could not find that career.");
  }
  return res.json();
};
