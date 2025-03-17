import FooterBar from "../components/shared/FooterBar";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";

// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component. This is how we can nest routes

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <FooterBar />
    </div>
  );
};

export default RootLayout;
