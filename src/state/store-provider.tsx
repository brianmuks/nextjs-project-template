"use client";

import { useState } from "react";
import { RootStore, StoreContext } from "./root-store";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  // Created once per mounted tree (per request on the server, once in the browser).
  const [store] = useState(() => new RootStore());

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
