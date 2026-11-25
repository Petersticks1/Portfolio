const STORAGE_KEY = "color-scheme";

export function getSystemScheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getStoredScheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "light" || value === "dark") return value;
  } catch {
    // Ignore storage access errors
  }
  return null;
}

export function getEffectiveScheme() {
  return getStoredScheme() ?? getSystemScheme();
}

export function applyMetaScheme(value) {
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) {
    meta.content = value ?? "light dark";
  }
}

export function toggleColorScheme() {
  const current = getEffectiveScheme();
  const target = current === "dark" ? "light" : "dark";
  const system = getSystemScheme();

  try {
    if (target !== system) {
      localStorage.setItem(STORAGE_KEY, target);
      applyMetaScheme(target);
    } else {
      localStorage.removeItem(STORAGE_KEY);
      applyMetaScheme("light dark");
    }
  } catch {
    // Still apply visually even if storage is blocked
    applyMetaScheme(target);
  }

  return target;
}
