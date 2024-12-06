import HeaderNav from "./HeaderNav";

const HeaderBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between lg:border-b">
      <HeaderNav />
    </header>
  );
};

export default HeaderBar;
