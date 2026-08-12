export interface Category {
  id: string;
  title: string;
  emoji: string;
}

// The full taxonomy from VISION.md principle 5. Not every category has a
// path yet — the home screen only shows categories with at least one path
// (see getCategoriesWithPaths in content/index.ts), so this list can grow
// ahead of the content without breaking anything.
export const categories: Category[] = [
  { id: 'big-questions', title: 'Big Questions', emoji: '🧠' },
  { id: 'humanity-unity', title: 'Humanity & Unity', emoji: '🌎' },
  { id: 'god-and-soul', title: 'God & the Soul', emoji: '✨' },
  { id: 'love-relationships', title: 'Love & Relationships', emoji: '❤️' },
  { id: 'justice-society', title: 'Justice & Society', emoji: '⚖️' },
  { id: 'spiritual-life', title: 'Spiritual Life', emoji: '🕊️' },
  { id: 'stories', title: 'Stories', emoji: '👤' },
  { id: 'community', title: 'Community', emoji: '🤝' },
  { id: 'society', title: 'Society', emoji: '🌱' },
];
