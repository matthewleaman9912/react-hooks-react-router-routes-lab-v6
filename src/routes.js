import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Home from "./pages/Home";
import Movie from "./pages/Movie";


const routes = [
  {
    path: "/",
    element: <Home />
},
{
    path: "/actors",
    element: <Actors />
},
{
    path: "/directors",
    element: <Directors />
},
{
    path: "/movies/:id",
    element: <Movie />
}
  ];

export default routes;