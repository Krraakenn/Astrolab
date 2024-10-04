import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatabaseType, useGlobalStore } from "./zustand/store";

function App() {
  const [connectionType, setConnectionType] = React.useState("");

  const databaseType: DatabaseType = useGlobalStore((state) => state.connectionType)

  const handleChange = (event: SelectChangeEvent) => {
    setConnectionType(event.target.value as string);
  };

  return (
    <div className="box">
      <Navbar />
      <div className="middle-box">
        {connectionType !== "" ? (
          <div className="create-connection">
            <p className="">New Connection</p>
          </div>
        ) : (
          <div className="add-new-connection">
            <p className="add-new-connection-title">New Connection</p>
            <p className="add-new-connection-type">Connection Type</p>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={connectionType}
              onChange={handleChange}
              size="small"
              sx={{ color: "grey", fontSize: "12px" }}
            >
              <MenuItem value={"pgsql"}>PostgreSQL</MenuItem>
              <MenuItem value={"mysql"}>MySql</MenuItem>
              <MenuItem value={"mariadb"}>MariaDB</MenuItem>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
