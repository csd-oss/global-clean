import type { ReactElement } from 'react';

export const WindowIcons: Record<string, () => ReactElement> = {

  // Single-wing window M (up to 80 cm) — one tall pane
  singleM: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="5" width="36" height="46" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#EFF6FF"/>
      <line x1="28" y1="5" x2="28" y2="51" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4"/>
      <line x1="10" y1="28" x2="46" y2="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4"/>
      <text x="28" y="56" textAnchor="middle" fontSize="5" fill="currentColor" opacity="0.45">≤80cm</text>
    </svg>
  ),

  // Venetian blind M — horizontal slats
  blindM: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="6" width="40" height="44" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#EFF6FF"/>
      {[13, 19, 25, 31, 37, 43].map((y) => (
        <rect key={y} x="11" y={y} width="34" height="3" rx="1" fill="currentColor" opacity="0.28"/>
      ))}
    </svg>
  ),

  // Fly screen — mesh grid pattern
  flyScreen: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="6" width="40" height="44" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#EFF6FF"/>
      {[14, 20, 26, 32, 38, 44].map((y) => (
        <line key={`h${y}`} x1="11" y1={y} x2="45" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.25"/>
      ))}
      {[14, 20, 26, 32, 38, 44].map((x) => (
        <line key={`v${x}`} x1={x} y1="9" x2={x} y2="47" stroke="currentColor" strokeWidth="1" opacity="0.25"/>
      ))}
    </svg>
  ),

  // Single-wing window L (90–120 cm) — wider/taller pane
  singleL: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="5" y="5" width="46" height="46" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#DBEAFE"/>
      <line x1="28" y1="5" x2="28" y2="51" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4"/>
      <line x1="5" y1="28" x2="51" y2="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4"/>
      <text x="28" y="56" textAnchor="middle" fontSize="5" fill="currentColor" opacity="0.45">90–120cm</text>
    </svg>
  ),

  // Venetian blind L — wider horizontal slats
  blindL: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="6" width="48" height="44" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#DBEAFE"/>
      {[13, 19, 25, 31, 37, 43].map((y) => (
        <rect key={y} x="8" y={y} width="40" height="3" rx="1" fill="currentColor" opacity="0.28"/>
      ))}
    </svg>
  ),

  // Balcony door — tall floor-to-ceiling door panel
  balconyDoor: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="14" y="3" width="28" height="50" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#EFF6FF"/>
      <line x1="14" y1="18" x2="42" y2="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4"/>
      <circle cx="38" cy="29" r="2" fill="currentColor" opacity="0.45"/>
    </svg>
  ),

  // Venetian blind for door — tall slat blind
  blindDoor: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="14" y="3" width="28" height="50" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#EFF6FF"/>
      {[10, 16, 22, 28, 34, 40, 46].map((y) => (
        <rect key={y} x="17" y={y} width="22" height="3" rx="1" fill="currentColor" opacity="0.28"/>
      ))}
    </svg>
  ),

  // Fly screen for door — mesh on door
  flyScreenDoor: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="14" y="3" width="28" height="50" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#EFF6FF"/>
      {[9, 15, 21, 27, 33, 39, 45].map((y) => (
        <line key={`h${y}`} x1="17" y1={y} x2="39" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.25"/>
      ))}
      {[20, 28, 36].map((x) => (
        <line key={`v${x}`} x1={x} y1="6" x2={x} y2="50" stroke="currentColor" strokeWidth="1" opacity="0.25"/>
      ))}
    </svg>
  ),

  // Double-wing window — two equal panels side by side
  doubleWing: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="5" width="23" height="46" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#EFF6FF"/>
      <rect x="30" y="5" width="23" height="46" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#DBEAFE"/>
      <line x1="3" y1="28" x2="26" y2="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4"/>
      <line x1="30" y1="28" x2="53" y2="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4"/>
    </svg>
  ),

  // Shopfront — wide commercial window
  shopfront: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="10" width="52" height="36" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#EFF6FF"/>
      <line x1="2" y1="22" x2="54" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      <line x1="19" y1="22" x2="19" y2="46" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <line x1="37" y1="22" x2="37" y2="46" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <text x="28" y="8" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.5">m²</text>
    </svg>
  ),

  // Triple-wing window M (up to 80 cm) — three narrower panels
  tripleM: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="5" width="16" height="46" rx="2" stroke="currentColor" strokeWidth="2" fill="#EFF6FF"/>
      <rect x="21" y="5" width="14" height="46" rx="2" stroke="currentColor" strokeWidth="2" fill="#DBEAFE"/>
      <rect x="38" y="5" width="16" height="46" rx="2" stroke="currentColor" strokeWidth="2" fill="#EFF6FF"/>
      <text x="28" y="56" textAnchor="middle" fontSize="5" fill="currentColor" opacity="0.45">≤80cm</text>
    </svg>
  ),

  // Triple-wing window L (90–120 cm) — three wider panels
  tripleL: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="5" width="16" height="46" rx="2" stroke="currentColor" strokeWidth="2" fill="#EFF6FF"/>
      <rect x="21" y="5" width="14" height="46" rx="2" stroke="currentColor" strokeWidth="2" fill="#DBEAFE"/>
      <rect x="38" y="5" width="16" height="46" rx="2" stroke="currentColor" strokeWidth="2" fill="#EFF6FF"/>
      <text x="28" y="56" textAnchor="middle" fontSize="5" fill="currentColor" opacity="0.45">90–120cm</text>
    </svg>
  ),

  // Panoramic window M (up to 80 cm) — wide shallow pane
  panoramicM: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="14" width="52" height="28" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#EFF6FF"/>
      <line x1="2" y1="28" x2="54" y2="28" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"/>
      <text x="28" y="52" textAnchor="middle" fontSize="5" fill="currentColor" opacity="0.45">≤80cm</text>
    </svg>
  ),

  // Panoramic window L (90–120 cm) — wider panoramic pane
  panoramicL: () => (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="12" width="52" height="32" rx="2" stroke="currentColor" strokeWidth="2.5" fill="#DBEAFE"/>
      <line x1="2" y1="28" x2="54" y2="28" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"/>
      <text x="28" y="54" textAnchor="middle" fontSize="5" fill="currentColor" opacity="0.45">90–120cm</text>
    </svg>
  ),
};
