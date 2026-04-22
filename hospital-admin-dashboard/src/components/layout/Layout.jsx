import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children, toggleTheme, dark }) {
  return (
    <div className="flex bg-lightBg dark:bg-darkBg min-h-screen text-black dark:text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar toggleTheme={toggleTheme} dark={dark} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
