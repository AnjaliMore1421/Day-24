function Button({ children }) {
  return (
    <button className="bg-primary text-white px-4 py-2 rounded hover:opacity-90">
      {children}
    </button>
  );
}

export default Button;
