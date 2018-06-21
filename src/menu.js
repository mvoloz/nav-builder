import React from "react";
import { NavMenu, NavLink, NavIconLink, IncreaseContrast } from "./nav-link";
import { medicalInfo } from "./medical-info";
import { myAccount } from "./my-account";
import { myFamily } from "./my-family";
import "./header.css";

const components = {
  NavMenu: NavMenu,
  NavLink: NavLink,
  NavIconLink: NavIconLink,
  IncreaseContrast: IncreaseContrast
};

const layoutConfig = {
  menu: ({ memberId, a11yText, urlClass, domain = "default", a11y }) =>
    newNav({ memberId, a11yText, urlClass, a11y })[domain],
  nav: ({ memberId, a11yText, urlClass, a11y, domain = "default" }) =>
    Nav({ memberId, a11yText, urlClass })[domain],
  footer: ({ domain }) => footer({ domain })[domain]
};

const Nav = ({ memberId, a11yText, urlClass, a11y }) => ({
  default: {
    nodes: [
      {
        attributes: {
          className: "top-bar"
        },
        nodes: [
          {
            attributes: {
              className: "top-bar-left"
            },
            nodes: [
              {
                nodeType: "ul",
                attributes: {
                  className: "dropdown menu",
                  role: "menu"
                },
                nodes: [
                  medicalInfo({ memberId }),
                  myAccount({ memberId }),
                  myFamily({
                    memberId,
                    allowCaregivers: true,
                    allowCareRecipients: true
                  })
                ]
              }
            ]
          },
          {
            attributes: {
              className: "top-bar-right"
            },
            nodes: [
              {
                nodeType: "ul",
                attributes: {
                  className: "menu"
                },
                nodes: [
                  {
                    linkText: "Help",
                    nodeType: "Component",
                    componentName: "NavIconLink",
                    attributes: {
                      linkText: "Help",
                      href: "/help/faq",
                      ariaLabel: "Help",
                      role: "button"
                    }
                  },
                  {
                    linkText: "Increase Contrast",
                    nodeType: "Component",
                    componentName: "IncreaseContrast",
                    attributes: {
                      linkText: "Increase Contrast",
                      a11y: a11y,
                      href: "/help/faq",
                      ariaLabel: "Help",
                      role: "button"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});

const renderNodes = nodes => {
  return nodes.map(node => renderSingleNode(node));
};

const getNodeType = node => {
  if (!node.nodeType) return "div";

  if (node.nodeType === "Component") {
    const compName = components[node.componentName];
    return compName;
  }

  return node.nodeType;
};

const getAttributes = node => {
  if (!node.attributes) return {};

  const { nodes, ...rest } = node.attributes;
  return rest;
};

const getLinkText = node => {
  if (!node.linkText) return null;

  if (node.nodeType == "Component") {
    const Component = getNodeType(node);
    const props = getAttributes(node);

    return <Component {...props} />;
  }
  return node.linkText ? node.linkText : null;
};

const renderSingleNode = node => {
  const Element = getNodeType(node);
  const children = node.nodes ? renderNodes(node.nodes) : null;
  const linkText = getLinkText(node);
  console.log("linkText", linkText);

  return (
    <Element {...node.attributes}>
      {linkText}
      {children}
    </Element>
  );
};

const renderMenu = () => {
  const params = {
    memberId: 1,
    a11yText: "foo",
    urlClass: "bar",
    a11y: {
      elemClass: "a11y",
      text: "hi there",
      callback: () => {
        console.log("foo");
      }
    }
  };
  const menu = layoutConfig.nav(params);
  const foo = renderNodes(menu.nodes);

  return (
    <header className="main-header">
      <nav className="main-navigation">{foo}</nav>
    </header>
  );
};

export const Menu = () => renderMenu();
