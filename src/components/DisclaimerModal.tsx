import React from 'react';
import { ShieldAlert, Check } from 'lucide-react';

interface DisclaimerModalProps {
  onAccept: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl text-left max-h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-3 text-amber-400 mb-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
            <ShieldAlert className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-100">Welcome to CalisStart</h3>
            <p className="text-xs text-slate-400">Important Safety & Health Guidelines</p>
          </div>
        </div>

        <div className="space-y-3 text-xs text-slate-300 leading-relaxed border-t border-b border-slate-800 py-4 my-3">
          <p>
            This 182-day home program is designed to safely build foundational bodyweight strength, mobility, and posture from absolute scratch with zero equipment.
          </p>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <strong className="text-amber-300 block">Strict Safety Rules:</strong>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li><strong>Zero Equipment Hazards:</strong> No hanging neck gear, no unstable table stunts, and no high-impact bouncing.</li>
              <li><strong>Mild Tension, Never Pain:</strong> All stretches are static and gentle. Never bounce or force a joint.</li>
              <li><strong>Immediate Stop Conditions:</strong> If you feel sharp pain, dizziness, unusual shortness of breath, joint clicking with ache, or chest tightness, stop immediately.</li>
              <li><strong>Gentle Wellness Only:</strong> Face, jaw, and scalp routines are for gentle muscle relaxation; no force is ever applied to facial bones.</li>
            </ul>
          </div>
          <p className="text-[11px] text-slate-400">
            Consult a medical doctor before beginning any physical exercise program, especially if you have pre-existing injuries or cardiovascular conditions. CalisStart provides educational fitness coaching and does not replace medical advice.
          </p>
        </div>

        <button
          onClick={onAccept}
          className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-amber-500/20 active:scale-98"
        >
          <Check className="w-4 h-4" />
          I Understand & Agree — Begin Day 1
        </button>
      </div>
    </div>
  );
};
