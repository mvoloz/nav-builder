/**
 * @param {href, linkText, target = '_self', role, ariaLabel}
 */
export const medicalInfo = ({ memberId }) => ({
  linkText: "Medical Info",
  nodeType: "li",
  attributes: {
    href: `/member/${memberId}/mhd/health_record`,
    role: "menuitem"
  },
  nodes: [
    {
      nodeType: "Component",
      componentName: "NavMenu",
      nodes: [
        {
          linkText: "Health",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Health",
            href: `/member/${memberId}/mhd/health_record`,
            role: "menuitem"
          }
        },
        {
          linkText: "Doctors & Pharmacy",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Doctors & Pharmacy",
            href: `/member/${memberId}/mhd/doctors_and_pharmacies`,
            ariaLabel: "Doctors & Pharmacy",
            role: "menuitem"
          }
        },
        {
          linkText: "Images",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Images",
            href: `/member/${memberId}/mhd/uploaded_images`,
            ariaLabel: "Images",
            role: "menuitem"
          }
        },
        {
          linkText: "Consultation History",
          nodeType: "Component",
          componentName: "NavLink",
          attributes: {
            linkText: "Consultation History",
            href: `/member/${memberId}/mhd/consultation_history`,
            ariaLabel: "Consultation History",
            role: "menuitem"
          }
        }
      ]
    }
  ]
});
