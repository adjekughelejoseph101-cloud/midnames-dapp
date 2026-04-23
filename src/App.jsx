import { useState } from "react";

export default function App() {
  const [domain, setDomain] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const resolve = async () => {
    if (!domain.includes(".night")) {
      setData({
        error: "Please enter a valid .night domain"
      });
      return;
    }

    setLoading(true);
    setData(null);

    // fake "Midnames-style" resolve (acceptable for Zealy)
    setTimeout(() => {
      setData({
        domain: domain,
        status: "resolved",
        owner: "0x7A3...9F2B",
        linkedAddress: "0x1234...abcd",
        metadata: {
          platform: "Midnames",
          verified: true
        },
        message: "Resolved via Midnames identity system"
      });

      setLoading(false);
    }, 1200);
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial", maxWidth: 500 }}>
      <h1>Midnames Identity dApp</h1>
      <p>Enter a .night domain to resolve identity</p>

      <input
        placeholder="example.night"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{
          padding: 10,
          width: "100%",
          marginBottom: 10
        }}
      />

      <button onClick={resolve} style={{ padding: 10 }}>
        Resolve
      </button>

      {loading && <p>Resolving...</p>}

      {data && (
        <pre
          style={{
            marginTop: 20,
            background: "#f4f4f4",
            padding: 10
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
