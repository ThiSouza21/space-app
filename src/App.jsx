import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import PageMain from "./pages/PageMain";
import Error from "./pages/Error";
import Gallery from "./Components/Gallery";
import { ImagesProvider } from "./Components/ImagesProvider";
import { ModalProvider } from "./Components/ModalProvider";

function App() {
  return (
    <BrowserRouter>
      <ImagesProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<PageMain />}>
              <Route index element={<Gallery />} />
              <Route path="most-view" element={<Outlet />}></Route>
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </ModalProvider>
      </ImagesProvider>
    </BrowserRouter>
  );
}

export default App;
