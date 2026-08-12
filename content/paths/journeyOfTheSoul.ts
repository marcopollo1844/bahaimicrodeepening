import { Lesson, LearningPath } from '../schema';

export const journeyOfTheSoulPath: LearningPath = {
  id: 'journey-of-the-soul',
  categoryId: 'god-and-soul',
  title: 'Fireside: Journey of the Soul',
  description:
    "An introduction to Bahá'u'lláh's teaching on the Worlds of God — the " +
    "multi-dimensional nature of reality and the soul's eternal journey " +
    'toward the Divine.',
  lessonIds: [
    'worlds-of-god-intro',
    'hahut-quick',
    'hahut-explore',
    'hahut-deep-dive',
  ],
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
    {
      type: 'explain',
      title: 'Explain It',
      prompt:
        "You've got 30 seconds. How would you explain this idea to a " +
        'friend?',
      modelAnswer:
        "Bahá'u'lláh teaches that this physical world is just one of " +
        'countless worlds God has created — so many that only God can ' +
        "fully grasp them. Our life here isn't the whole story; it's " +
        'the beginning of a journey the soul keeps making toward God, ' +
        'long after this life ends.',
      citation: {
        author: "Bahá'u'lláh",
        source: "Tablets of Bahá'u'lláh, p. 187",
      },
    },
    {
      type: 'discuss',
      title: 'Discuss (Optional)',
      prompt:
        'If you’re studying this with others: Bahá’u’lláh says ' +
        '"none can reckon or comprehend" the other worlds of God except ' +
        'Him. Does that not-knowing unsettle you, or free you? Why?',
    },
  ],
};

const hahutReadStep: Lesson['steps'][number] = {
  type: 'read',
  title: 'Read',
  quotation: {
    text:
      'To every discerning and illumined heart it is evident that God, ' +
      'the unknowable Essence, the divine Being, is immensely exalted ' +
      'beyond every human attribute, such as corporeal existence, ' +
      'ascent and descent, egress and regress. Far be it from His ' +
      'glory that human tongue should adequately recount His praise, ' +
      'or that human heart comprehend His fathomless mystery. No tie ' +
      'of direct intercourse can possibly bind Him to His creatures. ' +
      'He standeth exalted beyond and above all separation and ' +
      'union, all proximity and remoteness. Gracious God! How could ' +
      'there be conceived any existing relationship or possible ' +
      'connection between His Word and they that are created of it? ' +
      'All the Prophets of God and their chosen Ones, all the ' +
      'divines, the sages, and the wise of every generation, ' +
      'unanimously recognize their inability to attain unto the ' +
      'comprehension of that Quintessence of all truth, and confess ' +
      'their incapacity to grasp Him, Who is the inmost Reality of ' +
      'all things.',
    author: "Bahá'u'lláh",
    source: 'Kitáb-i-Íqán, pp. 98–99',
  },
  prompt:
    'Read this slowly. What is Bahá’u’lláh saying is impossible for ' +
    'human beings — and even for the Prophets — to do?',
};

const hahutUnderstandStepQuick: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    'This passage points to what Bahá’ís call Háhút — the realm of ' +
    "God's own unknowable Essence. It is described here as being " +
    'beyond every category we have: beyond existence and ' +
    'non-existence, beyond nearness and distance, beyond union and ' +
    'separation. Notice the striking claim: not only ordinary ' +
    'people, but "all the Prophets of God" and "the divines, the ' +
    'sages, and the wise of every generation" all recognize their ' +
    'own inability to comprehend it.\n\n' +
    "This isn't a puzzle waiting to be solved by someone smarter or " +
    'more devoted. It is a boundary built into the nature of reality ' +
    "itself — God's Essence is not a hidden object we might " +
    'eventually find, but something categorically beyond finding.',
};

const hahutUnderstandStepExpanded: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    hahutUnderstandStepQuick.body +
    "\n\nNotice, too, how the passage works: it doesn't try to say what " +
    "God's Essence IS. It says what it is NOT — not bound by " +
    'corporeal existence, not subject to ascent or descent, not ' +
    'united with creation, not separate from it either. This way of ' +
    "speaking is sometimes called an apophatic, or 'negative,' " +
    'approach: instead of risking a definition that would shrink God ' +
    'down to something human-sized, it protects the mystery by ' +
    'ruling out every category that would try to contain it.',
};

const hahutCrossReferenceStep: Lesson['steps'][number] = {
  type: 'read',
  title: 'Cross-Reference: Lesson 1',
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
    'You read this in Lesson 1. Now that you know the name Háhút, how ' +
    'does "none can reckon or comprehend them except God" describe ' +
    'exactly the realm you just read about?',
};

const hahutExploreStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'An image for the unimaginable',
  body:
    "'Abdu'l-Bahá offered an image for this: imagine a single dot of " +
    'ink on a blank page. Within that one dot, every letter and ' +
    'every word that could ever be written already exists — in ' +
    "potential. But look at the dot itself, and you can't see any " +
    "of those letters. They aren't yet differentiated from one " +
    'another, or from the dot.\n\n' +
    "Bahá'ís understand God's names and attributes (Knowing, " +
    'Loving, Just, Merciful, and so on) the same way in relation to ' +
    'Háhút: all of them are contained in the divine Essence, but at ' +
    'that level they are not yet distinguished from one another — ' +
    'they are still just the dot.',
  choice: {
    question:
      'Given both the Kitáb-i-Íqán passage and this image, what best ' +
      'describes Háhút?',
    options: [
      'A place far away that we might one day reach with enough ' +
        'spiritual effort.',
      "A level of reality so different in kind that 'reaching' it " +
        "isn't the right idea at all.",
      'A metaphor with no real meaning, just poetic language.',
      'The same as the physical world, just harder to see.',
    ],
    correctOption:
      "A level of reality so different in kind that 'reaching' it " +
      "isn't the right idea at all.",
  },
};

const hahutGraciousGodStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'Why "Gracious God!"?',
  body:
    'Read the middle of the passage again: "Gracious God! How could ' +
    'there be conceived any existing relationship or possible ' +
    'connection between His Word and they that are created of it?" ' +
    'This exclamation marks a turning point. Bahá’u’lláh has just ' +
    "finished describing everything God's Essence is NOT — and then " +
    'marvels at a further mystery: if the Essence has "no tie of ' +
    'direct intercourse" with creation, how could there be any ' +
    'connection at all between God\'s Word and the things that Word ' +
    'brings into being?\n\n' +
    "This isn't a dead end. It's a doorway. The question of how any " +
    'connection is possible between the unreachable Essence and ' +
    'created reality is exactly the question the next lesson, on the ' +
    'World of Láhút, begins to answer.',
  choice: {
    question:
      'Given that the Essence itself has "no tie of direct ' +
      'intercourse" with creation, what do you think makes any ' +
      'relationship, revelation, or connection with creation possible ' +
      'at all?',
    options: [
      'Human reason, if it becomes refined enough.',
      "A separate reality or station through which God's will can " +
        'reach creation.',
      'Nothing — there truly is no connection, full stop.',
      'It happens by pure chance.',
    ],
    correctOption:
      "A separate reality or station through which God's will can " +
      'reach creation.',
  },
};

const hahutReflectStepQuick: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    'Most of the time we assume that with enough study, technology, ' +
    'or spiritual practice, any mystery can eventually be solved or ' +
    "reached. Sit with the idea that at least one thing — God's own " +
    'Essence — is permanently, by design, beyond reach for every ' +
    'created being, including the Prophets. What does it feel like ' +
    "to accept a limit that isn't a failure, just the shape of " +
    'reality? Write a few honest sentences.',
};

const hahutReflectStepExpanded: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    hahutReflectStepQuick.prompt +
    "\n\nA second question, if you have time: is there a difference " +
    "between 'I don't understand this yet' and 'this was never mine " +
    "to fully understand'? Which one usually describes how you " +
    'relate to the biggest questions in your own life?',
};

const hahutDiscussStepQuick: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    'If you’re studying this with others: Bahá’u’lláh says even the ' +
    'Prophets "confess their incapacity to grasp Him, Who is the ' +
    'inmost Reality of all things." Why might it matter that the ' +
    'Prophets themselves acknowledge this limit, rather than ' +
    'claiming special access to it?',
};

const hahutDiscussStepExpanded: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    hahutDiscussStepQuick.prompt +
    '\n\nA second question for the group: if the Prophets themselves ' +
    'have no direct access to God’s Essence, what do you think they ' +
    'DO have access to, that allows them to reveal anything about God ' +
    'at all?',
};

const hahutContemplationStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'A Short Contemplation',
  body:
    'Before moving on, take two or three unhurried minutes.\n\n' +
    'Read this phrase slowly, once out loud if you can: "He standeth ' +
    'exalted beyond and above all separation and union, all ' +
    'proximity and remoteness."\n\n' +
    'Breathe. Let go of the urge to fully picture or define what that ' +
    'means. Simply hold the phrase, the way you might hold a stone ' +
    "whose weight you can feel but whose shape you don't need to " +
    'fully see.\n\n' +
    "When you're ready, continue.",
};

const hahutLiveItStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'Live It',
  body:
    'Try this today: notice when you catch yourself assuming a ' +
    'question always has a findable answer — about God, about ' +
    'another person, about yourself. Practice saying, honestly, ' +
    '"Some things aren\'t mine to fully grasp," without treating ' +
    'that as defeat. Let it be rest instead of frustration.',
};

const hahutRememberStep: Lesson['steps'][number] = {
  type: 'remember',
  title: 'Remember',
  blankedQuotation: {
    textWithBlanks:
      'God, the unknowable Essence, the divine Being, is immensely ' +
      'exalted beyond every ______ attribute... All the Prophets of ' +
      'God... unanimously recognize their ______ to attain unto the ' +
      'comprehension of that Quintessence of all truth.',
    answers: ['human', 'inability'],
  },
};

const hahutExplainStep: Lesson['steps'][number] = {
  type: 'explain',
  title: 'Explain It',
  prompt:
    "You've got 30 seconds. How would you explain this idea to a friend?",
  modelAnswer:
    "Bahá'u'lláh teaches that God's own Essence is so far beyond us " +
    "that even the Prophets say they can't fully grasp it. That's " +
    "not a gap waiting to be closed — it's simply how vast God is. " +
    "'Abdu'l-Bahá compared it to a drop of ink that holds every word " +
    'ever written, though you\'d never see a single letter just by ' +
    'looking at the drop.',
  citation: {
    author: "Bahá'u'lláh",
    source: 'Kitáb-i-Íqán, pp. 98–99',
  },
};

const hahutKeyIdea =
  "God's own Essence is forever unknowable — not because we haven't " +
  'searched hard enough, but because it lies utterly beyond every ' +
  'category human minds, or even the Prophets, can reach.';

export const hahutQuickLesson: Lesson = {
  id: 'hahut-quick',
  pathId: 'journey-of-the-soul',
  order: 2,
  title: 'The World of Háhút',
  subtitle: 'The realm beyond all reach',
  estimatedMinutes: 6,
  depthLabel: 'Quick',
  keyIdea: hahutKeyIdea,
  steps: [
    hahutReadStep,
    hahutUnderstandStepQuick,
    hahutExploreStep,
    hahutReflectStepQuick,
    hahutLiveItStep,
    hahutRememberStep,
    hahutExplainStep,
    hahutDiscussStepQuick,
  ],
};

export const hahutExploreLesson: Lesson = {
  id: 'hahut-explore',
  pathId: 'journey-of-the-soul',
  order: 3,
  title: 'The World of Háhút',
  subtitle: 'The realm beyond all reach — with cross-references',
  estimatedMinutes: 10,
  depthLabel: 'Explore',
  keyIdea: hahutKeyIdea,
  steps: [
    hahutReadStep,
    hahutUnderstandStepExpanded,
    hahutCrossReferenceStep,
    hahutExploreStep,
    hahutReflectStepExpanded,
    hahutLiveItStep,
    hahutRememberStep,
    hahutExplainStep,
    hahutDiscussStepExpanded,
  ],
};

export const hahutDeepDiveLesson: Lesson = {
  id: 'hahut-deep-dive',
  pathId: 'journey-of-the-soul',
  order: 4,
  title: 'The World of Háhút',
  subtitle: 'The realm beyond all reach — full study',
  estimatedMinutes: 15,
  depthLabel: 'Deep Dive',
  keyIdea: hahutKeyIdea,
  steps: [
    hahutReadStep,
    hahutUnderstandStepExpanded,
    hahutCrossReferenceStep,
    hahutExploreStep,
    hahutGraciousGodStep,
    hahutReflectStepExpanded,
    hahutContemplationStep,
    hahutLiveItStep,
    hahutRememberStep,
    hahutExplainStep,
    hahutDiscussStepExpanded,
  ],
};

// What's next in this path (not yet written):
// - Lesson 3 — The World of Láhút (the Primal Will / the Manifestations)
// - Lesson 4 — The World of Jabarút (the Manifestations' distinct missions)
// - Lesson 5 — The Worlds of Malakút & Násút (the soul and the physical world)
// - Lesson 6 — The Soul's Seven Stages (commanding → perfect soul)
// - A later lesson can use the Lua Getsinger pilgrimage story as historical
//   context for a lesson on "return" vs. reincarnation.
