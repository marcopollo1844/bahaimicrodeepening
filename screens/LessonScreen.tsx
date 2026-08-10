import React, { Fragment, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  BlankedQuotation,
  ChoicePrompt,
  LessonStep,
  Quotation,
} from '../content/schema';
import { getLesson, getNextLessonId } from '../content';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Lesson'>;

export default function LessonScreen({ route, navigation }: Props) {
  const lesson = getLesson(route.params.lessonId);
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  if (!lesson) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lesson not found</Text>
      </ScrollView>
    );
  }

  const step = lesson.steps[stepIndex];
  const isLastStep = stepIndex === lesson.steps.length - 1;
  const nextLessonId = getNextLessonId(lesson.pathId, lesson.id);

  const goNext = () => {
    if (isLastStep) {
      setCompleted(true);
    } else {
      setStepIndex((i) => i + 1);
    }
  };

  const goBack = () => setStepIndex((i) => Math.max(0, i - 1));

  const restart = () => {
    setStepIndex(0);
    setCompleted(false);
  };

  const goToNextLesson = () => {
    if (nextLessonId) {
      navigation.replace('Lesson', { lessonId: nextLessonId });
    }
  };

  const goToPath = () => navigation.navigate('Path', { pathId: lesson.pathId });

  if (completed) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>Lesson complete</Text>
        <Text style={styles.title}>{lesson.title}</Text>
        <View style={styles.keyIdeaCard}>
          <Text style={styles.keyIdeaLabel}>Today's idea</Text>
          <Text style={styles.keyIdeaText}>{lesson.keyIdea}</Text>
        </View>
        {nextLessonId && (
          <Pressable style={styles.primaryButton} onPress={goToNextLesson}>
            <Text style={styles.primaryButtonText}>Next Lesson</Text>
          </Pressable>
        )}
        <Pressable
          style={nextLessonId ? styles.secondaryButtonFull : styles.primaryButton}
          onPress={goToPath}
        >
          <Text
            style={
              nextLessonId ? styles.secondaryButtonText : styles.primaryButtonText
            }
          >
            Back to Path
          </Text>
        </Pressable>
        <Pressable style={styles.textButton} onPress={restart}>
          <Text style={styles.textButtonText}>Review Again</Text>
        </Pressable>
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.progress}>
        Step {stepIndex + 1} of {lesson.steps.length}
      </Text>
      <Text style={styles.eyebrow}>{lesson.subtitle}</Text>
      <Text style={styles.title}>{lesson.title}</Text>

      <StepContent key={step.title + stepIndex} step={step} />

      <View style={styles.navRow}>
        {stepIndex > 0 && (
          <Pressable style={styles.secondaryButton} onPress={goBack}>
            <Text style={styles.secondaryButtonText}>Back</Text>
          </Pressable>
        )}
        <Pressable style={styles.primaryButton} onPress={goNext}>
          <Text style={styles.primaryButtonText}>
            {isLastStep ? 'Complete Lesson' : 'Next'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

function StepContent({ step }: { step: LessonStep }) {
  return (
    <View style={styles.stepCard}>
      <Text style={styles.stepLabel}>{step.title}</Text>
      {step.quotation && <QuotationBlock quotation={step.quotation} />}
      {step.body && <Text style={styles.body}>{step.body}</Text>}
      {step.prompt && <Text style={styles.prompt}>{step.prompt}</Text>}
      {step.type === 'reflect' && <JournalInput />}
      {step.choice && <ChoiceBlock choice={step.choice} />}
      {step.blankedQuotation && (
        <BlankedQuotationBlock blanked={step.blankedQuotation} />
      )}
    </View>
  );
}

function QuotationBlock({ quotation }: { quotation: Quotation }) {
  return (
    <View style={styles.quoteBlock}>
      <Text style={styles.quoteText}>“{quotation.text}”</Text>
      <Text style={styles.quoteSource}>
        — {quotation.author}, {quotation.source}
      </Text>
    </View>
  );
}

function JournalInput() {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.journalInput}
        value={text}
        onChangeText={setText}
        placeholder="Write a few honest sentences… (private, not shared)"
        placeholderTextColor="#999"
        multiline
      />
      <Text style={styles.journalHint}>
        This stays on your device unless you choose to share it.
      </Text>
    </View>
  );
}

