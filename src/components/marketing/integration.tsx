import { cn } from "@/lib";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Images from "../global/images";
import { Button } from "../ui/button";
import Ripple from "../ui/ripple";

const AI_PROVIDERS = [
    { name: "OpenAI", icon: Icons.linkedin, position: "left-3", size: "small", iconSize: "small", className: "hidden lg:flex" },
    { name: "Anthropic", icon: Icons.tiktok, position: "left-2", size: "medium", iconSize: "medium" },
    { name: "Google Gemini", icon: Icons.insta, position: "left-1", size: "large", iconSize: "large" },
    { name: "Groq", icon: Icons.youtube, position: "right-1", size: "large", iconSize: "large" },
    { name: "DeepInfra", icon: Icons.x, position: "right-2", size: "medium", iconSize: "medium" },
    { name: "Cohere", icon: Icons.facebook, position: "right-3", size: "small", iconSize: "small", className: "hidden lg:flex" }
];

const Integration = () => {

    const getPositionClasses = (position: string) => {
        switch (position) {
            case "left-3": return "-translate-x-[285px]";
            case "left-2": return "-translate-x-[210px]";
            case "left-1": return "-translate-x-[125px]";
            case "right-1": return "translate-x-[125px]";
            case "right-2": return "translate-x-[210px]";
            case "right-3": return "translate-x-[285px]";
            default: return "";
        }
    };

    const getSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "size-20";
            case "medium": return "size-16";
            case "small": return "size-12";
            default: return "size-20";
        }
    };

    const getIconSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "size-10";
            case "medium": return "size-7";
            case "small": return "size-5";
            default: return "size-10";
        }
    };

    return (
        <section className="relative py-20">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold !leading-snug">
                            Enterprise AI Integration
                        </h2>
                        <p className="text-base md:text-lg text-center text-muted-foreground mt-6">
                            Seamlessly connect to multiple AI providers with a single unified API. Scale your AI infrastructure without vendor lock-in.
                        </p>
                        <div className="mt-8">
                            <Link href="#">
                                <Button size="lg">
                                    View all Integrations
                                    <ArrowRightIcon className="size-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {AI_PROVIDERS.map((provider, index) => (
                        <Container key={index} delay={0.05 * (index + 1)}>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-foreground/10 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                        <span className="text-xs font-bold text-white">API</span>
                                    </div>
                                    <span className="font-semibold text-sm">{provider.name}</span>
                                </div>
                            </div>
                        </Container>
                    ))}
                </div>
            </Wrapper>
        </section>
    )
};

export default Integration;
