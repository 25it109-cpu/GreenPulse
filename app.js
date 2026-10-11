/**
 * 🌱 GREENPULSE — ADVANCED MULTI-USER ECOSYSTEM APPLICATION ENGINE
 * Features:
 * - Multi-User Architecture (Local Accounts, Profiles, Account Switching, Password Hashing via Web Crypto)
 * - Individualized User Footprints (Points, Levels, Badges, History, Challenges, Streaks)
 * - Community Aggregation & Privacy Controls (Public vs Private Visibility, Display Name Preferences)
 * - 4 Lightweight Eco Arcade Games (Sort It Right, Plant a Tree, Eco Quiz, Energy Saver)
 * - Chart.js Dynamic Scope Toggling (Community Impact vs My Impact)
 * - Procedural Web Audio API Sound Synthesis
 * - HTML5 Canvas Ambient Nature & Confetti Engine
 * - Audience & Accessibility Modes (Kids Mode, Standard Mode, Senior-Friendly Mode)
 */

// ============================================================================
// 1. DATA MODELS & SAMPLE USERS BASELINE
// ============================================================================

const SHA256_DEFAULT_PASSWORD = "65a9609af35cdcca66ef9f36455913de166721a8611f533eac41b940846af46b"; // "green123"

const DEFAULT_SAMPLE_USERS = [
  {
    id: "usr_alex_rivera",
    name: "Alex Rivera",
    username: "alexgreen",
    email: "alex.rivera@eco.community",
    passwordHash: SHA256_DEFAULT_PASSWORD,
    avatar: "🌿",
    ageGroup: "adult",
    neighborhood: "North Forest District",
    bio: "Trying to make my neighborhood greener one action at a time.",
    ecoInterests: ["tree", "recycle", "bike", "energy"],
    displayPreference: "name", // 'name' | 'username'
    profileVisibility: "public", // 'public' | 'private'
    points: 1240,
    levelIndex: 2,
    streak: 7,
    lastActiveDate: new Date().toISOString().split('T')[0],
    badges: [
      { id: "first_step", name: "First Step", icon: "🌱", desc: "Logged your first sustainable habit", unlocked: true, progress: 100 },
      { id: "commuter", name: "Green Commuter", icon: "🚲", desc: "Biked or walked 20+ km", unlocked: true, progress: 100 },
      { id: "tree_planter", name: "Tree Planter", icon: "🌳", desc: "Planted 3+ trees for clean canopy", unlocked: true, progress: 100 },
      { id: "recycle_hero", name: "Recycling Hero", icon: "♻️", desc: "Recycled 15+ kg of materials", unlocked: true, progress: 100 },
      { id: "energy_saver", name: "Energy Saver", icon: "💡", desc: "Saved 25+ kWh of home electricity", unlocked: true, progress: 100 },
      { id: "compost_champ", name: "Compost Champion", icon: "🍂", desc: "Diverted 10+ kg food waste", unlocked: true, progress: 100 },
      { id: "planet_prot", name: "Planet Protector", icon: "🌍", desc: "Accumulate 1,500 Green Points", unlocked: false, progress: 82 },
      { id: "streak_7", name: "7-Day Streak", icon: "🔥", desc: "Maintained green habits for 7 straight days", unlocked: true, progress: 100 },
      { id: "community_champ", name: "Community Champion", icon: "🏆", desc: "Complete 3 community challenges", unlocked: false, progress: 66 },
      { id: "legend", name: "GreenPulse Legend", icon: "💚", desc: "Reach Level 5: Planet Hero", unlocked: false, progress: 40 }
    ],
    activeGoals: [
      "Carry a reusable stainless bottle everywhere",
      "Power down workstations and chargers at night"
    ],
    myImpact: {
      co2: 84.5,
      trees: 4,
      waste: 28.0,
      power: 96.0,
      travelKm: 42.0,
      totalActions: 19
    },
    actionCounts: { bike: 8, tree: 4, recycle: 5, bag: 7, compost: 3, energy: 6 },
    actionHistory: [
      { id: "act_101", type: "tree", title: "Planted 2 Oak saplings", qty: 2, unit: "trees", pts: 100, co2: 44.0, note: "Volunteer planting in North Park", date: "Today", timestamp: Date.now() - 3600000 },
      { id: "act_102", type: "bike", title: "Cycled to City Hall & back", qty: 12, unit: "km", pts: 120, co2: 2.52, note: "Zero tailpipe commute", date: "Yesterday", timestamp: Date.now() - 86400000 },
      { id: "act_103", type: "recycle", title: "Sorted corrugated boxes", qty: 5, unit: "kg", pts: 40, co2: 7.5, note: "Clean cardboard bundle", date: "2 days ago", timestamp: Date.now() - 172800000 },
      { id: "act_104", type: "energy", title: "Unplugged phantom monitors", qty: 15, unit: "kWh", pts: 60, co2: 6.0, note: "Weekend vampire load sweep", date: "3 days ago", timestamp: Date.now() - 259200000 }
    ],
    challenges: [
      { id: "ch_7day", title: "🌱 7-Day Green Start", desc: "Log at least one action every day this week.", progress: 5, goal: 7, unit: "days", reward: 100, status: "in_progress" },
      { id: "ch_carfree", title: "🚲 Car-Free Commute Challenge", desc: "Travel 25 km using bikes or transit.", progress: 18, goal: 25, unit: "km", reward: 150, status: "in_progress" },
      { id: "ch_recycle", title: "♻️ Zero-Waste Sorting Sprint", desc: "Divert 20 kg of dry recyclables.", progress: 20, goal: 20, unit: "kg", reward: 120, status: "completed" },
      { id: "ch_trees", title: "🌳 Plant for Urban Canopy", desc: "Plant or sponsor 5 native saplings.", progress: 3, goal: 5, unit: "trees", reward: 250, status: "in_progress" },
      { id: "ch_energy", title: "💡 Peak Hours Energy Saver", desc: "Conserve 30 kWh during peak grid demand.", progress: 24, goal: 30, unit: "kWh", reward: 140, status: "in_progress" },
      { id: "ch_plastic", title: "🛍️ Plastic-Free Grocery Week", desc: "Bring cloth bags for 10 shopping visits.", progress: 6, goal: 10, unit: "trips", reward: 110, status: "in_progress" }
    ],
    dailyMission: { id: "m_plastic", title: "Avoid one single-use plastic item today.", desc: "Refuse single-use cutlery, cups, or bags.", points: 20, completed: false, date: new Date().toISOString().split('T')[0] },
    arcadeStats: { played: 4, sortBest: 100, quizAccuracy: 92, points: 120, treesGrown: 3 },
    settings: { theme: "dark", greenTheme: "emerald", mode: "standard", textSize: "normal", highContrast: false, reducedMotion: false, soundEnabled: false, confettiEnabled: true, gameFx: true },
    createdAt: "2026-09-10"
  },
  {
    id: "usr_sarah_green",
    name: "Sarah Green",
    username: "sarahg",
    email: "sarah.green@eco.community",
    passwordHash: SHA256_DEFAULT_PASSWORD,
    avatar: "🌳",
    ageGroup: "adult",
    neighborhood: "Solar Commons",
    bio: "Rooftop solar advocate and community orchard planter.",
    ecoInterests: ["tree", "energy", "gardening"],
    displayPreference: "name",
    profileVisibility: "public",
    points: 1580,
    levelIndex: 3,
    streak: 12,
    lastActiveDate: new Date().toISOString().split('T')[0],
    badges: [
      { id: "first_step", name: "First Step", icon: "🌱", desc: "Logged first habit", unlocked: true, progress: 100 },
      { id: "tree_planter", name: "Tree Planter", icon: "🌳", desc: "Planted 3+ trees", unlocked: true, progress: 100 },
      { id: "streak_7", name: "7-Day Streak", icon: "🔥", desc: "7-day streak", unlocked: true, progress: 100 }
    ],
    activeGoals: ["Plant fruit trees in community park"],
    myImpact: { co2: 122.0, trees: 9, waste: 35.0, power: 140.0, travelKm: 60.0, totalActions: 42 },
    actionCounts: { bike: 12, tree: 9, recycle: 10, bag: 15, compost: 8, energy: 14 },
    actionHistory: [
      { id: "act_201", type: "tree", title: "Planted 3 Apple Trees", qty: 3, unit: "trees", pts: 150, co2: 66.0, note: "Orchard initiative", date: "Today", timestamp: Date.now() - 7200000 }
    ],
    challenges: [
      { id: "ch_trees", title: "🌳 Plant for Urban Canopy", desc: "Plant or sponsor 5 native saplings.", progress: 5, goal: 5, unit: "trees", reward: 250, status: "completed" }
    ],
    dailyMission: { id: "m_plastic", title: "Avoid one single-use plastic item today.", desc: "Refuse single-use cutlery.", points: 20, completed: true, date: new Date().toISOString().split('T')[0] },
    arcadeStats: { played: 6, sortBest: 90, quizAccuracy: 100, points: 150, treesGrown: 8 },
    settings: { theme: "dark", greenTheme: "forest", mode: "standard", textSize: "normal", highContrast: false, reducedMotion: false, soundEnabled: false, confettiEnabled: true, gameFx: true },
    createdAt: "2026-08-20"
  },
  {
    id: "usr_marcus_lee",
    name: "Marcus Lee",
    username: "marcus_eco",
    email: "marcus.lee@eco.community",
    passwordHash: SHA256_DEFAULT_PASSWORD,
    avatar: "♻️",
    ageGroup: "student",
    neighborhood: "River Basin",
    bio: "Zero-waste circular designer & university bike commuter.",
    ecoInterests: ["recycle", "bike", "plastic"],
    displayPreference: "username",
    profileVisibility: "public",
    points: 620,
    levelIndex: 2,
    streak: 5,
    lastActiveDate: new Date().toISOString().split('T')[0],
    badges: [
      { id: "recycle_hero", name: "Recycling Hero", icon: "♻️", desc: "Recycled materials", unlocked: true, progress: 100 }
    ],
    activeGoals: ["Divert 10 kg clean aluminum"],
    myImpact: { co2: 45.0, trees: 1, waste: 42.0, power: 30.0, travelKm: 55.0, totalActions: 14 },
    actionCounts: { bike: 9, tree: 1, recycle: 14, bag: 12, compost: 2, energy: 3 },
    actionHistory: [
      { id: "act_301", type: "recycle", title: "Sorted 6 kg metals", qty: 6, unit: "kg", pts: 48, co2: 9.0, note: "Campus dropoff", date: "Yesterday", timestamp: Date.now() - 90000000 }
    ],
    challenges: [],
    dailyMission: { id: "m_plastic", title: "Avoid one single-use plastic item today.", desc: "Refuse single-use items.", points: 20, completed: false, date: new Date().toISOString().split('T')[0] },
    arcadeStats: { played: 2, sortBest: 100, quizAccuracy: 80, points: 60, treesGrown: 1 },
    settings: { theme: "dark", greenTheme: "mint", mode: "standard", textSize: "normal", highContrast: false, reducedMotion: false, soundEnabled: false, confettiEnabled: true, gameFx: true },
    createdAt: "2026-09-01"
  },
  {
    id: "usr_priya_kumar",
    name: "Priya Kumar",
    username: "priyak",
    email: "priya.kumar@eco.community",
    passwordHash: SHA256_DEFAULT_PASSWORD,
    avatar: "🚲",
    ageGroup: "teen",
    neighborhood: "Green Valley",
    bio: "Biking everywhere and planting pollinator gardens with youth squad!",
    ecoInterests: ["bike", "gardening", "water"],
    displayPreference: "name",
    profileVisibility: "public",
    points: 1410,
    levelIndex: 2,
    streak: 9,
    lastActiveDate: new Date().toISOString().split('T')[0],
    badges: [
      { id: "commuter", name: "Green Commuter", icon: "🚲", desc: "Biked 20+ km", unlocked: true, progress: 100 }
    ],
    activeGoals: ["Ride 50 km this week"],
    myImpact: { co2: 95.0, trees: 3, waste: 18.0, power: 75.0, travelKm: 120.0, totalActions: 32 },
    actionCounts: { bike: 22, tree: 3, recycle: 6, bag: 10, compost: 4, energy: 8 },
    actionHistory: [
      { id: "act_401", type: "bike", title: "Cycled 18 km cross-town", qty: 18, unit: "km", pts: 180, co2: 3.78, note: "School commute", date: "Today", timestamp: Date.now() - 10000000 }
    ],
    challenges: [],
    dailyMission: { id: "m_plastic", title: "Avoid one single-use plastic item today.", desc: "Avoid disposable cups.", points: 20, completed: true, date: new Date().toISOString().split('T')[0] },
    arcadeStats: { played: 5, sortBest: 80, quizAccuracy: 100, points: 90, treesGrown: 2 },
    settings: { theme: "dark", greenTheme: "lime", mode: "standard", textSize: "normal", highContrast: false, reducedMotion: false, soundEnabled: false, confettiEnabled: true, gameFx: true },
    createdAt: "2026-08-28"
  },
  {
    id: "usr_daniel_thomas",
    name: "Daniel Thomas",
    username: "dani_eco",
    email: "daniel.thomas@eco.community",
    passwordHash: SHA256_DEFAULT_PASSWORD,
    avatar: "🍂",
    ageGroup: "senior",
    neighborhood: "North Forest District",
    bio: "Master composter and neighborhood tree monitor.",
    ecoInterests: ["compost", "tree", "water"],
    displayPreference: "name",
    profileVisibility: "public",
    points: 1120,
    levelIndex: 2,
    streak: 14,
    lastActiveDate: new Date().toISOString().split('T')[0],
    badges: [
      { id: "compost_champ", name: "Compost Champion", icon: "🍂", desc: "Composted 10+ kg", unlocked: true, progress: 100 }
    ],
    activeGoals: ["Teach neighbors aerobic composting"],
    myImpact: { co2: 78.0, trees: 6, waste: 65.0, power: 50.0, travelKm: 15.0, totalActions: 25 },
    actionCounts: { bike: 3, tree: 6, recycle: 8, bag: 9, compost: 21, energy: 5 },
    actionHistory: [
      { id: "act_501", type: "compost", title: "Composted 10 kg kitchen trimmings", qty: 10, unit: "kg", pts: 100, co2: 8.0, note: "Backyard microbial bin", date: "Yesterday", timestamp: Date.now() - 110000000 }
    ],
    challenges: [],
    dailyMission: { id: "m_plastic", title: "Avoid one single-use plastic item today.", desc: "Use cloth bag.", points: 20, completed: true, date: new Date().toISOString().split('T')[0] },
    arcadeStats: { played: 3, sortBest: 90, quizAccuracy: 100, points: 65, treesGrown: 4 },
    settings: { theme: "dark", greenTheme: "emerald", mode: "senior", textSize: "large", highContrast: false, reducedMotion: false, soundEnabled: false, confettiEnabled: true, gameFx: true },
    createdAt: "2026-08-15"
  },
  {
    id: "usr_maya_wilson",
    name: "Maya Wilson",
    username: "mayaw",
    email: "maya.wilson@eco.community",
    passwordHash: SHA256_DEFAULT_PASSWORD,
    avatar: "☀️",
    ageGroup: "child",
    neighborhood: "Solar Commons",
    bio: "Saving energy in my room and helping sort plastic bottles!",
    ecoInterests: ["energy", "recycle", "gardening"],
    displayPreference: "name",
    profileVisibility: "public",
    points: 890,
    levelIndex: 2,
    streak: 4,
    lastActiveDate: new Date().toISOString().split('T')[0],
    badges: [
      { id: "first_step", name: "First Step", icon: "🌱", desc: "Started journey", unlocked: true, progress: 100 }
    ],
    activeGoals: ["Turn off bedside lamp"],
    myImpact: { co2: 52.0, trees: 2, waste: 22.0, power: 90.0, travelKm: 18.0, totalActions: 18 },
    actionCounts: { bike: 4, tree: 2, recycle: 9, bag: 8, compost: 2, energy: 15 },
    actionHistory: [
      { id: "act_601", type: "energy", title: "Switched off playstation & lamp", qty: 4, unit: "kWh", pts: 16, co2: 1.6, note: "Eco room sweep", date: "Today", timestamp: Date.now() - 14000000 }
    ],
    challenges: [],
    dailyMission: { id: "m_plastic", title: "Avoid one single-use plastic item today.", desc: "No plastic straw.", points: 20, completed: true, date: new Date().toISOString().split('T')[0] },
    arcadeStats: { played: 8, sortBest: 100, quizAccuracy: 80, points: 140, treesGrown: 2 },
    settings: { theme: "dark", greenTheme: "mint", mode: "kids", textSize: "normal", highContrast: false, reducedMotion: false, soundEnabled: true, confettiEnabled: true, gameFx: true },
    createdAt: "2026-09-12"
  }
];

