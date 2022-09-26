import { Route, Routes } from "react-router-dom";
import Home from "./UserPost";
import CreatePost from "./UserPost/CreatePost";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
    </div>
  );
}

export default App;
