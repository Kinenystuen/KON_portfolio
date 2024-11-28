import { Route, Routes } from "react-router-dom";
import Home from "./_root/pages/Home";
import RootLayout from "./_root/RootLayout";
import PageNotFound from "./_root/pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="art" element={<div>Art</div>} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
