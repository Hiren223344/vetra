import Container from "../global/container";
import { Badge } from "../ui/badge";

const AI_PROVIDERS_LIST = [
    { name: "OpenAI", model: "GPT-4, GPT-4 Turbo, GPT-3.5" },
    { name: "Anthropic", model: "Claude 3 Opus, Claude 3 Sonnet" },
    { name: "Google Gemini", model: "Gemini Pro, Gemini Vision" },
    { name: "Groq", model: "Mixtral, Llama 2" },
    { name: "Cohere", model: "Command, Command Light" },
    { name: "DeepInfra", model: "Llama, Mistral, Code Llama" },
    { name: "Meta Llama", model: "Llama 2, Llama 3" },
    { name: "Mistral", model: "Mistral 7B, Mistral Medium" },
];

const AIProviders = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Powered by Top AI <br className="hidden lg:block" /> <span className="font-subheading italic">Model Providers</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Access cutting-edge AI models from the world's leading providers. All available through a single unified API.
                    </p>
                </div>
            </Container>

            <Container delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto">
                    {AI_PROVIDERS_LIST.map((provider, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-start p-6 rounded-xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <h3 className="font-semibold text-lg text-foreground">
                                {provider.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-3">
                                {provider.model}
                            </p>
                            <Badge className="mt-4 bg-blue-500/20 text-blue-400 border-blue-500/50">
                                Available
                            </Badge>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default AIProviders;