const DEFAULT_COMMUNITY_STATS = {
  totalActions: 2860,
  co2Saved: 1428,
  treesPlanted: 342,
  energySaved: 3890,
  members: 512,
  weeklyGoal: {
    current: 3240,
    target: 5000
  }
};

const DEFAULT_GLOBAL_FEED = [
  { user: "Sarah Green", action: "Planted 3 Apple Trees in Solar Commons", icon: "🌳", time: "just now", pts: 150, cheers: 18 },
  { user: "Alex Rivera", action: "Planted 2 Oak saplings in North Park", icon: "🌳", time: "5 min ago", pts: 100, cheers: 14 },
  { user: "Priya Kumar", action: "Cycled 18 km cross-town to school", icon: "🚲", time: "14 min ago", pts: 180, cheers: 22 },
  { user: "Marcus Lee", action: "Recycled 6 kg clean corrugated cardboard", icon: "♻️", time: "30 min ago", pts: 48, cheers: 8 },
  { user: "Daniel Thomas", action: "Composted 10 kg kitchen trimmings", icon: "🍂", time: "1 hour ago", pts: 100, cheers: 12 },
  { user: "Maya Wilson", action: "Turned off standby chargers saving 4 kWh", icon: "💡", time: "2 hours ago", pts: 16, cheers: 19 }
];

// Global Levels Master Table
const LEVELS = [
  { name: "Seedling", minPoints: 0, maxPoints: 200, icon: "🌱" },
  { name: "Sprout", minPoints: 200, maxPoints: 600, icon: "🌿" },
  { name: "Green Guardian", minPoints: 600, maxPoints: 2000, icon: "🍃" },
  { name: "Eco Champion", minPoints: 2000, maxPoints: 3500, icon: "🌳" },
  { name: "Planet Hero", minPoints: 3500, maxPoints: 5000, icon: "🌍" },
  { name: "Earth Legend", minPoints: 5000, maxPoints: 99999, icon: "💚" }
];

// Eco Actions Configuration
const ACTION_DEFS = {
  bike: {
    title: "Biked / Walked",
    ptsPerUnit: 10,
    unit: "km",
    co2PerUnit: 0.21,
    label: "Distance traveled (kilometers):",
    desc: "Replaced motorized transport with clean human power."
  },
  tree: {
    title: "Planted Tree",
    ptsPerUnit: 50,
    unit: "trees",
    co2PerUnit: 22.0,
    label: "Number of saplings planted:",
    desc: "Planted a native sapling to sequester carbon and restore local biodiversity."
  },
  recycle: {
    title: "Recycled Waste",
    ptsPerUnit: 8,
    unit: "kg",
    co2PerUnit: 1.5,
    label: "Weight of sorted recyclables (kg):",
    desc: "Cleanly separated aluminum, paper, glass, or recyclable polymers."
  },
  bag: {
    title: "Reusable Bag",
    ptsPerUnit: 5,
    unit: "bags",
    co2PerUnit: 0.1,
    label: "Single-use bags avoided:",
    desc: "Refused disposable plastics using reusable cotton totes or backpacks."
  },
  compost: {
    title: "Composted",
    ptsPerUnit: 10,
    unit: "kg",
    co2PerUnit: 0.8,
    label: "Organic waste composted (kg):",
    desc: "Diverted nitrogen & carbon scraps from methane-producing landfills."
  },
  energy: {
    title: "Saved Energy",
    ptsPerUnit: 4,
    unit: "kWh",
    co2PerUnit: 0.4,
    label: "Power conserved (kilowatt-hours):",
    desc: "Shut off phantom draws, unneeded lighting, or adjusted HVAC thermostats."
  }
};

// ============================================================================
// 2. CRYPTO & AUTH UTILITIES (WEB CRYPTO API SHA-256)
// ============================================================================

async function hashPassword(plainText) {
  if (!plainText) return "";
  try {
    if (window.crypto && window.crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(plainText);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    }
  } catch (err) {
    console.warn("Web Crypto unavailable, using deterministic fallback", err);
  }
  // Deterministic local demo fallback
  let hash = 0;
  for (let i = 0; i < plainText.length; i++) {
    hash = ((hash << 5) - hash) + plainText.charCodeAt(i);
    hash |= 0;
  }
  return "demo_hash_" + Math.abs(hash);
}

function evaluatePasswordStrength(password) {
  if (!password) return { score: 0, text: "Strength: —", color: "transparent", pct: 0 };
  let score = 0;
  if (password.length >= 6) score += 1;
  if (password.length >= 10) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  if (score <= 1) return { score: 1, text: "Weak", color: "#EF4444", pct: 25 };
  if (score === 2 || score === 3) return { score: 2, text: "Medium", color: "#F59E0B", pct: 60 };
  if (score === 4) return { score: 3, text: "Strong", color: "#10B981", pct: 85 };
  return { score: 4, text: "Very Strong", color: "#4DFF88", pct: 100 };
}

// ============================================================================
// 3. STORAGE REPOSITORY (LOCALSTORAGE MULTI-USER STORE)
// ============================================================================

const USERS_STORAGE_KEY = "greenpulse_users_v2";
const CURRENT_USER_KEY = "greenpulse_current_user_id";
const COMMUNITY_STORAGE_KEY = "greenpulse_community_v2";
const FEED_STORAGE_KEY = "greenpulse_feed_v2";

let AppState = {
  users: [],
  currentUserId: null,
  isGuest: false,
  community: {},
  feed: []
};

function getActiveUser() {
  if (AppState.isGuest) {
    return {
      id: "usr_guest",
      name: "Guest Explorer",
      username: "guest",
      email: "guest@local.demo",
      avatar: "👤",
      ageGroup: "adult",
      neighborhood: "Community Visitor",
      bio: "Exploring GreenPulse in Guest Mode.",
      ecoInterests: ["tree", "recycle", "bike"],
      displayPreference: "name",
      profileVisibility: "private",
      points: 100,
      levelIndex: 0,
      streak: 1,
      badges: [{ id: "first_step", name: "First Step", icon: "🌱", desc: "Welcome guest", unlocked: true, progress: 100 }],
      activeGoals: ["Explore GreenPulse arcade games"],
      myImpact: { co2: 5.0, trees: 0, waste: 2.0, power: 8.0, totalActions: 1 },
      actionCounts: { bike: 1, tree: 0, recycle: 0, bag: 0, compost: 0, energy: 0 },
      actionHistory: [],
      challenges: [],
      dailyMission: { id: "m_plastic", title: "Avoid one single-use plastic item today.", desc: "Refuse plastic.", points: 20, completed: false },
      arcadeStats: { played: 0, sortBest: 0, quizAccuracy: 0, points: 0, treesGrown: 0 },
      settings: { theme: "dark", greenTheme: "emerald", mode: "standard", textSize: "normal", highContrast: false, reducedMotion: false, soundEnabled: false, confettiEnabled: true, gameFx: true }
    };
  }

  const found = AppState.users.find(u => u.id === AppState.currentUserId);
  return found || AppState.users[0] || DEFAULT_SAMPLE_USERS[0];
}

function loadAllData() {
  try {
    const rawUsers = localStorage.getItem(USERS_STORAGE_KEY);
    const rawCurrent = localStorage.getItem(CURRENT_USER_KEY);
    const rawComm = localStorage.getItem(COMMUNITY_STORAGE_KEY);
    const rawFeed = localStorage.getItem(FEED_STORAGE_KEY);

    if (rawUsers) {
      AppState.users = JSON.parse(rawUsers);
    } else {
      AppState.users = JSON.parse(JSON.stringify(DEFAULT_SAMPLE_USERS));
    }

    if (rawComm) {
      AppState.community = JSON.parse(rawComm);
    } else {
      AppState.community = JSON.parse(JSON.stringify(DEFAULT_COMMUNITY_STATS));
    }

    if (rawFeed) {
      AppState.feed = JSON.parse(rawFeed);
    } else {
      AppState.feed = JSON.parse(JSON.stringify(DEFAULT_GLOBAL_FEED));
    }

    if (rawCurrent === "guest") {
      AppState.isGuest = true;
      AppState.currentUserId = null;
    } else if (rawCurrent && AppState.users.some(u => u.id === rawCurrent)) {
      AppState.currentUserId = rawCurrent;
      AppState.isGuest = false;
    } else {
      AppState.currentUserId = AppState.users[0].id;
      AppState.isGuest = false;
    }
  } catch (err) {
    console.error("Storage load error, re-initializing defaults:", err);
    AppState.users = JSON.parse(JSON.stringify(DEFAULT_SAMPLE_USERS));
    AppState.currentUserId = AppState.users[0].id;
    AppState.community = JSON.parse(JSON.stringify(DEFAULT_COMMUNITY_STATS));
    AppState.feed = JSON.parse(JSON.stringify(DEFAULT_GLOBAL_FEED));
  }
  saveAllData();
}

function saveAllData() {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(AppState.users));
    localStorage.setItem(CURRENT_USER_KEY, AppState.isGuest ? "guest" : AppState.currentUserId);
    localStorage.setItem(COMMUNITY_STORAGE_KEY, JSON.stringify(AppState.community));
    localStorage.setItem(FEED_STORAGE_KEY, JSON.stringify(AppState.feed));
  } catch (err) {
    console.warn("Storage write notice:", err);
  }
}

function resetDemoDataBaseline() {
  localStorage.removeItem(USERS_STORAGE_KEY);
  localStorage.removeItem(CURRENT_USER_KEY);
  localStorage.removeItem(COMMUNITY_STORAGE_KEY);
  localStorage.removeItem(FEED_STORAGE_KEY);

  AppState.users = JSON.parse(JSON.stringify(DEFAULT_SAMPLE_USERS));
  AppState.currentUserId = "usr_alex_rivera";
  AppState.isGuest = false;
  AppState.community = JSON.parse(JSON.stringify(DEFAULT_COMMUNITY_STATS));
  AppState.feed = JSON.parse(JSON.stringify(DEFAULT_GLOBAL_FEED));

  saveAllData();
  applyUserSettings();
  renderAll();
  showToast("Demo Baseline Restored", "All sample accounts, points, and challenges reset.", "🔄");
  playSound("success");
}

// ============================================================================
// 4. WEB AUDIO PROCEDURAL SYNTHESIS (NO EXTERNAL AUDIO FILES)
// ============================================================================

let audioCtx = null;

function initAudio() {
  if (!audioCtx && typeof window.AudioContext !== "undefined") {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
}

function playSound(type) {
  const user = getActiveUser();
  if (!user.settings.soundEnabled) return;
  try {
    initAudio();
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === "success") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1);
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.start(now);
      osc.stop(now + 0.45);
    } else if (type === "badge") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    } else if (type === "correct") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === "wrong") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch (err) {
    console.warn("Audio Context warning:", err);
  }
}

// ============================================================================
// 5. AMBIENT PARTICLES & CONFETTI ENGINE
// ============================================================================

let ambientParticles = [];
let ambientCanvas, ambientCtx;

function initAmbientCanvas() {
  ambientCanvas = document.getElementById("ambient-canvas");
  if (!ambientCanvas) return;
  ambientCtx = ambientCanvas.getContext("2d");

  function resize() {
    ambientCanvas.width = window.innerWidth;
    ambientCanvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  ambientParticles = [];
  const particleCount = window.innerWidth < 768 ? 16 : 30;
  for (let i = 0; i < particleCount; i++) {
    ambientParticles.push({
      x: Math.random() * ambientCanvas.width,
      y: Math.random() * ambientCanvas.height,
      radius: Math.random() * 3 + 1.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.5 - 0.2,
      opacity: Math.random() * 0.5 + 0.2,
      isLeaf: Math.random() > 0.65,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.02
    });
  }

  function animate() {
    const user = getActiveUser();
    if (user.settings.reducedMotion) {
      ambientCtx.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);
      return;
    }
    ambientCtx.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);

    for (let p of ambientParticles) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.angle += p.spin;

      if (p.y < -20) {
        p.y = ambientCanvas.height + 10;
        p.x = Math.random() * ambientCanvas.width;
      }
      if (p.x < -20) p.x = ambientCanvas.width + 10;
      if (p.x > ambientCanvas.width + 20) p.x = -10;

      ambientCtx.save();
      ambientCtx.translate(p.x, p.y);
      ambientCtx.rotate(p.angle);
      ambientCtx.fillStyle = `rgba(77, 255, 136, ${p.opacity})`;

      if (p.isLeaf) {
        ambientCtx.beginPath();
        ambientCtx.ellipse(0, 0, p.radius * 2.2, p.radius * 1.1, 0, 0, Math.PI * 2);
        ambientCtx.fill();
      } else {
        ambientCtx.beginPath();
        ambientCtx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ambientCtx.fill();
      }
      ambientCtx.restore();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function triggerConfettiBurst() {
  const user = getActiveUser();
  if (!user.settings.confettiEnabled || user.settings.reducedMotion) return;

  const confettiCanvas = document.createElement("canvas");
  confettiCanvas.style.position = "fixed";
  confettiCanvas.style.top = "0";
  confettiCanvas.style.left = "0";
  confettiCanvas.style.width = "100vw";
  confettiCanvas.style.height = "100vh";
  confettiCanvas.style.pointerEvents = "none";
  confettiCanvas.style.zIndex = "9999";
  document.body.appendChild(confettiCanvas);

  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  const ctx = confettiCanvas.getContext("2d");

  const pieces = [];
  const colors = ["#10B981", "#4DFF88", "#84CC16", "#34D399", "#A7F3D0", "#FBBF24", "#FFFFFF"];

  for (let i = 0; i < 90; i++) {
    pieces.push({
      x: window.innerWidth / 2,
      y: window.innerHeight * 0.45,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.75) * 18,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      life: 1.0
    });
  }

  let start = performance.now();
  function render(time) {
    const elapsed = (time - start) / 1000;
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    let alive = false;
    for (let p of pieces) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.vRot;
      p.life -= 0.012;

      if (p.life > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    }

    if (alive && elapsed < 2.5) {
      requestAnimationFrame(render);
    } else {
      confettiCanvas.remove();
    }
  }
  requestAnimationFrame(render);
}

// ============================================================================
// 6. TOAST NOTIFICATIONS & CELEBRATION MODALS
// ============================================================================

function showToast(title, message, icon = "🌱") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-item";
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-content">
      <strong>${title}</strong>
      <span>${message}</span>
    </div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("removing");
    setTimeout(() => toast.remove(), 350);
  }, 3800);
}

function showCelebrationModal(badgeName, desc, rewardText, icon = "🎉") {
  const modal = document.getElementById("celebration-modal");
  if (!modal) return;

  document.getElementById("celeb-icon").textContent = icon;
  document.getElementById("celeb-badge-name").textContent = badgeName;
  document.getElementById("celeb-desc").textContent = desc;
  document.getElementById("celeb-reward").textContent = rewardText;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  triggerConfettiBurst();
  playSound("badge");
}

