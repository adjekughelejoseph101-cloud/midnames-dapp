import { useState } from "react";
import { createDefaultProvider, getDomainProfile } from "@midnames/sdk";

export default function App() {
  const [domain, setDomain] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resolve = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const provider = createDefaultProvider({ networkId: "preprod" });
      const res = await getDomainProfile(domain, { provider });
      setData(res?.data);
    } catch (e) {
      setError("Failed to resolve domain");
    }

    setLoading(false);
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
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <pre style={{ marginTop: 20 }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
