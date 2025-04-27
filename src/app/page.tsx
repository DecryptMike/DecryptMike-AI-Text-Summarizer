"use client";

import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    setTimeout(() => {
      setSummary(`Fake summary for: "${inputText.slice(0, 30)}..."`);
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-green-400 font-mono p-4">
      <div className="bg-black bg-opacity-80 border-2 border-green-400 rounded-2xl p-8 max-w-2xl w-full flex flex-col items-center shadow-lg backdrop-blur-md">
        
        <img
          src="/a34.png"
          alt="DecryptMike Logo"
          className="w-24 h-24 mb-6 rounded-full border-2 border-green-400 shadow-lg"
        />
        
        <h1 className="text-3xl font-bold mb-6 text-center">Decrypt Mike<br></br>AI Text Summarizer</h1>

        <textarea
          className="w-full p-4 mb-4 rounded-lg bg-black bg-opacity-70 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          rows={6}
          placeholder="Paste your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button
          onClick={handleSummarize}
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg transition"
        >
          {loading ? "Summarizing..." : "Summarize"}
        </button>

        {summary && (
          <div className="mt-6 p-4 bg-black bg-opacity-70 border border-green-400 rounded-lg text-green-300 w-full">
            <h2 className="text-xl font-semibold mb-2">Summary:</h2>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </main>
  );
}