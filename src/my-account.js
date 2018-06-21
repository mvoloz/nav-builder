/**
 * @param {href, linkText, target = '_self', role, ariaLabel}
 */
export const myAccount = ({ memberId }) => ({
  linkText: "My Account",
  nodeType: "li",
  attributes: {
    href: "/my_account",
    role: "menuitem"
  },
  nodes: [
    {
      nodeType: "Component",
      componentName: "NavMenu",
      nodes: [
        {
          linkText: "Login Information",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Login Information",
            href: "/my_account/login_information",
            ariaLabel: "Login Information",
            role: "menuitem"
          }
        },
        {
          linkText: "Emergency Contact",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Emergency Contact",
            href: "/my_account/emergency_contact",
            ariaLabel: "Emergency Contact",
            role: "menuitem"
          }
        },
        {
          linkText: "Billing Information",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Billing Information",
            href: "/my_account/billing_information",
            ariaLabel: "Billing Information",
            role: "menuitem"
          }
        },
        {
          linkText: "Invoices",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Invoices",
            href: "/my_account/invoices",
            ariaLabel: "Invoices",
            role: "menuitem"
          }
        },
        {
          linkText: "Print ID Card",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Print ID Card",
            href: "/my_account/print_id",
            target: "_blank",
            ariaLabel: "Print ID Card",
            role: "menuitem"
          }
        },
        {
          linkText: "Personal Details",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Personal Details",
            href: "/my_account/personal_details",
            ariaLabel: "Personal Details",
            role: "menuitem"
          }
        }
      ]
    }
  ]
});
