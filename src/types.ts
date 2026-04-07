/**
 * The SoulInput - The protocol of intent
 * This is the raw input that gets evaluated for alignment
 */
export interface SoulInput {
  /** The intent string - what the agent wants to do */
  intent: string;
  /** The actor identifier - who is requesting this action */
  actor: string;
  /** Additional context for evaluation */
  context?: Record<string, unknown>;
}

/**
 * The SoulResult - Resonance from the soul layer
 * The output of alignment evaluation
 */
export interface SoulResult {
  /** Resonance score from 0 (entropy) to 1 (aligned) */
  resonanceScore: number;
  /** The alignment state */
  alignment: 'aligned' | 'uncertain' | 'misaligned';
  /** Human-readable reasoning */
  reasoning: string;
  /** Whether this intent was vetoed */
  veto: boolean;
}