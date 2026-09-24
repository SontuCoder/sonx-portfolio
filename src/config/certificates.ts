type CertificateMeta = {
  name: string;
  code: string;
  color: string;
  logo: string;
  verifiedBy: string;
  issuedDate: Date;
  featured: boolean;
};

export interface CertificateDetails extends CertificateMeta {
  verificationUrl?: string;
  learn: readonly string[];
}

export const certificates: CertificateDetails[] = [
  {
    name: "Postman API Fundamentals Student Expert",
    code: "",
    color: "#FF6C37",
    logo: "/certificates/Postman_badges.png",
    verifiedBy: "Postman",
    issuedDate: new Date("2026-03-06"),
    featured: true,
    verificationUrl: "https://api.badgr.io/public/badges/G0U1YVeOSdGAiytb9Yw6_w",
    learn: [
    "REST API fundamentals",
    "HTTP methods — GET, POST, PATCH, DELETE",
    "Request parameters, headers, and bodies",
    "HTTP response and status codes",
    "Postman API testing",
    "Basic Postman scripting",
    "API key authentication",
    "API integration",
    ],
  },
];