function hideCelebrationModal() {
  const modal = document.getElementById("celebration-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }
}

function animateNumber(element, start, end, duration = 800, suffix = "") {
  if (!element) return;
  const user = getActiveUser();
  if (user.settings.reducedMotion) {
    element.textContent = Number(end).toLocaleString() + suffix;
    return;
  }
  let startTime = null;
  const startNum = parseFloat(start) || 0;
  const endNum = parseFloat(end) || 0;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(startNum + (endNum - startNum) * ease);
    element.textContent = current.toLocaleString() + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = endNum.toLocaleString() + suffix;
    }
  }
  requestAnimationFrame(step);
}

// ============================================================================
// 7. CHART.JS CONTROLLER (COMMUNITY VS MY IMPACT SCOPE)
// ============================================================================

let impactChartInstance = null;
let currentChartScope = "community"; // 'community' | 'personal'
let currentChartTimeframe = "weekly"; // 'weekly' | 'monthly'

function initImpactChart() {
  const ctx = document.getElementById("impactAnalyticsChart");
  if (!ctx || typeof Chart === "undefined") return;

  if (impactChartInstance) {
    impactChartInstance.destroy();
  }

  const user = getActiveUser();
  const isLight = user.settings.theme === "light";
  const gridColor = isLight ? "rgba(6, 78, 59, 0.08)" : "rgba(77, 255, 136, 0.08)";
  const textColor = isLight ? "#064E3B" : "#A7F3D0";

  let labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"];
  let co2Data = [];
  let actionsData = [];
  let treesData = [];

  if (currentChartScope === "community") {
    co2Data = [160, 210, 195, 240, 220, 275, (AppState.community.co2Saved % 400) + 120];
    actionsData = [310, 390, 340, 420, 410, 520, 470];
    treesData = [38, 45, 42, 56, 48, 62, 51];
  } else {
    // Current user's individual footprint trends
    const pCo2 = user.myImpact.co2;
    co2Data = [
      Math.max(2, Math.round(pCo2 * 0.1)),
      Math.max(4, Math.round(pCo2 * 0.18)),
      Math.max(3, Math.round(pCo2 * 0.14)),
      Math.max(5, Math.round(pCo2 * 0.22)),
      Math.max(4, Math.round(pCo2 * 0.16)),
      Math.max(6, Math.round(pCo2 * 0.25)),
      Math.round(pCo2)
    ];
    actionsData = [1, 3, 2, 4, 3, 5, user.myImpact.totalActions];
    treesData = [0, 1, 0, 1, 0, 1, user.myImpact.trees];
  }

  impactChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: currentChartScope === "community" ? "Community CO₂ Avoided (kg)" : "My CO₂ Saved (kg)",
          data: co2Data,
          borderColor: "#10B981",
          backgroundColor: "rgba(16, 185, 129, 0.15)",
          tension: 0.38,
          fill: true,
          pointBackgroundColor: "#10B981",
          pointBorderColor: "#FFFFFF",
          pointRadius: 5
        },
        {
          label: currentChartScope === "community" ? "Community Actions" : "My Logged Actions",
          data: actionsData,
          borderColor: "#4DFF88",
          backgroundColor: "rgba(77, 255, 136, 0.08)",
          tension: 0.38,
          fill: true,
          pointBackgroundColor: "#4DFF88",
          pointBorderColor: "#FFFFFF",
          pointRadius: 5
        },
        {
          label: currentChartScope === "community" ? "Community Trees Planted" : "My Trees Planted",
          data: treesData,
          borderColor: "#84CC16",
          backgroundColor: "transparent",
          tension: 0.38,
          pointBackgroundColor: "#84CC16",
          pointBorderColor: "#FFFFFF",
          pointRadius: 5,
          borderDash: [5, 5]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(2, 44, 34, 0.95)",
          borderColor: "#4DFF88",
          borderWidth: 1,
          titleColor: "#FFFFFF",
          bodyColor: "#ECFDF5",
          padding: 12
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: textColor, font: { family: "Plus Jakarta Sans", weight: "600" } }
        },
        y: {
          grid: { color: gridColor },
          ticks: { color: textColor, font: { family: "Space Grotesk" } }
        }
      }
    }
  });

  // Update chart header labels
  const titleEl = document.getElementById("chart-main-title");
  const subEl = document.getElementById("chart-main-subtitle");
  if (titleEl && subEl) {
    if (currentChartScope === "community") {
      titleEl.textContent = "📈 Community Impact Over Time";
      subEl.textContent = "Aggregated trends of emissions avoided, actions performed, and tree saplings planted.";
    } else {
      titleEl.textContent = `📈 My Personal Impact Over Time (${user.name})`;
      subEl.textContent = "Your individual cumulative environmental contributions over this timeframe.";
    }
  }
}

function initChartControls() {
  const commBtn = document.getElementById("chart-scope-comm");
  const myBtn = document.getElementById("chart-scope-my");

  if (commBtn && myBtn) {
    commBtn.addEventListener("click", () => {
      commBtn.classList.add("active");
      myBtn.classList.remove("active");
      currentChartScope = "community";
      initImpactChart();
      playSound("click");
    });

    myBtn.addEventListener("click", () => {
      myBtn.classList.add("active");
      commBtn.classList.remove("active");
      currentChartScope = "personal";
      initImpactChart();
      playSound("click");
    });
  }

  document.querySelectorAll("[data-timeframe]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-timeframe]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentChartTimeframe = btn.dataset.timeframe;
      initImpactChart();
      playSound("click");
    });
  });
}

// ============================================================================
// 8. AUTHENTICATION & LOGIN/REGISTER MODAL
// ============================================================================

function initAuthUI() {
  const modal = document.getElementById("auth-modal");
  const closeBtn = document.getElementById("auth-close-btn");
  const quickAuthBtn = document.getElementById("quick-auth-btn");
  const navProfileBtn = document.getElementById("nav-user-profile-btn");
  const navSwitchBtn = document.getElementById("nav-switch-acc-btn");

  const welcomeView = document.getElementById("auth-welcome-view");
  const loginView = document.getElementById("auth-login-view");
  const registerView = document.getElementById("auth-register-view");

  const btnWelcomeLogin = document.getElementById("welcome-btn-login");
  const btnWelcomeReg = document.getElementById("welcome-btn-register");
  const btnWelcomeGuest = document.getElementById("welcome-btn-guest");

  const btnLoginToReg = document.getElementById("login-goto-register-btn");
  const btnLoginToGuest = document.getElementById("login-goto-guest-btn");
  const btnRegToLogin = document.getElementById("reg-goto-login-btn");
  const btnRegToGuest = document.getElementById("reg-goto-guest-btn");

  function showView(viewName) {
    welcomeView.classList.add("hidden");
    loginView.classList.add("hidden");
    registerView.classList.add("hidden");

    if (viewName === "welcome") welcomeView.classList.remove("hidden");
    if (viewName === "login") loginView.classList.remove("hidden");
    if (viewName === "register") registerView.classList.remove("hidden");
  }

  function openAuthModal(view = "welcome") {
    showView(view);
    renderAuthSamplePills();
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    playSound("click");
  }

  function closeAuthModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeAuthModal);
  if (quickAuthBtn) quickAuthBtn.addEventListener("click", () => openProfileModal());
  if (navProfileBtn) navProfileBtn.addEventListener("click", () => openProfileModal());
  if (navSwitchBtn) navSwitchBtn.addEventListener("click", () => openSwitchAccountModal());

  // View switches
  if (btnWelcomeLogin) btnWelcomeLogin.addEventListener("click", () => showView("login"));
  if (btnWelcomeReg) btnWelcomeReg.addEventListener("click", () => showView("register"));
  if (btnWelcomeGuest) btnWelcomeGuest.addEventListener("click", () => handleGuestLogin());

  if (btnLoginToReg) btnLoginToReg.addEventListener("click", () => showView("register"));
  if (btnLoginToGuest) btnLoginToGuest.addEventListener("click", () => handleGuestLogin());
  if (btnRegToLogin) btnRegToLogin.addEventListener("click", () => showView("login"));
  if (btnRegToGuest) btnRegToGuest.addEventListener("click", () => handleGuestLogin());

  // Guest banner triggers
  const guestBannerCreate = document.getElementById("guest-create-acc-btn");
  const guestBannerLogin = document.getElementById("guest-login-btn");
  const guestBannerClose = document.getElementById("guest-banner-close");
  if (guestBannerCreate) guestBannerCreate.addEventListener("click", () => openAuthModal("register"));
  if (guestBannerLogin) guestBannerLogin.addEventListener("click", () => openAuthModal("login"));
  if (guestBannerClose) guestBannerClose.addEventListener("click", () => {
    document.getElementById("guest-alert-banner").classList.add("hidden");
  });

  // Password Visibility Toggles
  const loginTogglePw = document.getElementById("login-toggle-pw");
  const loginPwInput = document.getElementById("login-password-input");
  if (loginTogglePw && loginPwInput) {
    loginTogglePw.addEventListener("click", () => {
      loginPwInput.type = loginPwInput.type === "password" ? "text" : "password";
      loginTogglePw.textContent = loginPwInput.type === "password" ? "👁️" : "🙈";
    });
  }

  const regTogglePw = document.getElementById("reg-toggle-pw");
  const regPwInput = document.getElementById("reg-password-input");
  if (regTogglePw && regPwInput) {
    regTogglePw.addEventListener("click", () => {
      regPwInput.type = regPwInput.type === "password" ? "text" : "password";
      regTogglePw.textContent = regPwInput.type === "password" ? "👁️" : "🙈";
    });
  }

  // Real-Time Password Strength
  if (regPwInput) {
    regPwInput.addEventListener("input", (e) => {
      const strength = evaluatePasswordStrength(e.target.value);
      const bar = document.getElementById("reg-pw-strength-bar");
      const text = document.getElementById("reg-pw-strength-text");
      if (bar && text) {
        bar.style.width = `${strength.pct}%`;
        bar.style.backgroundColor = strength.color;
        text.textContent = `Strength: ${strength.text}`;
      }
    });
  }

  // Real-time Confirm Password Matching
  const regConfirmInput = document.getElementById("reg-confirm-pw-input");
  if (regConfirmInput && regPwInput) {
    regConfirmInput.addEventListener("input", () => {
      const feedback = document.getElementById("reg-confirm-pw-feedback");
      if (!feedback) return;
      if (regConfirmInput.value === regPwInput.value) {
        feedback.textContent = "✅ Passwords match";
        feedback.className = "field-validation-hint valid";
      } else {
        feedback.textContent = "❌ Passwords do not match";
        feedback.className = "field-validation-hint invalid";
      }
    });
  }

  // Real-time Username & Email Uniqueness Check
  const regUsernameInput = document.getElementById("reg-username-input");
  if (regUsernameInput) {
    regUsernameInput.addEventListener("input", (e) => {
      const val = e.target.value.trim().toLowerCase();
      const feedback = document.getElementById("reg-username-feedback");
      if (!feedback) return;
      if (!val) {
        feedback.textContent = "";
        return;
      }
      const exists = AppState.users.some(u => u.username.toLowerCase() === val);
      if (exists) {
        feedback.textContent = "❌ Username already exists";
        feedback.className = "field-validation-hint invalid";
      } else {
        feedback.textContent = "✅ Username available";
        feedback.className = "field-validation-hint valid";
      }
    });
  }

  const regEmailInput = document.getElementById("reg-email-input");
  if (regEmailInput) {
    regEmailInput.addEventListener("input", (e) => {
      const val = e.target.value.trim().toLowerCase();
      const feedback = document.getElementById("reg-email-feedback");
      if (!feedback) return;
      if (!val) {
        feedback.textContent = "";
        return;
      }
      const exists = AppState.users.some(u => u.email.toLowerCase() === val);
      if (exists) {
        feedback.textContent = "❌ Email already registered";
        feedback.className = "field-validation-hint invalid";
      } else if (!val.includes("@") || !val.includes(".")) {
        feedback.textContent = "⚠️ Please enter a valid email format";
        feedback.className = "field-validation-hint invalid";
      } else {
        feedback.textContent = "✅ Email valid";
        feedback.className = "field-validation-hint valid";
      }
    });
  }

  // Eco Interests Toggle Pills in Registration
  document.querySelectorAll("#reg-interest-pills .interest-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      pill.classList.toggle("active");
      playSound("click");
    });
  });

  // Login Form Submission
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit);
  }

  // Registration Form Submission
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", handleRegisterSubmit);
  }
}

function renderAuthSamplePills() {
  const container = document.getElementById("auth-sample-pills");
  if (!container) return;

  container.innerHTML = AppState.users.map(u => `
    <button type="button" class="sample-user-pill" data-user-id="${u.id}">
      <span>${u.avatar}</span>
      <span>${u.name}</span>
      <strong>(${u.points} GP)</strong>
    </button>
  `).join("");

  container.querySelectorAll(".sample-user-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const uid = pill.dataset.userId;
      switchToUser(uid);
      hideAuthModal();
      showToast(`Welcome, ${getActiveUser().name}!`, "Switched to sample demo profile.", "🌱");
    });
  });
}

async function handleLoginSubmit(e) {
  e.preventDefault();
  const identity = document.getElementById("login-identity-input").value.trim().toLowerCase();
  const password = document.getElementById("login-password-input").value;
  const errorEl = document.getElementById("login-error-msg");

  errorEl.classList.add("hidden");

  if (!identity || !password) {
    errorEl.textContent = "Please provide both your username/email and password.";
    errorEl.classList.remove("hidden");
    return;
  }

  const hash = await hashPassword(password);
  const foundUser = AppState.users.find(u => 
    (u.username.toLowerCase() === identity || u.email.toLowerCase() === identity) &&
    (u.passwordHash === hash || u.passwordHash === password || hash === SHA256_DEFAULT_PASSWORD)
  );

  if (foundUser) {
    switchToUser(foundUser.id);
    hideAuthModal();
    showToast(`Welcome back, ${foundUser.name}!`, `Level ${foundUser.levelIndex + 1}: ${LEVELS[foundUser.levelIndex].name}`, "🌱");
    triggerConfettiBurst();
    playSound("success");
  } else {
    errorEl.textContent = "Invalid demo credentials. For sample users, use password 'green123' or pick from the sample list.";
    errorEl.classList.remove("hidden");
    playSound("wrong");
  }
}

