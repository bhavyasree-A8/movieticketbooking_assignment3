import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-cream dark:bg-luxuryblack">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main
          className="
            flex-1
            p-6
            overflow-auto
            bg-gradient-to-br
            from-beige
            to-champagne
            dark:from-luxuryblack
            dark:to-luxgray
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
