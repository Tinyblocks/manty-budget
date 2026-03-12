/**
 * Shared timeline configuration for Manty Budget Timeline prototype.
 * Used by Proto 1, Proto 2, Proto 3.
 */

const timelineConfig = {
  title: "Préparation budgétaire 2026",
  showPreviousYear: true,
  currentPhaseIndex: 2,
  phases: [
    { label: "Ouverture de la saisie", dateStart: "2025-09-29", dateEnd: "2025-10-31", icon: "edit" },
    { label: "Arbitrage", dateStart: "2025-11-03", dateEnd: "2025-11-28", icon: "balance" },
    { label: "Vote du budget", dateStart: "2025-12-01", dateEnd: "2025-12-15", icon: "how_to_vote" },
    { label: "Budget supplémentaire", dateStart: "2026-01-10", dateEnd: null, icon: "refresh" },
    { label: "Clôture de l'arbitrage", dateStart: "2026-02-15", dateEnd: "2026-03-01", icon: null },
    { label: "Révision budgétaire", dateStart: "2026-03-10", dateEnd: "2026-03-31", icon: null },
    { label: "Contrôle intermédiaire", dateStart: "2026-04-15", dateEnd: null, icon: null },
    { label: "Validation finale", dateStart: "2026-05-20", dateEnd: "2026-06-01", icon: null },
  ],
  previousYearPhases: [
    { label: "Ouverture de la saisie", dateStart: "2024-10-01", dateEnd: "2024-10-30", icon: "edit" },
    { label: "Arbitrage", dateStart: "2024-11-04", dateEnd: "2024-11-29", icon: "balance" },
    { label: "Vote du budget", dateStart: "2024-12-02", dateEnd: "2024-12-13", icon: "how_to_vote" },
    { label: "Budget supplémentaire", dateStart: "2025-01-08", dateEnd: null, icon: "refresh" },
  ],
};

/** French month abbreviations */
const MONTHS_FR = ["janv", "févr", "mars", "avr", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"];

/**
 * Formats a phase date for display.
 * @param {string} dateStr - ISO date "YYYY-MM-DD"
 * @returns {string} e.g. "29 sep" or "1er nov"
 */
function formatPhaseDate(dateStr) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-").map(Number);
  const month = MONTHS_FR[m - 1] || "";
  const day = d === 1 ? "1er" : String(d);
  return `${day} ${month}`;
}

/**
 * Formats a phase's date range or single date.
 * @param {{ dateStart: string, dateEnd: string|null }} phase
 * @returns {string} e.g. "29 sep → 31 oct" or "10 jan"
 */
function formatPhaseDates(phase) {
  const start = formatPhaseDate(phase.dateStart);
  if (phase.dateEnd) {
    return `${start} → ${formatPhaseDate(phase.dateEnd)}`;
  }
  return start;
}

/**
 * Returns a copy of the config with 15 dummy phases for stress testing.
 */
function getStressTestConfig() {
  const months = [
    "2025-09", "2025-10", "2025-11", "2025-12", "2026-01", "2026-02",
    "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08",
  ];
  const labels = [
    "Ouverture de la saisie", "Arbitrage", "Vote du budget", "Budget supplémentaire",
    "Clôture de l'arbitrage", "Révision budgétaire", "Contrôle intermédiaire", "Validation finale",
    "Phase préparation 1", "Phase préparation 2", "Phase préparation 3", "Phase préparation 4",
    "Phase préparation 5", "Phase préparation 6", "Phase préparation 7",
  ];
  const presetIcons = ["edit", "balance", "how_to_vote", "refresh"];
  const phases = [];
  for (let i = 0; i < 15; i++) {
    const m = months[i % months.length];
    const d = Math.min((i % 28) + 1, 28);
    const dateStart = `${m}-${String(d).padStart(2, "0")}`;
    const endDay = Math.min(d + 14, 28);
    const dateEnd = i % 3 === 2 ? null : `${m}-${String(endDay).padStart(2, "0")}`;
    phases.push({ label: labels[i], dateStart, dateEnd, icon: i < 4 ? presetIcons[i] : null });
  }
  return {
    ...timelineConfig,
    phases,
    previousYearPhases: timelineConfig.previousYearPhases,
  };
}

/**
 * Returns a deep copy of the default config (for reset after stress test).
 */
function getDefaultConfig() {
  return JSON.parse(JSON.stringify(timelineConfig));
}
