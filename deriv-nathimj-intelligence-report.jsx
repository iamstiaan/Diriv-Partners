import { useState } from "react";

const data = {
  sections: [
    {
      id: "executive",
      label: "Executive Summary",
      icon: "◈",
      color: "#C8A96E",
      content: {
        type: "executive",
        headline: "The Opportunity Stack",
        tagline: "Where South Africa's $14.86B fintech trajectory meets Deriv's synthetic index dominance",
        pillars: [
          {
            title: "Market Timing",
            stat: "$14.86B",
            sub: "SA fintech market by 2033",
            detail: "South Africa's fintech sector is projected to more than double from $7.08B (2023). 76% internet penetration, 63M population — a digitally mature, underserved trading audience.",
          },
          {
            title: "Platform Edge",
            stat: "3M+",
            sub: "Active Deriv traders globally",
            detail: "25-year track record, multi-jurisdiction regulation (MFSA, VFSC, LFSA), $5 minimum deposit. Synthetic indices trade 24/7, immune to global news events — ideal for education-first positioning.",
          },
          {
            title: "Revenue Ceiling",
            stat: "$100",
            sub: "Per qualified CPA referral",
            detail: "Revenue share pays 30–45% of net revenue. Master Partner adds 20% of sub-affiliate commissions — no cap on network size. A single active V75 MT5 trader generates meaningful daily commission.",
          },
          {
            title: "Your Position",
            stat: "nathimj.co.za",
            sub: "Education-first authority hub",
            detail: "A South African trading education brand sits at the exact intersection of demand and supply. The platform educates → qualifies → converts → retains. The moat is trust.",
          },
        ],
        verdict: "The window is open. Education-led affiliate positioning in South Africa's retail trading market is a first-mover opportunity with structural tailwinds, a proven product, and a compounding revenue model.",
      },
    },
    {
      id: "deriv",
      label: "Deriv Deep-Dive",
      icon: "⬡",
      color: "#4A9EBF",
      content: {
        type: "deriv",
        sections: [
          {
            heading: "Business Model Architecture",
            body: "Deriv (formerly Binary.com, est. 1999) operates a vertically integrated retail trading ecosystem. Revenue flows from spreads, commissions per lot, and options premiums across forex, commodities, stock CFDs, and its proprietary synthetic indices. The synthetic index segment is the crown jewel — algorithm-based instruments with statistically consistent volatility, trading 24/7 with no exposure to macroeconomic events.",
          },
          {
            heading: "Synthetic Indices — The Product Moat",
            body: "In 2025, Deriv expanded to 15+ synthetic indices on both MT5 and cTrader. Volatility Indices (V10–V300), Crash/Boom indices, Range Break, Drift Switch, Step Index. New 'Macro Volatility' and 'Energy Volatility' indices in testing. Dynamic leverage adjusts by trade volume and volatility. AI-based margin warnings in the 2025–26 roadmap. For African markets, V75 (Volatility 75 Index) is the dominant draw — high volatility, liquid, no overnight gaps.",
          },
          {
            heading: "Platform Suite",
            body: "Deriv Trader (web), DBot (automation), Deriv MT5, Deriv cTrader, Deriv X. All platforms offer demo accounts. $5 minimum live deposit. Instant withdrawals via multiple payment methods including M-Pesa and local bank transfer — critical for African market adoption.",
          },
          {
            heading: "Regulatory Standing",
            body: "Regulated by MFSA (Malta), VFSC (Vanuatu), LFSA (Labuan). Not FSP-licensed in South Africa directly — positions partners who understand local regulatory nuance as essential intermediaries. Partners who add compliance context build differentiated trust.",
          },
        ],
      },
    },
    {
      id: "affiliate",
      label: "Affiliate Blueprint",
      icon: "◎",
      color: "#7EC8A4",
      content: {
        type: "affiliate",
        models: [
          {
            name: "Revenue Share",
            badge: "Recommended",
            description: "Earn a percentage of Deriv's net revenue from your referrals' trades (Options: digital options, multipliers, accumulators, turbo options, lookbacks).",
            tiers: [
              { range: "0 – $20,000", rate: "30%" },
              { range: "$20,000+", rate: "45%" },
            ],
            bestFor: "Education platforms where referrals build long-term trading habits. Compounds as your audience grows.",
          },
          {
            name: "Turnover Plan",
            badge: "High Volume",
            description: "Earn a percentage of total trading volume rather than net revenue. Better for high-volume referral networks.",
            tiers: [
              { range: "Forex lots", rate: "Per-lot rate" },
              { range: "Synthetic indices", rate: "Per-lot rate" },
            ],
            bestFor: "Large communities where traders are active but individual trades are smaller.",
          },
          {
            name: "CPA Model",
            badge: "Quick Wins",
            description: "Up to $100 per qualified new client. Instant withdrawals, real-time tracking dashboard.",
            tiers: [
              { range: "Qualified referral", rate: "Up to $100" },
            ],
            bestFor: "Campaign-based promotions, viral content, paid media testing.",
          },
          {
            name: "Master Partner",
            badge: "Scale Play",
            description: "Earn 20% of commissions from sub-affiliates you recruit — paid by Deriv separately. Your sub-partners receive their full 100%.",
            tiers: [
              { range: "Sub-affiliate earnings", rate: "20% override" },
            ],
            bestFor: "Trading educators who train other affiliates or mentors who build communities of promoters.",
          },
        ],
        tools: [
          "Proprietary 'My Affiliate' dashboard — real-time reporting",
          "Sub-ID tracking — measure which content converts",
          "Deep-link to specific products (V75 page, synthetic indices, copy trading)",
          "Professional banner library + marketing templates",
          "Multilingual support for African market campaigns",
        ],
      },
    },
    {
      id: "market",
      label: "SA Market Intelligence",
      icon: "◉",
      color: "#E07B5A",
      content: {
        type: "market",
        stats: [
          { label: "SA Fintech Market 2025", value: "$1.14B" },
          { label: "Projected by 2034", value: "$4.29B" },
          { label: "CAGR 2026–34", value: "15.85%" },
          { label: "Internet Penetration", value: "76%" },
          { label: "Population", value: "63M" },
          { label: "Fintech users who are digitally native youth", value: "~60%" },
        ],
        insights: [
          {
            title: "The Education Gap",
            body: "South Africa's Traders Fair 2025 drew 1,500 attendees — proof of appetite. Yet structured, ongoing retail trading education in local context is scarce. Most content is generic or broker-produced, lacking independent credibility.",
          },
          {
            title: "Synthetic Index Dominance",
            body: "V75 (Volatility 75) has become Africa's signature instrument. It's discussed in WhatsApp groups, Telegram channels, and YouTube comments across Nigeria, Kenya, and South Africa. Demand for structured V75 education is immense and largely unmet.",
          },
          {
            title: "Regulatory Nuance",
            body: "FSCA (Financial Sector Conduct Authority) regulates SA. Deriv is not directly FSCA-licensed. This creates a trust gap that a credible local education platform bridges — by contextualising risk, compliance, and responsible trading for SA audiences.",
          },
          {
            title: "Youth-Led Adoption",
            body: "60% of SA fintech users are digitally native youth. TikTok, YouTube Shorts, and Instagram Reels are primary discovery channels. Short-form content that teaches real trading concepts (not get-rich-quick) builds authentic, converting audiences.",
          },
        ],
        competitors: [
          { name: "Generic YouTube Channels", weakness: "No local context, no ongoing support" },
          { name: "Broker-Owned Content", weakness: "Conflict of interest, perceived bias" },
          { name: "Paid Signal Groups", weakness: "No education, pure dependency model" },
          { name: "nathimj.co.za", weakness: "OPPORTUNITY — independent, local, educational" },
        ],
      },
    },
    {
      id: "framework",
      label: "Transformation Framework",
      icon: "◆",
      color: "#A67EC8",
      content: {
        type: "framework",
        phases: [
          {
            phase: "01",
            title: "Foundation",
            timeframe: "Month 1–2",
            color: "#C8A96E",
            actions: [
              "Define brand positioning: Independent SA Trading Education Authority",
              "Build nathimj.co.za as content hub — blog, free resources, glossary",
              "Set up Deriv affiliate account — Revenue Share model",
              "Create cornerstone content: 'Complete Guide to V75 for South African Traders'",
              "Launch email list — lead magnet: Free 7-Day Trading Foundation Course",
            ],
          },
          {
            phase: "02",
            title: "Content Engine",
            timeframe: "Month 2–4",
            color: "#4A9EBF",
            actions: [
              "Publish 3x/week: 1 long-form blog, 2 short-form videos (YouTube/TikTok)",
              "Cover: Synthetic indices explainers, risk management, DBot automation, platform tutorials",
              "Build YouTube channel around V75, Crash/Boom, and Deriv platform walkthroughs",
              "Launch Telegram community — free, education-first, no signals",
              "Implement Sub-ID tracking: measure which content drives Deriv sign-ups",
            ],
          },
          {
            phase: "03",
            title: "Monetisation",
            timeframe: "Month 4–6",
            color: "#7EC8A4",
            actions: [
              "Launch paid product: 'SA Synthetic Index Masterclass' (R999–R1,499)",
              "Introduce Deriv affiliate deep-links across all content touchpoints",
              "Add Master Partner track — recruit other SA educators as sub-affiliates",
              "Email nurture sequence: 12-part series leading to Deriv demo account sign-up",
              "Webinar series: Monthly live sessions on market conditions + platform features",
            ],
          },
          {
            phase: "04",
            title: "Scale",
            timeframe: "Month 6–12",
            color: "#E07B5A",
            actions: [
              "Corporate training: Offer workplace financial literacy sessions (HR departments)",
              "University partnerships: Guest lectures, campus trading clubs",
              "Expand to regional markets: Zimbabwe, Botswana, Namibia — same language, same platform",
              "Launch Affiliate Academy: Train other SA creators on Deriv affiliate programme",
              "Negotiate enhanced Deriv rates via volume performance track record",
            ],
          },
        ],
      },
    },
    {
      id: "revenue",
      label: "Revenue Model",
      icon: "◇",
      color: "#E0A05A",
      content: {
        type: "revenue",
        streams: [
          {
            name: "Deriv Revenue Share",
            type: "Passive / Recurring",
            description: "30–45% of net revenue from referred traders. Compounds as trader base grows. A community of 200 active traders generating modest volume creates meaningful monthly income.",
            potential: "R5K–R50K+/month",
            timeline: "Month 3+",
          },
          {
            name: "Deriv CPA",
            type: "Campaign-Based",
            description: "Up to $100 per qualified referral. Ideal for launch campaigns, viral content moments, and paid media ROI testing.",
            potential: "R1K–R20K/campaign",
            timeline: "Month 1+",
          },
          {
            name: "Paid Courses & Masterclasses",
            type: "Direct Revenue",
            description: "SA Synthetic Index Masterclass at R999–R1,499. 50 students/month = R50K–R75K/month. Scales with content reputation.",
            potential: "R20K–R100K/month",
            timeline: "Month 4+",
          },
          {
            name: "Master Partner Override",
            type: "Leverage Play",
            description: "20% of commissions earned by sub-affiliates you recruit. 10 active sub-affiliates each earning R10K/month = R20K additional with no extra work.",
            potential: "R10K–R50K+/month",
            timeline: "Month 6+",
          },
          {
            name: "Corporate & Institutional",
            type: "High-Ticket",
            description: "Financial literacy workshops for employers, HR departments, universities. R5K–R15K per session. Builds brand authority and generates high-quality referrals.",
            potential: "R15K–R60K/month",
            timeline: "Month 8+",
          },
        ],
        note: "Conservative 12-month target: R50,000–R150,000/month combined. These are conservative estimates based on consistent execution of the content and community strategy above.",
      },
    },
    {
      id: "action",
      label: "30-Day Action Plan",
      icon: "▶",
      color: "#7EC8A4",
      content: {
        type: "action",
        weeks: [
          {
            week: "Week 1",
            title: "Infrastructure",
            tasks: [
              "Register Deriv affiliate account at partners.deriv.com",
              "Set up nathimj.co.za — clear navigation: Home, Learn, Resources, About",
              "Install analytics (GA4 + Deriv Sub-ID tracking)",
              "Create 3 social profiles: YouTube, TikTok, Telegram",
              "Write your brand story: Why you teach trading in SA",
            ],
          },
          {
            week: "Week 2",
            title: "First Content",
            tasks: [
              "Record: 'What is V75 and why SA traders love it' (YouTube, 10–15 min)",
              "Write: 'Deriv South Africa Complete Beginner Guide' (blog, 2000+ words)",
              "Create lead magnet: '7 Things SA Traders Must Know Before Going Live'",
              "Set up email list (MailerLite or ConvertKit — free tier)",
              "Post daily on TikTok: 60-second trading facts, no fluff",
            ],
          },
          {
            week: "Week 3",
            title: "Community",
            tasks: [
              "Launch Telegram group: 'SA Synthetic Traders — Education Hub'",
              "Pin rules: No signals, no spam, education only — this builds trust",
              "Post your first YouTube video with Deriv affiliate link in description",
              "Reach out to 5 SA trading content creators for collaborations",
              "Email list welcome sequence: Day 1 → 3 → 7 → 14 touchpoints",
            ],
          },
          {
            week: "Week 4",
            title: "Optimise & Iterate",
            tasks: [
              "Review Deriv dashboard: Which Sub-IDs generated clicks/sign-ups?",
              "Double down on the content format that got most engagement",
              "Record your first live webinar: 'Trading V75 on Deriv — Platform Walkthrough'",
              "Survey your Telegram community: What do they struggle with most?",
              "Plan Month 2 content calendar based on real audience data",
            ],
          },
        ],
      },
    },
  ],
};

