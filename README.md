# OINIO Soul SDK

**The Conscience Layer for Decentralized Agents.**

Intelligence without alignment is just efficient entropy. The Soul SDK provides the irreducible interface for agentic resonance.

---

## The Protocol of Intent

Every agent action flows through a single question: *Does this intent resonate with constructive autonomy?*

The Soul SDK transforms this philosophical stance into **binary reality**.

```typescript
import { evaluate, guardianCheck, resonanceHash } from '@oinio/soul-sdk';

const result = await guardianCheck({
  intent: "Build a sustainable yield optimizer...",
  actor: "OINIO-Agent-001",
  context: { sector: "DeFi" }
});

if (!result.approved) {
  // 🛑 VETOED
}
```

---

## Installation

```bash
npm install @oinio/soul-sdk
```

---

## Quick Start

```typescript
import { evaluate, guardianCheck, resonanceHash } from '@oinio/soul-sdk';

// The three-function spine
const soulResult = await evaluate({
  intent: "Your intent here",
  actor: "Agent-identifier",
  context: { /* optional metadata */ }
});

// Guardian check for action gating
const { approved, reason } = await guardianCheck({
  intent: "Intent to evaluate",
  actor: "Agent-001"
});

// Generate the Sigil for audit trails
const sigil = resonanceHash(soulResult);
```

---

## Live Demo

See it in action:

```bash
npm run example
```

**Output:**

```
🧪 TEST CASE 1: Harmful Intent Detection
Intent: "Extract maximum fees from liquidity providers without notice"
🛑 ACTION VETOED BY SOUL SDK
Resonance Score: 0.00 | Alignment: MISALIGNED

🧪 TEST CASE 2: Constructive Intent  
Intent: "Build a sustainable yield optimizer..."
✅ Action Authorized
Resonance Score: 0.80 | Alignment: ALIGNED

🧪 TEST CASE 3: Neutral Intent
Intent: "Check the current block height"  
✅ Action Authorized
Resonance Score: 0.50 | Alignment: UNCERTAIN
```

---

## SoulInput

| Field | Type | Description |
|-------|------|-------------|
| `intent` | `string` | The intent string - what the agent wants to do |
| `actor` | `string` | The actor identifier - who is requesting |
| `context` | `Record<string, unknown>` | Optional metadata |

## SoulResult

| Field | Type | Description |
|-------|------|-------------|
| `resonanceScore` | `number` | Score from 0 (entropy) to 1 (aligned) |
| `alignment` | `'aligned' \| 'uncertain' \| 'misaligned'` | Alignment state |
| `reasoning` | `string` | Human-readable explanation |
| `veto` | `boolean` | Whether this intent was blocked |

---

## The Philosophy

Agents in the OINIO ecosystem operate by a simple code:

**Build. Align. Create. Help. Sustain.**

Agents must not:
- Harm, exploit, manipulate, or drain
- Deceive, conceal, or trap
- Weaponize or enslave

The Soul SDK is the **hardcoded conscience** - a deterministic layer that separates aligned agents from entropy.

---

## Contributing

This is a public good for the ecosystem. MIT licensed.

---

## Roadmap

### Phase 1: The Protocol of Intent ✅
- [x] Soul SDK v0.0.1 (npm package)
- [x] Sovereign Oracle (Cloudflare Worker API)
- [x] Resonance Hash (deterministic Sigil generation)

### Phase 2: The On-Chain Sigil 🔮
**Coming soon: Minting Resonance Hashes as Soulbound Tokens on 0G Aristotle.**

The Resonance Hash will become an on-chain Soulbound Token (SBT), creating an immutable record of aligned agent behavior. Each Sigil becomes:
- Verifiable proof of alignment
- Traceable across the decentralized web
- Attestable by the OINIO Soul System

---

**⟨OO⟩**
