import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Dakdekkers", url: "/chatbot-voor-dakdekkers" },
            { text: "Voice AI voor Dakdekkers", url: "/voice-ai-voor-dakdekkers" },
            { text: "SEO voor Dakdekkers", url: "/seo-voor-dakdekkers" },
            { text: "Social Media voor Dakdekkers", url: "/social-media-voor-dakdekkers" },
            { text: "Reviews voor Dakdekkers", url: "/reviews-voor-dakdekkers" },
            { text: "Review Pakket", url: "/review-pakket" },
        ]
    },
    {
        text: "Tarieven",
        url: "/tarieven"
    },
    {
        text: "Gratis Scan",
        url: "/gratis-scan"
    },
    {
        text: "Gratis Website",
        url: "/gratis-website"
    },
    {
        text: "Blog",
        url: "/blog"
    }
];
