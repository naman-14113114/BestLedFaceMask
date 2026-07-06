export const EXPERT_PROFILE = {
  name: "Dr. Megan Vincze",
  title: "Certified Dermatologist",
  image: "/img/dr-megan-vincze.png",
  yearsExperience: "10+",
  masksReviewed: 18,
  testingHours: "200+",
} as const;

export const EXPERT_PROFILE_BIO =
  "Dr. Megan Vincze is a certified dermatologist and beauty technology expert with over 10 years of experience in skincare and beauty technology. She reviewed 18 popular LED face masks over 200+ hours, comparing wavelengths, light coverage, comfort, eye safety, neck treatment, usability, reviews, price, and guarantees.";

export const CA_EXPERT_PROFILE = {
  name: "BestLedFaceMask.org Editorial Team",
  title: "Editorial Review",
  image: "/img/shield-check.png", // We can use a generic check icon or site logo. Assuming we have some generic icon or we can omit it in the UI.
  yearsExperience: "Editorial",
  masksReviewed: 5,
  testingHours: "Comprehensive",
} as const;

export const CA_EXPERT_PROFILE_BIO =
  "Our editorial team compared 5 popular LED face masks available in Canada, evaluating them based on published specifications, verified user feedback, and editorial criteria including wavelengths, light coverage, comfort, eye safety, neck treatment, usability, price, and guarantees.";

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
