import {
  Car,
  Cog,
  ScanSearch,
  Sparkles,
  Tractor,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type ServiceSection = {
  heading: string;
  items: string[];
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  summary: string;
  icon: LucideIcon;
  highlights: string[];
  sections: ServiceSection[];
};

export const services: Service[] = [
  {
    slug: "automotive-repair",
    title: "Automotive Repair & Maintenance",
    shortTitle: "Automotive Repair",
    description:
      "Automotive maintenance and repair services focused on safety, reliability, and clear communication.",
    summary:
      "Poteau Valley Repair provides general automotive repair and maintenance for common mechanical concerns. Every repair begins with an evaluation of the customer’s concern and a clear explanation of the recommended work.",
    icon: Car,
    highlights: [
      "Brake repair and replacement",
      "Steering and suspension repair",
      "Battery testing and replacement",
      "Air and cabin-filter replacement",
      "Oil changes and maintenance",
      "General repairs",
    ],
    sections: [
      {
        heading: "Automotive Services Available",
        items: [
          "Brake inspection, repair, and replacement",
          "Steering and suspension diagnosis and repair",
          "Battery testing and replacement",
          "Air-filter and cabin-filter replacement",
          "Oil changes and routine maintenance",
          "General mechanical repairs",
          "Vehicle pre purchase inspections",
        ],
      },
      {
        heading: "Common Reasons to Request Service",
        items: [
          "Grinding, squealing, or pulling while braking",
          "Vehicle wandering or uneven tire wear",
          "Hard starting or repeated battery failure",
          "Fluid leaks",
          "Unusual vibration or noise",
          "Warning lights",
          "Poor ride quality",
          "Routine maintenance is due",
        ],
      },
      {
        heading: "What to Expect",
        items: [
          "Discussion of the customer’s concern",
          "Inspection or diagnostic testing when required",
          "Clear estimate before authorized repairs",
          "Quality replacement parts whenever practical",
          "Repair documentation and final verification",
        ],
      },
    ],
  },
  {
    slug: "diagnostics",
    title: "Vehicle & Electrical Diagnostics",
    shortTitle: "Diagnostics",
    description:
      "Evidence-based diagnostic testing designed to identify the cause of a problem before parts are replaced.",
    summary:
      "Diagnostic work is a completed professional service. We use customer information, visual inspection, scan data, electrical testing, and other appropriate procedures to determine the most likely cause of the concern.",
    icon: ScanSearch,
    highlights: [
      "Check-engine-light diagnosis",
      "No-start diagnosis",
      "Electrical troubleshooting",
      "Charging-system testing",
      "Battery and starting-system testing",
      "Noise diagnosis",
      "Warning-light investigation",
      "Intermittent problem evaluation",
    ],
    sections: [
      {
        heading: "Diagnostic Services",
        items: [
          "Check-engine-light diagnosis",
          "No-start and hard-start diagnosis",
          "Electrical-circuit troubleshooting",
          "Battery, starter, and charging-system testing",
          "Warning-light investigation",
          "Engine-noise evaluation",
          "Intermittent electrical concern diagnosis",
          "Scan-tool testing and data review",
        ],
      },
      {
        heading: "Why Proper Diagnosis Matters",
        items: [
          "A trouble code does not automatically identify a failed part",
          "Several components can cause similar symptoms",
          "Testing helps avoid unnecessary part replacement",
          "Intermittent concerns may require additional time",
          "Some problems cannot be confirmed without disassembly",
        ],
      },
      {
        heading: "Diagnostic Fees",
        items: [
          "Diagnostic charges cover testing time, knowledge, and equipment",
          "The fee is due once diagnosis is completed",
          "Diagnostic labor is separate from repair labor unless stated otherwise",
          "Repair approval is not required for the diagnostic service to be billable",
        ],
      },
    ],
  },
  {
    slug: "mobile-service",
    title: "Mobile Repair & Roadside Service",
    shortTitle: "Mobile Service",
    description:
      "Scheduled mobile diagnostics, on-site repairs, and roadside assistance throughout LeFlore County and surrounding counties.",
    summary:
      "Mobile service brings diagnostic and repair capability to the customer’s location when the job can be completed safely and practically outside the shop.",
    icon: Truck,
    highlights: [
      "Mobile diagnostics",
      "Scheduled mobile repairs",
      "Emergency roadside assistance",
      "Battery and starting concerns",
      "Minor mechanical repairs",
      "On-site equipment service",
      "Service throughout the local area",
      "Call for availability",
    ],
    sections: [
      {
        heading: "Mobile Services Available",
        items: [
          "Mobile vehicle diagnostics",
          "Scheduled on-site repairs",
          "Emergency roadside assistance",
          "Battery testing and replacement",
          "No-start evaluation",
          "Minor mechanical and electrical repair",
          "On-site lawn mower and equipment diagnosis",
        ],
      },
      {
        heading: "Mobile Service Limitations",
        items: [
          "Some repairs require shop equipment or controlled conditions",
          "Service may be limited by weather or road conditions",
          "Safe working space must be available",
          "Parts availability may affect same-day completion",
          "Unsafe roadside locations may require towing or relocation",
        ],
      },
      {
        heading: "Mobile Service Charges",
        items: [
          "Up to 15 miles: $75 mobile service fee",
          "15–30 miles: $125 mobile service fee",
          "Over 30 miles: $125 plus $1.50 per mile",
          "Repair and diagnostic labor are billed separately",
          "Mobile service fees are due at the time of service",
        ],
      },
    ],
  },
  {
    slug: "lawn-mower-repair",
    title: "Lawn Mower Repair",
    shortTitle: "Lawn Mower Repair",
    description:
      "Repair and maintenance for riding mowers, push mowers, and common lawn equipment.",
    summary:
      "We diagnose and repair common mower problems involving engines, fuel systems, starting systems, belts, blades, decks, and routine maintenance.",
    icon: Tractor,
    highlights: [
      "Riding mower repair",
      "Push mower repair",
      "Tune-ups",
      "Oil changes",
      "Carburetor cleaning",
      "Belt replacement",
      "Blade replacement",
      "Deck and spindle repair",
    ],
    sections: [
      {
        heading: "Lawn Mower Services",
        items: [
          "Riding mower repair",
          "Push mower repair",
          "Seasonal tune-ups",
          "Oil and filter changes",
          "Spark-plug replacement",
          "Carburetor cleaning and repair",
          "Fuel-system diagnosis",
          "Starter and charging-system diagnosis",
          "Deck, spindle, belt, and blade repair",
        ],
      },
      {
        heading: "Common Mower Problems",
        items: [
          "Engine will not start",
          "Engine starts but will not stay running",
          "Excessive smoke",
          "Fuel leaking into the oil",
          "Poor cutting performance",
          "Deck noise or vibration",
          "Belt repeatedly comes off",
          "Starter turns slowly or remains engaged",
        ],
      },
      {
        heading: "Preparing Equipment for Service",
        items: [
          "Remove personal property and loose attachments",
          "Provide the model and serial number when possible",
          "Describe when the problem started",
          "Do not continue operating equipment when damage may worsen",
          "Let us know if the fuel or oil has recently been changed",
        ],
      },
    ],
  },
  {
    slug: "small-engine-repair",
    title: "Small Engine & Lawn Equipment Repair",
    shortTitle: "Small Engine Repair",
    description:
      "Service for generators, tillers, trimmers, edgers, and other small-engine equipment.",
    summary:
      "Small-engine service includes diagnosis, maintenance, fuel-system repair, starting-system work, and general repair for common outdoor power equipment.",
    icon: Cog,
    highlights: [
      "Generator repair",
      "Tiller repair",
      "Trimmer repair",
      "Edger repair",
      "Handheld equipment repair",
      "Carburetor cleaning",
      "Tune-ups",
      "Fuel-system service",
    ],
    sections: [
      {
        heading: "Equipment We Service",
        items: [
          "Portable generators",
          "Tillers",
          "String trimmers",
          "Edgers",
          "Handheld outdoor equipment",
          "Other common gasoline-powered lawn equipment",
        ],
      },
      {
        heading: "Small Engine Services",
        items: [
          "No-start diagnosis",
          "Carburetor cleaning and repair",
          "Fuel-line and fuel-system service",
          "Spark-plug replacement",
          "Air-filter replacement",
          "Oil changes",
          "Tune-ups",
          "Starter and ignition diagnosis",
          "General mechanical repair",
        ],
      },
      {
        heading: "Storage and Fuel Problems",
        items: [
          "Old fuel is a common cause of starting and running problems",
          "Ethanol-related deposits may damage fuel-system components",
          "Fuel stabilizer can help during seasonal storage",
          "Equipment should be inspected before extended operation after storage",
        ],
      },
    ],
  },
  {
    slug: "detailing",
    title: "Basic Vehicle Detailing",
    shortTitle: "Detailing",
    description:
      "Basic exterior and interior cleaning services to improve vehicle appearance.",
    summary:
      "Our detailing services are intended for routine cleaning and appearance care. Pricing depends on vehicle size, condition, and requested services.",
    icon: Sparkles,
    highlights: [
      "Interior vacuuming",
      "Full-body washing",
      "Wheel cleaning",
      "Exterior waxing",
      "Call for an estimate",
      "Service by appointment",
    ],
    sections: [
      {
        heading: "Detailing Services",
        items: [
          "Interior vacuuming",
          "Exterior body wash",
          "Wheel washing",
          "Exterior waxing",
          "Basic appearance cleanup",
        ],
      },
      {
        heading: "Pricing Factors",
        items: [
          "Vehicle size",
          "Interior and exterior condition",
          "Amount of dirt, pet hair, or debris",
          "Requested services",
          "Time required to complete the work",
        ],
      },
      {
        heading: "Before the Appointment",
        items: [
          "Remove valuables and important documents",
          "Remove child seats when practical",
          "Identify any areas needing special attention",
          "Advise us of damaged trim or surfaces before work begins",
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}