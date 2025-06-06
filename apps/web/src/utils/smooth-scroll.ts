export const smoothScrollTo = (targetId: string, offset: number = 80) => {
  const element = document.getElementById(targetId.replace('#', ''));
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

export const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Enhanced smooth scroll with easing
export const smoothScrollToElement = (
  element: HTMLElement | null, 
  offset: number = 80,
  duration: number = 800
) => {
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Easing function
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * easedProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Hook for smooth navigation
export const useSmoothNavigation = () => {
  const navigateToSection = (sectionId: string) => {
    // Update URL without causing navigation
    if (window.location.pathname === '/') {
      window.history.pushState(null, '', sectionId);
    }
    
    // Smooth scroll to section
    smoothScrollTo(sectionId);
  };

  return { navigateToSection };
}; 