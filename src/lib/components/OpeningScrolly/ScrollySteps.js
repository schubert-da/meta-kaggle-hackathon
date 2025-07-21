import { writable } from "svelte/store";

export const scrollySteps = [
    {
        foregroundText: "Three months of Python tutorials, statistics lectures, and mock datasets are behind you. Your certificate says \"Data Scientist\" but you feel anything but qualified.<br><br> You heard a bit about Kaggle competitions, so you find a competition that seems interesting and you decide to finally take the plunge.<br><br> Scroll down to follow your journey.",
    },
    {
        foregroundText: ''
    },
    {
        trackHeaderText: "Registration",
        day: 0,
    },
    {
        trackLogText: "You haven't worked with image data before so you decide to fork a starter notebook",
        score: 0.32,
        notebooks: 633,
        topics: 8,
        day: 1,
    },
    {
        trackLogText: "Then we study one of the early EDA notebooks",
        score: 0.45,
        notebooks: 910,
        topics: 12,
        day: 5,
    },
    {
        trackHeaderText: "Weeks 2-4",
        score: 0.54,
    },
    {
        trackLogText: "You finally start writing code of your own. Slowly understanding the data as you plot a couple charts along the way",
        score: 0.52,
        notebooks: 1330,
        topics: 16,
        day: 11,
    },
    {
        trackLogText: "Tinkering with the model, understanding the different parameters and how they affect the results. It is now that you publish your first notebook.",
        score: 0.54,
        notebooks: 1337,
        topics: 19,
        day: 17,
    },
    {
        trackLogText: "As expected, you don't have amazing success on the leaderboard. But you are happy to have made it this far.",
        score: 0.53,
        notebooks: 1483,
        topics: 23
    },
    {
        trackHeaderText: "Weeks 5-8",
        score: 0.64,

    },
    {
        trackLogText: "Someone has shared a notebook showcasing an ensemble technique that you have never seen before. You decide to try it out, immediately seeing an improvement in your results.",
        score: 0.61,
        notebooks: 1741,
        topics: 25,
        day: 38
    },
    {
        trackLogText: "You build on this model, adding your own tweaks and improvements. You are now starting to feel like you know what you are doing.",
        score: 0.64,
        notebooks: 1975,
        topics: 27,
        day: 55
    },
    {
        trackHeaderText: "Weeks 9-12",
        score: 0.68,
    },
    {
        trackLogText: "You continue to refine your model, reading up on others' kernels, experimenting with different feature engineering methods. Your understanding of the problem deepens.",
        score: 0.67,
        notebooks: 2172,
        topics: 31,
        day: 70
    },
    {
        trackLogText: "Finally, you submit your model and eagerly await the results.",
        score: 0.68,
        notebooks: 2251,
        topics: 35,
        day: 80
    },
    {
        trackHeaderText: "Competition Deadline",
        day: 92,
    },
    {
        foregroundText: "You might not have won, but you learned a lot along the way. And while you might want to jump into applying this on your next job, there are a couple things you might need to understand first",
    },
    {
        foregroundText: "manual",
    },

]

export function getScrollyTextIndex(text) {
    let currentValue = Object.values(text)?.[0];

    return scrollySteps.findIndex(step =>
        Object.values(step).some(value => value === currentValue)
    );
}

export const stepHeights = writable({});

export function createLineChartSVG(data, width = 400, height = 200, padding = 40) {
    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);
    const range = maxValue - minValue;

    // Calculate positions
    const stepX = (width - 2 * padding) / (data.length - 1);
    const points = data.map((value, index) => ({
        x: padding + index * stepX,
        y: height - padding - ((value - minValue) / range) * (height - 2 * padding)
    }));

    // Create path strings
    const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    const areaPath = `M ${points[0].x} ${height - padding} L ${linePath.slice(2)} L ${points[points.length - 1].x} ${height - padding} Z`;

    return `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#E4B26C;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#E4B26C;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  
  <path d="${areaPath}" fill="url(#areaGradient)" stroke="none" />
  <path d="${linePath}" fill="none" stroke="#E4B26C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  
  ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#E4B26C" />`).join('\n  ')}
</svg>`;
}

// Usage example:
const myData = [0.45, 0.45, 0.52, 0.54, 0.53, 0.61, 0.64, 0.67, 0.68];
const svgChart = createLineChartSVG(myData);