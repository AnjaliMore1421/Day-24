import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import useTheme from "./hooks/useTheme";

function App() {
  const { dark, setDark } = useTheme();

  return (
    <Layout toggleTheme={() => setDark(!dark)} dark={dark}>
      <Dashboard />
    </Layout>
  );
}

export default App;
