import { useEffect, useState, RefObject } from "react";

export default function useStickyOnScroll(
  ref: RefObject<HTMLElement>,
  elementOffset?: number | null
): boolean {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const offsetTop = ref.current?.offsetTop;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (ref.current) {
        let sticky = false;
        if (elementOffset) {
          sticky = scrollY > offsetTop! - elementOffset;
        } else {
          sticky = scrollY > offsetTop!;
        }
        setIsSticky(sticky);
      }
    };

    const handleScrollDebounced = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollDebounced);

    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [elementOffset, ref]);

  return isSticky;
}
