'use client';

import Container from "../global/container";
import Wrapper from "../global/wrapper";
import { Anthropic, OpenAI, Alibaba, DeepSeek, Xai } from '@lobehub/icons';

const MODELS = [
    {
        provider: "Anthropic",
        icon: Anthropic,
        models: [
            "Claude Opus 4.6",
            "Claude Sonnet 4.5",
            "Claude Haiku 4.5"
        ]
    },
    {
        provider: "OpenAI",
        icon: OpenAI,
        models: [
            "GPT 5.2"
        ]
    },
    {
        provider: "Alibaba",
        icon: Alibaba,
        models: [
            "GLM 5"
        ]
    },
    {
        provider: "DeepSeek",
        icon: DeepSeek,
        models: [
            "DeepSeek V3.2"
        ]
    },
    {
        provider: "xAI",
        icon: Xai,
        models: [
            "Grok 4"
        ]
    }
];

const Models = () => {
    return null;
};

export default Models;
