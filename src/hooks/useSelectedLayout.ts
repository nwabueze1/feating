
export const useSelectedLayout = (layouts: Array<{ name: string; isSelected: boolean }>) => {
  const params =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : undefined;
  const queryParam = params ? params.get('layout') : undefined;
  const selectedLayout = !queryParam
    ? layouts?.find((c) => c.isSelected)?.name
    : layouts?.find((c) => c.name === queryParam)?.name || undefined;
  return selectedLayout
};
