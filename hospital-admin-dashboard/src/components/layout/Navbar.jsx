function Navbar({ toggleTheme, dark }) {
  return (
    <div className="flex justify-between items-center p-4 bg-card dark:bg-darkCard shadow">
      <h3 className="text-lg font-semibold">Hospital Admin Dashboard</h3>

      <button
        onClick={toggleTheme}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Navbar;
