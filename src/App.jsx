import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import PageMain from "./pages/PageMain";
import Error from "./pages/Error";
import Gallery from "./Components/Gallery";
import { ImagesProvider } from "./Components/ImagesProvider";

function App() {
  return (
    <BrowserRouter>
      <ImagesProvider>
        <Routes>
          <Route path="/" element={<PageMain />}>
            <Route index element={<Gallery />} />
            <Route path="most-view" element={<Outlet />}></Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ImagesProvider>
    </BrowserRouter>
  );
}

export default App;
