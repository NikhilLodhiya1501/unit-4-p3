
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

function LabHome() {
  return <div className="lab-card">
    <div className="big-icon">#</div>
    <p className="tag">DEMO 01 / HASH ROUTER</p>
    <h1>URL with a <span>Hash.</span></h1>
    <p>Navigate below and observe the URL after the # symbol.</p>
    <div className="code-preview">example.com/#/about</div>
  </div>;
}

function LabAbout() {
  return <div className="lab-card">
    <div className="big-icon">↗</div>
    <p className="tag">ROUTE CHANGED SUCCESSFULLY</p>
    <h1>You're on <span>About.</span></h1>
    <p>HashRouter changes the URL fragment without requesting a new document from the server.</p>
  </div>;
}

export default function App() {
  return <HashRouter><div className="lab">
    <header><div className="lab-logo">ROUTER<span>LAB</span></div><span className="lab-badge">INTERACTIVE LEARNING</span></header>
    <div className="lab-grid">
      <aside><p>ROUTER TYPES</p><div className="selected">01 &nbsp; HashRouter</div><div>02 &nbsp; MemoryRouter</div><div>03 &nbsp; StaticRouter</div></aside>
      <main>
        <nav className="lab-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<LabHome />} />
          <Route path="/about" element={<LabAbout />} />
        </Routes>
        <div className="comparison">
          <div><b>HashRouter</b><p>Uses URL fragments</p></div>
          <div><b>MemoryRouter</b><p>Keeps history in memory</p></div>
          <div><b>StaticRouter</b><p>Designed for static/server rendering</p></div>
        </div>
      </main>
    </div>
    <footer>REACT ROUTING EXPLAINED · PRACTICAL 03</footer>
  </div></HashRouter>;
}