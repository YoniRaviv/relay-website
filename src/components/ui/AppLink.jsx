import { Link } from "react-router-dom";

function isInternalHref(href) {
  return href.startsWith("/") && !href.startsWith("//");
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
      <a href={href} className={className} target={target} rel={rel} {...props}>
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
