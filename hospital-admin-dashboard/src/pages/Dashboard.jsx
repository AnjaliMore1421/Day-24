import StatsCard from "../components/ui/StatsCard";

function Dashboard() {
  return (
    <div className="container-padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <StatsCard title="Total Patients" value="1,250" />
      <StatsCard title="Appointments" value="320" />
      <StatsCard title="Doctors" value="45" />
      <StatsCard title="Revenue" value="₹2.5L" />
    </div>
  );
}

export default Dashboard;
