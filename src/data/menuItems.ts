import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Dakdekkers", url: "/chatbot" },
            { text: "Voice AI voor Dakdekkers", url: "/voice-ai" },
            { text: "SEO voor Dakdekkers", url: "/seo" },
            { text: "Social Media voor Dakdekkers", url: "/social-media" },
            { text: "Reviews voor Dakdekkers", url: "/reviews" },
            { text: "Review Pakket", url: "/review-pakket" },
            { text: "CRM voor Dakdekkers", url: "/crm" },
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
