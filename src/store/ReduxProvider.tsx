"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}><PersistGate loading={null} persistor={storeRef.current.__persistor}>{children}</PersistGate></Provider>;
}
