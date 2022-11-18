import Navbar from "./components/NavigationBar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostDetail from "./pages/PostDetail";
import CreateNew from "./pages/CreateNew";

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-blog" element={<CreateNew />} />
        <Route path="/blog/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
