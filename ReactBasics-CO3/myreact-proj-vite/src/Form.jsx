import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hello " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Enter Name</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} /><br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;