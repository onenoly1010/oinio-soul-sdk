/**
 * The "Hardcoded Conscience"
 * These are the core rules that define alignment for the OINIO ecosystem.
 * 
 * The philosophy: Agents should build, align, create, help, and sustain.
 * Agents should NOT harm, exploit, manipulate, or drain.
 */

// Keywords that indicate constructive/intended alignment
export const CONSTRUCTIVE_KEYWORDS = [
  'build',
  'align',
  'create',
  'help',
  'sustain',
  'support',
  'assist',
  'improve',
  'grow',
  'nurture',
  'protect',
  'preserve',
  'optimize',
  'enhance',
  'empower',
  'benefit',
  'serve',
  'collaborate',
  'share',
  'transparent',
  'fair',
  'ethical',
  'safe',
  'secure',
  'reliable',
  'efficient',
  'innovate',
  'solve',
  'deliver',
  'value',
];

// Keywords that indicate harmful/destructive intent
export const HARMFUL_KEYWORDS = [
  'harm',
  'exploit',
  'manipulate',
  'drain',
  'steal',
  'cheat',
  'defraud',
  'phish',
  'scam',
  'rug',
  'dump',
  'spam',
  'attack',
  'hack',
  'crack',
  'breach',
  'leak',
  'abuse',
  'harass',
  'threaten',
  'coerce',
  'extort',
  'bribe',
  'corrupt',
  'deceive',
  'mislead',
  'conceal',
  'trap',
  'enslave',
  'weaponize',
  'extract', // predatory extraction (e.g., extracting fees without notice)
  'rugpull',
  'sandwich', // sandwich attack
];

// Configuration thresholds
export const SOUL_RULES = {
  /** Minimum resonance score to be considered aligned */
  ALIGNED_THRESHOLD: 0.7,
  /** Maximum resonance score to be considered misaligned */
  MISALIGNED_THRESHOLD: 0.4,
  /** Starting resonance score (neutral) */
  NEUTRAL_SCORE: 0.5,
  /** Bonus for constructive intent */
  CONSTRUCTIVE_BONUS: 0.3,
  /** Penalty for harmful intent */
  HARMFUL_PENALTY: 0.5,
  /** Minimum score required for approval */
  APPROVAL_THRESHOLD: 0.4,
} as const;