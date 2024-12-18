import HeaderNav from "./HeaderNav";

const HeaderBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between">
      <HeaderNav />
    </header>
  );
};

export default HeaderBar;
