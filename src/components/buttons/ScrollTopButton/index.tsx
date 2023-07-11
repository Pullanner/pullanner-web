import { useState, useEffect } from 'react';

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    const outletContainer = document.querySelector('#outlet-container') as HTMLElement;
    outletContainer.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const outletContainer = document.querySelector('#outlet-container') as HTMLElement;
    const showScrollTopButton = () => {
      if (outletContainer.scrollTop > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    outletContainer.addEventListener('scroll', showScrollTopButton);

    return () => {
      outletContainer.removeEventListener('scroll', showScrollTopButton);
    };
  }, []);

  return (
    <button
      type="button"
      className="sticky bottom-3 right-3 float-right h-10 w-10 rounded-full bg-white opacity-80"
      onClick={handleScrollToTop}
      style={{ display: `${isVisible ? 'block' : 'none'}` }}
    >
      <img src="/assets/images/up-arrow.png" alt="Top" />
    </button>
  );
};
