import { Route, Routes } from "react-router-dom";
import Home from "./_root/pages/Home";
import RootLayout from "./_root/RootLayout";
import PageNotFound from "./_root/pages/PageNotFound";
import PageGallery from "./_root/pages/PageGallery";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<PageGallery />} />
          <Route path="gallery/:id" element={<PageGallery />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
