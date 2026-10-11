import { certificates, CertificateDetails } from "@/config/certificates";
import { CertificateCard } from "@/components/sections/Certificate/Certificate";
import { FadeIn } from "@/components/common/FadeIn";

export default function CertificatesPage() {
    return (
        <main className="container py-10 pb-18">
            <div className="text-start">
                <FadeIn delay={0.1}>
                <h1 className="test-foreground text-md font-mono font-semibold tracking-tight md:text-2xl">
                    Certificates
                </h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                <p className="text-muted mt-2 text-sm">
                    My certificates across different technologies.
                </p>
                </FadeIn>
                <div className="grid mt-4 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certificates.map((certificate, index) => (
                    <FadeIn delay={0.2 + index*0.05} key={certificate.code}>
                    <CertificateCard key={certificate.code} certificate={certificate} />
                    </FadeIn>
                ))}
                </div>
            </div>
        </main>
    );
}
