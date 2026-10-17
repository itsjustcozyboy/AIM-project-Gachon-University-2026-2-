import test from 'node:test';
import assert from 'node:assert/strict';
import { categorizeJob, normalizeJobs } from '../lib/jobs.ts';

test('keeps target roles distinct and does not include unrelated sales jobs', () => {
  assert.equal(categorizeJob('Product Manager, AI Growth'), 'Product');
  assert.equal(categorizeJob('Finance & Strategy, Compute'), 'Strategy');
  assert.equal(categorizeJob('UX Researcher'), 'Research');
  assert.equal(categorizeJob('Research Engineer, Human-AI Interaction'), 'Research');
  assert.equal(categorizeJob('Solutions Architect'), 'Solutions');
  assert.equal(categorizeJob('Account Executive'), null);
});
test('rejects malformed boards instead of reporting them as empty successful feeds', () => {
  for (const value of [null, {}, { jobs: null }, { jobs: {} }]) assert.throws(() => normalizeJobs(value, 'figma', 'Figma'));
  assert.deepEqual(normalizeJobs({ jobs: [] }, 'figma', 'Figma'), []);
});
test('uses publisher data, deduplicates IDs and rejects unsafe outbound links', () => {
  const job = { id: 123, title: 'Early Career, Associate Product Manager', absolute_url: 'https://boards.greenhouse.io/figma/jobs/123', location: { name: 'New York' }, updated_at: '2026-10-17T10:00:00Z' };
  const result = normalizeJobs({ jobs: [job, job, { ...job, id: 124, absolute_url: 'javascript:alert(1)' }, { ...job, id: 125, absolute_url: 'https://greenhouse.io.attacker.example/jobs/125' }, { ...job, id: 126, title: 'Account Executive' }, { id: 127 }] }, 'figma', 'Figma');
  assert.equal(result.length, 1);
  assert.equal(result[0].earlyCareer, true);
  assert.equal(result[0].location, 'New York');
  assert.equal(result[0].updatedAt, job.updated_at);
  assert.equal(result[0].id, 'figma:123');
});
test('missing location or invalid source date remains explicitly unknown', () => {
  const [job] = normalizeJobs({ jobs: [{ id: 5, title: 'Research Scientist', absolute_url: 'https://job-boards.greenhouse.io/anthropic/jobs/5', updated_at: 'not-a-date' }] }, 'anthropic', 'Anthropic');
  assert.equal(job.location, '위치 원문 확인');
  assert.equal(job.updatedAt, null);
  assert.equal(job.earlyCareer, false);
});
