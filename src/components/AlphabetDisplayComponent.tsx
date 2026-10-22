"use client";
import React, { useState } from "react";
export default function AlphabetDisplayComponent() {
  const [selectedLetter, setSelectedLetter] = useState("");
  const items = ["A", "B", "C", "D", "E"];
  return (
    <section className="flex gap-2 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Selected Letter: {selectedLetter}</h1>
      <button className="border p-2 rounded-lg" onClick={() => setSelectedLetter(selectedLetter + 'A')}>
        A
      </button>
      <button className="border p-2 rounded-lg" onClick={() => setSelectedLetter(selectedLetter + 'B')}>
        B
      </button>
      <button className="border p-2 rounded-lg" onClick={() => setSelectedLetter(selectedLetter + 'C')}>
        C
      </button>
      <button className="border p-2 rounded-lg" onClick={() => setSelectedLetter(selectedLetter + 'D')}>
        D
      </button>
      <button className="border p-2 rounded-lg" onClick={() => setSelectedLetter(selectedLetter + 'E')}>
        E
      </button>
    </section>
  );
}

