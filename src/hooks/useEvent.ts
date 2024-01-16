import { useEffect } from "react";
import { event } from "../utils/Event";
export const useEvent = (name: string, callback: () => void, deps: any[]) => {
  useEffect(() => {
    event.on(name, callback);
    return () => {
      event.off(name, callback);
    };
  }, deps);
};
