import React from "react";

const menuNavLinkRenderer = menuNavLink => {
  return <li key={menuNavLink.props.href}>{menuNavLink}</li>;
};

export const NavMenu = props => (
  <ul className="menu vertical">
    {React.Children.toArray(props.children).map(menuNavLinkRenderer)}
  </ul>
);

export const NavLink = ({
  href,
  linkText,
  target = "_self",
  role,
  ariaLabel
}) => (
  <a
    className="main-navigation--url"
    href={href}
    target={target}
    role={role}
    aria-label={ariaLabel}
  >
    {linkText}
  </a>
);

export const NavIconLink = ({ href, linkText, urlClass, className }) => (
  <li className={className}>
    <a className={`${urlClass} url`} href={href}>
      <span>{linkText}</span>
    </a>
  </li>
);

export const IncreaseContrast = props => {
  console.log("a11y", props);
  const { urlClass, a11y } = props;
  return (
    <li className={`navigation-item--icn ${a11y.elemClass}`}>
      <a
        className={`${urlClass} url`}
        role="button"
        href="javascript:void(0);"
        onClick={a11y.callback}
        aria-label={a11y.text}
        onKeyPress={e => (e.key == "Enter" || " " ? a11y.callback : null)}
      >
        <span>{a11y.text}</span>
      </a>
    </li>
  );
};
