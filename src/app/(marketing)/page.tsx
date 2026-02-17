import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import LanguageSupport from "@/components/marketing/lang-support";
import Pricing from "@/components/marketing/pricing";
import AIProviders from "@/components/marketing/ai-providers";
import Models from "@/components/marketing/models";

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            <Companies />
            <Features />
            <Analysis />
            <Integration />
            <AIProviders />
            <Models />
            <Pricing />
            <LanguageSupport />
            <CTA />
        </Wrapper>
    )
};

export default HomePage
