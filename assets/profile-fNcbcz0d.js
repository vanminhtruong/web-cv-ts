import { z as defineStore, A as ref, K as computed } from "./vendor-C9uPxl4s.js";
const useProfileStore = defineStore("profile", () => {
  const fullName = ref("Trương Văn Minh");
  const jobTitle = ref("Frontend Developer");
  const description = ref("Frontend Developer chuyên nghiệp với kinh nghiệm phát triển giao diện người dùng.");
  const year = ref((/* @__PURE__ */ new Date()).getFullYear());
  const cvPath = computed(() => {
    const isGitHubPages = window.location.href.includes("/web-cv-ts/");
    return isGitHubPages ? "/web-cv-ts/TruongVanMinh-CV.pdf" : "/TruongVanMinh-CV.pdf";
  });
  const socialLinks = ref({
    facebook: "https://facebook.com/truongvanminh",
    linkedin: "https://linkedin.com/in/truongvanminh",
    github: "https://github.com/truongvanminh",
    youtube: "https://youtube.com/truongvanminh"
  });
  return {
    fullName,
    jobTitle,
    description,
    year,
    socialLinks,
    cvPath
  };
});
export {
  useProfileStore as u
};
//# sourceMappingURL=profile-fNcbcz0d.js.map
