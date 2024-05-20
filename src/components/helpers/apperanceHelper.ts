export const getApperance = (el: HTMLElement): string => {
  const element = el.closest('.ewc--dark');

  if (element) {
    return 'ewc--dark';
  } else {
    return 'ewc--light';
  }
};
