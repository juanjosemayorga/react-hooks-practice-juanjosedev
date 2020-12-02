import React from "react";
import { Header } from './components/Header'
import { Characters } from './components/Characters'
import "./style.css";

export default function App() {
  return (
    <div>
      <Header />
      <Characters />
    </div>
  );
}
