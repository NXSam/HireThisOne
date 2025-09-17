import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Business Owner",
    company: "SC Productions",
    region: "Global",
    description:
      "A decade and counting in delivering creative, writing, and development services to over 100 clients, achieving a 100% Success Score on Upwork.",
    technologies: [
      "Blender", "Avid Media Composer", "Adobe Suite", "Python", "Unity", "C++", "Python", "AWS", "Wordpress", "Substance 3D", "PHP", "Javascript", "C#", "Fedora", "Redhat",
    ],
  },
  {
    title: "Artist, Developer, & Tech Support",
    company: "Illusion Ranch",
    region: "Global",
    description:
      "Built the Illusion Display System, all of Illusion Ranch's websites and partner websites, animated instructional videos, provided visual effects, and fixed technical issues in the studio. I was the go-to guy for making problems go away.",
    technologies: [
      "Avid Media Composer", "AWS", "Wordpress", "Redhat", "Blender", "3D Printing", "Adobe Suite"
    ],
  },
  {
    title: "Artist, Developer, Blogger & Tech Support",
    company: "Procure Inc.",
    region: "United States",
    description:
      "Built and maintained each iteration of Procure's web-presence, drove improvements in product pricing strategies, automated internal processes, and drove better marketing.",
    technologies: [
      "Shopify", "Wordpress", "Magento", "Big Commerce", "Adobe Suite", "Python", "PHP",
    ],
  },

];

export type WorkItem = (typeof work)[number];