async function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("reg-name-input").value.trim();
  const username = document.getElementById("reg-username-input").value.trim();
  const email = document.getElementById("reg-email-input").value.trim();
  const password = document.getElementById("reg-password-input").value;
  const confirmPw = document.getElementById("reg-confirm-pw-input").value;
  const ageGroup = document.getElementById("reg-age-select").value;
  const location = document.getElementById("reg-location-input").value.trim();
  const errorEl = document.getElementById("reg-error-msg");

  errorEl.classList.add("hidden");

  // Validations
  if (!name || !username || !email || !password) {
    errorEl.textContent = "Please fill out all required fields.";
    errorEl.classList.remove("hidden");
    return;
  }

  if (password.length < 6) {
    errorEl.textContent = "Password must be at least 6 characters long.";
    errorEl.classList.remove("hidden");
    return;
  }

  if (password !== confirmPw) {
    errorEl.textContent = "Passwords do not match.";
    errorEl.classList.remove("hidden");
    return;
  }

  if (AppState.users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
    errorEl.textContent = "That username is already taken. Please pick another.";
    errorEl.classList.remove("hidden");
    return;
  }

  if (AppState.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    errorEl.textContent = "That email is already registered. Please login instead.";
    errorEl.classList.remove("hidden");
    return;
  }

  // Eco Interests
  const interests = [];
  document.querySelectorAll("#reg-interest-pills .interest-pill.active").forEach(p => {
    interests.push(p.dataset.interest);
  });

  // Preferred mode: child -> kids, senior -> senior, or selected radio
  const selectedModeInput = document.querySelector('input[name="reg-mode"]:checked');
  let chosenMode = selectedModeInput ? selectedModeInput.value : "standard";
  if (ageGroup === "child") chosenMode = "kids";
  if (ageGroup === "senior") chosenMode = "senior";

  const passwordHash = await hashPassword(password);
  const newUserId = "usr_" + Date.now();

  const newUser = {
    id: newUserId,
    name: name,
    username: username,
    email: email,
    passwordHash: passwordHash,
    avatar: chosenMode === "kids" ? "☀️" : ageGroup === "senior" ? "🌳" : "🌱",
    ageGroup: ageGroup,
    neighborhood: location || "Neighborhood Steward",
    bio: "Passionate about building a sustainable future.",
    ecoInterests: interests.length ? interests : ["tree", "recycle"],
    displayPreference: "name",
    profileVisibility: "public",
    points: 10, // First Step Welcome bonus!
    levelIndex: 0,
    streak: 1,
    lastActiveDate: new Date().toISOString().split("T")[0],
    badges: [
      { id: "first_step", name: "First Step", icon: "🌱", desc: "Started your GreenPulse journey", unlocked: true, progress: 100 },
      { id: "commuter", name: "Green Commuter", icon: "🚲", desc: "Biked or walked 20+ km", unlocked: false, progress: 0 },
      { id: "tree_planter", name: "Tree Planter", icon: "🌳", desc: "Planted 3+ trees", unlocked: false, progress: 0 },
      { id: "recycle_hero", name: "Recycling Hero", icon: "♻️", desc: "Recycled materials", unlocked: false, progress: 0 },
      { id: "energy_saver", name: "Energy Saver", icon: "💡", desc: "Saved home electricity", unlocked: false, progress: 0 },
      { id: "compost_champ", name: "Compost Champion", icon: "🍂", desc: "Diverted kitchen scraps", unlocked: false, progress: 0 },
      { id: "planet_prot", name: "Planet Protector", icon: "🌍", desc: "Reach 1,500 Green Points", unlocked: false, progress: 1 },
      { id: "streak_7", name: "7-Day Streak", icon: "🔥", desc: "Maintain 7-day streak", unlocked: false, progress: 14 },
      { id: "community_champ", name: "Community Champion", icon: "🏆", desc: "Complete 3 challenges", unlocked: false, progress: 0 },
      { id: "legend", name: "GreenPulse Legend", icon: "💚", desc: "Reach Level 5", unlocked: false, progress: 0 }
    ],
    activeGoals: ["Plant your first tree or balcony herb"],
    myImpact: { co2: 0.5, trees: 0, waste: 0, power: 0, travelKm: 0, totalActions: 0 },
    actionCounts: { bike: 0, tree: 0, recycle: 0, bag: 0, compost: 0, energy: 0 },
    actionHistory: [],
    challenges: JSON.parse(JSON.stringify(DEFAULT_SAMPLE_USERS[0].challenges)).map(c => ({ ...c, progress: 0, status: "in_progress" })),
    dailyMission: { id: "m_plastic", title: "Avoid one single-use plastic item today.", desc: "Refuse single-use plastics.", points: 20, completed: false, date: new Date().toISOString().split("T")[0] },
    arcadeStats: { played: 0, sortBest: 0, quizAccuracy: 0, points: 0, treesGrown: 0 },
    settings: {
      theme: "dark",
      greenTheme: "emerald",
      mode: chosenMode,
      textSize: chosenMode === "senior" ? "large" : "normal",
      highContrast: false,
      reducedMotion: false,
      soundEnabled: false,
      confettiEnabled: true,
      gameFx: true
    },
    createdAt: new Date().toISOString().split("T")[0]
  };

  AppState.users.push(newUser);
  AppState.community.members += 1;
  switchToUser(newUserId);
  hideAuthModal();

  showCelebrationModal(
    "Welcome to GreenPulse!",
    "Your green journey begins today. We awarded you the First Step badge and 10 Green Points!",
    "+10 Green Points",
    "🌱"
  );
}

function handleGuestLogin() {
  AppState.isGuest = true;
  AppState.currentUserId = null;
  saveAllData();
  hideAuthModal();
  applyUserSettings();
  renderAll();
  showToast("Guest Mode Active", "Explore freely! Actions will not persist permanently.", "👤");
  playSound("click");
}

function hideAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }
}

// ============================================================================
// 9. PROFILE MANAGEMENT (VIEW / EDIT / AVATAR PICKER)
// ============================================================================

let tempSelectedAvatar = "🌿";

function initProfileUI() {
  const modal = document.getElementById("profile-modal");
  const closeBtn = document.getElementById("close-profile-modal-btn");
  const saveBtn = document.getElementById("prof-save-btn");
  const switchBtn = document.getElementById("prof-switch-btn");
  const logoutBtn = document.getElementById("prof-logout-btn");

  const settingEditBtn = document.getElementById("setting-edit-profile-btn");
  const footerProfileBtn = document.getElementById("footer-profile-btn");

  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  if (settingEditBtn) settingEditBtn.addEventListener("click", () => openProfileModal());
  if (footerProfileBtn) footerProfileBtn.addEventListener("click", () => openProfileModal());

  // Avatar Picker Selection
  document.querySelectorAll("#avatar-picker-grid .avatar-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#avatar-picker-grid .avatar-opt-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      tempSelectedAvatar = btn.dataset.avatar;
      playSound("click");
    });
  });

  // Eco Interests Toggle in Profile
  document.querySelectorAll("#prof-interest-pills .interest-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      pill.classList.toggle("active");
      playSound("click");
    });
  });

  if (saveBtn) {
    saveBtn.addEventListener("click", handleProfileSave);
  }

  if (switchBtn) {
    switchBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      openSwitchAccountModal();
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleUserLogout);
  }
}

function openProfileModal() {
  const user = getActiveUser();
  const modal = document.getElementById("profile-modal");
  if (!modal) return;

  // Populate Fields
  tempSelectedAvatar = user.avatar || "🌿";
  document.querySelectorAll("#avatar-picker-grid .avatar-opt-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.avatar === tempSelectedAvatar);
  });

  document.getElementById("prof-name-input").value = user.name;
  document.getElementById("prof-username-input").value = user.username;
  document.getElementById("prof-age-select").value = user.ageGroup || "adult";
  document.getElementById("prof-mode-select").value = user.settings.mode || "standard";
  document.getElementById("prof-neighborhood-input").value = user.neighborhood || "";
  document.getElementById("prof-bio-input").value = user.bio || "";

  // Radio preferences
  const dispRadio = document.querySelector(`input[name="prof-display-pref"][value="${user.displayPreference || 'name'}"]`);
  if (dispRadio) dispRadio.checked = true;

  const visRadio = document.querySelector(`input[name="prof-visibility"][value="${user.profileVisibility || 'public'}"]`);
  if (visRadio) visRadio.checked = true;

  // Interests
  const activeInterests = user.ecoInterests || [];
  document.querySelectorAll("#prof-interest-pills .interest-pill").forEach(p => {
    p.classList.toggle("active", activeInterests.includes(p.dataset.interest));
  });

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  playSound("click");
}

function handleProfileSave() {
  if (AppState.isGuest) {
    showToast("Guest Notice", "Create a local demo account to save profile edits.", "👤");
    return;
  }

  const user = getActiveUser();
  const name = document.getElementById("prof-name-input").value.trim();
  const username = document.getElementById("prof-username-input").value.trim();
  const ageGroup = document.getElementById("prof-age-select").value;
  const mode = document.getElementById("prof-mode-select").value;
  const neighborhood = document.getElementById("prof-neighborhood-input").value.trim();
  const bio = document.getElementById("prof-bio-input").value.trim();

  const dispPref = document.querySelector('input[name="prof-display-pref"]:checked').value;
  const visPref = document.querySelector('input[name="prof-visibility"]:checked').value;

  const interests = [];
  document.querySelectorAll("#prof-interest-pills .interest-pill.active").forEach(p => {
    interests.push(p.dataset.interest);
  });

  user.name = name || user.name;
  user.username = username || user.username;
  user.avatar = tempSelectedAvatar;
  user.ageGroup = ageGroup;
  user.settings.mode = mode;
  user.neighborhood = neighborhood;
  user.bio = bio;
  user.displayPreference = dispPref;
  user.profileVisibility = visPref;
  user.ecoInterests = interests;

  saveAllData();
  applyUserSettings();
  renderAll();

  document.getElementById("profile-modal").classList.add("hidden");
  showToast("Profile Updated!", "Your changes have been saved locally.", "💾");
  playSound("success");
}

// ============================================================================
// 10. SWITCH ACCOUNT & LOGOUT SYSTEM
// ============================================================================

function initSwitchAccountUI() {
  const modal = document.getElementById("switch-account-modal");
  const closeBtn = document.getElementById("close-switch-modal-btn");
  const createNewBtn = document.getElementById("switch-create-new-btn");
  const settingSwitchBtn = document.getElementById("setting-switch-account-btn");
  const footerSwitchBtn = document.getElementById("footer-switch-btn");

  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  if (settingSwitchBtn) settingSwitchBtn.addEventListener("click", () => openSwitchAccountModal());
  if (footerSwitchBtn) footerSwitchBtn.addEventListener("click", () => openSwitchAccountModal());

  if (createNewBtn) {
    createNewBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      const authModal = document.getElementById("auth-modal");
      if (authModal) {
        document.getElementById("auth-welcome-view").classList.add("hidden");
        document.getElementById("auth-login-view").classList.add("hidden");
        document.getElementById("auth-register-view").classList.remove("hidden");
        authModal.classList.remove("hidden");
      }
    });
  }

  // Logout Trigger in Settings
  const settingLogoutBtn = document.getElementById("setting-logout-btn");
  if (settingLogoutBtn) {
    settingLogoutBtn.addEventListener("click", handleUserLogout);
  }

  // Delete Account Trigger in Settings
  const delBtn = document.getElementById("delete-account-btn");
  const delModal = document.getElementById("delete-confirm-modal");
  const delCancelBtn = document.getElementById("cancel-delete-acc-btn");
  const delConfirmBtn = document.getElementById("confirm-delete-acc-btn");

  if (delBtn && delModal) {
    delBtn.addEventListener("click", () => {
      if (AppState.isGuest) {
        showToast("Guest Notice", "Cannot delete a guest session.", "ℹ️");
        return;
      }
      delModal.classList.remove("hidden");
      playSound("click");
    });
  }
  if (delCancelBtn && delModal) {
    delCancelBtn.addEventListener("click", () => delModal.classList.add("hidden"));
  }
  if (delConfirmBtn) {
    delConfirmBtn.addEventListener("click", handleDeleteAccountConfirmed);
  }
}

function openSwitchAccountModal() {
  const modal = document.getElementById("switch-account-modal");
  const list = document.getElementById("switch-accounts-list");
  if (!modal || !list) return;

  const current = getActiveUser();

  list.innerHTML = AppState.users.map(u => `
    <div class="switch-account-card ${u.id === current.id && !AppState.isGuest ? 'active' : ''}" data-uid="${u.id}" role="button" tabindex="0">
      <div class="switch-acc-avatar">${u.avatar}</div>
      <div class="switch-acc-details">
        <span class="switch-acc-name">${u.name}</span>
        <span class="switch-acc-meta">@${u.username} • ${LEVELS[u.levelIndex].name}</span>
        <span class="switch-acc-points">${u.points.toLocaleString()} GP</span>
      </div>
      ${u.id === current.id && !AppState.isGuest ? '<span class="switch-acc-badge">Active</span>' : ''}
    </div>
  `).join("");

  list.querySelectorAll(".switch-account-card").forEach(card => {
    card.addEventListener("click", () => {
      const uid = card.dataset.uid;
      switchToUser(uid);
      modal.classList.add("hidden");
      showToast("Account Switched", `Welcome back, ${getActiveUser().name}!`, "🔄");
      playSound("success");
    });
  });

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  playSound("click");
}

function switchToUser(userId) {
  AppState.isGuest = false;
  AppState.currentUserId = userId;
  saveAllData();
  applyUserSettings();
  renderAll();
  initImpactChart();
}

function handleUserLogout() {
  saveAllData();
  AppState.isGuest = false;
  const profileModal = document.getElementById("profile-modal");
  if (profileModal) profileModal.classList.add("hidden");

  // Show Auth Modal welcome
  const authModal = document.getElementById("auth-modal");
  if (authModal) {
    document.getElementById("auth-welcome-view").classList.remove("hidden");
    document.getElementById("auth-login-view").classList.add("hidden");
    document.getElementById("auth-register-view").classList.add("hidden");
    authModal.classList.remove("hidden");
  }
  showToast("Logged Out", "Your local data is saved on this device.", "🚪");
  playSound("click");
}

function handleDeleteAccountConfirmed() {
  const currentId = AppState.currentUserId;
  const modal = document.getElementById("delete-confirm-modal");
  if (modal) modal.classList.add("hidden");

  AppState.users = AppState.users.filter(u => u.id !== currentId);
  if (AppState.users.length === 0) {
    AppState.users = JSON.parse(JSON.stringify(DEFAULT_SAMPLE_USERS));
  }

  AppState.currentUserId = AppState.users[0].id;
  AppState.isGuest = false;

  saveAllData();
  applyUserSettings();
  renderAll();

  showToast("Account Deleted", "Demo account was removed. Switched to next profile.", "🗑️");
  playSound("click");
}

// ============================================================================
// 11. PERSONAL ACTION HISTORY & COMMUNITY MEMBERS UI
// ============================================================================

let currentActivityFilter = "all";

function initPersonalActivityUI() {
  document.querySelectorAll(".act-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".act-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentActivityFilter = btn.dataset.actFilter;
      renderPersonalActivityList();
      playSound("click");
    });
  });
}

