'use client';

import { Claude, OpenAI, Alibaba, DeepSeek, Xai } from '@lobehub/icons';
import { SearchIcon, ListIcon, Settings2Icon } from 'lucide-react';
import { useState } from 'react';

const AI_MODELS = [
    {
        name: "Claude Opus 4.6",
        provider: "Anthropic",
        icon: Claude,
        description: "Anthropic's most advanced AI model with superior reasoning and instruction-following capabilities. Ideal for complex tasks and long-context analysis.",
        tokens: "1.5M context",
        inputPrice: "$3.00",
        outputPrice: "$15.00",
        author: "anthropic",
        tags: ["Reasoning", "Instruction-Following", "Long-Context"],
        date: "2026-02-15"
    },
    {
        name: "Claude Sonnet 4.5",
        provider: "Anthropic",
        icon: Claude,
        description: "Balanced AI model offering excellent performance for general-purpose tasks with improved speed and efficiency.",
        tokens: "200K context",
        inputPrice: "$3.00",
        outputPrice: "$15.00",
        author: "anthropic",
        tags: ["Balanced", "General-Purpose", "Fast"],
        date: "2026-02-10"
    },
    {
        name: "Claude Haiku 4.5",
        provider: "Anthropic",
        icon: Claude,
        description: "Lightweight and cost-effective model perfect for simple queries and real-time applications requiring low latency.",
        tokens: "200K context",
        inputPrice: "$0.80",
        outputPrice: "$4.00",
        author: "anthropic",
        tags: ["Fast", "Cost-Effective", "Lightweight"],
        date: "2026-02-05"
    },
    {
        name: "OpenAI GPT 5.2",
        provider: "OpenAI",
        icon: OpenAI,
        description: "Next-generation language model with enhanced reasoning capabilities and multimodal understanding for advanced applications.",
        tokens: "8K context",
        inputPrice: "$2.50",
        outputPrice: "$10.00",
        author: "openai",
        tags: ["Advanced", "Multimodal", "High-Performance"],
        date: "2026-02-12"
    },
    {
        name: "GLM 5",
        provider: "Alibaba",
        icon: Alibaba,
        description: "Alibaba's cutting-edge model optimized for multilingual tasks and Chinese language understanding with exceptional performance.",
        tokens: "4K context",
        inputPrice: "$1.50",
        outputPrice: "$6.00",
        author: "alibaba",
        tags: ["Multilingual", "Chinese-Optimized", "Efficient"],
        date: "2026-02-08"
    },
    {
        name: "DeepSeek V3.2",
        provider: "DeepSeek",
        icon: DeepSeek,
        description: "DeepSeek's latest model featuring improved reasoning and logic capabilities for complex problem-solving.",
        tokens: "8K context",
        inputPrice: "$1.20",
        outputPrice: "$4.80",
        author: "deepseek",
        tags: ["Reasoning", "Logic", "Efficient"],
        date: "2026-02-01"
    },
    {
        name: "Grok 4",
        provider: "xAI",
        icon: Xai,
        description: "xAI's humorous and witty AI model with strong general knowledge and real-time information understanding.",
        tokens: "8K context",
        inputPrice: "$2.00",
        outputPrice: "$8.00",
        author: "xai",
        tags: ["General-Knowledge", "Real-Time", "Creative"],
        date: "2026-02-03"
    }
];

export default function ModelsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b border-foreground/10 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-foreground">Models</h1>
                            <p className="text-sm text-muted-foreground mt-1">{AI_MODELS.length} models</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative hidden sm:block">
                                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Search models..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 pr-4 py-2 rounded-lg bg-foreground/5 border border-foreground/10 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors w-64"
                                />
                            </div>
                            <button className="p-2 rounded-lg bg-foreground/5 border border-foreground/10 hover:border-blue-500/50 transition-colors flex-shrink-0">
                                <Settings2Icon className="w-4 h-4 text-foreground" />
                            </button>
                            <button className="p-2 rounded-lg bg-foreground/5 border border-foreground/10 hover:border-blue-500/50 transition-colors flex-shrink-0">
                                <ListIcon className="w-4 h-4 text-foreground" />
                            </button>
                        </div>
                    </div>

                    {/* Sorting */}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex-1"></div>
                        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                            Newest <span className="text-xs">↓</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Models List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="space-y-4">
                    {AI_MODELS.filter(model => 
                        model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        model.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        model.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
                    ).map((model, index) => {
                        const IconComponent = model.icon;
                        return (
                        <div
                            key={index}
                            className="group relative rounded-xl bg-gradient-to-r from-foreground/5 to-foreground/[0.02] border border-foreground/10 hover:border-blue-500/30 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-blue-500/5"
                        >
                            <div className="flex items-start gap-4">
                                {/* Logo */}
                                <div className="flex-shrink-0 pt-1">
                                    <IconComponent size={32} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-base font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                                                {model.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                                {model.description}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-right">
                                            <p className="text-sm font-semibold text-foreground">{model.tokens}</p>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {model.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="inline-flex items-center px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></span>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-foreground/5">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <span>by {model.author}</span>
                                            <span>•</span>
                                            <span>${model.inputPrice} input tokens</span>
                                            <span>•</span>
                                            <span>${model.outputPrice} output tokens</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
