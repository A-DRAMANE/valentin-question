import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./app/Home";
import Slider from "./app/slider/Slider";
import FormComp from "./app/form/FormComp";
import Response from "./app/reponse/Response";
import Question from "./app/question/Question";

const router = createBrowserRouter([
  {
    path: "/*",
    element:  <Home />,
  },
  {
    path: "/slider",
    element:  <Slider />,
  },
  {
    path: "/form",
    element:  <FormComp />,
  },
  {
    path: "/reponse",
    element:  <Response />,
  },
  {
    path: "/question",
    element:  <Question />,
  },
]);

function App() {

  return (
    <>
      <main className="flex justify-center items-center h-[100vh] bg-red-100">
        <div className="bacground bg-red-800 p-10 sm:w-[400px] w-full h-full flex flex-col items-center justify-between">
          <RouterProvider router={router} />
        </div>
      </main>
    </>
  )
}

export default App
