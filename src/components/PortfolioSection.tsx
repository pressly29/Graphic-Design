'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

/* ─── Mockup SVG Components ────────────────────────────────── */

const LuxeMockup = () => (
  <svg viewBox="0 0 480 320" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <defs>
      <radialGradient id="lGlow" cx="60%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#7f55d9" stopOpacity="0.25"/>
        <stop offset="100%" stopColor="#1a0533" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="lJarGold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#b8882a"/>
        <stop offset="35%" stopColor="#e8d090"/>
        <stop offset="65%" stopColor="#c9a96e"/>
        <stop offset="100%" stopColor="#8a6a30"/>
      </linearGradient>
      <linearGradient id="lBottle" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1e0f38"/>
        <stop offset="30%" stopColor="#3d2270"/>
        <stop offset="70%" stopColor="#2a1255"/>
        <stop offset="100%" stopColor="#140828"/>
      </linearGradient>
      <linearGradient id="lSheen" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="white" stopOpacity="0"/>
        <stop offset="25%" stopColor="white" stopOpacity="0.18"/>
        <stop offset="50%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <circle cx="290" cy="160" r="180" fill="url(#lGlow)"/>
    {/* ── Tall bottle ── */}
    <g transform="translate(255,18)">
      <ellipse cx="38" cy="198" rx="32" ry="6" fill="black" opacity="0.25"/>
      <rect x="8" y="70" width="60" height="130" rx="7" fill="url(#lBottle)"/>
      <path d="M8 70 Q8 50 18 44 L58 44 Q68 50 68 70Z" fill="#2d1660"/>
      <rect x="22" y="22" width="32" height="26" rx="4" fill="#210e50"/>
      <rect x="18" y="10" width="40" height="16" rx="5" fill="#c9a96e"/>
      <rect x="8" y="70" width="60" height="130" rx="7" fill="url(#lSheen)"/>
      <rect x="14" y="100" width="48" height="68" rx="3" fill="#0d0020" opacity="0.8"/>
      <rect x="16" y="102" width="44" height="64" rx="2" fill="none" stroke="#c9a96e" strokeWidth="0.6" opacity="0.65"/>
      <text x="38" y="124" textAnchor="middle" fill="#c9a96e" fontSize="9" fontFamily="Georgia,serif" fontStyle="italic">Luxe</text>
      <text x="38" y="136" textAnchor="middle" fill="#c9a96e" fontSize="5" fontFamily="Georgia,serif" letterSpacing="2.5">SÉRUM ÉCLAT</text>
      <line x1="22" y1="143" x2="54" y2="143" stroke="#c9a96e" strokeWidth="0.5" opacity="0.5"/>
      <text x="38" y="153" textAnchor="middle" fill="#c9a96e" fontSize="4.5" fontFamily="Georgia,serif" opacity="0.7">30 ML</text>
    </g>
    {/* ── Round jar ── */}
    <g transform="translate(300,95)">
      <ellipse cx="62" cy="172" rx="50" ry="7" fill="black" opacity="0.22"/>
      <ellipse cx="62" cy="115" rx="52" ry="18" fill="#9a7020"/>
      <rect x="10" y="115" width="104" height="58" fill="url(#lJarGold)"/>
      <ellipse cx="62" cy="173" rx="52" ry="9" fill="#7a5510"/>
      <ellipse cx="62" cy="112" rx="52" ry="18" fill="url(#lJarGold)"/>
      <ellipse cx="62" cy="110" rx="52" ry="17" fill="#d8be78"/>
      <ellipse cx="42" cy="107" rx="18" ry="6" fill="white" opacity="0.14"/>
      <rect x="18" y="120" width="88" height="45" fill="#0d0020" opacity="0.75"/>
      <rect x="20" y="122" width="84" height="41" fill="none" stroke="#c9a96e" strokeWidth="0.5" opacity="0.6"/>
      <text x="62" y="138" textAnchor="middle" fill="#c9a96e" fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">Luxe</text>
      <text x="62" y="149" textAnchor="middle" fill="#c9a96e" fontSize="5" fontFamily="Georgia,serif" letterSpacing="2.5">CRÈME LUMIÈRE</text>
      <line x1="28" y1="155" x2="96" y2="155" stroke="#c9a96e" strokeWidth="0.4" opacity="0.5"/>
      <text x="62" y="163" textAnchor="middle" fill="#c9a96e" fontSize="4.5" fontFamily="Georgia,serif" opacity="0.7">50 ML</text>
    </g>
    {[...Array(14)].map((_,i) => (
      <circle key={i} cx={160+i*22+(i%3)*8} cy={40+(i%5)*52} r={0.8+(i%3)*0.6} fill="#c9a96e" opacity={0.2+(i%4)*0.12}/>
    ))}
    <line x1="80" y1="278" x2="430" y2="278" stroke="#c9a96e" strokeWidth="0.4" opacity="0.2"/>
  </svg>
)

const VoltaMockup = () => (
  <svg viewBox="0 0 340 220" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <defs>
      <linearGradient id="vGrid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.06"/>
        <stop offset="100%" stopColor="#00D4FF" stopOpacity="0"/>
      </linearGradient>
    </defs>
    {[...Array(8)].map((_,i)=><line key={i} x1={i*44} y1="0" x2={i*44} y2="220" stroke="#00D4FF" strokeWidth="0.4" opacity="0.06"/>)}
    {[...Array(6)].map((_,i)=><line key={i} x1="0" y1={i*38} x2="340" y2={i*38} stroke="#00D4FF" strokeWidth="0.4" opacity="0.06"/>)}
    {/* Back card */}
    <g transform="translate(165,55) rotate(-12) translate(-90,-55)">
      <rect width="180" height="108" rx="7" fill="#00D4FF"/>
      {[...Array(5)].map((_,i)=><line key={i} x1={i*42-10} y1="0" x2={i*42+60} y2="108" stroke="white" strokeWidth="1.2" opacity="0.1"/>)}
      <text x="90" y="60" textAnchor="middle" fill="white" fontSize="10" fontFamily="'Courier New',monospace" fontWeight="bold" letterSpacing="5" opacity="0.6">⚡ VOLTA</text>
    </g>
    {/* Front card */}
    <g transform="translate(185,38) rotate(6) translate(-90,-55)">
      <rect width="180" height="108" rx="7" fill="#0B1120"/>
      <rect width="180" height="108" rx="7" fill="none" stroke="#00D4FF" strokeWidth="0.8" opacity="0.25"/>
      {[...Array(7)].map((_,i)=><line key={i} x1={i*28} y1="0" x2={i*28} y2="108" stroke="#00D4FF" strokeWidth="0.4" opacity="0.04"/>)}
      <polygon points="20,28 11,52 18,52 7,78 24,54 16,54 26,28" fill="#00D4FF"/>
      <text x="35" y="50" fill="white" fontSize="20" fontFamily="'Courier New',monospace" fontWeight="bold" letterSpacing="5">VOLTA</text>
      <text x="35" y="62" fill="#00D4FF" fontSize="5.5" fontFamily="'Courier New',monospace" letterSpacing="2.5">POWER THROUGH TECHNOLOGY</text>
      <line x1="12" y1="84" x2="168" y2="84" stroke="#00D4FF" strokeWidth="0.4" opacity="0.2"/>
      <text x="12" y="95" fill="white" fontSize="6" fontFamily="'Courier New',monospace" opacity="0.4">hello@volta.io</text>
      <text x="125" y="95" fill="white" fontSize="6" fontFamily="'Courier New',monospace" opacity="0.4">volta.io</text>
      <circle cx="160" cy="16" r="24" fill="#00D4FF" opacity="0.04"/>
    </g>
  </svg>
)

const GroveMockup = () => (
  <svg viewBox="0 0 300 220" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
    {/* Menu card */}
    <g transform="translate(30,25) rotate(-8)">
      <rect width="90" height="155" rx="4" fill="#F4EFE4"/>
      <rect width="90" height="36" fill="#1F4020" rx="4"/>
      <rect x="0" y="18" width="90" height="18" fill="#1F4020"/>
      <text x="45" y="17" textAnchor="middle" fill="#F4EFE4" fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic">The Grove</text>
      <text x="45" y="29" textAnchor="middle" fill="#C4622D" fontSize="5.5" fontFamily="Georgia,serif" letterSpacing="2.5">CAFÉ</text>
      {[["Espresso","3.50"],["Flat White","4.00"],["Oat Latte","4.50"],["Cold Brew","4.00"],["Matcha","4.50"]].map(([n,p],i)=>(
        <g key={i}>
          <text x="8" y={50+i*18} fill="#1F4020" fontSize="5.5" fontFamily="Georgia,serif">{n}</text>
          <text x="82" y={50+i*18} textAnchor="end" fill="#C4622D" fontSize="5.5" fontFamily="Georgia,serif">{p}</text>
          <line x1="6" y1={53+i*18} x2="84" y2={53+i*18} stroke="#1F4020" strokeWidth="0.25" opacity="0.12"/>
        </g>
      ))}
      <text x="45" y="148" textAnchor="middle" fill="#1F4020" fontSize="4" fontFamily="Georgia,serif" opacity="0.4">Ethically sourced</text>
    </g>
    {/* Cup */}
    <g transform="translate(130,8)">
      <ellipse cx="62" cy="202" rx="38" ry="6" fill="black" opacity="0.15"/>
      <path d="M32 50 L22 190 Q22 200 34 200 L90 200 Q102 200 102 190 L92 50Z" fill="#F4EFE4" stroke="#E0D8CA" strokeWidth="0.8"/>
      <path d="M30 100 L26 158 L98 158 L94 100Z" fill="#1F4020"/>
      <text x="62" y="122" textAnchor="middle" fill="#F4EFE4" fontSize="9" fontFamily="Georgia,serif" fontStyle="italic">The Grove</text>
      <text x="62" y="134" textAnchor="middle" fill="#C4622D" fontSize="5.5" fontFamily="Georgia,serif" letterSpacing="2">CAFÉ</text>
      <path d="M38 144 Q43 135 52 139 Q43 148 38 144" fill="#C4622D" opacity="0.75"/>
      <path d="M72 144 Q77 135 86 139 Q77 148 72 144" fill="#C4622D" opacity="0.75"/>
      <ellipse cx="62" cy="50" rx="30" ry="7" fill="#E8E0D0"/>
      <ellipse cx="62" cy="48" rx="28" ry="6" fill="#F4EFE4"/>
      <ellipse cx="62" cy="47" rx="25" ry="5" fill="#5a2e1a"/>
      <ellipse cx="52" cy="46" rx="10" ry="3" fill="#7a4535" opacity="0.6"/>
      <path d="M50 33 Q53 22 50 13" stroke="#C4622D" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.3"/>
      <path d="M62 30 Q65 18 62 9" stroke="#C4622D" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.3"/>
      <path d="M74 33 Q77 22 74 13" stroke="#C4622D" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.3"/>
      <path d="M97 118 Q122 118 122 140 Q122 162 97 162" stroke="#E0D8CA" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M97 118 Q115 118 115 140 Q115 162 97 162" stroke="#F4EFE4" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </g>
  </svg>
)

const PulseMockup = () => (
  <svg viewBox="0 0 300 220" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <defs>
      <linearGradient id="pBtn" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#FF4500"/>
        <stop offset="100%" stopColor="#FF6A00"/>
      </linearGradient>
    </defs>
    {/* Back phone */}
    <g transform="translate(165,18)">
      <rect width="96" height="178" rx="16" fill="#181818"/>
      <rect x="6" y="6" width="84" height="166" rx="12" fill="#0D0D0D"/>
      <text x="14" y="26" fill="#FF4500" fontSize="9" fontFamily="'Courier New',monospace" fontWeight="bold" letterSpacing="1.5">PULSE</text>
      <text x="14" y="37" fill="#333" fontSize="4.5" fontFamily="monospace">WEEKLY</text>
      {[60,80,45,90,70].map((h,i)=>(
        <rect key={i} x={10+i*16} y={90-h*0.5} width="11" height={h*0.5} rx="3" fill={i===3?"#FF4500":"#1A1A1A"}/>
      ))}
      <text x="48" y="112" textAnchor="middle" fill="white" fontSize="9" fontFamily="monospace" fontWeight="bold">5.4h</text>
      <text x="48" y="122" textAnchor="middle" fill="#FF4500" fontSize="5" fontFamily="monospace">↑ 12%</text>
    </g>
    {/* Main phone */}
    <g transform="translate(48,10)">
      <rect width="112" height="200" rx="20" fill="#222" filter="url(#pShadow)"/>
      <rect x="8" y="8" width="96" height="184" rx="14" fill="#0D0D0D"/>
      <rect x="36" y="8" width="40" height="8" rx="4" fill="#222"/>
      <text x="14" y="30" fill="white" fontSize="11" fontFamily="'Courier New',monospace" fontWeight="bold" letterSpacing="1.5">PULSE</text>
      <text x="14" y="41" fill="#FF4500" fontSize="4.5" fontFamily="monospace" letterSpacing="0.5">MONDAY · 6:30 AM</text>
      <circle cx="56" cy="92" r="32" fill="none" stroke="#1A1A1A" strokeWidth="6"/>
      <circle cx="56" cy="92" r="32" fill="none" stroke="#FF4500" strokeWidth="6" strokeDasharray="201" strokeDashoffset="50" strokeLinecap="round" transform="rotate(-90 56 92)"/>
      <circle cx="56" cy="92" r="32" fill="none" stroke="#FFD700" strokeWidth="6" strokeDasharray="201" strokeDashoffset="151" strokeLinecap="round" strokeOpacity="0.45" transform="rotate(-90 56 92)"/>
      <text x="56" y="87" textAnchor="middle" fill="white" fontSize="17" fontFamily="'Courier New',monospace" fontWeight="bold">142</text>
      <text x="56" y="99" textAnchor="middle" fill="#FF4500" fontSize="5.5" fontFamily="monospace" letterSpacing="1">BPM</text>
      <polyline points="10,132 20,132 27,120 33,144 39,128 46,132 56,132 62,132 68,116 74,148 80,130 87,132 102,132" fill="none" stroke="#FF4500" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="10,132 20,132 27,120 33,144 39,128 46,132 56,132 62,132 68,116 74,148 80,130 87,132 102,132" fill="none" stroke="#FF4500" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.07"/>
      {[{l:"STEPS",v:"8.2k",x:10},{l:"KCAL",v:"412",x:42},{l:"ACTIVE",v:"38m",x:74}].map(({l,v,x})=>(
        <g key={l}>
          <rect x={x} y="148" width="28" height="28" rx="6" fill="#141414" stroke="#222" strokeWidth="0.5"/>
          <text x={x+14} y="160" textAnchor="middle" fill="#FFD700" fontSize="7.5" fontFamily="'Courier New',monospace" fontWeight="bold">{v}</text>
          <text x={x+14} y="170" textAnchor="middle" fill="#444" fontSize="4" fontFamily="monospace">{l}</text>
        </g>
      ))}
      <rect x="14" y="184" width="84" height="14" rx="7" fill="url(#pBtn)"/>
      <text x="56" y="194" textAnchor="middle" fill="white" fontSize="5.5" fontFamily="'Courier New',monospace" fontWeight="bold" letterSpacing="0.8">START WORKOUT</text>
    </g>
    <defs>
      <filter id="pShadow">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#FF4500" floodOpacity="0.15"/>
      </filter>
    </defs>
  </svg>
)

const MonarchMockup = () => (
  <svg viewBox="0 0 320 220" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <defs>
      <linearGradient id="mBrochure" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1200"/>
        <stop offset="100%" stopColor="#0d0900"/>
      </linearGradient>
      <linearGradient id="mPhoto" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4a5a6a"/>
        <stop offset="100%" stopColor="#1a2535"/>
      </linearGradient>
    </defs>
    {/* Back brochure */}
    <g transform="translate(40,30) rotate(-6)">
      <rect width="170" height="115" rx="5" fill="url(#mBrochure)" stroke="#e8a838" strokeWidth="0.6" strokeOpacity="0.3"/>
      <rect x="0" y="0" width="170" height="60" rx="5" fill="url(#mPhoto)"/>
      <rect x="0" y="50" width="170" height="10" fill="url(#mBrochure)"/>
      {/* Property photo sketch */}
      <rect x="8" y="8" width="154" height="44" rx="3" fill="#2a3545"/>
      <rect x="55" y="18" width="60" height="30" fill="#3a4555" rx="2"/>
      <polygon points="55,18 85,8 115,18" fill="#4a5565"/>
      <rect x="68" y="28" width="14" height="20" fill="#1a2535"/>
      <rect x="88" y="24" width="20" height="24" fill="#1a2535"/>
      {[...Array(3)].map((_,i)=>(
        <rect key={i} x={15+i*30} y="14" width="18" height="30" fill="#2a3545" rx="1"/>
      ))}
      <text x="85" y="80" textAnchor="middle" fill="#e8a838" fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">Monarch</text>
      <text x="85" y="91" textAnchor="middle" fill="#e8a838" fontSize="4.5" fontFamily="Georgia,serif" letterSpacing="3" opacity="0.7">PREMIER PROPERTIES</text>
      <line x1="20" y1="98" x2="150" y2="98" stroke="#e8a838" strokeWidth="0.4" opacity="0.3"/>
      <text x="85" y="108" textAnchor="middle" fill="white" fontSize="5" fontFamily="Georgia,serif" opacity="0.4">hello@monarchprop.com</text>
    </g>
    {/* Front card */}
    <g transform="translate(130,45) rotate(5)">
      <rect width="155" height="100" rx="5" fill="#0a0800" stroke="#e8a838" strokeWidth="0.8" strokeOpacity="0.5"/>
      {/* Gold corner marks */}
      <path d="M0 15 L0 0 L15 0" stroke="#e8a838" strokeWidth="1.2" fill="none" opacity="0.6"/>
      <path d="M140 0 L155 0 L155 15" stroke="#e8a838" strokeWidth="1.2" fill="none" opacity="0.6"/>
      <path d="M0 85 L0 100 L15 100" stroke="#e8a838" strokeWidth="1.2" fill="none" opacity="0.6"/>
      <path d="M140 100 L155 100 L155 85" stroke="#e8a838" strokeWidth="1.2" fill="none" opacity="0.6"/>
      {/* Crown mark */}
      <path d="M68 20 L77 13 L86 20 L83 28 L71 28Z" fill="none" stroke="#e8a838" strokeWidth="0.8" opacity="0.7"/>
      <text x="77" y="46" textAnchor="middle" fill="#e8a838" fontSize="15" fontFamily="Georgia,serif" fontStyle="italic">Monarch</text>
      <text x="77" y="57" textAnchor="middle" fill="#e8a838" fontSize="4.5" fontFamily="Georgia,serif" letterSpacing="3" opacity="0.75">PREMIER PROPERTIES</text>
      <line x1="22" y1="66" x2="133" y2="66" stroke="#e8a838" strokeWidth="0.4" opacity="0.35"/>
      <text x="77" y="76" textAnchor="middle" fill="white" fontSize="6" fontFamily="Georgia,serif" opacity="0.5">LISTED · 4 BED · NAIROBI</text>
      <text x="77" y="90" textAnchor="middle" fill="#e8a838" fontSize="9" fontFamily="Georgia,serif">KES 18,500,000</text>
    </g>
    {[...Array(8)].map((_,i)=>(
      <circle key={i} cx={40+i*34+(i%3)*12} cy={180+(i%3)*15} r={0.8+(i%2)*0.5} fill="#e8a838" opacity={0.2+(i%3)*0.1}/>
    ))}
  </svg>
)

const NeonDistrictMockup = () => (
  <svg viewBox="0 0 300 220" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <defs>
      <radialGradient id="nGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#7f55d9" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#0a0a0f" stopOpacity="0"/>
      </radialGradient>
      <filter id="nBlur">
        <feGaussianBlur stdDeviation="3"/>
      </filter>
    </defs>
    <circle cx="150" cy="110" r="130" fill="url(#nGlow)"/>
    {/* Phone frame */}
    <g transform="translate(55,12)">
      <rect width="100" height="196" rx="18" fill="#111" stroke="#7f55d9" strokeWidth="0.8" strokeOpacity="0.4"/>
      <rect x="7" y="7" width="86" height="182" rx="13" fill="#0a0a0f"/>
      <rect x="32" y="7" width="36" height="7" rx="3.5" fill="#111"/>
      {/* Instagram post template */}
      <rect x="10" y="14" width="80" height="80" fill="#120a20"/>
      {/* Neon grid lines in post */}
      {[...Array(4)].map((_,i)=>(
        <line key={i} x1={10+i*20} y1="14" x2={10+i*20} y2="94" stroke="#7f55d9" strokeWidth="0.4" opacity="0.3"/>
      ))}
      {[...Array(4)].map((_,i)=>(
        <line key={i} x1="10" y1={14+i*20} x2="90" y2={14+i*20} stroke="#7f55d9" strokeWidth="0.4" opacity="0.3"/>
      ))}
      {/* Neon glow effect behind text */}
      <text x="50" y="48" textAnchor="middle" fill="#7f55d9" fontSize="14" fontFamily="'Courier New',monospace" fontWeight="bold" opacity="0.4" filter="url(#nBlur)">NEON</text>
      <text x="50" y="48" textAnchor="middle" fill="#7f55d9" fontSize="14" fontFamily="'Courier New',monospace" fontWeight="bold" opacity="0.4" filter="url(#nBlur)">NEON</text>
      <text x="50" y="48" textAnchor="middle" fill="white" fontSize="14" fontFamily="'Courier New',monospace" fontWeight="bold">NEON</text>
      <text x="50" y="62" textAnchor="middle" fill="#bf55d9" fontSize="9" fontFamily="'Courier New',monospace" fontWeight="bold">DISTRICT</text>
      <text x="50" y="76" textAnchor="middle" fill="#7f55d9" fontSize="5" fontFamily="monospace" letterSpacing="1.5" opacity="0.8">NEW SINGLE OUT NOW</text>
      <rect x="22" y="82" width="56" height="8" rx="4" fill="#7f55d9" opacity="0.2"/>
      <text x="50" y="89" textAnchor="middle" fill="#bf55d9" fontSize="4.5" fontFamily="monospace">▶ STREAM NOW</text>
      {/* IG interface chrome */}
      <text x="14" y="108" fill="white" fontSize="5" fontFamily="monospace">♡ 4.2k</text>
      <text x="46" y="108" fill="white" fontSize="5" fontFamily="monospace">✦ 280</text>
      <text x="74" y="108" fill="white" fontSize="5" fontFamily="monospace">↗</text>
      <line x1="10" y1="113" x2="90" y2="113" stroke="white" strokeWidth="0.3" opacity="0.1"/>
      {/* Stories row */}
      <text x="14" y="124" fill="white" fontSize="4.5" fontFamily="monospace" opacity="0.5">Stories</text>
      {[0,1,2,3].map(i=>(
        <g key={i}>
          <circle cx={18+i*22} cy="140" r="10" fill="none" stroke="#7f55d9" strokeWidth="1.2"/>
          <circle cx={18+i*22} cy="140" r="8" fill="#1a0a2e"/>
          <text x={18+i*22} y="144" textAnchor="middle" fill="#7f55d9" fontSize="8">♪</text>
          <text x={18+i*22} y="158" textAnchor="middle" fill="white" fontSize="3.5" opacity="0.5" fontFamily="monospace">drop{i+1}</text>
        </g>
      ))}
      {/* Feed post thumbnails */}
      {[0,1,2].map(i=>(
        <rect key={i} x={10+i*27} y="164" width="24" height="24" rx="2" fill="#1a0a2e" stroke="#7f55d9" strokeWidth="0.4" strokeOpacity="0.3"/>
      ))}
      {/* Neon glow on thumbnails */}
      <circle cx="22" cy="176" r="5" fill="#7f55d9" opacity="0.3" filter="url(#nBlur)"/>
    </g>
    {/* Floating elements */}
    {[...Array(6)].map((_,i)=>(
      <circle key={i} cx={20+i*45+(i%2)*20} cy={30+(i%4)*40} r={1.2+(i%3)*0.6} fill="#7f55d9" opacity={0.25+(i%3)*0.1}/>
    ))}
    <text x="220" y="80" fill="#7f55d9" fontSize="22" fontFamily="monospace" opacity="0.08" fontWeight="bold">ND</text>
  </svg>
)

/* ─── Project data ─────────────────────────────────────────── */

const projects = [
  {
    title: 'Luxe',
    category: 'Brand Identity',
    description: 'Luxury skincare brand — logo suite, color palette, and packaging mockups built around minimalism and elegance.',
    gradient: 'from-[#1a0533] via-[#2a0f4a] to-[#0d0a1a]',
    accent: '#c9a96e',
    featured: true,
    mockup: <LuxeMockup />,
  },
  {
    title: 'Volta',
    category: 'Visual System',
    description: 'Tech startup wordmark, icon set, and brand guidelines built for scale.',
    gradient: 'from-[#060c18] via-[#0a1525] to-[#060810]',
    accent: '#00D4FF',
    featured: false,
    mockup: <VoltaMockup />,
  },
  {
    title: 'The Grove Café',
    category: 'Restaurant Branding',
    description: 'Menu design, signage, and a social media kit rooted in warmth and nature.',
    gradient: 'from-[#0a1208] via-[#121e0e] to-[#080d06]',
    accent: '#C4622D',
    featured: false,
    mockup: <GroveMockup />,
  },
  {
    title: 'Pulse',
    category: 'App UI Kit',
    description: 'Fitness app icon set, onboarding screens, and social post templates.',
    gradient: 'from-[#0d0500] via-[#140800] to-[#090400]',
    accent: '#FF4500',
    featured: false,
    mockup: <PulseMockup />,
  },
  {
    title: 'Monarch',
    category: 'Marketing Pack',
    description: 'Real estate brochure, presentation deck, and digital ad set.',
    gradient: 'from-[#0d0900] via-[#141000] to-[#0a0700]',
    accent: '#e8a838',
    featured: false,
    mockup: <MonarchMockup />,
  },
  {
    title: 'Neon District',
    category: 'Social Media Kit',
    description: 'Music artist Instagram templates, cover art, and promo graphics.',
    gradient: 'from-[#080514] via-[#100a20] to-[#060410]',
    accent: '#7f55d9',
    featured: false,
    mockup: <NeonDistrictMockup />,
  },
]

const featured = projects.find((p) => p.featured)!
const rest = projects.filter((p) => !p.featured)

/* ─── Section component ────────────────────────────────────── */

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#0a0a0f] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-[#7f55d9] mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Portfolio
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            A look at recent brand projects — each one built around a distinct identity and purpose.
          </p>
        </motion.div>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="group relative rounded-3xl overflow-hidden mb-5 cursor-pointer h-80 sm:h-96"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} transition-transform duration-700 group-hover:scale-105`} />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-black/30 blur-2xl" />
          </div>
          {/* Mockup */}
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            {featured.mockup}
          </div>
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10 pointer-events-none">
            <div className="flex items-start justify-between">
              <span
                className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-sm bg-black/20"
                style={{ color: featured.accent, borderColor: `${featured.accent}40` }}
              >
                {featured.category}
              </span>
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                <ArrowUpRight size={16} className="text-white" />
              </span>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
                {featured.title}
              </h3>
              <p className="text-white/60 text-sm max-w-md">{featured.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-56"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5 blur-xl" />
              </div>
              {/* Mockup */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                {project.mockup}
              </div>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-sm bg-black/20"
                    style={{ color: project.accent, borderColor: `${project.accent}40` }}
                  >
                    {project.category}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={14} className="text-white" />
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm">
            Interested in working together?{' '}
            <a
              href="mailto:hello@presslydesignstudio.com"
              className="text-[#7f55d9] hover:text-[#c9a96e] transition-colors duration-200"
            >
              Start a conversation →
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
