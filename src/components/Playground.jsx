import React, { useState } from "react";
import { Terminal, Play, BookOpen } from "lucide-react";

export default function Playground({ presets }) {
  const [selectedPreset, setSelectedPreset] = useState(presets[0]);
  const [quantMode, setQuantMode] = useState("AWQ-4bit");

  return (
    <></>
  );
}