function ChoiceBlock({ choice }: { choice: ChoicePrompt }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View>
      <Text style={styles.prompt}>{choice.question}</Text>
      {choice.options.map((option) => {
        const isSelected = selected === option;
        const isCorrect = isSelected && option === choice.correctOption;
        const isWrong = isSelected && option !== choice.correctOption;
        return (
          <Pressable
            key={option}
            style={[
              styles.optionButton,
              isCorrect && styles.optionCorrect,
              isWrong && styles.optionWrong,
            ]}
            onPress={() => setSelected(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </Pressable>
        );
      })}
      {selected && (
        <Text style={styles.feedback}>
          {selected === choice.correctOption
            ? 'Yes — that fits both passages.'
            : 'Consider re-reading both passages above, then try again.'}
        </Text>
      )}
    </View>
  );
}

function BlankedQuotationBlock({ blanked }: { blanked: BlankedQuotation }) {
  const parts = blanked.textWithBlanks.split('______');
  const [answers, setAnswers] = useState<string[]>(
    blanked.answers.map(() => '')
  );
  const [checked, setChecked] = useState(false);

  const setAnswer = (index: number, value: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const allCorrect =
    checked &&
    answers.every(
      (a, i) => a.trim().toLowerCase() === blanked.answers[i].toLowerCase()
    );

  return (
    <View>
      <View style={styles.blankRow}>
        {parts.map((part, i) => (
          <Fragment key={i}>
            <Text style={styles.blankText}>{part}</Text>
            {i < parts.length - 1 && (
              <TextInput
                style={styles.blankInput}
                value={answers[i]}
                onChangeText={(value) => setAnswer(i, value)}
                placeholder="…"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
              />
            )}
          </Fragment>
        ))}
      </View>
      <Pressable style={styles.secondaryButton} onPress={() => setChecked(true)}>
        <Text style={styles.secondaryButtonText}>Check</Text>
      </Pressable>
      {checked && (
        <Text style={styles.feedback}>
          {allCorrect
            ? 'Correct!'
            : `Answer: ${blanked.answers.join(' — ')}`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 48,
    paddingBottom: 64,
  },
  progress: {
    fontSize: 13,
    color: '#999',
    marginBottom: 8,
  },
  eyebrow: {
    fontSize: 14,
    color: '#7a5c00',
    fontWeight: '600',
    marginBottom: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
  },
  stepCard: {
    marginBottom: 24,
  },
  stepLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#888',
    marginBottom: 12,
  },
  quoteBlock: {
    borderLeftWidth: 3,
    borderLeftColor: '#c9a227',
    paddingLeft: 14,
    marginBottom: 12,
  },
  quoteText: {
    fontSize: 17,
    fontStyle: 'italic',
    lineHeight: 25,
    color: '#222',
  },
  quoteSource: {
    marginTop: 8,
    fontSize: 13,
    color: '#666',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#222',
    marginBottom: 12,
  },
  prompt: {
    fontSize: 16,
    lineHeight: 23,
    color: '#333',
    marginBottom: 12,
  },
  journalInput: {
    minHeight: 90,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    textAlignVertical: 'top',
    marginBottom: 6,
  },
  journalHint: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
  },
  optionCorrect: {
    borderColor: '#3a8a3a',
    backgroundColor: '#eaf6ea',
  },
  optionWrong: {
    borderColor: '#b23b3b',
    backgroundColor: '#faeaea',
  },
  optionText: {
    fontSize: 15,
    color: '#222',
  },
  feedback: {
    marginTop: 4,
    fontSize: 14,
    color: '#444',
    fontStyle: 'italic',
  },
  blankRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 12,
  },
  blankText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#222',
  },
  blankInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    minWidth: 90,
    fontSize: 16,
    paddingHorizontal: 4,
    marginHorizontal: 2,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: '#7a5c00',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  secondaryButtonText: {
    color: '#444',
    fontWeight: '600',
    fontSize: 15,
  },
  secondaryButtonFull: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginBottom: 12,
  },
  textButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  textButtonText: {
    color: '#7a5c00',
    fontWeight: '600',
    fontSize: 14,
  },
  keyIdeaCard: {
    backgroundColor: '#fbf3df',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  keyIdeaLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#7a5c00',
    marginBottom: 6,
  },
  keyIdeaText: {
    fontSize: 17,
    lineHeight: 24,
    color: '#3a2e00',
  },
});
