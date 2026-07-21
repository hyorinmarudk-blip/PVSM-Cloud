import type { MetadataRoute } from "next";
import { policies } from "@/data/policies";
import { services } from "@/data/services";

export const dynamic = "force-static";

const baseUrl = "https://poteauvalleyrepair.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/request-service`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/policies`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const policyPages: MetadataRoute.Sitemap = policies.map((policy) => ({
    url: `${baseUrl}/policies/${policy.slug}`,
    lastModified: currentDate,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...mainPages, ...servicePages, ...policyPages];
}