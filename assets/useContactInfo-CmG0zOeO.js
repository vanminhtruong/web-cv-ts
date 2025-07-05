import { J as useI18n, K as computed } from "./vendor-C9uPxl4s.js";
function useContactInfo() {
  const { t } = useI18n();
  const phoneNumber = "0982743860";
  const email = "vanminhtruong95@gmail.com";
  const githubUrl = "https://github.com/vanminhtruong/Team03-cy.git";
  const githubUsername = "vanminhtruong";
  const getPdfPath = () => {
    const isGitHubPages = window.location.href.includes("/web-cv-ts/");
    return isGitHubPages ? "/web-cv-ts/TruongVanMinh-CV.pdf" : "/TruongVanMinh-CV.pdf";
  };
  const contactItems = computed(() => [
    {
      id: "phone",
      icon: "phone",
      label: t("about.phone"),
      value: phoneNumber,
      svgPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    },
    {
      id: "email",
      icon: "email",
      label: t("about.email"),
      value: email,
      svgPath: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
    },
    {
      id: "github",
      icon: "github",
      label: "GitHub",
      value: githubUsername,
      url: githubUrl,
      svgPath: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    },
    {
      id: "address",
      icon: "address",
      label: t("about.address"),
      value: t("about.addressValue"),
      svgPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    }
  ]);
  const actionButtons = computed(() => [
    {
      id: "contact",
      label: t("home.contactMe"),
      href: "#contact",
      isPrimary: true,
      icon: null
    },
    {
      id: "download-cv",
      label: t("home.downloadCV"),
      href: getPdfPath(),
      isPrimary: false,
      icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    }
  ]);
  return {
    phoneNumber,
    email,
    githubUrl,
    githubUsername,
    contactItems,
    actionButtons,
    getPdfPath
  };
}
export {
  useContactInfo as u
};
//# sourceMappingURL=useContactInfo-CmG0zOeO.js.map
