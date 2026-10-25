import type { StagGuide } from "./stag";

export const BATCH1: Record<string, StagGuide> = {
  newcastle: {
    checked: "October 2026",
    intro: [
      "Newcastle has a reputation as the best night out in England, and the city does its best to live up to it every weekend. Everything is close together, the drinks are cheaper than most of the south, and the people are about as friendly as you'll find anywhere in the country.",
      "It works for almost any group. The Bigg Market is cheap and loud, the Quayside is a bit smarter, and the Diamond Strip is where you go if the group owns proper shoes. Add a match at St James' Park, a walk along the Tyne and a long Sunday lunch, and it's a very easy weekend to plan.",
    ],
    locals: [
      "Geordies are famously welcoming, and stag groups are a normal part of a Newcastle weekend. You'll be talked to at the bar, asked where you're from and probably told where to go next. The city makes a lot of money from groups like yours and generally treats them well.",
      "The goodwill depends on you not being a nuisance. Locals go out in big numbers too, and a stag group that takes over a bar, shouts at the staff or starts on someone's mate will find the friendliness disappears fast. Respect the football as well. If Newcastle have lost, it's not the night for jokes about it.",
    ],
    gettingIn: [
      "Most bars in the Bigg Market and around The Gate are used to stag groups and will let you in, especially earlier in the evening. The smarter Diamond Strip on Collingwood Street is a different story. Expect a proper door, smart dress, and fewer chances for a big group of lads.",
      "As anywhere, size is the main issue. Split a group of twelve or more into smaller groups before you reach the door, and you'll get into far more places. Several local companies sell nightlife wristbands that cover entry to a run of bars on the Diamond Strip and in the Bigg Market, which takes a lot of the guesswork out for a big group.",
      "Fancy dress is fine in the Bigg Market, where some bars actively welcome it, and pretty much expected for at least one member of the group. It won't get you into the smarter Quayside and Diamond Strip bars, some of which have a no-fancy-dress rule. Dress smart if you want the full run of the city. Trainers and sportswear get turned away at the better places.",
      "You'll notice locals going out in very little, whatever the weather. Nobody will expect you to do the same.",
    ],
    areas: [
      { name: "Bigg Market", text: "The cheap, rowdy heart of a Newcastle night out. Plenty of stag-friendly bars, karaoke and fancy dress. A good place to start, and for some groups a good place to stay all night." },
      { name: "The Gate", text: "An indoor complex with bars, clubs, a cinema and a 24-hour casino. Popular with big groups because everything is under one roof, and useful when the weather turns." },
      { name: "Diamond Strip", text: "Collingwood Street and Mosley Street. Upmarket bars, an older crowd and stricter doors. Worth it for a smarter night, if the group is dressed for it." },
      { name: "Quayside", text: "Riverside bars under the Tyne bridges. Pricier, but the views are excellent, and it's busy and lively at weekends." },
      { name: "Grey Street and around", text: "Traditional pubs and craft ale bars with a more grown-up feel. The right place for a quieter pint before the evening gets going." },
      { name: "Jesmond", text: "Osborne Road, a short Metro ride from the centre. Lots of students, good drinks deals, and a smarter crowd than the Bigg Market." },
    ],
    doing: [
      { name: "A match at St James' Park", text: "The ground is right in the city centre, and a home game is an unforgettable afternoon. Tickets are hard to get for big games, so check the club's membership and ticketing rules well before you book the weekend." },
      { name: "Brewery and distillery tours", text: "Newcastle has a strong craft beer scene, and several local breweries run tours and tastings. It makes a good Saturday afternoon before the main night out." },
      { name: "Go-karting, paintball and clay shooting", text: "All available a short drive outside the city. Stag companies run packages that include transport, which is worth it with a big group." },
      { name: "Comedy", text: "The Stand has a Newcastle venue as well as Edinburgh. Check its booking policy for stag groups before you plan around it." },
      { name: "The Tyne bridges walk", text: "A walk along the Quayside and across the Millennium Bridge to Gateshead is the best hangover cure in the city, and you'll see why Newcastle is so photographed." },
    ],
    plan: [
      { day: "Friday", text: "Arrive at Central Station, drop the bags and start in the Bigg Market. Dinner somewhere central, then into The Gate or back out around the Bigg Market for the rest of the night." },
      { day: "Saturday", text: "A slow breakfast, then a walk along the Quayside. A brewery tour or the match in the afternoon. Dinner booked for the whole group, then a smarter night on the Diamond Strip or the Quayside." },
      { day: "Sunday", text: "A big Sunday roast, a last pint on Grey Street, and the train home." },
    ],
    stay: [
      "There are plenty of hotels within walking distance of everything, and big serviced apartments are common, which suits a large group. Staying near Central Station makes Friday arrivals and Sunday departures much easier.",
      "Prices jump when Newcastle are at home to a big club and on major event weekends, so check the fixture list before you pick a date.",
    ],
    costs: [
      { item: "Pint", amount: "Usually £4–£6. Bigg Market bars are the cheapest, Quayside and Diamond Strip bars the most expensive." },
      { item: "Advance train from London", amount: "Often £40–£80 each way if booked early. Around three hours." },
      { item: "Nightlife wristband", amount: "Varies by company and package. Check what's included before you buy." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "The smarter bars will turn away trainers, sportswear and football shirts. Pack a shirt and proper shoes even if most of the weekend is casual.",
      "On match days the city centre is packed before and after the game, and some pubs near the ground are home fans only.",
      "Book Saturday dinner for the whole group in advance. Walk-in tables for fifteen don't exist at 8pm on a Saturday.",
    ],
  },

  liverpool: {
    checked: "October 2026",
    intro: [
      "Liverpool has become one of the most popular stag cities in the country, and it's easy to see why. The nightlife is huge, the music is everywhere, the food has got very good, and the city has a sense of humour that suits a group of lads on a weekend away.",
      "It's also a city with enough going on in the daytime to keep everyone happy. There's the waterfront, the football, the Beatles if anyone in the group cares, and the Grand National if your timing is right.",
    ],
    locals: [
      "Scousers are generally warm, chatty and quick with a joke, and stag groups are a big part of the weekend economy. You'll be made to feel welcome in most pubs, especially if you show some interest in the city.",
      "The things that wind locals up are predictable. Turning up in a rival team's shirt on a match day, getting loud and aggressive in the city centre, or treating the place as a cheap night out rather than somewhere people live. Behave reasonably and you'll have a brilliant time.",
    ],
    gettingIn: [
      "Door staff in the main nightlife areas are wary of big groups of men, especially in matching branded T-shirts. Local guidance says groups of more than six men should expect to be split across more than one venue. Mixed groups get in much more easily.",
      "The practical answer is to split into groups of four to six, go in separately, and meet up inside or at the next stop. It feels like a faff, but it's the difference between a good night and an hour on the pavement.",
      "Dress codes are the other main reason people get turned away. Most bars around Concert Square expect smart-casual dress at weekends. Sportswear, tracksuits, football shirts, caps and work boots are all likely to get a no. Clean trainers and jeans are usually fine. The bars on the square itself are stricter than the venues in the surrounding Ropewalks streets.",
      "Fancy dress won't help you here. Plenty of venues turn it away along with football tops. If the groom has to wear something, keep it to him, and accept you'll have fewer bars to choose from.",
    ],
    areas: [
      { name: "Concert Square and the Ropewalks", text: "The centre of the weekend nightlife. Bars and clubs packed around one square and the streets nearby, with the big venues open until 3am or later at weekends." },
      { name: "Mathew Street", text: "Home of the Cavern Club and the Beatles bars. Live music most nights, very touristy, and good fun for a few hours." },
      { name: "Baltic Triangle", text: "Old warehouses south of the centre, now full of bars, street food and late-night dancing. A younger, more local crowd than Concert Square." },
      { name: "Bold Street", text: "The best street for food in the city. Book dinner here before heading to Concert Square, a few minutes' walk away." },
      { name: "Albert Dock and the waterfront", text: "Bars and restaurants by the river. Better in the daytime and early evening than late at night." },
    ],
    doing: [
      { name: "Football", text: "A Liverpool game at Anfield, or Everton at their new waterfront stadium at Bramley-Moore Dock, which opened in 2025. Tickets for both are hard to get, so look into it before you fix the date." },
      { name: "The Bierkeller", text: "A Bavarian-style beer hall with long tables, steins and an oompah band. It's a stag staple for a reason, and a good way to get a big group drinking together early." },
      { name: "The Cavern Club", text: "Packed, sweaty and touristy, but there's live music all day, and most groups end up there at some point." },
      { name: "Aintree", text: "If you can make the Grand National in April, it's one of the best days out in British sport. Book well ahead, as accommodation sells out." },
      { name: "Escape rooms, axe throwing and karaoke", text: "All easy to find in the city centre and good for filling a Saturday afternoon without travelling." },
    ],
    plan: [
      { day: "Friday", text: "Arrive at Lime Street, drop the bags and head to the Bierkeller or the Ropewalks bars to get everyone going. Split up for the door, then regroup in Concert Square." },
      { day: "Saturday", text: "A big breakfast, then the match or an afternoon activity. Dinner on Bold Street, then the Baltic Triangle or Concert Square, depending on the group." },
      { day: "Sunday", text: "A walk along the waterfront and a long lunch at the Albert Dock before the train home." },
    ],
    stay: [
      "The city centre is compact, and there are plenty of hotels and serviced apartments within walking distance of Concert Square. Big apartments are common and work well for a group, but read the house rules carefully, as many ban parties outright.",
      "Prices rise sharply on home match weekends, around the Grand National and during big concerts, so check the calendar before you commit.",
    ],
    costs: [
      { item: "Pint", amount: "Roughly £5–£6 in the main nightlife areas" },
      { item: "Stein at a beer hall", amount: "From around £8" },
      { item: "Club entry", amount: "Often free early, around £5–£10 later on" },
      { item: "Advance train from London", amount: "Often £35–£70 each way if booked early. Just over two hours." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Use licensed taxis, such as Delta, or the official rank at Lime Street. Don't get into unlicensed cars late at night.",
      "Leave the football shirts at home unless you're going to the game. They'll get you turned away from most bars.",
      "Keep phones in a zipped pocket around Concert Square on a busy night.",
    ],
  },

  manchester: {
    checked: "October 2026",
    intro: [
      "Manchester has everything a big city stag needs. The nightlife is enormous, the food is excellent, there's football at two of the most famous clubs in the world, and the city is easy to get to from almost anywhere in the country.",
      "It suits groups who want variety. You can spend Friday in the Northern Quarter's small bars, Saturday at a match or an activity, and Saturday night in the bigger clubs around Deansgate, all within walking distance of each other.",
    ],
    locals: [
      "Mancunians are proud of their city and generally happy to see visitors enjoying it. Stag and hen groups are everywhere on a weekend, so you won't stand out, and most bars and pubs are used to them.",
      "There's one area where you should think before you go. Canal Street is the heart of Manchester's Gay Village, one of the best-known LGBT nightlife areas in Europe. For years the community has complained about straight hen and stag groups treating it as a novelty night out, and some bars run door checks as a result. If someone in your group genuinely wants to go, go and enjoy it respectfully. Don't take a stag there as a joke.",
    ],
    gettingIn: [
      "Big groups of men struggle to get into the better bars and clubs on a Friday or Saturday night, as in any big city. Split into groups of four to six before you reach the door, and you'll find it much easier.",
      "Dress codes vary a lot by area. Northern Quarter bars are relaxed. Spinningfields and the smarter Deansgate venues expect you to make an effort, and sportswear and football shirts will get you turned away almost everywhere on a weekend night.",
      "Fancy dress is fine in the more stag-friendly bars and at activities, but it'll close a lot of doors in the evening. A matching T-shirt or one outfit for the groom keeps your options open.",
    ],
    areas: [
      { name: "Northern Quarter", text: "Small independent bars, craft beer, cocktails and great food. Relaxed doors and a mixed crowd. The best area for a first night." },
      { name: "Deansgate and Deansgate Locks", text: "Bigger bars and clubs under railway arches, busy and loud at weekends. Where a lot of big nights end up." },
      { name: "Spinningfields", text: "Smart bars and restaurants with a dressier crowd. Good for a nicer dinner or pre-drinks." },
      { name: "Ancoats", text: "A short walk from the Northern Quarter. Some of the best restaurants and bars in the city, in old mill buildings." },
      { name: "Printworks", text: "An entertainment complex with bars, restaurants and a cinema under one roof. Easy for a big group, if not very characterful." },
    ],
    doing: [
      { name: "Football", text: "Manchester United at Old Trafford or Manchester City at the Etihad. Tickets for both are very hard to get for most games. Stadium tours run on non-match days and are a good fallback." },
      { name: "Darts, crazy golf and shuffleboard", text: "Manchester has plenty of social gaming bars, which work well for a big group on Saturday afternoon and get competitive quickly." },
      { name: "Brewery tours and taprooms", text: "The city has a big craft beer scene, with several breweries opening their taprooms at weekends." },
      { name: "Comedy", text: "Manchester has a strong comedy circuit. Check each club's policy on stag groups before you book, as some won't take them." },
      { name: "Outdoor activities", text: "The Peak District is under an hour away for clay shooting, quad bikes, paintball or a proper walk to clear heads." },
    ],
    plan: [
      { day: "Friday", text: "Arrive at Piccadilly and start in the Northern Quarter. Dinner in Ancoats or the Northern Quarter, then stay local or head to Deansgate if the group wants a bigger night." },
      { day: "Saturday", text: "Brunch, then the match, a stadium tour or an afternoon of darts and shuffleboard. Dinner in Spinningfields, then a big night around Deansgate." },
      { day: "Sunday", text: "A long breakfast, a final pint in the Northern Quarter and the train home." },
    ],
    stay: [
      "There are hundreds of hotels and serviced apartments in the city centre, and big apartments sleeping ten or more are easy to find. Stay near Piccadilly or Deansgate, so everything is in walking distance.",
      "Check the football fixtures and the concert calendar before booking. Big home games and stadium gigs push hotel prices up across the whole city.",
    ],
    costs: [
      { item: "Pint", amount: "Roughly £5–£6.50 in the city centre" },
      { item: "Cocktail", amount: "Roughly £10–£14" },
      { item: "Advance train from London", amount: "Often £30–£70 each way if booked early. About two hours." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Keep an eye on drinks and phones in the busiest clubs. Manchester is no worse than other big cities, but busy weekend nights attract pickpockets.",
      "On derby days the city is tense and heavily policed. Unless you're going to the game, it's not the best weekend for a stag.",
      "Use licensed black cabs or an app. Don't take unmarked cars from outside clubs.",
    ],
  },

  prague: {
    checked: "October 2026",
    intro: [
      "Prague was the original European stag destination, and for many groups it still is. The beer is some of the best in the world, the city is beautiful, and it's a short, cheap flight from most UK airports.",
      "It has changed, though. The city has spent the last few years trying to move away from its reputation as a cheap party town, and there are rules and attitudes you need to know about before you go. Plan around them and Prague is still a brilliant weekend.",
    ],
    locals: [
      "Many Praguers are tired of stag groups, and British ones in particular. Years of noisy groups in the Old Town have left a mark, and the British Embassy has in the past warned that some city-centre bars and restaurants no longer accept groups of British visitors.",
      "The city council has acted on this. In late 2024 it banned organised pub crawls in the centre between 10pm and 6am, saying it wanted to attract more cultured tourists. A district council has also floated banning the silly costumes that stag and hen groups wear, although that hadn't become law at the time of writing. Drinking in the street is banned across most of the centre, with on-the-spot fines.",
      "The flip side is that ordinary pubs are as welcoming as ever to a polite group. Order in Czech if you can manage it, don't shout across the bar, and you'll find most locals friendly. The groups that get a frosty reception are the ones who behave like they own the place.",
    ],
    gettingIn: [
      "Some Old Town bars and restaurants turn away large groups of British men on sight. Others have \"no stag\" policies. The answer, as everywhere, is to split into smaller groups and to spend more time outside the tourist core.",
      "You can still go from pub to pub as a group. The pub crawl ban covers organised, guided tours run by companies after 10pm, not friends going for a drink. Bars will still serve you. But don't expect to join a guided crawl after dark in the centre.",
      "Leave the fancy dress for the groom, if you bring it at all. Costumes are exactly what the city has been complaining about, and they make you a target for doormen and police.",
      "Carry your passport, or at least know where it is. Police can ask for ID.",
    ],
    areas: [
      { name: "Old Town and Wenceslas Square", text: "The tourist centre, beautiful in the daytime and full of stag groups and touts at night. Fine for a look around and a meal, but not where the best bars are." },
      { name: "Žižkov", text: "Said to have more pubs per head than anywhere in the world. Cheap, local and a short tram ride from the centre. The best area for a proper Czech pub night." },
      { name: "Vinohrady", text: "Leafy, residential and full of good bars, wine bars and restaurants. A more grown-up evening." },
      { name: "Malá Strana", text: "Below the castle on the other side of the river. Historic pubs and a quieter feel." },
      { name: "Holešovice", text: "An up-and-coming area with bars and clubs in old industrial buildings, and fewer tourists." },
    ],
    doing: [
      { name: "Beer spa", text: "You sit in a hot tub of beer ingredients with unlimited lager on tap. It's a bit ridiculous and a lot of fun." },
      { name: "Shooting ranges", text: "Prague has several ranges that let tourists shoot under supervision. Book through a reputable company, and never go after drinking." },
      { name: "Brewery visits", text: "Strahov Monastery brewery, near the castle, and the old brewpubs in the centre are worth a visit. A day trip to the Pilsner Urquell brewery in Plzeň is about ninety minutes by train." },
      { name: "Football or ice hockey", text: "Sparta and Slavia Prague are the big football clubs, and ice hockey is hugely popular in the winter. Tickets are cheap and easy to get." },
      { name: "A river cruise", text: "A beer or dinner cruise on the Vltava is a good way to see the city without walking it." },
    ],
    plan: [
      { day: "Friday", text: "Fly in, drop the bags and head to Žižkov for a proper Czech pub night with cheap beer and big plates of food." },
      { day: "Saturday", text: "Walk up to the castle and the Strahov brewery, then the beer spa or a shooting range in the afternoon. Dinner in Vinohrady, then bars in Vinohrady or Holešovice." },
      { day: "Sunday", text: "A slow breakfast, a walk across Charles Bridge before the crowds, and the flight home." },
    ],
    stay: [
      "Stay outside the Old Town, in Vinohrady, Žižkov or Karlín. You'll get better value and quieter streets, and the trams make everything easy to reach.",
      "The Czech government has moved to give cities more control over short-term lets, and the rules are tightening. Book apartments through properly registered hosts, and read the house rules. Many ban parties and have noise curfews.",
      "A local accommodation fee is added per person per night, so check whether it's included in the price you're quoted.",
    ],
    costs: [
      { item: "Half-litre of lager", amount: "Much cheaper than the UK in ordinary pubs. Tourist bars in the Old Town charge far more." },
      { item: "Flights", amount: "Often under £100 return from UK airports if booked early" },
      { item: "Currency", amount: "Czech koruna, not euros. Pay by card or in koruna." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Avoid the bright yellow and blue currency exchange booths and standalone cash machines in the tourist centre, which often charge terrible rates. Use a bank's own ATM, and always choose to be charged in koruna.",
      "Use Uber or Bolt rather than hailing taxis in the Old Town, where overcharging has long been a problem.",
      "Drinking in the street is banned across most of the centre. Finish your drink before you leave the bar.",
      "Ignore anyone in the street offering you clubs, strip bars or anything else. It rarely ends well.",
    ],
  },

  budapest: {
    checked: "October 2026",
    intro: [
      "Budapest is one of the best stag cities in Europe. It has the ruin bars, the thermal baths, the river, cheap drinks and food, and nights that genuinely don't end until the sun comes up. It's also stunning, which helps when the group needs a reason to leave the bar.",
      "Like Prague, it's become more careful about stag tourism. Most of the rules are easy to live with, but a few can cost you money or a night with the police, so it's worth knowing them before you land.",
    ],
    locals: [
      "Locals in the party district have had enough of the noise at times. District VII, where most of the ruin bars are, has seen protests and a referendum on closing times over the years. The referendum in 2018 wasn't valid, but the district no longer issues permits for organised pub crawls.",
      "In practice the bars are still welcoming, and ordinary Hungarians are friendly to visitors who behave. People live above and around the ruin bars, so keep the volume down in the street, especially after 10pm.",
    ],
    gettingIn: [
      "The famous ruin bars like Szimpla Kert and Instant-Fogas are walk-in and big enough for a large group to spread out. Some, like Doboz, have private areas you can book for a big party. Getting in isn't usually the problem in Budapest.",
      "The smarter clubs are different. Some have published dress codes and selective doors, and some turn away caps, sportswear and torn clothes. Neat clothes and closed shoes get you in almost everywhere.",
      "Fancy dress is tolerated in the ruin bars, but it marks you out to touts and scammers. Keep it to the groom.",
      "Carry your passport. Hungarian police can ask for ID, and a photocopy or a photo on your phone isn't accepted. Some clubs also want to see physical ID at the door.",
    ],
    areas: [
      { name: "District VII (the Jewish Quarter)", text: "The party district. Most of the ruin bars, late clubs and street food are here, within a few streets of each other." },
      { name: "Gozsdu Courtyard", text: "A passage of bars and restaurants that gets very busy on weekend nights. Good for a first drink, but touristy." },
      { name: "District V", text: "The centre around the Parliament and the river. Smarter bars and better restaurants, and more expensive." },
      { name: "The river", text: "Boat parties and dinner cruises on the Danube are a stag favourite, and the views of the Parliament at night are worth it." },
    ],
    doing: [
      { name: "The thermal baths", text: "Széchenyi is the big one, a huge outdoor pool complex in the park. Some nights it hosts bath parties with DJs and lights. Shower before you get in, wear proper swimwear, and don't turn up drunk, as staff will throw you out." },
      { name: "Ruin bar crawl", text: "Do it yourselves rather than with an organised crawl. Start at Szimpla Kert early in the evening before it gets packed, then work through the district." },
      { name: "Shooting ranges", text: "Budapest has several ranges for tourists. Go in the daytime, sober, with a reputable operator." },
      { name: "Escape rooms", text: "Budapest is one of the places escape rooms took off, and there are dozens to choose from." },
      { name: "A Danube boat party", text: "Booked in advance through a reputable company, it's one of the best nights of the weekend." },
    ],
    plan: [
      { day: "Friday", text: "Fly in, drop the bags and head into District VII for dinner, then the ruin bars until late." },
      { day: "Saturday", text: "A late breakfast, then the thermal baths to recover. An afternoon shooting range or escape room, dinner in District V, then a boat party or back to the ruin bars." },
      { day: "Sunday", text: "A walk up to Castle Hill or Gellért Hill for the view, a big lunch, and the flight home." },
    ],
    stay: [
      "Staying in or near District VII puts you in walking distance of the nightlife, but it's noisy. District V and District VI are calmer and still close.",
      "Big apartments are common and good value. Keep noise down at the flat after 10pm. Neighbours do complain, and fines for noise are a real risk.",
      "Budapest adds a tourist tax of around 4% on accommodation. Check whether it's included in your booking.",
    ],
    costs: [
      { item: "Beer", amount: "Much cheaper than the UK in ordinary bars. Clubs and tourist spots charge more." },
      { item: "Cocktail", amount: "Roughly 3,800–4,600 forints in a good bar" },
      { item: "Flights", amount: "Often under £120 return from UK airports if booked early" },
      { item: "Currency", amount: "Hungarian forint. Cards are widely accepted." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Overcharging scams are a known problem. Some bars charge huge amounts and walk tourists to a cash machine to pay. The UK government advises asking for a menu with prices before ordering and checking your bill. Never follow a friendly stranger, or a taxi driver's recommendation, to a bar.",
      "Drinking in the street can get you fined. Finish your drink inside.",
      "Hungary has zero tolerance for drink-driving, and that includes e-scooters and bikes.",
      "Validate your public transport ticket before you board. Inspectors fine people who haven't, and they don't accept excuses.",
      "Watch your drink in busy bars, as drink spiking has been reported.",
    ],
  },
};