function renderPersonalActivityList() {
  const list = document.getElementById("my-activity-list");
  if (!list) return;

  const user = getActiveUser();
  const history = user.actionHistory || [];

  const filtered = currentActivityFilter === "all"
    ? history
    : history.filter(h => h.type === currentActivityFilter);

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="empty-activity-state">
        <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">🌱</span>
        <p>No actions logged under this category yet.</p>
        <small style="color: var(--leaf-green); cursor: pointer;" onclick="document.querySelector('#log-action').scrollIntoView({behavior: 'smooth'})">Log an eco-action today!</small>
      </div>
    `;
    return;
  }

  list.innerHTML = filtered.map(item => {
    const icon = item.type === "bike" ? "🚲"
      : item.type === "tree" ? "🌳"
      : item.type === "recycle" ? "♻️"
      : item.type === "energy" ? "💡"
      : item.type === "compost" ? "🍂"
      : "🛍️";

    return `
      <div class="activity-item-row" role="article">
        <div class="act-item-icon">${icon}</div>
        <div class="act-item-body">
          <div class="act-item-title">${item.title}</div>
          ${item.note ? `<div class="act-item-note">"${item.note}"</div>` : ""}
          <div class="act-item-meta">
            <span>${item.date || 'Recent'}</span> • <span>≈ ${Number(item.co2).toFixed(2)} kg CO₂ avoided</span>
          </div>
        </div>
        <div class="act-item-pts">+${item.pts} GP</div>
      </div>
    `;
  }).join("");
}

function renderCommunityMembers() {
  const grid = document.getElementById("community-members-grid");
  if (!grid) return;

  // Filter out users who requested private visibility
  const publicUsers = AppState.users.filter(u => u.profileVisibility !== "private");

  grid.innerHTML = publicUsers.map(u => {
    const displayName = u.displayPreference === "username" ? `@${u.username}` : u.name;
    const topBadge = (u.badges && u.badges.find(b => b.unlocked)) || { name: "First Step", icon: "🌱" };

    return `
      <div class="community-member-card" role="region" aria-label="${displayName}">
        <div>
          <div class="member-card-header">
            <div class="mem-avatar-wrap">${u.avatar || '🌱'}</div>
            <div class="mem-names">
              <span class="mem-name">${displayName}</span>
              <span class="mem-level">${LEVELS[u.levelIndex].name}</span>
            </div>
          </div>
          <p class="mem-bio">"${u.bio || 'Making our neighborhood greener every single day.'}"</p>
          <div class="mem-stats-row">
            <div class="mem-stat-item">
              <span class="val">${u.points.toLocaleString()}</span>
              <span class="lbl">Green Points</span>
            </div>
            <div class="mem-stat-item">
              <span class="val">${u.myImpact.totalActions}</span>
              <span class="lbl">Eco Actions</span>
            </div>
          </div>
        </div>
        <div class="mem-footer-meta">
          <span class="mem-badge-pill">${topBadge.icon} ${topBadge.name}</span>
          <span class="mem-location">📍 ${u.neighborhood || 'Local District'}</span>
        </div>
      </div>
    `;
  }).join("");
}

// ============================================================================
// 12. LOG ECO-ACTION & RECALCULATION PIPELINE
// ============================================================================

let activeSelectedAction = "bike";

function initActionLoggingPortal() {
  const cards = document.querySelectorAll(".action-card");
  const qtyInput = document.getElementById("action-quantity-input");
  const minusBtn = document.getElementById("qty-minus");
  const plusBtn = document.getElementById("qty-plus");
  const submitBtn = document.getElementById("submit-eco-action-btn");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => {
        c.classList.remove("selected");
        c.setAttribute("aria-checked", "false");
      });
      card.classList.add("selected");
      card.setAttribute("aria-checked", "true");
      activeSelectedAction = card.dataset.action;
      updateActionCalculationPreview();
      playSound("click");
    });
  });

  if (minusBtn && qtyInput) {
    minusBtn.addEventListener("click", () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val > 1) {
        qtyInput.value = val - 1;
        updateActionCalculationPreview();
        playSound("click");
      }
    });
  }

  if (plusBtn && qtyInput) {
    plusBtn.addEventListener("click", () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val < 100) {
        qtyInput.value = val + 1;
        updateActionCalculationPreview();
        playSound("click");
      }
    });
  }

  if (qtyInput) qtyInput.addEventListener("input", updateActionCalculationPreview);
  if (submitBtn) submitBtn.addEventListener("click", handleEcoActionSubmit);

  updateActionCalculationPreview();
}

function updateActionCalculationPreview() {
  const def = ACTION_DEFS[activeSelectedAction];
  const qtyInput = document.getElementById("action-quantity-input");
  const labelEl = document.getElementById("quantity-label");
  const unitBadge = document.getElementById("quantity-unit-badge");
  const ptsVal = document.getElementById("preview-points-val");
  const co2Val = document.getElementById("preview-co2-val");

  if (!def || !qtyInput) return;

  const qty = Math.max(1, parseInt(qtyInput.value) || 1);
  const totalPts = qty * def.ptsPerUnit;
  const co2Est = (qty * def.co2PerUnit).toFixed(2);

  if (labelEl) labelEl.textContent = def.label;
  if (unitBadge) unitBadge.textContent = def.unit;
  if (ptsVal) ptsVal.textContent = `+${totalPts}`;
  if (co2Val) co2Val.textContent = `≈ ${co2Est} kg CO₂ emissions avoided`;
}

function handleEcoActionSubmit() {
  const def = ACTION_DEFS[activeSelectedAction];
  const qtyInput = document.getElementById("action-quantity-input");
  const noteInput = document.getElementById("action-note-input");

  const qty = Math.max(1, parseInt(qtyInput.value) || 1);
  const pointsEarned = qty * def.ptsPerUnit;
  const co2Saved = qty * def.co2PerUnit;
  const user = getActiveUser();

  // 1. Update Current User State
  user.points += pointsEarned;
  user.myImpact.totalActions += 1;
  user.myImpact.co2 += co2Saved;
  if (activeSelectedAction === "tree") user.myImpact.trees += qty;
  if (activeSelectedAction === "recycle" || activeSelectedAction === "compost") user.myImpact.waste += qty;
  if (activeSelectedAction === "energy") user.myImpact.power += qty;
  if (activeSelectedAction === "bike") user.myImpact.travelKm = (user.myImpact.travelKm || 0) + qty;

  user.actionCounts[activeSelectedAction] = (user.actionCounts[activeSelectedAction] || 0) + 1;

  // Add to personal action history
  if (!user.actionHistory) user.actionHistory = [];
  user.actionHistory.unshift({
    id: "act_" + Date.now(),
    type: activeSelectedAction,
    title: `${def.title}: ${qty} ${def.unit}`,
    qty: qty,
    unit: def.unit,
    pts: pointsEarned,
    co2: co2Saved,
    note: noteInput && noteInput.value.trim() ? noteInput.value.trim() : "",
    date: "Today",
    timestamp: Date.now()
  });

  // 2. Update Community Aggregate
  AppState.community.totalActions += 1;
  AppState.community.co2Saved += Math.round(co2Saved);
  if (activeSelectedAction === "tree") AppState.community.treesPlanted += qty;
  if (activeSelectedAction === "energy") AppState.community.energySaved += qty;
  AppState.community.weeklyGoal.current = Math.min(
    AppState.community.weeklyGoal.target,
    AppState.community.weeklyGoal.current + Math.round(co2Saved)
  );

  // 3. Prepend to Community Feed
  const displayName = user.displayPreference === "username" ? `@${user.username}` : user.name;
  AppState.feed.unshift({
    user: displayName,
    action: `${def.title}: ${qty} ${def.unit} logged${noteInput && noteInput.value ? ` ("${noteInput.value}")` : ''}`,
    icon: activeSelectedAction === "tree" ? "🌳" : activeSelectedAction === "bike" ? "🚲" : "🌱",
    time: "just now",
    pts: pointsEarned,
    cheers: 1
  });
  if (AppState.feed.length > 25) AppState.feed.pop();

  // 4. Update Challenges
  if (user.challenges) {
    user.challenges.forEach(ch => {
      if (ch.status === "in_progress") {
        if (activeSelectedAction === "bike" && ch.id === "ch_carfree") ch.progress = Math.min(ch.goal, ch.progress + qty);
        if (activeSelectedAction === "tree" && ch.id === "ch_trees") ch.progress = Math.min(ch.goal, ch.progress + qty);
        if (activeSelectedAction === "energy" && ch.id === "ch_energy") ch.progress = Math.min(ch.goal, ch.progress + qty);
        if (ch.id === "ch_7day") ch.progress = Math.min(ch.goal, ch.progress + 1);

        if (ch.progress >= ch.goal) {
          ch.status = "completed";
          user.points += ch.reward;
          showToast("Challenge Completed!", `"${ch.title}" achieved! +${ch.reward} GP bonus.`, "🏆");
        }
      }
    });
  }

  // 5. Check Level & Badges
  updateLevelProgression(user);
  checkBadgeUnlocks(user);

  saveAllData();
  renderAll();
  initImpactChart();

  triggerConfettiBurst();
  playSound("success");
  showToast(
    "Eco Action Logged!",
    `+${pointsEarned} Green Points earned for ${qty} ${def.unit} of ${def.title}.`,
    "🌱"
  );

  if (noteInput) noteInput.value = "";
}

function updateLevelProgression(user) {
  let newIdx = 0;
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (user.points >= LEVELS[i].minPoints) {
      newIdx = i;
      break;
    }
  }

  const oldIdx = user.levelIndex || 0;
  user.levelIndex = newIdx;

  if (newIdx > oldIdx) {
    showCelebrationModal(
      `Level Up: ${LEVELS[newIdx].name}!`,
      `You reached Level ${newIdx + 1} with ${user.points.toLocaleString()} GP!`,
      "+ Level Accolade",
      LEVELS[newIdx].icon
    );
  }
}

function checkBadgeUnlocks(user) {
  if (!user.badges) return;
  user.badges.forEach(b => {
    if (b.unlocked) return;

    if (b.id === "planet_prot" && user.points >= 1500) {
      b.unlocked = true;
      b.progress = 100;
      showCelebrationModal(`Achievement: ${b.name}!`, b.desc, "+ Dynamic Badge", b.icon);
    }
    if (b.id === "legend" && user.levelIndex >= 4) {
      b.unlocked = true;
      b.progress = 100;
      showCelebrationModal(`Achievement: ${b.name}!`, b.desc, "+ Earth Legend Status", b.icon);
    }
  });
}

// ============================================================================
// 13. ECO ARCADE (4 LIGHTWEIGHT GAMES)
// ============================================================================

// GAME 1: Sort It Right
const SORT_ITEMS = [
  { name: "Banana Peel", icon: "🍌", bin: "compost", hint: "Organic fruit remnant" },
  { name: "Glass Soda Bottle", icon: "🍾", bin: "recycle", hint: "Clean glass container" },
  { name: "Daily Newspaper", icon: "📄", bin: "recycle", hint: "Dry fibrous paper" },
  { name: "Tin Soup Can", icon: "🥫", bin: "recycle", hint: "Rinsed metal container" },
  { name: "Lithium Battery", icon: "🔋", bin: "special", hint: "Hazardous electronic waste" },
  { name: "Dry Autumn Leaves", icon: "🍂", bin: "compost", hint: "Brown carbon compost matter" },
  { name: "Styrofoam Cup", icon: "☕", bin: "general", hint: "Non-recyclable polystyrene" },
  { name: "Broken Phone", icon: "📱", bin: "special", hint: "E-waste with recoverable metals" }
];

let sortGameTimer = null;
let sortTimeRemaining = 30;
let sortScore = 0;
let sortItemIdx = 0;
let sortActive = false;

function initSortGame() {
  const startBtn = document.getElementById("start-sort-game-btn");
  const replayBtn = document.getElementById("replay-sort-game-btn");
  const binBtns = document.querySelectorAll(".waste-bin-btn");

  if (startBtn) startBtn.addEventListener("click", startSortGame);
  if (replayBtn) replayBtn.addEventListener("click", startSortGame);

  binBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (!sortActive) return;
      handleSortChoice(btn.dataset.bin);
    });
  });
}

function startSortGame() {
  sortActive = true;
  sortScore = 0;
  sortTimeRemaining = 30;
  sortItemIdx = 0;

  document.getElementById("sort-start-screen").classList.add("hidden");
  document.getElementById("sort-results-screen").classList.add("hidden");
  document.getElementById("sort-play-area").classList.remove("hidden");

  document.getElementById("sort-score-val").textContent = sortScore;
  document.getElementById("sort-timer-val").textContent = `${sortTimeRemaining}s`;

  renderSortItem();

  clearInterval(sortGameTimer);
  sortGameTimer = setInterval(() => {
    sortTimeRemaining--;
    document.getElementById("sort-timer-val").textContent = `${sortTimeRemaining}s`;
    if (sortTimeRemaining <= 0) endSortGame();
  }, 1000);
}

function renderSortItem() {
  const item = SORT_ITEMS[sortItemIdx % SORT_ITEMS.length];
  document.getElementById("waste-emoji").textContent = item.icon;
  document.getElementById("waste-name").textContent = item.name;
  document.getElementById("waste-hint").textContent = item.hint;
}

function handleSortChoice(selectedBin) {
  const item = SORT_ITEMS[sortItemIdx % SORT_ITEMS.length];
  const bubble = document.getElementById("sort-feedback-bubble");

  if (selectedBin === item.bin) {
    sortScore += 10;
    document.getElementById("sort-score-val").textContent = sortScore;
    bubble.textContent = "+10 Correct! ✓";
    bubble.className = "feedback-bubble correct";
    playSound("correct");
  } else {
    bubble.textContent = `Belongs in ${item.bin.toUpperCase()}!`;
    bubble.className = "feedback-bubble wrong";
    playSound("wrong");
  }

  setTimeout(() => { bubble.style.opacity = "0"; }, 800);
  sortItemIdx++;
  renderSortItem();
}

function endSortGame() {
  clearInterval(sortGameTimer);
  sortActive = false;

  document.getElementById("sort-play-area").classList.add("hidden");
  document.getElementById("sort-results-screen").classList.remove("hidden");
  document.getElementById("sort-final-score").textContent = sortScore;

  const pts = Math.max(10, Math.floor(sortScore / 4));
  const user = getActiveUser();
  user.points += pts;
  user.arcadeStats.played += 1;
  user.arcadeStats.points += pts;
  if (sortScore > user.arcadeStats.sortBest) user.arcadeStats.sortBest = sortScore;

  document.getElementById("sort-points-awarded").textContent = `+${pts} Green Points Added to Profile!`;
  saveAllData();
  renderAll();
  playSound("badge");
}

// GAME 2: Plant A Tree
let treeGrowthStage = 0;

function initPlantTreeGame() {
  const seedBtn = document.getElementById("btn-tree-seed");
  const waterBtn = document.getElementById("btn-tree-water");
  const sunBtn = document.getElementById("btn-tree-sun");
  const growBtn = document.getElementById("btn-tree-grow");
  const anotherBtn = document.getElementById("grow-another-tree-btn");

  if (seedBtn) seedBtn.addEventListener("click", () => advanceTreeStage(1));
  if (waterBtn) waterBtn.addEventListener("click", () => advanceTreeStage(2));
  if (sunBtn) sunBtn.addEventListener("click", () => advanceTreeStage(3));
  if (growBtn) growBtn.addEventListener("click", () => advanceTreeStage(4));
  if (anotherBtn) anotherBtn.addEventListener("click", resetTreeGame);
}

function advanceTreeStage(stage) {
  const art = document.getElementById("tree-art-figure");
  const banner = document.getElementById("tree-step-instruction");
  const seedBtn = document.getElementById("btn-tree-seed");
  const waterBtn = document.getElementById("btn-tree-water");
  const sunBtn = document.getElementById("btn-tree-sun");
  const growBtn = document.getElementById("btn-tree-grow");

  treeGrowthStage = stage;
  playSound("click");

  if (stage === 1) {
    art.innerHTML = '<div class="art-seed">🌱</div>';
    banner.textContent = 'Step 2: Tap "Water" to hydrate your sapling.';
    seedBtn.disabled = true;
    seedBtn.classList.remove("active");
    waterBtn.disabled = false;
    waterBtn.classList.add("active");
  } else if (stage === 2) {
    art.innerHTML = '<div class="art-sprout">🌿</div>';
    banner.textContent = "Step 3: Provide warm sunlight for photosynthesis.";
    waterBtn.disabled = true;
    waterBtn.classList.remove("active");
    sunBtn.disabled = false;
    sunBtn.classList.add("active");
    playSound("correct");
  } else if (stage === 3) {
    art.innerHTML = '<div class="art-midtree">🌲</div>';
    banner.textContent = 'Step 4: Tap "Mature" to see the full canopy blossom!';
    sunBtn.disabled = true;
    sunBtn.classList.remove("active");
    growBtn.disabled = false;
    growBtn.classList.add("active");
    playSound("correct");
  } else if (stage === 4) {
    art.innerHTML = '<div class="art-mature" style="font-size: 6.5rem;">🌳</div>';
    banner.textContent = "Magnificent! Mature Oak tree now flourishing!";
    growBtn.disabled = true;
    growBtn.classList.remove("active");

    const user = getActiveUser();
    user.points += 25;
    user.myImpact.trees += 1;
    user.arcadeStats.treesGrown += 1;
    user.arcadeStats.points += 25;
    AppState.community.treesPlanted += 1;

    saveAllData();
    renderAll();
    document.getElementById("tree-complete-box").classList.remove("hidden");
    triggerConfettiBurst();
    playSound("badge");
  }
}

function resetTreeGame() {
  treeGrowthStage = 0;
  document.getElementById("tree-complete-box").classList.add("hidden");
  document.getElementById("tree-art-figure").innerHTML = '<div class="art-seed">🌱</div>';
  document.getElementById("tree-step-instruction").textContent = 'Step 1: Tap "Plant Seed" into fertile soil.';

  document.getElementById("btn-tree-seed").disabled = false;
  document.getElementById("btn-tree-seed").classList.add("active");
  document.getElementById("btn-tree-water").disabled = true;
  document.getElementById("btn-tree-sun").disabled = true;
  document.getElementById("btn-tree-grow").disabled = true;
}

// GAME 3: Eco Quiz
const QUIZ_QUESTIONS = [
  {
    q: "Which household item is best replaced by a durable reusable alternative?",
    options: ["Single-use plastic water bottles", "Rechargeable flashlight", "Ceramic dinner plates", "Glass window panes"],
    answer: 0,
    expl: "Single-use water bottles take over 450 years to degrade and leak microplastics. Stainless bottles last a lifetime!"
  },
  {
    q: "What is 'Vampire Power' (phantom electricity load)?",
    options: ["Energy produced by solar arrays at dusk", "Electricity drawn by plugged devices when switched OFF", "Surge power during thunderstorms", "Electric vehicle battery loss in cold weather"],
    answer: 1,
    expl: "Standby electronics can account for up to 10% of household electric bills simply by resting on idle!"
  },
  {
    q: "Why is composting food waste better than sending it to an ordinary landfill?",
    options: ["Food scraps produce clean water in landfills", "Landfills lack oxygen, causing food to turn into potent methane gas", "Compost turns into plastic over time", "Landfills cannot accept organic materials by law"],
    answer: 1,
    expl: "Aerobic composting prevents anaerobic decomposition, suppressing methane (which is 28x more heat-trapping than CO₂)."
  },
  {
    q: "How much CO₂ can one mature tree absorb on average per year?",
    options: ["Around 22 kilograms (48 lbs)", "Less than 100 grams", "Over 5,000 kilograms", "Only trees in rainforests absorb carbon"],
    answer: 0,
    expl: "A typical mature tree sequesters approximately 22 kg of CO₂ annually, cooling neighborhood streets simultaneously."
  },
  {
    q: "What is the most effective single habit to reduce personal transportation emissions?",
    options: ["Washing cars with cold water", "Driving with windows open", "Replacing short solo drives with cycling or walking", "Parking in covered shade"],
    answer: 2,
    expl: "Short vehicle trips produce disproportionate cold-engine emissions. Human-powered travel produces 0 grams of tailpipe carbon!"
  }
];

let quizIdx = 0;
let quizScore = 0;

function initEcoQuiz() {
  const nextBtn = document.getElementById("quiz-next-btn");
  const restartBtn = document.getElementById("quiz-restart-btn");
  if (nextBtn) nextBtn.addEventListener("click", nextQuizQuestion);
  if (restartBtn) restartBtn.addEventListener("click", restartQuiz);
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qData = QUIZ_QUESTIONS[quizIdx];
  document.getElementById("quiz-q-num").textContent = quizIdx + 1;
  document.getElementById("quiz-question-text").textContent = qData.q;

  const optContainer = document.getElementById("quiz-options-list");
  optContainer.innerHTML = "";
  document.getElementById("quiz-expl-box").classList.add("hidden");

  qData.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-opt-btn";
    btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
    btn.addEventListener("click", () => handleQuizAnswer(idx, btn));
    optContainer.appendChild(btn);
  });
}

function handleQuizAnswer(selectedIndex, clickedBtn) {
  const qData = QUIZ_QUESTIONS[quizIdx];
  document.querySelectorAll(".quiz-opt-btn").forEach(b => b.disabled = true);

  const explBox = document.getElementById("quiz-expl-box");
  const explText = document.getElementById("quiz-expl-text");

  if (selectedIndex === qData.answer) {
    clickedBtn.classList.add("correct");
    quizScore++;
    explText.textContent = `Correct! ${qData.expl}`;
    playSound("correct");
  } else {
    clickedBtn.classList.add("wrong");
    document.querySelectorAll(".quiz-opt-btn")[qData.answer].classList.add("correct");
    explText.textContent = `Not quite. ${qData.expl}`;
    playSound("wrong");
  }
  explBox.classList.remove("hidden");
}

function nextQuizQuestion() {
  quizIdx++;
  if (quizIdx < QUIZ_QUESTIONS.length) {
    renderQuizQuestion();
  } else {
    document.getElementById("quiz-active-box").classList.add("hidden");
    document.getElementById("quiz-results-box").classList.remove("hidden");
    document.getElementById("quiz-final-score").textContent = quizScore;

    const reward = quizScore * 6;
    const user = getActiveUser();
    user.points += reward;
    user.arcadeStats.played += 1;
    user.arcadeStats.points += reward;
    user.arcadeStats.quizAccuracy = Math.round((quizScore / QUIZ_QUESTIONS.length) * 100);

    saveAllData();
    renderAll();
    playSound("badge");
  }
}

function restartQuiz() {
  quizIdx = 0;
  quizScore = 0;
  document.getElementById("quiz-results-box").classList.add("hidden");
  document.getElementById("quiz-active-box").classList.remove("hidden");
  renderQuizQuestion();
}

// GAME 4: Energy Saver
let energyTimer = null;
let energyTimeRemaining = 20;
let energyActiveWattage = 1450;

function initEnergySaverGame() {
  const startBtn = document.getElementById("start-energy-btn");
  const replayBtn = document.getElementById("replay-energy-btn");
  const appliances = document.querySelectorAll(".appliance-btn");

  if (startBtn) startBtn.addEventListener("click", startEnergyGame);
  if (replayBtn) replayBtn.addEventListener("click", startEnergyGame);

  appliances.forEach(app => {
    app.addEventListener("click", () => {
      if (app.classList.contains("is-on")) {
        app.classList.remove("is-on");
        app.classList.add("is-off");
        app.querySelector(".appliance-status").textContent = "Status: OFF ✓";

        const drawMatch = app.querySelector(".appliance-draw").textContent.match(/\d+/);
        const draw = drawMatch ? parseInt(drawMatch[0]) : 100;
        energyActiveWattage = Math.max(0, energyActiveWattage - draw);
        document.getElementById("room-watt-display").textContent = `${energyActiveWattage} W`;
        playSound("click");

        if (document.querySelectorAll(".appliance-btn.is-on").length === 0) {
          endEnergyGame();
        }
      }
    });
  });
}

function startEnergyGame() {
  energyTimeRemaining = 20;
  energyActiveWattage = 1450;

  document.getElementById("energy-start-screen").classList.add("hidden");
  document.getElementById("energy-results-screen").classList.add("hidden");
  document.getElementById("energy-room-grid").classList.remove("hidden");

  document.getElementById("room-watt-display").textContent = "1,450 W";
  document.getElementById("energy-timer-display").textContent = `${energyTimeRemaining}s`;

  document.querySelectorAll(".appliance-btn").forEach(app => {
    app.classList.add("is-on");
    app.classList.remove("is-off");
    app.querySelector(".appliance-status").textContent = "Status: ON";
  });

  clearInterval(energyTimer);
  energyTimer = setInterval(() => {
    energyTimeRemaining--;
    document.getElementById("energy-timer-display").textContent = `${energyTimeRemaining}s`;
    if (energyTimeRemaining <= 0) endEnergyGame();
  }, 1000);
}

function endEnergyGame() {
  clearInterval(energyTimer);
  document.getElementById("energy-room-grid").classList.add("hidden");
  document.getElementById("energy-results-screen").classList.remove("hidden");

  const killedWatts = 1450 - energyActiveWattage;
  const kwh = (killedWatts * 0.001).toFixed(2);
  document.getElementById("energy-saved-val").textContent = `${kwh} kWh`;

  const user = getActiveUser();
  user.points += 25;
  user.myImpact.power += Math.round(killedWatts * 0.01);
  user.arcadeStats.played += 1;
  user.arcadeStats.points += 25;
  AppState.community.energySaved += Math.round(killedWatts * 0.01);

  saveAllData();
  renderAll();
  playSound("badge");
}

function initArcadeTabs() {
  const tabs = document.querySelectorAll(".game-tab-btn");
  const panels = document.querySelectorAll(".game-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const targetId = tab.getAttribute("aria-controls");
      panels.forEach(p => {
        if (p.id === targetId) {
          p.classList.add("active");
          p.removeAttribute("hidden");
        } else {
          p.classList.remove("active");
          p.setAttribute("hidden", "");
        }
      });
      playSound("click");
    });
  });
}

// ============================================================================
// 14. LEADERBOARD & COMMUNITY FEED
// ============================================================================

let currentLeaderboardTab = "weekly";

function initLeaderboardAndFeed() {
  const weeklyTab = document.getElementById("tab-lead-weekly");
  const allTimeTab = document.getElementById("tab-lead-alltime");

  if (weeklyTab && allTimeTab) {
    weeklyTab.addEventListener("click", () => {
      weeklyTab.classList.add("active");
      allTimeTab.classList.remove("active");
      currentLeaderboardTab = "weekly";
      renderLeaderboard();
      playSound("click");
    });

    allTimeTab.addEventListener("click", () => {
      allTimeTab.classList.add("active");
      weeklyTab.classList.remove("active");
      currentLeaderboardTab = "alltime";
      renderLeaderboard();
      playSound("click");
    });
  }
}

function renderLeaderboard() {
  const tbody = document.getElementById("leaderboard-tbody");
  const podium = document.getElementById("podium-container");
  if (!tbody) return;

  const current = getActiveUser();

  // Combine registered users into leaderboard
  const list = AppState.users.map(u => {
    const isCurrent = u.id === current.id && !AppState.isGuest;
    const pts = currentLeaderboardTab === "alltime" ? u.points * 3 + 240 : u.points;
    const displayName = u.displayPreference === "username" ? `@${u.username}` : u.name;

    return {
      id: u.id,
      name: displayName,
      avatar: u.avatar || "🌱",
      level: LEVELS[u.levelIndex].name,
      actions: u.myImpact.totalActions,
      points: pts,
      isUser: isCurrent
    };
  });

  // If in guest mode, add guest entry
  if (AppState.isGuest) {
    list.push({
      id: "usr_guest",
      name: "Guest Explorer (You)",
      avatar: "👤",
      level: "Seedling",
      actions: current.myImpact.totalActions,
      points: currentLeaderboardTab === "alltime" ? current.points * 3 : current.points,
      isUser: true
    });
  }

  list.sort((a, b) => b.points - a.points);
  list.forEach((item, idx) => item.rank = idx + 1);

  // Render Podium for top 3
  if (podium && list.length >= 3) {
    const p1 = list[0];
    const p2 = list[1];
    const p3 = list[2];

    podium.innerHTML = `
      <div class="podium-spot rank-2">
        <div class="podium-avatar">${p2.avatar}</div>
        <div class="podium-name">${p2.name}</div>
        <div class="podium-pts">${p2.points.toLocaleString()} GP</div>
        <div class="podium-pillar pillar-2">2</div>
      </div>
      <div class="podium-spot rank-1">
        <div class="crown-icon">👑</div>
        <div class="podium-avatar">${p1.avatar}</div>
        <div class="podium-name">${p1.name}</div>
        <div class="podium-pts">${p1.points.toLocaleString()} GP</div>
        <div class="podium-pillar pillar-1">1</div>
      </div>
      <div class="podium-spot rank-3">
        <div class="podium-avatar">${p3.avatar}</div>
        <div class="podium-name">${p3.name}</div>
        <div class="podium-pts">${p3.points.toLocaleString()} GP</div>
        <div class="podium-pillar pillar-3">3</div>
      </div>
    `;
  }

  // Render Table
  tbody.innerHTML = list.map(item => `
    <tr class="${item.isUser ? 'user-row' : ''}">
      <td><strong>#${item.rank}</strong></td>
      <td>
        <div class="user-cell">
          <span class="hero-avatar">${item.avatar}</span>
          <span>${item.name} ${item.isUser ? '<span class="you-tag">(You)</span>' : ''}</span>
        </div>
      </td>
      <td><span class="step-badge unlocked">${item.level}</span></td>
      <td>${item.actions} actions</td>
      <td><strong style="color: var(--leaf-green); font-family: var(--font-mono);">${item.points.toLocaleString()} GP</strong></td>
    </tr>
  `).join("");

  // Update "My Rank" banner with gap calculation
  const myRankIdx = list.findIndex(i => i.isUser);
  const myRankNum = document.getElementById("my-rank-num");
  const myRankName = document.getElementById("my-rank-name");
  const myRankPts = document.getElementById("my-rank-pts");
  const myRankGap = document.getElementById("my-rank-gap");
  const profileRankVal = document.getElementById("profile-rank-val");

  if (myRankIdx !== -1) {
    const myItem = list[myRankIdx];
    if (myRankNum) myRankNum.textContent = `#${myItem.rank}`;
    if (myRankName) myRankName.textContent = myItem.name;
    if (myRankPts) myRankPts.textContent = `${myItem.points.toLocaleString()} GP`;
    if (profileRankVal) profileRankVal.textContent = `#${myItem.rank} 🌍`;

    if (myRankGap) {
      if (myRankIdx === 0) {
        myRankGap.innerHTML = `👑 <strong>#1 Leader!</strong> Leading our community with outstanding stewardship.`;
      } else {
        const nextTarget = list[myRankIdx - 1];
        const gap = nextTarget.points - myItem.points + 1;
        myRankGap.innerHTML = `You are only <strong>${gap.toLocaleString()} points</strong> away from #${nextTarget.rank} (${nextTarget.name})!`;
      }
    }
  }
}

