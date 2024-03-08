import { useCallback, useContext } from "react";

import { removeStoredWindow } from "../../data/repository/WindowsRepository";
import { StoredWindowsContext } from "../contexts/StoredWindowsContext";

export const useRemoveStoredWindow = (): ((id: string) => Promise<void>) => {
  const { setStoredWindows } = useContext(StoredWindowsContext);

  const callback = useCallback(
    async (id: string) => {
      const newStoredWindows = await removeStoredWindow(id);
      setStoredWindows(newStoredWindows);
    },
    [setStoredWindows],
  );

  return callback;
};
