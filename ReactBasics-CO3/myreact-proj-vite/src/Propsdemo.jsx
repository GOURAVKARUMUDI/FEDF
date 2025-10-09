function Greetings(props) {
  return <h2>Hello, {props.name}!</h2>;
}
function Propsdemo() {
  return (
    <div>
      <Greetings name="Gourav" />
      <Greetings name="Hari Charan Reddy" />
      <Greetings name="Mahitha" />
    </div>
  );
}
export default Propsdemo; 