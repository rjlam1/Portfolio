import {
  createBrowserRouter,
} from "react-router";
import MainLaOut from "../layout/MainLAOut";

export const router = createBrowserRouter([
  {
    index: "true",
    element: <MainLaOut></MainLaOut>,
  },
]);