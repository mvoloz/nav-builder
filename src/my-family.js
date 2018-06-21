/**
 * @param {href, linkText, target = '_self', role, ariaLabel}
 */
export const myFamily = ({ memberId, allowCaregivers, allowCareRecipients }) => ({
  linkText: "My Family",
  nodeType: "li",
  attributes: {
    href: "/my_family",
    role: "menuitem"
  },
  nodes: [
    {
      nodeType: "Component",
      componentName: "NavMenu",
      nodes: [
        {
          linkText: "My Dependents",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "My Dependents",
            href: "/my_family/overview?type=dependents",
            ariaLabel: "My dependents",
            role: "menuitem"
          }
        },
        {
          linkText: "Authorized Consenters",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Authorized Consenters",
            href: "/my_family/overview?type=consenter",
            ariaLabel: "Authorized Consenters",
            role: "menuitem"
          }
        },
        {
          linkText: "Caregivers",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Caregivers",
            href: "/caregivers",
            showLink: allowCaregivers,
            ariaLabel: "Caregivers",
            role: "menuitem"
          }
        },
        {
          linkText: "Invoices",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Care Recipients",
            href: "/my_family/overview?type=care_recipient",
            showLink: allowCareRecipients,
            ariaLabel: "Care Recipients",
            role: "menuitem"
          }
        }
      ]
    }
  ]
});
