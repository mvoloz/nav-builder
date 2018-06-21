export const newNav = ({ memberId, a11yText, urlClass }) => ({
  default: {
    nodes: [
      {
        attributes: {
          className: "top-bar recursive"
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
                  role: "menu",
                  data: ["data-dropdown-menu "]
                },
                nodes: [
                  {
                    nodeType: "li",
                    attributes: {
                      className: "menu-text navigation-item--logo"
                    },
                    linkText: "Teladoc"
                  },
                  {
                    attributes: {
                      href: "/messages",
                      role: "link"
                    },
                    linkText: "Messages"
                  },
                  {
                    linkText: "Medical Info",
                    attributes: {
                      className: "",
                      component: "NavLink",
                      href: `/member/${memberId}/health`,
                      className:
                        "menu vertical submenu is-dropdown-submenu first-sub",
                      role: "menu"
                    },
                    nodes: [
                      {
                        nodeType: "ul",
                        attributes: {
                          className:
                            "menu vertical submenu is-dropdown-submenu first-sub",
                          role: "menu"
                        },
                        nodes: [
                          {
                            linkText: "Health",
                            attributes: {
                              href: `/member/${memberId}/mhd/health_record`,
                              role: "menuitem",
                              className:
                                "is-submenu-item is-dropdown-submenu-item",
                              "aria-label": "Health"
                            }
                          },
                          {
                            linkText: "Doctors & Pharmacy",
                            attributes: {
                              href: `/member/${memberId}/mhd/doctors_and_pharmacies`,
                              role: "menuitem",
                              "aria-label": "Doctors & Pharmacy"
                            }
                          },
                          {
                            linkText: "Images",
                            attributes: {
                              href: `/member/${memberId}/mhd/uploaded_images`,
                              role: "menuitem",
                              "aria-label": "Images"
                            }
                          },
                          {
                            linkText: "Consultation History",
                            attributes: {
                              href: `/member/${memberId}/mhd/consultation_history`,
                              role: "menuitem",
                              "aria-label": "Consultation History"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    nodeType: "ul",
                    linkText: "My Account",
                    attributes: {
                      href: "/my_account",
                      role: "menuitem",
                      className: "is-dropdown-submenu-parent opens-right"
                    },
                    nodes: [{}]
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