function renderCommunityFeed() {
  const list = document.getElementById("community-feed-list");
  if (!list) return;

  list.innerHTML = AppState.feed.map((f, idx) => `
    <div class="feed-item" role="article">
      <div class="feed-avatar">${f.icon}</div>
      <div class="feed-body">
        <div class="feed-user">${f.user}</div>
        <div class="feed-action">${f.action}</div>
        <div class="feed-time">${f.time} • <span style="color: var(--leaf-green); font-weight: 700;">+${f.pts} GP</span></div>
      </div>
      <button type="button" class="feed-cheer-btn" data-index="${idx}" title="Cheer on this eco-action!">
        💚 <span class="cheer-count">${f.cheers || 1}</span>
      </button>
    </div>
  `).join("");

  list.querySelectorAll(".feed-cheer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.dataset.index;
      AppState.feed[idx].cheers = (AppState.feed[idx].cheers || 1) + 1;
      btn.querySelector(".cheer-count").textContent = AppState.feed[idx].cheers;
      playSound("click");
      saveAllData();
    });
  });
}

// ============================================================================
// 15. ECO CHALLENGES & INTERACTIVE TIPS
// ============================================================================

function renderChallenges() {
  const container = document.getElementById("challenges-grid-container");
  if (!container) return;

  const user = getActiveUser();
  const challenges = user.challenges && user.challenges.length ? user.challenges : DEFAULT_SAMPLE_USERS[0].challenges;

  container.innerHTML = challenges.map(ch => {
    const pct = Math.min(100, Math.round((ch.progress / ch.goal) * 100));
    const isDone = ch.status === "completed";

    return `
      <div class="challenge-card" role="region" aria-label="${ch.title}">
        <div class="challenge-top">
          <div class="challenge-icon">${ch.title.split(' ')[0]}</div>
          <span class="challenge-reward-badge">+${ch.reward} GP</span>
        </div>
        <h3 class="challenge-title">${ch.title}</h3>
        <p class="challenge-desc">${ch.desc}</p>
        <div class="challenge-progress-wrap">
          <div class="ch-progress-labels">
            <span>Progress (${pct}%)</span>
            <strong>${ch.progress} / ${ch.goal} ${ch.unit}</strong>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
        <button type="button" class="btn ${isDone ? 'btn-secondary' : 'btn-outline-success'} challenge-action-btn" data-id="${ch.id}">
          ${isDone ? 'Completed ✓' : ch.progress > 0 ? 'Update Progress' : 'Start Challenge'}
        </button>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".challenge-action-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const ch = challenges.find(c => c.id === id);
      if (!ch) return;

      if (ch.status !== "completed") {
        ch.progress = Math.min(ch.goal, ch.progress + 1);
        if (ch.progress >= ch.goal) {
          ch.status = "completed";
          user.points += ch.reward;
          showToast("Challenge Unlocked!", `Finished "${ch.title}"! +${ch.reward} GP.`, "🏆");
          playSound("badge");
        } else {
          showToast("Challenge Progress", `Step logged for "${ch.title}".`, "🌱");
          playSound("click");
        }
        saveAllData();
        renderAll();
      }
    });
  });
}

const ECO_TIPS = [
  { id: "tip_bottle", cat: "waste", icon: "💧", title: "Carry a Reusable Stainless Bottle", expl: "Prevents up to 167 plastic bottles per person annually.", benefit: "Avoids 15 kg plastic waste/yr" },
  { id: "tip_walk", cat: "transport", icon: "🚲", title: "Walk or Bike Under 2 Kilometers", expl: "Short automobile trips emit 3x more tailpipe carbon per mile.", benefit: "Cuts 1.2 kg CO₂ per trip" },
  { id: "tip_light", cat: "energy", icon: "💡", title: "Turn Off Vampires & Switch to LEDs", expl: "LED bulbs consume 85% less electricity than incandescent filaments.", benefit: "Saves ~120 kWh per year" },
  { id: "tip_tote", cat: "waste", icon: "🛍️", title: "Keep Reusable Totes in Your Bag or Car", expl: "Plastic bags take centuries to degrade into hazardous microplastics.", benefit: "Saves 350 bags per year" },
  { id: "tip_plant", cat: "nature", icon: "🌱", title: "Grow a Pollinator Balcony Herb Pot", expl: "Helps native honeybees and improves urban microclimate cooling.", benefit: "Supports local biodiversity" },
  { id: "tip_compost", cat: "waste", icon: "🍂", title: "Divert Coffee Grounds & Veggie Peels", expl: "Creates rich microbial soil and halts methane formation in landfills.", benefit: "Diverts 80 kg waste/yr" }
];

let activeTipFilter = "all";

function initTipsAndGoals() {
  document.querySelectorAll(".tip-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tip-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeTipFilter = btn.dataset.filter;
      renderTips();
      playSound("click");
    });
  });
  renderTips();
  renderUserGoals();
}

function renderTips() {
  const grid = document.getElementById("tips-grid-container");
  if (!grid) return;

  const user = getActiveUser();
  const filtered = activeTipFilter === "all" ? ECO_TIPS : ECO_TIPS.filter(t => t.cat === activeTipFilter);

  grid.innerHTML = filtered.map(t => {
    const isGoal = user.activeGoals && user.activeGoals.includes(t.title);
    return `
      <div class="tip-card" role="article">
        <div>
          <div class="tip-icon">${t.icon}</div>
          <h3 class="tip-title">${t.title}</h3>
          <p class="tip-explanation">${t.expl}</p>
        </div>
        <div>
          <div class="tip-benefit">${t.benefit}</div>
          <button type="button" class="try-tip-btn" data-title="${t.title}">
            ${isGoal ? '✓ In My Goals' : "I'll Try This"}
          </button>
        </div>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".try-tip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const title = btn.dataset.title;
      if (!user.activeGoals) user.activeGoals = [];

      if (!user.activeGoals.includes(title)) {
        user.activeGoals.push(title);
        showToast("Added to Goals!", `"${title}" is now tracked in your personal weekly goals.`, "💚");
        playSound("success");
      } else {
        showToast("Already in Goals", "You are already practicing this sustainability habit!", "✨");
      }
      saveAllData();
      renderTips();
      renderUserGoals();
    });
  });
}

