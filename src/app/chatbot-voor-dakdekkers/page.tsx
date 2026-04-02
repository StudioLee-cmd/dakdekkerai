import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import ChatbotContent from "@/app/chatbot/ChatbotContent";

export const metadata: Metadata = {
    title: `Chatbot voor Dakdekkers | ${siteDetails.siteName}`,
    description: `Ontdek onze chatbot oplossing speciaal voor dakdekkers. ${siteDetails.siteName} helpt je groeien.`,
};

export default function Page() {
    return <ChatbotContent />;
}
