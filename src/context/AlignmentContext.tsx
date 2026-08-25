import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Alignment } from "../content/copy";

const STORAGE_KEY = "alignment";

interface AlignmentContextValue {
  alignment: Alignment | null;
  choose: (alignment: Alignment) => void;
  reset: () => void;
}

const AlignmentContext = createContext<AlignmentContextValue | undefined>(
  undefined
);

function readStored(): Alignment | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "good" || value === "evil" ? value : null;
}

export function AlignmentProvider({ children }: { children: ReactNode }) {
  const [alignment, setAlignment] = useState<Alignment | null>(() =>
    readStored()
  );

  useEffect(() => {
    const root = document.documentElement;
    if (alignment) {
      root.setAttribute("data-alignment", alignment);
    } else {
      root.removeAttribute("data-alignment");
    }
  }, [alignment]);

  const choose = useCallback((value: Alignment) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setAlignment(value);
  }, []);

  const reset = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setAlignment(null);
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <AlignmentContext.Provider value={{ alignment, choose, reset }}>
      {children}
    </AlignmentContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAlignment() {
  const ctx = useContext(AlignmentContext);
  if (!ctx) {
    throw new Error("useAlignment must be used within an AlignmentProvider");
  }
  return ctx;
}
