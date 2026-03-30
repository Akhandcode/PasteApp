import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Paste from './components/Paste';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VeiwPaste from './components/VeiwPaste';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        {children}
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/pastes",
    element: (
      <Layout>
        <Paste />
      </Layout>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <Layout>
        <VeiwPaste />
      </Layout>
    ),
  },
]);
function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
   )
}

export default App
