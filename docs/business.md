# FushaGo — Business (Parts 1–4)

> **FushaGo:** book a 5-a-side football pitch near you in 30 seconds, with no phone calls and no lost slots.

---

## 1. The problem

**One sentence:**
Owners of 5-a-side football pitches in Kosovo and North Macedonia take every booking by phone during their busiest evening hours. When a team books and doesn't show up, the slot is lost. We estimate this costs a pitch **€60–150 a month** and **1–2 hours of phone calls every evening**.

*(The numbers are our starting estimate: 3–5 no-shows a month × €20–30 per hour slot. The interviews below must confirm or correct them.)*

### Interviews (in their own words)

> ⚠️ **SIMULATED INTERVIEWS — not real people.** These are realistic examples written by AI, based on typical complaints of pitch owners and players. They show the kind of answers we expect. **Replace them with real interviews** before using this for real decisions.

**Interview 1 — Pitch owner (simulated)**
- Who: owner of a venue with 2 artificial-grass pitches, Prishtina
- Questions asked: How do people book today? Tell me about the last no-show. How often does it happen? How long are you on the phone every evening? Have you tried an app?
- What they said:
  - "From six in the evening until ten the phone doesn't stop. Half the time I'm working, and I miss calls, so I lose the booking."
  - "Last Thursday a team booked 21:00 and never came. I turned away two other groups for that hour. That's €25 gone."
  - "It happens maybe three, four times a month. Mostly young guys. They say 'we're coming' and then they don't answer the phone."
  - "I write everything in this notebook. Once I wrote two teams for the same hour and they almost fought."
  - "An app? If it's simple and in Albanian, maybe. But I won't pay a percentage of every booking."
- What surprised me: the double booking from the notebook causes as much stress as the no-shows. And the owner hates commissions but is open to a small fixed price.

**Interview 2 — Player who organises games (simulated)**
- Who: 24-year-old who organises a weekly game for friends, Tetovo
- Questions asked: How do you organise a game, step by step? What's the most annoying part? How do you collect money from the others?
- What they said:
  - "I call two or three pitches until one is free. Sometimes they don't pick up, so I go on Instagram and send a message."
  - "Then I write in our WhatsApp group: 'Wednesday 20:00, who's in?' and wait for 10 people to answer."
  - "The worst is when we arrive and someone else is on the pitch because the owner forgot us."
  - "I pay for the pitch and then I chase everyone for €2.50. Two guys still owe me from last month."
  - "If I could see which pitch is free tonight on my phone, I'd book in a second."
- What surprised me: the player's biggest pain is **uncertainty** (is it free? is my booking real?) and **collecting money**, not the booking itself.

**What these (simulated) interviews suggest**
- The no-show and phone-call problem is the owner's pain → it supports our problem sentence.
- Double bookings from the notebook are a second strong pain → our "one booking per slot" rule handles it.
- Collecting money from teammates is a real player pain → v1 shows the per-person price; real money splitting is an idea for v2.

**Hypotheses the interviews must test**
1. No-shows happen at least 3 times a month per pitch.
2. Owners find the phone calls annoying, not just normal.
3. Players would book online if they could see free slots.
4. Owners would pay about €19 a month if it cuts no-shows.

---

## 2. The big picture

**Product in one sentence (for a stranger):**
FushaGo is a website where you see which football pitches near you are free tonight and book one in 30 seconds. The pitch owner gets the booking on their phone with no call.

| | |
|---|---|
| **Who uses it** | **Players.** Usually the "captain" who organises the game for 10 friends, aged 16–40. |
| **Who pays** | **Pitch owners.** Monthly subscription. Players book for free. |
| **Why now** | Almost every neighbourhood has a commercial 5-a-side pitch, and new ones keep opening. Players already organise in WhatsApp groups and are used to booking things online (food delivery, taxis). Most pitches still use a phone and a notebook. |

### Three different ways to solve the same problem

| Option | How it works | Why we did NOT choose it (or did) |
|---|---|---|
| **A. WhatsApp bot** | Players message a number, and the bot answers with free slots and books. | Feels familiar, but the official WhatsApp Business API costs money per conversation, is hard for a beginner to build, and owners can't see a clear calendar. **Good idea for v2.** |
| **B. Phone booking service** | One shared phone number, and a person answers for 20 pitches. | Needs paid staff every evening, doesn't scale, and errors still happen. |
| **C. Physical tablet at the pitch** | A tablet with a calendar at the pitch entrance. | Players still can't book from home, and it costs hardware money. |
| **✅ D. Web app (mobile-first)** | Players book from their phone browser; owners manage from their phone. | **Chosen:** no app download needed, cheap to host, works on any phone, and one link can be shared in WhatsApp groups. A beginner can build it. |

---

## 3. The market

### Competitors

