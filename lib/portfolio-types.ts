export type CareerDataset = {
  version: string;
  as_of: string;
  facts: {
    current_status: { university: string; major: string; year: string };
    academic_transition: { previous_major: string; current_major: string; reason: string[] };
    core_interests: string[];
    experiences: { name: string; reported_actions: string[] }[];
  };
  inferences: { possible_skills: { experience: string; skills: string[] }[] };
  hypotheses: {
    behavior_pattern: string;
    career_values: Record<string, string>;
    preferred_work_environment: string[];
    environments_to_verify: string[];
  };
  unknowns: string[];
};
export type JobCategory = 'Product' | 'Strategy' | 'Research' | 'Solutions';
export type Job = { id: string; title: string; company: string; location: string; url: string; category: JobCategory; updatedAt: string | null; earlyCareer: boolean };
export type JobFeed = { jobs: Job[]; sources: { company: string; status: 'ok' | 'error'; checkedAt: string; count: number }[]; fetchedAt: string; refreshMinutes: number };
