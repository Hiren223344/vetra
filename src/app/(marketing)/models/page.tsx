import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Anthropic, OpenAI, Alibaba, DeepSeek, Xai } from '@lobehub/icons';

const AI_MODELS = [
    {
        provider: "Anthropic",
        icon: Anthropic,
        models: [
            "Claude Opus 4.6",
            "Claude Sonnet 4.5",
            "Claude Haiku 4.5"
        ],
        color: "from-amber-500 to-orange-600"
    },
    {
        provider: "OpenAI",
        icon: OpenAI,
        models: [
            "GPT 5.2"
        ],
        color: "from-green-500 to-emerald-600"
    },
    {
        provider: "Alibaba",
        icon: Alibaba,
        models: [
            "GLM 5"
        ],
        color: "from-blue-500 to-cyan-600"
    },
    {
        provider: "DeepSeek",
        icon: DeepSeek,
        models: [
            "DeepSeek V3.2"
        ],
        color: "from-purple-500 to-indigo-600"
    },
    {
        provider: "xAI",
        icon: Xai,
        models: [
            "Grok 4"
        ],
        color: "from-pink-500 to-rose-600"
    }
];

export const metadata = {
    title: "Available AI Models - Frenix",
    description: "Explore the latest AI models from leading providers like Anthropic, OpenAI, Alibaba, DeepSeek, and xAI on Frenix",
};

export default function ModelsPage() {
    return (
        <Wrapper className="py-20 relative">
            <section className="py-12">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-block px-4 py-1.5 mb-4 bg-blue-500/10 border border-blue-500/30 rounded-full">
                            <span className="text-sm font-semibold text-blue-600">2026 Edition</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight mb-4">
                            Available AI Models
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Access the latest and most powerful AI models from leading providers around the world
                        </p>
                    </div>
                </Container>

                <Container delay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {AI_MODELS.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-foreground/10 hover:border-blue-500/50 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-blue-500/10"
                            >
                                {/* Background gradient */}
                                <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-all duration-500`}></div>

                                <div className="relative z-10">
                                    {/* Provider header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <item.icon size={40} />
                                            <h3 className="text-xl font-bold text-foreground">{item.provider}</h3>
                                        </div>
                                    </div>

                                    {/* Models list */}
                                    <div className="space-y-2">
                                        {item.models.map((model, modelIndex) => (
                                            <div key={modelIndex} className="flex items-center gap-2">
                                                <span className="text-blue-500 text-lg">→</span>
                                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-all">{model}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Arrow */}
                                    <div className="mt-6 pt-6 border-t border-foreground/10 flex items-center justify-between">
                                        <span className="text-xs font-medium text-muted-foreground">Access now</span>
                                        <ArrowRightIcon className="w-4 h-4 text-blue-500/60 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>

                {/* CTA Section */}
                <Container delay={0.2}>
                    <div className="mt-20 flex flex-col items-center text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to get started?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Choose your plan and get instant access to all AI models through our unified API Gateway
                        </p>
                        <Link href="/#pricing">
                            <Button size="lg" className="gap-2">
                                View Pricing Plans
                                <ArrowRightIcon className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </Wrapper>
    );
}