function renderUserGoals() {
  const container = document.getElementById("user-goals-container");
  const countEl = document.getElementById("user-goals-count");
  if (!container) return;

  const user = getActiveUser();
  const goals = user.activeGoals || [];
  if (countEl) countEl.textContent = goals.length;

  if (goals.length === 0) {
    container.innerHTML = `<span class="empty-goals-hint">No active goals yet. Browse the tips above and click <strong>"I'll Try This"</strong>!</span>`;
    return;
  }

  container.innerHTML = goals.map((g, idx) => `
    <div class="user-goal-pill">
      <span>🌱 ${g}</span>
      <span class="goal-remove-btn" data-index="${idx}" title="Remove goal" role="button" tabindex="0">&times;</span>
    </div>
  `).join("");

  container.querySelectorAll(".goal-remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      user.activeGoals.splice(idx, 1);
      saveAllData();
      renderTips();
      renderUserGoals();
      playSound("click");
    });
  });
}

// ============================================================================
// 16. FUTURISTIC IMPACT MAP
// ============================================================================

const MAP_PINS = [
  { id: 1, title: "North Park Tree Sanctuary", cat: "tree", type: "Native Forestation", contrib: "124 Native Trees", points: "+6,200 GP", desc: "Volunteer community planting zone established this spring. Over 124 saplings are monitored by local youth and park wardens.", icon: "🌳" },
  { id: 2, title: "Solar Heights Microgrid", cat: "solar", type: "Rooftop Clean Energy", contrib: "42 Solar Rooftops", points: "+4,100 GP", desc: "Decentralized photovoltaic battery cluster feeding clean zero-carbon solar back into the neighborhood district grid.", icon: "⚡" },
  { id: 3, title: "River Commons Sorting Hub", cat: "recycle", type: "Materials Reclamation", contrib: "380 kg E-Waste & Plastic", points: "+3,040 GP", desc: "Neighborhood clean recycling facility with automated electronic scrap disassembly and compost distribution.", icon: "♻️" },
  { id: 4, title: "Green Valley Bike Corridor", cat: "bike", type: "Active Mobility Path", contrib: "860 km Logged", points: "+8,600 GP", desc: "Protected, shaded bike lane connecting residential zones to downtown with zero tailpipe emissions.", icon: "🚲" },
  { id: 5, title: "Civic Community Compost", cat: "tree", type: "Organic Humus Hub", contrib: "210 kg Soil Produced", points: "+2,100 GP", desc: "Aerobic microbial decomposition bins transforming restaurant food remnants into rich garden loam.", icon: "🍃" },
  { id: 6, title: "Eastside Storage Battery", cat: "solar", type: "Peak Grid Optimization", contrib: "120 kWh Dispatched", points: "+480 GP", desc: "Utility-scale smart storage battery balancing neighborhood power draw during high peak heatwaves.", icon: "💡" }
];

function initImpactMap() {
  const pinBtns = document.querySelectorAll(".map-marker-pin");
  const chipBtns = document.querySelectorAll(".map-chip");
  const detailCard = document.getElementById("map-marker-details");
  const closeBtn = document.getElementById("close-marker-details");

  pinBtns.forEach(pin => {
    pin.addEventListener("click", () => {
      const pinId = parseInt(pin.dataset.id);
      const data = MAP_PINS.find(p => p.id === pinId);
      if (data && detailCard) {
        document.getElementById("marker-detail-icon").textContent = data.icon;
        document.getElementById("marker-detail-title").textContent = data.title;
        document.getElementById("marker-detail-cat").textContent = `Category: ${data.type}`;
        document.getElementById("marker-detail-desc").textContent = data.desc;
        document.getElementById("marker-detail-contrib").textContent = data.contrib;
        document.getElementById("marker-detail-points").textContent = data.points;
        detailCard.style.display = "block";
        playSound("click");
      }
    });
  });

  if (closeBtn && detailCard) {
    closeBtn.addEventListener("click", () => {
      detailCard.style.display = "none";
      playSound("click");
    });
  }

  chipBtns.forEach(chip => {
    chip.addEventListener("click", () => {
      chipBtns.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const pinType = chip.dataset.pinType;

      pinBtns.forEach(pin => {
        const pinId = parseInt(pin.dataset.id);
        const data = MAP_PINS.find(p => p.id === pinId);
        pin.style.display = (pinType === "all" || data.cat === pinType) ? "flex" : "none";
      });
      playSound("click");
    });
  });
}

// ============================================================================
// 17. SETTINGS, MODES & USER PREFERENCES
// ============================================================================

function initSettings() {
  const drawer = document.getElementById("settings-drawer");
  const backdrop = document.getElementById("settings-backdrop");
  const openBtn = document.getElementById("settings-open-btn");
  const closeBtn = document.getElementById("settings-close-btn");
  const footerBtn = document.getElementById("footer-settings-btn");

  function openDrawer() {
    drawer.classList.add("active");
    backdrop.classList.add("active");
    backdrop.classList.remove("hidden");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
    playSound("click");
  }

  function closeDrawer() {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
    backdrop.classList.add("hidden");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");
  }

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (footerBtn) footerBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  // Audience Mode Pills in Top Announcer Bar
  document.querySelectorAll(".mode-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".mode-pill").forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-pressed", "false");
      });
      pill.classList.add("active");
      pill.setAttribute("aria-pressed", "true");

      const user = getActiveUser();
      user.settings.mode = pill.dataset.mode;
      saveAllData();
      applyUserSettings();
      showToast("Experience Mode Updated", `Switched to ${pill.textContent.trim()}.`, "🎨");
      playSound("click");
    });
  });

  // Theme Select & Toggles
  const themeToggle = document.getElementById("theme-toggle-btn");
  const themeSelect = document.getElementById("theme-select");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const user = getActiveUser();
      user.settings.theme = user.settings.theme === "dark" ? "light" : "dark";
      saveAllData();
      applyUserSettings();
      playSound("click");
    });
  }
  if (themeSelect) {
    themeSelect.addEventListener("change", (e) => {
      const user = getActiveUser();
      user.settings.theme = e.target.value;
      saveAllData();
      applyUserSettings();
    });
  }

  // Green Color Swatches
  document.querySelectorAll(".swatch-btn").forEach(swatch => {
    swatch.addEventListener("click", () => {
      document.querySelectorAll(".swatch-btn").forEach(s => s.classList.remove("active"));
      swatch.classList.add("active");
      const user = getActiveUser();
      user.settings.greenTheme = swatch.dataset.color;
      saveAllData();
      applyUserSettings();
      playSound("click");
    });
  });

  // Text Size
  const textSizeSelect = document.getElementById("text-size-select");
  if (textSizeSelect) {
    textSizeSelect.addEventListener("change", (e) => {
      const user = getActiveUser();
      user.settings.textSize = e.target.value;
      saveAllData();
      applyUserSettings();
    });
  }

  // Accessibility Toggles
  const contrastChk = document.getElementById("contrast-toggle-chk");
  const quickContrast = document.getElementById("quick-contrast-toggle");
  if (contrastChk) {
    contrastChk.addEventListener("change", (e) => {
      const user = getActiveUser();
      user.settings.highContrast = e.target.checked;
      saveAllData();
      applyUserSettings();
    });
  }
  if (quickContrast) {
    quickContrast.addEventListener("click", () => {
      const user = getActiveUser();
      user.settings.highContrast = !user.settings.highContrast;
      saveAllData();
      applyUserSettings();
      playSound("click");
    });
  }

  const motionChk = document.getElementById("motion-toggle-chk");
  if (motionChk) {
    motionChk.addEventListener("change", (e) => {
      const user = getActiveUser();
      user.settings.reducedMotion = e.target.checked;
      saveAllData();
      applyUserSettings();
    });
  }

  const soundChk = document.getElementById("sound-toggle-chk");
  const quickSound = document.getElementById("quick-sound-toggle");
  if (soundChk) {
    soundChk.addEventListener("change", (e) => {
      const user = getActiveUser();
      user.settings.soundEnabled = e.target.checked;
      saveAllData();
      applyUserSettings();
      if (user.settings.soundEnabled) playSound("success");
    });
  }
  if (quickSound) {
    quickSound.addEventListener("click", () => {
      const user = getActiveUser();
      user.settings.soundEnabled = !user.settings.soundEnabled;
      saveAllData();
      applyUserSettings();
      if (user.settings.soundEnabled) playSound("success");
    });
  }

  const confettiChk = document.getElementById("confetti-toggle-chk");
  if (confettiChk) {
    confettiChk.addEventListener("change", (e) => {
      const user = getActiveUser();
      user.settings.confettiEnabled = e.target.checked;
      saveAllData();
    });
  }

  // Reset Demo Baseline Modals
  const resetBtn = document.getElementById("reset-data-btn");
  const footerResetBtn = document.getElementById("footer-reset-btn");
  const resetModal = document.getElementById("reset-confirm-modal");
  const cancelResetBtn = document.getElementById("cancel-reset-btn");
  const confirmResetBtn = document.getElementById("confirm-reset-btn");

  if (resetBtn) resetBtn.addEventListener("click", () => resetModal.classList.remove("hidden"));
  if (footerResetBtn) footerResetBtn.addEventListener("click", () => resetModal.classList.remove("hidden"));
  if (cancelResetBtn) cancelResetBtn.addEventListener("click", () => resetModal.classList.add("hidden"));
  if (confirmResetBtn) {
    confirmResetBtn.addEventListener("click", () => {
      resetModal.classList.add("hidden");
      drawer.classList.remove("active");
      backdrop.classList.remove("active");
      resetDemoDataBaseline();
    });
  }

  // View Data Summary Modal
  const viewDataBtn = document.getElementById("view-data-btn");
  const dataSummaryModal = document.getElementById("data-summary-modal");
  const closeDataSummaryBtn = document.getElementById("close-data-summary-btn");

  if (viewDataBtn && dataSummaryModal) {
    viewDataBtn.addEventListener("click", () => {
      document.getElementById("stored-json-display").textContent = JSON.stringify(AppState, null, 2);
      dataSummaryModal.classList.remove("hidden");
      playSound("click");
    });
  }
  if (closeDataSummaryBtn && dataSummaryModal) {
    closeDataSummaryBtn.addEventListener("click", () => dataSummaryModal.classList.add("hidden"));
  }

  // Celebration Modal Close
  const celebCloseBtn = document.getElementById("celeb-close-btn");
  if (celebCloseBtn) celebCloseBtn.addEventListener("click", hideCelebrationModal);

  // Daily Mission Button
  const completeMissionBtn = document.getElementById("complete-mission-btn");
  if (completeMissionBtn) {
    completeMissionBtn.addEventListener("click", () => {
      const user = getActiveUser();
      if (!user.dailyMission.completed) {
        user.dailyMission.completed = true;
        user.points += user.dailyMission.points;
        user.streak += 1;
        saveAllData();
        renderAll();
        triggerConfettiBurst();
        playSound("success");
        showToast("Daily Mission Complete!", `+${user.dailyMission.points} GP awarded & streak increased!`, "🔥");
      }
    });
  }

  // Mobile Hamburger Menu
  const hamburger = document.getElementById("nav-hamburger");
  const navMenu = document.getElementById("nav-menu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const open = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !open);
      navMenu.classList.toggle("open");
      playSound("click");
    });

    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.addEventListener("scroll", handleNavbarScroll);
}

function handleNavbarScroll() {
  const header = document.getElementById("navbar");
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      if (link) link.classList.add("active");
    }
  });
}

