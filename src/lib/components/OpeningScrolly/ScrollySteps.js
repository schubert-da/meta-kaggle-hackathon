import { writable } from "svelte/store";

export const scrollySteps = [
    {
        foregroundText: "<p style='text-align: center'>Three months of Python tutorials, statistics lectures, and mock datasets are behind you. Your certificate says \"Data Scientist\" but you feel anything but qualified.<br><br> You heard a bit about Kaggle competitions, so you find a competition that seems interesting and you decide to finally take the plunge.<br><br> <span style='font-size: 16px;'>Scroll down to follow your journey</span></p>",
    },
    {
        foregroundText: ''
    },
    {
        trackHeaderText: "Registration",
        day: 0,
    },
    {
        trackLogText: "You join the competition and immediately realise that you have never work on image data before. No worries, you can just fork the starter notebook and figure it out as you go",
        notebooks: 633,
        topics: 8,
        day: 1,
    },
    {
        trackLogText: "Slowly you start to run a few cells, trying to understand the data. You are not sure what you are doing, but you are excited to finally start working on a real project.",
        score: 0.44,
        notebooks: 910,
        topics: 12,
        day: 5,
    },
    {
        trackHeaderText: "Weeks 2-4",
    },
    {
        trackLogText: "You finally start writing code of your own. A bit of data cleanup as you practise with pandas - it does take several tries, but you do get there in the end.",
        score: 0.52,
        notebooks: 1330,
        topics: 16,
        day: 11,
    },
    {
        trackLogText: "Your first chart! A simple histogram of the data distribution - and a pretty one at that.",
        score: 0.52,
        notebooks: 1330,
        topics: 16,
        day: 11,
    },
    {
        trackLogText: "Tinkering with the model, you know the theory behind the different parameters but this is your first time tweaking things - some things work better than others. It is now that you publish your first notebook.",
        score: 0.55,
        notebooks: 1337,
        topics: 19,
        day: 17,
    },
    {
        trackLogText: "As expected, you don't do so great on the leaderboard...",
        score: 0.57,
        notebooks: 1483,
        topics: 23
    },
    {
        trackHeaderText: "Weeks 5-8",
        score: 0.61,

    },
    {
        trackLogText: "Someone shared a notebook showcasing an ensemble technique that you have never seen before. You decide to try it out, immediately seeing the biggest improvement in your results so far.",
        score: 0.66,
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
        score: 0.65,
    },
    {
        trackLogText: "You continue to refine your model, reading up on others' approaches, experimenting with different feature engineering methods. Your understanding of the problem deepens...",
        score: 0.67,
        notebooks: 2172,
        topics: 31,
        day: 70
    },
    {
        trackLogText: "Finally, you submit your model and eagerly await the results.",
        score: 0.69,
        notebooks: 2251,
        topics: 35,
        day: 80
    },
    {
        trackHeaderText: "Competition Deadline",
        day: 92,
    },
    {
        foregroundText: "Spoiler alert - you didn't win but that's expected with your first few competitions. But you learned a lot along the way - from taking your first steps in code, right down to building an actual working computer vision model. <br><br>That said, while you might want to jump into applying this on your next job, there are a couple things you might need to understand about Kaggle competitions:",
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