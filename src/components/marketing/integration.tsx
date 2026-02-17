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

    return null;
};

export default Integration;
