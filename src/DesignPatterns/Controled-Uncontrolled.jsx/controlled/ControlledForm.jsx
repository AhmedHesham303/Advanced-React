import { useEffect, useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  useEffect(() => {
    if (name.length < 2) {
      console.log("must be more than 2 chars");
    }
    if (Number(age) <= 0) console.log("age must be a positive number");
  }, [name, age]);
  const submitHandler = (e) => {
    console.log("name", name);
    console.log("age", age);
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        name="name"
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        value={age}
        type="number"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ControlledForm;
