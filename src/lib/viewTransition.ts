import type { NavigateFunction } from 'react-router-dom';

export const viewTransitionNavigate = async (to: string, navigate: NavigateFunction) => {
  if (document.startViewTransition) {
    const transition = document.startViewTransition(() => {
      navigate(to);
    });
    await transition.ready;
  } else {
    navigate(to);
  }
};
