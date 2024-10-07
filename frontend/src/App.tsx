import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatabaseType, useGlobalStore } from "./zustand/store";
import { TextField } from "@mui/material";

function App() {
  const [connectionType, setConnectionType] = React.useState("");
  const [host, setHost] = React.useState("localhost");
  const [port, setPort] = React.useState("");

  const databaseType: DatabaseType = useGlobalStore(
    (state) => state.connectionType
  );

  

  const handleChange = (event: SelectChangeEvent) => {
    setConnectionType(event.target.value as string);
  };

  return (
    <div className="box">
      <Navbar />
      <div className="middle-box">
        {connectionType !== "" ? (
          <div className="create-connection">
            <p className="create-connection-title">New Connection</p>
            <p className="add-new-connection-type">Connection Type</p>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={connectionType}
              onChange={handleChange}
              size="small"
              fullWidth
              sx={{ color: "grey", fontSize: "12px", textAlign: "start" }}
            >
              <MenuItem value={DatabaseType.Postgres}>PostgreSQL</MenuItem>
              <MenuItem value={DatabaseType.MySql}>MySql</MenuItem>
              <MenuItem value={DatabaseType.MariaDB}>MariaDB</MenuItem>
            </Select>
            <p className="add-new-connection-type">Connection Mode</p>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={connectionType}
              onChange={handleChange}
              size="small"
              fullWidth
              sx={{ color: "grey", fontSize: "12px", textAlign: "start" }}
            >
              <MenuItem value={DatabaseType.Postgres}>PostgreSQL</MenuItem>
              <MenuItem value={DatabaseType.MySql}>MySql</MenuItem>
              <MenuItem value={DatabaseType.MariaDB}>MariaDB</MenuItem>
            </Select>
            <div className="create-co-host-and-port">
              <div className="create-co-host">
                <p style={{fontSize: "12px"}} >Host</p>
                <TextField sx={{color: "grey"}} fullWidth size="small" value={host} />
              </div>
              <div className="create-co-port">
                <p style={{fontSize: "12px"}}>Port</p>
                <TextField sx={{color: "grey"}} size="small" value={port} />
              </div>
            </div>
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
              <MenuItem value={DatabaseType.Postgres}>PostgreSQL</MenuItem>
              <MenuItem value={DatabaseType.MySql}>MySql</MenuItem>
              <MenuItem value={DatabaseType.MariaDB}>MariaDB</MenuItem>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
