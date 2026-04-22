export const IS_PRODUCTION = process.env.GATSBY_ACTIVE_ENV === "production"

export const WP_SEARCH_CATEGORIES = {
  // POSTS: {
  //   title: "Posts",
  //   slug: "post",
  // },
  PAGES: {
    title: "Pages",
    wpSlug: "page",
    pageSlug: "",
  },
  INSIGHTS: {
    title: "Insights",
    wpSlug: "insight",
    pageSlug: "insight",
  },
  CASE_STUDIES: {
    title: "Case Studies",
    wpSlug: "casestudies",
    pageSlug: "case-study",
  },
}

export const CONTACT_FORM_OPTIONS = {
  CLIENT: {
    value: "I’m an existing client",
    label: "I’m an existing client",
  },
  SERVICES: {
    value: "I'm interested in BRANDED's services",
    label: "I'm interested in BRANDED's services",
  },
  CAREER: {
    value: "I'd like to explore a career at BRANDED",
    label: "I'd like to explore a career at BRANDED",
  },
  INFO: {
    value: "I’m looking for general information",
    label: "I’m looking for general information",
  },
}
