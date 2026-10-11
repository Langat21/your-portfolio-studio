import Navigation from '@/components/Navigation';
import { FormEvent, useMemo, useState } from 'react';

const chipLabels = ['About me', 'Experience', 'Projects', 'Skills'];

const profileTabs = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3 / Sass', 'Python'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Tailwind', 'Redux Toolkit', 'Zustand'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'REST APIs', 'Serverless'],
  },
];

const responses = {
  'About me':
    'Brian Lang\'at is an Operations Software and AI Automation Engineer focused on replacing spreadsheets, manual ops work, and fragmented workflows with scalable software systems.',
  Experience:
    'He has 5+ years of experience building AI-powered SaaS platforms, internal operations tooling, and automation systems across logistics, solar, and field service businesses.',
  Projects:
    'Core work includes Opslayer, lead intelligence systems, AI automation workflows, and internal tools that help teams operate faster with less manual overhead.',
  Skills:
    'His stack spans JavaScript, TypeScript, React, Next.js, FastAPI, Node.js, PostgreSQL, OpenAI APIs, n8n, and cloud systems used to ship production software.',
};

const defaultAnswer =
  'Brian builds software that removes operational drag: AI workflows, internal systems, lead intelligence, and product tooling for operations-heavy businesses.';

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('About me');
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState(defaultAnswer);

  const topicOptions = useMemo(() => ['About me', 'Experience', 'Projects', 'Skills'], []);

  const handleChipClick = (label: string) => {
    setSelectedTopic(label);
    setAnswer(responses[label as keyof typeof responses]);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed) {
      setAnswer(responses[selectedTopic as keyof typeof responses]);
      return;
    }

    const lowered = trimmed.toLowerCase();

    if (lowered.includes('about') || lowered.includes('who')) {
      setAnswer(responses['About me']);
    } else if (lowered.includes('experience') || lowered.includes('years') || lowered.includes('career')) {
      setAnswer(responses.Experience);
    } else if (lowered.includes('project') || lowered.includes('work') || lowered.includes('opslayer')) {
      setAnswer(responses.Projects);
    } else if (lowered.includes('stack') || lowered.includes('skill') || lowered.includes('tech')) {
      setAnswer(responses.Skills);
    } else {
      setAnswer(
        'Brian focuses on AI-powered operations software, lead intelligence systems, automation workflows, and internal tooling that helps businesses scale without manual overhead.'
      );
    }

    setInput('');
  };

  return (
    <div className="min-h-screen bg-[#1a1d1d] text-[#edf1f2]">
      <Navigation />

      <main className="mx-auto max-w-[960px] px-4 pb-8 pt-24 md:px-8">
        <div className="rounded-[24px] border border-white/10 bg-[#1d2021] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] md:p-6">
          <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-[#2e3031] px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#5fe68a] shadow-[0_0_12px_rgba(95,230,138,0.9)]" />
              <span className="text-base font-medium text-[#eff2f2]">Open to roles</span>
            </div>
            <div className="flex items-center gap-3 text-[#e7eaeb]">
              <span className="text-lg">↻</span>
              <span className="text-lg">◔</span>
              <span className="text-lg">⇩</span>
            </div>
          </div>

          <div className="mt-8 md:mt-9">
            <h1 className="text-[clamp(2.8rem,6.5vw,7rem)] leading-[0.9] tracking-[-0.07em] text-[#ebeeef]">
              Hi, I&apos;m Brian Lang&apos;at.
              <span className="mt-1 block text-[#dfe4e4]/70">
                I build AI-powered operational software
              </span>
              <span className="mt-1 block text-[#dfe4e4]/70">
                for logistics, solar, and field service companies.
              </span>
              <span className="mt-1 block text-[#dfe4e4]/70">
                From lead generation to AI automation,
              </span>
              <span className="mt-1 block text-[#dfe4e4]/70">
                I design systems that remove manual work and scale operations.
              </span>
            </h1>
          </div>

          <div className="mt-10 rounded-[26px] border border-white/10 bg-[#262a2b] p-4 md:p-5">
            <div className="grid gap-4 md:grid-cols-[1.35fr_0.65fr] md:items-center">
              <div className="rounded-[22px] border border-white/10 bg-[#1d2021] p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#aab1b2]">About me</p>
                <p className="mt-3 text-lg leading-relaxed text-[#eff1f2] md:text-2xl">
                  I&apos;m Brian Lang&apos;at, an Operations Software &amp; AI Automation Engineer building systems that replace spreadsheets, manual follow-ups, and fragmented workflows with scalable operations software.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-[#1d2021] p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#aab1b2]">Quick facts</p>
                <div className="mt-4 space-y-3 text-sm text-[#dfe4e4]">
                  <div className="flex items-center justify-between gap-4">
                    <span>Experience</span>
                    <strong>5+ Years</strong>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Focus</span>
                    <strong>AI Ops</strong>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Industries</span>
                    <strong>Logistics</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-5">
            {profileTabs.map((group) => (
              <div
                key={group.title}
                className="rounded-[24px] border border-white/10 bg-[#262a2b] p-4 md:p-5"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#f5f7f7] md:text-3xl">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-[#1d2021] px-3 py-2 text-sm text-[#e7ebec]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-[#ff7d60]/80 bg-[#1c1f20] p-3 shadow-[0_0_0_1px_rgba(255,125,96,0.45)] md:p-4">
            <div className="mb-3 rounded-[20px] border border-white/10 bg-[#262a2b] px-4 py-3 text-sm leading-relaxed text-[#e8ecec]">
              {answer}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask me anything about my work, projects"
                className="w-full rounded-full border border-white/10 bg-[#111315] px-4 py-4 text-left text-lg text-[#edf2f3] outline-none placeholder:text-[#b7bec0] md:text-2xl"
              />
              <button
                type="submit"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#f0f2f2] text-xl text-[#141819] transition-transform hover:scale-105"
              >
                ↑
              </button>
            </form>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {topicOptions.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => handleChipClick(label)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  selectedTopic === label
                    ? 'border-[#ff7d60] bg-[#2a2726] text-[#f7f1ee]'
                    : 'border-white/10 bg-[#2b2d2f] text-[#edf0f1]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
