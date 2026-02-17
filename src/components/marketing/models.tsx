'use client';

import Container from "../global/container";
import Wrapper from "../global/wrapper";

const MODELS = [
    {
        provider: "Anthropic",
        models: [
            "Claude Opus 4.6",
            "Claude Sonnet 4.5",
            "Claude Haiku 4.5"
        ]
    },
    {
        provider: "OpenAI",
        models: [
            "GPT 5.2"
        ]
    },
    {
        provider: "Alibaba",
        models: [
            "GLM 5"
        ]
    },
    {
        provider: "DeepSeek",
        models: [
            "DeepSeek V3.2"
        ]
    },
    {
        provider: "xAI",
        models: [
            "Grok 4"
        ]
    }
];

const Models = () => {
    return (
        <section className="relative py-20">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold !leading-snug">
                            Available AI Models <br className="hidden lg:block" /> <span className="font-subheading italic">in 2026</span>
                        </h2>
                        <p className="text-base md:text-lg text-center text-muted-foreground mt-6">
                            Access the latest and most powerful AI models from leading providers around the world
                        </p>
                    </div>
                </Container>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {MODELS.map((provider, index) => (
                        <Container key={index} delay={0.05 * (index + 1)}>
                            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-foreground/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">
                                            {provider.provider.charAt(0)}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold">{provider.provider}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {provider.models.map((model, modelIndex) => (
                                        <li 
                                            key={modelIndex}
                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                        >
                                            <span className="text-blue-500 mt-1">→</span>
                                            <span>{model}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Container>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Models;
