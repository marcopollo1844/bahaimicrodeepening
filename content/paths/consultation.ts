import { Lesson, LearningPath } from '../schema';

export const consultationPath: LearningPath = {
  id: 'consultation',
  title: 'Fireside: Consultation',
  description:
    "An introduction to Bahá'u'lláh's teaching on consultation — the " +
    'spiritual and practical method Bahá’ís use to make decisions ' +
    'together, discover truth, and build unity through structured, ' +
    'loving dialogue.',
  lessonIds: [
    'search-for-truth-quick',
    'search-for-truth-explore',
    'search-for-truth-deep-dive',
    'unity-cooperation-quick',
    'unity-cooperation-explore',
    'unity-cooperation-deep-dive',
    'detachment-quick',
    'detachment-explore',
    'detachment-deep-dive',
    'equality-of-voices-quick',
    'equality-of-voices-explore',
    'equality-of-voices-deep-dive',
    'courtesy-respect-quick',
    'courtesy-respect-explore',
    'courtesy-respect-deep-dive',
    'collective-decision-quick',
    'collective-decision-explore',
    'collective-decision-deep-dive',
  ],
};

// ---------------------------------------------------------------------------
// 1. Search for Truth
// ---------------------------------------------------------------------------

const truthReadStep: Lesson['steps'][number] = {
  type: 'read',
  title: 'Read',
  quotation: {
    text:
      'The heaven of divine wisdom is illumined with the two luminaries ' +
      'of consultation and compassion. Take ye counsel together in all ' +
      'matters, inasmuch as consultation is the lamp of guidance which ' +
      'leadeth the way, and is the bestower of understanding.',
    author: "Bahá'u'lláh",
    source: "Tablets of Bahá'u'lláh Revealed after the Kitáb-i-Aqdas, p. 168",
  },
  prompt:
    'What does Bahá’u’lláh compare consultation to, and what does that ' +
    'comparison suggest about what consultation is actually for?',
};

const truthUnderstandStepQuick: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    'This passage names consultation one of the "two luminaries" — ' +
    'alongside compassion — that illumine "the heaven of divine ' +
    'wisdom." Bahá’u’lláh calls it "the lamp of guidance which leadeth ' +
    'the way, and is the bestower of understanding." Notice what ' +
    "consultation is NOT described as here: a voting procedure, a way " +
    "to win an argument, or a formality to get through before someone " +
    "in charge decides anyway. It's described as a light-giving " +
    "process — something that reveals understanding that wasn't " +
    'available before anyone spoke.\n\n' +
    'That reframes the goal of any meeting, family decision, or ' +
    "community discussion: not \"whose idea wins,\" but \"what can this " +
    'light reveal that none of us could see alone?"',
};

const truthUnderstandStepExpanded: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    truthUnderstandStepQuick.body +
    '\n\nCompare that to how most decision-making actually works: ' +
    'people arrive with a position already formed, defend it, and ' +
    "treat consultation as a contest to be won. Bahá'u'lláh's image " +
    "reverses that entirely — the \"lamp\" only lights the way if " +
    'people bring a question, not a conclusion, into the room.',
};

const truthSecondPassageStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'What Consultation Is Not',
  quotation: {
    text:
      'In this Cause consultation is of vital importance, but ' +
      'spiritual conference and not the mere voicing of personal views ' +
      'is intended. In France I was present at a session of the ' +
      'senate, but the experience was not impressive. Parliamentary ' +
      'procedure should have for its object the attainment of the ' +
      'light of truth upon questions presented and not furnish a ' +
      'battleground for opposition and self-opinion. Antagonism and ' +
      'contradiction are unfortunate and always destructive to truth. ' +
      'In the parliamentary meeting mentioned, altercation and useless ' +
      'quibbling were frequent; the result, mostly confusion and ' +
      'turmoil; even in one instance a physical encounter took place ' +
      'between two members. It was not consultation but comedy.',
    author: "'Abdu'l-Bahá",
    source: 'The Promulgation of Universal Peace, pp. 72–73',
  },
  choice: {
    question:
      'Comparing this story to the "lamp of guidance" passage, what’s ' +
      'the real difference between consultation and ordinary debate?',
    options: [
      "There's no difference — both are just people arguing until one " +
        'side wins.',
      'Debate aims to win; consultation aims to find truth neither ' +
        'side had alone.',
      'Consultation just means being more polite while still trying ' +
        'to win.',
      "The French Senate's approach is what Bahá'ís should imitate.",
    ],
    correctOption:
      'Debate aims to win; consultation aims to find truth neither ' +
      'side had alone.',
  },
};

const truthReflectStepQuick: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    'Think of a recent disagreement — at work, at home, anywhere. Were ' +
    'you trying to be right, or trying to find out what was true, even ' +
    'if that meant changing your mind? Be honest with yourself; most of ' +
    'us default to the first without noticing.',
};

const truthReflectStepExpanded: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    truthReflectStepQuick.prompt +
    '\n\nA second question, if you have time: what would need to ' +
    'change about how you enter disagreements for them to feel more ' +
    "like the first (Bahá'u'lláh's lamp) than the second ('Abdu'l-" +
    "Bahá's comedy)?",
};

const truthDiscussStepQuick: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    'If you’re studying this with others: ’Abdu’l-Bahá witnessed a ' +
    'real government body fail at consultation and called it ' +
    '"comedy." What’s an example from your own experience — a ' +
    'meeting, a family discussion — that felt more like debate than ' +
    'consultation? What made the difference?',
};

const truthDiscussStepExpanded: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    truthDiscussStepQuick.prompt +
    '\n\nA second question for the group: is it possible to structure ' +
    'a conversation (rules, roles, format) so it’s more likely to ' +
    'become real consultation rather than debate? What would that ' +
    'look like?',
};

const truthLiveItStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'Live It',
  body:
    'Try this today: in your next disagreement, however small, pause ' +
    'before responding and ask yourself, "Am I trying to win, or ' +
    'trying to find out what’s true?" Just noticing the difference is ' +
    'the first step.',
};

const truthRememberStep: Lesson['steps'][number] = {
  type: 'remember',
  title: 'Remember',
  blankedQuotation: {
    textWithBlanks:
      'The heaven of divine wisdom is illumined with the two ' +
      'luminaries of consultation and ______. Take ye counsel ' +
      'together in all matters, inasmuch as consultation is the ' +
      '______ of guidance which leadeth the way.',
    answers: ['compassion', 'lamp'],
  },
};

const truthExplainStep: Lesson['steps'][number] = {
  type: 'explain',
  title: 'Explain It',
  prompt:
    "You've got 30 seconds. How would you explain this idea to a friend?",
  modelAnswer:
    "Bahá'u'lláh calls consultation one of the \"two luminaries\" that " +
    'light up divine wisdom — literally "the lamp of guidance." It’s ' +
    'not meant to be a contest where the loudest or most convincing ' +
    'person wins; it’s meant to reveal truth that nobody in the room ' +
    'could see alone. ’Abdu’l-Bahá even described watching a real ' +
    'parliament fail at this — he called it "not consultation but ' +
    'comedy" because everyone was just defending their own position.',
  citation: {
    author: "Bahá'u'lláh",
    source: "Tablets of Bahá'u'lláh Revealed after the Kitáb-i-Aqdas, p. 168",
  },
};

const truthExtraExploreStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'A Cause of Awakening',
  quotation: {
    text:
      'In all things it is necessary to consult. This matter should ' +
      'be forcibly stressed by thee, so that consultation may be ' +
      'observed by all. The intent of what hath been revealed from ' +
      'the Pen of the Most High is that consultation may be fully ' +
      'carried out among the friends, inasmuch as it is and will ' +
      'always be a cause of awareness and of awakening and a source ' +
      'of good and well-being.',
    author: "Bahá'u'lláh",
    source: 'Consultation, p. 93',
  },
  body:
    "Bahá'u'lláh doesn't limit this instruction to formal meetings or " +
    'institutions — He says "in all things it is necessary to ' +
    'consult." And He gives a reason that has nothing to do with ' +
    'efficiency or getting the "right" answer faster: consultation ' +
    'itself, regardless of outcome, is "a cause of awareness and of ' +
    'awakening." The process changes the people doing it, not just ' +
    'the decision they reach.',
  choice: {
    question:
      'Given that consultation is valuable as "a cause of awareness ' +
      'and of awakening" regardless of the specific outcome, what does ' +
      'that suggest about skipping consultation even when you’re ' +
      'confident you already know the right answer?',
    options: [
      'If you already know the answer, consultation is a waste of time.',
      'Even a confident answer benefits from the awakening ' +
        'consultation itself produces.',
      "Consultation is only for situations where nobody knows the answer.",
      "This only applies to Bahá'í institutions, not personal decisions.",
    ],
    correctOption:
      'Even a confident answer benefits from the awakening ' +
      'consultation itself produces.',
  },
};

const truthContemplationStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'A Short Contemplation',
  body:
    'Before moving on, take two or three unhurried minutes.\n\n' +
    'Read this phrase slowly, once out loud if you can: "consultation ' +
    'is the lamp of guidance which leadeth the way, and is the ' +
    'bestower of understanding."\n\n' +
    "Think of one decision, big or small, that's in front of you " +
    'right now. Notice: are you carrying it alone, hoping to figure it ' +
    'out by yourself? What would it look like to bring it into the ' +
    'light instead?\n\n' +
    "When you're ready, continue.",
};

const truthKeyIdea =
  'Consultation is a light-giving process, not a contest — its goal ' +
  'is to reveal understanding that nobody in the room had alone.';

export const searchForTruthQuickLesson: Lesson = {
  id: 'search-for-truth-quick',
  pathId: 'consultation',
  order: 1,
  title: 'Search for Truth',
  subtitle: 'The lamp that reveals what neither side saw alone',
  estimatedMinutes: 6,
  depthLabel: 'Quick',
  keyIdea: truthKeyIdea,
  steps: [
    truthReadStep,
    truthUnderstandStepQuick,
    truthSecondPassageStep,
    truthReflectStepQuick,
    truthLiveItStep,
    truthRememberStep,
    truthExplainStep,
    truthDiscussStepQuick,
  ],
};

export const searchForTruthExploreLesson: Lesson = {
  id: 'search-for-truth-explore',
  pathId: 'consultation',
  order: 2,
  title: 'Search for Truth',
  subtitle: 'The lamp that reveals what neither side saw alone — with a related passage',
  estimatedMinutes: 10,
  depthLabel: 'Explore',
  keyIdea: truthKeyIdea,
  steps: [
    truthReadStep,
    truthUnderstandStepExpanded,
    truthSecondPassageStep,
    truthReflectStepExpanded,
    truthLiveItStep,
    truthRememberStep,
    truthExplainStep,
    truthDiscussStepExpanded,
  ],
};

export const searchForTruthDeepDiveLesson: Lesson = {
  id: 'search-for-truth-deep-dive',
  pathId: 'consultation',
  order: 3,
  title: 'Search for Truth',
  subtitle: 'The lamp that reveals what neither side saw alone — full study',
  estimatedMinutes: 15,
  depthLabel: 'Deep Dive',
  keyIdea: truthKeyIdea,
  steps: [
    truthReadStep,
    truthUnderstandStepExpanded,
    truthSecondPassageStep,
    truthExtraExploreStep,
    truthReflectStepExpanded,
    truthContemplationStep,
    truthLiveItStep,
    truthRememberStep,
    truthExplainStep,
    truthDiscussStepExpanded,
  ],
};

// ---------------------------------------------------------------------------
// 2. Unity and Cooperation
// ---------------------------------------------------------------------------

const unityReadStep: Lesson['steps'][number] = {
  type: 'read',
  title: 'Read',
  quotation: {
    text:
      'The members thereof must take counsel together in such wise ' +
      'that no occasion for ill-feeling or discord may arise. This ' +
      'can be attained when every member expresseth with absolute ' +
      'freedom his own opinion and setteth forth his argument. Should ' +
      'any one oppose, he must on no account feel hurt for not until ' +
      'matters are fully discussed can the right way be revealed. The ' +
      'shining spark of truth cometh forth only after the clash of ' +
      'differing opinions. If after discussion a decision be carried ' +
      'unanimously, well and good; but if, the Lord forbid, ' +
      'differences of opinion should arise, a majority of voices must ' +
      'prevail.',
    author: "'Abdu'l-Bahá",
    source:
      'cited in a letter dated 5 March 1922 from Shoghi Effendi to ' +
      'the Bahá’ís of the United States and Canada',
  },
  prompt:
    'According to this passage, where does "the shining spark of ' +
    'truth" actually come from? Is that where you’d expect?',
};

const unityUnderstandStepQuick: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    'This is one of the most quoted passages on consultation, and it ' +
    'contains what sounds like a contradiction at first: members ' +
    'should speak "with absolute freedom," disagreement is expected ' +
    'and even necessary — "the shining spark of truth cometh forth ' +
    'only after the clash of differing opinions" — and yet nobody ' +
    'should "feel hurt" when opposed. Unity here doesn’t mean everyone ' +
    'already agreeing. It means everyone committed to the same goal ' +
    '(discovering truth together) even while genuinely disagreeing ' +
    'about the path to it.\n\n' +
    'And notice the fallback built into the passage itself: unanimity ' +
    'is the hope, but if differences remain after full discussion, "a ' +
    'majority of voices must prevail" — and once that happens, unity ' +
    'of action is expected even without unity of initial opinion.',
};

const unityUnderstandStepExpanded: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    unityUnderstandStepQuick.body +
    "\n\nThis matters because it's easy to mistake harmony for the " +
    "absence of conflict. Bahá'u'lláh's model is closer to the " +
    'opposite: real unity is strong enough to hold disagreement inside ' +
    'it without breaking. A group that avoids all friction to keep the ' +
    'peace isn’t more unified — it’s just avoiding the process that ' +
    'could reveal the "shining spark of truth" in the first place.',
};

const unitySecondPassageStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'Sparks, Not Silence',
  quotation: {
    text:
      "Through the clash of personal opinions, as 'Abdu'l-Bahá has " +
      'stated, the spark of truth is often ignited, and Divine ' +
      'guidance revealed. The friends should therefore not feel ' +
      'discouraged at the differences of opinion that may prevail ' +
      'among the members of an Assembly, for these, as experience has ' +
      "shown, and as the Master's words attest, fulfil a valuable " +
      'function in all Assembly deliberations… Patience and restraint, ' +
      'however, should at all times characterize the discussions and ' +
      'deliberations of the elected representatives of the local ' +
      'community, and no fruitless and hair-splitting discussions ' +
      'indulged in, under any circumstances.',
    author: 'From a letter written on behalf of Shoghi Effendi',
    source: '18 April 1939, to an individual believer',
  },
  choice: {
    question:
      'This letter says differences of opinion "fulfil a valuable ' +
      'function" — but also warns against "fruitless and ' +
      'hair-splitting discussions." What’s the real distinction it’s ' +
      'drawing?',
    options: [
      'All disagreement is good, no matter how it’s conducted.',
      'Disagreement is valuable when it’s patient and purposeful, not ' +
        'when it becomes nitpicking for its own sake.',
      'Disagreement should be avoided whenever possible.',
      'Only elected representatives are allowed to disagree.',
    ],
    correctOption:
      'Disagreement is valuable when it’s patient and purposeful, not ' +
      'when it becomes nitpicking for its own sake.',
  },
};

