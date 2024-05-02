import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
const db = getDatabase(app);
function App() {
  const putData = () => {
    set(ref(db, "users/aman"), {
      id: 1,
      name: "aman",
      age: 23,
    });
  };

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
