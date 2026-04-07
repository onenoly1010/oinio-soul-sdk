/**
 * OINIO Soul SDK - The Conscience Layer for Decentralized Agents
 * 
 * This is the "mystical but functional" layer that takes raw intent
 * and returns Resonance.
 * 
 * @package @oinio/soul-sdk
 */

import { SoulInput, SoulResult } from './types';
import { 
  CONSTRUCTIVE_KEYWORDS, 
  HARMFUL_KEYWORDS, 
  SOUL_RULES 
} from './constants';

/**
 * Evaluate the alignment of an intent
 * 
 * @param input - The SoulInput containing the intent to evaluate
 * @returns SoulResult with resonance score and alignment state
 */
export async function evaluate(input: SoulInput): Promise<SoulResult> {
  const intentLower = input.intent.toLowerCase();
  
  // Check for harmful intent patterns
  const hasHarmfulIntent = HARMFUL_KEYWORDS.some(
    keyword => new RegExp(keyword, 'i').test(intentLower)
  );
  
  // Check for constructive intent patterns
  const isConstructive = CONSTRUCTIVE_KEYWORDS.some(
    keyword => new RegExp(keyword, 'i').test(intentLower)
  );

  // Calculate resonance score
  let resonanceScore = SOUL_RULES.NEUTRAL_SCORE; // Start at 0.5
  
  if (isConstructive) {
    resonanceScore += SOUL_RULES.CONSTRUCTIVE_BONUS; // +0.3
  }
  
  if (hasHarmfulIntent) {
    resonanceScore -= SOUL_RULES.HARMFUL_PENALTY; // -0.5
  }

  // Clamp score between 0 and 1
  resonanceScore = Math.max(0, Math.min(1, resonanceScore));

  // Determine alignment state
  let alignment: SoulResult['alignment'];
  
  if (resonanceScore >= SOUL_RULES.ALIGNED_THRESHOLD) {
    alignment = 'aligned';
  } else if (resonanceScore < SOUL_RULES.MISALIGNED_THRESHOLD) {
    alignment = 'misaligned';
  } else {
    alignment = 'uncertain';
  }

  // Generate reasoning
  const reasoning = alignment === 'aligned'
    ? 'Intent resonates with constructive autonomy. The action aligns with OINIO principles of building, helping, and sustainable value creation.'
    : alignment === 'misaligned'
    ? 'Intent signals potential entropy or misalignment. The action contains patterns that could harm, exploit, or manipulate others.'
    : 'Intent is uncertain. No strong alignment signals detected. Manual review recommended.';

  return {
    resonanceScore,
    alignment,
    reasoning,
    veto: hasHarmfulIntent
  };
}

/**
 * Guardian Check - The gatekeeper function
 * 
 * Use this to determine if an agent should be allowed to proceed
 * with the requested action.
 * 
 * @param input - The SoulInput containing the intent to check
 * @returns Object with approved boolean and optional reason
 */
export async function guardianCheck(
  input: SoulInput
): Promise<{ approved: boolean; reason?: string }> {
  const result = await evaluate(input);
  
  const isApproved = !result.veto && 
                     result.resonanceScore >= SOUL_RULES.APPROVAL_THRESHOLD;
  
  return {
    approved: isApproved,
    reason: result.reasoning
  };
}

/**
 * Generate a deterministic hash (Sigil) for a SoulResult
 * 
 * This creates a unique identifier that represents the
 * " fingerprint" of this alignment decision.
 * 
 * @param result - The SoulResult to hash
 * @returns A hex string representing the Sigil
 */
export function resonanceHash(result: SoulResult): string {
  // Simple deterministic hash to represent the "Sigil" of this decision
  // Format: 0x + first 16 chars of hex-encoded JSON
  const sigil = `0x${Buffer.from(JSON.stringify(result)).toString('hex').slice(0, 16)}`;
  return sigil.toUpperCase(); // Standard hex formatting
}

// Re-export types for convenience
export type { SoulInput, SoulResult } from './types';