const unityReflectStepQuick: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    'Think of a group you’re part of — family, work, community. When ' +
    'disagreement comes up, does it usually feel unifying (like you’re ' +
    'working toward the same goal together) or divisive (like it’s ' +
    'splitting the group apart)? What tends to make the difference?',
};

const unityReflectStepExpanded: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    unityReflectStepQuick.prompt +
    '\n\nA second question: have you ever seen a group avoid a real ' +
    'disagreement just to "keep the peace," and later regret not ' +
    'having had that conversation? What was lost by skipping it?',
};

const unityDiscussStepQuick: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    'If you’re studying with others: has your group ever mistaken "no ' +
    'visible disagreement" for unity? What might have been lost by ' +
    'not letting the "clash of differing opinions" happen?',
};

const unityDiscussStepExpanded: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    unityDiscussStepQuick.prompt +
    '\n\nA second question: what would it take for disagreement in ' +
    'your group to feel safe enough that people actually voice it, ' +
    'instead of quietly going along?',
};

const unityLiveItStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'Live It',
  body:
    'Try this today: the next time you disagree with someone you’re ' +
    'working with, say out loud (or to yourself) — "We’re on the same ' +
    'side here, even though we see this differently." Notice whether ' +
    'that changes the tone of what you say next.',
};

const unityRememberStep: Lesson['steps'][number] = {
  type: 'remember',
  title: 'Remember',
  blankedQuotation: {
    textWithBlanks:
      'The shining spark of truth cometh forth only after the ______ ' +
      'of differing opinions. If after discussion a decision be ' +
      'carried unanimously, well and good; but if... a ______ of ' +
      'voices must prevail.',
    answers: ['clash', 'majority'],
  },
};

const unityExplainStep: Lesson['steps'][number] = {
  type: 'explain',
  title: 'Explain It',
  prompt:
    "You've got 30 seconds. How would you explain this idea to a friend?",
  modelAnswer:
    "'Abdu'l-Bahá teaches that real unity in consultation isn’t about " +
    'everyone agreeing from the start — it’s about everyone staying ' +
    'committed to finding truth together even while disagreeing. He ' +
    'says "the shining spark of truth cometh forth only after the ' +
    'clash of differing opinions," and if people still disagree after ' +
    'full discussion, the group follows the majority and moves ' +
    'forward united in action, even without unity of opinion.',
  citation: {
    author: "'Abdu'l-Bahá",
    source:
      'cited in a letter dated 5 March 1922 from Shoghi Effendi to ' +
      'the Bahá’ís of the United States and Canada',
  },
};

const unityExtraExploreStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'Disagreeing Without Undermining',
  quotation: {
    text:
      'Bahá’ís are not required to vote on an Assembly against their ' +
      'consciences. It is better if they submit to the majority view ' +
      'and make it unanimous. But they are not forced to. What they ' +
      'must do, however, is to abide by the majority decision, as ' +
      'this is what becomes effective. They must not go around ' +
      'undermining the Assembly by saying they disagreed with the ' +
      'majority. In other words, they must put the Cause first and ' +
      'not their own opinions. He (a Spiritual Assembly member) can ' +
      'ask the Assembly to reconsider a matter, but he has no right ' +
      'to force them or create inharmony because they won’t change. ' +
      'Unanimous votes are preferable, but certainly cannot be forced ' +
      'upon Assembly members by artificial methods such as are used ' +
      'by other societies.',
    author: 'From a letter written on behalf of Shoghi Effendi',
    source: 'to an individual believer, October 19, 1947',
  },
  choice: {
    question:
      'This passage draws a sharp line between two things a person ' +
      'can do after being outvoted: privately still disagreeing, ' +
      'versus publicly undermining the decision. Why might that ' +
      'distinction matter so much for a group’s ability to function?',
    options: [
      'It doesn’t matter — once outvoted, you must pretend to agree.',
      'Because a group can survive disagreement, but not people ' +
        'quietly working against decisions they lost.',
      'Because the majority is always right.',
      "Because voting itself is discouraged in Bahá'í consultation.",
    ],
    correctOption:
      'Because a group can survive disagreement, but not people ' +
      'quietly working against decisions they lost.',
  },
};

const unityContemplationStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'A Short Contemplation',
  body:
    'Before moving on, take two or three unhurried minutes.\n\n' +
    'Read this phrase slowly: "the shining spark of truth cometh ' +
    'forth only after the clash of differing opinions."\n\n' +
    "Think of a disagreement you're currently avoiding, even a small " +
    'one. What might be waiting on the other side of that "clash" ' +
    "that you can't see yet?\n\n" +
    "When you're ready, continue.",
};

const unityKeyIdea =
  'Real unity in consultation is strong enough to hold genuine ' +
  'disagreement inside it — it means shared commitment to finding ' +
  'truth together, not everyone already agreeing.';

export const unityCooperationQuickLesson: Lesson = {
  id: 'unity-cooperation-quick',
  pathId: 'consultation',
  order: 4,
  title: 'Unity and Cooperation',
  subtitle: 'Where does the spark of truth actually come from?',
  estimatedMinutes: 6,
  depthLabel: 'Quick',
  keyIdea: unityKeyIdea,
  steps: [
    unityReadStep,
    unityUnderstandStepQuick,
    unitySecondPassageStep,
    unityReflectStepQuick,
    unityLiveItStep,
    unityRememberStep,
    unityExplainStep,
    unityDiscussStepQuick,
  ],
};

export const unityCooperationExploreLesson: Lesson = {
  id: 'unity-cooperation-explore',
  pathId: 'consultation',
  order: 5,
  title: 'Unity and Cooperation',
  subtitle: 'Where does the spark of truth actually come from? — with a related passage',
  estimatedMinutes: 10,
  depthLabel: 'Explore',
  keyIdea: unityKeyIdea,
  steps: [
    unityReadStep,
    unityUnderstandStepExpanded,
    unitySecondPassageStep,
    unityReflectStepExpanded,
    unityLiveItStep,
    unityRememberStep,
    unityExplainStep,
    unityDiscussStepExpanded,
  ],
};

export const unityCooperationDeepDiveLesson: Lesson = {
  id: 'unity-cooperation-deep-dive',
  pathId: 'consultation',
  order: 6,
  title: 'Unity and Cooperation',
  subtitle: 'Where does the spark of truth actually come from? — full study',
  estimatedMinutes: 15,
  depthLabel: 'Deep Dive',
  keyIdea: unityKeyIdea,
  steps: [
    unityReadStep,
    unityUnderstandStepExpanded,
    unitySecondPassageStep,
    unityExtraExploreStep,
    unityReflectStepExpanded,
    unityContemplationStep,
    unityLiveItStep,
    unityRememberStep,
    unityExplainStep,
    unityDiscussStepExpanded,
  ],
};

// ---------------------------------------------------------------------------
// 3. Detachment from Personal Opinions
// ---------------------------------------------------------------------------

const detachReadStep: Lesson['steps'][number] = {
  type: 'read',
  title: 'Read',
  quotation: {
    text:
      'He who expresses an opinion should not voice it as correct and ' +
      'right but set it forth as a contribution to the consensus of ' +
      'opinion, for the light of reality becomes apparent when two ' +
      'opinions coincide. A spark is produced when flint and steel ' +
      'come together.',
    author: "'Abdu'l-Bahá",
    source: 'The Promulgation of Universal Peace, p. 72',
  },
  prompt:
    "'Abdu'l-Bahá compares an opinion to flint, and another opinion to " +
    'steel. What does that comparison suggest about what a single ' +
    'opinion can — and can’t — do on its own?',
};

