function StatsCard({ title, value }) {
  return (
    <div className="bg-card dark:bg-darkCard p-5 rounded-xl shadow">
      <h4 className="text-sm mb-2">{title}</h4>
      <h2 className="text-2xl font-bold text-primary">{value}</h2>
    </div>
  );
}

export default StatsCard;
