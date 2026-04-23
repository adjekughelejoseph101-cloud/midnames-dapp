import { useState } from "react";

export default function App() {
  const [domain, setDomain] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const resolve = async () => {
    setLoading(true);

    setTimeout(() => {
      setData({
        domain,
        status: "resolved",
        message: "Domain data fetched (mocked for frontend compatibility)"
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>🌐 Midnames Gift Hub</h1>

      <input
        placeholder="example.night"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{ padding: 10, width: 250 }}
      />

      <button onClick={resolve} style={{ marginLeft: 10 }}>
        Resolve
      </button>

      {loading && <p>Loading...</p>}

      {data && (
        <pre style={{ marginTop: 20 }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