const detachUnderstandStepQuick: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    "Flint alone doesn't produce a spark. Steel alone doesn't either. " +
    'It takes both, striking together, for light to appear. ’Abdu’l-' +
    'Bahá is describing what happens to an opinion the moment you ' +
    'speak it in consultation: it stops being yours to defend and ' +
    'becomes raw material for something neither you nor anyone else ' +
    'brought into the room alone.\n\n' +
    "That's a real shift from how most of us are trained to argue — " +
    'where the goal is to make your point survive contact with other ' +
    "people's points. Here, the goal is for your point to combine " +
    'with someone else’s and produce something better than either one.',
};

const detachUnderstandStepExpanded: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    detachUnderstandStepQuick.body +
    '\n\nThis is genuinely hard to do, because it asks you to care ' +
    'more about the outcome than about being right. ’Abdu’l-Bahá’s ' +
    'language is careful: not "be right," but "contribute." You’re ' +
    'free to state your view as clearly and honestly as you can — the ' +
    'detachment isn’t about holding back your opinion, it’s about not ' +
    'needing it to win once it’s out.',
};

const detachSecondPassageStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'A Chalice Full of Self',
  quotation: {
    text:
      'If five people meet together to seek for truth, they must ' +
      'begin by cutting themselves free from all their own special ' +
      'conditions and renouncing all preconceived ideas. In order to ' +
      'find truth we must give up our prejudices, our own small ' +
      'trivial notions; an open receptive mind is essential. If our ' +
      'chalice is full of self, there is no room in it for the water ' +
      'of life. The fact that we imagine ourselves to be right and ' +
      'everybody else wrong is the greatest of all obstacles in the ' +
      'path towards unity, and unity is necessary if we would reach ' +
      'truth, for truth is one.',
    author: "'Abdu'l-Bahá",
    source: 'Paris Talks, p. 136',
  },
  choice: {
    question:
      '’Abdu’l-Bahá says "if our chalice is full of self, there is no ' +
      'room in it for the water of life." What is the "water of life" ' +
      'standing in for here?',
    options: [
      'A literal drink offered during consultation.',
      'The truth or understanding that consultation is meant to ' +
        'reveal.',
      'A reward for whoever is proven right.',
      "Nothing specific — it's just decorative language.",
    ],
    correctOption:
      'The truth or understanding that consultation is meant to ' +
      'reveal.',
  },
};

const detachReflectStepQuick: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    'Think of the last time you held an opinion strongly. If someone ' +
    'had offered you real evidence you were wrong, would there have ' +
    'been "room in the chalice" to receive it — or was it already ' +
    'full? Be honest.',
};

const detachReflectStepExpanded: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    detachReflectStepQuick.prompt +
    '\n\nA second question: what’s one belief you currently hold that ' +
    'you’ve never actually let anyone challenge? What would it cost ' +
    'you to let it be tested?',
};

const detachDiscussStepQuick: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    'If you’re studying with others: ’Abdu’l-Bahá says the belief ' +
    'that "we are right and everybody else wrong" is "the greatest of ' +
    'all obstacles" to unity. Have you seen that play out — in a ' +
    'group, a family, even a whole community?',
};

const detachDiscussStepExpanded: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    detachDiscussStepQuick.prompt +
    '\n\nA second question: is there a difference between having ' +
    'confidence in your view and needing it to be declared the ' +
    'winner? How do you tell which one you’re doing?',
};

const detachLiveItStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'Live It',
  body:
    'Try this today: the next time you state an opinion in a ' +
    'discussion, add — out loud or silently — "and I could be wrong ' +
    'about this." Notice whether it changes how you listen to what ' +
    'comes next.',
};

const detachRememberStep: Lesson['steps'][number] = {
  type: 'remember',
  title: 'Remember',
  blankedQuotation: {
    textWithBlanks:
      'He who expresses an opinion should not voice it as correct and ' +
      'right but set it forth as a ______ to the consensus of ' +
      'opinion... A spark is produced when ______ and steel come ' +
      'together.',
    answers: ['contribution', 'flint'],
  },
};

const detachExplainStep: Lesson['steps'][number] = {
  type: 'explain',
  title: 'Explain It',
  prompt:
    "You've got 30 seconds. How would you explain this idea to a friend?",
  modelAnswer:
    "'Abdu'l-Bahá teaches that in real consultation, an opinion isn’t " +
    'something to defend — it’s raw material to contribute. He ' +
    'compares two opinions coming together to flint striking steel: ' +
    'neither produces a spark alone, but together they can. He also ' +
    'warns that a mind full of certainty ("a chalice full of self") ' +
    'has no room left to receive truth, even when it’s offered.',
  citation: {
    author: "'Abdu'l-Bahá",
    source: 'The Promulgation of Universal Peace, p. 72',
  },
};

const detachExtraExploreStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'The Cost of Insisting',
  quotation: {
    text:
      'They must in every matter search out the truth and not insist ' +
      'upon their own opinion, for stubbornness and persistence in ' +
      'one’s views will lead ultimately to discord and wrangling and ' +
      'the truth will remain hidden.... If this be so regarded, that ' +
      'assembly shall be of God, but otherwise it shall lead to ' +
      'coolness and alienation that proceed from the Evil One.',
    author: "'Abdu'l-Bahá",
    source:
      'cited in a letter dated 5 March 1922, from Shoghi Effendi',
  },
  choice: {
    question:
      'This passage says stubbornness doesn’t just slow down a ' +
      'decision — it makes "the truth remain hidden" entirely. What ' +
      'does that suggest about what’s actually at stake when someone ' +
      'refuses to let go of their position?',
    options: [
      'Nothing much — the group just takes longer to decide.',
      'The group can end up genuinely not finding the truth at all, ' +
        'not just delaying it.',
      'Only the stubborn person is harmed, not the group.',
      "This only applies to Bahá'í institutions.",
    ],
    correctOption:
      'The group can end up genuinely not finding the truth at all, ' +
      'not just delaying it.',
  },
};

const detachContemplationStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'A Short Contemplation',
  body:
    'Before moving on, take two or three unhurried minutes.\n\n' +
    'Read this phrase slowly: "if our chalice is full of self, there ' +
    'is no room in it for the water of life."\n\n' +
    "Picture an actual chalice, actually full — nothing more can be " +
    'poured in until something is emptied out. What’s one thing you ' +
    'might need to empty out of your own chalice this week?\n\n' +
    "When you're ready, continue.",
};

const detachKeyIdea =
  'An opinion offered in consultation is a contribution, not a ' +
  'position to defend — real detachment means caring more about the ' +
  'outcome than about being proven right.';

export const detachmentQuickLesson: Lesson = {
  id: 'detachment-quick',
  pathId: 'consultation',
  order: 7,
  title: 'Detachment from Personal Opinions',
  subtitle: 'Flint and steel, not flint versus steel',
  estimatedMinutes: 6,
  depthLabel: 'Quick',
  keyIdea: detachKeyIdea,
  steps: [
    detachReadStep,
    detachUnderstandStepQuick,
    detachSecondPassageStep,
    detachReflectStepQuick,
    detachLiveItStep,
    detachRememberStep,
    detachExplainStep,
    detachDiscussStepQuick,
  ],
};

export const detachmentExploreLesson: Lesson = {
  id: 'detachment-explore',
  pathId: 'consultation',
  order: 8,
  title: 'Detachment from Personal Opinions',
  subtitle: 'Flint and steel, not flint versus steel — with a related passage',
  estimatedMinutes: 10,
  depthLabel: 'Explore',
  keyIdea: detachKeyIdea,
  steps: [
    detachReadStep,
    detachUnderstandStepExpanded,
    detachSecondPassageStep,
    detachReflectStepExpanded,
    detachLiveItStep,
    detachRememberStep,
    detachExplainStep,
    detachDiscussStepExpanded,
  ],
};

