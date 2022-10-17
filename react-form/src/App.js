import {useRef, useState} from "react"

function App() {
  const nameInput = useRef();
  const checkboxInput = useRef();

  const [user, setUser] = useState({
    name:"",
    email:"",
    phoneNumber:"",
    phoneType:"",
    staff:"",
    bio:"",
    emailNotification:true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  }
  return (
    <>
      <h1>Hello from App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameInput}></input>
        <input type="text" placeholder="Email"></input>
        <input type="tel" placeholder="Phone number"></input>

        <select>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="mobile">Mobile</option>
        </select>

        <label htmlFor="staff">Instructor
          <input type="radio" name="staff" id="Instructor" />
        </label>

        <label htmlFor="staff">Student
          <input type="radio" name="staff" id="Student" />
        </label>

        <textarea name="Bio" id="" cols="30" rows="10" placeholder="Bio">
        </textarea>

        <label htmlFor="notifications">Sign up for Email notifications
          <input type="checkbox" name="" value={user.emailNotification} id="" ref={checkboxInput}/>
        </label>

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
