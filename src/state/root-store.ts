"use client";

import React from "react";
import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import type { Nullable } from "@/types/common";
import type { UserProfile } from "@/types/user";

class SessionStore {
  user: Nullable<UserProfile> = null;
  sidebarOpen = true;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "SessionStore",
      properties: ["user", "sidebarOpen"],
      storage:
        typeof window !== "undefined" ? window.localStorage : undefined,
    });
  }

  setUser = (user: Nullable<UserProfile>) => {
    this.user = user;
  };

  toggleSidebar = () => {
    this.sidebarOpen = !this.sidebarOpen;
  };

  reset = () => {
    this.user = null;
    this.sidebarOpen = true;
  };
}

export class RootStore {
  sessionStore: SessionStore;

  constructor() {
    this.sessionStore = new SessionStore();
    makeAutoObservable(this);
  }

  reset = () => {
    this.sessionStore.reset();
  };
}

// No module-level store instance: on the server a module singleton is shared
// by every request, which leaks one user's state into another's render.
// StoreProvider creates one store per React tree instead.
export const StoreContext = React.createContext<RootStore | null>(null);

export function useStore() {
  const store = React.useContext(StoreContext);

  if (!store) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return store;
}
