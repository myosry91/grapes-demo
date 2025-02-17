import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import geditorConfig from "./api_utils/geditor_config";

function App() {
 const [editor, setEditor] = useState(null);
 const [assets, setAssets] = useState([]);

 useEffect(() => {
   const editor = geditorConfig(assets, 0);
   setEditor(editor);
 }, [ assets]);
  return (
    <div className="App">
      <div
        id="navbar"
        className="sidenav d-flex flex-column overflow-scroll position-fixed"
      >
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h3 logo">Code Dexterous</span>
          </div>
        </nav>

        <Sidebar />
      </div>
      <div
        className="main-content position-relative w-85 start-15"
        id="main-content"
      >
        <TopNav />
        <div id="editor"></div>
      </div>
    </div>
  );
}

export default App;
