function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
  }
  return (
    <>
      <h1>Hello from App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name"></input>
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

        <textarea name="Bio" id="" cols="30" rows="10" value="Bio">
        </textarea>

        <label htmlFor="notifications">Sign up for Email notifications
          <input type="checkbox" name="" id="" />
        </label>

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
