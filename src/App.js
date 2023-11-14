
import './App.css';
import Signup from './component/Signup';
import Dashboard from "./component/Dashboard"
import {RouterProvider, createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/dashboard",  // Move this route outside of the /signup hierarchy
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