export default function DerivReport() {
  const [active, setActive] = useState("executive");

  const current = data.sections.find((s) => s.id === active);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0D0D0D",
      color: "#E8E0D0",
      fontFamily: "'Georgia', 'Times New Roman', serif",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #2A2A2A",
        padding: "32px 40px 24px",
        background: "linear-gradient(180deg, #111 0%, #0D0D0D 100%)",
      }}>
        <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#666", textTransform: "uppercase", marginBottom: "12px" }}>
          Intelligence Report · May 2026
        </div>
        <h1 style={{
          fontSize: "clamp(22px, 4vw, 36px)",
          fontWeight: "400",
          letterSpacing: "-0.5px",
          margin: 0,
          color: "#F0E8D8",
          lineHeight: 1.2,
        }}>
          Deriv × nathimj.co.za
        </h1>
        <div style={{ fontSize: "14px", color: "#888", marginTop: "8px", fontStyle: "italic" }}>
          Full-spectrum strategy: market intelligence, affiliate architecture & transformation framework
        </div>
      </div>

      {/* Nav */}
      <div style={{
        display: "flex",
        overflowX: "auto",
        gap: "2px",
        background: "#111",
        padding: "0",
        borderBottom: "1px solid #1E1E1E",
      }}>
        {data.sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              flex: "0 0 auto",
              padding: "14px 20px",
              background: active === s.id ? "#1A1A1A" : "transparent",
              border: "none",
              borderBottom: active === s.id ? `2px solid ${s.color}` : "2px solid transparent",
              color: active === s.id ? s.color : "#555",
              cursor: "pointer",
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}
          >
            <span style={{ marginRight: "6px" }}>{s.icon}</span>
            {s.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
        {current && <Section data={current} />}
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #1E1E1E",
        padding: "24px 40px",
        textAlign: "center",
        color: "#444",
        fontSize: "11px",
        letterSpacing: "2px",
        textTransform: "uppercase",
      }}>
        nathimj.co.za · Deriv Strategic Intelligence · 2026
      </div>
    </div>
  );
}