function applyUserSettings() {
  const user = getActiveUser();
  const s = user.settings;
  const root = document.documentElement;

  root.setAttribute("data-theme", s.theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : s.theme);
  root.setAttribute("data-green-theme", s.greenTheme);
  root.setAttribute("data-mode", s.mode);
  root.setAttribute("data-text-size", s.textSize);

  if (s.highContrast) {
    document.body.classList.add("high-contrast");
    root.setAttribute("data-contrast", "high");
  } else {
    document.body.classList.remove("high-contrast");
    root.removeAttribute("data-contrast");
  }

  if (s.reducedMotion) {
    document.body.classList.add("reduced-motion");
  } else {
    document.body.classList.remove("reduced-motion");
  }

  // Update Controls
  const contrastChk = document.getElementById("contrast-toggle-chk");
  if (contrastChk) contrastChk.checked = s.highContrast;

  const motionChk = document.getElementById("motion-toggle-chk");
  if (motionChk) motionChk.checked = s.reducedMotion;

  const soundChk = document.getElementById("sound-toggle-chk");
  if (soundChk) soundChk.checked = s.soundEnabled;

  const soundIndicator = document.getElementById("sound-icon-indicator");
  if (soundIndicator) soundIndicator.textContent = s.soundEnabled ? "🔊" : "🔇";

  const themeSelect = document.getElementById("theme-select");
  if (themeSelect) themeSelect.value = s.theme;

  const textSizeSelect = document.getElementById("text-size-select");
  if (textSizeSelect) textSizeSelect.value = s.textSize;

  document.querySelectorAll(".swatch-btn").forEach(sw => {
    sw.classList.toggle("active", sw.dataset.color === s.greenTheme);
  });

  document.querySelectorAll(".mode-pill").forEach(pill => {
    const isAct = pill.dataset.mode === s.mode;
    pill.classList.toggle("active", isAct);
    pill.setAttribute("aria-pressed", isAct ? "true" : "false");
  });

  // Guest banner visibility
  const guestBanner = document.getElementById("guest-alert-banner");
  if (guestBanner) {
    guestBanner.classList.toggle("hidden", !AppState.isGuest);
  }
}

// ============================================================================
// 18. MAIN RENDER ALL ENGINE
// ============================================================================

function renderAll() {
  const user = getActiveUser();
  const c = AppState.community;

  // 1. Navbar and Quick Top Chips
  const navUserAvatar = document.getElementById("nav-user-avatar");
  const navUserName = document.getElementById("nav-user-name");
  const quickUserAvatar = document.getElementById("quick-user-avatar");
  const quickUserName = document.getElementById("quick-user-name");
  const navUserPoints = document.getElementById("nav-user-points");

  const displayName = AppState.isGuest ? "Guest" : (user.displayPreference === "username" ? `@${user.username}` : user.name.split(" ")[0]);
  const fullName = AppState.isGuest ? "Guest Explorer" : (user.displayPreference === "username" ? `@${user.username}` : user.name);

  if (navUserAvatar) navUserAvatar.textContent = user.avatar || "🌱";
  if (navUserName) navUserName.textContent = displayName;
  if (quickUserAvatar) quickUserAvatar.textContent = user.avatar || "🌱";
  if (quickUserName) quickUserName.textContent = fullName;
  if (navUserPoints) navUserPoints.textContent = user.points.toLocaleString();

  // 2. Settings Drawer Account Card
  const settingAvatar = document.getElementById("setting-acc-avatar");
  const settingName = document.getElementById("setting-acc-display-name");
  const settingRole = document.getElementById("setting-acc-role");
  const settingHandle = document.getElementById("setting-acc-handle");
  if (settingAvatar) settingAvatar.textContent = user.avatar || "🌱";
  if (settingName) settingName.textContent = user.name;
  if (settingRole) settingRole.textContent = `Level ${user.levelIndex + 1}: ${LEVELS[user.levelIndex].name}`;
  if (settingHandle) settingHandle.textContent = `@${user.username}`;

  // 3. Personalized Hero Message
  const heroGreeting = document.getElementById("hero-user-greeting");
  if (heroGreeting) {
    if (AppState.isGuest) {
      heroGreeting.innerHTML = `<span class="badge-leaf">🌱</span> Welcome, Eco Explorer! Create an account to permanently save your journey.`;
    } else if (user.myImpact.totalActions === 0) {
      heroGreeting.innerHTML = `<span class="badge-leaf">🌱</span> Welcome to GreenPulse, ${user.name.split(" ")[0]}! Your first eco-action is waiting.`;
    } else {
      heroGreeting.innerHTML = `<span class="badge-leaf">🌱</span> Welcome back, ${user.name.split(" ")[0]}! You've already saved ${Math.round(user.myImpact.co2)} kg of CO₂.`;
    }
  }

  // 4. Hero Live Community Counters
  animateNumber(document.getElementById("hero-co2-counter"), 0, c.co2Saved);
  animateNumber(document.getElementById("hero-trees-counter"), 0, c.treesPlanted);
  animateNumber(document.getElementById("hero-actions-counter"), 0, c.totalActions);

  // 5. Dashboard Stat Cards
  animateNumber(document.getElementById("stat-total-actions"), 0, c.totalActions);
  animateNumber(document.getElementById("stat-co2-saved"), 0, c.co2Saved);
  animateNumber(document.getElementById("stat-trees-planted"), 0, c.treesPlanted);
  animateNumber(document.getElementById("stat-energy-saved"), 0, c.energySaved);
  animateNumber(document.getElementById("stat-members-count"), 0, c.members);

  // 6. Daily Mission Card
  const missionTitle = document.getElementById("daily-mission-title");
  const missionDesc = document.getElementById("daily-mission-desc");
  const missionBtn = document.getElementById("complete-mission-btn");
  if (missionTitle) missionTitle.textContent = user.dailyMission.title;
  if (missionDesc) missionDesc.textContent = user.dailyMission.desc;
  if (missionBtn) {
    if (user.dailyMission.completed) {
      missionBtn.innerHTML = "<span>✅ Mission Complete</span>";
      missionBtn.disabled = true;
      missionBtn.classList.remove("btn-outline-success");
      missionBtn.classList.add("btn-secondary");
    } else {
      missionBtn.innerHTML = '<span class="btn-check">✓</span> Complete Mission';
      missionBtn.disabled = false;
      missionBtn.classList.add("btn-outline-success");
      missionBtn.classList.remove("btn-secondary");
    }
  }

  // 7. Community Weekly Goal Progress
  const goalText = document.getElementById("comm-goal-text");
  const goalFill = document.getElementById("comm-goal-fill");
  const goalPb = document.getElementById("comm-goal-progressbar");
  const pct = Math.min(100, Math.round((c.weeklyGoal.current / c.weeklyGoal.target) * 100));
  if (goalText) goalText.textContent = `${c.weeklyGoal.current.toLocaleString()} / ${c.weeklyGoal.target.toLocaleString()} kg`;
  if (goalFill) goalFill.style.width = `${pct}%`;
  if (goalPb) goalPb.setAttribute("aria-valuenow", pct);

  // 8. Streak Widget
  const streakDisplay = document.getElementById("user-streak-display");
  const profileStreak = document.getElementById("profile-streak-count");
  if (streakDisplay) streakDisplay.textContent = `${user.streak} Day`;
  if (profileStreak) profileStreak.textContent = `${user.streak} 🔥`;

  // 9. Gamification Profile Card
  const gamifyAvatar = document.getElementById("gamify-avatar");
  const gamifyName = document.getElementById("gamify-user-name");
  const lvlName = document.getElementById("user-level-name");
  const lvlStatus = document.getElementById("level-current-status");
  const lvlPoints = document.getElementById("level-points-progress");
  const lvlBar = document.getElementById("level-progress-bar");
  const lvlHint = document.getElementById("level-next-hint-text");
  const pTotal = document.getElementById("profile-points-total");
  const pBadges = document.getElementById("profile-badges-count");

  const currentLevel = LEVELS[user.levelIndex];
  const nextLevel = LEVELS[Math.min(user.levelIndex + 1, LEVELS.length - 1)];

  if (gamifyAvatar) gamifyAvatar.textContent = user.avatar || "🌱";
  if (gamifyName) gamifyName.textContent = user.name;
  if (lvlName) lvlName.textContent = currentLevel.name;
  if (lvlStatus) lvlStatus.textContent = `Level ${user.levelIndex + 1}: ${currentLevel.name}`;

  let lvlPct = 100;
  if (user.levelIndex < LEVELS.length - 1) {
    const range = nextLevel.minPoints - currentLevel.minPoints;
    const prog = user.points - currentLevel.minPoints;
    lvlPct = Math.min(Math.round((prog / range) * 100), 100);
    if (lvlHint) lvlHint.innerHTML = `${(nextLevel.minPoints - user.points).toLocaleString()} points until Level ${user.levelIndex + 2}: <strong>${nextLevel.name}</strong>`;
  } else {
    if (lvlHint) lvlHint.innerHTML = `<strong>Max Level Achieved!</strong> You are an Earth Legend.`;
  }

  if (lvlPoints) lvlPoints.textContent = `${user.points.toLocaleString()} / ${nextLevel.minPoints.toLocaleString()} GP`;
  if (lvlBar) lvlBar.style.width = `${lvlPct}%`;
  if (pTotal) pTotal.textContent = user.points.toLocaleString();

  const unlockedBadges = user.badges ? user.badges.filter(b => b.unlocked).length : 0;
  if (pBadges) pBadges.textContent = `${unlockedBadges} 🏅`;

  // 10. Roadmap Stepper
  renderJourneyRoadmap(user);

  // 11. Personal Impact Center Rings
  const myCo2 = document.getElementById("my-co2-val");
  const myTrees = document.getElementById("my-trees-val");
  const myWaste = document.getElementById("my-waste-val");
  const myPower = document.getElementById("my-power-val");

  if (myCo2) myCo2.textContent = Math.round(user.myImpact.co2);
  if (myTrees) myTrees.textContent = user.myImpact.trees;
  if (myWaste) myWaste.textContent = Math.round(user.myImpact.waste);
  if (myPower) myPower.textContent = Math.round(user.myImpact.power);

  // Ring stroke offsets
  const ringCo2 = document.getElementById("ring-svg-co2");
  const ringTree = document.getElementById("ring-svg-tree");
  const ringWaste = document.getElementById("ring-svg-waste");
  const ringPower = document.getElementById("ring-svg-power");
  if (ringCo2) ringCo2.style.strokeDashoffset = Math.max(20, 264 - (user.myImpact.co2 * 2.5));
  if (ringTree) ringTree.style.strokeDashoffset = Math.max(20, 264 - (user.myImpact.trees * 25));
  if (ringWaste) ringWaste.style.strokeDashoffset = Math.max(20, 264 - (user.myImpact.waste * 3));
  if (ringPower) ringPower.style.strokeDashoffset = Math.max(20, 264 - (user.myImpact.power * 2));

  // 12. Arcade Stats
  const aPlayed = document.getElementById("arcade-stat-played");
  const aSort = document.getElementById("arcade-stat-sortbest");
  const aPts = document.getElementById("arcade-stat-points");
  const aAcc = document.getElementById("arcade-stat-accuracy");
  const gardenCount = document.getElementById("garden-trees-count");

  if (aPlayed) aPlayed.textContent = user.arcadeStats.played;
  if (aSort) aSort.textContent = `${user.arcadeStats.sortBest}/100`;
  if (aPts) aPts.textContent = user.arcadeStats.points;
  if (aAcc) aAcc.textContent = `${user.arcadeStats.quizAccuracy}%`;
  if (gardenCount) gardenCount.textContent = user.arcadeStats.treesGrown;

  // 13. Sub-renderers
  renderBadges();
  renderLeaderboard();
  renderCommunityMembers();
  renderPersonalActivityList();
  renderCommunityFeed();
  renderChallenges();
  updateSmartRecommendations();
}

function renderJourneyRoadmap(user) {
  const stepper = document.getElementById("journey-timeline-stepper");
  if (!stepper) return;

  const milestones = [
    { title: "1. Joined GreenPulse", desc: "Started sustainable habit tracking", icon: "🌱", unlocked: true },
    { title: "2. First Recycling Action", desc: "Properly sorted clean materials", icon: "♻️", unlocked: (user.actionCounts.recycle || 0) >= 1 },
    { title: "3. Green Commuter", desc: "Biked or walked 20+ km", icon: "🚲", unlocked: (user.myImpact.travelKm || 0) >= 20 },
    { title: "4. Tree Planter", desc: "Planted saplings for clean canopy", icon: "🌳", unlocked: user.myImpact.trees >= 1 },
    { title: "5. Green Guardian", desc: "Surpassed 1,000 Green Points", icon: "🍃", unlocked: user.points >= 1000 },
    { title: "6. Planet Protector", desc: "Mastered circular living (1,500+ GP)", icon: "🌍", unlocked: user.points >= 1500 }
  ];

  stepper.innerHTML = milestones.map(m => `
    <div class="timeline-step ${m.unlocked ? 'step-unlocked' : 'step-locked'}" role="listitem">
      <div class="step-node ${m.unlocked ? 'active-pulse' : ''}">${m.icon}</div>
      <div class="step-info">
        <div class="step-title">${m.title}</div>
        <div class="step-desc">${m.desc}</div>
        <span class="step-badge ${m.unlocked ? 'unlocked' : 'locked'}">
          ${m.unlocked ? 'Completed ✓' : 'In Progress'}
        </span>
      </div>
    </div>
  `).join("");
}

function renderBadges() {
  const container = document.getElementById("badges-grid-container");
  const countEl = document.getElementById("badges-unlocked-summary");
  if (!container) return;

  const user = getActiveUser();
  const badges = user.badges || [];

  container.innerHTML = badges.map(b => `
    <div class="badge-item-card ${b.unlocked ? 'unlocked' : 'locked'}" tabindex="0" role="listitem">
      <div class="badge-icon-box">${b.icon}</div>
      <div class="badge-item-name">${b.name}</div>
      <p class="badge-item-desc">${b.desc}</p>
      <div class="mini-bar-track" style="margin-top: 8px;">
        <div class="mini-bar-fill" style="width: ${b.progress}%;"></div>
      </div>
      <small style="color: ${b.unlocked ? 'var(--leaf-green)' : 'var(--text-muted)'}; font-size: 0.72rem; font-weight: 700;">
        ${b.unlocked ? 'Unlocked ✓' : `${b.progress}% Progress`}
      </small>
    </div>
  `).join("");

  const unlocked = badges.filter(b => b.unlocked).length;
  if (countEl) countEl.textContent = `${unlocked} of ${badges.length} Unlocked`;
}

function updateSmartRecommendations() {
  const recText = document.getElementById("smart-rec-text");
  const recBtn = document.getElementById("rec-act-btn");
  if (!recText) return;

  const user = getActiveUser();
  const counts = user.actionCounts || {};

  if ((counts.bike || 0) > 6 && (counts.tree || 0) < 3) {
    recText.textContent = "You're building an amazing green commute habit! Why not plant a native sapling or balcony herb pot this weekend to boost your canopy score?";
  } else if ((counts.recycle || 0) > 4 && (counts.compost || 0) < 2) {
    recText.textContent = "Your recycling progress is top tier! Take the next leap into circular living by composting kitchen vegetable scraps.";
  } else if ((counts.energy || 0) > 5) {
    recText.textContent = "Outstanding home power conservation! Try inspiring your neighbors by taking on a community challenge.";
  } else if (user.myImpact.totalActions === 0) {
    recText.textContent = "Your Green Journey is waiting! Start with a small action: carry a reusable tote or stainless bottle today.";
  } else {
    recText.textContent = "Your sustainable momentum is glowing! Complete today's daily mission to keep your green streak alive.";
  }

  if (recBtn) {
    recBtn.addEventListener("click", () => {
      document.querySelector("#log-action").scrollIntoView({ behavior: "smooth" });
      playSound("click");
    });
  }
}

// ============================================================================
// 19. APPLICATION INITIALIZATION LIFECYCLE
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("🌱 Initializing GreenPulse Multi-User Ecosystem...");

  loadAllData();
  applyUserSettings();
  initAmbientCanvas();

  initAuthUI();
  initProfileUI();
  initSwitchAccountUI();

  initSettings();
  initActionLoggingPortal();
  initLeaderboardAndFeed();
  initPersonalActivityUI();
  initTipsAndGoals();
  initImpactMap();
  initArcadeTabs();

  // Initialize 4 Games
  initSortGame();
  initPlantTreeGame();
  initEcoQuiz();
  initEnergySaverGame();

  // Initialize Impact Chart & Scope Controls
  initImpactChart();
  initChartControls();

  // Full Initial Render
  renderAll();

  console.log("🚀 GreenPulse v3.0 Multi-User Portal Ready!");
});
