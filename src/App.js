import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  const css = `
      .e-grid .e-headercell {
        background-color: #333;
        color: #fff;
      }

      .e-gridcontent .e-rowcell {
        background-color: #333;
        color: #fff;
      }

      .e-grid .e-rowcell:not(.e-editedbatchcell):not(.e-updatedtd),
      .e-grid .e-detailrowcollapse:not(.e-editedbatchcell):not(.e-updatedtd),
      .e-grid .e-detailrowexpand:not(.e-editedbatchcell):not(.e-updatedtd),
      .e-grid .e-gridcontent .e-rowdragdrop:not(.e-editedbatchcell):not(.e-updatedtd),
      .e-grid .e-gridheader .e-rowdragdrop:not(.e-editedbatchcell):not(.e-updatedtd),
      .e-grid .e-emptyrow:not(.e-editedbatchcell):not(.e-updatedtd) {
        color: white !important;
      }

      .e-grid td.e-active {
        background-color: #888484;
      }

      .e-grid .e-row:hover .e-rowcell{
          background-color: #6f6f6f !important;
      }

      .e-pagercontainer  {
        margin-top: 10px !important;
      }

      .e-pagercontainer .e-icons  {
        padding-bottom: 15px !important;
      }

      .e-gridpager {
        background-color: #333333 !important;
      }

      .e-parentmsgbar {
        color: white !important;
        margin-top: 8px !important;
      }
  `;

  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      {currentMode === "Dark" && <style>{css}</style>}
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Tooltip */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* Navbar */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* Routes */}
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
