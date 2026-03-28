/**
 * Live site serves cloned assets under /content (e.g. /content/images/...).
 * Set NEXT_PUBLIC_USE_LOCAL_ASSETS=true and add files under public/ to work fully offline.
 */
const REMOTE_CONTENT_BASE = "https://www.my-peninsula.com/content";

export function siteAsset(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (process.env.NEXT_PUBLIC_USE_LOCAL_ASSETS === "true") {
    return p;
  }
  return `${REMOTE_CONTENT_BASE}${encodeURI(p)}`;
}
