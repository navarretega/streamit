export function seedDatabase(firebaseFirestore) {
  function getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
  }

  // APPLE TV+
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "MYTHIC QUEST: RAVEN'S BANQUET",
    description:
      "Mythic Quest: Raven's Banquet follows a team of video game developers as they navigate the challenges of running a popular video game.",
    stream: "Apple TV+",
    rating: "94",
    videoURL: "https://www.youtube.com/embed/pMaPCYRPhY0&t=3s",
    slug: "mythic-quest",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "LITTLE AMERICA",
    description:
      "Inspired by the true stories featured in Epic Magazine, Little America will go beyond the headlines to look at the funny, romantic, heartfelt, inspiring and surprising stories of immigrants in America, when they're more relevant now than ever.",
    stream: "Apple TV+",
    rating: "95",
    videoURL: "https://www.youtube.com/embed/xCke0hXoCf8",
    slug: "little-america",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "SERVANT",
    description:
      "Following a tragedy that has caused a rift in their marriage, the Turners hire a nanny, who soon finds that things are not as they seem",
    stream: "Apple TV+",
    rating: "82",
    videoURL: "https://www.youtube.com/embed/N1cOR0sRRIw",
    slug: "servant",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "HOME BEFORE DARK",
    description:
      "Follows a young girl who moves from Brooklyn to the small lakeside town her father left behind. While there, her dogged pursuit of the truth leads her to unearth a cold case that everyone in town, including her own father, tried hard to bury.",
    stream: "Apple TV+",
    rating: "80",
    videoURL: "https://www.youtube.com/embed/jsONbsXCuSg&t",
    slug: "home-dark",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "DEFENDING JACOB",
    description:
      "The limited drama series unfolds around a shocking crime that rocks a small Massachusetts town and one family in particular, forcing an assistant district attorney to choose between his sworn duty to uphold justice and his unconditional love for his son.",
    stream: "Apple TV+",
    rating: "73",
    videoURL: "https://www.youtube.com/embed/XQfeoRLvfqU",
    slug: "defending-jacob",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "GREYHOUND",
    description:
      "U.S. Navy Cmdr. Ernest Krause is assigned to lead an Allied convoy across the Atlantic during World War II. His convoy, however, is pursued by German U-boats. Although this is Krause's first wartime mission, he finds himself embroiled in what would come to be known as the longest, largest and most complex naval battle in history: The Battle of the Atlantic.",
    stream: "Apple TV+",
    rating: "79",
    videoURL: "https://www.youtube.com/embed/eyzxu26-Wqk",
    slug: "greyhound",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "THE BANKER",
    description:
      "In the 1960s, two entrepreneurs hatch an ingenious business plan to fight for housing integration and equal access to the American Dream.",
    stream: "Apple TV+",
    rating: "78",
    videoURL: "https://www.youtube.com/embed/hp33zFcvyRU",
    slug: "the-banker",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "HALA",
    description:
      "Seventeen-year-old Pakistani American teenager Hala struggles to balance desire with her family, cultural, and religious obligations; as she comes into her own, she grapples with a secret that threatens to unravel her family.",
    stream: "Apple TV+",
    rating: "88",
    videoURL: "https://www.youtube.com/embed/",
    slug: "hala",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "THE ELEPHANT QUEEN",
    description: "An elephant mother leads her herd across an unforgiving African landscape filled with vibrant wildlife.",
    stream: "Apple TV+",
    rating: "91",
    videoURL: "https://www.youtube.com/embed/4aS-qGHH6E0",
    slug: "elephant-queen",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "BEASTIE BOYS STORY",
    description: "In front of an audience, Mike Diamond and Adam Horovitz share the story of the Beastie Boys and 40 years of friendship.",
    stream: "Apple TV+",
    rating: "94",
    videoURL: "https://www.youtube.com/embed/ZCyqR2RXoQU",
    slug: "beastie-boys",
  });
  // NETFLIX
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "DIRTY MONEY",
    description:
      "Dirty Money is a thrilling investigative series from Oscar Award-winning director Alex Gibney, which provides an up-close and personal view into untold stories of scandal and corruption in the world of business.",
    stream: "Netflix",
    rating: "100",
    videoURL: "https://www.youtube.com/embed/CsplLiZHbj0",
    slug: "dirty-money",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "MINDHUNTER",
    description: "Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.",
    stream: "Netflix",
    rating: "98",
    videoURL: "https://www.youtube.com/embed/PHlJQCyqiaI",
    slug: "mindhunter",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "UNBELIEVABLE",
    description:
      "After a teen reports being raped, then recants her story, two female detectives follow evidence that could reveal the truth.",
    stream: "Netflix",
    rating: "98",
    videoURL: "https://www.youtube.com/embed/QTIkUzkbzQk",
    slug: "unbelievable",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "ELITE",
    description:
      "Las Encinas, the best and most exclusive school in Spain where the elite send their children to study, is also where three working class kids have just been admitted after their academy was destroyed by an earthquake and the local council divided up the students between the different schools in the area.",
    stream: "Netflix",
    rating: "97",
    videoURL: "https://www.youtube.com/embed/QNwhAdrdwp0",
    slug: "elite",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "DARK",
    description:
      "Dark is set in a German town in present day where the disappearance of two young children exposes the double lives and fractured relationships among four families.",
    stream: "Netflix",
    rating: "95",
    videoURL: "https://www.youtube.com/embed/cq2iTHoLrt0",
    slug: "dark",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "THE KING",
    description: "Young Henry V encounters deceit, war and treachery after becoming king of England in the 15th century.",
    stream: "Netflix",
    rating: "71",
    videoURL: "https://www.youtube.com/embed/svVykTznk9Q",
    slug: "the-king",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "PROJECT POWER",
    description: "A former soldier teams up with a cop to find the source behind a dangerous pill that provides temporary superpowers.",
    stream: "Netflix",
    rating: "59",
    videoURL: "https://www.youtube.com/embed/xw1vQgVaYNQ",
    slug: "project-power",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "FRACTURED",
    description:
      "After his wife and injured daughter disappear from the emergency room, a man becomes convinced the hospital is hiding something.",
    stream: "Netflix",
    rating: "59",
    videoURL: "https://www.youtube.com/embed/S8obCz5NSog",
    slug: "fractured",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "IN THE TALL GRASS",
    description:
      "A brother and sister enter a field of tall grass to rescue a boy, but they soon realize they cannot escape and something evil lurks in the grass.",
    stream: "Netflix",
    rating: "36",
    videoURL: "https://www.youtube.com/embed/7afc9gTbVFI",
    slug: "tall-grass",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "TRIPLE FRONTIER",
    description:
      "Former Special Forces operatives reunite to plan a heist in a sparsely populated multi-border zone of South America. For the first time in their prestigious careers, these unsung heroes undertake this dangerous mission for themselves instead of the country. But when events take an unexpected turn and threaten to spiral out of control, their skills, their loyalties, and their morals are pushed to a breaking point in an epic battle for survival.",
    stream: "Netflix",
    rating: "70",
    videoURL: "https://www.youtube.com/embed/Fo3yRLLrXQA",
    slug: "triple-frontier",
  });
  // AMAZON PRIME
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "THE BOYS",
    description:
      "A fun and irreverent take on what happens when superheroes abuse their superpowers rather than use them for good. It's the powerless against the superpowerful as ''The Boys'' embark on a heroic quest to expose the truth about ''The Seven'' and Vought -- the multibillion dollar conglomerate that manages these superheroes.",
    stream: "Amazon Prime Video",
    rating: "81",
    videoURL: "https://www.youtube.com/embed/06rueu_fh30",
    slug: "the-boys",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "THE EXPANSE",
    description: "A detective's search for a missing heiress in space coincides with the destruction of a freighter.",
    stream: "Amazon Prime Video",
    rating: "93",
    videoURL: "https://www.youtube.com/embed/kQuTAPWJxNo",
    slug: "the-expanse",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "THE MARVELOUS MRS. MAISEL",
    description:
      "Set in the 1950s, Miriam Midge Maisel is a content wife and mother whose perfect life takes a sudden turn when she discovers an unknown talent -- stand-up comedy.",
    stream: "Amazon Prime Video",
    rating: "89",
    videoURL: "https://www.youtube.com/embed/fOmwkTrW4OQ",
    slug: "the-marvelous",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "BOSCH",
    description:
      "A relentless Los Angeles homicide detective pursues the killer of a 13-year-old boy while standing trial himself on murder charges.",
    stream: "Amazon Prime Video",
    rating: "97",
    videoURL: "https://www.youtube.com/embed/bTGPN0Ugt8A",
    slug: "bosh",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "FLEABAG",
    description:
      "A hilarious and poignant window into the mind of a dry-witted, sexual, grief-riddled woman trying to make sense of the world.",
    stream: "Amazon Prime Video",
    rating: "100",
    videoURL: "https://www.youtube.com/embed/aX2ViKQFL_k",
    slug: "fleabag",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "THE VAST OF NIGHT",
    description: "In the 1950s, two kids search for the source of a mysterious frequency that has descended on their town.",
    stream: "Amazon Prime Video",
    rating: "92",
    videoURL: "https://www.youtube.com/embed/ZEiwpCJqMM0",
    slug: "vast-night",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "THE BIG SICK",
    description:
      "Kumail is a Pakistani comic, who meets an American graduate student named Emily at one of his stand-up shows. As their relationship blossoms, he soon becomes worried about what his traditional Muslim parents will think of her. When Emily suddenly comes down with an illness that leaves her in a coma, Kumail finds himself developing a bond with her deeply concerned mother and father.",
    stream: "Amazon Prime Video",
    rating: "98",
    videoURL: "https://www.youtube.com/embed/jcD0Daqc3Yw",
    slug: "big-sick",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "MANCHESTER BY THE SEA",
    description:
      "After the death of his older brother Joe, Lee Chandler (Casey Affleck) is shocked that Joe has made him sole guardian of his teenage nephew Patrick. Taking leave of his job as a janitor in Boston, Lee reluctantly returns to Manchester-by-the-Sea, the fishing village where his working-class family has lived for generations. There, he is forced to deal with a past that separated him from his wife, Randi (Michelle Williams), and the community where he was born and raised.",
    stream: "Amazon Prime Video",
    rating: "96",
    videoURL: "https://www.youtube.com/embed/gsVoD0pTge0",
    slug: "manchester-sea",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "HONEY BOY",
    description:
      "When 12-year-old Otis begins to find success as a television star, his abusive, alcoholic father returns and takes over as his guardian, and their contentious relationship is followed over a decade.",
    stream: "Amazon Prime Video",
    rating: "94",
    videoURL: "https://www.youtube.com/embed/5RR8WTQzwSk",
    slug: "honey-boy",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "THE REPORT",
    description: "FBI agent Daniel Jones performs an exhaustive investigation into the CIA's use of torture on suspected terrorists.",
    stream: "Amazon Prime Video",
    rating: "82",
    videoURL: "https://www.youtube.com/embed/VHmn9U3c0zA",
    slug: "the-report",
  });
  // HBO
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "WESTWORLD",
    description:
      "A sci-fi drama set in an Old West theme park where guests interact with automatons in scenarios that are developed, overseen and scripted by the park's creative, security and quality assurance departments. Based on the 1973 feature film directorial debut by Michael Crichton.",
    stream: "HBO",
    rating: "82",
    videoURL: "https://www.youtube.com/embed/9BqKiZhEFFw",
    slug: "westworld",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "WATCHMEN",
    description:
      "Set in an alternate history where masked vigilantes are treated as outlaws, Watchmen embraces the nostalgia of the original groundbreaking graphic novel of the same name, while attempting to break new ground of its own.",
    stream: "HBO",
    rating: "96",
    videoURL: "https://www.youtube.com/embed/zymgtV99Rko",
    slug: "watchmen",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "EUPHORIA",
    description:
      "Following a group of high school students as they navigate love and friendships in a world of drugs, sex, trauma and social media.",
    stream: "HBO",
    rating: "82",
    videoURL: "https://www.youtube.com/embed/cajLoaFl2Zo",
    slug: "euphoria",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "THE OUTSIDER",
    description: "Investigators are confounded over an unspeakable crime that's been committed.",
    stream: "HBO",
    rating: "91",
    videoURL: "https://www.youtube.com/embed/eNDKWr3Xmjk",
    slug: "the-outsider",
  });
  firebaseFirestore.collection("series").add({
    id: getUUID(),
    title: "SUCCESSION",
    description:
      "The Roy family -- Logan Roy and his four children -- controls one of the biggest media and entertainment conglomerates in the world.",
    stream: "HBO",
    rating: "92",
    videoURL: "https://www.youtube.com/embed/OzYxJV_rmE8",
    slug: "succession",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "THE WIZARD OF LIES",
    description:
      "In 2008, stockbroker, investment adviser and financier Bernie Madoff made headlines around the world when he was arrested for perpetrating perhaps the largest financial fraud in U.S. history.",
    stream: "HBO",
    rating: "75",
    videoURL: "https://www.youtube.com/embed/05HK-z6HoHM",
    slug: "wizard-lies",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "PATERNO",
    description: "Penn State football coach Joe Paterno becomes embroiled in a sexual abuse scandal.",
    stream: "HBO",
    rating: "70",
    videoURL: "https://www.youtube.com/embed/5tlNS8O3Q",
    slug: "paterno",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "FAHRENHEIT 451",
    description:
      "In a future society where books are banned and burned, a fireman begins to read in secret and discovers an underground rebellion committed to protecting literature.",
    stream: "HBO",
    rating: "33",
    videoURL: "https://www.youtube.com/embed/AeDBaMg8NSQ",
    slug: "fahrenheit",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "ALL THE WAY",
    description:
      "President Lyndon B. Johnson (Bryan Cranston) endures a tumultuous first year in office while trying to launch a civil rights bill.",
    stream: "HBO",
    rating: "88",
    videoURL: "https://www.youtube.com/embed/fzZs6w_VLbQ",
    slug: "all-way",
  });
  firebaseFirestore.collection("films").add({
    id: getUUID(),
    title: "CONFIRMATION",
    description:
      "Nominated to the Supreme Court in 1991, Judge Clarence Thomas (Wendell Pierce) must testify before the Senate Judiciary Committee after Anita Hill (Kerry Washington), his former employee, claims that he sexually harassed her.",
    stream: "HBO",
    rating: "83",
    videoURL: "https://www.youtube.com/embed/kZiyaxhPAgo",
    slug: "confirmation",
  });
}
