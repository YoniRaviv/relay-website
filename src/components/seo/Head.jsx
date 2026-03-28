import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seoConfig, structuredData } from "../../content/seo";

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    if (name.startsWith("og:") || name.startsWith("twitter:")) {
      el.setAttribute("property", name);
    } else {
      el.setAttribute("name", name);
    }
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function Head() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
    const seo = seoConfig[normalized] || seoConfig["/"];

    document.title = seo.title;

    setMeta("description", seo.description);
    setCanonical(seo.canonical);

    // Open Graph
    setMeta("og:title", seo.og.title);
    setMeta("og:description", seo.og.description);
    setMeta("og:image", seo.og.image);
    setMeta("og:url", seo.canonical);
    setMeta("og:type", seo.og.type);
    setMeta("og:site_name", "Relay Studio");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", seo.og.title);
    setMeta("twitter:description", seo.og.description);
    setMeta("twitter:image", seo.og.image);

    // Structured data
    setJsonLd("ld-org", structuredData.organization);
    if (normalized === "/") {
      setJsonLd("ld-software", structuredData.software);
    }
  }, [pathname]);

  return null;
}