export const detachmentDeepDiveLesson: Lesson = {
  id: 'detachment-deep-dive',
  pathId: 'consultation',
  order: 9,
  title: 'Detachment from Personal Opinions',
  subtitle: 'Flint and steel, not flint versus steel — full study',
  estimatedMinutes: 15,
  depthLabel: 'Deep Dive',
  keyIdea: detachKeyIdea,
  steps: [
    detachReadStep,
    detachUnderstandStepExpanded,
    detachSecondPassageStep,
    detachExtraExploreStep,
    detachReflectStepExpanded,
    detachContemplationStep,
    detachLiveItStep,
    detachRememberStep,
    detachExplainStep,
    detachDiscussStepExpanded,
  ],
};

// ---------------------------------------------------------------------------
// 4. Equality of Voices
// ---------------------------------------------------------------------------

const equalityReadStep: Lesson['steps'][number] = {
  type: 'read',
  title: 'Read',
  quotation: {
    text:
      'Not infrequently, nay oftentimes, the most lowly, untutored, ' +
      'and inexperienced among the friends will, by the sheer ' +
      'inspiring force of selfless and ardent devotion, contribute a ' +
      'distinct and memorable share to a highly involved discussion ' +
      'in any given assembly.',
    author: 'Shoghi Effendi',
    source: 'from a letter dated 29 January 1925 to a National Spiritual Assembly',
  },
  prompt:
    'According to this passage, what determines whether someone’s ' +
    'contribution to a discussion is valuable — their credentials and ' +
    'experience, or something else?',
};

const equalityUnderstandStepQuick: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    'Shoghi Effendi is describing something that runs against how ' +
    'most institutions actually work: seniority, credentials, and ' +
    'experience usually decide whose voice carries weight. Here, he ' +
    'says the opposite can be true — "the most lowly, untutored, and ' +
    'inexperienced" can contribute something "distinct and ' +
    'memorable" that more experienced people miss. And he says this ' +
    'happens "not infrequently, nay oftentimes" — not as a rare ' +
    'exception, but as something to expect.\n\n' +
    'What produces that contribution, in his telling, isn’t ' +
    'expertise. It’s "the sheer inspiring force of selfless and ' +
    'ardent devotion" — sincerity and care, not credentials.',
};

const equalityUnderstandStepExpanded: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    equalityUnderstandStepQuick.body +
    '\n\nThis has a real practical implication: if a group only ' +
    'listens closely to whoever has the most experience or the ' +
    'loudest confidence, it’s structurally likely to miss exactly the ' +
    'kind of contribution Shoghi Effendi is describing here. Equality ' +
    'of voice in consultation isn’t a nice sentiment — it’s treated as ' +
    'functionally necessary for the group to actually find what it’s ' +
    'looking for.',
};

const equalitySecondPassageStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'Not a Compromise, Not a Power Struggle',
  quotation: {
    text:
      'In this conception of the collective investigation of reality, ' +
      'truth is not a compromise between opposing interest groups. ' +
      'Nor does the desire to exercise power over one another animate ' +
      'participants in the consultative process. What they seek, ' +
      'rather, is the power of unified thought and action.',
    author: 'Universal House of Justice',
    source: 'Office of Social and Economic Development, 26 November 2012',
  },
  choice: {
    question:
      'This passage says consultation’s goal is neither "compromise ' +
      'between opposing interest groups" nor "power over one ' +
      'another." If it’s neither of those, what is it aiming for ' +
      'instead?',
    options: [
      'Whoever has the most power in the room gets their way.',
      'A middle-ground split that partially satisfies everyone.',
      'Genuinely shared, unified understanding that no single "side" ' +
        'had to begin with.',
      "There's no real goal — it's just talking for its own sake.",
    ],
    correctOption:
      'Genuinely shared, unified understanding that no single "side" ' +
      'had to begin with.',
  },
};

const equalityReflectStepQuick: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    'Think of a group you’re part of where some voices are heard more ' +
    'than others — maybe because of seniority, personality, or ' +
    'confidence. What might that group be missing by not weighting ' +
    'every voice equally?',
};

const equalityReflectStepExpanded: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    equalityReflectStepQuick.prompt +
    '\n\nA second question: is there a group you’re part of where you ' +
    'hold back your own voice, assuming you don’t have enough ' +
    'standing to contribute? What would it take for that to change?',
};

const equalityDiscussStepQuick: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    'If you’re studying with others: has someone with little formal ' +
    'standing ever said something in a group that ended up mattering ' +
    'more than anyone expected? What made space for that to happen?',
};

const equalityDiscussStepExpanded: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    equalityDiscussStepQuick.prompt +
    '\n\nA second question: what practical habits (in a meeting, a ' +
    'family, a classroom) actually make room for quieter or less ' +
    'experienced voices, versus just saying equality matters?',
};

const equalityLiveItStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'Live It',
  body:
    'Try this today: in your next group conversation, notice who ' +
    'hasn’t spoken yet, and make room — literally ask, "What do you ' +
    'think?" Notice what they say.',
};

const equalityRememberStep: Lesson['steps'][number] = {
  type: 'remember',
  title: 'Remember',
  blankedQuotation: {
    textWithBlanks:
      'Not infrequently, nay oftentimes, the most lowly, untutored, ' +
      'and inexperienced among the friends will, by the sheer ' +
      'inspiring force of selfless and ardent devotion, contribute a ' +
      'distinct and ______ share to a highly involved ______ in any ' +
      'given assembly.',
    answers: ['memorable', 'discussion'],
  },
};

const equalityExplainStep: Lesson['steps'][number] = {
  type: 'explain',
  title: 'Explain It',
  prompt:
    "You've got 30 seconds. How would you explain this idea to a friend?",
  modelAnswer:
    'Shoghi Effendi teaches that in Bahá’í consultation, the value of ' +
    'someone’s contribution doesn’t depend on their experience or ' +
    'credentials — it depends on sincerity and devotion. He says the ' +
    '"most lowly, untutored, and inexperienced" among a group will ' +
    'often contribute something "distinct and memorable" that more ' +
    'experienced people miss. Consultation is designed to seek ' +
    'unified understanding, not a compromise between competing ' +
    'factions or a contest for power.',
  citation: {
    author: 'Shoghi Effendi',
    source: 'letter dated 29 January 1925 to a National Spiritual Assembly',
  },
};

const equalityExtraExploreStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'Equality Isn’t Sameness of Role',
  quotation: {
    text:
      'Clearly, then, not every person within an organization will ' +
      'participate equally in making every decision. Responsibility ' +
      'needs to be appropriately structured and defined. For example, ' +
      'there will be many spaces in which individuals involved in a ' +
      'particular component of the work will have the opportunity to ' +
      'share insights, reach higher levels of understanding, and make ' +
      'certain decisions pertaining to their area of functioning.',
    author: 'Universal House of Justice',
    source: 'Office of Social and Economic Development, 26 November 2012',
  },
  choice: {
    question:
      'This passage seems to complicate the earlier idea of equal ' +
      'voices — it says "not every person... will participate ' +
      'equally in making every decision." How do you reconcile that ' +
      'with the idea that every voice matters?',
    options: [
      'It contradicts the earlier teaching, so one of them must be ' +
        'wrong.',
      'Equal worth of every voice doesn’t mean every person holds the ' +
        'same role or decision-making authority in every context.',
      'Only some people’s voices actually matter, despite what was ' +
        'said earlier.',
      'This only applies to large organizations, not small groups.',
    ],
    correctOption:
      'Equal worth of every voice doesn’t mean every person holds the ' +
      'same role or decision-making authority in every context.',
  },
};

const equalityContemplationStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'A Short Contemplation',
  body:
    'Before moving on, take two or three unhurried minutes.\n\n' +
    'Read this phrase slowly: "the most lowly, untutored, and ' +
    'inexperienced among the friends will... contribute a distinct ' +
    'and memorable share."\n\n' +
    'Think of the last group discussion you were part of. Whose ' +
    'voice carried the most weight, and why? Whose might have been ' +
    'quietly overlooked?\n\n' +
    "When you're ready, continue.",
};

const equalityKeyIdea =
  'In consultation, the value of a contribution comes from sincerity ' +
  'and devotion, not credentials — every voice is treated as ' +
  'genuinely necessary to finding the truth.';

export const equalityOfVoicesQuickLesson: Lesson = {
  id: 'equality-of-voices-quick',
  pathId: 'consultation',
  order: 10,
  title: 'Equality of Voices',
  subtitle: 'Whose voice actually gets heard?',
  estimatedMinutes: 6,
  depthLabel: 'Quick',
  keyIdea: equalityKeyIdea,
  steps: [
    equalityReadStep,
    equalityUnderstandStepQuick,
    equalitySecondPassageStep,
    equalityReflectStepQuick,
    equalityLiveItStep,
    equalityRememberStep,
    equalityExplainStep,
    equalityDiscussStepQuick,
  ],
};

export const equalityOfVoicesExploreLesson: Lesson = {
  id: 'equality-of-voices-explore',
  pathId: 'consultation',
  order: 11,
  title: 'Equality of Voices',
  subtitle: 'Whose voice actually gets heard? — with a related passage',
  estimatedMinutes: 10,
  depthLabel: 'Explore',
  keyIdea: equalityKeyIdea,
  steps: [
    equalityReadStep,
    equalityUnderstandStepExpanded,
    equalitySecondPassageStep,
    equalityReflectStepExpanded,
    equalityLiveItStep,
    equalityRememberStep,
    equalityExplainStep,
    equalityDiscussStepExpanded,
  ],
};

export const equalityOfVoicesDeepDiveLesson: Lesson = {
  id: 'equality-of-voices-deep-dive',
  pathId: 'consultation',
  order: 12,
  title: 'Equality of Voices',
  subtitle: 'Whose voice actually gets heard? — full study',
  estimatedMinutes: 15,
  depthLabel: 'Deep Dive',
  keyIdea: equalityKeyIdea,
  steps: [
    equalityReadStep,
    equalityUnderstandStepExpanded,
    equalitySecondPassageStep,
    equalityExtraExploreStep,
    equalityReflectStepExpanded,
    equalityContemplationStep,
    equalityLiveItStep,
    equalityRememberStep,
    equalityExplainStep,
    equalityDiscussStepExpanded,
  ],
};

// ---------------------------------------------------------------------------
// 5. Courtesy and Respect
// ---------------------------------------------------------------------------

const courtesyReadStep: Lesson['steps'][number] = {
  type: 'read',
  title: 'Read',
  quotation: {
    text:
      'In accordance with the divine teachings in this glorious ' +
      'dispensation we should not belittle anyone and call him ' +
      'ignorant, saying: "You know not, but I know". Rather, we ' +
      'should look upon others with respect, and when attempting to ' +
      'explain and demonstrate, we should speak as if we are ' +
      'investigating the truth, saying: "Here these things are ' +
      'before us. Let us investigate to determine where and in what ' +
      'form the truth can be found."',
    author: "'Abdu'l-Bahá",
    source: "Selections from the Writings of 'Abdu'l-Bahá, p. 30",
  },
  prompt:
    '’Abdu’l-Bahá contrasts two ways of speaking: "You know not, but ' +
    'I know" versus "Let us investigate... where the truth can be ' +
    'found." What’s the real difference between them?',
};

const courtesyUnderstandStepQuick: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    'The content of what’s being said could be identical in both ' +
    'phrases — the same facts, the same argument. What’s different is ' +
    'the posture. "You know not, but I know" puts the speaker above ' +
    'the listener and ends the search before it starts: the answer is ' +
    'already decided, and the other person’s role is just to accept ' +
    'it. "Let us investigate" puts both people on the same side of ' +
    'the question, still open, still looking together.\n\n' +
    '’Abdu’l-Bahá is specific that this isn’t just about tone — it’s ' +
    'about whether you’re treating the other person as someone to be ' +
    'corrected, or someone to search alongside.',
};

const courtesyUnderstandStepExpanded: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    courtesyUnderstandStepQuick.body +
    '\n\nThis is a hard habit to build, because being right often ' +
    'feels like it should come with the right to say so plainly. But ' +
    'notice: ’Abdu’l-Bahá doesn’t say hide your knowledge or pretend ' +
    'not to know things. He says frame it as shared investigation ' +
    'rather than as a lecture. You can be confident in what you’ve ' +
    'found and still speak as though the search is joint.',
};

const courtesySecondPassageStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'Knowing When to Pause',
  quotation: {
    text:
      'The honoured members of the Spiritual Assembly should exert ' +
      'their efforts so that no differences may occur, and if such ' +
      'differences do occur, they should not reach the point of ' +
      'causing conflict, hatred and antagonism, which lead to ' +
      'threats. When you notice that a stage has been reached when ' +
      'enmity and threats are about to occur, you should immediately ' +
      'postpone discussion of the subject, until wranglings, ' +
      'disputations, and loud talk vanish, and a propitious time is ' +
      'at hand.',
    author: "'Abdu'l-Bahá",
    source: 'Lights of Guidance, p. 178',
  },
  choice: {
    question:
      'This passage gives a concrete instruction for when a ' +
      'discussion is escalating toward real conflict. What is it?',
    options: [
      'Push through and finish the discussion no matter how heated it ' +
        'gets.',
      'Immediately postpone the discussion until calm returns, then ' +
        'take it up again later.',
      'Let the loudest voice settle the matter to end the conflict ' +
        'quickly.',
      'Bring in an outside authority to force a decision.',
    ],
    correctOption:
      'Immediately postpone the discussion until calm returns, then ' +
      'take it up again later.',
  },
};

const courtesyReflectStepQuick: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    'Think of a conversation that escalated past the point of being ' +
    'productive. Looking back, was there a moment where pausing — ' +
    'rather than pushing through — might have changed how it went?',
};

const courtesyReflectStepExpanded: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    courtesyReflectStepQuick.prompt +
    '\n\nA second question: what actually stops you, in the moment, ' +
    'from pausing a heated conversation even when you sense it’s ' +
    'needed? Pride? Momentum? Something else?',
};

const courtesyDiscussStepQuick: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    'If you’re studying with others: have you ever caught yourself ' +
    'thinking "you know not, but I know" in a real conversation, even ' +
    'if you didn’t say it aloud? What would it have looked like to ' +
    'reframe it as "let us investigate" instead?',
};

const courtesyDiscussStepExpanded: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    courtesyDiscussStepQuick.prompt +
    '\n\nA second question: what would it look like for your group to ' +
    'actually adopt "immediately postpone discussion" as a real ' +
    'practice, rather than just pushing through tension?',
};

const courtesyLiveItStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'Live It',
  body:
    'Try this today: if you feel a conversation heating up, say out ' +
    'loud, "Let’s come back to this later, when we can think more ' +
    'clearly" — and mean it. Notice how hard or easy that is to ' +
    'actually do.',
};

const courtesyRememberStep: Lesson['steps'][number] = {
  type: 'remember',
  title: 'Remember',
  blankedQuotation: {
    textWithBlanks:
      'we should not belittle anyone and call him ignorant, saying: ' +
      '"You know not, but I know". Rather, we should look upon others ' +
      'with ______, and... speak as if we are ______ the truth.',
    answers: ['respect', 'investigating'],
  },
};

