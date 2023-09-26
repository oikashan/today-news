import { RouteObject } from "react-router-dom";
import { ArticleCategory } from "./ArticleTypes";

export * from "./Article";
export * from "./ArticleTypes";
export { default as useArticles } from "./useArticles";
export { default as ArticleComponent } from "./ArticleComponent";

export const defaultArticleCategory: ArticleCategory = "astrology";

export const articleCategories: ArticleCategory[] = [
  "astrology",
  "business",
  "lifestyle",
  "philanthropy",
  "technology",
  "vacation",
];

export const articleCategoriesWithoutDefaultCategory = articleCategories.filter(
  (category) => category !== defaultArticleCategory
);

export const articleCategoryNavItems =
  articleCategoriesWithoutDefaultCategory.map((category) => ({
    to: `/${category}`,
    label: category.toUpperCase(),
  }));

export const articleCategoryRoutes: (Pick<RouteObject, "path" | "index"> & {
  category: ArticleCategory;
  basename?: ArticleCategory;
})[] = [
  {
    path: "/",
    index: true,
    category: defaultArticleCategory,
  },
  ...articleCategoriesWithoutDefaultCategory.map((category) => ({
    category,
    index: false,
    basename: category,
    path: `/${category}`,
  })),
];

export const articleCategoryHeadings: Record<ArticleCategory, string[]> = {
  astrology: [
    "New Horizons in Astrology: The Science of Stars Continues to Amaze",
    "Your Zodiac Sign's Influence on Career Choices and Success",
    "Mercury Retrograde: How to Navigate the Cosmic Chaos",
    "Astrological Predictions for Love and Relationships in the Coming Month",
    "Exploring the Mysteries of Retrograde Planets: What It Means for You",
    "Astrology and Wellness: Aligning Your Health with the Stars",
    "The Power of Eclipses: How They Shape Your Destiny",
    "Discovering Your Moon Sign: Unveiling Hidden Emotions and Desires",
    "Planetary Alignments: What's in Store for Your Finances?",
    "Mars in Retrograde: Channeling Energy and Motivation",
  ],
  business: [
    "Global Markets Rally as Economic Recovery Gains Momentum",
    "Tech Giants' CEOs Testify on Data Privacy and Antitrust Concerns",
    "Sustainable Business Practices: The Key to Long-Term Success",
    "Innovation in the Post-Pandemic World: Adapting to New Realities",
    "Remote Work Revolution: Redefining the Future of the Office",
    "Cryptocurrency Boom: Navigating the Volatile Digital Economy",
    "Entrepreneurship in the Digital Age: Lessons from Startup Successes",
    "Supply Chain Disruptions: Challenges and Solutions for Businesses",
    "The Rise of ESG Investing: Profits with a Purpose",
    "Diverse Leadership: The Business Case for Inclusion and Equality",
  ],
  lifestyle: [
    "Wellness Trends 2023: Prioritizing Mental and Physical Health",
    "The Art of Mindful Living: Finding Balance in a Hectic World",
    "Culinary Adventures: Exploring Global Flavors in Your Kitchen",
    "Fashion Forward: Sustainable Style Choices for a Greener World",
    "Digital Detox: Unplugging to Reconnect with Real Life",
    "Adventure Awaits: Rediscovering Travel in the New Normal",
    "Self-Care for the Soul: Practices to Nourish Your Well-Being",
    "Home Makeover: Creating Cozy Retreats in Your Living Spaces",
    "Hygge and Happiness: Embracing the Danish Way of Life",
    "New Hobbies and Pastimes: Discovering Your Passion Projects",
  ],
  philanthropy: [
    "Tech Billionaires' Philanthropic Initiatives: A Look at Giving Back",
    "The Power of Small Acts: Everyday Philanthropy in Action",
    "Social Impact Investing: Aligning Profit with Purpose",
    "Education for All: Tackling Global Education Inequality",
    "Humanitarian Heroes: Recognizing Extraordinary Acts of Kindness",
    "Climate Change Philanthropy: Funding Solutions for a Greener Planet",
    "Corporate Social Responsibility: Business's Role in Social Change",
    "Empowering Women and Girls: Philanthropy's Focus on Gender Equality",
    "Healthcare Initiatives: Improving Access to Medical Care Worldwide",
    "Generosity Knows No Borders: International Philanthropy in Action",
  ],
  technology: [
    "Artificial Intelligence Breakthroughs: Shaping the Future of Tech",
    "The Metaverse: A New Digital Universe Takes Shape",
    "Quantum Computing: Unlocking the Potential of Quantum Bits",
    "Cybersecurity Challenges in the Age of Data Breaches",
    "Green Tech Revolution: Innovations for a Sustainable Future",
    "5G's Impact on Communication and Connectivity Worldwide",
    "Robotics in Healthcare: Transforming Medical Practices",
    "Space Exploration: The Next Frontiers for Human Innovation",
    "Biotech Advancements: Revolutionizing Medicine and Research",
    "Blockchain and Beyond: Emerging Technologies to Watch",
  ],
  vacation: [
    "Dream Destinations 2023: Planning Your Perfect Getaway",
    "Eco-Friendly Travel: Sustainable Adventures Around the Globe",
    "Cultural Immersion: Rediscovering the Joy of Travel",
    "Adventurous Escapes: Thrill-Seeking Trips for the Brave",
    "Island Paradise: Unwinding in Tropical Retreats",
    "Road Tripping: Exploring the Beauty of the Open Road",
    "Luxury Travel: Indulging in Extravagant Experiences",
    "Family-Friendly Vacations: Making Memories with Loved Ones",
    "Hidden Gems: Off-the-Beaten-Path Treasures to Discover",
    "Solo Travel: Embracing Independence and Self-Discovery",
  ],
};

export function isArticleCategory(
  category: string
): category is ArticleCategory {
  return articleCategories.includes(category as ArticleCategory);
}
