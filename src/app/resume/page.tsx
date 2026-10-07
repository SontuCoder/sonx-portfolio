"use client"

export default function CertificatesPage() {
    return (
        <main className="container py-10">
            <div className="text-start">
                <h1 className="test-foreground text-md font-mono font-semibold tracking-tight md:text-2xl">
                    Resume
                </h1>
                <p className="text-muted text-sm">View and download my professional resume.</p>
            </div>
             <div className="mt-10 h-160 overflow-hidden rounded-xl border">
            <iframe
                src="https://drive.google.com/file/d/1-4ecFcLR2b_xMsRLA9EuFnT0dO0O-T05/preview"
                title="Resume"
                className="h-full w-full"
            ></iframe>
            </div>
        </main>
    );
}