const courtesyExplainStep: Lesson['steps'][number] = {
  type: 'explain',
  title: 'Explain It',
  prompt:
    "You've got 30 seconds. How would you explain this idea to a friend?",
  modelAnswer:
    "'Abdu'l-Bahá teaches that real consultation requires treating " +
    'others as partners in a shared search for truth, not as people ' +
    'to correct. Instead of saying "you know not, but I know," the ' +
    'right posture is "let us investigate to determine where and in ' +
    'what form the truth can be found." He also gives a practical ' +
    'rule: when a discussion starts heading toward real conflict, ' +
    'postpone it until calm returns, rather than pushing through.',
  citation: {
    author: "'Abdu'l-Bahá",
    source: "Selections from the Writings of 'Abdu'l-Bahá, p. 30",
  },
};

const courtesyExtraExploreStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'The Prime Requisites',
  quotation: {
    text:
      'The prime requisites for them that take counsel together are ' +
      'purity of motive, radiance of spirit, detachment from all else ' +
      'save God, attraction to His Divine Fragrances, humility and ' +
      'lowliness amongst His loved ones, patience and long-suffering ' +
      'in difficulties and servitude to His exalted Threshold. Should ' +
      'they be graciously aided to acquire these attributes, victory ' +
      'from the unseen Kingdom of Bahá shall be vouchsafed to them.',
    author: 'Shoghi Effendi',
    source: '5 March 1922, to the Bahá’ís of the United States and Canada',
  },
  choice: {
    question:
      'This passage lists several inner qualities as "prime ' +
      'requisites" for consultation — purity of motive, humility, ' +
      'patience, and others. What do they have in common?',
    options: [
      'They’re all about skill or technique in arguing well.',
      'They’re all inner character qualities, not tactics or ' +
        'procedures.',
      'They only apply to elected Assembly members.',
      'They’re a list of rules to memorize and recite before meetings.',
    ],
    correctOption:
      'They’re all inner character qualities, not tactics or ' +
      'procedures.',
  },
};

const courtesyContemplationStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'A Short Contemplation',
  body:
    'Before moving on, take two or three unhurried minutes.\n\n' +
    'Read this phrase slowly: "Let us investigate to determine where ' +
    'and in what form the truth can be found."\n\n' +
    'Think of someone you currently disagree with. Try, just for a ' +
    'moment, actually saying that sentence to them in your mind, ' +
    'instead of the argument you’d normally make.\n\n' +
    "When you're ready, continue.",
};

const courtesyKeyIdea =
  'Real consultation treats disagreement as a shared investigation, ' +
  'not a correction — "let us investigate" instead of "you know not, ' +
  'but I know."';

export const courtesyRespectQuickLesson: Lesson = {
  id: 'courtesy-respect-quick',
  pathId: 'consultation',
  order: 13,
  title: 'Courtesy and Respect',
  subtitle: 'Investigating together, not correcting each other',
  estimatedMinutes: 6,
  depthLabel: 'Quick',
  keyIdea: courtesyKeyIdea,
  steps: [
    courtesyReadStep,
    courtesyUnderstandStepQuick,
    courtesySecondPassageStep,
    courtesyReflectStepQuick,
    courtesyLiveItStep,
    courtesyRememberStep,
    courtesyExplainStep,
    courtesyDiscussStepQuick,
  ],
};

export const courtesyRespectExploreLesson: Lesson = {
  id: 'courtesy-respect-explore',
  pathId: 'consultation',
  order: 14,
  title: 'Courtesy and Respect',
  subtitle: 'Investigating together, not correcting each other — with a related passage',
  estimatedMinutes: 10,
  depthLabel: 'Explore',
  keyIdea: courtesyKeyIdea,
  steps: [
    courtesyReadStep,
    courtesyUnderstandStepExpanded,
    courtesySecondPassageStep,
    courtesyReflectStepExpanded,
    courtesyLiveItStep,
    courtesyRememberStep,
    courtesyExplainStep,
    courtesyDiscussStepExpanded,
  ],
};

export const courtesyRespectDeepDiveLesson: Lesson = {
  id: 'courtesy-respect-deep-dive',
  pathId: 'consultation',
  order: 15,
  title: 'Courtesy and Respect',
  subtitle: 'Investigating together, not correcting each other — full study',
  estimatedMinutes: 15,
  depthLabel: 'Deep Dive',
  keyIdea: courtesyKeyIdea,
  steps: [
    courtesyReadStep,
    courtesyUnderstandStepExpanded,
    courtesySecondPassageStep,
    courtesyExtraExploreStep,
    courtesyReflectStepExpanded,
    courtesyContemplationStep,
    courtesyLiveItStep,
    courtesyRememberStep,
    courtesyExplainStep,
    courtesyDiscussStepExpanded,
  ],
};

// ---------------------------------------------------------------------------
// 6. Collective Decision-Making
// ---------------------------------------------------------------------------

const collectiveReadStep: Lesson['steps'][number] = {
  type: 'read',
  title: 'Read',
  quotation: {
    text:
      'It is my hope that the friends and the maid-servants of ' +
      'America become united on all subjects and not disagree at ' +
      'all. If they agree upon a subject, even though it be wrong, it ' +
      'is better than to disagree and be in the right, for this ' +
      'difference will produce the demolition of the divine ' +
      'foundation. Though one of the parties may be in the right and ' +
      'they disagree that will be the cause of a thousand wrongs, but ' +
      'if they agree and both parties are in the wrong, as it is in ' +
      'unity the truth will be revealed and the wrong made right.',
    author: "'Abdu'l-Bahá",
    source: 'Bahá’í World Faith, p. 411',
  },
  prompt:
    'This is a startling claim: ’Abdu’l-Bahá says agreeing on ' +
    'something wrong is better than disagreeing while being right. ' +
    'Why would unity matter more than correctness here?',
};

const collectiveUnderstandStepQuick: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    'At first this sounds like it’s endorsing being wrong on purpose, ' +
    'which can’t be right. But look at the reasoning ’Abdu’l-Bahá ' +
    'gives: disagreement, even when one side is factually correct, ' +
    '"will produce the demolition of the divine foundation" — meaning ' +
    'it breaks the very thing (unity) that consultation exists to ' +
    'protect and build. Meanwhile, a wrong decision reached in ' +
    'genuine unity isn’t a dead end: "as it is in unity the truth ' +
    'will be revealed and the wrong made right" — the group can keep ' +
    'consulting and correct course, because it’s still unified enough ' +
    'to do so.\n\n' +
    'A correct decision that shatters unity may "win" the specific ' +
    'question and lose the group’s ability to ever consult well ' +
    'again.',
};

const collectiveUnderstandStepExpanded: Lesson['steps'][number] = {
  type: 'understand',
  title: 'Understand',
  body:
    collectiveUnderstandStepQuick.body +
    '\n\nThis doesn’t mean truth doesn’t matter — ’Abdu’l-Bahá clearly ' +
    'still wants the wrong made right eventually. It means unity is ' +
    'the precondition for a group being able to keep discovering ' +
    'truth over time. Break it chasing one right answer, and you may ' +
    'lose the capacity to find the next hundred.',
};

const collectiveSecondPassageStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'A Built-In Way Forward',
  quotation: {
    text:
      'If consultation among the first group of people assembled ' +
      'endeth in disagreement, new people should be added, after ' +
      'which persons to the number of the Greatest Name, or fewer or ' +
      'more, shall be chosen by lot. Whereupon the consultation shall ' +
      'be renewed, and the outcome, whatever it is, shall be obeyed. ' +
      'If, however, there is still disagreement, the same procedure ' +
      'should be repeated once more, and the decision of the ' +
      'majority shall prevail. He, verily, guideth whomsoever He ' +
      'pleaseth to the right way.',
    author: "Bahá'u'lláh",
    source: 'The Kitáb-i-Aqdas, p. 136',
  },
  choice: {
    question:
      'This passage gives an actual procedure for when consultation ' +
      'reaches an impasse. What does it suggest about how ' +
      'Bahá’u’lláh treats deadlock?',
    options: [
      'Deadlock means the matter should simply be dropped.',
      'Deadlock is treated as solvable through a defined process, ' +
        'not a dead end.',
      'Deadlock means the most senior person should just decide.',
      'This passage only applies to choosing new members, not ' +
        'general decisions.',
    ],
    correctOption:
      'Deadlock is treated as solvable through a defined process, ' +
      'not a dead end.',
  },
};

const collectiveReflectStepQuick: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    'Think of a group decision that got stuck in disagreement. Was ' +
    'there a clear, agreed-upon way to move forward when that ' +
    'happened — or did it just stall, or get decided by whoever ' +
    'pushed hardest?',
};

const collectiveReflectStepExpanded: Lesson['steps'][number] = {
  type: 'reflect',
  title: 'Reflect',
  prompt:
    collectiveReflectStepQuick.prompt +
    '\n\nA second question: ’Abdu’l-Bahá says agreement in unity, ' +
    'even if momentarily wrong, is better than correctness that ' +
    'breaks unity. Does that sit easily with you, or does it feel ' +
    'uncomfortable? Why?',
};

const collectiveDiscussStepQuick: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    'If you’re studying with others: ’Abdu’l-Bahá’s claim that unity ' +
    'matters more than momentary correctness can feel ' +
    'counterintuitive. Where do you agree with it, and where does it ' +
    'feel like it could be misused?',
};

const collectiveDiscussStepExpanded: Lesson['steps'][number] = {
  type: 'discuss',
  title: 'Discuss (Optional)',
  prompt:
    collectiveDiscussStepQuick.prompt +
    '\n\nA second question: has your group ever had a real process ' +
    'for resolving deadlock, like Bahá’u’lláh describes? What ' +
    'happened when you reached an impasse without one?',
};

const collectiveLiveItStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'Live It',
  body:
    'Try this today: the next time your group reaches a decision you ' +
    'didn’t fully agree with, practice supporting it wholeheartedly ' +
    'rather than quietly working around it. Notice what that costs ' +
    'you, and what it protects.',
};

const collectiveRememberStep: Lesson['steps'][number] = {
  type: 'remember',
  title: 'Remember',
  blankedQuotation: {
    textWithBlanks:
      'if they agree and both parties are in the wrong, as it is in ' +
      '______ the truth will be revealed and the wrong made ______.',
    answers: ['unity', 'right'],
  },
};

const collectiveExplainStep: Lesson['steps'][number] = {
  type: 'explain',
  title: 'Explain It',
  prompt:
    "You've got 30 seconds. How would you explain this idea to a friend?",
  modelAnswer:
    "'Abdu'l-Bahá teaches that unity matters more than any single " +
    'group being right in the moment — because a wrong decision ' +
    'reached in real unity can still be corrected later through more ' +
    'consultation, but a correct decision that shatters unity can ' +
    'break the group’s ability to consult at all going forward. ' +
    'Bahá’u’lláh even gives a concrete process for when consultation ' +
    'reaches deadlock: add new people, choose some by lot if needed, ' +
    'and follow the eventual majority — deadlock is treated as ' +
    'solvable, not final.',
  citation: {
    author: "'Abdu'l-Bahá",
    source: 'Bahá’í World Faith, p. 411',
  },
};

const collectiveExtraExploreStep: Lesson['steps'][number] = {
  type: 'explore',
  title: 'Not an Easy Skill',
  quotation: {
    text:
      'Consultation is no easy skill to learn, requiring as it does ' +
      'the subjugation of all egotism and unruly passions, the ' +
      'cultivation of frankness and freedom of thought as well as ' +
      'courtesy, openness of mind, and wholehearted acquiescence in a ' +
      'majority decision.',
    author: 'The Universal House of Justice',
    source: '10 June 1966, Youth in Every Land',
  },
  choice: {
    question:
      'This passage calls consultation "no easy skill to learn" and ' +
      'lists what it actually requires — subjugating ego, frankness, ' +
      'courtesy, and "wholehearted acquiescence" to outcomes you may ' +
      'not have chosen. Given everything in this lesson, why might ' +
      '"skill" be the right word rather than just "value" or "belief"?',
    options: [
      'Because it requires study of complex rules and procedures.',
      'Because it requires practiced habits of character, not just ' +
        'agreeing it’s a good idea in principle.',
      'Because only trained facilitators can do it.',
      'It’s not really a skill — the word choice doesn’t matter.',
    ],
    correctOption:
      'Because it requires practiced habits of character, not just ' +
      'agreeing it’s a good idea in principle.',
  },
};

const collectiveContemplationStep: Lesson['steps'][number] = {
  type: 'practice',
  title: 'A Short Contemplation',
  body:
    'Before moving on, take two or three unhurried minutes.\n\n' +
    'Read this phrase slowly: "as it is in unity the truth will be ' +
    'revealed and the wrong made right."\n\n' +
    'Think of one relationship or group where you’d rather be right ' +
    'than unified. What would it look like to hold that loosely, ' +
    'just for today?\n\n' +
    "When you're ready, continue.",
};

const collectiveKeyIdea =
  'Unity is the precondition for a group being able to keep ' +
  'discovering truth over time — a decision that shatters unity can ' +
  'cost more than a wrong decision ever could.';

export const collectiveDecisionQuickLesson: Lesson = {
  id: 'collective-decision-quick',
  pathId: 'consultation',
  order: 16,
  title: 'Collective Decision-Making',
  subtitle: 'Why unity can matter more than being right',
  estimatedMinutes: 6,
  depthLabel: 'Quick',
  keyIdea: collectiveKeyIdea,
  steps: [
    collectiveReadStep,
    collectiveUnderstandStepQuick,
    collectiveSecondPassageStep,
    collectiveReflectStepQuick,
    collectiveLiveItStep,
    collectiveRememberStep,
    collectiveExplainStep,
    collectiveDiscussStepQuick,
  ],
};

export const collectiveDecisionExploreLesson: Lesson = {
  id: 'collective-decision-explore',
  pathId: 'consultation',
  order: 17,
  title: 'Collective Decision-Making',
  subtitle: 'Why unity can matter more than being right — with a related passage',
  estimatedMinutes: 10,
  depthLabel: 'Explore',
  keyIdea: collectiveKeyIdea,
  steps: [
    collectiveReadStep,
    collectiveUnderstandStepExpanded,
    collectiveSecondPassageStep,
    collectiveReflectStepExpanded,
    collectiveLiveItStep,
    collectiveRememberStep,
    collectiveExplainStep,
    collectiveDiscussStepExpanded,
  ],
};

export const collectiveDecisionDeepDiveLesson: Lesson = {
  id: 'collective-decision-deep-dive',
  pathId: 'consultation',
  order: 18,
  title: 'Collective Decision-Making',
  subtitle: 'Why unity can matter more than being right — full study',
  estimatedMinutes: 15,
  depthLabel: 'Deep Dive',
  keyIdea: collectiveKeyIdea,
  steps: [
    collectiveReadStep,
    collectiveUnderstandStepExpanded,
    collectiveSecondPassageStep,
    collectiveExtraExploreStep,
    collectiveReflectStepExpanded,
    collectiveContemplationStep,
    collectiveLiveItStep,
    collectiveRememberStep,
    collectiveExplainStep,
    collectiveDiscussStepExpanded,
  ],
};
