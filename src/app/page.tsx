"use client";

import { useState } from "react";
import { quotes } from "@/data/quotes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = quotes
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map((q) => q.text);
    setResults(filtered);
  };

  return (
    <>
      <header className="h-20 bg-gray-900 text-4xl text-white p-1 flex justify-center items-center font-serif">
        Quote Generator
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-700">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-md space-y-4"
        >
          <div>
            <Label htmlFor="topic">
              Enter Topic (e.g., motivation, success, life)
            </Label>
            <Input
              id="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Type a topic..."
              className="mt-4 h-12"
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="w-50 h-12">
              Generate Quotes
            </Button>
          </div>
        </form>

        <div className="mt-6 space-y-2 ">
          {results.length > 0 ? (
            results.map((quote, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-md shadow-sm hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg"
              >
                {quote}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No quotes found.</p>
          )}
        </div>
      </main>
      <footer className="h-10 bg-gray-900 text-white p-1 flex justify-center items-center text-10 ">
        &copy; 2025 Bilal Ahmed. &reg; All rights reserved.
      </footer>
    </>
  );
}
