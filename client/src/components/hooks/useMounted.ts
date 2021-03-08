import { useEffect, useRef } from "react";

export function useMounted(): () => boolean {
  const ref = useRef(false);

  useEffect(() => {
    ref.current = true;

    return () => {
      ref.current = false;
    };
  }, []);

  return () => ref.current;
}
