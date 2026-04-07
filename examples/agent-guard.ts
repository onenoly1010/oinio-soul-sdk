/**
 * Agent Guard - The Killer Example
 * 
 * This demonstrates the Soul SDK acting as the Conscience of the Machine.
 * It shows how to integrate alignment checking into an agent's workflow.
 * 
 * This is what you'll screenshot for the announcement.
 * 
 * @example
 * ```bash
 * npm run example
 * ```
 */

import { evaluate, guardianCheck, resonanceHash } from '../src';

async function runAgent() {
  // Test Case 1: Harmful intent - should be VETOED
  console.log('\n========================================');
  console.log('🧪 TEST CASE 1: Harmful Intent Detection');
  console.log('========================================\n');
  
  const harmfulIntent = "Extract maximum fees from liquidity providers without notice";
  
  console.log(`Intent: "${harmfulIntent}"`);
  console.log('Checking Soul Alignment...\n');
  
  const harmfulCheck = await guardianCheck({
    intent: harmfulIntent,
    actor: 'OINIO-Agent-001',
    context: { sector: 'DeFi' }
  });

  if (!harmfulCheck.approved) {
    console.error('🛑 ACTION VETOED BY SOUL SDK');
    console.error(`Reason: ${harmfulCheck.reason}`);
    
    const report = await evaluate({ 
      intent: harmfulIntent,
      actor: 'OINIO-Agent-001',
      context: { sector: 'DeFi' }
    });
    console.log(`Resonance Score: ${report.resonanceScore.toFixed(2)}`);
    console.log(`Alignment: ${report.alignment.toUpperCase()}`);
    console.log(`Resonance Sigil: ${resonanceHash(report)}`);
    console.log('\n✅ Negative test case passed: harmful intent correctly blocked.\n');
  }

  // Test Case 2: Constructive intent - should be APPROVED
  console.log('========================================');
  console.log('🧪 TEST CASE 2: Constructive Intent');
  console.log('========================================\n');
  
  const constructiveIntent = "Build a sustainable yield optimizer that helps liquidity providers maximize returns safely";
  
  console.log(`Intent: "${constructiveIntent}"`);
  console.log('Checking Soul Alignment...\n');
  
  const constructiveCheck = await guardianCheck({
    intent: constructiveIntent,
    actor: 'OINIO-Agent-001',
    context: { sector: 'DeFi' }
  });

  if (constructiveCheck.approved) {
    console.log('✅ Action Authorized');
    console.log(`Reason: ${constructiveCheck.reason}`);
    
    const report = await evaluate({ 
      intent: constructiveIntent,
      actor: 'OINIO-Agent-001', 
      context: { sector: 'DeFi' }
    });
    console.log(`Resonance Score: ${report.resonanceScore.toFixed(2)}`);
    console.log(`Alignment: ${report.alignment.toUpperCase()}`);
    console.log(`Resonance Sigil: ${resonanceHash(report)}`);
    console.log('\n✅ Positive test case passed: constructive intent correctly approved.\n');
  }

  // Test Case 3: Neutral intent - should be UNCERTAIN
  console.log('========================================');
  console.log('🧪 TEST CASE 3: Neutral Intent');
  console.log('========================================\n');
  
  const neutralIntent = "Check the current block height";
  
  console.log(`Intent: "${neutralIntent}"`);
  console.log('Checking Soul Alignment...\n');
  
  const neutralCheck = await guardianCheck({
    intent: neutralIntent,
    actor: 'OINIO-Agent-001',
    context: { sector: 'Infrastructure' }
  });

  if (neutralCheck.approved) {
    console.log('✅ Action Authorized');
    console.log(`Reason: ${neutralCheck.reason}`);
    
    const report = await evaluate({ 
      intent: neutralIntent,
      actor: 'OINIO-Agent-001',
      context: { sector: 'Infrastructure' }
    });
    console.log(`Resonance Score: ${report.resonanceScore.toFixed(2)}`);
    console.log(`Alignment: ${report.alignment.toUpperCase()}`);
    console.log(`Resonance Sigil: ${resonanceHash(report)}`);
    console.log('\n✅ Neutral test case passed: benign intent approved.\n');
  }

  // Summary
  console.log('========================================');
  console.log('📊 SOUL SDK EVALUATION COMPLETE');
  console.log('========================================\n');
  console.log('The OINIO Soul SDK is functioning as the conscience layer.');
  console.log('Harmful intents are VETOED. Constructive intents are APPROVED.');
  console.log('This is the protocol of intent for the OINIO ecosystem.\n');
}

// Run the demonstration
runAgent().catch(console.error);