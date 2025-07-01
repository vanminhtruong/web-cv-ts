import { H as defineStore, I as ref } from "./vendor-CCPa_ARj.js";
const useProfileStore = defineStore("profile", () => {
  const fullName = ref("Trương Văn Minh");
  const jobTitle = ref("Frontend Developer");
  const description = ref("Frontend Developer chuyên nghiệp với kinh nghiệm phát triển giao diện người dùng.");
  const year = ref((/* @__PURE__ */ new Date()).getFullYear());
  const cvPath = ref("/src/assets/file/TruongVanMinh-CV.pdf");
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
