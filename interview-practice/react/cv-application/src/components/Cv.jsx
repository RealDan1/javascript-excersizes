export default function Cv({ cv }) {
  return (
    <div>
      <h1>{cv?.general?.name}'s CV</h1>
      <p>Email: {cv?.general?.email}</p>
      <p>Phone: {cv?.general?.phone}</p>
      <p>School Name: {cv?.education?.schoolName}</p>
      <p>Study Title: {cv?.education?.studyTitle}</p>
      <p>Study Date: {cv?.education?.studyDate}</p>
      <p>Company Name: {cv?.experience?.companyName}</p>
      <p>Position Title: {cv?.experience?.positionTitle}</p>
      <p>Responisibilities: {cv?.experience?.responisibilities}</p>
      <p>Worked From: {cv?.experience?.dateFrom}</p>
      <p>Worked Until: {cv?.experience?.dateUntil}</p>
    </div>
  );
}
