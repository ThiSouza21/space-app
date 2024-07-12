import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import PageMain from "./pages/PageMain";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageMain />}>
          <Route index element={<Outlet />}></Route>
          <Route path="most-view" element={<Outlet />}></Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
