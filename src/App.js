import React from "react";
import { Header } from './components/Header/Header'
import { Characters } from './components/Characters/Characters'
import "./style.css";

export default function App() {
  return (
    <div>
      <Header />
      <Characters />
    </div>
  );
}
