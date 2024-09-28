export const useActiveLink = (link: string) => {
  return window.location.pathname.includes(link);
};
