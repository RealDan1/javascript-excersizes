export default function Cv({ cv }) {
  return (
    <div>
      <h1>{cv?.general?.name}'s CV</h1>
      <p>Education: {cv?.education?.schoolName}</p>
    </div>
  );
}
