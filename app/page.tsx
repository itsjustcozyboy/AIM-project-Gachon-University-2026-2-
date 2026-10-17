import { readFile } from 'node:fs/promises';
import path from 'node:path';
import Portfolio from './components/portfolio';
import type { CareerDataset } from '../lib/portfolio-types';

export default async function Page() {
  const dataset: CareerDataset = JSON.parse(await readFile(path.join(process.cwd(), 'data/personal-career-dataset.yaml'), 'utf8'));
  return <Portfolio dataset={dataset} />;
}
