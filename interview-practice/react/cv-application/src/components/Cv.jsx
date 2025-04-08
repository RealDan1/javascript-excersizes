export default function Cv({ cv }) {
  return (
    <div>
      <h1>{cv?.general?.name}'s CV</h1>
      <p>Email: {cv?.general?.email}</p>
      <p>Phone: {cv?.general?.phone}</p>
      <p>Education: {cv?.education?.schoolName}</p>
    </div>
  );
}
