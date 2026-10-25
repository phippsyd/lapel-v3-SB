import type { StagGuide } from "./stag";

export const BATCH3: Record<string, StagGuide> = {
  brighton: {
    checked: "October 2026",
    intro: [
      "Brighton is the easiest seaside stag in the country if you're in the south. It's an hour from London, the beach is right next to the bars, and the city has the energy of somewhere much bigger.",
      "It's a good fit for a group that wants a bit of everything. The Lanes and North Laine have brilliant pubs and food, the seafront is made for a summer afternoon, and the late nights are as long as you want them to be.",
    ],
    locals: [
      "Brighton is a tolerant, easy-going city, and stag and hen groups are a normal sight at weekends. Most people won't mind you at all.",
      "The council takes late-night drinking seriously, though. Much of the centre is a special licensing zone where new late venues are hard to open, and some new bars have agreed to turn away stag and hen groups as a condition of getting a licence. Brighton is also the UK's best-known LGBT city, and Kemptown is the heart of it. Enjoy it, but don't treat it as a novelty.",
    ],
    gettingIn: [
      "The seafront clubs and the bars around West Street take stag groups, but door staff are wary of big groups of men, especially later on. Split into fours and sixes before you reach the door.",
      "Some bars in The Lanes and the smarter cocktail places have no-stag policies or simply won't let a large group in. Mixed groups get in much more easily.",
      "Fancy dress works on the seafront and in the party bars. It won't get you into the better pubs and cocktail bars, and some newer venues explicitly ban it.",
    ],
    areas: [
      { name: "The seafront and the arches", text: "Bars and clubs under the promenade, right on the beach. Brilliant in summer." },
      { name: "West Street", text: "The main late-night strip, busy with clubs and stag and hen groups at weekends." },
      { name: "The Lanes", text: "Narrow streets of pubs, restaurants and cocktail bars. More grown-up and better for dinner." },
      { name: "North Laine", text: "Independent pubs, craft beer and a mostly local crowd." },
      { name: "Kemptown", text: "East of the pier, the heart of LGBT Brighton, with good pubs and restaurants." },
    ],
    doing: [
      { name: "The beach", text: "Pebbles, sunshine if you're lucky, and bars right behind you. The main event on a summer weekend." },
      { name: "Brighton Palace Pier", text: "Arcades, rides and terrible food. Good for an hour of nonsense." },
      { name: "Paddleboarding, kayaking and sailing", text: "Watersports companies operate along the seafront and run group sessions." },
      { name: "Football at the Amex", text: "Brighton and Hove Albion home games are easy to reach by train from the centre." },
      { name: "Comedy", text: "Brighton has a strong comedy scene. Check each club's policy on stag groups before you book." },
    ],
    plan: [
      { day: "Friday", text: "Arrive at Brighton station, drop the bags and walk down to the seafront. Dinner in The Lanes, then West Street and the seafront clubs." },
      { day: "Saturday", text: "Breakfast, then a watersports session or the pier. Afternoon on the beach, dinner in North Laine, then out again." },
      { day: "Sunday", text: "A walk along the seafront to Hove, a big lunch and the train home." },
    ],
    stay: [
      "Hotels on and near the seafront keep everything walkable. Big self-catering houses are easy to find in Kemptown and Hove, but many ban parties, so read the rules.",
      "Summer weekends and Pride in early August are the busiest and most expensive times. Check the calendar.",
    ],
    costs: [
      { item: "Pint", amount: "Roughly £5.50–£7" },
      { item: "Train from London", amount: "Often £15–£30 each way off-peak. About an hour." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "The sea is colder and stronger than it looks. Don't swim after drinking.",
      "Seagulls will steal your chips. They're not joking.",
      "Book Saturday dinner in advance. The best places fill up early in summer.",
    ],
  },

  london: {
    checked: "October 2026",
    intro: [
      "London has more to do than anywhere else in the country, and for a lot of groups it's the easiest place to get everyone together. The catch is the cost. It's the most expensive stag in the UK, and nights out can get very pricey very quickly.",
      "The trick is to pick one or two areas and stay in them, rather than crossing the city all weekend. London is huge, and an hour on the Tube between bars kills a night.",
    ],
    locals: [
      "Londoners are mostly too busy to notice you, which is half the appeal. Stag groups disappear into the crowd in most areas.",
      "Pub staff are used to big groups, but they'll lose patience if you take over a small local, stand in the doorway or block the bar. Many central pubs are packed with after-work drinkers on a Friday, so a big group should expect to stand outside.",
    ],
    gettingIn: [
      "London bars and clubs are some of the hardest in the country for big groups of men to get into. Expect door staff to turn away groups of more than four or five lads at busy venues. Book tables, book guest lists, or split up.",
      "Dress codes vary wildly. Shoreditch bars are relaxed. West End and Mayfair clubs expect you to make a real effort, and some run guest lists only.",
      "Fancy dress gets you into very few places in the evening. Keep it for daytime activities or limit it to the groom.",
    ],
    areas: [
      { name: "Shoreditch and Hoxton", text: "Bars, clubs, street food and a relaxed door policy. The best area for a big group's night out." },
      { name: "Soho and the West End", text: "Classic pubs, cocktail bars and late venues. Busy and expensive." },
      { name: "Clapham", text: "South London's big night out, with a younger crowd and lots of bars on the High Street." },
      { name: "Borough and London Bridge", text: "Borough Market, old pubs and good food. A great Saturday afternoon." },
      { name: "Camden", text: "Live music, markets and pubs. Busy and fun." },
    ],
    doing: [
      { name: "A Thames boat party", text: "Private boat hire with a bar and music is a brilliant way to see the city with a big group." },
      { name: "Sport", text: "Football at Wembley, rugby at Twickenham, cricket at Lord's or the Oval, or a Premier League game if you can get tickets." },
      { name: "Darts, crazy golf and shuffleboard bars", text: "London has dozens of social gaming bars. They work well for a big group and take bookings." },
      { name: "A pub crawl on a theme", text: "The historic pubs of the City, the riverside pubs, or the old pubs around Borough. A good way to see London on foot." },
      { name: "Comedy", text: "London has more comedy clubs than anywhere else in the country. Check each club's stag policy before you book." },
    ],
    plan: [
      { day: "Friday", text: "Meet in Shoreditch for dinner and drinks, and stay in the area for the night." },
      { day: "Saturday", text: "Borough Market for lunch, a darts or shuffleboard bar in the afternoon, then a Thames boat party or dinner in Soho and a late night." },
      { day: "Sunday", text: "A roast in a proper pub, then everyone home." },
    ],
    stay: [
      "Pick your accommodation near the areas you'll spend the most time in. Hotels in Shoreditch, the City or around London Bridge are well placed.",
      "Big group apartments exist, but the city restricts whole-home short-term lets to 90 nights a year, and many have strict no-party rules.",
    ],
    costs: [
      { item: "Pint", amount: "Usually £6.50–£8, more in the West End" },
      { item: "Cocktail", amount: "Roughly £13–£18" },
      { item: "Thames boat hire", amount: "Varies a lot by size and night. Get quotes early." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Some Tube lines run all night on Fridays and Saturdays, but not all. Check before you plan the journey home.",
      "Pickpockets work the busy areas. Keep phones zipped away.",
      "Booking tables and guest lists in advance is the single biggest thing that'll improve a London stag.",
    ],
  },

  bath: {
    checked: "October 2026",
    intro: [
      "Bath is one of the most beautiful cities in Britain, and it makes a great stag for a group that wants good pubs, good food and a relaxed weekend rather than a huge night out.",
      "It's compact and easy to walk around, an hour and a half from London, and close enough to Bristol that you can head there for a bigger Saturday night if you want one.",
    ],
    locals: [
      "Bath is a small city with a lot of residents living right in the centre, and it gets a steady stream of stag and hen groups, especially in summer. Most locals are tolerant, but a loud group of lads stands out much more here than in a bigger city.",
      "Behave like you're in someone's town, because you are. Keep the volume down in the old streets at night, and you'll find the pubs welcoming.",
    ],
    gettingIn: [
      "Bath has fewer late venues than a bigger city, and the ones it has can be choosy with large groups of men. Split up before the door, and book tables for dinner and drinks where you can.",
      "Many of Bath's best pubs are small and traditional. A group of six is fine. A group of fifteen will struggle to fit in, let alone get served.",
      "Fancy dress will close a lot of doors in Bath. Keep it to the groom, if at all.",
    ],
    areas: [
      { name: "The city centre", text: "Around the Abbey and the Roman Baths. Old pubs, restaurants and a few bars." },
      { name: "George Street", text: "The main run of bars and late venues for a night out." },
      { name: "Walcot Street", text: "Independent bars, pubs and a more local feel." },
      { name: "The riverside", text: "Pubs along the Avon, good on a sunny afternoon." },
    ],
    doing: [
      { name: "Thermae Bath Spa", text: "The rooftop pool with views over the city is a great hangover cure. Check its rules on group sizes before you plan around it." },
      { name: "Bath Rugby at the Rec", text: "The ground sits right by the river in the centre, and match days are lively." },
      { name: "A brewery or gin tasting", text: "Several local producers run tastings, which suit a smaller group." },
      { name: "A walk round the city", text: "The Royal Crescent, the Circus and Pulteney Bridge are worth a slow morning walk." },
      { name: "A night in Bristol", text: "Bristol is fifteen minutes away by train if the group wants a bigger Saturday night." },
    ],
    plan: [
      { day: "Friday", text: "Arrive at Bath Spa station, drop the bags, and head into the old pubs around the centre. Dinner booked, then George Street." },
      { day: "Saturday", text: "The spa in the morning, the rugby or a tasting in the afternoon. Dinner in Bath, or the train to Bristol for a bigger night." },
      { day: "Sunday", text: "A walk round the Royal Crescent, a long lunch and the train home." },
    ],
    stay: [
      "Bath is expensive and books up fast, especially in summer and on rugby weekends. Big houses are available, but residents are sensitive to party lets, and many owners won't take stag groups.",
      "Book well ahead, and be honest with hosts about the group.",
    ],
    costs: [
      { item: "Pint", amount: "Roughly £5.50–£6.50" },
      { item: "Train from London", amount: "Often £25–£60 each way if booked early. About an hour and a half." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Late-night venues are limited. Plan where you'll end up rather than hoping to find somewhere at midnight.",
      "Book every dinner and as many drinks tables as you can. Bath fills up.",
      "If the group really wants a huge night, Bristol is the better base.",
    ],
  },

  york: {
    checked: "October 2026",
    intro: [
      "York is one of the most popular stag and hen cities in the north, and it's easy to see why. The old walls, the Minster and the medieval streets are beautiful, there's a pub on every corner, and the races are some of the best days out in British sport.",
      "It's also a small city that gets very busy with groups on a summer weekend. Plan well, and it's a brilliant stag. Turn up without a plan on a race day, and it can be chaos.",
    ],
    locals: [
      "York relies on tourism, and locals are used to big groups. On a busy weekend, though, stag and hen parties are everywhere, and residents have complained for years about rowdiness in the centre.",
      "In 2025 the council consulted on stronger powers to deal with antisocial behaviour in the centre. Among them was the option for police to send aggressive or rowdy stag and hen groups back to their hotels. Most groups will never come close to that line, but it tells you how the city feels about the worst of it.",
    ],
    gettingIn: [
      "Some of York's best traditional pubs don't allow large groups or stag and hen parties at all. Many others will happily take a small, well-behaved group. Split into smaller groups and don't push your luck at the quieter locals.",
      "Micklegate is the main stretch for a big night and is used to stag groups. Expect door staff to be stricter on race days and summer Saturdays.",
      "Fancy dress is common on Micklegate and at the races but won't get you into the better pubs. One costume for the groom is the safe choice.",
    ],
    areas: [
      { name: "Micklegate", text: "The traditional pub crawl street, running down to the river. Busy, loud and stag-friendly." },
      { name: "The city centre and the Shambles", text: "Medieval streets, old pubs and a lot of tourists. Beautiful in the daytime." },
      { name: "Fossgate and Walmgate", text: "Independent bars, restaurants and some of York's best pubs, with a more local crowd." },
      { name: "The riverside", text: "Pubs and bars along the Ouse, good on a summer afternoon." },
    ],
    doing: [
      { name: "York Races", text: "The Knavesmire hosts big race meetings from spring to autumn. It's the reason a lot of groups pick York. Book tickets and accommodation well ahead for the big days." },
      { name: "The city walls", text: "You can walk most of the way round the old city walls. It takes a couple of hours and is a good morning-after walk." },
      { name: "A brewery or gin tasting", text: "York has local breweries and distilleries that run group tastings." },
      { name: "A river cruise", text: "Boats run along the Ouse, and some do evening drinks trips." },
      { name: "Ghost walks", text: "York is said to be one of the most haunted cities in Europe, and the evening ghost walks are a good laugh." },
    ],
    plan: [
      { day: "Friday", text: "Arrive at York station, drop the bags and start on Micklegate. Dinner booked, then back out." },
      { day: "Saturday", text: "The races if they're on, or a walk round the walls and a brewery tasting if not. Dinner on Fossgate, then the riverside bars or Micklegate." },
      { day: "Sunday", text: "Breakfast in the old town, a look round the Minster and the train home." },
    ],
    stay: [
      "Hotels inside and just outside the walls keep everything walkable. Big group apartments are available, but they book up quickly for race weekends.",
      "Race days and summer weekends are much busier and more expensive. If you're not going to the races, avoid them.",
    ],
    costs: [
      { item: "Pint", amount: "Roughly £5–£6" },
      { item: "Train from London", amount: "Often £30–£70 each way if booked early. Under two hours." },
      { item: "Race tickets", amount: "Vary by meeting and enclosure. The big days cost the most." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "On race days the city fills up from late afternoon as racegoers come back into town. Get dinner booked early.",
      "Some pubs won't take groups at all. Respect it and move on.",
      "Keep the noise down in the old streets late at night. People live there.",
    ],
  },

  newquay: {
    checked: "October 2026",
    intro: [
      "Newquay is the UK's best-known surf town and the classic outdoor stag. Surfing and coasteering by day, bars and clubs by night, with some of the best beaches in Britain right on the doorstep.",
      "It's a long way from most of the country, so it suits a full weekend or longer. The town has also worked hard to shake off its old reputation as a party resort, and it feels very different from how it did fifteen years ago.",
    ],
    locals: [
      "Newquay depends on tourism, and stag groups are a big part of the summer trade. Most locals and business owners are welcoming.",
      "Around 2009 the town had a bad reputation for drunken tourism, and it responded firmly. Pubs and police famously banned mankinis and offensive costumes, local businesses brought in ID scanners and worked to cut street drinking, and crime fell. The town wants your money, not your mess. Keep it to having fun and you'll get on fine.",
    ],
    gettingIn: [
      "The big bars and clubs in the centre take stag groups, but door staff use ID scanners and are strict with drunk or rowdy groups. Split into smaller groups and stay on the right side of drunk at the door.",
      "Offensive costumes and mankinis will get you refused from pubs and moved on by police. Fun fancy dress is fine in the party bars, but keep it decent.",
      "Bring physical photo ID. Many venues scan it.",
    ],
    areas: [
      { name: "The town centre", text: "The main bars and clubs, all within a few minutes' walk of each other." },
      { name: "Fistral Beach", text: "The famous surf beach, with a couple of bars and restaurants overlooking the waves." },
      { name: "The harbour", text: "Quieter pubs and seafood by the water." },
    ],
    doing: [
      { name: "Surfing", text: "Newquay's surf schools run group lessons almost all year. A morning lesson on Fistral is the best way to start a day." },
      { name: "Coasteering", text: "Climbing, scrambling and jumping into the sea along the cliffs, with a guide. Brilliant fun and a good test of nerve. Only do it with a qualified operator." },
      { name: "Kayaking and stand-up paddleboarding", text: "Easy to book in the summer." },
      { name: "Go-karting and paintball", text: "Available nearby for a day when the sea's too rough." },
    ],
    plan: [
      { day: "Friday", text: "Travel down, check in, and head into the town centre for food and the bars." },
      { day: "Saturday", text: "A surf lesson or coasteering in the morning, a long lunch and the beach. Dinner at the harbour or in town, then a big night." },
      { day: "Sunday", text: "Breakfast overlooking Fistral, a walk along the cliffs and the long drive or train home." },
    ],
    stay: [
      "Self-catering houses and surf lodges are the usual choice for groups, and there are plenty in and around the town. Book early for summer.",
      "Summer is busy and expensive. Late spring and early autumn are cheaper and still warm enough for surfing in a wetsuit.",
    ],
    costs: [
      { item: "Pint", amount: "Roughly £5–£6.50" },
      { item: "Surf lesson", amount: "Group lessons are reasonable. Check what's included." },
      { item: "Travel", amount: "A long train journey from London, or flights to Newquay airport from some UK airports" },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Never go in the sea or near cliff edges after drinking. People have died in Newquay doing exactly that.",
      "Swim between the flags on lifeguarded beaches.",
      "Leave the mankini at home. It's a famous ban for a reason.",
    ],
  },

  nottingham: {
    checked: "October 2026",
    intro: [
      "Nottingham is one of the most underrated stag cities in the UK. It's central, good value, and full of students, which means the nightlife is busy and cheap. It also has some of the oldest pubs in the country.",
      "It's an easy weekend to organise, with two universities' worth of bars, a compact centre and a good range of activities nearby.",
    ],
    locals: [
      "Nottingham is friendly and relaxed, and stag and hen groups are common on weekend nights. You'll be one of many.",
      "As in any student city, the busiest bars get rowdy late on, and locals tend to drift to the quieter pubs. Respect the old pubs, which have regulars who've been drinking there for decades.",
    ],
    gettingIn: [
      "Most bars in the centre take stag groups, especially earlier in the evening. The bigger clubs can be choosy with large groups of men later on, so split up before the door.",
      "Dress codes are relaxed in most of the city, but sportswear and football shirts will get you turned away from the bigger clubs at weekends.",
      "Fancy dress is fine in the party bars and the student-heavy areas, less so in the Lace Market's cocktail bars.",
    ],
    areas: [
      { name: "The Lace Market and Hockley", text: "Cocktail bars, independent pubs and restaurants in old warehouse streets. The best area for a good night out." },
      { name: "The Old Market Square", text: "The heart of the city, with big bars and clubs nearby." },
      { name: "Around the castle", text: "Historic pubs, including Ye Olde Trip to Jerusalem, built into the rock below the castle." },
    ],
    doing: [
      { name: "Ye Olde Trip to Jerusalem", text: "One of the pubs that claims to be the oldest in England, built into the caves under the castle. A must for a pint." },
      { name: "Caves tour", text: "Nottingham has hundreds of man-made caves under the city. Tours run from the city centre." },
      { name: "Sport", text: "Nottingham Forest at the City Ground, Notts County at Meadow Lane, or cricket at Trent Bridge in summer." },
      { name: "Escape rooms, darts and crazy golf", text: "Plenty of social activity bars in the centre." },
      { name: "Paintball, karting and clay shooting", text: "All within easy reach outside the city." },
    ],
    plan: [
      { day: "Friday", text: "Arrive at Nottingham station, drop the bags, and head to Hockley for dinner and drinks." },
      { day: "Saturday", text: "A caves tour and a pint at Ye Olde Trip to Jerusalem, then the football or an afternoon activity. Dinner in the Lace Market, then a big night." },
      { day: "Sunday", text: "A long breakfast and the train home." },
    ],
    stay: [
      "Hotels and serviced apartments in the centre are good value compared with most UK cities.",
      "Big home matches and university events push prices up, so check the calendar.",
    ],
    costs: [
      { item: "Pint", amount: "Roughly £4.50–£6" },
      { item: "Train from London", amount: "Often £20–£50 each way if booked early. About an hour and a half." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Freshers' week in late September makes the city very busy and very young. Avoid it unless that's the point.",
      "Book Saturday dinner for the group in advance.",
      "Use licensed taxis or an app late at night.",
    ],
  },
};
