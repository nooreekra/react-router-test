import './App.css';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { SinglePage } from './pages/Singlepage';
import { Notfound } from './pages/Notfound';


import { Layout } from './components/Layout';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog/:id" element={<SinglePage />}></Route>
          <Route path="*" element={<Notfound/>}></Route>
        </Route>
        </Routes>
    </>
  )
}

export default App;
