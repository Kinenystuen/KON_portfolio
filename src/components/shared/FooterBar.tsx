const FooterBar = () => {
  return (
    <footer className="relative">
      <svg
        viewBox="0 0 1280 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="color-customDarkBlue dark:color-customDarkBlueDark"
      >
        <path
          d="M1280 11C1280 11 502.5 46 0 0.5V46H1280V11Z"
          fill="var(--svg-fill-light)"
        />
      </svg>

      <div className="bg-customDarkBlue dark:bg-customDarkBlueDark p-10 pt-20 flex gap-0 justify-center">
        <p className="text-center text-sm text-white">
          Kine Odden Nystuen - Portfolio
        </p>
      </div>
    </footer>
  );
};

export default FooterBar;
