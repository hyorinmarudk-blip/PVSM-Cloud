export type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Policy = {
  slug: string;
  title: string;
  effectiveDate: string;
  introduction: string;
  sections: PolicySection[];
};

export const policies: Policy[] = [
  {
    slug: "payment-billing",
    title: "Payment & Billing Policy",
    effectiveDate: "June 30, 2026",
    introduction:
      "Thank you for choosing Poteau Valley Repair. These policies explain our payment methods, deposits, diagnostic charges, mobile service charges, and other billing requirements.",
    sections: [
      {
        heading: "Payment Methods Accepted",
        bullets: [
          "Cash",
          "Credit cards",
          "Debit cards",
          "Square Afterpay, subject to approval",
          "CashApp",
        ],
      },
      {
        heading: "Mobile Service Calls",
        paragraphs: [
          "A mobile service fee is charged for all on-site diagnostics and repairs. Additional repair labor is billed separately.",
        ],
        bullets: [
          "Up to 15 miles: $75",
          "16–30 miles: $125",
          "Over 30 miles: $125 plus $1.50 per mile",
          "Mobile service fees are due at the time of service.",
          "The service fee becomes non-refundable once the technician arrives.",
        ],
      },
      {
        heading: "Diagnostic Charges",
        paragraphs: [
          "Diagnostic fees cover technician time, knowledge, testing procedures, and specialized equipment used to determine the cause of a problem.",
          "Diagnostic fees are due when the diagnosis is completed, regardless of whether repairs are approved.",
          "Diagnostic charges are separate from repair labor unless specifically stated otherwise.",
        ],
      },
      {
        heading: "Repair Estimates",
        paragraphs: [
          "Estimates are based on the information available at the time of inspection.",
          "Additional problems may be discovered during testing, disassembly, or repair. Customer approval will be obtained before additional repairs are performed whenever practical.",
          "Estimates are valid for 30 days unless otherwise stated. Parts pricing and availability may change after that time.",
        ],
      },
      {
        heading: "Deposits",
        bullets: [
          "Repairs totaling more than $500 require a deposit before parts are ordered.",
          "Special-order and non-returnable parts require payment in full before ordering.",
          "Additional deposits may be required for major repairs.",
          "Deposits may become non-refundable once parts have been ordered.",
        ],
      },
      {
        heading: "Final Payment",
        paragraphs: [
          "The remaining balance is due immediately upon completion of repairs.",
          "Vehicles, equipment, and machinery will not be released until payment is received in full unless prior written arrangements have been made.",
        ],
      },
      {
        heading: "Customer-Supplied Parts",
        bullets: [
          "No warranty is provided on customer-supplied parts.",
          "No labor warranty applies when failure results from a customer-supplied part.",
          "Additional labor caused by an incorrect or defective customer-supplied part will be billed at the current labor rate.",
        ],
      },
      {
        heading: "Returned Checks and Late Payments",
        paragraphs: [
          "Returned checks are subject to applicable bank fees and any fees permitted by Oklahoma law.",
          "Future payments may be required in cash or certified funds.",
          "Unpaid invoices may be subject to permitted collection costs, interest, or fees if referred for collection.",
        ],
      },
      {
        heading: "Storage Fees",
        paragraphs: [
          "Completed vehicles or equipment left more than 72 hours after notification may be charged $25 per day unless other arrangements have been made.",
        ],
      },
      {
        heading: "Declined Repairs",
        paragraphs: [
          "When repairs are declined after diagnostics are completed, the customer remains responsible for all mobile service fees, diagnostic charges, and approved parts already ordered.",
        ],
      },
      {
        heading: "Labor Rates and Sales Tax",
        bullets: [
          "Shop labor: $85 per hour",
          "Mobile labor: $100 per hour",
          "Labor rates are subject to change without notice.",
          "Applicable Oklahoma sales tax is charged on taxable items according to state and local law.",
        ],
      },
    ],
  },
  {
    slug: "shop-terms",
    title: "Shop Policies & Terms and Conditions",
    effectiveDate: "June 30, 2026",
    introduction:
      "Our goal is to provide honest, dependable, and professional repair services. These terms apply when customers authorize diagnostics, repairs, or other services.",
    sections: [
      {
        heading: "Estimates",
        paragraphs: [
          "Repair estimates are based on information available at the time of inspection.",
          "Final repair costs may change when additional testing or disassembly reveals other concerns.",
          "Customers will be contacted before repairs exceeding the approved estimate are performed whenever practical.",
          "Estimates remain valid for 30 days unless otherwise stated.",
        ],
      },
      {
        heading: "Diagnostic Services",
        paragraphs: [
          "Diagnostic work requires specialized equipment, technical knowledge, and technician time.",
          "Diagnostic charges apply whether or not repairs are approved.",
          "A completed diagnosis is a completed service and is not included in repair labor unless specifically stated.",
        ],
      },
      {
        heading: "Labor Charges",
        bullets: [
          "Actual repair time",
          "Industry-standard labor guides",
          "Repair complexity",
          "Specialized equipment requirements",
          "Shop labor: $85 per hour",
          "Mobile labor: $100 per hour",
        ],
      },
      {
        heading: "Parts Supplied by Poteau Valley Repair",
        paragraphs: [
          "Whenever possible, quality replacement parts from reputable suppliers are used.",
          "Parts pricing may include ordering, shipping, warranty administration, inventory handling, and time spent identifying and sourcing the correct components.",
        ],
      },
      {
        heading: "Appointments",
        paragraphs: [
          "Appointments are appreciated. Customers should provide at least 24 hours' notice when canceling or rescheduling whenever possible.",
          "Repeated missed appointments may require prepayment before future appointments are scheduled.",
        ],
      },
      {
        heading: "Vehicle and Equipment Storage",
        paragraphs: [
          "Completed vehicles and equipment should be picked up promptly.",
          "Items remaining more than 72 hours after notification may be charged a $25-per-day storage fee unless other arrangements are made.",
        ],
      },
      {
        heading: "Shop Safety",
        bullets: [
          "Customers may not enter active work areas without permission.",
          "Children must remain supervised.",
          "Pets must remain secured.",
        ],
      },
      {
        heading: "Test Drives",
        paragraphs: [
          "Road tests may be performed before or after repairs to verify customer concerns, collect diagnostic information, or confirm proper operation.",
        ],
      },
      {
        heading: "Environmental Disposal",
        paragraphs: [
          "Used oil, coolant, filters, batteries, and other regulated materials are handled and disposed of according to applicable environmental requirements.",
        ],
      },
      {
        heading: "Communication Authorization",
        paragraphs: [
          "By requesting or authorizing service, customers consent to communications regarding estimates, approvals, repair updates, completion notices, invoices, and warranty information.",
          "Communication may occur by phone, text message, or email.",
        ],
      },
      {
        heading: "Limitation of Liability",
        bullets: [
          "Personal belongings left in vehicles or equipment",
          "Existing damage unrelated to authorized work",
          "Failures involving unrelated worn or damaged components",
          "Delays caused by parts availability, shipping, weather, or circumstances beyond our control",
        ],
      },
      {
        heading: "Right to Refuse Service",
        bullets: [
          "The requested repair is unsafe or impractical.",
          "The customer requests an illegal modification.",
          "Threatening, abusive, or unsafe behavior occurs.",
          "Payment or authorization policies are not followed.",
        ],
      },
    ],
  },
  {
    slug: "warranty",
    title: "Warranty Policy",
    effectiveDate: "June 30, 2026",
    introduction:
      "Poteau Valley Repair stands behind eligible workmanship. If a covered repair fails because of our workmanship during the applicable warranty period, we will inspect the concern and correct covered workmanship issues.",
    sections: [
      {
        heading: "Standard Warranty Coverage",
        bullets: [
          "Automotive repairs: 12 months or 12,000 miles, whichever occurs first",
          "Small engines: 90 days",
          "Lawn and garden equipment: 90 days",
          "Trailers: 12 months",
          "Electrical repairs: 90 days",
        ],
      },
      {
        heading: "Diagnostic Services",
        paragraphs: [
          "Diagnostic service is complete once the diagnosis has been performed and is not itself covered as a repair warranty.",
          "Adjustments associated with a later covered repair may qualify when caused by Poteau Valley Repair workmanship.",
        ],
      },
      {
        heading: "Parts Warranty",
        paragraphs: [
          "Parts supplied by Poteau Valley Repair may be covered by the manufacturer's warranty.",
          "Coverage varies by supplier and part. Manufacturer approval may be required, and labor reimbursement depends on manufacturer terms.",
        ],
      },
      {
        heading: "Customer-Supplied Parts",
        bullets: [
          "No warranty on customer-supplied parts",
          "No labor warranty related to customer-supplied parts",
          "No coverage for failures caused by incorrect or defective customer-supplied parts",
        ],
      },
      {
        heading: "Warranty Exclusions",
        bullets: [
          "Abuse, misuse, or neglect",
          "Lack of maintenance",
          "Racing or competition use",
          "Improper off-road use",
          "Overheating",
          "Accidents or collision damage",
          "Flood, fire, theft, or vandalism",
          "Unauthorized modifications",
          "Improper installation or repair by others",
          "Normal wear and tear",
          "Cosmetic concerns",
          "Rust or corrosion",
          "Pre-existing or unrelated conditions",
        ],
      },
      {
        heading: "Warranty Procedure",
        bullets: [
          "Contact Poteau Valley Repair as soon as a concern is discovered.",
          "Do not continue operating the vehicle or equipment when additional damage may result.",
          "Allow Poteau Valley Repair a reasonable opportunity to inspect the concern.",
          "Do not authorize another facility to perform repairs without prior approval except in a genuine emergency.",
        ],
      },
      {
        heading: "Consequential Damages",
        paragraphs: [
          "Warranty coverage does not include loss of use, rental vehicles, towing unless authorized in writing, lost income, hotel expenses, travel expenses, or other incidental or consequential costs.",
        ],
      },
      {
        heading: "Limit of Liability",
        paragraphs: [
          "Maximum responsibility is limited to correcting the original covered repair and will not exceed the value of the original repair invoice.",
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    effectiveDate: "June 30, 2026",
    introduction:
      "Poteau Valley Repair is committed to responsibly collecting, using, storing, and protecting customer information required to provide repair services.",
    sections: [
      {
        heading: "Information We Collect",
        bullets: [
          "Customer name, address, telephone number, and email address",
          "Preferred communication method",
          "Vehicle or equipment year, make, model, VIN, serial number, license plate, mileage, or operating hours",
          "Repair history and diagnostic information",
          "Estimates, invoices, warranties, and repair documentation",
        ],
      },
      {
        heading: "Payment Information",
        paragraphs: [
          "Payments are processed through Square or another authorized payment provider.",
          "Poteau Valley Repair does not store complete payment-card numbers or card security codes.",
        ],
      },
      {
        heading: "Repair Information",
        bullets: [
          "Scan-tool reports and diagnostic trouble codes",
          "Test results and technician notes",
          "Repair observations",
          "Repair-related photographs",
          "Parts and warranty information",
        ],
      },
      {
        heading: "How Information Is Used",
        bullets: [
          "Scheduling and customer communication",
          "Diagnosis and repair",
          "Parts ordering",
          "Preparing estimates and invoices",
          "Payment processing",
          "Warranty administration",
          "Tax, accounting, insurance, and legal records",
        ],
      },
      {
        heading: "Information Sharing",
        paragraphs: [
          "Poteau Valley Repair does not sell, rent, or trade customer information.",
          "Information may be shared when reasonably necessary with parts suppliers, warranty providers, insurers, payment processors, government agencies, or law enforcement when legally required.",
        ],
      },
      {
        heading: "Data Security",
        paragraphs: [
          "Reasonable safeguards are used to limit access to customer information and protect business devices and records.",
          "No electronic storage or transmission system can be guaranteed completely secure.",
        ],
      },
      {
        heading: "Customer Rights",
        bullets: [
          "Request access to available repair records",
          "Correct inaccurate personal information",
          "Request copies of invoices and estimates",
          "Request available repair photographs",
        ],
      },
      {
        heading: "Website Cookies and Analytics",
        paragraphs: [
          "The website may use limited cookies or analytics tools to improve performance and customer experience.",
          "Sensitive payment information is not stored through website analytics.",
        ],
      },
      {
        heading: "Children's Privacy",
        paragraphs: [
          "Poteau Valley Repair does not knowingly collect personal information from children under 13.",
        ],
      },
    ],
  },
  {
    slug: "photo-documentation",
    title: "Vehicle & Equipment Photo Documentation Policy",
    effectiveDate: "To be established",
    introduction:
      "Photographs may be taken before, during, and after service to create an accurate record of vehicle or equipment condition and work performed.",
    sections: [
      {
        heading: "Purpose",
        bullets: [
          "Document condition before work begins",
          "Record existing damage, wear, or missing components",
          "Document diagnostic findings",
          "Verify completed repairs",
          "Support warranty or insurance claims",
          "Assist with parts identification",
          "Protect the customer and Poteau Valley Repair in the event of a dispute",
        ],
      },
      {
        heading: "Before Repairs",
        bullets: [
          "Front, rear, and side views",
          "Existing dents, scratches, glass damage, or other visible conditions",
          "Odometer or hour meter",
          "VIN or serial number when accessible",
          "Dashboard warning indicators",
          "Engine compartment",
          "Tires and wheels",
          "Areas related to the customer concern",
        ],
      },
      {
        heading: "During Diagnosis and Repair",
        bullets: [
          "Scan-tool screens and trouble codes",
          "Test results",
          "Leaks or damaged components",
          "Electrical concerns",
          "Removed parts",
          "Replacement parts",
          "Repair progress",
        ],
      },
      {
        heading: "After Repairs",
        bullets: [
          "Completed repairs",
          "Reinstalled components",
          "Final vehicle or equipment condition",
          "Dashboard status when applicable",
        ],
      },
      {
        heading: "Customer Privacy",
        paragraphs: [
          "Photographs are intended for legitimate repair and business purposes.",
          "Personal documents, payment cards, wallets, personal electronics, and unrelated identifying information will not be intentionally photographed.",
        ],
      },
      {
        heading: "Marketing Use",
        paragraphs: [
          "Repair or equipment photographs may be used for educational or marketing purposes.",
          "License plates, VINs, addresses, and other identifying information will be removed or obscured whenever practical unless written permission is provided.",
        ],
      },
      {
        heading: "Storage and Customer Requests",
        paragraphs: [
          "Repair photographs may be retained with the repair record for warranty, tax, insurance, quality-control, or legal purposes.",
          "Customers may request access to reasonably available photographs associated with their repair.",
        ],
      },
    ],
  },
];

export function getPolicy(slug: string) {
  return policies.find((policy) => policy.slug === slug);
}