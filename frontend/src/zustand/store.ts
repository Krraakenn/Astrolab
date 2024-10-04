import { create } from "zustand";

export enum DatabaseType {
  Postgres = "PGSQL",
  MySql = "MYSQL",
  MariaDB = "MARIADB",
  None = "",
}

export interface Database {
  name: string;
  type: DatabaseType;
  host: string;
  port: number;
  user: string;
  password: string;
}

interface DatabaseState {
  databases: Database[];
  addDatabase: (db: Database) => void;
  removeDatabase: (name: string) => void;
  updateDatabase: (db: Database) => void;
}

interface GlobalState {
  connectionType: DatabaseType;
}

export const useDatabaseStore = create<DatabaseState>((set) => ({
  databases: [],

  addDatabase: (db: Database) =>
    set((state) => ({
      databases: [...state.databases, db],
    })),

  removeDatabase: (name: string) =>
    set((state) => ({
      databases: state.databases.filter((db) => db.name !== name),
    })),

  updateDatabase: (updatedDb: Database) =>
    set((state) => ({
      databases: state.databases.map((db) =>
        db.name === updatedDb.name ? updatedDb : db
      ),
    })),
}));

export const useGlobalStore = create<GlobalState>((set) => ({
  connectionType: DatabaseType.None,
}));
