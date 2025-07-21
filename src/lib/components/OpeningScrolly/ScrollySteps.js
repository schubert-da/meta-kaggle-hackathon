import { writable } from "svelte/store";

export const scrollySteps = [
    {
        foregroundText: "So you just finished that data science course and you wanted to try a Kaggle competition to see what all the hype is about. <br> Scroll down to follow your journey.",
    },
    {
        trackHeaderText: "Registration",
    },
    {
        trackLogText: "You haven't worked with image data before so you decide to fork a starter notebook",
    },
    {
        trackLogText: "Then we study one of the early EDA notebooks",
    },
    {
        trackHeaderText: "Weeks 2-4",
    },
    {
        trackLogText: "You finally start writing code of your own. Slowly understanding the data as you plot a couple charts along the way",
    },
    {
        trackLogText: "Tinkering with the model, understanding the different parameters and how they affect the results. It is now that you publish your first notebook.",
    },
    {
        trackLogText: "As expected, you don't get have amazing success on the leaderboard. But you are happy to have made it this far.",
    },
    {
        trackHeaderText: "Weeks 5-8",
    },
    {
        trackLogText: "Someone has shared a notebook showcasing an ensemble technique that you have never seen before. You decide to try it out, immediately seeing an improvement in your results.",
    },
    {
        trackLogText: "You build on this model, adding your own tweaks and improvements. You are now starting to feel like you know what you are doing.",
    },
    {
        trackHeaderText: "Weeks 9-12",
    },
    {
        trackLogText: "You continue to refine your model, reading up on others' kernels, experimenting with different feature engineering methods. Your understanding of the problem deepens.",
    },
    {
        trackLogText: "Finally, you submit your model and eagerly await the results."
    },
    {
        trackHeaderText: "Competition Deadline",
    },
    {
        foregroundText: "You didn't win, but you learned a lot and are excited to try again in the next competition. You feel like you have grown as a data scientist.",
    },
    {
        foregroundText: "You didn't win, but you learned a lot and are excited to try again in the next competition. You feel like you have grown as a data scientist.",
    },
    {
        foregroundText: "You didn't win, but you learned a lot and are excited to try again in the next competition. You feel like you have grown as a data scientist.",
    },

]

export function getScrollyTextIndex(text) {
    let currentValue = Object.values(text)?.[0];

    return scrollySteps.findIndex(step =>
        Object.values(step).some(value => value === currentValue)
    );
}

export const stepHeights = writable({});