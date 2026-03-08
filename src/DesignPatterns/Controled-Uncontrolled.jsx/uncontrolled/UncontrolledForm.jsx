import { createRef } from "react";

function UncontrolledForm() {
  const nameInputRef = createRef();
  const ageInputRef = createRef();
  const submitHandler = (e) => {
    console.log("name", nameInputRef.current.value);
    console.log("age", ageInputRef.current.value);
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <input name="name" type="text" placeholder="Name" ref={nameInputRef} />
      <input name="age" type="number" placeholder="Age" ref={ageInputRef} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UncontrolledForm;
