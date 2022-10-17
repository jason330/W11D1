import {useRef, useState} from "react"

function App() {
  // const nameInput = useRef();
  // const checkboxInput = useRef();

  const [user, setUser] = useState({
    name:"",
    email:"",
    phoneNumber:"",
    phoneType:"",
    staff:"",
    bio:"",
    emailNotification:true
  });

  const [errors, setErrors] = useState([]);

  const handleChange = incomingKey => {
    return (e) => {
      const userObj = Object.assign({}, user, {[incomingKey]: e.target.value})
      setUser(userObj)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validates();
    if (errors.length) {
      setErrors(errors)
    }
    console.log(user)
  }
  return (
    <>
      <h1>Hello from App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleChange("name")}></input>
        <input type="text" placeholder="Email" onChange={handleChange("email")}></input>
        <input type="tel" placeholder="Phone number" onChange={handleChange("phoneNumber")}></input>

        <select onChange={handleChange("phoneType")}>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="mobile">Mobile</option>
        </select>

        <label htmlFor="staff">Instructor
          <input type="radio" name="staff" id="Instructor" value="instructor" onChange={handleChange("staff")}/>
        </label>

        <label htmlFor="staff">Student
          <input type="radio" name="staff" id="Student" value="student" onChange={handleChange("staff")}/>
        </label>

        <textarea name="Bio" id="" cols="30" rows="10" placeholder="Bio" onChange={handleChange("bio")}>
        </textarea>

        <label htmlFor="notifications">Sign up for Email notifications
          <input type="checkbox" name="" value={user.emailNotification} id="" onChange={handleChange("emailNotification")}/>
        </label>

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
