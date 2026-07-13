import { ViewMoreButton } from "@/components/common/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { certificates, CertificateDetails } from "@/config/certificates";

export default function CertificateSection() {
    return (
        <section id="certificate" aria-labelledby="certificate-heading" className="mt-14">
            {/* Header */}
            <h2
                id="certificate-heading"
                className="test-foreground text-md font-mono font-semibold tracking-tight md:text-2xl"
            >
                Certificates
            </h2>
            <div className="pl-4 mt-4">
            <p className="text-muted max-w-xl text-sm leading-6 md:text-base">
                Professional certifications that validate my expertise in automation, software
                development, and cloud technologies.
            </p>
            <div className="grid mt-4 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {certificates
                    .filter((c) => c.featured)
                    .map((certificate) => (
                        <CertificateCard key={certificate.code} certificate={certificate} />
                    ))}
            </div>
            </div>
            <ViewMoreButton text="certificates" href="/certificates" />
        </section>
    );
}

function CertificateCard({ key, certificate }: { key: string; certificate: CertificateDetails }) {
    return (
        <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="space-y-5 p-6">
                <div className="flex justify-center">
                    <img
                        src={certificate.logo}
                        alt={certificate.verifiedBy}
                        className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                <div className="space-y-1 text-center">
                    <h3 className="leading-snug font-semibold">{certificate.name}</h3>

                    <p className="text-muted-foreground text-sm">{certificate.verifiedBy}</p>
                </div>

                <div className="text-muted-foreground flex items-center justify-between text-xs">
                    <span>
                        {new Date(certificate.issuedDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "2-digit",
                        })}
                    </span>

                    <Badge variant="secondary">Verified</Badge>
                </div>
            </CardContent>
        </Card>
    );
}
