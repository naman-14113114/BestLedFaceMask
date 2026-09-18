export const EXPERT_PROFILE = {
  name: "Best LED Face Mask Editorial Team",
  title: "Research & Editorial Team",
  image: "/icon-192.png",
  yearsExperience: "10+",
  masksReviewed: 18,
  testingHours: "200+",
} as const;

export const EXPERT_PROFILE_BIO =
  "The Best LED Face Mask editorial team reviewed 18 popular LED face masks over 200+ hours, comparing published wavelengths, light coverage, comfort, eye safety, neck treatment, usability, reviews, price, and customer support.";

export const CA_EXPERT_PROFILE = {
  name: "BestLedFaceMask.org Editorial Team",
  title: "Editorial Review",
  image: "/icon-192.png",
  yearsExperience: "Editorial",
  masksReviewed: 5,
  testingHours: "Comprehensive",
} as const;

export const CA_EXPERT_PROFILE_BIO =
  "Our editorial team compared 5 popular LED face masks available in Canada, evaluating them based on published specifications, verified user feedback, and editorial criteria including wavelengths, light coverage, comfort, eye safety, neck treatment, usability, price, and customer support.";

export function getExpertProfile(marketKey: string) {
  if (marketKey === "ca") {
    return CA_EXPERT_PROFILE;
  }
  return EXPERT_PROFILE;
}

export function getExpertProfileBio(marketKey: string) {
  if (marketKey === "ca") {
    return CA_EXPERT_PROFILE_BIO;
  }
  return EXPERT_PROFILE_BIO;
}
