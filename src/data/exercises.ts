import { Exercise } from '../types';

export const EXERCISES: Exercise[] = [
  // ==========================================
  // 1. MORNING WAKE-UP & LYMPH FLOW
  // ==========================================
  {
    id: 'arm_waves',
    name: 'Arm Waves',
    category: 'morning-lymph',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 45,
    restSeconds: 15,
    cues: [
      'Stand relaxed with feet shoulder-width apart.',
      'Initiate gentle rhythmic wave through shoulders, elbows, and wrists.',
      'Breathe naturally and keep knees slightly soft.'
    ],
    mistake: 'Tensing the traps or forcing jerky sudden movements.',
    easier: 'Smaller hand ripples with elbows kept closer to the ribs.',
    harder: 'Continuous fluid full-body ripples extending into the spine.',
    muscles: ['Deltoids', 'Forearms', 'Lymphatic nodes', 'Trapezius'],
    ytQuery: 'arm waves lymphatic gentle mobility warm up',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 15], neck: [50, 22],
        leftShoulder: [40, 25], rightShoulder: [60, 25],
        leftElbow: [30, 32], rightElbow: [70, 32],
        leftHand: [22, 40], rightHand: [78, 40],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [44, 94], rightFoot: [56, 94]
      },
      peak: {
        head: [50, 15], neck: [50, 22],
        leftShoulder: [40, 24], rightShoulder: [60, 24],
        leftElbow: [26, 20], rightElbow: [74, 20],
        leftHand: [18, 15], rightHand: [82, 15],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [44, 94], rightFoot: [56, 94]
      }
    }
  },
  {
    id: 'golf_arm_swings',
    name: 'Golf Arm Swings',
    category: 'morning-lymph',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 45,
    restSeconds: 15,
    cues: [
      'Hinge hips slightly forward with soft knees.',
      'Swing relaxed arms diagonally across the body like a loose pendulum.',
      'Allow the spine to rotate naturally with the momentum.'
    ],
    mistake: 'Locking hips stiffly or holding your breath.',
    easier: 'Narrower swing arc standing completely upright.',
    harder: 'Slightly deeper torso hinge with longer smooth follow-through.',
    muscles: ['Thoracic spine', 'Rotator cuff', 'Obliques'],
    ytQuery: 'pendulum arm swings mobility warm up',
    poses: {
      environment: 'standing',
      start: {
        head: [48, 16], neck: [49, 23],
        leftShoulder: [42, 27], rightShoulder: [58, 27],
        leftElbow: [32, 38], rightElbow: [48, 42],
        leftHand: [25, 48], rightHand: [40, 52],
        pelvis: [50, 54],
        leftKnee: [46, 73], rightKnee: [54, 73],
        leftFoot: [44, 94], rightFoot: [56, 94]
      },
      peak: {
        head: [52, 16], neck: [51, 23],
        leftShoulder: [42, 27], rightShoulder: [58, 27],
        leftElbow: [52, 42], rightElbow: [68, 38],
        leftHand: [60, 52], rightHand: [75, 48],
        pelvis: [50, 54],
        leftKnee: [46, 73], rightKnee: [54, 73],
        leftFoot: [44, 94], rightFoot: [56, 94]
      }
    }
  },
  {
    id: 'lymphatic_hops',
    name: 'Lymphatic Hops (Soft Landings)',
    category: 'morning-lymph',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 45,
    restSeconds: 15,
    cues: [
      'Stay light on the balls of your feet with tiny 1-inch bounces.',
      'Land silently and absorb every impact through bent knees and ankles.',
      'Let arms and facial muscles hang loose and jiggle naturally.'
    ],
    mistake: 'Landing heavy on flat heels or jumping high into the air.',
    easier: 'Heel-drops only: raise onto toes and drop gently onto heels without feet leaving the floor.',
    harder: 'Continuous light bounce while lightly shaking wrists.',
    muscles: ['Calves', 'Achilles', 'Lymphatic circulation'],
    ytQuery: 'lymphatic bouncing gentle rebound exercise',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 15], neck: [50, 22],
        leftShoulder: [41, 26], rightShoulder: [59, 26],
        leftElbow: [36, 40], rightElbow: [64, 40],
        leftHand: [34, 52], rightHand: [66, 52],
        pelvis: [50, 53],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 11], neck: [50, 18],
        leftShoulder: [41, 22], rightShoulder: [59, 22],
        leftElbow: [35, 36], rightElbow: [65, 36],
        leftHand: [32, 48], rightHand: [68, 48],
        pelvis: [50, 48],
        leftKnee: [46, 68], rightKnee: [54, 68],
        leftFoot: [45, 88], rightFoot: [55, 88]
      }
    }
  },
  {
    id: 'knee_raises',
    name: 'Knee Raises / Thigh Taps',
    category: 'morning-lymph',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 45,
    restSeconds: 15,
    cues: [
      'March steadily in place, drawing one knee up toward hip height.',
      'Tap top of thigh lightly with opposite hand.',
      'Maintain tall upright posture without rounding the back.'
    ],
    mistake: 'Leaning the torso backward to hoist the leg.',
    easier: 'Low march raising knees only a few inches off the floor.',
    harder: 'Slow 2-second hold at the top of each knee raise.',
    muscles: ['Hip flexors', 'Lower abdominals', 'Quadriceps'],
    ytQuery: 'high knees marching in place gentle beginner',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 15], neck: [50, 22],
        leftShoulder: [41, 26], rightShoulder: [59, 26],
        leftElbow: [36, 40], rightElbow: [64, 40],
        leftHand: [36, 52], rightHand: [64, 52],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 15], neck: [50, 22],
        leftShoulder: [41, 26], rightShoulder: [59, 26],
        leftElbow: [36, 38], rightElbow: [56, 42],
        leftHand: [36, 50], rightHand: [46, 54],
        pelvis: [50, 52],
        leftKnee: [42, 52], rightKnee: [54, 72],
        leftFoot: [43, 70], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'lymph_tapping',
    name: 'Light Lymph-Node Tapping',
    category: 'morning-lymph',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 60,
    restSeconds: 15,
    cues: [
      'Use relaxed soft fingertips with feather-light taps (no hard patting).',
      'Cycle gently: 15s under jawline, 15s behind ears, 30s below collarbones.',
      'Breathe slowly through your nose with relaxed mouth.'
    ],
    mistake: 'Pressing hard or aggressively striking sensitive glands.',
    easier: 'Light continuous circular brushing strokes with palms.',
    harder: 'Incorporate deep 4-second nasal inhalation while tapping.',
    muscles: ['Cervical & supraclavicular lymph vessels'],
    ytQuery: 'lymphatic tapping collarbone neck gentle drainage',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 15], neck: [50, 22],
        leftShoulder: [41, 26], rightShoulder: [59, 26],
        leftElbow: [34, 34], rightElbow: [66, 34],
        leftHand: [44, 25], rightHand: [56, 25],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 15], neck: [50, 22],
        leftShoulder: [41, 26], rightShoulder: [59, 26],
        leftElbow: [34, 32], rightElbow: [66, 32],
        leftHand: [45, 23], rightHand: [55, 23],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'spine_waves',
    name: 'Spine Waves',
    category: 'morning-lymph',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 45,
    restSeconds: 15,
    cues: [
      'Tuck chin, roll shoulders forward, and gently ripple through spine.',
      'Unfurl upward from pelvis, expanding chest and drawing shoulders back.',
      'Move like a slow, smooth ocean wave.'
    ],
    mistake: 'Snapping neck quickly or hyperextending lower lumbar.',
    easier: 'Small upper-chest roll with hands resting on thighs.',
    harder: 'Deeper hinge allowing the wave to flow down to knees.',
    muscles: ['Erector spinae', 'Thoracic extensors', 'Rectus abdominis'],
    ytQuery: 'standing spinal waves mobility exercise',
    poses: {
      environment: 'standing',
      start: {
        head: [46, 20], neck: [48, 25],
        leftShoulder: [43, 28], rightShoulder: [57, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [36, 55], rightHand: [64, 55],
        pelvis: [52, 53],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [54, 14], neck: [52, 21],
        leftShoulder: [43, 25], rightShoulder: [57, 25],
        leftElbow: [38, 38], rightElbow: [62, 38],
        leftHand: [36, 50], rightHand: [64, 50],
        pelvis: [48, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'zen_swing',
    name: 'Zen Swing (Torso Twists)',
    category: 'morning-lymph',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 45,
    restSeconds: 15,
    cues: [
      'Rotate torso side to side, letting relaxed arms wrap around waist.',
      'Allow the rear heel to pivot slightly off the floor with each twist.',
      'Gaze softly follows the direction of the rotation.'
    ],
    mistake: 'Planting knees rigidly and forcing torque into knee joints.',
    easier: 'Gentle slow turns with hands resting on hips.',
    harder: 'Longer fluid turns looking over shoulder on each swing.',
    muscles: ['Internal & external obliques', 'Thoracic spine', 'Shoulders'],
    ytQuery: 'empty coat sleeves qi gong zen swing torso twist',
    poses: {
      environment: 'standing',
      start: {
        head: [44, 15], neck: [47, 22],
        leftShoulder: [40, 26], rightShoulder: [56, 26],
        leftElbow: [30, 36], rightElbow: [48, 40],
        leftHand: [24, 46], rightHand: [40, 50],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [56, 15], neck: [53, 22],
        leftShoulder: [44, 26], rightShoulder: [60, 26],
        leftElbow: [52, 40], rightElbow: [70, 36],
        leftHand: [60, 50], rightHand: [76, 46],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'single_leg_side_swings',
    name: 'Single-Leg Side Swings (Wall Assist)',
    category: 'morning-lymph',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Place one palm firmly against a wall for solid balance.',
      'Swing the outside leg gently across front of body, then out to side.',
      'Switch legs halfway (20 seconds each side).'
    ],
    mistake: 'Tilting the whole upper torso drastically sideways.',
    easier: 'Smaller, slower leg sweeps keeping toe close to floor.',
    harder: 'Smooth rhythmic pendulum swing without pausing in the center.',
    muscles: ['Hip abductors', 'Adductors', 'Gluteus medius'],
    ytQuery: 'side to side leg swings warm up wall support',
    poses: {
      environment: 'wall',
      start: {
        head: [46, 15], neck: [47, 22],
        leftShoulder: [40, 26], rightShoulder: [56, 26],
        leftElbow: [26, 30], rightElbow: [62, 38],
        leftHand: [12, 32], rightHand: [60, 48],
        pelvis: [48, 52],
        leftKnee: [46, 72], rightKnee: [42, 70],
        leftFoot: [45, 94], rightFoot: [36, 88]
      },
      peak: {
        head: [46, 15], neck: [47, 22],
        leftShoulder: [40, 26], rightShoulder: [56, 26],
        leftElbow: [26, 30], rightElbow: [62, 38],
        leftHand: [12, 32], rightHand: [60, 48],
        pelvis: [48, 52],
        leftKnee: [46, 72], rightKnee: [64, 66],
        leftFoot: [45, 94], rightFoot: [76, 78]
      }
    }
  },

  // ==========================================
  // 2. FACE, JAW, NECK & SCALP (GENTLE ONLY)
  // ==========================================
  {
    id: 'jaw_stretch',
    name: 'Gentle Jaw Stretch',
    category: 'face-neck-wellness',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Relax face and lips completely.',
      'Drop jaw downward smoothly to a comfortable mild stretch (never force).',
      'Hold 5 seconds, close gently, and repeat 3-4 times.'
    ],
    mistake: 'Opening mouth aggressively or forcing sideways clicks.',
    easier: 'Very slight mouth opening with tip of tongue against roof of mouth.',
    harder: 'Hold gentle open position while taking slow 4-6 calm breaths.',
    muscles: ['Temporomandibular joint muscles', 'Lateral pterygoid'],
    ytQuery: 'gentle jaw stretch tmj tension relief',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 15], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'mouth_stretch',
    name: 'Gentle Mouth Stretch',
    category: 'face-neck-wellness',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Gently form a soft "O" shape with your lips.',
      'Transition smoothly into a gentle wide smile feeling light cheek stretch.',
      'Keep eyes and brow relaxed throughout.'
    ],
    mistake: 'Grimacing or clenching teeth together.',
    easier: 'Relax lips in neutral position and puff cheeks lightly with air.',
    harder: 'Pause 3 seconds at both the "O" and smile phases.',
    muscles: ['Orbicularis oris', 'Zygomaticus major'],
    ytQuery: 'facial muscle relaxation exercises gentle',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 15], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'masseter_release',
    name: 'Masseter Release (Fingertip Massage)',
    category: 'face-neck-wellness',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 45,
    restSeconds: 15,
    cues: [
      'Place 2-3 clean fingertips on your jaw muscles right below cheekbones.',
      'Make slow, tiny circular motions with light comforting pressure.',
      'Allow mouth to hang slightly open so the jaw is unclinched.'
    ],
    mistake: 'Pressing into tender bone or clenching jaw while massaging.',
    easier: 'Rest warm palms over the sides of jaw with zero friction.',
    harder: 'Slowly open jaw slightly wider while fingertips glide downward.',
    muscles: ['Masseter', 'Temporalis'],
    ytQuery: 'masseter muscle release massage jaw tension relief',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [35, 34], rightElbow: [65, 34],
        leftHand: [45, 18], rightHand: [55, 18],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [35, 35], rightElbow: [65, 35],
        leftHand: [45, 19], rightHand: [55, 19],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'cheek_stretch',
    name: 'Cheek Stretch (Gentle Puff)',
    category: 'face-neck-wellness',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Fill cheeks gently with a small pocket of air like blowing a bubble.',
      'Shift the air gently from the left cheek to the right cheek.',
      'Hold each side for 3 seconds, feeling light internal stretch.'
    ],
    mistake: 'Holding breath excessively or forcing too much pressure.',
    easier: 'Puff both cheeks evenly without shifting side to side.',
    harder: 'Smooth continuous figure-8 air shift across mouth.',
    muscles: ['Buccinator', 'Facial connective tissue'],
    ytQuery: 'buccinator stretch facial cheek puff exercise',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'eye_relaxation',
    name: 'Eye Relaxation (Palming & Circles)',
    category: 'face-neck-wellness',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 45,
    restSeconds: 15,
    cues: [
      'Rub palms together until warm, then cup gently over closed eyes.',
      'Do not press on eyeballs—create dark soothing warmth.',
      'Slowly trace 3 gentle eye circles clockwise, then 3 counter-clockwise.'
    ],
    mistake: 'Direct mechanical pressure on the eye globes.',
    easier: 'Simple stillness in palm darkness with closed eyes.',
    harder: 'Combine with slow 4-count inhale and 6-count exhale.',
    muscles: ['Extraocular muscles', 'Orbicularis oculi'],
    ytQuery: 'eye palming relaxation exercises screen fatigue',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 32], rightElbow: [64, 32],
        leftHand: [46, 15], rightHand: [54, 15],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 31], rightElbow: [64, 31],
        leftHand: [46, 14], rightHand: [54, 14],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'forehead_smoothing',
    name: 'Forehead Smoothing (Light Touch)',
    category: 'face-neck-wellness',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Rest clean fingertips at the center of your forehead.',
      'Glide fingers outward toward temples with light calming pressure.',
      'Release, return to center, and repeat smoothly.'
    ],
    mistake: 'Pulling skin downward or pressing hard enough to redden skin.',
    easier: 'Static gentle palm rest across the forehead.',
    harder: 'Add a gentle circular pause at the temples on each outward stroke.',
    muscles: ['Frontalis', 'Temporalis'],
    ytQuery: 'forehead relaxation massage tension headache relief',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [35, 30], rightElbow: [65, 30],
        leftHand: [48, 12], rightHand: [52, 12],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [34, 30], rightElbow: [66, 30],
        leftHand: [42, 13], rightHand: [58, 13],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'neck_flexor_stretch',
    name: 'Neck Flexor Stretch',
    category: 'face-neck-wellness',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Sit or stand tall with shoulders dropped away from ears.',
      'Gently tilt head back until you feel a mild stretch in the front of neck.',
      'Keep teeth together naturally (unclenched); breathe smoothly.'
    ],
    mistake: 'Throwing head back sharply or pinching back of neck.',
    easier: 'Place hands gently on collarbones to anchor the skin with minimal tilt.',
    harder: 'Slightly shift chin 5 degrees to left, hold 10s, then right 10s.',
    muscles: ['Platysma', 'Sternocleidomastoid'],
    ytQuery: 'anterior neck stretch platysma gentle',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [52, 13], neck: [50, 22],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'neck_extensor_stretch',
    name: 'Neck Extensor Stretch',
    category: 'face-neck-wellness',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Sit tall with shoulders relaxed downward.',
      'Drop chin softly toward chest until you feel mild stretch at base of skull.',
      'Rest fingertips lightly on back of head without pulling down.'
    ],
    mistake: 'Tugging on head with arm strength or rounding the upper back.',
    easier: 'Let gravity alone lower the head with arms resting at sides.',
    harder: 'Hold gentle stretch and take 3 deep diaphragmatic breaths.',
    muscles: ['Suboccipitals', 'Upper trapezius', 'Splenius capitis'],
    ytQuery: 'neck extensor stretch suboccipital release',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [48, 19], neck: [49, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [34, 30], rightElbow: [66, 30],
        leftHand: [46, 14], rightHand: [54, 14],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'neck_side_stretch',
    name: 'Neck Side Stretch',
    category: 'face-neck-wellness',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Lower right ear gently toward right shoulder (20s).',
      'Keep both shoulders down; reach left fingers lightly toward the floor.',
      'Switch sides at 20 seconds.'
    ],
    mistake: 'Hiking the shoulder up to meet the ear.',
    easier: 'Smaller tilt angle keeping hands anchored on thighs.',
    harder: 'Place opposite hand behind lower back to deepen trap release.',
    muscles: ['Upper trapezius', 'Scalenes', 'Levator scapulae'],
    ytQuery: 'neck lateral flexion stretch upper trapezius',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [54, 17], neck: [52, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 44], rightElbow: [62, 42],
        leftHand: [38, 58], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'neck_retraction',
    name: 'Neck Retraction / Chin Tucks',
    category: 'face-neck-wellness',
    type: 'reps',
    defaultSets: 2,
    defaultReps: 10,
    restSeconds: 20,
    cues: [
      'Look straight ahead with eyes level with the horizon.',
      'Slide head backward like making a subtle double chin.',
      'Hold 2 seconds at the end position, then return to neutral.'
    ],
    mistake: 'Tilting chin down to chest instead of gliding backward horizontally.',
    easier: 'Perform lying flat on back with a small pillow under head.',
    harder: 'Perform standing against a flat wall, gently touching back of head to wall.',
    muscles: ['Deep cervical flexors (Longus colli/capitis)', 'Suboccipitals'],
    ytQuery: 'chin tucks exercise posture physical therapy',
    poses: {
      environment: 'standing',
      start: {
        head: [54, 16], neck: [51, 23],
        leftShoulder: [42, 27], rightShoulder: [58, 27],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [48, 16], neck: [49, 23],
        leftShoulder: [42, 27], rightShoulder: [58, 27],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'neck_presses',
    name: 'Gentle Neck Presses (Hand Isometrics)',
    category: 'face-neck-wellness',
    type: 'reps',
    defaultSets: 1,
    defaultReps: 4,
    restSeconds: 20,
    cues: [
      'Place palm on forehead. Press head gently into palm at 20% effort (no movement occurs). Hold 5s.',
      'Repeat gently against back of head (5s), left temple (5s), and right temple (5s).',
      'Never exceed light, pain-free effort.'
    ],
    mistake: 'Straining with maximum force or causing neck shaking.',
    easier: 'Very light 10% pressure with eyes closed.',
    harder: 'Increase isometric hold time to 8 seconds at gentle 25% tension.',
    muscles: ['Cervical stabilizer muscles', 'Isometric neck posture chain'],
    ytQuery: 'isometric neck exercises physical therapy gentle',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [34, 30], rightElbow: [62, 42],
        leftHand: [47, 16], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'neck_acupressure',
    name: 'Neck Acupressure (Base of Skull)',
    category: 'face-neck-wellness',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 45,
    restSeconds: 15,
    cues: [
      'Find the hollow depressions at the base of the skull on both sides of spine (GB20).',
      'Apply gentle, sustained upward-inward thumb pressure.',
      'Breathe deeply and let shoulder muscles melt downward.'
    ],
    mistake: 'Digging sharply with fingernails or causing throbbing pain.',
    easier: 'Flat palm circular massage over the entire base of skull.',
    harder: 'Slowly nod chin up and down 1 inch while holding light pressure.',
    muscles: ['Suboccipitals', 'Upper cervical fascia'],
    ytQuery: 'gb20 acupressure suboccipital release headache tension',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [32, 28], rightElbow: [68, 28],
        leftHand: [45, 18], rightHand: [55, 18],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [32, 27], rightElbow: [68, 27],
        leftHand: [46, 18], rightHand: [54, 18],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'scalp_massage',
    name: 'Scalp Massage (Relaxing Circulation)',
    category: 'face-neck-wellness',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 90,
    restSeconds: 15,
    cues: [
      'Use finger pads (never nails) to make small slow circular motions over scalp.',
      'Move scalp tissue over the bone gently from hairline to crown to base.',
      'Finish with gentle outward earlobe stretch and slow calm breaths.'
    ],
    mistake: 'Pinching skin or scratching with nails.',
    easier: 'Light continuous palm sliding over hair without pressure.',
    harder: 'Full 2-minute unhurried session with eyes closed.',
    muscles: ['Galea aponeurotica', 'Temporoparietalis', 'Occipitofrontalis'],
    ytQuery: 'relaxing scalp massage finger pads tension relief',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [32, 24], rightElbow: [68, 24],
        leftHand: [44, 11], rightHand: [56, 11],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [31, 25], rightElbow: [69, 25],
        leftHand: [43, 13], rightHand: [57, 13],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },

  // ==========================================
  // 3. PUSH EXERCISES & PROGRESSIONS
  // ==========================================
  {
    id: 'wall_pushups',
    name: 'Wall Push-ups (Level 1)',
    category: 'push',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 15,
    restSeconds: 45,
    cues: [
      'Stand facing a wall, hands placed shoulder-width apart at chest height.',
      'Keep body in a rigid straight line from head to heels.',
      'Lower chest toward wall with elbows tucked at a 45-degree angle.',
      'Press through full palms to return to starting position.'
    ],
    mistake: 'Flaring elbows out to 90 degrees or sagging hips.',
    easier: 'Step feet closer to the wall (more upright angle).',
    harder: 'Step feet further back or slow down lowering to 3 seconds.',
    muscles: ['Pectoralis major', 'Triceps brachii', 'Anterior deltoid', 'Core'],
    ytQuery: 'wall push ups form beginner tutorial',
    poses: {
      environment: 'wall',
      start: {
        head: [36, 20], neck: [40, 26],
        leftShoulder: [42, 30], rightShoulder: [44, 30],
        leftElbow: [30, 32], rightElbow: [30, 32],
        leftHand: [18, 32], rightHand: [18, 32],
        pelvis: [56, 54],
        leftKnee: [68, 74], rightKnee: [70, 74],
        leftFoot: [80, 94], rightFoot: [82, 94]
      },
      peak: {
        head: [24, 20], neck: [28, 26],
        leftShoulder: [30, 30], rightShoulder: [32, 30],
        leftElbow: [36, 40], rightElbow: [36, 40],
        leftHand: [18, 32], rightHand: [18, 32],
        pelvis: [48, 54],
        leftKnee: [62, 74], rightKnee: [64, 74],
        leftFoot: [80, 94], rightFoot: [82, 94]
      }
    }
  },
  {
    id: 'incline_pushups',
    name: 'Incline Push-ups (Level 2)',
    category: 'push',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 12,
    restSeconds: 60,
    cues: [
      'Place hands on a sturdy kitchen counter, couch, or stable ledge.',
      'Brace core and squeeze glutes to keep body in one straight plank.',
      'Lower chest to edge of surface, keeping neck neutral.',
      'Push surface away firmly to lock out arms.'
    ],
    mistake: 'Piking hips into the air or letting lower back arch.',
    easier: 'Use a higher elevation (like high counter or upper table).',
    harder: 'Lower the incline (use a sturdy coffee table or low bench).',
    muscles: ['Pectoralis major', 'Triceps brachii', 'Serratus anterior', 'Core'],
    ytQuery: 'incline push ups bench counter beginner form',
    poses: {
      environment: 'elevated',
      start: {
        head: [32, 28], neck: [38, 33],
        leftShoulder: [42, 36], rightShoulder: [44, 36],
        leftElbow: [32, 48], rightElbow: [32, 48],
        leftHand: [22, 58], rightHand: [22, 58],
        pelvis: [58, 54],
        leftKnee: [72, 74], rightKnee: [74, 74],
        leftFoot: [86, 94], rightFoot: [88, 94]
      },
      peak: {
        head: [22, 46], neck: [28, 49],
        leftShoulder: [32, 52], rightShoulder: [34, 52],
        leftElbow: [36, 62], rightElbow: [36, 62],
        leftHand: [22, 58], rightHand: [22, 58],
        pelvis: [52, 64],
        leftKnee: [68, 79], rightKnee: [70, 79],
        leftFoot: [86, 94], rightFoot: [88, 94]
      }
    }
  },
  {
    id: 'knee_pushups',
    name: 'Knee Push-ups (Level 3)',
    category: 'push',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 10,
    restSeconds: 60,
    cues: [
      'Start on knees with hands directly under shoulders on floor.',
      'Create straight line from head through hips to knees.',
      'Lower chest until 2 inches above the ground.',
      'Press through palms while keeping core braced.'
    ],
    mistake: 'Bending at the hips with butt high in the air ("box pushup").',
    easier: 'Bring knees closer to hips (temporary regression for strength).',
    harder: 'Pause for 2 full seconds at bottom of every rep.',
    muscles: ['Pectoralis major', 'Triceps brachii', 'Deltoids', 'Core stabilizers'],
    ytQuery: 'knee pushups proper form common mistakes',
    poses: {
      environment: 'floor',
      start: {
        head: [30, 40], neck: [36, 44],
        leftShoulder: [40, 46], rightShoulder: [42, 46],
        leftElbow: [36, 62], rightElbow: [36, 62],
        leftHand: [34, 82], rightHand: [34, 82],
        pelvis: [58, 56],
        leftKnee: [76, 82], rightKnee: [78, 82],
        leftFoot: [88, 70], rightFoot: [90, 70]
      },
      peak: {
        head: [26, 64], neck: [32, 66],
        leftShoulder: [38, 68], rightShoulder: [40, 68],
        leftElbow: [44, 76], rightElbow: [44, 76],
        leftHand: [34, 82], rightHand: [34, 82],
        pelvis: [56, 72],
        leftKnee: [76, 82], rightKnee: [78, 82],
        leftFoot: [88, 70], rightFoot: [90, 70]
      }
    }
  },
  {
    id: 'negative_pushups',
    name: 'Negative Push-ups (Level 4)',
    category: 'push',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 8,
    restSeconds: 75,
    cues: [
      'Start in a tall full plank on toes.',
      'Lower yourself as slowly as possible (aim for 4 full seconds to reach floor).',
      'At the bottom, place knees down to reset back to top position effortlessly.'
    ],
    mistake: 'Crashing down onto the floor during the final 2 inches.',
    easier: '3-second descent on knees instead of toes.',
    harder: '5-second ultra-controlled descent with 1-second hover before floor.',
    muscles: ['Pectoralis major', 'Eccentric triceps', 'Shoulder stability', 'Core'],
    ytQuery: 'negative pushups eccentric pushups for beginners',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 42], neck: [30, 46],
        leftShoulder: [35, 48], rightShoulder: [37, 48],
        leftElbow: [32, 64], rightElbow: [32, 64],
        leftHand: [30, 82], rightHand: [30, 82],
        pelvis: [56, 56],
        leftKnee: [72, 68], rightKnee: [74, 68],
        leftFoot: [88, 82], rightFoot: [90, 82]
      },
      peak: {
        head: [22, 68], neck: [28, 70],
        leftShoulder: [34, 72], rightShoulder: [36, 72],
        leftElbow: [40, 78], rightElbow: [40, 78],
        leftHand: [30, 82], rightHand: [30, 82],
        pelvis: [54, 74],
        leftKnee: [72, 78], rightKnee: [74, 78],
        leftFoot: [88, 82], rightFoot: [90, 82]
      }
    }
  },
  {
    id: 'full_pushups',
    name: 'Full Push-ups (Level 5)',
    category: 'push',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 8,
    restSeconds: 75,
    cues: [
      'Hands slightly wider than shoulders, body in rock-solid plank.',
      'Inhale and lower until chest touches or hovers 1 inch above floor.',
      'Elbows track at 45 degrees relative to ribs (arrow shape, not T shape).',
      'Exhale and drive floor away to full extension.'
    ],
    mistake: 'Sagging hips or letting head jut forward toward the floor first.',
    easier: 'Drop knees to floor for the final 2 reps if form degrades.',
    harder: 'Add 2-second isometric pause at bottom.',
    muscles: ['Pectoralis major', 'Triceps', 'Anterior deltoids', 'Abdominals'],
    ytQuery: 'how to do proper push up form calisthenics',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 42], neck: [30, 46],
        leftShoulder: [35, 48], rightShoulder: [37, 48],
        leftElbow: [32, 64], rightElbow: [32, 64],
        leftHand: [30, 82], rightHand: [30, 82],
        pelvis: [56, 56],
        leftKnee: [72, 68], rightKnee: [74, 68],
        leftFoot: [88, 82], rightFoot: [90, 82]
      },
      peak: {
        head: [22, 68], neck: [28, 70],
        leftShoulder: [34, 72], rightShoulder: [36, 72],
        leftElbow: [40, 78], rightElbow: [40, 78],
        leftHand: [30, 82], rightHand: [30, 82],
        pelvis: [54, 74],
        leftKnee: [72, 78], rightKnee: [74, 78],
        leftFoot: [88, 82], rightFoot: [90, 82]
      }
    }
  },
  {
    id: 'decline_pushups',
    name: 'Decline Push-ups (Level 6)',
    category: 'push',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 10,
    restSeconds: 90,
    cues: [
      'Place feet on a sturdy couch, bed, or low chair; hands on floor.',
      'Keep core intensely tight to prevent lower back hyperextension.',
      'Lower chest smoothly to floor, then press back up.'
    ],
    mistake: 'Arching lower back like a banana.',
    easier: 'Lower the foot elevation to a 4-inch stack of books or pillows.',
    harder: 'Elevate feet higher onto sofa armrest.',
    muscles: ['Upper pectoralis (clavicular)', 'Deltoids', 'Triceps', 'Core'],
    ytQuery: 'decline push up proper form tutorial',
    poses: {
      environment: 'elevated',
      start: {
        head: [20, 56], neck: [26, 54],
        leftShoulder: [32, 52], rightShoulder: [34, 52],
        leftElbow: [30, 68], rightElbow: [30, 68],
        leftHand: [28, 82], rightHand: [28, 82],
        pelvis: [56, 44],
        leftKnee: [72, 38], rightKnee: [74, 38],
        leftFoot: [88, 34], rightFoot: [90, 34]
      },
      peak: {
        head: [18, 74], neck: [24, 72],
        leftShoulder: [30, 70], rightShoulder: [32, 70],
        leftElbow: [36, 78], rightElbow: [36, 78],
        leftHand: [28, 82], rightHand: [28, 82],
        pelvis: [54, 54],
        leftKnee: [72, 44], rightKnee: [74, 44],
        leftFoot: [88, 34], rightFoot: [90, 34]
      }
    }
  },
  {
    id: 'pike_pushups',
    name: 'Pike Push-ups (Shoulder Builder)',
    category: 'push',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 8,
    restSeconds: 60,
    cues: [
      'From downward dog pose, walk feet closer to hands so hips are high.',
      'Look between your toes, not at your hands.',
      'Lower head forward diagonally toward floor forming a tripod with hands.',
      'Push back up and away toward hips.'
    ],
    mistake: 'Letting elbows flare sideways or flattening back into standard pushup.',
    easier: 'Perform with hands elevated on a wall or couch edge with hips bent 90 degrees.',
    harder: 'Elevate feet onto low couch to load shoulders with more bodyweight.',
    muscles: ['Anterior & lateral deltoids', 'Triceps', 'Upper trapezius'],
    ytQuery: 'pike push up proper form beginner calisthenics',
    poses: {
      environment: 'floor',
      start: {
        head: [32, 54], neck: [36, 48],
        leftShoulder: [40, 44], rightShoulder: [42, 44],
        leftElbow: [36, 62], rightElbow: [36, 62],
        leftHand: [32, 82], rightHand: [32, 82],
        pelvis: [56, 28],
        leftKnee: [68, 54], rightKnee: [70, 54],
        leftFoot: [80, 82], rightFoot: [82, 82]
      },
      peak: {
        head: [26, 74], neck: [30, 68],
        leftShoulder: [36, 62], rightShoulder: [38, 62],
        leftElbow: [42, 74], rightElbow: [42, 74],
        leftHand: [32, 82], rightHand: [32, 82],
        pelvis: [56, 30],
        leftKnee: [68, 55], rightKnee: [70, 55],
        leftFoot: [80, 82], rightFoot: [82, 82]
      }
    }
  },
  {
    id: 'doorframe_presses',
    name: 'Doorframe / Wall Isometric Presses',
    category: 'push',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 5,
    restSeconds: 45,
    cues: [
      'Stand inside a sturdy doorframe with palms pressed against inner frame.',
      'Press outward and forward at 50-70% max effort.',
      'Hold the continuous isometric tension for 6 seconds per repetition.',
      'Breathe steadily; do not hold your breath.'
    ],
    mistake: 'Holding breath or shrugging shoulders up toward ears.',
    easier: 'Light 30% effort holds for 4 seconds.',
    harder: 'Maximum controlled 80% press with 8-second holds.',
    muscles: ['Pectoralis', 'Serratus anterior', 'Triceps isometrics'],
    ytQuery: 'doorframe isometric chest press safe',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [28, 32], rightElbow: [72, 32],
        leftHand: [18, 30], rightHand: [82, 30],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [27, 31], rightElbow: [73, 31],
        leftHand: [16, 29], rightHand: [84, 29],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'chair_tricep_dips',
    name: 'Chair Tricep Dips (Advanced / Supervised)',
    category: 'push',
    type: 'reps',
    defaultSets: 2,
    defaultReps: 8,
    restSeconds: 60,
    cues: [
      'SAFETY FIRST: Ensure chair is heavy, completely flush against a wall, and cannot slip.',
      'Keep back skimming close to the chair edge (never drift forward).',
      'Bend elbows to no more than 90 degrees.',
      'Press through heels of palms to lock out triceps.'
    ],
    mistake: 'Shoulders rolling forward or hips drifting away from chair (strains rotator cuff).',
    easier: 'Knees bent 90 degrees with feet flat on floor supporting 50% of weight.',
    harder: 'Legs extended straight with heels on floor.',
    muscles: ['Triceps brachii', 'Anterior deltoids', 'Lower pectoralis'],
    ytQuery: 'chair dips form safety shoulder position',
    poses: {
      environment: 'elevated',
      start: {
        head: [44, 26], neck: [44, 33],
        leftShoulder: [44, 38], rightShoulder: [46, 38],
        leftElbow: [36, 48], rightElbow: [36, 48],
        leftHand: [34, 58], rightHand: [34, 58],
        pelvis: [44, 60],
        leftKnee: [58, 66], rightKnee: [60, 66],
        leftFoot: [58, 94], rightFoot: [60, 94]
      },
      peak: {
        head: [44, 38], neck: [44, 45],
        leftShoulder: [44, 50], rightShoulder: [46, 50],
        leftElbow: [32, 48], rightElbow: [32, 48],
        leftHand: [34, 58], rightHand: [34, 58],
        pelvis: [44, 72],
        leftKnee: [58, 74], rightKnee: [60, 74],
        leftFoot: [58, 94], rightFoot: [60, 94]
      }
    }
  },
  {
    id: 'plank_shoulder_tap',
    name: 'Plank-to-Shoulder-Tap',
    category: 'push',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 12,
    restSeconds: 45,
    cues: [
      'Start in a tall plank with feet set wide (wider than shoulder width).',
      'Slowly lift right hand and tap left shoulder with zero hip sway.',
      'Plant hand quietly, then tap opposite side (12 total taps).'
    ],
    mistake: 'Rocking hips violently from side to side.',
    easier: 'Perform on knees with knees wide apart.',
    harder: 'Narrow feet closer together and pause 1 second on each shoulder tap.',
    muscles: ['Anti-rotational core', 'Shoulder stability', 'Triceps'],
    ytQuery: 'plank shoulder taps no hip movement form',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 42], neck: [30, 46],
        leftShoulder: [35, 48], rightShoulder: [37, 48],
        leftElbow: [32, 64], rightElbow: [32, 64],
        leftHand: [30, 82], rightHand: [30, 82],
        pelvis: [56, 56],
        leftKnee: [72, 68], rightKnee: [74, 68],
        leftFoot: [88, 82], rightFoot: [90, 82]
      },
      peak: {
        head: [24, 42], neck: [30, 46],
        leftShoulder: [35, 48], rightShoulder: [37, 48],
        leftElbow: [32, 64], rightElbow: [34, 56],
        leftHand: [30, 82], rightHand: [36, 50],
        pelvis: [56, 56],
        leftKnee: [72, 68], rightKnee: [74, 68],
        leftFoot: [88, 82], rightFoot: [90, 82]
      }
    }
  },

  // ==========================================
  // 4. PULL / BACK EXERCISES
  // ==========================================
  {
    id: 'inverted_rows',
    name: 'Inverted Rows (Sturdy Table or Towel Anchor)',
    category: 'pull',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 8,
    restSeconds: 75,
    cues: [
      'SAFETY CHECK: Test table with full body weight before beginning. It must never wobble.',
      'Lie under table, grip edge firmly with overhand grip.',
      'Pull chest up to table edge, squeezing shoulder blades together hard.',
      'Lower with control back to straight arms.'
    ],
    mistake: 'Letting hips sag toward floor or jerking with momentum.',
    easier: 'Bend knees 90 degrees with feet flat on floor (greatly reduces load).',
    harder: 'Straight legs with heels elevated slightly on a pillow.',
    muscles: ['Latissimus dorsi', 'Rhomboids', 'Biceps brachii', 'Rear deltoids'],
    ytQuery: 'inverted row under table home workout safety',
    poses: {
      environment: 'floor',
      start: {
        head: [26, 76], neck: [32, 74],
        leftShoulder: [38, 72], rightShoulder: [40, 72],
        leftElbow: [36, 58], rightElbow: [36, 58],
        leftHand: [34, 46], rightHand: [34, 46],
        pelvis: [56, 72],
        leftKnee: [72, 70], rightKnee: [74, 70],
        leftFoot: [88, 82], rightFoot: [90, 82]
      },
      peak: {
        head: [26, 58], neck: [32, 56],
        leftShoulder: [38, 54], rightShoulder: [40, 54],
        leftElbow: [42, 62], rightElbow: [42, 62],
        leftHand: [34, 46], rightHand: [34, 46],
        pelvis: [56, 56],
        leftKnee: [72, 68], rightKnee: [74, 68],
        leftFoot: [88, 82], rightFoot: [90, 82]
      }
    }
  },
  {
    id: 'superman_holds',
    name: 'Superman Holds',
    category: 'pull',
    type: 'hold',
    defaultSets: 3,
    defaultHoldSeconds: 25,
    restSeconds: 45,
    cues: [
      'Lie flat on your stomach with arms and legs extended long.',
      'Simultaneously lift chest and thighs 2-3 inches off the ground.',
      'Squeeze glutes and mid-back; look down at the floor to protect neck.',
      'Hold the steady arch and breathe smoothly.'
    ],
    mistake: 'Craning neck high into the air or holding breath.',
    easier: 'Lift only arms or only legs alternately.',
    harder: '30-second hold with arms in "W" shape squeezing shoulder blades.',
    muscles: ['Erector spinae', 'Gluteus maximus', 'Lower/mid trapezius'],
    ytQuery: 'superman hold back exercise proper form',
    poses: {
      environment: 'floor',
      start: {
        head: [22, 78], neck: [28, 80],
        leftShoulder: [34, 82], rightShoulder: [36, 82],
        leftElbow: [24, 82], rightElbow: [24, 82],
        leftHand: [14, 82], rightHand: [14, 82],
        pelvis: [56, 82],
        leftKnee: [72, 82], rightKnee: [74, 82],
        leftFoot: [88, 82], rightFoot: [90, 82]
      },
      peak: {
        head: [22, 64], neck: [28, 68],
        leftShoulder: [34, 72], rightShoulder: [36, 72],
        leftElbow: [22, 62], rightElbow: [22, 62],
        leftHand: [12, 54], rightHand: [12, 54],
        pelvis: [56, 82],
        leftKnee: [72, 74], rightKnee: [74, 74],
        leftFoot: [88, 66], rightFoot: [90, 66]
      }
    }
  },
  {
    id: 'prone_reverse_flys',
    name: 'Prone Reverse Flys (Y-T-W Raises)',
    category: 'pull',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 12,
    restSeconds: 45,
    cues: [
      'Lie face down on floor with forehead resting on a small rolled towel.',
      'Extend arms in "Y", "T", or "W" shape with thumbs pointing up.',
      'Squeeze shoulder blades together to hover hands 3 inches off floor.',
      'Lower under control; keep neck completely relaxed.'
    ],
    mistake: 'Using lower back arching instead of mid-back retraction.',
    easier: 'Perform bent over in a seated chair position.',
    harder: 'Hold each rep for 2 seconds at peak contraction.',
    muscles: ['Rhomboids', 'Middle trapezius', 'Lower trapezius', 'Rear deltoids'],
    ytQuery: 'prone y t w raises shoulder posture',
    poses: {
      environment: 'floor',
      start: {
        head: [26, 82], neck: [32, 82],
        leftShoulder: [38, 82], rightShoulder: [40, 82],
        leftElbow: [38, 76], rightElbow: [40, 76],
        leftHand: [38, 70], rightHand: [40, 70],
        pelvis: [56, 82],
        leftKnee: [72, 82], rightKnee: [74, 82],
        leftFoot: [88, 82], rightFoot: [90, 82]
      },
      peak: {
        head: [26, 80], neck: [32, 80],
        leftShoulder: [38, 78], rightShoulder: [40, 78],
        leftElbow: [36, 60], rightElbow: [42, 60],
        leftHand: [34, 46], rightHand: [44, 46],
        pelvis: [56, 82],
        leftKnee: [72, 82], rightKnee: [74, 82],
        leftFoot: [88, 82], rightFoot: [90, 82]
      }
    }
  },
  {
    id: 'doorframe_facepull',
    name: 'Doorframe / Towel Face-Pull Isometric',
    category: 'pull',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 6,
    restSeconds: 45,
    cues: [
      'Loop a strong towel around a door handle or grasp doorframe edges at eye level.',
      'Lean back slightly with straight arms.',
      'Pull elbows high and wide toward ears, externally rotating wrists.',
      'Hold peak squeeze for 5 seconds per rep.'
    ],
    mistake: 'Shrugging shoulders into ears instead of pulling rear delts.',
    easier: 'Stand nearly upright with minimal lean.',
    harder: 'Increase lean angle and hold peak squeeze for 7 seconds.',
    muscles: ['Rear deltoids', 'Infraspinatus', 'Teres minor', 'Rhomboids'],
    ytQuery: 'towel face pull home workout rear deltoids',
    poses: {
      environment: 'wall',
      start: {
        head: [44, 22], neck: [44, 29],
        leftShoulder: [44, 34], rightShoulder: [46, 34],
        leftElbow: [32, 38], rightElbow: [32, 38],
        leftHand: [18, 42], rightHand: [18, 42],
        pelvis: [52, 54],
        leftKnee: [62, 74], rightKnee: [64, 74],
        leftFoot: [74, 94], rightFoot: [76, 94]
      },
      peak: {
        head: [36, 22], neck: [36, 29],
        leftShoulder: [36, 34], rightShoulder: [38, 34],
        leftElbow: [44, 26], rightElbow: [44, 26],
        leftHand: [26, 36], rightHand: [26, 36],
        pelvis: [48, 54],
        leftKnee: [60, 74], rightKnee: [62, 74],
        leftFoot: [74, 94], rightFoot: [76, 94]
      }
    }
  },
  {
    id: 'shoulder_blade_squeezes',
    name: 'Shoulder Blade Squeezes',
    category: 'pull',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 12,
    restSeconds: 30,
    cues: [
      'Stand or sit tall with arms bent 90 degrees at your sides like a waiter.',
      'Pull elbows and thumbs backward, squeezing an imaginary pencil between shoulder blades.',
      'Hold the squeeze for 3 seconds, then release smoothly.'
    ],
    mistake: 'Arching lower back instead of moving shoulder blades.',
    easier: 'Smaller squeeze with hands resting on hips.',
    harder: '5-second squeeze with arms held in goalpost position.',
    muscles: ['Rhomboids', 'Middle trapezius', 'Postural stabilizers'],
    ytQuery: 'scapular retraction exercises posture',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 42], rightElbow: [64, 42],
        leftHand: [36, 54], rightHand: [64, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [43, 28], rightShoulder: [57, 28],
        leftElbow: [32, 44], rightElbow: [68, 44],
        leftHand: [24, 46], rightHand: [76, 46],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'reverse_snow_angels',
    name: 'Reverse Snow Angels',
    category: 'pull',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 10,
    restSeconds: 45,
    cues: [
      'Lie face down on the floor with arms at your sides, thumbs pointing up.',
      'Lift hands 2 inches off floor and slowly sweep arms overhead in wide arc.',
      'Keep shoulder blades pinched throughout the entire movement.',
      'Sweep back down to thighs and repeat without hands touching floor.'
    ],
    mistake: 'Letting hands drag on the carpet or tensing the neck.',
    easier: 'Sweep arms only halfway up (to shoulder height).',
    harder: 'Pause 2 seconds overhead on every rep.',
    muscles: ['Posterior chain', 'Trapezius (all fibers)', 'Lats', 'Rotator cuff'],
    ytQuery: 'prone reverse snow angels exercise form',
    poses: {
      environment: 'floor',
      start: {
        head: [26, 82], neck: [32, 82],
        leftShoulder: [38, 82], rightShoulder: [40, 82],
        leftElbow: [46, 76], rightElbow: [46, 76],
        leftHand: [54, 76], rightHand: [54, 76],
        pelvis: [56, 82],
        leftKnee: [72, 82], rightKnee: [74, 82],
        leftFoot: [88, 82], rightFoot: [90, 82]
      },
      peak: {
        head: [26, 82], neck: [32, 82],
        leftShoulder: [38, 82], rightShoulder: [40, 82],
        leftElbow: [26, 70], rightElbow: [26, 70],
        leftHand: [16, 64], rightHand: [16, 64],
        pelvis: [56, 82],
        leftKnee: [72, 82], rightKnee: [74, 82],
        leftFoot: [88, 82], rightFoot: [90, 82]
      }
    }
  },
  {
    id: 'wall_lateral_isometric',
    name: 'Lateral Raises (Isometric Wall Presses)',
    category: 'pull',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 5,
    restSeconds: 40,
    cues: [
      'Stand sideways with outside of forearm and elbow against a wall.',
      'Press outward into the wall as if raising your arm sideways.',
      'Hold firm 5-second press at 50% effort, switch arms after 5 reps.'
    ],
    mistake: 'Tilting body sideways instead of pressing with deltoid.',
    easier: 'Light 30% pressure with 3-second holds.',
    harder: '7-second maximum isometric press.',
    muscles: ['Lateral deltoid', 'Supraspinatus', 'Shoulder girdle'],
    ytQuery: 'isometric lateral raise wall shoulder strengthening',
    poses: {
      environment: 'wall',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 42], rightElbow: [70, 36],
        leftHand: [36, 54], rightHand: [80, 36],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 42], rightElbow: [71, 35],
        leftHand: [36, 54], rightHand: [82, 35],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },

  // ==========================================
  // 5. LEGS
  // ==========================================
  {
    id: 'bodyweight_squats',
    name: 'Bodyweight Squats',
    category: 'legs',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 12,
    restSeconds: 60,
    cues: [
      'Stand with feet shoulder-width apart, toes turned out 15 degrees.',
      'Send hips back and down like sitting into a sturdy chair.',
      'Keep chest proud and knees tracking in line with toes.',
      'Drive through mid-foot and heels to stand tall.'
    ],
    mistake: 'Knees caving inward (valgus collapse) or heels lifting.',
    easier: 'Box squat: sit down onto a dining chair and stand back up.',
    harder: 'Pause for 3 full seconds in the bottom squat position.',
    muscles: ['Quadriceps', 'Gluteus maximus', 'Hamstrings', 'Adductors'],
    ytQuery: 'bodyweight squats beginner proper form',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 15], neck: [50, 22],
        leftShoulder: [41, 26], rightShoulder: [59, 26],
        leftElbow: [36, 38], rightElbow: [64, 38],
        leftHand: [45, 34], rightHand: [55, 34],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [44, 94], rightFoot: [56, 94]
      },
      peak: {
        head: [46, 36], neck: [46, 43],
        leftShoulder: [40, 47], rightShoulder: [54, 47],
        leftElbow: [36, 52], rightElbow: [58, 52],
        leftHand: [44, 46], rightHand: [52, 46],
        pelvis: [44, 68],
        leftKnee: [34, 68], rightKnee: [58, 68],
        leftFoot: [44, 94], rightFoot: [56, 94]
      }
    }
  },
  {
    id: 'lunges',
    name: 'Stationary Reverse Lunges',
    category: 'legs',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 10,
    restSeconds: 60,
    cues: [
      'Step one foot straight back and lower until both knees bend ~90 degrees.',
      'Keep front knee directly above front ankle.',
      'Torso remains upright and core braced.',
      'Push through front heel to step back to starting position.'
    ],
    mistake: 'Front knee shooting far past toes or rear knee slamming into floor.',
    easier: 'Hold a chair or wall for fingertip balance.',
    harder: 'Deficit reverse lunge: front foot on 2-inch elevated surface.',
    muscles: ['Quadriceps', 'Gluteus maximus', 'Hamstrings', 'Calves'],
    ytQuery: 'reverse lunges proper form beginner home',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 15], neck: [50, 22],
        leftShoulder: [44, 27], rightShoulder: [56, 27],
        leftElbow: [42, 38], rightElbow: [58, 38],
        leftHand: [44, 48], rightHand: [56, 48],
        pelvis: [50, 52],
        leftKnee: [48, 72], rightKnee: [52, 72],
        leftFoot: [48, 94], rightFoot: [52, 94]
      },
      peak: {
        head: [46, 26], neck: [46, 33],
        leftShoulder: [42, 38], rightShoulder: [50, 38],
        leftElbow: [42, 48], rightElbow: [50, 48],
        leftHand: [44, 58], rightHand: [48, 58],
        pelvis: [46, 62],
        leftKnee: [38, 64], rightKnee: [64, 76],
        leftFoot: [38, 94], rightFoot: [78, 90]
      }
    }
  },
  {
    id: 'bulgarian_split_squats',
    name: 'Bulgarian Split Squats (Wall Assisted)',
    category: 'legs',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 8,
    restSeconds: 60,
    cues: [
      'Place rear foot toes-down on a low sofa or chair; keep front foot forward.',
      'Lightly touch nearby wall with fingertip for safe stability.',
      'Lower hips straight down until front thigh is parallel to floor.',
      'Drive up through the front heel.'
    ],
    mistake: 'Front foot too close to chair, crowding the front knee.',
    easier: 'Standard split squat with rear foot flat on the floor.',
    harder: 'Hands on hips with zero wall support and 2-second bottom pause.',
    muscles: ['Quadriceps', 'Gluteus medius/maximus', 'Hip stabilizers'],
    ytQuery: 'bulgarian split squat proper form home',
    poses: {
      environment: 'elevated',
      start: {
        head: [44, 20], neck: [44, 27],
        leftShoulder: [40, 32], rightShoulder: [48, 32],
        leftElbow: [36, 42], rightElbow: [52, 42],
        leftHand: [38, 52], rightHand: [50, 52],
        pelvis: [44, 54],
        leftKnee: [40, 72], rightKnee: [62, 58],
        leftFoot: [40, 94], rightFoot: [78, 56]
      },
      peak: {
        head: [44, 34], neck: [44, 41],
        leftShoulder: [40, 46], rightShoulder: [48, 46],
        leftElbow: [36, 56], rightElbow: [52, 56],
        leftHand: [38, 66], rightHand: [50, 66],
        pelvis: [44, 68],
        leftKnee: [34, 68], rightKnee: [58, 76],
        leftFoot: [36, 94], rightFoot: [78, 56]
      }
    }
  },
  {
    id: 'jump_squats',
    name: 'Jump Squats (Soft Landings - Late Phase)',
    category: 'legs',
    type: 'reps',
    defaultSets: 2,
    defaultReps: 8,
    restSeconds: 75,
    cues: [
      'SAFETY NOTE: Only introduced in Phase 3 after joint conditioning.',
      'Squat down to parallel, then explode upward into a low 2-4 inch jump.',
      'Land silently on the balls of feet and absorb smoothly into next squat.',
      'If you hear a loud thud, jump lower and absorb deeper.'
    ],
    mistake: 'Stiff-legged landing or landing on flat heels.',
    easier: 'Speed squats with fast calf raise at the top (no jump).',
    harder: 'Jump higher with immediate smooth transition into next rep.',
    muscles: ['Fast-twitch quadriceps', 'Glutes', 'Calves', 'Cardiovascular'],
    ytQuery: 'jump squats soft landing form beginners',
    poses: {
      environment: 'standing',
      start: {
        head: [46, 36], neck: [46, 43],
        leftShoulder: [40, 47], rightShoulder: [54, 47],
        leftElbow: [36, 52], rightElbow: [58, 52],
        leftHand: [44, 46], rightHand: [52, 46],
        pelvis: [44, 68],
        leftKnee: [34, 68], rightKnee: [58, 68],
        leftFoot: [44, 94], rightFoot: [56, 94]
      },
      peak: {
        head: [50, 10], neck: [50, 17],
        leftShoulder: [41, 21], rightShoulder: [59, 21],
        leftElbow: [34, 34], rightElbow: [66, 34],
        leftHand: [30, 46], rightHand: [70, 46],
        pelvis: [50, 46],
        leftKnee: [47, 66], rightKnee: [53, 66],
        leftFoot: [46, 84], rightFoot: [54, 84]
      }
    }
  },
  {
    id: 'calf_raises',
    name: 'Calf Raises',
    category: 'legs',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 15,
    restSeconds: 30,
    cues: [
      'Stand tall with feet hip-width apart; rest hands on wall for balance.',
      'Rise as high as possible onto the balls of your big and second toes.',
      'Hold the peak contraction for 1 full second.',
      'Lower heels slowly over 2 seconds.'
    ],
    mistake: 'Rolling ankles outward onto pinky toes or bouncing quickly.',
    easier: 'Perform seated in a chair with hands pressing down on knees.',
    harder: 'Single-leg calf raises (10 reps each leg).',
    muscles: ['Gastrocnemius', 'Soleus', 'Ankle stabilizers'],
    ytQuery: 'standing calf raises proper form',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 23],
        leftShoulder: [42, 27], rightShoulder: [58, 27],
        leftElbow: [36, 40], rightElbow: [64, 40],
        leftHand: [36, 52], rightHand: [64, 52],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 11], neck: [50, 18],
        leftShoulder: [42, 22], rightShoulder: [58, 22],
        leftElbow: [36, 35], rightElbow: [64, 35],
        leftHand: [36, 47], rightHand: [64, 47],
        pelvis: [50, 47],
        leftKnee: [46, 67], rightKnee: [54, 67],
        leftFoot: [45, 87], rightFoot: [55, 87]
      }
    }
  },
  {
    id: 'wall_sit',
    name: 'Wall Sit Hold',
    category: 'legs',
    type: 'hold',
    defaultSets: 3,
    defaultHoldSeconds: 35,
    restSeconds: 60,
    cues: [
      'Lean back against a flat wall and slide down until thighs are parallel to floor.',
      'Knees bent 90 degrees directly above ankles.',
      'Press entire back and shoulders flat against wall; hands resting on thighs or at sides.',
      'Breathe steadily; do not hold your breath.'
    ],
    mistake: 'Hands pushing on knees to take off weight or feet sliding forward.',
    easier: 'Sit higher on the wall at a 45-degree angle.',
    harder: 'Increase hold time to 50 seconds or lift one heel 1 inch.',
    muscles: ['Quadriceps isometric', 'Glutes', 'Calves', 'Adductors'],
    ytQuery: 'how to do proper wall sit exercise',
    poses: {
      environment: 'wall',
      start: {
        head: [42, 30], neck: [42, 37],
        leftShoulder: [42, 42], rightShoulder: [44, 42],
        leftElbow: [42, 54], rightElbow: [44, 54],
        leftHand: [46, 64], rightHand: [48, 64],
        pelvis: [42, 64],
        leftKnee: [58, 64], rightKnee: [60, 64],
        leftFoot: [58, 94], rightFoot: [60, 94]
      },
      peak: {
        head: [42, 30], neck: [42, 37],
        leftShoulder: [42, 42], rightShoulder: [44, 42],
        leftElbow: [42, 54], rightElbow: [44, 54],
        leftHand: [46, 64], rightHand: [48, 64],
        pelvis: [42, 64],
        leftKnee: [58, 64], rightKnee: [60, 64],
        leftFoot: [58, 94], rightFoot: [60, 94]
      }
    }
  },
  {
    id: 'glute_bridge',
    name: 'Glute Bridge',
    category: 'legs',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 12,
    restSeconds: 45,
    cues: [
      'Lie on back with knees bent and feet flat on floor hip-width apart.',
      'Drive through heels and squeeze glutes hard to lift hips toward ceiling.',
      'Create a straight diagonal line from knees through hips to shoulders.',
      'Hold 1 second at top, lower slowly without touching floor, and repeat.'
    ],
    mistake: 'Arching lower back instead of squeezing glutes.',
    easier: 'Smaller hip lift or resting hips fully on floor between reps.',
    harder: '3-second squeeze at top with heels elevated on low books.',
    muscles: ['Gluteus maximus', 'Hamstrings', 'Core', 'Erector spinae'],
    ytQuery: 'glute bridge exercise proper form',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [54, 82],
        leftKnee: [70, 64], rightKnee: [72, 64],
        leftFoot: [76, 82], rightFoot: [78, 82]
      },
      peak: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [54, 58],
        leftKnee: [70, 58], rightKnee: [72, 58],
        leftFoot: [76, 82], rightFoot: [78, 82]
      }
    }
  },
  {
    id: 'single_leg_glute_bridge',
    name: 'Single-Leg Glute Bridge (Later Phase)',
    category: 'legs',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 8,
    restSeconds: 45,
    cues: [
      'Lie on back, lift one leg straight in line with opposite thigh.',
      'Drive through grounded heel to raise hips evenly without tilting pelvis.',
      'Hold top squeeze for 1 second; do all reps then switch legs.'
    ],
    mistake: 'Pelvis tilting or sagging toward the unsupported side.',
    easier: 'Cross non-working ankle over opposite knee (figure-4 bridge).',
    harder: 'Pause for 3 full seconds at the top of every rep.',
    muscles: ['Gluteus maximus', 'Hamstrings', 'Pelvic stabilizers'],
    ytQuery: 'single leg glute bridge proper form',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [54, 82],
        leftKnee: [70, 64], rightKnee: [62, 58],
        leftFoot: [76, 82], rightFoot: [74, 46]
      },
      peak: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [54, 58],
        leftKnee: [70, 58], rightKnee: [64, 44],
        leftFoot: [76, 82], rightFoot: [78, 32]
      }
    }
  },

  // ==========================================
  // 6. CORE
  // ==========================================
  {
    id: 'plank',
    name: 'Forearm Plank',
    category: 'core',
    type: 'hold',
    defaultSets: 3,
    defaultHoldSeconds: 30,
    restSeconds: 45,
    cues: [
      'Place forearms on floor with elbows directly beneath shoulders.',
      'Tuck pelvis slightly (posterior tilt), squeeze glutes, and brace abs.',
      'Keep head neutral, gazing between hands.',
      'Breathe steadily into the belly without letting hips sag.'
    ],
    mistake: 'Hips drooping down or piking up into a triangle.',
    easier: 'Perform plank with knees on floor.',
    harder: 'Increase hold to 45-60 seconds or reach one arm forward alternately.',
    muscles: ['Transverse abdominis', 'Rectus abdominis', 'Glutes', 'Serratus'],
    ytQuery: 'how to do forearm plank proper form',
    poses: {
      environment: 'floor',
      start: {
        head: [22, 60], neck: [28, 62],
        leftShoulder: [34, 64], rightShoulder: [36, 64],
        leftElbow: [34, 82], rightElbow: [36, 82],
        leftHand: [44, 82], rightHand: [46, 82],
        pelvis: [56, 66],
        leftKnee: [72, 74], rightKnee: [74, 74],
        leftFoot: [88, 82], rightFoot: [90, 82]
      },
      peak: {
        head: [22, 60], neck: [28, 62],
        leftShoulder: [34, 64], rightShoulder: [36, 64],
        leftElbow: [34, 82], rightElbow: [36, 82],
        leftHand: [44, 82], rightHand: [46, 82],
        pelvis: [56, 66],
        leftKnee: [72, 74], rightKnee: [74, 74],
        leftFoot: [88, 82], rightFoot: [90, 82]
      }
    }
  },
  {
    id: 'floor_leg_raises',
    name: 'Floor Leg Raises (Bent-Knee First)',
    category: 'core',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 10,
    restSeconds: 45,
    cues: [
      'Lie flat on back with lower back firmly pressed into the floor.',
      'Bend knees at 90 degrees, raise thighs to vertical.',
      'Tap heels lightly to floor while maintaining lower back contact.',
      'Exhale as you pull knees back over hips.'
    ],
    mistake: 'Allowing lower back to arch off the floor.',
    easier: 'Tap one heel down at a time (alternating heel taps).',
    harder: 'Extend legs straight out to 45 degrees as strength builds.',
    muscles: ['Lower rectus abdominis', 'Transverse abdominis', 'Hip flexors'],
    ytQuery: 'bent knee leg raises lower abs exercise',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [54, 82],
        leftKnee: [54, 56], rightKnee: [56, 56],
        leftFoot: [70, 56], rightFoot: [72, 56]
      },
      peak: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [54, 82],
        leftKnee: [64, 72], rightKnee: [66, 72],
        leftFoot: [78, 80], rightFoot: [80, 80]
      }
    }
  },
  {
    id: 'russian_twists',
    name: 'Seated Russian Twists',
    category: 'core',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 16,
    restSeconds: 45,
    cues: [
      'Sit on floor with knees bent and heels lightly touching ground.',
      'Lean torso back 45 degrees with chest open and flat spine.',
      'Rotate shoulders to tap fingertips to floor on right side, then left side.',
      'Move with control—do not fling arms wildly.'
    ],
    mistake: 'Rounding back into a C-curve or twisting only the arms.',
    easier: 'Keep feet flat on floor and perform smaller torso turns.',
    harder: 'Hover feet 2 inches off the floor (balance on sit bones).',
    muscles: ['Internal & external obliques', 'Transverse abdominis', 'Hip flexors'],
    ytQuery: 'russian twists proper form beginner',
    poses: {
      environment: 'floor',
      start: {
        head: [36, 44], neck: [40, 50],
        leftShoulder: [44, 54], rightShoulder: [46, 54],
        leftElbow: [38, 62], rightElbow: [48, 64],
        leftHand: [34, 70], rightHand: [46, 74],
        pelvis: [52, 78],
        leftKnee: [68, 66], rightKnee: [70, 66],
        leftFoot: [80, 82], rightFoot: [82, 82]
      },
      peak: {
        head: [36, 44], neck: [40, 50],
        leftShoulder: [44, 54], rightShoulder: [46, 54],
        leftElbow: [48, 64], rightElbow: [58, 62],
        leftHand: [46, 74], rightHand: [58, 70],
        pelvis: [52, 78],
        leftKnee: [68, 66], rightKnee: [70, 66],
        leftFoot: [80, 82], rightFoot: [82, 82]
      }
    }
  },
  {
    id: 'crunches',
    name: 'Controlled Abdominal Crunches',
    category: 'core',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 12,
    restSeconds: 30,
    cues: [
      'Lie on back with knees bent and feet flat on floor.',
      'Fingertips resting lightly behind ears (never pull head).',
      'Exhale and curl upper shoulder blades 2 inches off floor.',
      'Pause 1 second at top, then lower slowly.'
    ],
    mistake: 'Yanking on the neck or lifting the whole lower back.',
    easier: 'Arms crossed across chest.',
    harder: '2-second hold at top of each rep with knees raised at 90 degrees.',
    muscles: ['Upper rectus abdominis'],
    ytQuery: 'proper crunch form safe for neck',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [30, 74], rightElbow: [30, 74],
        leftHand: [26, 76], rightHand: [26, 76],
        pelvis: [54, 82],
        leftKnee: [70, 64], rightKnee: [72, 64],
        leftFoot: [76, 82], rightFoot: [78, 82]
      },
      peak: {
        head: [28, 70], neck: [34, 72],
        leftShoulder: [40, 76], rightShoulder: [42, 76],
        leftElbow: [32, 68], rightElbow: [32, 68],
        leftHand: [28, 70], rightHand: [28, 70],
        pelvis: [54, 82],
        leftKnee: [70, 64], rightKnee: [72, 64],
        leftFoot: [76, 82], rightFoot: [78, 82]
      }
    }
  },
  {
    id: 'dead_bug',
    name: 'Dead Bug',
    category: 'core',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 12,
    restSeconds: 45,
    cues: [
      'Lie on back with arms pointing to ceiling and knees at 90 degrees above hips.',
      'Press lower back firmly into the floor (no space under lumbar).',
      'Slowly lower right arm and left leg toward floor simultaneously.',
      'Return to center and switch to opposite limbs.'
    ],
    mistake: 'Allowing lower back to arch as limbs descend.',
    easier: 'Move only the arms or only the legs first.',
    harder: 'Straighten legs fully and hover 2 inches from floor for 1 second.',
    muscles: ['Deep transverse abdominis', 'Obliques', 'Pelvic stabilizers'],
    ytQuery: 'dead bug exercise proper form core stability',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 68], rightElbow: [38, 68],
        leftHand: [36, 54], rightHand: [38, 54],
        pelvis: [54, 82],
        leftKnee: [54, 62], rightKnee: [56, 62],
        leftFoot: [68, 62], rightFoot: [70, 62]
      },
      peak: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [30, 82], rightElbow: [38, 68],
        leftHand: [20, 82], rightHand: [38, 54],
        pelvis: [54, 82],
        leftKnee: [54, 62], rightKnee: [68, 76],
        leftFoot: [68, 62], rightFoot: [84, 80]
      }
    }
  },
  {
    id: 'bird_dog',
    name: 'Bird Dog',
    category: 'core',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 10,
    restSeconds: 30,
    cues: [
      'Start on hands and knees with wrists under shoulders and knees under hips.',
      'Slowly extend right arm forward and left leg backward until parallel to floor.',
      'Keep hips square to the ground—do not let pelvis rotate.',
      'Hold 1 second, return with control, and alternate sides.'
    ],
    mistake: 'Sagging lower back or kicking leg way too high.',
    easier: 'Lift only one arm or one leg at a time.',
    harder: 'Hold each extension for 3 seconds with a slight glute squeeze.',
    muscles: ['Multifidus', 'Erector spinae', 'Gluteus maximus', 'Core'],
    ytQuery: 'bird dog exercise physical therapy form',
    poses: {
      environment: 'floor',
      start: {
        head: [30, 52], neck: [36, 54],
        leftShoulder: [42, 56], rightShoulder: [44, 56],
        leftElbow: [42, 68], rightElbow: [44, 68],
        leftHand: [42, 82], rightHand: [44, 82],
        pelvis: [60, 56],
        leftKnee: [60, 72], rightKnee: [62, 72],
        leftFoot: [60, 82], rightFoot: [62, 82]
      },
      peak: {
        head: [30, 52], neck: [36, 54],
        leftShoulder: [42, 56], rightShoulder: [44, 56],
        leftElbow: [32, 54], rightElbow: [44, 68],
        leftHand: [20, 54], rightHand: [44, 82],
        pelvis: [60, 56],
        leftKnee: [60, 72], rightKnee: [72, 56],
        leftFoot: [60, 82], rightFoot: [86, 56]
      }
    }
  },
  {
    id: 'reverse_crunch',
    name: 'Reverse Crunch',
    category: 'core',
    type: 'reps',
    defaultSets: 3,
    defaultReps: 10,
    restSeconds: 45,
    cues: [
      'Lie flat on back with arms resting at sides, knees bent 90 degrees.',
      'Use lower abs to curl hips 2-3 inches off the floor toward ribs.',
      'Avoid swinging legs to create momentum.',
      'Lower hips back to the floor slowly.'
    ],
    mistake: 'Kicking feet toward ceiling with leg momentum.',
    easier: 'Place hands slightly under hips for lumbar support.',
    harder: '3-second controlled descent back to floor on each rep.',
    muscles: ['Lower rectus abdominis', 'Internal obliques'],
    ytQuery: 'reverse crunch proper form home workout',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [54, 82],
        leftKnee: [54, 60], rightKnee: [56, 60],
        leftFoot: [68, 60], rightFoot: [70, 60]
      },
      peak: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [48, 72],
        leftKnee: [42, 52], rightKnee: [44, 52],
        leftFoot: [54, 52], rightFoot: [56, 52]
      }
    }
  },
  {
    id: 'hollow_hold',
    name: 'Hollow Body Hold (Late Phase)',
    category: 'core',
    type: 'hold',
    defaultSets: 3,
    defaultHoldSeconds: 20,
    restSeconds: 60,
    cues: [
      'Lie on back and glue your lower back flat against the floor.',
      'Lift shoulders and legs a few inches off floor into a shallow banana shape.',
      'Reach arms backward by ears (or forward to hips if beginning).',
      'Breathe steadily; terminate immediately if lower back peels off floor.'
    ],
    mistake: 'Arching lower back off the ground (strains lumbar spine).',
    easier: 'Tuck one knee into chest with arms reaching forward.',
    harder: 'Full gymnastics hollow body with arms long overhead for 30s.',
    muscles: ['Anterior core chain', 'Transverse abdominis', 'Hip flexors'],
    ytQuery: 'hollow body hold gymnastics calisthenics form',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [54, 82],
        leftKnee: [70, 82], rightKnee: [72, 82],
        leftFoot: [84, 82], rightFoot: [86, 82]
      },
      peak: {
        head: [22, 70], neck: [28, 72],
        leftShoulder: [36, 76], rightShoulder: [38, 76],
        leftElbow: [28, 68], rightElbow: [28, 68],
        leftHand: [18, 64], rightHand: [18, 64],
        pelvis: [54, 82],
        leftKnee: [68, 74], rightKnee: [70, 74],
        leftFoot: [84, 68], rightFoot: [86, 68]
      }
    }
  },

  // ==========================================
  // 7. STRETCHES – POSTURE
  // ==========================================
  {
    id: 'chest_opener',
    name: 'Chest Opener (Doorway / Standing)',
    category: 'stretches-posture',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Interlace fingers behind lower back or rest forearms against a doorframe.',
      'Roll shoulders down and back, expanding chest forward gently.',
      'Hold mild tension without forcing.',
      'Take 3 slow deep breaths into the collarbones.'
    ],
    mistake: 'Arching lower back sharply to fake chest flexibility.',
    easier: 'Hold a small towel between hands behind back if shoulders are tight.',
    harder: 'Gently lift hands 2 inches away from hips while breathing.',
    muscles: ['Pectoralis minor & major', 'Anterior deltoids'],
    ytQuery: 'doorway chest stretch posture opener',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 40], rightElbow: [64, 40],
        leftHand: [46, 50], rightHand: [54, 50],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 14], neck: [50, 22],
        leftShoulder: [42, 26], rightShoulder: [58, 26],
        leftElbow: [34, 42], rightElbow: [66, 42],
        leftHand: [47, 46], rightHand: [53, 46],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'thoracic_extension',
    name: 'Thoracic Extension (Chair / Floor)',
    category: 'stretches-posture',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 35,
    restSeconds: 15,
    cues: [
      'Sit tall in a sturdy chair with hands behind head supporting neck.',
      'Gently arch upper back over the top of chair backrest.',
      'Focus extension strictly in mid/upper back, not lower lumbar.',
      'Breathe deeply into upper ribs.'
    ],
    mistake: 'Craning neck backward or hinging sharply at the lower back.',
    easier: 'Perform on floor over a small rolled towel under upper shoulder blades.',
    harder: 'Exhale fully at peak stretch to allow ribs to settle.',
    muscles: ['Thoracic spine extensors', 'Intercostal muscles'],
    ytQuery: 'thoracic extension over chair back mobility',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [32, 24], rightElbow: [68, 24],
        leftHand: [46, 18], rightHand: [54, 18],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [53, 14], neck: [51, 22],
        leftShoulder: [42, 27], rightShoulder: [58, 27],
        leftElbow: [28, 22], rightElbow: [72, 22],
        leftHand: [47, 16], rightHand: [53, 16],
        pelvis: [48, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'upper_back_stretch',
    name: 'Upper Back & Rhomboid Stretch',
    category: 'stretches-posture',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Interlace fingers in front of chest at shoulder height.',
      'Turn palms outward and round upper back gently forward.',
      'Tuck chin slightly and push palms away to separate shoulder blades.'
    ],
    mistake: 'Hunching shoulders up toward ears.',
    easier: 'Keep palms facing inward without interlacing.',
    harder: 'Shift hands 2 inches to the left, hold 10s, then right 10s.',
    muscles: ['Rhomboids', 'Middle trapezius', 'Posterior deltoids'],
    ytQuery: 'upper back stretch interlocked fingers',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 40], rightElbow: [64, 40],
        leftHand: [36, 52], rightHand: [64, 52],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [48, 18], neck: [48, 25],
        leftShoulder: [43, 28], rightShoulder: [57, 28],
        leftElbow: [45, 34], rightElbow: [55, 34],
        leftHand: [48, 30], rightHand: [52, 30],
        pelvis: [52, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'lat_stretch',
    name: 'Side Lat Stretch',
    category: 'stretches-posture',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 35,
    restSeconds: 15,
    cues: [
      'Stand tall, reach right arm straight overhead.',
      'Gently lean torso toward the left, creating a long side arc.',
      'Switch sides at 17 seconds.'
    ],
    mistake: 'Rotating torso forward toward the floor.',
    easier: 'Hold a wall or doorframe for support.',
    harder: 'Grasp wrist with opposite hand and gently elongate the reach.',
    muscles: ['Latissimus dorsi', 'Quadratus lumborum', 'Intercostals'],
    ytQuery: 'standing side bend lat stretch',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 40], rightElbow: [64, 40],
        leftHand: [36, 52], rightHand: [64, 52],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [44, 16], neck: [46, 24],
        leftShoulder: [40, 29], rightShoulder: [57, 27],
        leftElbow: [36, 42], rightElbow: [54, 14],
        leftHand: [36, 54], rightHand: [44, 8],
        pelvis: [52, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'shoulder_stretch',
    name: 'Cross-Body Shoulder Stretch',
    category: 'stretches-posture',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Bring right arm across chest at shoulder height.',
      'Use left forearm to hook gently and draw arm in toward torso.',
      'Drop right shoulder down away from ear.',
      'Switch sides at 20 seconds.'
    ],
    mistake: 'Hiking shoulder up to ear or twisting the entire torso.',
    easier: 'Hold arm slightly lower across upper abdomen.',
    harder: 'Hold gentle stretch while taking 4 deep belly breaths.',
    muscles: ['Posterior deltoid', 'Infraspinatus', 'Rhomboids'],
    ytQuery: 'cross body shoulder stretch rear delt',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 40], rightElbow: [64, 40],
        leftHand: [36, 52], rightHand: [64, 52],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [42, 34], rightElbow: [46, 32],
        leftHand: [52, 30], rightHand: [34, 30],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },

  // ==========================================
  // 8. STRETCHES – LOWER BODY
  // ==========================================
  {
    id: 'hip_flexor_stretch',
    name: 'Kneeling Hip Flexor Stretch',
    category: 'stretches-lower',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Kneel on right knee (on cushion), left foot flat in front.',
      'Tuck tailbone under (squeeze right glute) and shift hips forward slightly.',
      'Keep torso vertical—feel stretch in front of right hip.',
      'Switch sides at 20 seconds.'
    ],
    mistake: 'Hyperextending lower back instead of tucking pelvis.',
    easier: 'Hold a chair for balance.',
    harder: 'Reach arm on stretching side straight overhead with slight side bend.',
    muscles: ['Psoas major', 'Iliacus', 'Rectus femoris'],
    ytQuery: 'kneeling hip flexor stretch proper pelvic tilt',
    poses: {
      environment: 'floor',
      start: {
        head: [44, 22], neck: [44, 29],
        leftShoulder: [40, 34], rightShoulder: [48, 34],
        leftElbow: [40, 46], rightElbow: [48, 46],
        leftHand: [42, 58], rightHand: [46, 58],
        pelvis: [44, 58],
        leftKnee: [34, 68], rightKnee: [56, 82],
        leftFoot: [34, 94], rightFoot: [68, 82]
      },
      peak: {
        head: [40, 22], neck: [40, 29],
        leftShoulder: [36, 34], rightShoulder: [44, 34],
        leftElbow: [36, 46], rightElbow: [44, 46],
        leftHand: [38, 58], rightHand: [42, 58],
        pelvis: [38, 58],
        leftKnee: [30, 68], rightKnee: [56, 82],
        leftFoot: [34, 94], rightFoot: [68, 82]
      }
    }
  },
  {
    id: 'hamstring_stretch',
    name: 'Seated Single-Leg Hamstring Stretch',
    category: 'stretches-lower',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Sit on floor, extend one leg forward, tuck other foot into inner thigh.',
      'Hinge forward from hips with flat spine toward front foot.',
      'Hold at mild tension; never force to touch toes.',
      'Switch legs at 20 seconds.'
    ],
    mistake: 'Rounding upper spine aggressively to touch forehead to knee.',
    easier: 'Keep front knee slightly bent or loop a towel around foot.',
    harder: 'Flex front foot toes back toward shin.',
    muscles: ['Biceps femoris', 'Semitendinosus', 'Semimembranosus'],
    ytQuery: 'seated single leg hamstring stretch beginner',
    poses: {
      environment: 'floor',
      start: {
        head: [46, 42], neck: [48, 48],
        leftShoulder: [48, 54], rightShoulder: [52, 54],
        leftElbow: [48, 64], rightElbow: [52, 64],
        leftHand: [50, 74], rightHand: [50, 74],
        pelvis: [50, 78],
        leftKnee: [68, 80], rightKnee: [46, 76],
        leftFoot: [84, 80], rightFoot: [54, 76]
      },
      peak: {
        head: [56, 48], neck: [56, 54],
        leftShoulder: [56, 58], rightShoulder: [58, 58],
        leftElbow: [64, 66], rightElbow: [64, 66],
        leftHand: [72, 74], rightHand: [72, 74],
        pelvis: [50, 78],
        leftKnee: [68, 80], rightKnee: [46, 76],
        leftFoot: [84, 80], rightFoot: [54, 76]
      }
    }
  },
  {
    id: 'quadriceps_stretch',
    name: 'Standing Quadriceps Stretch (Wall Assist)',
    category: 'stretches-lower',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Hold wall with one hand for steady balance.',
      'Bend other knee and hold ankle behind you.',
      'Keep knees together and stand tall (squeeze glute on stretching side).',
      'Switch sides at 20 seconds.'
    ],
    mistake: 'Arching back or letting stretching knee flare out to side.',
    easier: 'Perform lying on your side.',
    harder: 'Gently tuck pelvis under to intensify stretch in upper thigh.',
    muscles: ['Rectus femoris', 'Vastus lateralis/medialis'],
    ytQuery: 'standing quad stretch proper form balance',
    poses: {
      environment: 'wall',
      start: {
        head: [46, 16], neck: [47, 23],
        leftShoulder: [41, 27], rightShoulder: [55, 27],
        leftElbow: [28, 30], rightElbow: [56, 40],
        leftHand: [14, 32], rightHand: [56, 54],
        pelvis: [48, 52],
        leftKnee: [46, 72], rightKnee: [52, 70],
        leftFoot: [45, 94], rightFoot: [54, 94]
      },
      peak: {
        head: [46, 16], neck: [47, 23],
        leftShoulder: [41, 27], rightShoulder: [55, 27],
        leftElbow: [28, 30], rightElbow: [54, 46],
        leftHand: [14, 32], rightHand: [52, 62],
        pelvis: [48, 52],
        leftKnee: [46, 72], rightKnee: [50, 72],
        leftFoot: [45, 94], rightFoot: [52, 60]
      }
    }
  },
  {
    id: 'glute_stretch',
    name: 'Lying Glute Stretch (Knee to Opposite Shoulder)',
    category: 'stretches-lower',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Lie flat on back with head resting on floor.',
      'Hug right knee and draw it diagonally across toward left shoulder.',
      'Feel stretch deep in right hip/glute.',
      'Switch legs at 20 seconds.'
    ],
    mistake: 'Lifting shoulders or head off floor.',
    easier: 'Seated glute stretch in a chair.',
    harder: 'Transition into figure-4 stretch for deeper release.',
    muscles: ['Gluteus medius & maximus', 'Piriformis'],
    ytQuery: 'knee to opposite shoulder glute stretch piriformis',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [54, 82],
        leftKnee: [70, 82], rightKnee: [58, 64],
        leftFoot: [84, 82], rightFoot: [68, 64]
      },
      peak: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [42, 68], rightElbow: [44, 68],
        leftHand: [48, 58], rightHand: [48, 58],
        pelvis: [54, 82],
        leftKnee: [70, 82], rightKnee: [48, 56],
        leftFoot: [84, 82], rightFoot: [58, 60]
      }
    }
  },
  {
    id: 'figure_4_stretch',
    name: 'Figure-4 Stretch (Supine)',
    category: 'stretches-lower',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Lie on back, cross right ankle over left knee.',
      'Reach hands through and gently hold behind left thigh.',
      'Draw left thigh toward chest while keeping right knee open.',
      'Switch sides at 20 seconds.'
    ],
    mistake: 'Straining neck to reach hands around thigh.',
    easier: 'Perform seated in a chair (ankle over knee, lean chest forward).',
    harder: 'Gently press right elbow into right inner knee to open hip.',
    muscles: ['Piriformis', 'Deep hip rotators', 'Glutes'],
    ytQuery: 'supine figure 4 stretch piriformis relief',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [54, 82],
        leftKnee: [68, 68], rightKnee: [64, 68],
        leftFoot: [76, 82], rightFoot: [66, 68]
      },
      peak: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [42, 70], rightElbow: [44, 70],
        leftHand: [52, 62], rightHand: [52, 62],
        pelvis: [54, 82],
        leftKnee: [60, 56], rightKnee: [56, 56],
        leftFoot: [68, 70], rightFoot: [58, 56]
      }
    }
  },
  {
    id: 'inner_thigh_stretch',
    name: 'Butterfly Inner Thigh Stretch',
    category: 'stretches-lower',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 35,
    restSeconds: 15,
    cues: [
      'Sit tall with soles of feet together, knees relaxed out to sides.',
      'Hold ankles and keep chest proud with long spine.',
      'Let gravity gently draw knees toward floor without pushing down.'
    ],
    mistake: 'Bouncing knees aggressively or rounding back.',
    easier: 'Place feet further forward away from hips (diamond shape).',
    harder: 'Hinge forward gently from the hips with a flat back.',
    muscles: ['Adductor longus/brevis/magnus', 'Gracilis'],
    ytQuery: 'butterfly stretch inner thigh groin flexibility',
    poses: {
      environment: 'floor',
      start: {
        head: [50, 42], neck: [50, 49],
        leftShoulder: [44, 54], rightShoulder: [56, 54],
        leftElbow: [40, 64], rightElbow: [60, 64],
        leftHand: [46, 74], rightHand: [54, 74],
        pelvis: [50, 78],
        leftKnee: [34, 72], rightKnee: [66, 72],
        leftFoot: [50, 80], rightFoot: [50, 80]
      },
      peak: {
        head: [50, 44], neck: [50, 51],
        leftShoulder: [44, 56], rightShoulder: [56, 56],
        leftElbow: [38, 66], rightElbow: [62, 66],
        leftHand: [46, 74], rightHand: [54, 74],
        pelvis: [50, 78],
        leftKnee: [30, 76], rightKnee: [70, 76],
        leftFoot: [50, 80], rightFoot: [50, 80]
      }
    }
  },
  {
    id: 'adductor_stretch',
    name: 'Standing Side Lunge Adductor Stretch',
    category: 'stretches-lower',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Stand with feet wide, shift weight to bend right knee while left leg stays straight.',
      'Keep both feet pointing forward and chest upright.',
      'Feel gentle stretch along inner thigh of straight leg.',
      'Switch sides at 20 seconds.'
    ],
    mistake: 'Allowing straight knee to buckle or bending too deep.',
    easier: 'Narrower stance and less bend in supporting knee.',
    harder: 'Rest hands on thighs and sink hips slightly deeper.',
    muscles: ['Adductors', 'Pectineus', 'Inner hamstring'],
    ytQuery: 'standing adductor side lunge stretch',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [42, 28], rightShoulder: [58, 28],
        leftElbow: [42, 40], rightElbow: [58, 40],
        leftHand: [44, 52], rightHand: [56, 52],
        pelvis: [50, 52],
        leftKnee: [38, 72], rightKnee: [62, 72],
        leftFoot: [30, 94], rightFoot: [70, 94]
      },
      peak: {
        head: [54, 24], neck: [54, 32],
        leftShoulder: [46, 36], rightShoulder: [62, 36],
        leftElbow: [46, 48], rightElbow: [62, 48],
        leftHand: [50, 60], rightHand: [62, 60],
        pelvis: [58, 62],
        leftKnee: [38, 76], rightKnee: [70, 70],
        leftFoot: [30, 94], rightFoot: [70, 94]
      }
    }
  },
  {
    id: 'calf_stretch',
    name: 'Wall Calf Stretch',
    category: 'stretches-lower',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Place hands on wall; step right leg back and press right heel flat to floor.',
      'Keep rear leg straight and pointed directly ahead.',
      'Bend front knee and lean toward wall until stretch is felt in rear calf.',
      'Switch legs at 20 seconds.'
    ],
    mistake: 'Allowing rear heel to lift or turning rear foot outward.',
    easier: 'Step rear foot closer to wall.',
    harder: 'Slightly bend the rear knee to target the soleus muscle.',
    muscles: ['Gastrocnemius', 'Soleus', 'Achilles tendon'],
    ytQuery: 'wall calf stretch proper form achilles',
    poses: {
      environment: 'wall',
      start: {
        head: [36, 22], neck: [40, 28],
        leftShoulder: [42, 32], rightShoulder: [44, 32],
        leftElbow: [30, 34], rightElbow: [30, 34],
        leftHand: [18, 34], rightHand: [18, 34],
        pelvis: [52, 54],
        leftKnee: [48, 72], rightKnee: [68, 74],
        leftFoot: [46, 94], rightFoot: [76, 94]
      },
      peak: {
        head: [32, 24], neck: [36, 30],
        leftShoulder: [38, 34], rightShoulder: [40, 34],
        leftElbow: [26, 36], rightElbow: [26, 36],
        leftHand: [18, 34], rightHand: [18, 34],
        pelvis: [48, 56],
        leftKnee: [42, 72], rightKnee: [68, 74],
        leftFoot: [46, 94], rightFoot: [76, 94]
      }
    }
  },
  {
    id: 'deep_squat_hold',
    name: 'Deep Squat Hold (Assisted)',
    category: 'stretches-lower',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Hold a sturdy doorframe or bedpost for gentle support.',
      'Lower into a deep resting squat with heels on floor (or on folded towel).',
      'Keep spine long and breathe naturally into the hips.',
      'Relax pelvic floor and hips.'
    ],
    mistake: 'Forcing into deep squat unsupported if ankles are stiff.',
    easier: 'Place a 1-inch book under heels to relieve ankle mobility restriction.',
    harder: 'Release hands from support and balance freely with palms together.',
    muscles: ['Hip capsules', 'Ankle dorsiflexors', 'Adductors', 'Lower back'],
    ytQuery: 'assisted deep squat hold mobility resting squat',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [42, 28], rightShoulder: [58, 28],
        leftElbow: [42, 40], rightElbow: [58, 40],
        leftHand: [44, 52], rightHand: [56, 52],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [44, 94], rightFoot: [56, 94]
      },
      peak: {
        head: [50, 48], neck: [50, 55],
        leftShoulder: [44, 60], rightShoulder: [56, 60],
        leftElbow: [42, 68], rightElbow: [58, 68],
        leftHand: [48, 72], rightHand: [52, 72],
        pelvis: [50, 80],
        leftKnee: [32, 76], rightKnee: [68, 76],
        leftFoot: [42, 94], rightFoot: [58, 94]
      }
    }
  },

  // ==========================================
  // 9. STRETCHES – UPPER BODY
  // ==========================================
  {
    id: 'chest_stretch',
    name: 'Standing Chest Stretch',
    category: 'stretches-upper',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Place one palm flat against a wall at shoulder height.',
      'Gently turn body away from the wall until stretch is felt in the chest.',
      'Hold 15 seconds, then switch to opposite arm.'
    ],
    mistake: 'Tensing the neck or forcing the shoulder back aggressively.',
    easier: 'Place forearm on wall with elbow bent 90 degrees.',
    harder: 'Adjust hand slightly higher on the wall to hit lower pecs.',
    muscles: ['Pectoralis major', 'Biceps tendon'],
    ytQuery: 'wall chest stretch corner stretch physical therapy',
    poses: {
      environment: 'wall',
      start: {
        head: [46, 16], neck: [47, 23],
        leftShoulder: [41, 27], rightShoulder: [55, 27],
        leftElbow: [28, 30], rightElbow: [56, 40],
        leftHand: [14, 30], rightHand: [56, 54],
        pelvis: [48, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 23],
        leftShoulder: [43, 27], rightShoulder: [57, 27],
        leftElbow: [30, 30], rightElbow: [56, 40],
        leftHand: [14, 30], rightHand: [56, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'triceps_stretch',
    name: 'Overhead Triceps Stretch',
    category: 'stretches-upper',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Raise right arm overhead and bend elbow so hand rests behind neck.',
      'Use left hand to gently guide right elbow backward.',
      'Keep chin lifted and head neutral; switch sides at 20 seconds.'
    ],
    mistake: 'Pushing head forward with the arm.',
    easier: 'Cross arm in front of chest instead if overhead reaches cause shoulder pinch.',
    harder: 'Add slight side-bend away from the stretching arm.',
    muscles: ['Triceps brachii long head', 'Latissimus dorsi'],
    ytQuery: 'overhead tricep stretch form',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 40], rightElbow: [64, 40],
        leftHand: [36, 52], rightHand: [64, 52],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [48, 10], rightElbow: [62, 12],
        leftHand: [56, 11], rightHand: [50, 22],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'biceps_stretch',
    name: 'Wall Biceps & Forearm Stretch',
    category: 'stretches-upper',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Place palm flat on wall with thumb pointing up, arm straight at shoulder level.',
      'Gently rotate chest away from the wall until stretch is felt in forearm and biceps.',
      'Switch sides at 15 seconds.'
    ],
    mistake: 'Hyperextending the elbow joint aggressively.',
    easier: 'Keep hand lower on the wall (hip height).',
    harder: 'Rotate thumb down to intensify wrist flexor stretch.',
    muscles: ['Biceps brachii', 'Brachioradialis', 'Wrist flexors'],
    ytQuery: 'biceps stretch against wall gentle',
    poses: {
      environment: 'wall',
      start: {
        head: [46, 16], neck: [47, 23],
        leftShoulder: [41, 27], rightShoulder: [55, 27],
        leftElbow: [28, 30], rightElbow: [56, 40],
        leftHand: [14, 30], rightHand: [56, 54],
        pelvis: [48, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 23],
        leftShoulder: [43, 27], rightShoulder: [57, 27],
        leftElbow: [28, 30], rightElbow: [56, 40],
        leftHand: [14, 30], rightHand: [56, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'shoulder_blade_stretch',
    name: 'Eagle Arms / Shoulder Blade Wrap',
    category: 'stretches-upper',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 35,
    restSeconds: 15,
    cues: [
      'Cross right arm under left arm in front of chest.',
      'Wrap forearms and bring palms or backs of hands together (or give yourself a hug).',
      'Gently lift elbows to shoulder height to spread shoulder blades.',
      'Switch arms halfway.'
    ],
    mistake: 'Shrugging shoulders into ears.',
    easier: 'Hug your own shoulders and draw elbows forward.',
    harder: 'Slightly lean forearms forward while breathing into upper back.',
    muscles: ['Rhomboids', 'Trapezius', 'Infraspinatus'],
    ytQuery: 'eagle arms stretch shoulder blade relief',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 40], rightElbow: [64, 40],
        leftHand: [36, 52], rightHand: [64, 52],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [48, 34], rightElbow: [52, 34],
        leftHand: [50, 22], rightHand: [50, 22],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'forearm_stretch',
    name: 'Wrist Flexor & Extensor Stretch',
    category: 'stretches-upper',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Extend right arm forward with palm facing away, fingers pointing down.',
      'Gently pull fingers toward body with left hand (flexor stretch, 10s).',
      'Flip palm toward body, gently pull back of hand (extensor stretch, 10s).',
      'Switch hands.'
    ],
    mistake: 'Yanking on fingers or locking elbow hard.',
    easier: 'Perform with elbow bent at 90 degrees.',
    harder: 'Spread fingers wide while stretching.',
    muscles: ['Wrist flexors', 'Wrist extensors', 'Forearm fascia'],
    ytQuery: 'wrist and forearm stretches carpal tunnel desk',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [36, 40], rightElbow: [64, 40],
        leftHand: [36, 52], rightHand: [64, 52],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [46, 38], rightElbow: [66, 36],
        leftHand: [68, 36], rightHand: [72, 36],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'neck_stretch',
    name: 'Gentle Upper Trapezius Stretch',
    category: 'stretches-upper',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 30,
    restSeconds: 15,
    cues: [
      'Drop right ear toward right shoulder.',
      'Extend left arm toward the floor with fingers pointing down.',
      'Feel peaceful tension release down side of neck.',
      'Switch sides at 15 seconds.'
    ],
    mistake: 'Pulling head with arm pressure.',
    easier: 'Smaller tilt angle.',
    harder: 'Turn chin 10 degrees down toward collarbone (levator stretch).',
    muscles: ['Upper trapezius', 'Levator scapulae'],
    ytQuery: 'upper trapezius stretch gentle neck relief',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [55, 17], neck: [52, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 46], rightElbow: [62, 42],
        leftHand: [38, 60], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },

  // ==========================================
  // 10. STRETCHES – BACK
  // ==========================================
  {
    id: 'knee_to_chest',
    name: 'Knee-to-Chest Stretch',
    category: 'stretches-back',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Lie on back with head resting on floor.',
      'Draw both knees gently into chest and clasp shins or behind thighs.',
      'Keep back of head and tailbone relaxed on the ground.',
      'Take 3 slow calming breaths, letting lower back decompress.'
    ],
    mistake: 'Lifting head or curling tailbone way off floor.',
    easier: 'Hug one knee at a time keeping opposite foot flat on floor.',
    harder: 'Add a tiny gentle rock side to side across the sacrum.',
    muscles: ['Erector spinae', 'Gluteus maximus', 'Lower back fascia'],
    ytQuery: 'knees to chest stretch lower back decompression',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 82], rightElbow: [38, 82],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [54, 82],
        leftKnee: [70, 82], rightKnee: [72, 82],
        leftFoot: [84, 82], rightFoot: [86, 82]
      },
      peak: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [42, 66], rightElbow: [44, 66],
        leftHand: [48, 56], rightHand: [48, 56],
        pelvis: [54, 82],
        leftKnee: [48, 54], rightKnee: [50, 54],
        leftFoot: [60, 58], rightFoot: [62, 58]
      }
    }
  },
  {
    id: 'lower_back_rotational_lying',
    name: 'Lying Lower Back Rotation',
    category: 'stretches-back',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Lie on back with arms spread out wide in a "T" shape.',
      'Bend knees and slowly lower them together to the right side.',
      'Keep left shoulder blade glued to the floor.',
      'Switch sides at 20 seconds.'
    ],
    mistake: 'Letting opposite shoulder lift off the floor.',
    easier: 'Place a pillow under knees so they do not have to reach all the way to floor.',
    harder: 'Turn head to gaze toward the opposite hand.',
    muscles: ['Quadratus lumborum', 'Obliques', 'Lumbar rotators'],
    ytQuery: 'supine spinal twist lower back rotational stretch',
    poses: {
      environment: 'floor',
      start: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 68], rightElbow: [38, 94],
        leftHand: [36, 56], rightHand: [38, 98],
        pelvis: [54, 82],
        leftKnee: [68, 64], rightKnee: [70, 64],
        leftFoot: [76, 82], rightFoot: [78, 82]
      },
      peak: {
        head: [24, 82], neck: [30, 82],
        leftShoulder: [36, 82], rightShoulder: [38, 82],
        leftElbow: [36, 68], rightElbow: [38, 94],
        leftHand: [36, 56], rightHand: [38, 98],
        pelvis: [54, 82],
        leftKnee: [62, 84], rightKnee: [64, 84],
        leftFoot: [72, 90], rightFoot: [74, 90]
      }
    }
  },
  {
    id: 'seated_lower_back_rotation',
    name: 'Seated Lower Back Rotation',
    category: 'stretches-back',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 40,
    restSeconds: 15,
    cues: [
      'Sit tall in a sturdy chair with feet flat on the floor.',
      'Inhale to grow tall through crown of head.',
      'Exhale and rotate torso to the right, placing hands on outside of right thigh or back of chair.',
      'Switch sides at 20 seconds.'
    ],
    mistake: 'Slouching forward or forcing twist with arm leverage.',
    easier: 'Smaller twist angle looking straight ahead.',
    harder: 'Cross right leg over left knee before rotating right.',
    muscles: ['Thoracic and lumbar rotators', 'Obliques'],
    ytQuery: 'seated chair spinal twist posture',
    poses: {
      environment: 'standing',
      start: {
        head: [50, 16], neck: [50, 24],
        leftShoulder: [41, 28], rightShoulder: [59, 28],
        leftElbow: [38, 42], rightElbow: [62, 42],
        leftHand: [38, 54], rightHand: [62, 54],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      },
      peak: {
        head: [54, 16], neck: [52, 24],
        leftShoulder: [44, 28], rightShoulder: [58, 28],
        leftElbow: [48, 40], rightElbow: [66, 42],
        leftHand: [58, 50], rightHand: [68, 52],
        pelvis: [50, 52],
        leftKnee: [46, 72], rightKnee: [54, 72],
        leftFoot: [45, 94], rightFoot: [55, 94]
      }
    }
  },
  {
    id: 'lower_back_flexibility',
    name: 'Child’s Pose (Decompression)',
    category: 'stretches-back',
    type: 'hold',
    defaultSets: 1,
    defaultHoldSeconds: 45,
    restSeconds: 15,
    cues: [
      'Kneel on floor, widen knees, bring big toes together.',
      'Sit hips back onto heels and extend arms forward on the floor.',
      'Rest forehead gently on the ground or a pillow.',
      'Breathe deeply into the back of your lungs and lower back.'
    ],
    mistake: 'Forcing hips back if knees are painful.',
    easier: 'Place a pillow between calves and thighs to elevate hips.',
    harder: 'Walk fingertips forward an extra inch while sinking hips to heels.',
    muscles: ['Latissimus dorsi', 'Erector spinae', 'Glutes', 'Ankles'],
    ytQuery: 'childs pose balasana lower back release',
    poses: {
      environment: 'floor',
      start: {
        head: [36, 52], neck: [42, 54],
        leftShoulder: [48, 56], rightShoulder: [50, 56],
        leftElbow: [46, 68], rightElbow: [48, 68],
        leftHand: [46, 82], rightHand: [48, 82],
        pelvis: [64, 56],
        leftKnee: [64, 72], rightKnee: [66, 72],
        leftFoot: [64, 82], rightFoot: [66, 82]
      },
      peak: {
        head: [28, 76], neck: [34, 74],
        leftShoulder: [40, 72], rightShoulder: [42, 72],
        leftElbow: [28, 76], rightElbow: [30, 76],
        leftHand: [18, 80], rightHand: [20, 80],
        pelvis: [68, 72],
        leftKnee: [60, 80], rightKnee: [62, 80],
        leftFoot: [68, 82], rightFoot: [70, 82]
      }
    }
  },
  {
    id: 'cat_cow',
    name: 'Cat-Cow Flow',
    category: 'stretches-back',
    type: 'timed',
    defaultSets: 1,
    defaultHoldSeconds: 45,
    restSeconds: 15,
    cues: [
      'Start on hands and knees with wrists under shoulders and knees under hips.',
      'Inhale (Cow): gently drop belly, lift chest, gaze softly forward.',
      'Exhale (Cat): round spine upward toward ceiling, tuck chin toward chest.',
      'Move slowly and smoothly with your breath.'
    ],
    mistake: 'Craning neck too hard or aggressively forcing lower back arch.',
    easier: 'Perform seated in a chair, curving spine back and forward.',
    harder: 'Slow down each transition to 4 full seconds.',
    muscles: ['Spinal extensors and flexors', 'Rectus abdominis', 'Pelvic tilt'],
    ytQuery: 'cat cow pose spinal mobility physical therapy',
    poses: {
      environment: 'floor',
      start: {
        // Cow pose
        head: [26, 46], neck: [32, 52],
        leftShoulder: [38, 56], rightShoulder: [40, 56],
        leftElbow: [38, 68], rightElbow: [40, 68],
        leftHand: [38, 82], rightHand: [40, 82],
        pelvis: [62, 54],
        leftKnee: [62, 72], rightKnee: [64, 72],
        leftFoot: [62, 82], rightFoot: [64, 82]
      },
      peak: {
        // Cat pose
        head: [26, 62], neck: [32, 56],
        leftShoulder: [38, 52], rightShoulder: [40, 52],
        leftElbow: [38, 68], rightElbow: [40, 68],
        leftHand: [38, 82], rightHand: [40, 82],
        pelvis: [62, 60],
        leftKnee: [62, 72], rightKnee: [64, 72],
        leftFoot: [62, 82], rightFoot: [64, 82]
      }
    }
  }
];

export const EXERCISE_MAP: Record<string, Exercise> = EXERCISES.reduce((acc, ex) => {
  acc[ex.id] = ex;
  return acc;
}, {} as Record<string, Exercise>);
