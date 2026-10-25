import type { StagGuide } from "./stag";

export const BATCH2: Record<string, StagGuide> = {
  bristol: {
    checked: "October 2026",
    intro: [
      "Bristol has become one of the most booked stag cities in the UK. It's two hours from London, the harbour is a lovely place to drink on a sunny afternoon, and the food and music scenes punch well above the city's size.",
      "It suits a group that wants more than a club crawl. There's cider, street art, a harbour full of boats and bars, and some excellent pubs, with big nights available on Park Street and around the Harbourside if you want them.",
    ],
    locals: [
      "Bristolians are relaxed and friendly, and the city is used to stag and hen groups, especially around the Harbourside and the Old City. Most people won't give you a second look.",
      "The city has a strong independent streak, and some areas, like Stokes Croft and Gloucester Road, are much more local. Groups who barge into small neighbourhood pubs there and take over can get a cooler reception than they would in the centre. Pick your pubs to suit the mood.",
    ],
    gettingIn: [
      "The big bars and clubs on Park Street and the Harbourside take stag groups regularly, but the usual rules apply. Large groups of men get turned away more than small ones, so split into groups of four to six before you reach the door.",
      "Dress codes are fairly relaxed compared with London or Manchester, though sportswear and football shirts will still get you refused at the busier clubs on a Saturday.",
      "Fancy dress is common on stag weekends here and accepted at the more party-focused bars. Smaller independent pubs and cocktail bars are less keen. One costume for the groom keeps the rest of the group flexible.",
    ],
    areas: [
      { name: "Harbourside", text: "Bars and restaurants along the water, including some on boats. Brilliant on a sunny afternoon and lively at night." },
      { name: "Park Street and the Triangle", text: "The student-heavy strip of bars and clubs running up from College Green. Where a lot of big nights end." },
      { name: "The Old City and Corn Street", text: "Historic streets with bars, cocktail places and the covered St Nicholas Market for street food." },
      { name: "Clifton", text: "Smart, leafy and full of good pubs and restaurants, with the suspension bridge at the top. A calmer evening." },
      { name: "Stokes Croft and Gloucester Road", text: "Bristol's alternative side. Independent bars, street art and a mostly local crowd. Keep it low-key." },
    ],
    doing: [
      { name: "Cider", text: "Bristol takes cider seriously. A cider boat pub or a tasting is a very Bristol way to start a Saturday." },
      { name: "Street art tour", text: "Guided walks around the city's street art, including Banksy's early work, are cheap and genuinely interesting." },
      { name: "Boats on the harbour", text: "Kayaks, paddleboards and group boat hire are all available, and a boat trip around the harbour is a good hangover cure." },
      { name: "Rugby or football at Ashton Gate", text: "Bristol Bears rugby and Bristol City football both play here, and tickets are usually easy to get." },
      { name: "Clifton Suspension Bridge", text: "A walk up to the bridge and over the gorge gives you the best views of the city." },
    ],
    plan: [
      { day: "Friday", text: "Arrive at Temple Meads, drop the bags, and start on the Harbourside. Dinner in the Old City, then Park Street for a big night." },
      { day: "Saturday", text: "A slow breakfast, a street art tour or time on the water, then cider in the afternoon. Dinner in Clifton, then back down to the Harbourside or Park Street." },
      { day: "Sunday", text: "A walk up to the suspension bridge, a long lunch and the train home." },
    ],
    stay: [
      "Hotels around the Harbourside and Temple Meads keep everything walkable. Big self-catering houses are available in Clifton and Redland, but read the house rules, as many ban parties.",
      "Big events like the Balloon Fiesta in August and home rugby weekends push prices up, so check the calendar first.",
    ],
    costs: [
      { item: "Pint", amount: "Roughly £5–£6.50 in the centre" },
      { item: "Advance train from London", amount: "Often £25–£60 each way if booked early. Under two hours." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Bristol is hilly. Factor in the climb up Park Street and to Clifton if your plan involves walking between areas.",
      "Taxis can be hard to find at closing time on a Saturday. Book ahead or use an app.",
      "Keep away from the harbour edge late at night. It's easy to misjudge after a few drinks.",
    ],
  },

  cardiff: {
    checked: "October 2026",
    intro: [
      "Cardiff is a brilliant stag city with a reputation that's grown fast. It's compact, good value, very welcoming and about two hours from London by train. On a rugby weekend it's one of the best atmospheres in British sport.",
      "Everything is close together. The main nightlife sits a few minutes' walk from the stadium and the station, and Cardiff Bay is a short bus or boat ride away for a calmer afternoon.",
    ],
    locals: [
      "Cardiff loves a party and is genuinely welcoming to stag groups. The city centre is set up for big groups on a weekend, and you'll be one of many.",
      "Rugby is close to a religion here. On match days, especially Wales at home, the city fills with fans, and the mood is great. If you're English and Wales are playing England, enjoy the banter and don't push it.",
    ],
    gettingIn: [
      "Most bars on St Mary Street take stag groups, and some actively encourage fancy dress. Popworld is one of the best-known examples. Many bars and clubs have their own dress codes and entry rules for large groups, though, so check before the night if you've got a big group.",
      "As everywhere, splitting a large group into smaller ones before the door makes life easier, especially at the bigger clubs on Greyfriars Road.",
      "Fancy dress is fine in a lot of the party bars, so you have more leeway here than in most cities. The smarter places and some clubs will still say no.",
    ],
    areas: [
      { name: "St Mary Street", text: "The main bar and club strip, full of stag and hen groups at weekends. Party bars, cheap drinks and plenty of fancy dress." },
      { name: "Westgate Street", text: "Right opposite the stadium. Packed and loud on rugby days." },
      { name: "Greyfriars Road", text: "The big clubs. Where the late nights end." },
      { name: "Cardiff Bay", text: "Waterfront bars and restaurants. Better for an afternoon or a calmer evening than a big night." },
      { name: "Pontcanna", text: "A quieter area with craft beer and good restaurants, about twenty minutes' walk from the centre." },
    ],
    doing: [
      { name: "Rugby at the Principality Stadium", text: "The stadium is in the city centre, and a Six Nations or autumn international weekend is unforgettable. Tickets and hotels go very quickly." },
      { name: "White water rafting", text: "The Cardiff International White Water centre is ten minutes from the centre and very popular with stag groups." },
      { name: "The Welsh Games", text: "A stag staple. Group games with a Welsh theme, usually packaged by local companies." },
      { name: "Karting, paintball and footgolf", text: "All within easy reach of the city, and good for burning off a hangover." },
      { name: "Cardiff Castle", text: "Right in the middle of the city, and worth an hour if anyone wants a bit of history." },
    ],
    plan: [
      { day: "Friday", text: "Arrive at Cardiff Central, drop the bags, and head straight to St Mary Street. Dinner nearby, then the bars and on to Greyfriars Road." },
      { day: "Saturday", text: "White water rafting or the rugby. Dinner in the centre, then back out on St Mary Street." },
      { day: "Sunday", text: "A walk around Cardiff Bay, lunch by the water, and the train home." },
    ],
    stay: [
      "Hotels near Cardiff Central and St Mary Street keep everything walkable. Big serviced apartments are easy to find.",
      "On international rugby weekends prices go through the roof and hotels sell out months ahead. Avoid those dates unless the rugby is the reason you're going.",
      "Late July and August are busier and more expensive. May to early July is a good balance of weather and price.",
    ],
    costs: [
      { item: "Pint", amount: "Roughly £4–£6" },
      { item: "Cocktail", amount: "Roughly £7–£10" },
      { item: "Club entry", amount: "Roughly £5–£15" },
      { item: "Advance train from London", amount: "Often £30–£60 each way if booked early. About two hours." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Stay away from the water at Cardiff Bay if you've been drinking.",
      "Avoid cutting through parks late at night.",
      "On match days, the area around the stadium is closed to traffic, and getting a taxi is very hard. Walk.",
    ],
  },

  glasgow: {
    checked: "October 2026",
    intro: [
      "Glasgow is a better night out than Edinburgh, and most people who've done both will tell you so. It's bigger, cheaper and louder, the people are some of the friendliest in Britain, and the music scene is one of the best in Europe.",
      "It's less obviously beautiful than Edinburgh, but the West End, the Merchant City and the river all have plenty going on, and Loch Lomond is under an hour away if the group wants to see some scenery.",
    ],
    locals: [
      "Glaswegians are famously chatty and welcoming, and you'll find yourself in conversation at the bar within minutes. Stag groups are common and generally well received.",
      "The one thing you must get right is football. The Celtic and Rangers rivalry carries religious and political history that goes back more than a century. Don't wear either club's colours, don't sing football songs, and don't ask strangers which side they support. It's the fastest way to turn a friendly pub hostile.",
    ],
    gettingIn: [
      "City centre bars and clubs are used to stag groups, and getting in is usually easier than in Edinburgh. Big groups of men still get turned away at busier clubs, so split into smaller groups before you reach the door.",
      "Most clubs have dress codes on weekend nights. Football shirts are a definite no almost everywhere, for the reason above. Sportswear and caps will get you turned away from the better places.",
      "Fancy dress is fine in the more party-focused bars and won't get you far in the West End or the Merchant City's smarter venues. Keep it to the groom if you want options.",
      "Carry photo ID. Challenge 25 applies, and some clubs won't accept a photo on your phone.",
    ],
    areas: [
      { name: "Merchant City", text: "Cocktail bars, restaurants and a mixed crowd. A good place for dinner and the first few drinks." },
      { name: "The West End", text: "Ashton Lane, Byres Road and Finnieston. Lively, studenty and full of good bars and restaurants." },
      { name: "Sauchiehall Street and the city centre", text: "The big clubs and late bars. Where the long nights end." },
      { name: "Finnieston", text: "Some of the best food in Glasgow, plus good bars. A great Saturday evening." },
    ],
    doing: [
      { name: "Whisky", text: "The Clydeside Distillery is on the river near the Riverside Museum and runs tours and tastings. There are also excellent whisky bars in the West End." },
      { name: "A gig", text: "Glasgow's live music is outstanding. The Barrowland Ballroom, King Tut's and the many smaller venues are worth checking for the weekend you're there." },
      { name: "Loch Lomond", text: "Under an hour away. Boat trips, walks, or just a pub by the water." },
      { name: "Stadium tours", text: "Hampden, Celtic Park and Ibrox all offer tours. Do the tour, not the arguments." },
      { name: "Karting, paintball and axe throwing", text: "All available around the city, and easy to book as a package." },
    ],
    plan: [
      { day: "Friday", text: "Arrive at Glasgow Central or Queen Street, drop the bags, dinner in the Merchant City, then a big night in the city centre." },
      { day: "Saturday", text: "Brunch in the West End, an afternoon at the Clydeside Distillery or out at Loch Lomond. Dinner in Finnieston, then a gig or Ashton Lane." },
      { day: "Sunday", text: "A long breakfast, a walk along the Clyde, and home." },
    ],
    stay: [
      "Hotels in the city centre and the Merchant City keep everything within walking distance. Big apartments are available, but short-term let licensing in Scotland has reduced the supply, so book early.",
      "Old Firm weekends, when Celtic play Rangers, are tense across the city. Avoid them.",
    ],
    costs: [
      { item: "Pint", amount: "Usually cheaper than Edinburgh, roughly £4.50–£6" },
      { item: "Advance train from London", amount: "Often £40–£80 each way if booked early. About four and a half hours." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Shops in Scotland can only sell alcohol between 10am and 10pm. Buy anything for the flat or the train during those hours.",
      "Never wear football colours on a night out.",
      "Watch your belongings on Sauchiehall Street late at night.",
    ],
  },

  leeds: {
    checked: "October 2026",
    intro: [
      "Leeds is one of the best-value stag cities in the north. It's two hours from London, the city centre is compact, and there's a huge student population, which keeps the nightlife busy every night of the week.",
      "It also has the Otley Run, the famous fancy-dress pub crawl through Headingley, which is a stag weekend in itself.",
    ],
    locals: [
      "Leeds is friendly and used to visitors, and stag groups are part of the weekend crowd in the city centre. You won't stand out.",
      "Headingley is different. People live along the Otley Run route, and some residents have long complained about noise, litter and drunken behaviour on busy weekends. Behave well on the route, use the toilets in the pubs, and keep the noise down between stops.",
    ],
    gettingIn: [
      "The bars on Call Lane and around Briggate take stag groups, especially early in the evening. As the night goes on, bigger groups of men find it harder to get into the busier venues, so split into smaller groups before the door.",
      "Dress codes are relaxed in most of the city's bars, but the bigger clubs often turn away sportswear and football shirts.",
      "Fancy dress is expected on the Otley Run and normal on Call Lane. It's not welcome everywhere, though, and some pubs keep away from the Otley Run crowd on purpose so that locals have somewhere to drink. Respect that.",
    ],
    areas: [
      { name: "Call Lane", text: "The main strip of bars in the city centre, with cocktails, music and a lively weekend crowd." },
      { name: "Briggate and the arcades", text: "Shopping streets by day, with bars and restaurants tucked into the Victorian arcades." },
      { name: "Headingley", text: "Students, the cricket ground and the Otley Run. A great afternoon and a long evening." },
      { name: "The Calls and the river", text: "Converted warehouses with bars and restaurants along the water." },
    ],
    doing: [
      { name: "The Otley Run", text: "Around 17 pubs and bars over roughly two and a half miles, from Far Headingley into the city centre. Fancy dress is a big part of it but not compulsory. Start around midday, pace yourselves with halves, wear comfortable shoes, and think about toilet access before choosing a costume." },
      { name: "Cricket or rugby at Headingley", text: "Yorkshire cricket in the summer and Leeds Rhinos rugby league both play here, and match days are a great atmosphere." },
      { name: "Football at Elland Road", text: "Leeds United have a famously loud home crowd. Tickets can be hard to get, so check early." },
      { name: "Brewery taprooms", text: "Leeds has a big craft beer scene, and several breweries open their taprooms at weekends." },
      { name: "Escape rooms, golf and darts bars", text: "Plenty of social activity bars in the city centre for a Saturday afternoon." },
    ],
    plan: [
      { day: "Friday", text: "Arrive at Leeds station, drop the bags and head to Call Lane for dinner and the first night out." },
      { day: "Saturday", text: "Breakfast, then the Otley Run from midday, finishing in the city centre in the evening. Food along the way is a must." },
      { day: "Sunday", text: "A big brunch in the arcades and the train home." },
    ],
    stay: [
      "Stay in the city centre, close to the station, so the Otley Run finishes on your doorstep. Serviced apartments sleeping big groups are easy to find.",
      "Big home matches and university events push prices up, so check the calendar.",
    ],
    costs: [
      { item: "Pint", amount: "Roughly £4.50–£6" },
      { item: "Advance train from London", amount: "Often £30–£60 each way if booked early. Just over two hours." },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "On the Otley Run, stick to the route and pay your own way rather than buying big rounds. It keeps people from falling behind.",
      "Use the toilets in the pubs. Residents along the route are understandably fed up with people who don't.",
      "Check the forecast. Costumes and Yorkshire rain don't mix well.",
    ],
  },

  dublin: {
    checked: "October 2026",
    intro: [
      "Dublin is one of the classic stag weekends for a reason. It's an hour's flight from most of the UK, the pubs are some of the best in the world, and the Guinness tastes like it should.",
      "It's expensive, though, and Temple Bar in particular will empty your wallet. Plan to spend most of your time where locals drink, and you'll get a much better weekend for less money.",
    ],
    locals: [
      "Dubliners are welcoming and quick to chat, and stag groups are a normal part of the weekend. Most people will happily point you to a good pub.",
      "What wears thin is a big group taking over a small traditional pub, especially in the quieter areas. Locals use these pubs every day. Be loud in Temple Bar, but polite in Stoneybatter.",
    ],
    gettingIn: [
      "Temple Bar is set up for stag groups and tourists, and you'll get in almost anywhere. The better traditional pubs elsewhere are usually fine with small groups, but a big group of lads will get a cooler reception, so split up.",
      "Clubs have dress codes, and some are selective at the door with large groups of men. Smart casual is the safe choice.",
      "Fancy dress is common in Temple Bar and around the busier tourist pubs. It won't go down well in the traditional pubs, and it'll stop you getting into some clubs.",
    ],
    areas: [
      { name: "Temple Bar", text: "Lively, touristy and expensive. A good first evening, but it's not where most Dubliners drink, and two nights there is too many." },
      { name: "Stoneybatter", text: "A short walk north-west of the centre. Traditional pubs, live music and a mostly local crowd, with cheaper pints." },
      { name: "The Liberties", text: "One of the oldest parts of the city, close to the Guinness Storehouse. Good food and old pubs." },
      { name: "Around Grafton Street", text: "Classic Victorian pubs on and around South Anne Street and South William Street, plus good cocktail bars." },
      { name: "Camden Street and Portobello", text: "A younger, livelier strip of bars, restaurants and late venues south of the centre." },
    ],
    doing: [
      { name: "The Guinness Storehouse", text: "Touristy but fun, and the view from the top bar is excellent. Book online, as weekend queues can be long." },
      { name: "Jameson Bow Street", text: "The whiskey distillery tour in Smithfield, with tastings. Good for a Saturday afternoon." },
      { name: "Hurling or Gaelic football", text: "Watching a match at Croke Park is a great experience, and some companies run taster sessions for groups." },
      { name: "A trad music pub night", text: "Find a pub with live traditional music. The Cobblestone in Smithfield is one of the best." },
      { name: "Clay shooting in the countryside", text: "Available in Wicklow and Meath, usually packaged with transport." },
    ],
    plan: [
      { day: "Friday", text: "Fly in, drop the bags, and do Temple Bar for one evening. Get it out of your system early." },
      { day: "Saturday", text: "The Guinness Storehouse or Jameson in the morning, then lunch in the Liberties. Dinner around Grafton Street, then trad music in Stoneybatter or a late night on Camden Street." },
      { day: "Sunday", text: "A full Irish breakfast, a final pint somewhere traditional and the flight home." },
    ],
    stay: [
      "Dublin hotels are expensive. Stay within about twenty minutes' walk of the centre, because taxis are hard to find late at night. Apartments in the Docklands or the north inner city are often better value for a group.",
      "Big rugby and GAA weekends and summer events push prices up sharply, so check the calendar.",
    ],
    costs: [
      { item: "Pint of Guinness", amount: "Roughly €6–€8 in most pubs. Temple Bar charges €7–€8.50 or more." },
      { item: "Guinness Storehouse", amount: "Roughly £22–£28 a head" },
      { item: "Airport bus", amount: "Aircoach runs every 10–15 minutes for about €8–€12" },
      { item: "Currency", amount: "Euro" },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Pubs close at 2.30am, or 3.30am with a late licence. Clubs go a bit later.",
      "Temple Bar prices add up fast. Use it for one night only.",
      "Book taxis or use apps late at night, as there can be long waits at closing time.",
    ],
  },

  amsterdam: {
    checked: "October 2026",
    intro: [
      "Amsterdam is still one of the most popular stag destinations in Europe, but the city has made it very clear it no longer wants stag groups looking for a messy weekend. Go with the right expectations, though, and it's a fantastic place to spend a few days.",
      "The canals, the brown cafés, the beer and the food are excellent, and the city is easy to get around by bike, tram or on foot. Most of the rules are aimed at the Red Light District, so a group that spends more time elsewhere will barely notice them.",
    ],
    locals: [
      "Amsterdam residents are tired of drunk tourists, and the city council has acted. In 2023 it ran an online campaign called \"Stay Away\", aimed directly at young British men searching for stag parties and pub crawls. It has also restricted pub crawls and limited stag groups in the centre.",
      "Outside the Red Light District, you'll find the Dutch direct but friendly. They'll tell you if you're in the way, especially on a cycle lane. Keep the noise down on residential canal streets at night, as people live in every building.",
    ],
    gettingIn: [
      "Plenty of bars and cafés, especially in the Red Light District, won't serve large groups of men. Some have explicit no-stag policies. Smaller groups and a calmer approach will get you a lot further.",
      "The city has brought forward closing times for bars in the Red Light District at weekends, so plan the late part of the night elsewhere, in areas like Leidseplein or Rembrandtplein.",
      "Fancy dress is exactly what the city's campaign is aimed at, and it'll mark you out to police and bar staff. Leave it at home, or keep it to the groom.",
    ],
    areas: [
      { name: "The Jordaan", text: "Pretty canal streets and traditional brown cafés. The best area for a proper Dutch pub afternoon." },
      { name: "Leidseplein", text: "Busy bars, clubs and live music venues. Where a lot of big nights happen." },
      { name: "Rembrandtplein", text: "Another lively square with bars and clubs open late." },
      { name: "De Pijp", text: "Markets, good restaurants and a younger, mostly local crowd." },
      { name: "The Red Light District", text: "Worth seeing once. The rules are strict, and it's not the place for a big night." },
    ],
    doing: [
      { name: "A canal boat", text: "Hire a private boat with drinks for the group. It's one of the best things to do in the city, and a lot calmer than a pub crawl." },
      { name: "The Heineken Experience", text: "Touristy, but good fun for a group, and it ends with a beer." },
      { name: "Bike tour", text: "The best way to see the city. Hire bikes and stay sober while riding them, and stick to the bike lanes." },
      { name: "Football at the Johan Cruijff ArenA", text: "Ajax home games are a great atmosphere, if you can get tickets." },
      { name: "Brown café crawl in the Jordaan", text: "Traditional pubs with wooden interiors, good local beer and a relaxed atmosphere." },
    ],
    plan: [
      { day: "Friday", text: "Fly in, drop the bags, and start in the Jordaan's brown cafés. Dinner in De Pijp, then Leidseplein for a late night." },
      { day: "Saturday", text: "A bike tour or the Heineken Experience in the morning, then a private canal boat in the afternoon. Dinner, then Rembrandtplein." },
      { day: "Sunday", text: "A walk through the Red Light District in daylight to see it, then lunch and the flight home." },
    ],
    stay: [
      "Amsterdam accommodation is expensive, and getting more so. The city's tourist tax is 12.5% of the room rate, and hotel VAT rose in 2026, which together add a large chunk to the bill.",
      "Short-term holiday rentals are limited to 30 nights a year per property and banned altogether in parts of the centre, so big group apartments are hard to find. Hotels are the realistic choice for most groups.",
    ],
    costs: [
      { item: "Beer", amount: "More expensive than the UK in most central bars" },
      { item: "Tourist tax", amount: "12.5% of the nightly room rate" },
      { item: "Flights", amount: "Often under £100 return from UK airports if booked early" },
      { item: "Currency", amount: "Euro" },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Smoking cannabis in the street is banned in the Red Light District, Dam Square, the Damrak and Nieuwmarkt, with fines of about €100. It's only allowed inside licensed coffeeshops.",
      "Drinking in the street in the Red Light District can get you a fine of about €95.",
      "Photographing the women in the Red Light District windows is illegal, and staff can confiscate phones.",
      "Since July 2026, supermarkets and off-licences in the centre can't sell alcohol after 10pm.",
      "Watch out for bikes. Don't walk in the cycle lanes. The cyclists won't stop.",
    ],
  },
};
