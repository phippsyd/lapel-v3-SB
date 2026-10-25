// Long-form content for stag destination pages. A destination only gets a
// published page once it has an entry here. Facts that go stale (prices,
// rules, venue policies) are dated by `checked`.

export type StagGuide = {
  checked: string; // month the facts were last checked, e.g. "October 2026"
  intro: string[];
  locals: string[]; // how the city feels about stag groups
  gettingIn: string[]; // bars, group size, door staff, fancy dress
  areas: { name: string; text: string }[];
  sections?: { title: string; body: string[] }[]; // optional extra sections, e.g. for big cities
  doing: { name: string; text: string }[];
  plan: { day: string; text: string }[];
  stay: string[];
  costs: { item: string; amount: string }[];
  costNote?: string;
  watchOuts: string[];
};

import { BATCH1 } from "./stag-batch1";
import { BATCH2 } from "./stag-batch2";
import { BATCH3 } from "./stag-batch3";

export const STAG_GUIDES: Record<string, StagGuide> = {
  ...BATCH1,
  ...BATCH2,
  ...BATCH3,
  edinburgh: {
    checked: "October 2026",
    intro: [
      "Edinburgh gets picked for stags more than almost anywhere else in the UK, and for good reason. The Old Town looks like a film set, the pubs are proper pubs, and you can fit a castle, a hill, a whisky tasting and a very late night into one weekend without anyone getting in a car.",
      "It also suits a mixed group better than most stag cities. The lads who want a big night get the Cowgate. The ones who'd rather a good dinner and a dram get the New Town and Leith. Everyone gets Arthur's Seat the next morning, whether they like it or not.",
    ],
    locals: [
      "Edinburgh is used to visitors. Between the Festival, the rugby and a steady stream of hen and stag parties every weekend, people here have seen it all, and most locals are friendly as long as you're not getting in the way.",
      "That patience has limits, mainly in the Old Town, where people live above the bars. In 2023 the Old Town residents' association asked the council to actively discourage stag and hen parties, citing noise and late-night rowdiness. Nothing came of it in the form of a ban, but it tells you where the line is. Loud is tolerated. Shouting down a residential close at 3am is how you become the reason for the next campaign.",
      "Edinburgh's licensing culture also leans responsible. Scotland banned drinks promotions like happy hours years ago, police are quick to send drunk groups home, and arguing back is a reliable way to spend Saturday night somewhere you didn't plan to.",
    ],
    gettingIn: [
      "Plenty of central bars won't let a stag group in, and a few say so plainly. The Stand comedy club bans stag and hen groups outright, which is worth knowing because it's otherwise one of the best nights out in the city. Smarter George Street bars run tighter doors to match their prices.",
      "Group size matters more than anything else. A tidy group of six walks into most pubs. Fourteen lads arriving at once gets a polite no, even if nobody's done anything wrong. If you're a big group, split into two or three smaller ones before you reach the door, and meet up inside or at the next stop. Bouncers in the Cowgate and Grassmarket are used to this and generally fine with it.",
      "Fancy dress is a mixed picture. In the Grassmarket and Cowgate, where stag and hen groups are a big part of the weekend trade, a costume won't stand out, and several of the louder bars there are known to allow it. Many of the better pubs, and most places with a bouncer in the New Town, won't let you in dressed as anything. A sensible middle ground is a matching T-shirt or one ridiculous outfit for the groom, so the rest of the group can still get in somewhere decent. Door staff care far more about how drunk you are than what you're wearing.",
      "Carry photo ID. Challenge 25 applies across the city, and some places won't accept a photo of your licence on your phone.",
    ],
    areas: [
      { name: "Grassmarket", text: "Below the castle, lined with old pubs and outdoor tables. Great for an afternoon pint. After about 9pm on a Friday or Saturday it's mostly stag and hen groups, which is either exactly what you want or a reason to move on." },
      { name: "Cowgate", text: "A dark, narrow street under the South Bridge where the late bars and clubs are. This is where the big nights end up. Students and locals use it too, so it's busier and less touristy than the Grassmarket." },
      { name: "George Street and the New Town", text: "Cocktail bars, a dressier crowd and higher prices. Good for a smart first night or a pre-dinner round. Not the place for fancy dress or a group of fifteen." },
      { name: "Leith", text: "The old port, about twenty minutes from the centre by tram. Craft beer, distilleries and some of the best food in the city, with a mostly local crowd. Ideal for a calmer Saturday afternoon. The last tram back leaves before 11.30pm." },
      { name: "Tollcross and the Southside", text: "Ten minutes' walk from the Grassmarket and much more local. Bennets Bar is a beautiful old pub and a good escape when the Old Town gets too busy." },
    ],
    doing: [
      { name: "Whisky tasting", text: "The obvious one, and worth doing properly. Book a tasting rather than a gift-shop tour. Holyrood Distillery near the park and the Port of Leith Distillery both run group tastings, and a decent session takes an afternoon." },
      { name: "Arthur's Seat", text: "An extinct volcano in the middle of the city. It's about forty-five minutes to the top from Holyrood, steep in places, and the views over the city are superb. Best done on Saturday morning to clear heads before the second night." },
      { name: "The underground vaults", text: "Tours of the old vaults under the South Bridge run day and night, and the late ghost tours are a good laugh after dinner. Go to the toilet first. There aren't any down there." },
      { name: "Golf on the East Lothian coast", text: "North Berwick and Gullane are about forty minutes away by train or car and have some of the best links golf in the country. Book tee times well ahead in summer." },
      { name: "Rugby or football", text: "A Scotland match at Murrayfield during the Six Nations is a brilliant stag weekend in itself, but the city fills up and prices jump. Hearts and Hibs home games are easier to get into and a very Edinburgh way to spend a Saturday." },
      { name: "Clay shooting, quad bikes and paintball", text: "All available at sites on the edge of the city. Most stag companies package them with transport, which saves a lot of organising." },
    ],
    plan: [
      { day: "Friday", text: "Arrive, drop bags, and start with a few pints in the Grassmarket while it's still mixed. Dinner somewhere you've booked in the Old Town, then split up and head down to the Cowgate for the late bars." },
      { day: "Saturday", text: "Arthur's Seat in the morning, then a big brunch. Tram to Leith for a distillery tasting and an afternoon in the Shore pubs. Back into town for dinner, then a smarter night in the New Town or a return to the Cowgate, depending on the group." },
      { day: "Sunday", text: "A slow breakfast, a walk up the Royal Mile to the castle if anyone has the energy, and a long lunch before the train home." },
    ],
    stay: [
      "Hotels and hostels are the easy option, and there are plenty in the Old Town and around Haymarket. Big self-catering flats are harder to find than they used to be. Every short-term let in Scotland has needed a licence since 2023, and Edinburgh also requires planning permission for most whole-flat lets, so the supply of party-sized places has shrunk. Many that remain have strict noise and party rules, so read them before booking.",
      "Since 24 July 2026 Edinburgh has charged a visitor levy of 5% on overnight stays, capped at five nights. It applies to hotels, hostels and short-term lets alike, so factor it in when comparing prices.",
      "Avoid August if you can. The Festival and Fringe take over the city, accommodation prices can more than double and the pubs are packed with tourists. Six Nations home weekends are similar on a smaller scale.",
    ],
    costs: [
      { item: "Pint", amount: "£5–£7, around £6 on average. Royal Mile and Grassmarket pubs charge the most." },
      { item: "Cocktail", amount: "£10.50–£15" },
      { item: "Advance train from London", amount: "Often £40–£70 each way if booked early. Much more on the day." },
      { item: "Whisky tasting", amount: "Roughly £20–£60 a head, depending on what you drink" },
    ],
    costNote: "Prices change, so check before you book.",
    watchOuts: [
      "Shops in Scotland can only sell alcohol between 10am and 10pm. If you're planning beers for the train home or drinks for the flat, buy them the day before.",
      "Lothian Road gets messy late on. It's fine for dinner, less fun at 2am.",
      "Ordinary pubs close at 1am, every night of the week. Clubs and late bars can go to 3am.",
      "If the police tell you to go back to your hotel, go. Edinburgh's police are used to stag groups and don't need much of an excuse.",
    ],
  },
};
