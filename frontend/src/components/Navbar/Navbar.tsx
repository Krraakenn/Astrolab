import { TextField } from "@mui/material";
import "../../styles/components/Navbar/navbar.css";
import { useState } from "react";
import { Database, DatabaseType, useDatabaseStore } from "../../zustand/store";
import DatabaseItem from "./DatabaseItem";

export default function Navbar() {
  const databases: Database[] = useDatabaseStore((state) => state.databases);
  const addDatabase = useDatabaseStore((state) => state.addDatabase);
  return (
    <div className="navbar-box">
      <div className="navbar-button-box">
        <button
          className="navbar-button"
          onClick={() =>
            addDatabase({
              name: "zozo",
              type: DatabaseType.Postgres,
              host: "localhost",
              port: 5432,
              user: "tristanus",
              password: "",
            })
          }
        >
          + New Connection
        </button>
      </div>
      <div className="navbar-input-box">
        <input className="navbar-input" placeholder="Filter" />
      </div>
      <div className="navbar-databases-saved-box">
        <p className="navbar-databases-saved">SAVED {databases.length}</p>
      </div>
      <div className="navbar-databases-box">
        {databases.length === 0 ? (
          <p className="navbar-databases-box-no-connection">
            No saved connections
          </p>
        ) : (
          <div className="navbar-databases-box-items-box">
            {databases.map((db) => (
              <DatabaseItem title={db.name} description={db.host + ":" + db.port + "/" + db.name}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
