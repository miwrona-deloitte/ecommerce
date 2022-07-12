import { MutableRefObject, useEffect } from 'react';

const useHideMinicart = (
  ref: MutableRefObject<HTMLDivElement | null>,
  setShowMinicart: (showMinicart: boolean) => void,
) => {
  useEffect(() => {
    const hideMinicart = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowMinicart(false);
      }
    };

    document.addEventListener('mousedown', hideMinicart);

    return () => {
      document.removeEventListener('mousedown', hideMinicart);
    };
  }, [ref, setShowMinicart]);
};

export default useHideMinicart;
