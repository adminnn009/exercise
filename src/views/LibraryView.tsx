import React, { useState } from 'react';
import { EXERCISES } from '../data/exercises';
import { Exercise, ExerciseCategory } from '../types';
import { StickFigure } from '../components/StickFigure';
import { Search, ExternalLink, ChevronDown, ChevronUp, Dumbbell, ShieldCheck } from 'lucide-react';

const CATEGORIES: { key: ExerciseCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All (50+)' },
  { key: 'push', label: 'Push' },
  { key: 'pull', label: 'Pull' },
  { key: 'legs', label: 'Legs' },
  { key: 'core', label: 'Core' },
  { key: 'morning-lymph', label: 'Morning Lymph' },
  { key: 'face-neck-wellness', label: 'Face, Jaw & Scalp' },
  { key: 'stretches-posture', label: 'Posture Stretches' },
  { key: 'stretches-lower', label: 'Lower Body Stretches' },
  { key: 'stretches-upper', label: 'Upper Body Stretches' },
  { key: 'stretches-back', label: 'Back & Spine Stretches' }
];

export const LibraryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ExerciseCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredExercises = EXERCISES.filter((ex) => {
    const matchesCategory = selectedCategory === 'all' || ex.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = 
      !query ||
      ex.name.toLowerCase().includes(query) ||
      ex.muscles.some(m => m.toLowerCase().includes(query)) ||
      ex.cues.some(c => c.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-4 space-y-4 pb-24">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Dumbbell className="w-6 h-6 text-amber-400" />
          Exercise Library
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Complete zero-equipment library with animated SVG form guides, cues, regressions, and video demos.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by exercise name, muscle, or movement..."
          className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
        />
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${
              selectedCategory === cat.key
                ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Exercise Count */}
      <div className="text-xs text-slate-500 flex items-center justify-between">
        <span>Showing {filteredExercises.length} movements</span>
        <span>Tap any card to view stick-figure form</span>
      </div>

      {/* Exercise Cards List */}
      <div className="space-y-3">
        {filteredExercises.map((exercise) => {
          const isExpanded = expandedId === exercise.id;

          return (
            <div
              key={exercise.id}
              className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-sm transition-all"
            >
              <div
                onClick={() => toggleExpand(exercise.id)}
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-850"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white">
                      {exercise.name}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 font-mono">
                      {exercise.type === 'reps' ? 'Reps' : 'Hold/Timed'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {exercise.muscles.slice(0, 3).join(', ')}
                  </p>
                </div>

                <button
                  className="p-1 text-slate-400 hover:text-white"
                  aria-label={isExpanded ? 'Collapse' : 'Expand'}
                >
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Expanded Card Details & Stick Figure */}
              {isExpanded && (
                <div className="p-4 pt-0 border-t border-slate-800/80 space-y-3 text-xs animate-in fade-in">
                  {/* Stick figure demonstration */}
                  <div className="relative pt-3">
                    <StickFigure exercise={exercise} size={240} />
                    
                    {/* YouTube Search Link */}
                    <a
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(exercise.ytQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-5 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md text-[11px] font-medium text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                    >
                      <span>Watch Form Video</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Form Cues */}
                  <div>
                    <span className="font-semibold text-amber-400 block mb-1">Key Form Cues:</span>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      {exercise.cues.map((cue, idx) => (
                        <li key={idx}>{cue}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Mistake */}
                  <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-900/40">
                    <span className="font-semibold text-rose-300 block mb-0.5">Common Mistake:</span>
                    <p className="text-slate-300 text-xs">{exercise.mistake}</p>
                  </div>

                  {/* Easier / Harder */}
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800">
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80">
                      <span className="font-semibold text-sky-400 block">Easier Option:</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">{exercise.easier}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80">
                      <span className="font-semibold text-emerald-400 block">Harder Option:</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">{exercise.harder}</p>
                    </div>
                  </div>

                  {/* Full Muscles List */}
                  <div className="text-[11px] text-slate-500 pt-1">
                    <strong className="text-slate-400">Target Muscles: </strong>
                    {exercise.muscles.join(', ')}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
