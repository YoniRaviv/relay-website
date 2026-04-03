import { Link } from "react-router-dom";
import { trackDownload, trackGitHub } from "../../lib/events";

function isInternalHref(href) {
  return href.startsWith("/") && !href.startsWith("//");
}

function handleOutboundClick(href) {
  if (href.includes("/Relay-Mac-Installer")) {
    trackDownload();
  } else if (href.includes("github.com/YoniRaviv/Relay")) {
    trackGitHub();
  }
}

export function AppLink({
  href,
  className,
  children,
  target,
  rel,
  ...props
}) {
  if (!href) {
    return null;
  }

  if (href.startsWith("#") || !isInternalHref(href) || target === "_blank") {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
        onClick={() => handleOutboundClick(href)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} {...props}>
      {children}
    </Link>
  );
}