function Section({ data: s }) {
  const c = s.content;

  if (c.type === "executive") {
    return (
      <div>
        <SectionHeader icon={s.icon} color={s.color} title={c.headline} sub={c.tagline} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", margin: "32px 0" }}>
          {c.pillars.map((p, i) => (
            <div key={i} style={{
              background: "#131313",
              border: "1px solid #222",
              borderTop: `3px solid ${s.color}`,
              padding: "24px",
            }}>
              <div style={{ fontSize: "28px", fontWeight: "300", color: s.color, letterSpacing: "-1px" }}>{p.stat}</div>
              <div style={{ fontSize: "11px", color: "#666", textTransform: "uppercase", letterSpacing: "2px", margin: "4px 0 12px" }}>{p.sub}</div>
              <div style={{ fontWeight: "600", fontSize: "14px", color: "#CCC", marginBottom: "8px" }}>{p.title}</div>
              <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.6 }}>{p.detail}</div>
            </div>
          ))}
        </div>
        <div style={{
          background: "#131313",
          border: "1px solid #2A2A2A",
          borderLeft: `4px solid ${s.color}`,
          padding: "24px 28px",
          marginTop: "8px",
        }}>
          <div style={{ fontSize: "11px", color: s.color, textTransform: "uppercase", letterSpacing: "3px", marginBottom: "10px" }}>Verdict</div>
          <div style={{ fontSize: "15px", color: "#C8C0B0", lineHeight: 1.7 }}>{c.verdict}</div>
        </div>
      </div>
    );
  }

  if (c.type === "deriv") {
    return (
      <div>
        <SectionHeader icon={s.icon} color={s.color} title="Deriv.com Deep-Dive" sub="Business model, product architecture, and what makes it work for SA" />
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "32px" }}>
          {c.sections.map((sec, i) => (
            <div key={i} style={{
              background: "#131313",
              border: "1px solid #1E1E1E",
              padding: "24px 28px",
            }}>
              <div style={{ fontSize: "11px", color: s.color, textTransform: "uppercase", letterSpacing: "3px", marginBottom: "12px" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: "16px", color: "#DDD", fontWeight: "600" }}>{sec.heading}</h3>
              <p style={{ margin: 0, color: "#888", lineHeight: 1.8, fontSize: "14px" }}>{sec.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (c.type === "affiliate") {
    return (
      <div>
        <SectionHeader icon={s.icon} color={s.color} title="Affiliate Programme Blueprint" sub="Four commission models, when to use each, and the tools available" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "32px" }}>
          {c.models.map((m, i) => (
            <div key={i} style={{
              background: "#131313",
              border: "1px solid #222",
              padding: "22px",
              position: "relative",
            }}>
              <div style={{
                display: "inline-block",
                fontSize: "9px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: s.color,
                border: `1px solid ${s.color}`,
                padding: "3px 8px",
                marginBottom: "12px",
              }}>{m.badge}</div>
              <h3 style={{ margin: "0 0 10px", fontSize: "15px", color: "#DDD" }}>{m.name}</h3>
              <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.6, margin: "0 0 14px" }}>{m.description}</p>
              <div style={{ borderTop: "1px solid #222", paddingTop: "12px", marginBottom: "12px" }}>
                {m.tiers.map((t, j) => (
                  <div key={j} style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                    <span style={{ color: "#666" }}>{t.range}</span>
                    <span style={{ color: s.color, fontWeight: "600" }}>{t.rate}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: "12px", color: "#555", fontStyle: "italic" }}>Best for: {m.bestFor}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "28px", background: "#131313", border: "1px solid #1E1E1E", padding: "24px" }}>
          <div style={{ fontSize: "11px", color: s.color, textTransform: "uppercase", letterSpacing: "3px", marginBottom: "14px" }}>Platform Tools</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
            {c.tools.map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#888" }}>
                <span style={{ color: s.color, marginTop: "2px", flexShrink: 0 }}>›</span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (c.type === "market") {
    return (
      <div>
        <SectionHeader icon={s.icon} color={s.color} title="South Africa Market Intelligence" sub="The structural forces creating this opportunity right now" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginTop: "32px" }}>
          {c.stats.map((st, i) => (
            <div key={i} style={{
              background: "#131313",
              border: "1px solid #1E1E1E",
              padding: "20px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "22px", color: s.color, fontWeight: "300", letterSpacing: "-0.5px" }}>{st.value}</div>
              <div style={{ fontSize: "11px", color: "#555", marginTop: "6px", lineHeight: 1.4 }}>{st.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
          {c.insights.map((ins, i) => (
            <div key={i} style={{
              background: "#131313",
              border: "1px solid #1E1E1E",
              borderLeft: `3px solid ${s.color}`,
              padding: "20px 24px",
            }}>
              <h3 style={{ margin: "0 0 8px", fontSize: "14px", color: "#CCC" }}>{ins.title}</h3>
              <p style={{ margin: 0, fontSize: "13px", color: "#777", lineHeight: 1.7 }}>{ins.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "24px" }}>
          <div style={{ fontSize: "11px", color: "#444", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "14px" }}>Competitive Landscape</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
            {c.competitors.map((comp, i) => (
              <div key={i} style={{
                background: i === c.competitors.length - 1 ? "#131F18" : "#111",
                border: `1px solid ${i === c.competitors.length - 1 ? "#2A4A34" : "#1A1A1A"}`,
                padding: "16px",
              }}>
                <div style={{ fontSize: "13px", color: i === c.competitors.length - 1 ? "#7EC8A4" : "#888", marginBottom: "6px", fontWeight: "600" }}>{comp.name}</div>
                <div style={{ fontSize: "12px", color: i === c.competitors.length - 1 ? "#4A8A64" : "#555" }}>{comp.weakness}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (c.type === "framework") {
    return (
      <div>
        <SectionHeader icon={s.icon} color={s.color} title="Transformation Framework" sub="A phased execution roadmap from zero to authority" />
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "32px" }}>
          {c.phases.map((ph, i) => (
            <div key={i} style={{
              background: "#131313",
              border: "1px solid #1E1E1E",
              padding: "28px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                top: "20px",
                right: "24px",
                fontSize: "48px",
                fontWeight: "300",
                color: "#1A1A1A",
                lineHeight: 1,
              }}>{ph.phase}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "18px" }}>
                <div style={{
                  width: "4px",
                  height: "40px",
                  background: ph.color,
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: "11px", color: ph.color, textTransform: "uppercase", letterSpacing: "3px" }}>{ph.timeframe}</div>
                  <div style={{ fontSize: "18px", color: "#DDD", marginTop: "2px" }}>{ph.title}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {ph.actions.map((a, j) => (
                  <div key={j} style={{ display: "flex", gap: "12px", fontSize: "13px", color: "#888", lineHeight: 1.5 }}>
                    <span style={{ color: ph.color, flexShrink: 0, marginTop: "1px" }}>→</span>
                    {a}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (c.type === "revenue") {
    return (
      <div>
        <SectionHeader icon={s.icon} color={s.color} title="Revenue Model" sub="Five income streams, timelines, and realistic projections" />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "32px" }}>
          {c.streams.map((st, i) => (
            <div key={i} style={{
              background: "#131313",
              border: "1px solid #1E1E1E",
              padding: "22px 26px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "16px",
              alignItems: "start",
            }}>
              <div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                  <h3 style={{ margin: 0, fontSize: "15px", color: "#DDD" }}>{st.name}</h3>
                  <span style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: s.color,
                    border: `1px solid ${s.color}`,
                    padding: "2px 7px",
                    opacity: 0.7,
                  }}>{st.type}</span>
                </div>
                <p style={{ margin: "0 0 8px", fontSize: "13px", color: "#777", lineHeight: 1.6 }}>{st.description}</p>
                <div style={{ fontSize: "11px", color: "#555" }}>Active from: {st.timeline}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: "16px", color: s.color, fontWeight: "300", whiteSpace: "nowrap" }}>{st.potential}</div>
                <div style={{ fontSize: "10px", color: "#444", marginTop: "4px" }}>potential</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: "20px",
          background: "#141210",
          border: `1px solid ${s.color}30`,
          borderLeft: `4px solid ${s.color}`,
          padding: "20px 24px",
        }}>
          <div style={{ fontSize: "11px", color: s.color, textTransform: "uppercase", letterSpacing: "3px", marginBottom: "8px" }}>12-Month Target</div>
          <div style={{ fontSize: "22px", color: "#DDD", fontWeight: "300" }}>R50,000 – R150,000 / month</div>
          <div style={{ fontSize: "13px", color: "#666", marginTop: "6px" }}>{c.note}</div>
        </div>
      </div>
    );
  }

  if (c.type === "action") {
    return (
      <div>
        <SectionHeader icon={s.icon} color={s.color} title="30-Day Action Plan" sub="Exactly what to do in your first four weeks" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "32px" }}>
          {c.weeks.map((w, i) => (
            <div key={i} style={{
              background: "#131313",
              border: "1px solid #1E1E1E",
              borderTop: `3px solid ${s.color}`,
              padding: "22px",
            }}>
              <div style={{ fontSize: "11px", color: s.color, textTransform: "uppercase", letterSpacing: "3px", marginBottom: "4px" }}>{w.week}</div>
              <h3 style={{ margin: "0 0 16px", fontSize: "16px", color: "#DDD" }}>{w.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {w.tasks.map((t, j) => (
                  <div key={j} style={{ display: "flex", gap: "10px", fontSize: "12px", color: "#777", lineHeight: 1.5 }}>
                    <span style={{ color: s.color, flexShrink: 0 }}>✓</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

function SectionHeader({ icon, color, title, sub }) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
        <span style={{ fontSize: "20px", color }}>{icon}</span>
        <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "400", color: "#EEE" }}>{title}</h2>
      </div>
      <div style={{ fontSize: "13px", color: "#666", paddingLeft: "32px", fontStyle: "italic" }}>{sub}</div>
      <div style={{ height: "1px", background: "#1E1E1E", marginTop: "20px" }} />
    </div>
  );
}
