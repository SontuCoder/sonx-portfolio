import { FadeIn } from "@/components/common/FadeIn";
import { awards } from "@/config/awards";


export default function Awards() {
    return (
        <section
            id="awards"
            aria-labelledby="awards-heading"
            className="my-14"
        >
            <FadeIn delay={0.8} >
            <div className="mb-12">
                <p className="text-muted mb-2 text-sm">
                    Recognition
                </p>

                <h2 className="test-foreground text-md font-mono font-semibold tracking-tight md:text-2xl">
                    Awards & Achievements
                </h2>
            </div>
            </FadeIn>
            <div className="">
                {awards.map((group, index) => (
                    <FadeIn delay={0.8 + index*0.05} key={group.year}>
                    <div
                        key={group.year}
                        className="border-border grid border-b py-8 md:grid-cols-[120px_1fr]"
                    >
                        {/* Year */}
                        <div className="mb-6 md:mb-0">
                            <span className="text-muted-foreground text-sm">
                                {group.year}
                            </span>
                        </div>

                        {/* Awards in this year */}
                        <div className="space-y-8">
                            {group.items.map((award) => (
                                <div
                                    key={award.title}
                                    className="group flex items-start gap-5"
                                >
                                    {/* Award Image - hidden below md */}
                                    <div className="hidden shrink-0 md:block">
                                        <div className="border-border bg-muted relative h-18 w-25 overflow-hidden rounded-xl border">
                                            <img
                                                src={award.image}
                                                alt={award.title}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                                            <h3 className="text-lg2 font-medium tracking-tight">
                                                {award.title}
                                            </h3>

                                            <span className="text-foreground text-sm">
                                                {award.organization}
                                            </span>
                                        </div>

                                        <p className="text-muted mt-2 max-w-2xl text-sm leading-6">
                                            {award.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}