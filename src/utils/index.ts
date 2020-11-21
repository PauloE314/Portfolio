export function elementIsVisible(element?: HTMLElement | null) {
  const rect = element?.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (!rect) return false;

  if (rect.y < windowHeight && rect.y - rect.height > -windowHeight) {
    return windowHeight - rect.y;
  }
  return false;
}

export async function delay(n: number) {
  return new Promise((resolve, reject) => setTimeout(resolve, n));
}
