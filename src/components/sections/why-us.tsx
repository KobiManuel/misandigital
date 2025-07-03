import { AnimatedWrapper } from "@/components/animations/animated-wrapper"
import AnimatedCounter from "@/components/ui/animated-counter"
import { CheckCircle } from "lucide-react"

const stats = [
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 250, suffix: "+", label: "Projects Completed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 50, suffix: "+", label: "Expert Team Members" },
]

const WhyUsSection = () => {
    return (
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <AnimatedWrapper>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Why Choose MisanDigital?</h2>
                            <p className="text-muted-foreground">
                                We are your trusted partner in achieving online success. Our experienced team creates tailored digital marketing strategies that engage your audience and align with current trends. With a focus on impactful content, we help elevate your online presence and drive meaningful results for your business!
                            </p>
                            <ul className="space-y-3 pt-4">
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /><span>Tailored Digital Strategies</span></li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /><span>Experienced & Professional Team</span></li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /><span>Focus on Impactful Content</span></li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /><span>Proven Meaningful Results</span></li>
                            </ul>
                        </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper delay={200}>
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center bg-background/50 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-4xl sm:text-5xl font-extrabold text-primary">
                                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                    </h3>

                                    <p className="mt-2 text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedWrapper>
                </div>
            </div>
        </section>
    )
}

export default WhyUsSection;
