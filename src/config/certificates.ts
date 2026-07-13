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
    name: "Automation Developer Associate",
    code: "UIPATH-ADAV1",
    color: "#FA4616",
    logo: "/certificates/uipath_ada.png",
    verifiedBy: "UiPath",
    issuedDate: new Date("2025-04-26"),
    featured: true,
    verificationUrl: "https://credentials.uipath.com/...",
    learn: [
      "Build enterprise automation workflows",
      "Implement REFramework",
      "Handle exceptions and logging",
      "Use UiPath Orchestrator",
      "Develop reusable automation components",
    ],
  },
];
