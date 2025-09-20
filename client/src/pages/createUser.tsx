//  pages/createUser.tsx

import { useState } from "react";
import { createUser } from "../services/users.service";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [about, setAbout] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    // stops page refresh
    e.preventDefault();

    // Validate input fields before submitting
    if (!name || !age || !about) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      // sends form data to BE
      const res = await createUser({ name, age: Number(age), about });

      // reset to empty feild
      setMessage(res.message);
      setAge("");
      setName("");
      setAbout("");
    } catch (err: any) {
      setMessage("Got Error creating user " + err.message);
    }
  };

  return (
    <>
      <div className="p-2">
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} //updates state each keystroke.
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              value={age}
              onChange={(e) => 
                //  Updates the `age` state with the numeric value from the input field.
                //  If the input is empty, sets `age` to an empty string ("") to allow clearing the field.
                setAge(e.target.value ? Number(e.target.value) : "")
              }
              required
            />
          </div>
          <div>
            <label htmlFor="about">About: </label>
            <input
              type="text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create</button>
        </form>
        {message && <p> {message}</p>}
      </div>
    </>
  );
};

export default CreateUser;