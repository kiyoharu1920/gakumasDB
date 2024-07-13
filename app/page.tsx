"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getData");
      const json = await res.json();
      setData(json);
    }

    fetchData();
  }, []);

  return (
    <main>
      <h1>学マス比較</h1>
        <h1>Data from MongoDB</h1>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  );
}
