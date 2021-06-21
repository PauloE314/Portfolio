export function elementIsVisible(element?: HTMLElement | null) {
  const rect = element?.getBoundingClientRect();

  if (!rect) return false;

  const pageTop = window.screenTop;
  const pageBottom = pageTop + window.innerHeight;
  const elementTop = rect.y;
  const elementHeight = rect.height;
  const elementBottom = elementTop + elementHeight;

  if (elementTop <= pageBottom && elementBottom >= pageTop) {
    return elementHeight - elementTop;
  }
  return false;
}
