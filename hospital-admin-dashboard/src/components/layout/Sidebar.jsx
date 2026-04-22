function Sidebar() {
  return (
    <div className="w-60 h-screen bg-secondary text-white p-6">
      <h2 className="text-2xl font-bold mb-10">🏥 Admin</h2>

      <ul className="space-y-5 text-sm">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Patients</li>
        <li className="hover:text-blue-400 cursor-pointer">Doctors</li>
        <li className="hover:text-blue-400 cursor-pointer">Appointments</li>
      </ul>
    </div>
  );
}

export default Sidebar;