| Competitor | Price | What it does well | Where it fails (for us) | Link |
|---|---|---|---|---|
| **Playtomic** | Free for players. Club plans on request; competitors report about a **4% fee** per booking *(to verify)*. | Big international network, online payments, polished app. | Built mainly for **padel and tennis**. We found no presence in Kosovo or North Macedonia, and there is no Albanian language. | [playtomic.com](https://playtomic.com) · [pricing](https://playtomic.com/pricing) |
| **PlayOff** | Free for players. Venue price not public *(to verify)*. | Regional (Croatia / Bosnia), lets players browse and book pitches. | We found no listing that covers Kosovo or North Macedonia, and there is no Albanian language. | [App Store](https://apps.apple.com/hr/app/playoff/id6449152333) |
| **MojTermin** | Free for players. Venue price not public *(to verify)*. | Serbian app that includes football facilities. | Serbia only, and in Serbian. | [App Store](https://apps.apple.com/mk/app/mojtermin/id6749034926) |
| **Book & Go / Anolla** (booking software) | Monthly software plans *(to verify)*. | Generic booking system a venue can set up itself. | The owner must set it up alone, there are no local players on it, and it isn't in Albanian or Macedonian. | [bookandgo.app](https://bookandgo.app) · [anolla.com](https://anolla.com/en/football-software) |
| **"Do nothing": phone + notebook + WhatsApp / Instagram DMs** | **€0** | Free, everyone knows how to use it, personal contact. | No-shows cost money, the owner is on the phone all evening, two people can get the same slot, and players can't see free times. | — |

**Missed competitors?** Search the App Store and Google Play for "fushë", "fudbal", "futsal" + "Prishtina" or "Skopje", and ask 3 pitch owners what they've been offered.

### How many possible customers?

**Customer = one pitch venue** (the one who pays).

| Step | Kosovo | North Macedonia | How we got it |
|---|---|---|---|
| Population | ~1.6 million | ~1.8 million | 2024 census (KS), 2021 census (MK) |
| Commercial 5-a-side pitches (1 per ~5,000 people) | ~320 | ~360 | Assumption. Test it by counting pitches on Google Maps in 1 city. |
| Venues (1 venue has ~1.5 pitches on average) | **~210** | **~240** | 320 ÷ 1.5, 360 ÷ 1.5 |
| **Total venues** | | | **~450 venues** |

- **Players (users, not payers):** a pitch used ~4 hours each evening × 10 players = ~40 players per pitch per day. That means **tens of thousands of active players** across both countries.
- **Maximum revenue if every venue paid:** 450 × €19 × 12 ≈ **€100,000 per year**.
- **Realistic year-1 goal:** 30 venues (≈7%) → about €570 a month.

*Quick check:* on Google Maps, search "fushë futbolli" in Prishtina and count. If Prishtina (~220k people) has ~40–50 pitches, the 1 per 5,000 assumption holds.

### Why a customer would choose us

**FushaGo is the only booking tool made for football pitches in Kosovo and North Macedonia, in Albanian, at a flat €19 a month with no commission, and it actually reduces no-shows.**

---

## 4. Business model and price

### Lean Canvas

| **Problem** | **Solution** | **Unique value proposition** | **Unfair advantage** | **Customer segments** |
|---|---|---|---|---|
| 1. No-shows cost owners money. 2. Phone calls all evening. 3. Players can't see free times. | Online calendar with instant booking, reminders, a no-show strike system, and a shareable link. | "Book a pitch in 30 seconds. No calls, no lost slots." | Local language, local presence (we visit owners in person), and a network of players across venues. | **Payers:** 5-a-side pitch owners. **Users:** players aged 16–40 (team captains). **Early adopters:** newer pitches in Prishtina, Prizren, Tetovo and Skopje that are active on Instagram. |
| **Existing alternatives:** phone, notebook, WhatsApp, Instagram DMs. | **Key metrics:** bookings per week, no-show rate, number of paying venues, and how many players return to book again. | **High-level concept:** "Booking.com for football pitches." | **Channels:** in-person visits, Instagram, Facebook groups, a booking link shared in WhatsApp. | |
| **Cost structure:** hosting, domain, email, about €10–15 a month, plus our time. | | **Revenue streams:** €19 a month per venue (up to 3 pitches), +€5 a month per extra pitch. | | |

### Price and why

- **€19 / month per venue** (up to 3 pitches). Each extra pitch is +€5 a month. **Players pay nothing.**
- **Why monthly and not per booking:** owners hate commissions (Playtomic-style fees). A flat price is easy to understand, and the maths is simple: **one saved no-show (~€25) already pays for the whole month.**
- **Why not one-off:** we have ongoing costs (hosting, email) and keep improving the product.
- **Launch offer:** the first 10 venues get **3 months free**, then €15 a month for life ("founder price").

### Monthly costs (version 1)

| Item | Service (example) | Cost / month |
|---|---|---|
| Hosting (website + server) | Vercel (free tier) | €0 |
| Database + login | Supabase (free tier) | €0 |
| Domain | e.g. fushago.app (~€15/year) | ~€1.25 |
| Email (confirmations, reminders) | Resend (free up to 3,000/month) | €0 |
| SMS | **Not in v1.** We use email plus WhatsApp share links (free). | €0 |
| AI | Not needed in v1 | €0 |
| Business email | Zoho Mail (free plan) | €0 |
| **Total** | | **≈ €1–15 / month** (goes up once we pass the free limits) |

*Break-even:* 1 paying venue covers all costs.

### How the first 10 customers will find us

| # | Channel | Exactly what we do | Target |
|---|---|---|---|
| 1 | **Walk-in visits** | Visit pitches in Prishtina between 18:00 and 22:00, show a 2-minute demo on the phone, and set up the venue on the spot. | 5 venues |
| 2 | **Instagram DMs** | Message pitches that post on Instagram (search #fushefutbolli, #futsalprishtina, #tetovo) with a 30-second demo video. | 3 venues |
| 3 | **Facebook groups** | Post in local football and neighbourhood groups: "Looking for 3 pitches to try FushaGo free." | 1 venue |
| 4 | **Players bring owners** | Every booking page has a link: "Your pitch isn't on FushaGo? Tell them." Players share it in their WhatsApp groups. | 1 venue |
| 5 | **Friends and family** | Ask everyone we know: "Who owns a pitch?" Warm introductions convert best. | bonus |
