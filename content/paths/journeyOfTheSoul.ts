import { Lesson, LearningPath } from '../schema';

export const journeyOfTheSoulPath: LearningPath = {
  id: 'journey-of-the-soul',
  title: 'Fireside: Journey of the Soul',
  description:
    "An introduction to Bahá'u'lláh's teaching on the Worlds of God — the " +
    "multi-dimensional nature of reality and the soul's eternal journey " +
    'toward the Divine.',
  lessonIds: ['worlds-of-god-intro'],
};

export const worldsOfGodIntroLesson: Lesson = {
  id: 'worlds-of-god-intro',
  pathId: 'journey-of-the-soul',
  order: 1,
  title: 'The Worlds of God',
  subtitle: 'How vast is reality, really?',
  estimatedMinutes: 6,
  keyIdea:
    'This world is not the only world. Reality is far larger than what we ' +
    "can see, and the soul's purpose is to journey toward God through it.",
  steps: [
    {
      type: 'read',
      title: 'Read',
      quotation: {
        text:
          'As to thy question concerning the worlds of God. Know thou of a ' +
          'truth that the worlds of God are countless in their number, and ' +
          'infinite in their range. None can reckon or comprehend them ' +
          'except God, the All-Knowing, the All-Wise... Verily I say, the ' +
          'creation of God embraceth worlds besides this world, and ' +
          'creatures apart from these creatures. In each of these worlds ' +
          'He hath ordained things which none can search except Himself, ' +
          'the All-Searching, the All-Wise. Do thou meditate on that which ' +
          'We have revealed unto thee, that thou mayest discover the ' +
          'purpose of God, thy Lord, and the Lord of all worlds.',
        author: "Bahá'u'lláh",
        source: "Tablets of Bahá'u'lláh, p. 187",
      },
      prompt:
        'What does this passage suggest about how much of reality lies ' +
        'beyond what we can see or measure?',
    },
    {
      type: 'understand',
      title: 'Understand',
      body:
        'This physical world is only one small part of a far larger ' +
        "creation. Bahá'u'lláh says God's worlds are countless and " +
        '"none can reckon or comprehend them" except God. That is not a ' +
        'gap to be solved — it is the shape of reality. Our task is not ' +
        'to map the unseen worlds, but to meditate on what has already ' +
        'been revealed, so that we can "discover the purpose of God."\n\n' +
        'That reframes a common question. Instead of "Is this life all ' +
        'there is?", the Writings invite: "What is this life for, given ' +
        "that it isn't?\"",
    },
    {
      type: 'explore',
      title: 'Explore a related passage',
      quotation: {
        text:
          'And now concerning thy question regarding the soul of man and ' +
          'its survival after death. Know thou of a truth that the soul, ' +
          'after its separation from the body, will continue to progress ' +
          'until it attaineth the presence of God, in a state and ' +
          'condition which neither the revolution of ages and centuries, ' +
          'nor the changes and chances of this world, can alter.',
        author: "Bahá'u'lláh",
        source: 'Gleanings from the Writings of Bahá’u’lláh, no. LXXI',
      },
      choice: {
        question:
          'Read both passages together: one says God’s worlds are ' +
          'countless; the other says the soul keeps progressing through ' +
          'them, without end, toward the presence of God. What does this ' +
          'suggest about a single human lifetime?',
        options: [
          "This life is the soul's entire story.",
          'This life is one early stage in an unending journey.',
          'Only the next world matters, not this one.',
          'Nothing here can be known, so it changes nothing.',
        ],
        correctOption: 'This life is one early stage in an unending journey.',
      },
    },
    {
      type: 'reflect',
      title: 'Reflect',
      prompt:
        "Think of something you're afraid is running out — time, a chance " +
        "to change, a relationship, an opportunity. If the soul's journey " +
        'continues long after this life, does that fear change size? ' +
        'Write a few honest sentences.',
    },
    {
      type: 'discuss',
      title: 'Discuss',
      prompt:
        'If you’re studying this with others: Bahá’u’lláh says ' +
        '"none can reckon or comprehend" the other worlds of God except ' +
        'Him. Does that not-knowing unsettle you, or free you? Why?',
    },
    {
      type: 'practice',
      title: 'Live It',
      body:
        "Try this today: when you feel rushed, or like you're running " +
        'out of time to become who you want to be, pause and remember — ' +
        'this life is a beginning, not the whole story. Ask yourself: ' +
        '"What is one true thing about myself I want to keep building ' +
        'today, regardless of how long it takes?"',
    },
    {
      type: 'remember',
      title: 'Remember',
      blankedQuotation: {
        textWithBlanks:
          'Know thou of a truth that the worlds of God are ______ in ' +
          'their number, and ______ in their range.',
        answers: ['countless', 'infinite'],
      },
    },
  ],
};

// What's next in this path (not yet written):
// - Lesson 2 — The World of Háhút (the Unknowable Essence)
// - Lesson 3 — The World of Láhút (the Primal Will / the Manifestations)
// - Lesson 4 — The World of Jabarút (the Manifestations' distinct missions)
// - Lesson 5 — The Worlds of Malakút & Násút (the soul and the physical world)
// - Lesson 6 — The Soul's Seven Stages (commanding → perfect soul)
// - A later lesson can use the Lua Getsinger pilgrimage story as historical
//   context for a lesson on "return" vs. reincarnation.
