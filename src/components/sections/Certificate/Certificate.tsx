import { ViewMoreButton } from "@/components/common/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { certificates, CertificateDetails } from "@/config/certificates";
import Image from "next/image";
import { Calendar, ArrowUpRight } from "lucide-react";


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
            <div className="pl-0 md:pl-4 mt-4">
            <p className="text-muted max-w-xl text-sm leading-6 md:text-base">
                Professional certifications that validate my expertise in automation, software
                development, and cloud technologies.
            </p>
            <div className="grid mt-4 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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


function CertificateCard({
    certificate
}: {certificate: CertificateDetails}) {
    return (
        <Card className="group relative overflow-hidden border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl">

            {/* Gradient Background */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    background: `linear-gradient(135deg, ${certificate.color} 0%, transparent 60%)`,
                }}
            />

            {/* Glow */}
            <div
                className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-40"
                style={{
                    backgroundColor: certificate.color,
                    opacity: 0.18,
                }}
            />

            <CardContent className="relative space-y-6 p-7">

                {/* Logo */}
                <div className="flex justify-center">
                    <Image
                        src={certificate.logo}
                        alt={certificate.verifiedBy}
                        width={72}
                        height={72}
                        className="h-14 w-auto object-contain grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                    />
                </div>

                {/* Title */}
                <div className="space-y-1 text-center">
                    <h3 className="text-lg font-semibold leading-snug tracking-tight">
                        {certificate.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        {certificate.verifiedBy}
                    </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-border/60 pt-4">

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />

                        {certificate.issuedDate.toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                        })}
                    </div>

                    <Badge
                        variant="secondary"
                        className="gap-1 rounded-full bg-slate-400/30"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Verified
                    </Badge>

                </div>

                {/* Hover Link */}
                {certificate.verificationUrl && (
                    <div className="flex justify-end">

                        <a
                            href={certificate.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 hover:text-foreground"
                        >
                            View Credential
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>

                    </div>
                )}

            </CardContent>
        </Card>
    );
}