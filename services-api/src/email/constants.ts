import type { EmailAddress } from "./types";

export const SHOP_EMAIL = "poteauvalleyrepair@gmail.com";

export const SERVICE_SENDER: EmailAddress = {
  email: "service@poteauvalleyrepair.com",
  name: "Poteau Valley Repair",
};

export const BUSINESS = {
  name: "Poteau Valley Repair",
  phoneDisplay: "(918) 962-0233",
  phoneLink: "+19189620233",
  email: "poteauvalleyrepair@gmail.com",
  website: "https://poteauvalleyrepair.com",
  serviceArea: "LeFlore County and surrounding areas",
} as const;