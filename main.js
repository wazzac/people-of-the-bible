/* =========================================================================
   DATA — People of the New Testament
   Content follows the New Testament plus long-standing Christian tradition.
   Where an identification or authorship is traditional/debated, notes say so.
   Dates are scholarly ESTIMATES; several (esp. the crucifixion) are disputed.
   ========================================================================= */
const NT_CAT = {
  family:  {label:"Family & kin",        color:"var(--fam)"},
  twelve:  {label:"The Twelve",          color:"var(--twelve)"},
  follow:  {label:"Followers & friends", color:"var(--follow)"},
  church:  {label:"Early church",        color:"var(--church)"},
  rulers:  {label:"Rulers & authorities",color:"var(--rulers)"},
  rome:    {label:"Roman Empire",         color:"var(--rome)"},
};

const NT_PEOPLE = [
 // ---------------- FAMILY & KIN ----------------
 {id:"jesus", name:"Jesus of Nazareth", short:"Jesus", cat:"family", w:24, halo:2,
  aliases:"Jesus Christ · the Messiah · Son of Man",
  dates:"c. 5 BC – c. AD 30 or 33",
  desc:`The centre of the whole account: teacher, healer, and — to his followers — the promised Messiah and risen Lord. Born in Bethlehem, raised in Nazareth, he gathered twelve close disciples, was crucified under Pontius Pilate, and (his followers hold) rose on the third day.`,
  refs:["Matthew 1–2","Luke 2","John 1","Mark 14–16"]},

 {id:"mary", name:"Mary, mother of Jesus", short:"Mary (mother)", cat:"family", w:14, halo:1,
  aliases:"the Virgin Mary · Miriam",
  clash:"Mary", clashtag:"Mother of Jesus. Sang the Magnificat; present from Bethlehem to the cross to Pentecost.",
  dates:"c. 18 BC – ? (traditional)",
  desc:`Mother of Jesus, betrothed to Joseph. She responds to the angel Gabriel with the Magnificat, raises Jesus in Nazareth, stands at the cross, and is among the believers at Pentecost.`,
  notconfused:`the many other Marys below — Magdalene, of Bethany, of Clopas, and the mother of John Mark.`,
  refs:["Luke 1:26–56","Matthew 1:18–25","John 2:1–11","John 19:25–27","Acts 1:14"]},

 {id:"joseph", name:"Joseph of Nazareth", short:"Joseph", cat:"family", w:12,
  aliases:"the carpenter",
  dates:"1st c. BC – ? (dies before Jesus' ministry, by tradition)",
  desc:`Jesus' legal (foster) father, a carpenter of the line of David. Matthew and Luke trace his royal lineage by two different routes (through Solomon, and through Nathan). He is silent in the Gospels and absent by Jesus' adult ministry.`,
  refs:["Matthew 1:18–25","Matthew 2:13–23","Luke 2:1–7","Luke 3:23"]},

 {id:"joachim", name:"Joachim", short:"Joachim", cat:"family", w:7,
  dates:"1st c. BC (traditional)",
  desc:`By tradition, the father of Mary. He is NOT named in the New Testament — the name comes from the 2nd-century Protoevangelium of James.`,
  refs:["Not named in the NT (Protoevangelium of James)"]},

 {id:"anne", name:"Anne (Anna)", short:"Anne", cat:"family", w:7,
  dates:"1st c. BC (traditional)",
  desc:`By tradition, the mother of Mary and grandmother of Jesus. Like Joachim, she is not named in the New Testament and comes from later tradition.`,
  refs:["Not named in the NT (Protoevangelium of James)"]},

 {id:"zechariah", name:"Zechariah the priest", short:"Zechariah", cat:"family", w:9,
  dates:"1st c. BC",
  desc:`A priest of the division of Abijah and husband of Elizabeth. Told by Gabriel he would father a son in old age, he is struck mute until John's birth, then sings the Benedictus.`,
  refs:["Luke 1:5–25","Luke 1:57–79"]},

 {id:"elizabeth", name:"Elizabeth", short:"Elizabeth", cat:"family", w:9,
  dates:"1st c. BC",
  desc:`Wife of Zechariah, mother of John the Baptist, and a kinswoman of Mary. Barren into old age, she conceives John; at the Visitation her unborn child leaps for joy.`,
  refs:["Luke 1:5–25","Luke 1:39–45","Luke 1:57–66"]},

 {id:"johnbaptist", name:"John the Baptist", short:"John the Baptist", cat:"family", w:14, halo:1,
  aliases:"the Forerunner · the Baptizer",
  clash:"John", clashtag:"Jesus' cousin and forerunner. Baptized Jesus in the Jordan. NOT an apostle or a Gospel author.",
  dates:"c. 5 BC – c. AD 28/29",
  desc:`Son of Zechariah and Elizabeth, and so a relative of Jesus. A wilderness prophet — "a voice crying in the wilderness" — he baptized Jesus in the Jordan. Imprisoned and beheaded by Herod Antipas after Salome's dance.`,
  notconfused:`John the Apostle (who wrote the Gospel of John) and John Mark (who wrote Mark). This John was neither an apostle nor an author — he died before Jesus' resurrection.`,
  refs:["Luke 1:57–80","Matthew 3","John 1:19–34","Mark 6:14–29"]},

 {id:"jamesjust", name:"James the Just", short:"James (brother)", cat:"family", w:13,
  aliases:"James, brother of the Lord",
  clash:"James", clashtag:"Brother of Jesus; led the Jerusalem church; wrote the Epistle of James. Not one of the Twelve.",
  dates:"c. AD 1 – c. AD 62",
  desc:`Called a brother of the Lord. Not a follower during Jesus' ministry, he became leader of the Jerusalem church, presided at the Council of Jerusalem, and is credited with the Epistle of James. Martyred c. AD 62 (recorded by Josephus).`,
  notconfused:`the two apostles named James (son of Zebedee and son of Alphaeus). Note: some traditions read "brothers" as cousins or step-brothers rather than sons of Mary.`,
  refs:["Mark 6:3","Acts 15:13–21","1 Corinthians 15:7","Galatians 1:19","James 1:1"]},

 {id:"jude", name:"Jude, brother of Jesus", short:"Jude (brother)", cat:"family", w:9,
  aliases:"Judas, brother of James",
  clash:"Judas", clashtag:"A brother of Jesus; credited with the short Epistle of Jude.",
  dates:"1st c. AD",
  desc:`A brother of Jesus and of James, traditionally the author of the brief Epistle of Jude, which he opens as "brother of James."`,
  notconfused:`Judas Iscariot (the betrayer) and the apostle Judas/Thaddaeus. Three different men share the name.`,
  refs:["Mark 6:3","Matthew 13:55","Jude 1"]},

 {id:"joses", name:"Joses (Joseph)", short:"Joses", cat:"family", w:7,
  dates:"1st c. AD",
  desc:`A brother of Jesus, named alongside James, Jude, and Simon.`,
  refs:["Mark 6:3","Matthew 13:55"]},

 {id:"simonbro", name:"Simon, brother of Jesus", short:"Simon (brother)", cat:"family", w:7,
  clash:"Simon", clashtag:"A brother of Jesus, named in the Nazareth crowd's list.",
  dates:"1st c. AD",
  desc:`One of the brothers of Jesus named by the crowd at Nazareth.`,
  notconfused:`Simon Peter and Simon the Zealot among the Twelve.`,
  refs:["Mark 6:3","Matthew 13:55"]},

 {id:"maryclopas", name:"Mary, wife of Clopas", short:"Mary of Clopas", cat:"family", w:8,
  clash:"Mary", clashtag:"Stood at the cross; mother of James the younger and Joses; possibly Mary's sister.",
  dates:"1st c. AD",
  desc:`One of the women at the cross, described as mother of James the younger and Joses. John 19:25 may name her as a sister (or kinswoman) of Jesus' mother — the grammar is ambiguous.`,
  notconfused:`Mary the mother of Jesus, though they may have been related.`,
  refs:["John 19:25","Mark 15:40","Matthew 27:56"]},

 {id:"salome", name:"Salome", short:"Salome", cat:"family", w:8,
  dates:"1st c. AD",
  desc:`One of the women at the cross and the empty tomb, and — comparing the Gospel lists — the mother of the apostles James and John. By one tradition she was a sister of Mary, which would make those apostles cousins of Jesus.`,
  notconfused:`the other Salome — the daughter of Herodias whose dance led to John the Baptist's death (unnamed in the Gospels).`,
  refs:["Mark 15:40","Mark 16:1","Matthew 27:56"]},

 // ---------------- THE TWELVE ----------------
 {id:"peter", name:"Simon Peter", short:"Peter", cat:"twelve", w:15,
  aliases:"Simon · Cephas · Simon bar-Jonah",
  clash:"Simon", clashtag:"Fisherman, brother of Andrew; leader of the apostles. Renamed 'Peter' (Rock) by Jesus.",
  dates:"c. AD 1 – c. AD 64/67",
  desc:`A Galilean fisherman and brother of Andrew, and the foremost of the Twelve. He confesses Jesus as the Messiah, denies him three times, preaches at Pentecost, and (with letters 1–2 Peter attributed to him) is martyred in Rome under Nero.`,
  notconfused:`Simon the Zealot, Simon the brother of Jesus, and the others named Simon.`,
  refs:["Matthew 16:13–20","Matthew 26:69–75","John 21:15–19","Acts 2","1 Peter 1:1"]},

 {id:"andrew", name:"Andrew", short:"Andrew", cat:"twelve", w:10,
  dates:"1st c. AD",
  desc:`Brother of Simon Peter and a fisherman. First a disciple of John the Baptist, he follows Jesus and brings his brother Peter to him.`,
  refs:["John 1:35–42","Matthew 4:18–20","John 6:8–9"]},

 {id:"jameszeb", name:"James, son of Zebedee", short:"James (Zebedee)", cat:"twelve", w:12,
  aliases:"James the Greater",
  clash:"James", clashtag:"Apostle, brother of John; part of Jesus' inner three. First apostle to be martyred (AD 44).",
  dates:"c. AD 3 – AD 44",
  desc:`Brother of John and son of Zebedee; with Peter and John he formed Jesus' inner circle. He was the first apostle to be martyred — beheaded by Herod Agrippa I around AD 44.`,
  notconfused:`James son of Alphaeus and James the brother of Jesus.`,
  refs:["Mark 1:19–20","Mark 5:37","Mark 10:35–40","Acts 12:2"]},

 {id:"johnapostle", name:"John the Apostle", short:"John (Apostle)", cat:"twelve", w:14, halo:1,
  aliases:"son of Zebedee · the Beloved Disciple",
  clash:"John", clashtag:"Apostle, brother of James; 'the disciple Jesus loved.' Traditionally wrote the Gospel of John, 1–3 John, and Revelation.",
  dates:"c. AD 6 – c. AD 100",
  desc:`Brother of James and son of Zebedee, called "the disciple whom Jesus loved." At the cross Jesus entrusts his mother to him. Tradition credits him with the Gospel of John, the letters 1–3 John, and Revelation, and holds he lived to old age at Ephesus.`,
  notconfused:`John the Baptist (Jesus' cousin, who died first) and John Mark (author of Mark's Gospel). This is the apostle and evangelist.`,
  refs:["Mark 1:19–20","John 13:23","John 19:26–27","John 21:20–24","Revelation 1:9"]},

 {id:"zebedee", name:"Zebedee", short:"Zebedee", cat:"family", w:7,
  dates:"1st c. AD",
  desc:`A Galilean fisherman, father of the apostles James and John, and (comparing the accounts) husband of Salome.`,
  refs:["Matthew 4:21–22","Mark 1:19–20"]},

 {id:"philip", name:"Philip the Apostle", short:"Philip (Apostle)", cat:"twelve", w:9,
  dates:"1st c. AD",
  desc:`An apostle from Bethsaida who invites Nathanael with the words "come and see." He appears again questioning Jesus at the Last Supper.`,
  notconfused:`Philip the Evangelist, one of the seven deacons in Acts — a different man.`,
  refs:["John 1:43–46","John 6:5–7","John 14:8–9"]},

 {id:"bartholomew", name:"Bartholomew", short:"Bartholomew", cat:"twelve", w:8,
  aliases:"traditionally Nathanael",
  dates:"1st c. AD",
  desc:`An apostle usually identified with Nathanael, the man who asked "can anything good come from Nazareth?" before Jesus called him "an Israelite in whom there is no deceit."`,
  refs:["John 1:45–51","Matthew 10:3","John 21:2"]},

 {id:"thomas", name:"Thomas", short:"Thomas", cat:"twelve", w:9,
  aliases:"Didymus (the Twin)",
  dates:"1st c. AD",
  desc:`Called "the Twin." Willing to die with Jesus, yet he doubts the resurrection until he sees the wounds, then confesses "My Lord and my God."`,
  refs:["John 11:16","John 14:5","John 20:24–29"]},

 {id:"matthew", name:"Matthew", short:"Matthew", cat:"twelve", w:9,
  aliases:"Levi",
  dates:"1st c. AD",
  desc:`A tax collector at Capernaum who left his booth to follow Jesus. Tradition credits him with the first Gospel.`,
  refs:["Matthew 9:9–13","Mark 2:14","Luke 5:27–32"]},

 {id:"jamesalph", name:"James, son of Alphaeus", short:"James (Alphaeus)", cat:"twelve", w:8,
  aliases:"James the Less / the Younger",
  clash:"James", clashtag:"An apostle, distinguished as 'the Less.' Little else is recorded of him.",
  dates:"1st c. AD",
  desc:`One of the Twelve, distinguished as "the Younger" or "the Less." He may be the son of the Mary who stood at the cross.`,
  notconfused:`James son of Zebedee and James the brother of Jesus.`,
  refs:["Mark 3:18","Luke 6:15","Acts 1:13"]},

 {id:"thaddaeus", name:"Thaddaeus", short:"Thaddaeus / Jude", cat:"twelve", w:8,
  aliases:"Judas son of James · Lebbaeus",
  clash:"Judas", clashtag:"An apostle — 'Judas (not Iscariot)' — also listed as Thaddaeus.",
  dates:"1st c. AD",
  desc:`An apostle listed as Thaddaeus in Mark/Matthew and as "Judas son of James" in Luke/Acts. John carefully calls him "Judas, not Iscariot."`,
  notconfused:`Judas Iscariot the betrayer, and Jude the brother of Jesus. Three men, one name.`,
  refs:["Matthew 10:3","Luke 6:16","John 14:22","Acts 1:13"]},

 {id:"simonzealot", name:"Simon the Zealot", short:"Simon the Zealot", cat:"twelve", w:8,
  aliases:"the Cananaean",
  clash:"Simon", clashtag:"An apostle, marked out as 'the Zealot' — likely a former nationalist.",
  dates:"1st c. AD",
  desc:`An apostle set apart by his epithet "the Zealot," probably a former member of the nationalist party. Little more is recorded.`,
  notconfused:`Simon Peter and Simon the brother of Jesus.`,
  refs:["Matthew 10:4","Luke 6:15","Acts 1:13"]},

 {id:"judasisc", name:"Judas Iscariot", short:"Judas Iscariot", cat:"twelve", w:11,
  clash:"Judas", clashtag:"The betrayer. Kept the money bag; handed Jesus over for thirty pieces of silver.",
  dates:"1st c. AD (dies c. AD 30/33)",
  desc:`The apostle who kept the common purse and betrayed Jesus to the authorities for thirty pieces of silver. He died soon after — Matthew says by hanging, Acts by a fall.`,
  notconfused:`the faithful apostle Judas/Thaddaeus and Jude the brother of Jesus.`,
  refs:["Matthew 26:14–16","Matthew 27:3–10","John 13:21–30","Acts 1:16–20"]},

 {id:"matthias", name:"Matthias", short:"Matthias", cat:"twelve", w:8,
  dates:"1st c. AD",
  desc:`Chosen by lot after the Ascension to take Judas Iscariot's place among the Twelve, restoring their number to twelve.`,
  refs:["Acts 1:21–26"]},

 // ---------------- FOLLOWERS & FRIENDS ----------------
 {id:"marymagdalene", name:"Mary Magdalene", short:"Mary Magdalene", cat:"follow", w:11,
  clash:"Mary", clashtag:"Follower freed of seven demons; first witness of the risen Jesus.",
  dates:"1st c. AD",
  desc:`A devoted follower from Magdala, freed by Jesus of seven demons. She stood at the cross and was the first person to see and announce the risen Jesus.`,
  notconfused:`Mary the mother of Jesus and Mary of Bethany. She is a distinct woman, and the tradition equating her with a "sinful woman" is a later, unsupported reading.`,
  refs:["Luke 8:1–3","John 19:25","John 20:1–18"]},

 {id:"marybethany", name:"Mary of Bethany", short:"Mary of Bethany", cat:"follow", w:9,
  clash:"Mary", clashtag:"Sister of Martha and Lazarus; sat at Jesus' feet and anointed him.",
  dates:"1st c. AD",
  desc:`Sister of Martha and Lazarus, and a close friend of Jesus. She sat at his feet to learn and anointed him with costly perfume before his death.`,
  notconfused:`Mary Magdalene — a different woman entirely.`,
  refs:["Luke 10:38–42","John 11:1–44","John 12:1–8"]},

 {id:"martha", name:"Martha", short:"Martha", cat:"follow", w:8,
  dates:"1st c. AD",
  desc:`Sister of Mary and Lazarus of Bethany, remembered for her busy hospitality and for her confession of faith before Lazarus was raised.`,
  refs:["Luke 10:38–42","John 11:17–27"]},

 {id:"lazarus", name:"Lazarus of Bethany", short:"Lazarus", cat:"follow", w:9,
  dates:"1st c. AD",
  desc:`Brother of Mary and Martha, and a friend of Jesus, who raised him after four days in the tomb — the climactic sign in John's Gospel.`,
  refs:["John 11:1–44","John 12:9–11"]},

 {id:"marymark", name:"Mary, mother of John Mark", short:"Mary (of John Mark)", cat:"follow", w:7,
  clash:"Mary", clashtag:"Hosted an early Jerusalem house church; mother of John Mark.",
  dates:"1st c. AD",
  desc:`A believer whose Jerusalem home hosted the praying church; Peter goes there after his prison escape. Mother of John Mark.`,
  notconfused:`the other Marys — she is defined here by her son.`,
  refs:["Acts 12:12"]},

 {id:"simoncyrene", name:"Simon of Cyrene", short:"Simon of Cyrene", cat:"follow", w:7,
  clash:"Simon", clashtag:"Compelled to carry Jesus' cross to Golgotha.",
  dates:"1st c. AD",
  desc:`A passer-by from Cyrene compelled by the soldiers to carry Jesus' cross, named as father of Alexander and Rufus.`,
  notconfused:`Simon Peter and the other Simons.`,
  refs:["Matthew 27:32","Mark 15:21","Luke 23:26"]},

 {id:"simonmagus", name:"Simon Magus", short:"Simon Magus", cat:"follow", w:7,
  clash:"Simon", clashtag:"A Samaritan sorcerer who tried to buy the Spirit — hence 'simony.'",
  dates:"1st c. AD",
  desc:`A Samaritan sorcerer who believed and was baptized, then tried to buy the power of the Spirit from the apostles — the origin of the word "simony." Peter rebuked him sharply.`,
  notconfused:`the faithful Simons above.`,
  refs:["Acts 8:9–24"]},

 // ---------------- EARLY CHURCH ----------------
 {id:"paul", name:"Paul of Tarsus", short:"Paul", cat:"church", w:16,
  aliases:"Saul · the Apostle to the Gentiles",
  dates:"c. AD 5 – c. AD 64/67",
  desc:`A Pharisee and Roman citizen from Tarsus who persecuted the church until his encounter with the risen Jesus on the road to Damascus. He became the great missionary to the Gentiles, wrote much of the New Testament, and was martyred in Rome under Nero.`,
  notconfused:`the original Twelve — Paul was not among them; he calls himself "the least of the apostles," called later and directly.`,
  refs:["Acts 9:1–19","Acts 13–28","Galatians 1:11–24"]},

 {id:"barnabas", name:"Barnabas", short:"Barnabas", cat:"church", w:11,
  aliases:"Joseph · 'son of encouragement'",
  dates:"1st c. AD",
  desc:`A Levite from Cyprus who vouched for the newly converted Saul and became his partner on the first missionary journey. Later they parted ways over John Mark, his cousin.`,
  refs:["Acts 4:36–37","Acts 11:22–26","Acts 13:2","Acts 15:36–39"]},

 {id:"johnmark", name:"John Mark", short:"John Mark", cat:"church", w:11,
  aliases:"Mark · the Evangelist",
  clash:"John", clashtag:"Wrote the Gospel of Mark; cousin of Barnabas; companion of Peter and Paul.",
  dates:"c. AD 12 – c. AD 68",
  desc:`Cousin of Barnabas and companion of Paul and Peter, traditionally the author of the Gospel of Mark, drawn from Peter's preaching. His turning back on the first journey caused the Paul–Barnabas split, but Paul later called him useful.`,
  notconfused:`John the Apostle and John the Baptist. This John wrote Mark, not John.`,
  refs:["Acts 12:25","Acts 15:37–39","Colossians 4:10","2 Timothy 4:11","1 Peter 5:13"]},

 {id:"timothy", name:"Timothy", short:"Timothy", cat:"church", w:11,
  dates:"c. AD 17 – ? (late 1st c., traditional)",
  desc:`Paul's closest protégé, from Lystra, son of a believing Jewish mother (Eunice) and a Greek father, raised in faith by his grandmother Lois. Paul calls him "my true child in the faith" and addresses two letters to him.`,
  refs:["Acts 16:1–3","Philippians 2:19–22","1 Timothy 1:2","2 Timothy 1:5"]},

 {id:"titus", name:"Titus", short:"Titus", cat:"church", w:9,
  clash:"Titus", clashtag:"Paul's Greek co-worker, sent to organize Crete; recipient of the letter to Titus.",
  dates:"1st c. AD",
  desc:`A Greek convert and trusted delegate of Paul, sent to organize the churches of Crete; recipient of the letter to Titus.`,
  notconfused:`the Roman emperor Titus, who destroyed Jerusalem in AD 70 — a completely different person.`,
  refs:["2 Corinthians 8:16–23","Galatians 2:1–3","Titus 1:4"]},

 {id:"silas", name:"Silas", short:"Silas", cat:"church", w:9,
  aliases:"Silvanus",
  dates:"1st c. AD",
  desc:`A leader from the Jerusalem church and Paul's companion on the second missionary journey — jailed with him at Philippi, where they sang at midnight.`,
  refs:["Acts 15:22","Acts 16:16–40","1 Thessalonians 1:1","1 Peter 5:12"]},

 {id:"luke", name:"Luke", short:"Luke", cat:"church", w:11,
  aliases:"the beloved physician · the Evangelist",
  dates:"c. AD 10 – ? (late 1st c., traditional)",
  desc:`A physician and companion of Paul, and the only likely Gentile author in the New Testament. Tradition credits him with the Gospel of Luke and the Acts of the Apostles — the "we" passages of Acts mark his travels with Paul.`,
  refs:["Colossians 4:14","2 Timothy 4:11","Acts 16:10","Luke 1:1–4"]},

 {id:"priscilla", name:"Priscilla", short:"Priscilla", cat:"church", w:9,
  aliases:"Prisca",
  dates:"1st c. AD",
  desc:`A Jewish-Christian tentmaker who, with her husband Aquila, hosted Paul, ran a house church, and together instructed the eloquent Apollos more fully.`,
  refs:["Acts 18:1–3","Acts 18:24–26","Romans 16:3–5","1 Corinthians 16:19"]},

 {id:"aquila", name:"Aquila", short:"Aquila", cat:"church", w:8,
  dates:"1st c. AD",
  desc:`A tentmaker from Pontus and husband of Priscilla; the couple were among Paul's closest co-workers and risked their lives for him.`,
  refs:["Acts 18:1–3","Romans 16:3","2 Timothy 4:19"]},

 {id:"apollos", name:"Apollos", short:"Apollos", cat:"church", w:9,
  dates:"1st c. AD",
  desc:`An eloquent, learned Jew of Alexandria who preached powerfully but knew only John's baptism, until Priscilla and Aquila explained the way more fully. A leading teacher at Corinth.`,
  refs:["Acts 18:24–28","1 Corinthians 3:4–6","Titus 3:13"]},

 {id:"stephen", name:"Stephen", short:"Stephen", cat:"church", w:11,
  aliases:"the Protomartyr",
  dates:"? – c. AD 34/35",
  desc:`One of the seven chosen to serve the early church, "full of faith and the Spirit." His bold defence before the council led to his stoning — the first Christian martyr — as the young Saul looked on approvingly.`,
  refs:["Acts 6:5–15","Acts 7","Acts 8:1"]},

 {id:"philipevang", name:"Philip the Evangelist", short:"Philip (Evangelist)", cat:"church", w:9,
  aliases:"Philip the Deacon",
  dates:"1st c. AD",
  desc:`One of the seven deacons alongside Stephen. He carried the gospel to Samaria and baptized the Ethiopian court official on the desert road. He had four prophesying daughters.`,
  notconfused:`Philip the Apostle among the Twelve — a different Philip.`,
  refs:["Acts 6:5","Acts 8:4–40","Acts 21:8–9"]},

 {id:"lydia", name:"Lydia", short:"Lydia", cat:"church", w:8,
  dates:"1st c. AD",
  desc:`A dealer in purple cloth from Thyatira, living at Philippi, whose heart was opened as Paul preached — the first recorded convert in Europe. Her home became the local church's base.`,
  refs:["Acts 16:14–15","Acts 16:40"]},

 {id:"eunice", name:"Eunice", short:"Eunice", cat:"church", w:7,
  dates:"1st c. AD",
  desc:`Timothy's mother, a believing Jewish woman married to a Greek, who — with her mother Lois — raised Timothy in the Scriptures.`,
  refs:["Acts 16:1","2 Timothy 1:5"]},

 {id:"lois", name:"Lois", short:"Lois", cat:"church", w:7,
  dates:"1st c. AD",
  desc:`Timothy's grandmother, praised by Paul as the first in the family to hold a sincere faith, passed on through Eunice.`,
  refs:["2 Timothy 1:5"]},

 {id:"onesimus", name:"Onesimus", short:"Onesimus", cat:"church", w:8,
  dates:"1st c. AD",
  desc:`A runaway slave of Philemon who met Paul in prison, was converted, and was sent back — Paul appealing that he be received "no longer as a slave but as a beloved brother."`,
  refs:["Philemon 10–16","Colossians 4:9"]},

 {id:"philemon", name:"Philemon", short:"Philemon", cat:"church", w:8,
  dates:"1st c. AD",
  desc:`A well-off believer at Colossae who hosted a house church and owned the slave Onesimus. Paul's brief personal letter urges him toward reconciliation.`,
  refs:["Philemon 1–2","Philemon 17–20"]},

 {id:"phoebe", name:"Phoebe", short:"Phoebe", cat:"church", w:8,
  dates:"1st c. AD",
  desc:`A deacon and patron of the church at Cenchreae, commended by Paul and entrusted to carry his letter to the Romans.`,
  refs:["Romans 16:1–2"]},

 // ---------------- RULERS & AUTHORITIES ----------------
 {id:"herodgreat", name:"Herod the Great", short:"Herod the Great", cat:"rulers", w:10,
  dates:"c. 73 BC – 4 BC",
  desc:`Rome's client king of Judea and rebuilder of the Temple. Troubled by the Magi's news of a newborn king, he ordered the massacre of Bethlehem's infants; his death frames the earliest possible date of Jesus' birth.`,
  refs:["Matthew 2:1–20"]},

 {id:"herodantipas", name:"Herod Antipas", short:"Herod Antipas", cat:"rulers", w:9,
  dates:"c. 20 BC – after AD 39",
  desc:`A son of Herod the Great, tetrarch of Galilee. He imprisoned and beheaded John the Baptist and questioned Jesus during his trial. Jesus called him "that fox."`,
  notconfused:`his father Herod the Great and his nephew Herod Agrippa I.`,
  refs:["Mark 6:14–29","Luke 13:31–33","Luke 23:6–12"]},

 {id:"herodagrippa1", name:"Herod Agrippa I", short:"Herod Agrippa I", cat:"rulers", w:8,
  dates:"c. 11 BC – AD 44",
  desc:`A grandson of Herod the Great who ruled Judea. He executed the apostle James (son of Zebedee) and imprisoned Peter, and was himself struck down, as Acts records.`,
  refs:["Acts 12:1–4","Acts 12:19–23"]},

 {id:"pilate", name:"Pontius Pilate", short:"Pontius Pilate", cat:"rome", w:10,
  dates:"prefect of Judea AD 26–36",
  desc:`The Roman prefect who tried Jesus, declared he found no guilt, yet handed him over to crucifixion — famously washing his hands of the verdict.`,
  refs:["Matthew 27:11–26","Luke 23:1–25","John 18:28–19:16"]},

 {id:"caiaphas", name:"Caiaphas", short:"Caiaphas", cat:"rulers", w:8,
  dates:"high priest c. AD 18–36",
  desc:`The reigning high priest who presided over the council that condemned Jesus, having argued it was expedient that one man die for the people.`,
  refs:["Matthew 26:57–68","John 11:49–53","Acts 4:6"]},

 {id:"annas", name:"Annas", short:"Annas", cat:"rulers", w:7,
  dates:"high priest AD 6–15",
  desc:`A former high priest and father-in-law of Caiaphas who still held great influence; Jesus was brought to him first for questioning.`,
  refs:["John 18:12–24","Luke 3:2","Acts 4:6"]},

 // ---------------- ROMAN EMPIRE ----------------
 {id:"augustus", name:"Caesar Augustus", short:"Augustus", cat:"rome", w:9,
  aliases:"Octavian · Imperator Caesar Augustus",
  dates:"63 BC – AD 14 (r. 27 BC – AD 14)",
  desc:`Rome's first emperor. His empire-wide census (Luke 2:1) brings Joseph and Mary to Bethlehem for Jesus' birth, while Herod the Great rules Judea as his client king.`,
  refs:["Luke 2:1"]},

 {id:"tiberius", name:"Tiberius", short:"Tiberius", cat:"rome", w:9,
  dates:"42 BC – AD 37 (r. AD 14–37)",
  desc:`Emperor through Jesus' ministry and crucifixion. Luke dates John the Baptist's ministry to his fifteenth year; the coin of the "render to Caesar" saying bore his image; and Pilate governed Judea as his prefect.`,
  refs:["Luke 3:1","Matthew 22:17–21"]},

 {id:"caligula", name:"Caligula (Gaius)", short:"Caligula", cat:"rome", w:7,
  dates:"AD 12 – 41 (r. AD 37–41)",
  desc:`The erratic emperor who ordered his own statue erected in the Jerusalem Temple — a crisis averted only by his assassination. He gave his friend Herod Agrippa I a kingdom. Not named in the New Testament.`,
  refs:["Not named in the NT"]},

 {id:"claudius", name:"Claudius", short:"Claudius", cat:"rome", w:8,
  dates:"10 BC – AD 54 (r. AD 41–54)",
  desc:`Emperor across much of Acts. A famine "over all the world" is dated to his reign, and his expulsion of Jews from Rome (c. AD 49) drove Priscilla and Aquila to Corinth, where Paul met them.`,
  refs:["Acts 11:28","Acts 18:2"]},

 {id:"nero", name:"Nero", short:"Nero", cat:"rome", w:10,
  dates:"AD 37 – 68 (r. AD 54–68)",
  desc:`The Caesar to whom Paul, as a Roman citizen, appealed. After the Great Fire of Rome (AD 64) he made the Christians his scapegoats, launching the first imperial persecution — the setting for the traditional martyrdoms of Peter and Paul.`,
  refs:["Acts 25:10–12","Acts 27:24"]},

 {id:"vespasian", name:"Vespasian", short:"Vespasian", cat:"rome", w:7,
  dates:"AD 9 – 79 (r. AD 69–79)",
  desc:`The general sent to crush the Jewish revolt of AD 66. Proclaimed emperor in AD 69, he left the siege of Jerusalem to his son Titus and founded the Flavian dynasty. Not named in the New Testament.`,
  refs:["Not named in the NT"]},

 {id:"titusemperor", name:"Titus (Emperor)", short:"Titus (Emperor)", cat:"rome", w:8,
  clash:"Titus", clashtag:"The Roman general, later emperor, who destroyed Jerusalem and the Temple in AD 70.",
  dates:"AD 39 – 81 (r. AD 79–81)",
  desc:`The Roman commander who captured Jerusalem and burned the Temple in AD 70 — the catastrophe Jesus had foretold. He later succeeded his father Vespasian as emperor.`,
  notconfused:`Titus, Paul's Greek co-worker and the recipient of the epistle to Titus — an entirely different man.`,
  refs:["Not named in the NT (cf. Luke 21:5–6, 20–24)"]},

 {id:"domitian", name:"Domitian", short:"Domitian", cat:"rome", w:8,
  dates:"AD 51 – 96 (r. AD 81–96)",
  desc:`The last Flavian emperor. By the dominant early tradition (Irenaeus), it was near the end of his reign, c. AD 95, that John was exiled to Patmos and wrote Revelation. Not named in the New Testament.`,
  refs:["Not named in the NT (cf. Revelation 1:9)"]},

 {id:"gallio", name:"Gallio", short:"Gallio", cat:"rome", w:7,
  dates:"proconsul of Achaia c. AD 51–52",
  desc:`Roman proconsul of Achaia, before whom Paul was hauled at Corinth; he refused to hear the case. An inscription at Delphi fixing his term gives the single firmest anchor in Paul's chronology.`,
  refs:["Acts 18:12–17"]},

 {id:"felix", name:"Antonius Felix", short:"Felix", cat:"rome", w:8,
  dates:"procurator of Judea c. AD 52–59",
  desc:`Roman governor at Caesarea who kept Paul imprisoned for two years — trembling as Paul reasoned about righteousness and judgment, yet hoping all the while for a bribe.`,
  refs:["Acts 23:24–24:27"]},

 {id:"festus", name:"Porcius Festus", short:"Festus", cat:"rome", w:8,
  dates:"procurator of Judea c. AD 59–62",
  desc:`Felix's successor. Before him Paul made his defence and, as a citizen, appealed to Caesar — sending himself to Rome. "You are out of your mind, Paul!" he exclaimed.`,
  refs:["Acts 25:1–26:32"]},

 {id:"sergiuspaulus", name:"Sergius Paulus", short:"Sergius Paulus", cat:"rome", w:7,
  dates:"1st c. AD",
  desc:`The Roman proconsul of Cyprus, an intelligent man who came to faith through Paul and Barnabas after the sorcerer Elymas was struck blind — the scene where Saul is first called "Paul."`,
  refs:["Acts 13:6–12"]},
];

/* ---------- LINKS ---------- */
const LG = { // link kind -> color group + css var
  fam:"var(--tie-fam)", disc:"var(--tie-disc)", min:"var(--tie-min)", conf:"var(--tie-conf)", spec:"var(--tie-spec)", rule:"var(--tie-rule)"
};
// dashed = calling & succession; dotted = possible / disputed / traditional tie
const UNSURE_RE = /possibl|disput|traditio/i;
const linkDash = d => UNSURE_RE.test(d.note||"") ? "1 4" : d.kind==="spec" ? "6 4" : null;
function lk(source,target,kind,type,note){ return {source,target,kind,type,note}; }
const NT_LINKS = [
 // family
 lk("joachim","anne","fam","married",""),
 lk("joachim","mary","fam","father of",""),
 lk("anne","mary","fam","mother of",""),
 lk("mary","joseph","fam","married",""),
 lk("joseph","jesus","fam","legal father of","by law, of David's line"),
 lk("mary","jesus","fam","mother of",""),
 lk("jesus","jamesjust","fam","brother of",""),
 lk("jesus","jude","fam","brother of",""),
 lk("jesus","joses","fam","brother of",""),
 lk("jesus","simonbro","fam","brother of",""),
 lk("zechariah","elizabeth","fam","married",""),
 lk("zechariah","johnbaptist","fam","father of",""),
 lk("elizabeth","johnbaptist","fam","mother of",""),
 lk("mary","elizabeth","fam","kinswoman of","so John was Jesus' relative"),
 lk("maryclopas","jamesalph","fam","mother of","(James the younger)"),
 lk("maryclopas","mary","fam","kin of","possibly her sister — John 19:25 is ambiguous"),
 lk("zebedee","salome","fam","married","(by comparing the Gospels)"),
 lk("zebedee","jameszeb","fam","father of",""),
 lk("zebedee","johnapostle","fam","father of",""),
 lk("salome","jameszeb","fam","mother of",""),
 lk("salome","johnapostle","fam","mother of",""),
 lk("salome","mary","fam","kin of","possibly her sister (a tradition)"),
 // the Twelve — internal
 lk("peter","andrew","fam","brother of",""),
 lk("jameszeb","johnapostle","fam","brother of",""),
 lk("johnbaptist","andrew","disc","first teacher of","Andrew followed John first"),
 lk("philip","bartholomew","disc","brought in","'come and see' (Nathanael)"),
 lk("matthew","jamesalph","fam","possibly brother of","both called 'son of Alphaeus'"),
 // Jesus calls the Twelve
 lk("jesus","peter","disc","called",""),
 lk("jesus","andrew","disc","called",""),
 lk("jesus","jameszeb","disc","called",""),
 lk("jesus","johnapostle","disc","called",""),
 lk("jesus","philip","disc","called",""),
 lk("jesus","bartholomew","disc","called",""),
 lk("jesus","thomas","disc","called",""),
 lk("jesus","matthew","disc","called",""),
 lk("jesus","jamesalph","disc","called",""),
 lk("jesus","thaddaeus","disc","called",""),
 lk("jesus","simonzealot","disc","called",""),
 lk("jesus","judasisc","conf","betrayed by","for thirty pieces of silver"),
 lk("jesus","matthias","spec","later chosen","to replace Judas"),
 lk("matthias","judasisc","spec","replaced",""),
 // followers / friends of Jesus
 lk("jesus","marymagdalene","min","follower","first witness of the resurrection"),
 lk("jesus","marybethany","min","friend of",""),
 lk("jesus","martha","min","friend of",""),
 lk("jesus","lazarus","min","raised from death",""),
 lk("martha","marybethany","fam","sister of",""),
 lk("martha","lazarus","fam","sister of",""),
 lk("marybethany","lazarus","fam","sister of",""),
 lk("jesus","simoncyrene","min","cross carried by",""),
 lk("marymark","johnmark","fam","mother of",""),
 lk("peter","marymark","min","sheltered by","her house church"),
 // early church
 lk("jesus","paul","spec","called (in a vision)","on the road to Damascus"),
 lk("paul","barnabas","min","partner of","first missionary journey"),
 lk("barnabas","johnmark","fam","cousin of",""),
 lk("paul","johnmark","min","co-worker of","split, then reconciled"),
 lk("peter","johnmark","disc","mentor of","'my son Mark'"),
 lk("paul","timothy","disc","mentor of","'my true child in the faith'"),
 lk("eunice","timothy","fam","mother of",""),
 lk("lois","eunice","fam","mother of","Timothy's grandmother"),
 lk("paul","titus","disc","mentor of",""),
 lk("paul","silas","min","co-worker of","second journey"),
 lk("paul","luke","min","co-worker of","'the beloved physician'"),
 lk("paul","priscilla","min","co-worker of",""),
 lk("paul","aquila","min","co-worker of",""),
 lk("priscilla","aquila","fam","married",""),
 lk("priscilla","apollos","disc","instructed",""),
 lk("aquila","apollos","disc","instructed",""),
 lk("paul","apollos","min","co-worker of","both taught at Corinth"),
 lk("paul","philemon","min","co-worker of",""),
 lk("philemon","onesimus","min","master of","urged to receive him as a brother"),
 lk("paul","onesimus","disc","converted","in prison"),
 lk("paul","phoebe","min","co-worker of","she carried Romans"),
 lk("paul","lydia","min","convert","first believer in Europe"),
 lk("paul","stephen","conf","approved his death","Saul, before his conversion"),
 lk("stephen","philipevang","min","fellow deacon of","among the Seven"),
 lk("jamesjust","peter","min","fellow leader of","the Jerusalem church"),
 lk("jamesjust","paul","min","fellow leader of","Council of Jerusalem"),
 lk("simonmagus","peter","conf","rebuked by","tried to buy the Spirit"),
 lk("simonmagus","philipevang","min","baptized by","then went astray"),
 // rulers & authorities
 lk("herodgreat","jesus","conf","sought to kill","massacre of the innocents"),
 lk("herodgreat","herodantipas","fam","father of",""),
 lk("herodgreat","herodagrippa1","fam","grandfather of",""),
 lk("herodantipas","johnbaptist","conf","executed","beheaded"),
 lk("herodantipas","jesus","conf","questioned",""),
 lk("herodagrippa1","jameszeb","conf","executed","first apostle martyred"),
 lk("pilate","jesus","conf","sentenced",""),
 lk("caiaphas","jesus","conf","condemned",""),
 lk("annas","caiaphas","fam","father-in-law of",""),
 lk("annas","jesus","conf","interrogated",""),

 // ---- Roman Empire ----
 // imperial succession
 lk("augustus","tiberius","spec","succeeded by",""),
 lk("tiberius","caligula","spec","succeeded by",""),
 lk("caligula","claudius","spec","succeeded by",""),
 lk("claudius","nero","spec","succeeded by",""),
 lk("nero","vespasian","spec","succeeded by","after the civil war of AD 69"),
 lk("vespasian","titusemperor","fam","father of",""),
 lk("titusemperor","domitian","spec","succeeded by","his brother"),
 // emperors over the story
 lk("augustus","herodgreat","rule","overlord of","Herod ruled as client king"),
 lk("augustus","jesus","rule","census at his birth","Luke 2:1"),
 lk("tiberius","pilate","rule","appointed",""),
 lk("tiberius","jesus","rule","reigned during his ministry","Luke 3:1"),
 lk("caligula","herodagrippa1","rule","gave him his kingdom",""),
 lk("claudius","aquila","rule","expelled from Rome","c. AD 49"),
 lk("claudius","priscilla","rule","expelled from Rome","c. AD 49"),
 lk("nero","paul","conf","appealed to him; martyred under him",""),
 lk("nero","peter","conf","martyred under him (tradition)",""),
 lk("domitian","johnapostle","conf","exiled him to Patmos (tradition)","c. AD 95"),
 // provincial governors & Paul
 lk("gallio","paul","rule","dismissed the charges","Acts 18"),
 lk("felix","paul","rule","held him two years","Acts 24"),
 lk("festus","paul","rule","heard his appeal to Caesar","Acts 25"),
 lk("sergiuspaulus","paul","min","believed through him","Acts 13"),
];

/* ---------- TIMELINE DATA ---------- */
const NT_EVENTS = [
 {y:-4,  label:"Death of Herod the Great"},
 {y:-5,  label:"Birth of Jesus (c.)"},
 {y:27,  label:"Jesus baptized · ministry begins"},
 {y:30,  label:"Crucifixion, Resurrection & Pentecost", note:"30 or 33 — disputed"},
 {y:34,  label:"Stoning of Stephen"},
 {y:35,  label:"Conversion of Saul (Paul)"},
 {y:44,  label:"Martyrdom of James (son of Zebedee)"},
 {y:49,  label:"Council of Jerusalem"},
 {y:52,  label:"Paul before Gallio at Corinth", note:"anchors Paul's dates"},
 {y:62,  label:"Martyrdom of James the Just"},
 {y:64,  label:"Neronian persecution · Peter & Paul martyred", note:"c. 64–67"},
 {y:70,  label:"Destruction of the Temple"},
 {y:95,  label:"Revelation written (traditional)"},
];
// lifespans: {id, s(start), e(end), uS(uncertain start), uE(uncertain end)}
const NT_LIVES = [
 {id:"augustus",     s:-12, e:14, tenure:true, lab:"reigned", uS:true},
 {id:"tiberius",     s:14,  e:37, tenure:true, lab:"reigned"},
 {id:"caligula",     s:37,  e:41, tenure:true, lab:"reigned"},
 {id:"claudius",     s:41,  e:54, tenure:true, lab:"reigned"},
 {id:"nero",         s:54,  e:68, tenure:true, lab:"reigned"},
 {id:"vespasian",    s:69,  e:79, tenure:true, lab:"reigned"},
 {id:"titusemperor", s:79,  e:81, tenure:true, lab:"reigned"},
 {id:"domitian",     s:81,  e:96, tenure:true, lab:"reigned"},
 {id:"herodgreat",   s:-73, e:-4},
 {id:"herodantipas", s:-20, e:39, uS:true, uE:true},
 {id:"pilate",       s:26,  e:36, tenure:true},
 {id:"mary",         s:-18, e:48, uS:true, uE:true},
 {id:"johnbaptist",  s:-5,  e:29},
 {id:"jesus",        s:-5,  e:30},
 {id:"peter",        s:1,   e:65, uS:true, uE:true},
 {id:"jameszeb",     s:3,   e:44, uS:true},
 {id:"johnapostle",  s:6,   e:100, uS:true, uE:true},
 {id:"jamesjust",    s:1,   e:62, uS:true},
 {id:"paul",         s:5,   e:65, uS:true, uE:true},
 {id:"stephen",      s:5,   e:35, uS:true},
 {id:"luke",         s:10,  e:84, uS:true, uE:true},
 {id:"johnmark",     s:12,  e:68, uS:true, uE:true},
 {id:"timothy",      s:17,  e:97, uS:true, uE:true},
];

const NT_META = {
  kicker:"A relational map",
  title:"People of the New Testament",
  subtitle:"Family, the Twelve, followers, and the church that carried the ministry on — and who is who among the many Johns, Jameses, and Marys.",
  graphLabel:"Relationship network of New Testament figures",
  hub:"jesus",
  centroids:{ family:[.24,.36], twelve:[.52,.34], follow:[.36,.72], church:[.76,.48], rulers:[.55,.87], rome:[.87,.80] },
  legend:[["--tie-fam","Bloodline & marriage"],["--tie-disc","Discipleship"],["--tie-min","Ministry & fellowship"],["--tie-conf","Conflict & betrayal"],["--tie-spec","Calling & succession","dash"],["--tie-rule","Roman authority"],["--muted","Possible / traditional","dot"]],
  clashNames:["John","James","Mary","Simon","Judas","Titus"],
  clashSub:{
    John:"Three men, one name — the forerunner, the apostle, and the evangelist.",
    James:"Three prominent Jameses — two apostles and the Lord's brother.",
    Mary:"Five Marys stand close together in the Gospels.",
    Simon:"Several Simons — an apostle-leader, a zealot, brothers, bystanders.",
    Judas:"Two faithful men share the name of the betrayer.",
    Titus:"Paul's Greek helper and the emperor who razed Jerusalem share the name."
  },
  tlTitle:"A rough chronology, c. 5 BC – AD 100",
  tlCaption:"All dates are scholarly estimates; the crucifixion (AD 30 or 33) and most lifespans are debated. Dashed ends mark greater uncertainty.",
  tlDomain:[-12,108],
  tlTicks:[-10,-1,10,25,50,75,100]
};

/* ================= OLD TESTAMENT DATASET ================= */
const OT_CAT = {
  prim:  {label:"Creation & Flood",      color:"var(--prim)"},
  line:  {label:"Genealogies",           color:"var(--line)"},
  patri: {label:"Patriarchs & Matriarchs", color:"var(--patri)"},
  tribe: {label:"House of Jacob",        color:"var(--tribe)"},
  kin:   {label:"Wider Family & Kin",    color:"var(--kin)"},
  exod:  {label:"Exodus & Wilderness",   color:"var(--exod)"},
  priest:{label:"Priests & Levites",     color:"var(--priest)"},
  lead:  {label:"Tribal Leaders",        color:"var(--lead)"},
  judg:  {label:"Conquest & Judges",     color:"var(--judg)"},
  king:  {label:"Kings of Israel & Judah",color:"var(--king)"},
  proph: {label:"The Prophets",          color:"var(--proph)"},
  exile: {label:"Exile & Return",        color:"var(--exile)"},
  natn:  {label:"Foreign Nations",       color:"var(--natn)"},
};

const OT_PEOPLE = [
 // ================= GENESIS =================
 // Sourced chapter-by-chapter from the NIV on bible.com (Genesis 1–50).
 // Lifespans in `dates` are the figures Genesis itself gives; absolute BC dates
 // for the patriarchs are traditional estimates only.

 // ---------------- CREATION & FLOOD (Genesis 1–11) ----------------
 {id:"adam", name:"Adam", short:"Adam", cat:"prim", w:13,
  aliases:"the man formed from the dust",
  dates:"primeval · lived 930 years (Genesis 5:5)",
  desc:`The first man, formed by the LORD God "from the dust of the ground" and put in the Garden of Eden "to work it and take care of it." He names the animals, and God makes the woman from his rib. When he eats from the tree of the knowledge of good and evil, the ground is cursed because of him and he is banished from Eden. Father of Cain, Abel and Seth, and of "other sons and daughters."`,
  refs:["Genesis 1:26–31","Genesis 2","Genesis 3","Genesis 4:1–2","Genesis 4:25","Genesis 5:1–5"]},

 {id:"eve", name:"Eve", short:"Eve", cat:"prim", w:11,
  aliases:"the woman · mother of all the living",
  dates:"primeval",
  desc:`The first woman, made by the LORD God from the man's rib as "a helper suitable for him." Deceived by the serpent, she eats from the forbidden tree and gives some to her husband. Adam names her Eve "because she would become the mother of all the living." She bears Cain, then Abel, and later Seth: "God has granted me another child in place of Abel."`,
  refs:["Genesis 2:18–25","Genesis 3","Genesis 4:1–2","Genesis 4:25"]},

 {id:"cain", name:"Cain", short:"Cain", cat:"prim", w:9,
  dates:"primeval",
  desc:`The firstborn of Adam and Eve, who worked the soil. When the LORD looked with favor on Abel's offering but not on his, Cain was very angry; he attacked his brother in the field and killed him — "Am I my brother's keeper?" Driven out as "a restless wanderer," he is given a mark so that no one will kill him, settles in the land of Nod, east of Eden, and builds a city named after his son Enoch.`,
  refs:["Genesis 4:1–17"]},

 {id:"abel", name:"Abel", short:"Abel", cat:"prim", w:8,
  dates:"primeval",
  desc:`The second son of Adam and Eve, who kept flocks. The LORD looked with favor on his offering of "fat portions from some of the firstborn of his flock." His brother Cain killed him in the field, and the LORD says, "Your brother's blood cries out to me from the ground."`,
  refs:["Genesis 4:2–11","Genesis 4:25"]},

 {id:"seth", name:"Seth", short:"Seth", cat:"prim", w:8,
  dates:"primeval · lived 912 years (Genesis 5:8)",
  desc:`Born to Adam and Eve after Abel's death, when Adam was 130 — "in his own likeness, in his own image." Father of Enosh; "at that time people began to call on the name of the LORD." The family line from Adam to Noah in Genesis 5 runs through him.`,
  refs:["Genesis 4:25–26","Genesis 5:3–8"]},

 {id:"enoch", name:"Enoch son of Jared", short:"Enoch", cat:"prim", w:7,
  clash:"Enoch", clashtag:"Son of Jared in Seth's line, who 'walked faithfully with God' and was taken away by God at 365.",
  dates:"primeval · 365 years (Genesis 5:23)",
  desc:`A descendant of Seth and father of Methuselah. Genesis twice says he "walked faithfully with God," and instead of the usual "and then he died" records: "then he was no more, because God took him away."`,
  notconfused:`Enoch son of Cain, after whom Cain named the city he was building (Genesis 4:17).`,
  refs:["Genesis 5:18–24"]},

 {id:"noah", name:"Noah", short:"Noah", cat:"prim", w:14, halo:1,
  clash:"Noah", clashtag:"The righteous man who built the ark and survived the flood with his family.",
  notconfused:`Noah daughter of Zelophehad, of the tribe of Manasseh (Numbers 27:1).`,
  dates:"primeval · lived 950 years (Genesis 9:29)",
  desc:`"A righteous man, blameless among the people of his time," who "walked faithfully with God" when the earth was "full of violence." Warned of the flood, he builds the ark and enters it with his wife, his sons Shem, Ham and Japheth and their wives, and the animals. Afterward he builds an altar, and God establishes his covenant with him and every living creature, setting the rainbow as its sign. Later he plants a vineyard, becomes drunk, and curses Canaan.`,
  refs:["Genesis 5:28–32","Genesis 6–9"]},

 {id:"shem", name:"Shem", short:"Shem", cat:"prim", w:9,
  dates:"primeval · lived 600 years (100 + 500, Genesis 11:10–11)",
  desc:`A son of Noah, who with Japheth walks in backward to cover their father's nakedness and receives Noah's blessing: "Praise be to the LORD, the God of Shem!" Genesis calls him "the ancestor of all the sons of Eber," and his family line in Genesis 11 runs to Terah and Abram.`,
  refs:["Genesis 9:18–27","Genesis 10:21–31","Genesis 11:10–26"]},

 {id:"ham", name:"Ham", short:"Ham", cat:"prim", w:8,
  dates:"primeval",
  desc:`A son of Noah and "the father of Canaan." He sees his father lying drunk and uncovered and tells his two brothers; when Noah learns "what his youngest son had done to him," he curses Canaan. In the Table of Nations his sons are Cush, Egypt, Put and Canaan — the line that includes Nimrod and the Canaanite clans.`,
  refs:["Genesis 9:18–27","Genesis 10:6–20"]},

 {id:"japheth", name:"Japheth", short:"Japheth", cat:"prim", w:7,
  dates:"primeval",
  desc:`A son of Noah and, per Genesis 10:21, Shem's older brother. With Shem he covers their father, and Noah blesses him: "May God extend Japheth's territory." His sons were Gomer, Magog, Madai, Javan, Tubal, Meshek and Tiras; from them "the maritime peoples spread out into their territories."`,
  refs:["Genesis 9:18–27","Genesis 10:2–5","Genesis 10:21"]},

 {id:"canaan_p", name:"Canaan son of Ham", short:"Canaan", cat:"prim", w:6,
  dates:"primeval",
  desc:`A son of Ham, on whom Noah's curse falls: "Cursed be Canaan! The lowest of slaves will he be to his brothers." He is the father of Sidon his firstborn and of the Hittites, Jebusites, Amorites, Girgashites, Hivites and other clans whose borders reached from Sidon toward Gaza and Sodom.`,
  notconfused:`The land of Canaan, named for the clans descended from him and later promised to Abram's offspring (Genesis 12:7).`,
  refs:["Genesis 9:18–27","Genesis 10:15–19"]},

 {id:"nimrod", name:"Nimrod", short:"Nimrod", cat:"prim", w:7,
  dates:"primeval",
  desc:`A son of Cush, son of Ham, "who became a mighty warrior on the earth" — "a mighty hunter before the LORD." The first centers of his kingdom were Babylon, Uruk, Akkad and Kalneh in Shinar; from there he went to Assyria and built Nineveh, Rehoboth Ir, Calah and Resen.`,
  refs:["Genesis 10:8–12"]},

 // ---------------- GENEALOGIES (names known only from the family lists) ----------------
 // Cain's line (Genesis 4)
 {id:"enoch_cain", name:"Enoch son of Cain", short:"Enoch (Cain's son)", cat:"line", w:5,
  clash:"Enoch", clashtag:"Cain's son, after whom Cain named the city he was building.",
  dates:"primeval",
  desc:`Cain's son, after whom Cain named the city he was building. Through Irad, Mehujael and Methushael his line leads to Lamech.`,
  notconfused:`Enoch son of Jared, in Seth's line, who "walked faithfully with God" and was taken away by God (Genesis 5:24).`,
  refs:["Genesis 4:17–18"]},

 {id:"lamech_cain", name:"Lamech son of Methushael", short:"Lamech (Cain's line)", cat:"line", w:6,
  clash:"Lamech", clashtag:"A descendant of Cain who married Adah and Zillah and boasted to them of killing a man.",
  dates:"primeval",
  desc:`A descendant of Cain who married two women, Adah and Zillah. He boasts to them: "I have killed a man for wounding me, a young man for injuring me. If Cain is avenged seven times, then Lamech seventy-seven times."`,
  notconfused:`Lamech son of Methuselah, in Seth's line, the father of Noah (Genesis 5:25–31).`,
  refs:["Genesis 4:18–24"]},

 {id:"adah", name:"Adah wife of Lamech", short:"Adah", cat:"line", w:4,
  dates:"primeval",
  desc:`One of Lamech's two wives; mother of Jabal and Jubal.`,
  notconfused:`Adah daughter of Elon the Hittite, named as a wife of Esau in Genesis 36:2.`,
  refs:["Genesis 4:19–23"]},

 {id:"zillah", name:"Zillah", short:"Zillah", cat:"line", w:4,
  dates:"primeval",
  desc:`Lamech's other wife; mother of Tubal-Cain.`,
  refs:["Genesis 4:19–23"]},

 {id:"jabal", name:"Jabal", short:"Jabal", cat:"line", w:4,
  dates:"primeval",
  desc:`Son of Adah and Lamech: "the father of those who live in tents and raise livestock."`,
  refs:["Genesis 4:20"]},

 {id:"jubal", name:"Jubal", short:"Jubal", cat:"line", w:4,
  dates:"primeval",
  desc:`Jabal's brother: "the father of all who play stringed instruments and pipes."`,
  refs:["Genesis 4:21"]},

 {id:"tubalcain", name:"Tubal-Cain", short:"Tubal-Cain", cat:"line", w:4,
  dates:"primeval",
  desc:`Son of Zillah, "who forged all kinds of tools out of bronze and iron."`,
  refs:["Genesis 4:22"]},

 {id:"naamah", name:"Naamah", short:"Naamah", cat:"line", w:4,
  clash:"Naamah", clashtag:"Tubal-Cain's sister in Cain's line.",
  dates:"primeval",
  desc:`"Tubal-Cain's sister was Naamah" — the only detail Genesis gives.`,
  refs:["Genesis 4:22"]},

 // Seth's line to Noah (Genesis 5)
 {id:"enosh", name:"Enosh", short:"Enosh", cat:"line", w:5,
  dates:"primeval · lived 905 years (Genesis 5:11)",
  desc:`Son of Seth and father of Kenan. At his birth Genesis notes, "At that time people began to call on the name of the LORD."`,
  refs:["Genesis 4:26","Genesis 5:6–11"]},

 {id:"kenan", name:"Kenan", short:"Kenan", cat:"line", w:4,
  dates:"primeval · lived 910 years (Genesis 5:14)",
  desc:`Son of Enosh and father of Mahalalel, in the line from Adam to Noah.`,
  refs:["Genesis 5:9–14"]},

 {id:"mahalalel", name:"Mahalalel", short:"Mahalalel", cat:"line", w:4,
  dates:"primeval · lived 895 years (Genesis 5:17)",
  desc:`Son of Kenan and father of Jared, in the line from Adam to Noah.`,
  refs:["Genesis 5:12–17"]},

 {id:"jared", name:"Jared", short:"Jared", cat:"line", w:4,
  dates:"primeval · lived 962 years (Genesis 5:20)",
  desc:`Son of Mahalalel and father of Enoch, in the line from Adam to Noah.`,
  refs:["Genesis 5:15–20"]},

 {id:"methuselah", name:"Methuselah", short:"Methuselah", cat:"line", w:5,
  dates:"primeval · lived 969 years (Genesis 5:27)",
  desc:`Son of Enoch and father of Lamech, in the line from Adam to Noah. His 969 years are the longest lifespan recorded in Scripture.`,
  refs:["Genesis 5:21–27"]},

 {id:"lamech_noah", name:"Lamech son of Methuselah", short:"Lamech", cat:"line", w:5,
  clash:"Lamech", clashtag:"Son of Methuselah and father of Noah, who hoped his son would 'comfort us' in their toil on the cursed ground.",
  dates:"primeval · lived 777 years (Genesis 5:31)",
  desc:`Son of Methuselah. At 182 he has a son and names him Noah, saying, "He will comfort us in the labor and painful toil of our hands caused by the ground the LORD has cursed."`,
  notconfused:`Lamech son of Methushael, in Cain's line, who boasted of killing a man (Genesis 4:18–24).`,
  refs:["Genesis 5:25–31"]},

 // Shem's line to Abram (Genesis 10–11)
 {id:"arphaxad", name:"Arphaxad", short:"Arphaxad", cat:"line", w:4,
  dates:"primeval · lived 438 years (35 + 403, Genesis 11:12–13)",
  desc:`Son of Shem, born "two years after the flood," and father of Shelah.`,
  refs:["Genesis 10:22–24","Genesis 11:10–13"]},

 {id:"shelah_a", name:"Shelah son of Arphaxad", short:"Shelah", cat:"line", w:4,
  clash:"Shelah", clashtag:"Son of Arphaxad and father of Eber, in Shem's line to Abram.",
  dates:"primeval · lived 433 years (30 + 403, Genesis 11:14–15)",
  desc:`Son of Arphaxad and father of Eber, in Shem's line to Abram.`,
  notconfused:`Shelah son of Judah, the son Judah withheld from Tamar (Genesis 38).`,
  refs:["Genesis 10:24","Genesis 11:12–15"]},

 {id:"eber", name:"Eber", short:"Eber", cat:"line", w:5,
  dates:"primeval · lived 464 years (34 + 430, Genesis 11:16–17)",
  desc:`Son of Shelah; Genesis calls Shem "the ancestor of all the sons of Eber." He had two sons: Peleg, through whom the line continues to Abram, and Joktan, whose thirteen sons lived "in the eastern hill country."`,
  refs:["Genesis 10:21","Genesis 10:24–30","Genesis 11:14–17"]},

 {id:"peleg", name:"Peleg", short:"Peleg", cat:"line", w:4,
  dates:"primeval · lived 239 years (30 + 209, Genesis 11:18–19)",
  desc:`Son of Eber, "named Peleg, because in his time the earth was divided." Father of Reu.`,
  refs:["Genesis 10:25","Genesis 11:16–19"]},

 {id:"reu", name:"Reu", short:"Reu", cat:"line", w:4,
  dates:"primeval · lived 239 years (32 + 207, Genesis 11:20–21)",
  desc:`Son of Peleg and father of Serug, in Shem's line to Abram.`,
  refs:["Genesis 11:18–21"]},

 {id:"serug", name:"Serug", short:"Serug", cat:"line", w:4,
  dates:"primeval · lived 230 years (30 + 200, Genesis 11:22–23)",
  desc:`Son of Reu and father of Nahor, in Shem's line to Abram.`,
  refs:["Genesis 11:20–23"]},

 {id:"nahor_elder", name:"Nahor son of Serug", short:"Nahor (Terah's father)", cat:"line", w:4,
  clash:"Nahor", clashtag:"Son of Serug and father of Terah — Abram's grandfather.",
  dates:"primeval · lived 148 years (29 + 119, Genesis 11:24–25)",
  desc:`Son of Serug and father of Terah, which makes him Abram's grandfather. Abram's brother bears the same name.`,
  notconfused:`Nahor son of Terah, Abraham's brother and Rebekah's grandfather (Genesis 11:26–29).`,
  refs:["Genesis 11:22–25"]},

 // ---------------- PATRIARCHS & MATRIARCHS (Genesis 12–50) ----------------
 {id:"abraham", name:"Abraham", short:"Abraham", cat:"patri", w:16, halo:1,
  aliases:"Abram · father of many nations",
  dates:"c. 2000 BC (traditional) · lived 175 years (Genesis 25:7)",
  desc:`Son of Terah, brought by the LORD "out of Ur of the Chaldeans" and told to go "to the land I will show you," with the promise: "I will make you into a great nation … and all peoples on earth will be blessed through you." He "believed the LORD, and he credited it to him as righteousness." Renamed Abraham at the covenant of circumcision, he fathers Ishmael by Hagar and, at a hundred, Isaac by Sarah — then is tested when God tells him to sacrifice Isaac in the region of Moriah. He is buried with Sarah in the cave of Machpelah.`,
  refs:["Genesis 11:26–32","Genesis 12","Genesis 15","Genesis 17","Genesis 22","Genesis 25:1–11"]},

 {id:"sarah", name:"Sarah", short:"Sarah", cat:"patri", w:12,
  aliases:"Sarai",
  dates:"c. 2000 BC (traditional) · lived 127 years (Genesis 23:1)",
  desc:`Abraham's wife — and, he tells Abimelek, "the daughter of my father though not of my mother." Childless, she gives her Egyptian slave Hagar to Abram to build a family through her. Twice passed off as Abraham's sister — to Pharaoh and to Abimelek — she laughs at the promise of a son in her old age, then bears Isaac: "God has brought me laughter." She dies at Hebron and is buried in the cave of Machpelah.`,
  refs:["Genesis 11:29–31","Genesis 12:10–20","Genesis 16","Genesis 17:15–21","Genesis 18:1–15","Genesis 20","Genesis 21:1–12","Genesis 23"]},

 {id:"isaac", name:"Isaac", short:"Isaac", cat:"patri", w:13,
  dates:"c. 1900 – 1720 BC (traditional) · lived 180 years (Genesis 35:28)",
  desc:`The son born to Abraham at a hundred and to Sarah in her old age. Bound on the altar in the region of Moriah, he is spared when God provides a ram. At forty he marries Rebekah, and at sixty becomes father of the twins Esau and Jacob. Like his father he calls his wife his sister at Gerar and makes a treaty with Abimelek; in old age, his eyes weak, he is deceived into blessing Jacob instead of Esau. His sons Esau and Jacob bury him.`,
  refs:["Genesis 21:1–8","Genesis 22","Genesis 24","Genesis 25:19–28","Genesis 26","Genesis 27","Genesis 35:27–29"]},

 {id:"rebekah", name:"Rebekah", short:"Rebekah", cat:"patri", w:11,
  dates:"c. 1900 BC (traditional)",
  desc:`Daughter of Bethuel and granddaughter of Abraham's brother Nahor. At the spring she offers Abraham's servant, "I'll draw water for your camels too," and when asked to go with him answers, "I will go." She becomes Isaac's wife; childless until Isaac prays, she is told "the older will serve the younger" and bears Esau and Jacob. She loves Jacob, helps him take Esau's blessing, and sends him to her brother Laban.`,
  refs:["Genesis 22:23","Genesis 24","Genesis 25:19–28","Genesis 26:7–11","Genesis 27","Genesis 49:31"]},

 {id:"jacob", name:"Jacob", short:"Jacob", cat:"patri", w:15, halo:1,
  aliases:"Israel",
  dates:"c. 1840 – 1693 BC (traditional) · lived 147 years (Genesis 47:28)",
  desc:`Esau's younger twin, born "with his hand grasping Esau's heel." He buys Esau's birthright for stew and, with Rebekah's help, takes his blessing. Fleeing to Laban, he dreams of a stairway to heaven at Bethel, serves fourteen years for Leah and Rachel, and fathers twelve sons and a daughter. At the Jabbok a man wrestles with him till daybreak and renames him Israel, "because you have struggled with God and with humans and have overcome." In old age he goes down to Egypt, blesses his sons — "the twelve tribes of Israel" — and is buried at Machpelah.`,
  refs:["Genesis 25:19–34","Genesis 27–35","Genesis 46–50"]},

 {id:"leah", name:"Leah", short:"Leah", cat:"patri", w:10,
  dates:"c. 1840 BC (traditional)",
  desc:`Laban's older daughter, who "had weak eyes," given to Jacob by her father's deception in place of Rachel. "When the LORD saw that Leah was not loved, he enabled her to conceive": she bears Reuben, Simeon, Levi, Judah, Issachar and Zebulun, and a daughter, Dinah. She also gives her servant Zilpah to Jacob. She is buried in the cave of Machpelah.`,
  refs:["Genesis 29:16–35","Genesis 30:9–21","Genesis 49:31"]},

 {id:"rachel", name:"Rachel", short:"Rachel", cat:"patri", w:11,
  dates:"c. 1840 BC (traditional)",
  desc:`Laban's younger daughter, a shepherd, for whom Jacob served seven years that "seemed like only a few days to him because of his love for her." Long childless, she gives her servant Bilhah to Jacob, then bears Joseph: "God has taken away my disgrace." She steals her father's household gods, and dies giving birth to Benjamin on the way to Ephrath (Bethlehem), where Jacob sets a pillar over her tomb.`,
  refs:["Genesis 29:6–30","Genesis 30:1–8","Genesis 30:22–24","Genesis 31:19–35","Genesis 35:16–20"]},

 {id:"joseph_ot", name:"Joseph", short:"Joseph", cat:"patri", w:14, halo:1,
  aliases:"Zaphenath-Paneah · \"that dreamer\"",
  dates:"c. 1750 – 1640 BC (traditional) · lived 110 years (Genesis 50:26)",
  desc:`Rachel's firstborn and Jacob's favorite, given an ornate robe. His dreams of his family bowing to him stir his brothers' hatred, and they sell him to traders bound for Egypt. There he serves Potiphar, is falsely accused by Potiphar's wife and imprisoned, and interprets the dreams of Pharaoh's cupbearer and baker — then Pharaoh's own. Put in charge of the whole land of Egypt, he stores grain for the famine, tests and finally reveals himself to his brothers, and settles Jacob's family in Goshen: "You intended to harm me, but God intended it for good."`,
  notconfused:`Joseph the husband of Mary, the father-figure of Jesus in the New Testament — a different man, over a thousand years later.`,
  refs:["Genesis 30:22–24","Genesis 37","Genesis 39–45","Genesis 47–48","Genesis 50","Exodus 13:19","Joshua 24:32"]},

 // ---------------- HOUSE OF JACOB ----------------
 {id:"reuben", name:"Reuben", short:"Reuben", cat:"tribe", w:9,
  dates:"c. 18th c. BC (traditional)",
  desc:`Jacob's firstborn, by Leah. He sleeps with his father's concubine Bilhah. When his brothers plot to kill Joseph he says, "Don't shed any blood," meaning to rescue him, and later offers his own two sons as surety for Benjamin. Jacob's blessing: "Turbulent as the waters, you will no longer excel." His sons were Hanok, Pallu, Hezron and Karmi.`,
  refs:["Genesis 29:32","Genesis 35:22","Genesis 37:21–30","Genesis 42:22","Genesis 42:37","Genesis 46:8–9","Genesis 49:3–4"]},

 {id:"simeon", name:"Simeon", short:"Simeon", cat:"tribe", w:8,
  dates:"c. 18th c. BC (traditional)",
  desc:`Leah's second son. With Levi he avenges Dinah by attacking the city of Shechem and killing every male. In Egypt Joseph has him bound and held until the brothers return with Benjamin. Jacob says of Simeon and Levi, "their swords are weapons of violence."`,
  notconfused:`Simeon who took the infant Jesus in his arms at the temple (Luke 2), and Simon Peter, in the New Testament.`,
  refs:["Genesis 29:33","Genesis 34:25–31","Genesis 42:24","Genesis 43:23","Genesis 46:10","Genesis 49:5–7"]},

 {id:"levi", name:"Levi", short:"Levi", cat:"tribe", w:8,
  dates:"c. 18th c. BC (traditional) · lived 137 years (Exodus 6:16)",
  desc:`Leah's third son: "Now at last my husband will become attached to me." With Simeon he takes revenge on Shechem for Dinah, and Jacob's last words condemn their anger: "I will scatter them in Jacob." His sons were Gershon, Kohath and Merari; Moses and Aaron later come from his tribe.`,
  notconfused:`Levi the tax collector (Matthew) in the New Testament.`,
  refs:["Genesis 29:34","Genesis 34:25–31","Genesis 46:11","Genesis 49:5–7","Exodus 6:16–20"]},

 {id:"judah", name:"Judah", short:"Judah", cat:"tribe", w:11,
  dates:"c. 18th c. BC (traditional)",
  desc:`Leah's fourth son: "This time I will praise the LORD." He proposes selling Joseph to the Ishmaelites rather than killing him. Through Tamar, his daughter-in-law, he fathers the twins Perez and Zerah, admitting, "She is more righteous than I." He pledges himself for Benjamin and offers to stay as a slave in the boy's place. Jacob blesses him: "The scepter will not depart from Judah."`,
  notconfused:`Judas — the same name in Greek — including Judas Iscariot and Jude, in the New Testament.`,
  refs:["Genesis 29:35","Genesis 37:26–27","Genesis 38","Genesis 43:3–10","Genesis 44:14–34","Genesis 49:8–12"]},

 {id:"dan", name:"Dan", short:"Dan", cat:"tribe", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`Bilhah's first son, born for Rachel: "God has vindicated me." Jacob: "Dan will provide justice for his people … Dan will be a snake by the roadside." His son was Hushim.`,
  notconfused:`The town of Dan, to which Abram pursued Lot's captors (Genesis 14:14).`,
  refs:["Genesis 30:3–6","Genesis 46:23","Genesis 49:16–17"]},

 {id:"naphtali", name:"Naphtali", short:"Naphtali", cat:"tribe", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`Bilhah's second son: "I have had a great struggle with my sister, and I have won." Jacob: "Naphtali is a doe set free that bears beautiful fawns."`,
  refs:["Genesis 30:7–8","Genesis 46:24","Genesis 49:21"]},

 {id:"gad", name:"Gad", short:"Gad", cat:"tribe", w:6,
  clash:"Gad", clashtag:"Jacob's son by Zilpah, ancestor of the tribe of Gad.",
  dates:"c. 18th c. BC (traditional)",
  desc:`Zilpah's first son, born for Leah: "What good fortune!" Jacob: "Gad will be attacked by a band of raiders, but he will attack them at their heels."`,
  refs:["Genesis 30:9–11","Genesis 46:16","Genesis 49:19"]},

 {id:"asher", name:"Asher", short:"Asher", cat:"tribe", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`Zilpah's second son: "How happy I am!" Jacob: "Asher's food will be rich; he will provide delicacies fit for a king." His daughter was Serah.`,
  refs:["Genesis 30:12–13","Genesis 46:17","Genesis 49:20"]},

 {id:"issachar", name:"Issachar", short:"Issachar", cat:"tribe", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`Leah's fifth son, conceived after she traded Reuben's mandrakes to Rachel for a night with Jacob: "God has rewarded me." Jacob: "Issachar is a rawboned donkey lying down among the sheep pens."`,
  refs:["Genesis 30:14–18","Genesis 46:13","Genesis 49:14–15"]},

 {id:"zebulun", name:"Zebulun", short:"Zebulun", cat:"tribe", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`Leah's sixth son: "God has presented me with a precious gift." Jacob: "Zebulun will live by the seashore and become a haven for ships."`,
  refs:["Genesis 30:19–20","Genesis 46:14","Genesis 49:13"]},

 {id:"benjamin", name:"Benjamin", short:"Benjamin", cat:"tribe", w:9,
  aliases:"Ben-Oni",
  dates:"c. 18th c. BC (traditional)",
  desc:`Jacob's youngest son and Rachel's second, born as she died; she named him Ben-Oni, "but his father named him Benjamin." Jacob keeps him home on the first journey to Egypt; on the second, Joseph's silver cup is planted in his sack. Joseph weeps on him, and gives him five times the portion and five sets of clothes. Jacob: "Benjamin is a ravenous wolf."`,
  refs:["Genesis 35:16–18","Genesis 42–45","Genesis 46:21","Genesis 49:27"]},

 {id:"dinah", name:"Dinah", short:"Dinah", cat:"tribe", w:7,
  dates:"c. 18th c. BC (traditional)",
  desc:`Jacob's daughter by Leah. When she goes out to visit the women of the land, Shechem son of Hamor "took her and raped her," then asks to marry her. Her brothers answer deceitfully, and Simeon and Levi kill the city's men and take her from Shechem's house.`,
  refs:["Genesis 30:21","Genesis 34","Genesis 46:15"]},

 {id:"bilhah", name:"Bilhah", short:"Bilhah", cat:"tribe", w:7,
  dates:"c. 18th c. BC (traditional)",
  desc:`The servant Laban gave to Rachel, who gives her to Jacob "as a wife" so she can build a family through her. She bears Dan and Naphtali. Reuben later sleeps with her.`,
  refs:["Genesis 29:29","Genesis 30:3–8","Genesis 35:22","Genesis 35:25"]},

 {id:"zilpah", name:"Zilpah", short:"Zilpah", cat:"tribe", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`The servant Laban gave to Leah, who gives her to Jacob as a wife when she stops having children. She bears Gad and Asher.`,
  refs:["Genesis 29:24","Genesis 30:9–13","Genesis 35:26"]},

 {id:"tamar_g", name:"Tamar, Judah's daughter-in-law", short:"Tamar", cat:"tribe", w:8,
  clash:"Tamar", clashtag:"Judah's daughter-in-law, mother of Perez and Zerah.",
  dates:"c. 18th c. BC (traditional)",
  desc:`Widow of Judah's sons Er and then Onan. When Judah withholds his third son Shelah from her, she disguises herself with a veil by the road to Timnah and conceives by Judah himself, keeping his seal, cord and staff as a pledge. Accused of prostitution, she produces them, and Judah admits, "She is more righteous than I." She bears twins, Perez and Zerah.`,
  notconfused:`Tamar daughter of David (2 Samuel 13), a different woman centuries later.`,
  refs:["Genesis 38","Matthew 1:3"]},

 {id:"er", name:"Er", short:"Er", cat:"tribe", w:5,
  dates:"c. 18th c. BC (traditional)",
  desc:`Judah's firstborn, married to Tamar. He "was wicked in the LORD's sight; so the LORD put him to death."`,
  refs:["Genesis 38:3–7","Genesis 46:12"]},

 {id:"onan", name:"Onan", short:"Onan", cat:"tribe", w:5,
  dates:"c. 18th c. BC (traditional)",
  desc:`Judah's second son, told to fulfill his duty as a brother-in-law and raise offspring for Er. He refuses to provide offspring for his brother, and the LORD puts him to death also.`,
  refs:["Genesis 38:4–10","Genesis 46:12"]},

 {id:"shelah_j", name:"Shelah son of Judah", short:"Shelah (Judah's son)", cat:"tribe", w:5,
  clash:"Shelah", clashtag:"Judah's third son, whom Judah withheld from Tamar, fearing he would die like his brothers.",
  dates:"c. 18th c. BC (traditional)",
  desc:`Judah's third son, born at Kezib. Judah tells Tamar to wait until Shelah grows up, but withholds him, thinking, "He may die too, just like his brothers."`,
  notconfused:`Shelah son of Arphaxad, in Shem's line to Abram (Genesis 11:12–15).`,
  refs:["Genesis 38:5","Genesis 38:11–14","Genesis 38:26","Genesis 46:12"]},

 {id:"perez", name:"Perez", short:"Perez", cat:"tribe", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`Twin son of Judah and Tamar who came out ahead of his brother — "So this is how you have broken out!" His sons were Hezron and Hamul. The book of Ruth traces David's line from him.`,
  refs:["Genesis 38:27–30","Genesis 46:12","Ruth 4:18–22"]},

 {id:"zerah_j", name:"Zerah son of Judah", short:"Zerah", cat:"tribe", w:5,
  dates:"c. 18th c. BC (traditional)",
  desc:`Perez's twin, who first put out his hand and had a scarlet thread tied on his wrist by the midwife, but was born second.`,
  notconfused:`Zerah son of Reuel, a grandson of Esau (Genesis 36:13), and Zerah of Bozrah, father of the Edomite king Jobab (36:33).`,
  refs:["Genesis 38:27–30","Genesis 46:12"]},

 {id:"manasseh_j", name:"Manasseh son of Joseph", short:"Manasseh", cat:"tribe", w:7,
  clash:"Manasseh", clashtag:"Joseph's firstborn, claimed by Jacob as his own son but blessed second to his younger brother Ephraim.",
  dates:"c. 18th c. BC (traditional)",
  desc:`Joseph's firstborn by Asenath in Egypt: "It is because God has made me forget all my trouble and all my father's household." Jacob claims him and Ephraim as his own sons, but crosses his hands to put his right hand on the younger. Joseph lives to see the children of Manasseh's son Makir.`,
  notconfused:`King Manasseh of Judah, centuries later (2 Kings 21).`,
  refs:["Genesis 41:50–51","Genesis 46:20","Genesis 48","Genesis 50:23"]},

 {id:"ephraim", name:"Ephraim", short:"Ephraim", cat:"tribe", w:8,
  dates:"c. 18th c. BC (traditional)",
  desc:`Joseph's second son: "It is because God has made me fruitful in the land of my suffering." Though younger, he receives Jacob's right hand — "his younger brother will be greater than he" — and Israel is to bless by saying, "May God make you like Ephraim and Manasseh."`,
  refs:["Genesis 41:52","Genesis 46:20","Genesis 48","Genesis 50:23"]},

 // ---------------- WIDER FAMILY & KIN ----------------
 {id:"terah", name:"Terah", short:"Terah", cat:"kin", w:8,
  dates:"c. 21st c. BC (traditional) · lived 205 years (Genesis 11:32)",
  desc:`Son of Nahor and father of Abram, Nahor and Haran. He sets out from Ur of the Chaldeans with Abram, Sarai and his grandson Lot to go to Canaan, but they settle in Harran, where he dies. Abraham later calls Sarah "the daughter of my father though not of my mother." Joshua recalls that Terah and his family "lived beyond the Euphrates River and worshiped other gods."`,
  refs:["Genesis 11:24–32","Genesis 20:12","Joshua 24:2"]},

 {id:"haran_t", name:"Haran son of Terah", short:"Haran", cat:"kin", w:5,
  dates:"c. 21st c. BC (traditional)",
  desc:`Abram's brother and the father of Lot, Milkah and Iskah. He died in Ur of the Chaldeans while his father Terah was still alive.`,
  notconfused:`Harran, the city where Terah's family settled (Genesis 11:31) — spelled differently in the NIV.`,
  refs:["Genesis 11:26–31"]},

 {id:"nahor_b", name:"Nahor brother of Abraham", short:"Nahor", cat:"kin", w:7,
  clash:"Nahor", clashtag:"Abraham's brother, husband of Milkah and grandfather of Rebekah and Laban.",
  dates:"c. 21st c. BC (traditional)",
  desc:`Abram's brother, who married Milkah. Milkah bore him eight sons — Uz, Buz, Kemuel, Kesed, Hazo, Pildash, Jidlaph and Bethuel — and his concubine Reumah bore Tebah, Gaham, Tahash and Maakah. Abraham's servant finds Rebekah at "the town of Nahor," and Laban swears by "the God of Abraham and the God of Nahor."`,
  notconfused:`Nahor son of Serug, his grandfather (Genesis 11:22–25).`,
  refs:["Genesis 11:26–29","Genesis 22:20–24","Genesis 24:10","Genesis 31:53"]},

 {id:"milkah", name:"Milkah wife of Nahor", short:"Milkah", cat:"kin", w:5,
  clash:"Milkah", clashtag:"Daughter of Haran and wife of Abraham's brother Nahor; Rebekah's grandmother.",
  notconfused:`Milkah daughter of Zelophehad, of the tribe of Manasseh (Numbers 27:1).`,
  dates:"c. 21st c. BC (traditional)",
  desc:`Daughter of Haran and wife of Abram's brother Nahor; mother of eight sons, including Bethuel, Rebekah's father.`,
  refs:["Genesis 11:29","Genesis 22:20–23","Genesis 24:15"]},

 {id:"bethuel", name:"Bethuel", short:"Bethuel", cat:"kin", w:6,
  aliases:"Bethuel the Aramean",
  dates:"c. 20th c. BC (traditional)",
  desc:`Son of Nahor and Milkah, "the Aramean from Paddan Aram"; father of Rebekah and Laban. With Laban he answers Abraham's servant: "This is from the LORD."`,
  refs:["Genesis 22:22–23","Genesis 24:15","Genesis 24:50","Genesis 25:20","Genesis 28:2–5"]},

 {id:"laban", name:"Laban", short:"Laban", cat:"kin", w:10,
  aliases:"Laban the Aramean",
  dates:"c. 19th c. BC (traditional)",
  desc:`Rebekah's brother in Harran. He welcomes Abraham's servant, later takes in his nephew Jacob, and on the wedding night gives him Leah instead of Rachel: "It is not our custom here to give the younger daughter in marriage before the older one." Jacob says Laban changed his wages "ten times." He pursues Jacob when he flees, searches in vain for his stolen household gods, and the two make a covenant at Galeed (Mizpah).`,
  refs:["Genesis 24:29–60","Genesis 29","Genesis 30:25–43","Genesis 31"]},

 {id:"lot", name:"Lot", short:"Lot", cat:"kin", w:10,
  dates:"c. 2000 BC (traditional)",
  desc:`Son of Abram's brother Haran, who travels with Abram from Harran. When their herders quarrel he chooses the well-watered plain of the Jordan and pitches his tents near Sodom. Carried off in the war of the kings, he is rescued by Abram. Two angels later lead him, his wife and two daughters out before Sodom and Gomorrah are destroyed. Through his daughters he becomes the father of Moab and Ben-Ammi.`,
  refs:["Genesis 11:27–31","Genesis 12:4–5","Genesis 13","Genesis 14:12–16","Genesis 19"]},

 {id:"lotwife", name:"Lot's wife", short:"Lot's wife", cat:"kin", w:6,
  dates:"c. 2000 BC (traditional)",
  desc:`Led out of Sodom by the angels with Lot and their two daughters, with the warning "Don't look back." "But Lot's wife looked back, and she became a pillar of salt." Genesis does not give her name.`,
  refs:["Genesis 19:15–26","Luke 17:32"]},

 {id:"moab", name:"Moab", short:"Moab", cat:"kin", w:5,
  dates:"c. 2000 BC (traditional)",
  desc:`Son of Lot by his older daughter, born after they fled Zoar to live in a cave; "he is the father of the Moabites of today."`,
  refs:["Genesis 19:30–37"]},

 {id:"benammi", name:"Ben-Ammi", short:"Ben-Ammi", cat:"kin", w:5,
  dates:"c. 2000 BC (traditional)",
  desc:`Son of Lot by his younger daughter; "he is the father of the Ammonites of today."`,
  refs:["Genesis 19:36–38"]},

 {id:"hagar", name:"Hagar", short:"Hagar", cat:"kin", w:9,
  aliases:"Hagar the Egyptian",
  dates:"c. 2000 BC (traditional)",
  desc:`Sarai's Egyptian slave, given to Abram "to be his wife." When she conceives she despises her mistress, and flees when Sarai mistreats her. The angel of the LORD finds her by a spring and tells her to name her son Ishmael; she calls the LORD "the God who sees me." After Isaac is weaned she is sent away and wanders in the Desert of Beersheba, until God opens her eyes to a well. She later gets Ishmael a wife from Egypt.`,
  refs:["Genesis 16","Genesis 21:8–21","Genesis 25:12"]},

 {id:"ishmael", name:"Ishmael", short:"Ishmael", cat:"kin", w:9,
  clash:"Ishmael", clashtag:"Son of Abraham and Hagar, father of twelve tribal rulers.",
  dates:"c. 19th c. BC (traditional) · lived 137 years (Genesis 25:17)",
  desc:`Son of Abram and Hagar, born when Abram was eighty-six; named by the angel "for the LORD has heard of your misery." Circumcised at thirteen, he is promised to become "a great nation" and "the father of twelve rulers," though God's covenant is established with Isaac. Sent away with his mother, he grows up in the desert and becomes an archer. With Isaac he buries Abraham. His twelve sons, from Nebaioth to Kedemah, became tribal rulers. By tradition, ancestor of the Arab peoples.`,
  notconfused:`Ishmael son of Nethaniah, who assassinated Gedaliah after the fall of Jerusalem (Jeremiah 41).`,
  refs:["Genesis 16","Genesis 17:18–26","Genesis 21:8–21","Genesis 25:9","Genesis 25:12–18"]},

 {id:"keturah", name:"Keturah", short:"Keturah", cat:"kin", w:6,
  dates:"c. 2000 BC (traditional)",
  desc:`Another wife of Abraham, who bore him Zimran, Jokshan, Medan, Midian, Ishbak and Shuah. Abraham left everything to Isaac, but gave gifts to the sons of his concubines and sent them away to the land of the east.`,
  refs:["Genesis 25:1–6"]},

 {id:"esau", name:"Esau", short:"Esau", cat:"kin", w:10,
  aliases:"Edom",
  dates:"c. 1840 BC (traditional)",
  desc:`Isaac's firstborn twin — red, hairy, "a skillful hunter" and his father's favorite. Famished, he sells his birthright to Jacob for bread and lentil stew; when Jacob also takes his blessing, he plans to kill him. Twenty years later he runs to meet Jacob, embraces him and weeps. He settles in the hill country of Seir as father of the Edomites. Genesis lists his wives two ways — Judith, Basemath daughter of Elon and Mahalath daughter of Ishmael (26:34; 28:9), and Adah daughter of Elon, Oholibamah and Basemath daughter of Ishmael (36:2–3) — and his sons as Eliphaz, Reuel, Jeush, Jalam and Korah.`,
  refs:["Genesis 25:24–34","Genesis 26:34–35","Genesis 27","Genesis 28:6–9","Genesis 32–33","Genesis 36"]},

 {id:"deborah_n", name:"Deborah, Rebekah's nurse", short:"Deborah (nurse)", cat:"kin", w:5,
  clash:"Deborah", clashtag:"Rebekah's nurse, who died while Jacob's household was at Bethel and was buried under the oak outside it.",
  dates:"c. 19th c. BC (traditional)",
  desc:`Rebekah's nurse. A nurse went with Rebekah when she left home to marry Isaac (24:59); Genesis 35:8 records that "Deborah, Rebekah's nurse, died and was buried under the oak outside Bethel," at the place named Allon Bakuth.`,
  notconfused:`Deborah the prophetess and judge, who led Israel with Barak (Judges 4–5).`,
  refs:["Genesis 24:59","Genesis 35:8"]},

 {id:"abr_servant", name:"Abraham's senior servant", short:"Abraham's servant", cat:"kin", w:7,
  dates:"c. 1900 BC (traditional)",
  desc:`"The senior servant in his household, the one in charge of all that he had," sent under oath to Aram Naharaim to find a wife for Isaac among Abraham's relatives. He prays for a sign at the spring outside the town of Nahor, recognises it in Rebekah, and brings her back to Isaac.`,
  notconfused:`Eliezer of Damascus, whom the childless Abram expected to be his heir (15:2). Genesis 24 never names the servant, so identifying him as Eliezer is an assumption, not the text.`,
  refs:["Genesis 24"]},

 {id:"eliezer", name:"Eliezer of Damascus", short:"Eliezer", cat:"kin", w:5,
  clash:"Eliezer", clashtag:"The servant Abram named as his heir while he was still childless.",
  dates:"c. 2000 BC (traditional)",
  desc:`Named by the childless Abram as "the one who will inherit my estate" — "a servant in my household will be my heir." The LORD answers, "This man will not be your heir."`,
  notconfused:`Abraham's unnamed senior servant of Genesis 24, often assumed to be Eliezer — the text does not say so.`,
  refs:["Genesis 15:2–4"]},

 // ---------------- PATRIARCHAL ERA (outside Genesis) ----------------
 {id:"job", name:"Job", short:"Job", cat:"patri", w:9,
  aliases:"the man from Uz",
  dates:"patriarchal era (undated)",
  desc:`A blameless man of Uz who loses everything and wrestles, with his friends, over why the righteous suffer — the central figure of the Bible's great Wisdom poem.`,
  refs:["Job 1–2","Job 38–42"]},

 // ================= EXODUS =================
 // Sourced chapter-by-chapter from the NIV on bible.com (Exodus 1–40).

 // ---------------- EXODUS & WILDERNESS ----------------
 {id:"moses", name:"Moses", short:"Moses", cat:"exod", w:16, halo:1,
  aliases:"\"Moses the servant of the LORD\" · \"Moses the man of God\"",
  dates:"c. 1526 – 1406 BC (early-date tradition) · died at 120 (Deuteronomy 34:7)",
  desc:`Born to Levite parents, Amram and Jochebed, when Pharaoh had ordered every Hebrew boy thrown into the Nile; hidden, set in a papyrus basket, and raised as the son of Pharaoh's daughter, who named him: "I drew him out of the water." After killing an Egyptian he flees to Midian and marries Zipporah. At the burning bush God sends him to Pharaoh — "I am who I am." He leads Israel out through the plagues, the Passover and the sea, receives the Ten Commandments at Sinai, pleads for the people after the golden calf, ordains Aaron and builds the tabernacle; "The LORD would speak to Moses face to face, as one speaks to a friend." In the wilderness — "a very humble man, more humble than anyone else on the face of the earth" — he bears the people's complaints, the spies' bad report and Korah's revolt. At Meribah, told to speak to the rock, he strikes it twice, and because he and Aaron "did not trust in me enough to honor me as holy," he may not enter the land. On the plains of Moab he sets the law before Israel again (Deuteronomy), commissions Joshua, teaches the people his song and blesses the tribes, then dies on Mount Nebo at 120, "yet his eyes were not weak nor his strength gone."`,
  notconfused:`Deuteronomy 18:15 promises "a prophet like me"; Deuteronomy 34:10 adds that "no prophet has risen in Israel like Moses, whom the LORD knew face to face."`,
  refs:["Exodus 2–4","Exodus 14","Exodus 19–20","Exodus 32–34","Leviticus 8","Numbers 12","Numbers 20:1–13","Numbers 27:12–23","Deuteronomy 31–34"]},

 {id:"miriam", name:"Miriam", short:"Miriam", cat:"exod", w:9,
  aliases:"Miriam the prophet",
  dates:"c. 15th c. BC (traditional)",
  desc:`"Miriam the prophet, Aaron's sister," who after the crossing of the sea takes a timbrel and leads the women in song: "Sing to the LORD, for he is highly exalted." Exodus 2 does not name the sister who watched the infant Moses in the reeds; Miriam is the only sister of Moses and Aaron named in Scripture (Numbers 26:59). She and Aaron speak against Moses because of his Cushite wife — "Has the LORD spoken only through Moses?" — and her skin becomes leprous, "as white as snow." Moses cries, "Please, God, heal her!" and she is confined outside the camp seven days before being brought back. She dies and is buried at Kadesh. Deuteronomy 24:9: "Remember what the LORD your God did to Miriam along the way."`,
  refs:["Exodus 2:4–8","Exodus 15:20–21","Numbers 12","Numbers 20:1","Numbers 26:59","Deuteronomy 24:9"]},

 {id:"amram", name:"Amram", short:"Amram", cat:"exod", w:6,
  dates:"c. 16th c. BC (traditional) · lived 137 years (Exodus 6:20)",
  desc:`A son of Kohath, son of Levi. "Amram married his father's sister Jochebed, who bore him Aaron and Moses." Exodus 2 calls him simply "a man of the tribe of Levi."`,
  refs:["Exodus 2:1","Exodus 6:18–20","Numbers 26:59"]},

 {id:"jochebed", name:"Jochebed", short:"Jochebed", cat:"exod", w:7,
  dates:"c. 16th c. BC (traditional)",
  desc:`Amram's wife — his father's sister — and the mother of Aaron and Moses (and, per Numbers 26:59, Miriam). As Moses' mother she is the "Levite woman" of Exodus 2 who hides her baby for three months, places him in a papyrus basket among the reeds, and is then paid by Pharaoh's daughter to nurse him.`,
  refs:["Exodus 2:1–10","Exodus 6:20","Numbers 26:59"]},

 {id:"zipporah", name:"Zipporah", short:"Zipporah", cat:"exod", w:8,
  dates:"c. 15th c. BC (traditional)",
  desc:`One of the seven daughters of Reuel (Jethro), the priest of Midian, given to Moses in marriage after he rescues them at the well. She bears Gershom and Eliezer. On the way back to Egypt, when the LORD is about to kill Moses, she circumcises her son with a flint knife: "Surely you are a bridegroom of blood to me." Moses later sends her away, and Jethro brings her and her sons back to him in the wilderness.`,
  refs:["Exodus 2:16–22","Exodus 4:20–26","Exodus 18:2–6"]},

 {id:"gershom", name:"Gershom", short:"Gershom", cat:"exod", w:6,
  dates:"c. 15th c. BC (traditional)",
  desc:`Moses' son by Zipporah, born in Midian. Moses named him Gershom, saying, "I have become a foreigner in a foreign land."`,
  notconfused:`Gershon son of Levi, Moses' great-uncle, whose name differs by one letter (Exodus 6:16–17).`,
  refs:["Exodus 2:22","Exodus 18:3"]},

 {id:"eliezer_m", name:"Eliezer son of Moses", short:"Eliezer (Moses' son)", cat:"exod", w:5,
  clash:"Eliezer", clashtag:"Moses' second son by Zipporah: 'My father's God was my helper.'",
  dates:"c. 15th c. BC (traditional)",
  desc:`Moses' second son by Zipporah. Moses named him Eliezer, saying, "My father's God was my helper; he saved me from the sword of Pharaoh."`,
  notconfused:`Eliezer of Damascus, whom the childless Abram expected to be his heir (Genesis 15:2).`,
  refs:["Exodus 4:20","Exodus 18:4–6"]},

 {id:"jethro", name:"Jethro", short:"Jethro", cat:"exod", w:8,
  aliases:"Reuel · priest of Midian",
  dates:"c. 15th c. BC (traditional)",
  desc:`The priest of Midian — called Reuel when Moses first meets his seven daughters at the well — who takes Moses in and gives him his daughter Zipporah. He sends Moses back to Egypt with "Go, and I wish you well." Hearing of the exodus, he brings Zipporah and her sons to Moses, declares, "Now I know that the LORD is greater than all other gods," and offers sacrifices. Seeing Moses judge the people from morning till evening, he advises him to appoint capable officials "over thousands, hundreds, fifties and tens." Numbers 10:29 names "Hobab son of Reuel the Midianite, Moses' father-in-law."`,
  notconfused:`Reuel son of Esau (Genesis 36:4), an Edomite.`,
  refs:["Exodus 2:15–22","Exodus 3:1","Exodus 4:18","Exodus 18","Numbers 10:29"]},

 {id:"hur", name:"Hur", short:"Hur", cat:"exod", w:6,
  dates:"c. 15th c. BC (traditional)",
  desc:`With Aaron, he holds up Moses' hands on the hilltop "one on one side, one on the other" until sunset, while Joshua defeats the Amalekites. When Moses goes up Sinai he tells the elders, "Aaron and Hur are with you, and anyone involved in a dispute can go to them."`,
  notconfused:`Hur the grandfather of Bezalel, of the tribe of Judah (Exodus 31:2) — Exodus does not say whether he is the same man — and Hur, one of the five kings of Midian killed in Numbers 31:8.`,
  refs:["Exodus 17:10–12","Exodus 24:14"]},

 {id:"bezalel", name:"Bezalel", short:"Bezalel", cat:"exod", w:8,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Bezalel son of Uri, the son of Hur, of the tribe of Judah," chosen by the LORD and filled "with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills" to make the tabernacle and its furnishings. With Oholiab he is given "the ability to teach others"; he makes the ark, the table, the lampstand and the altars.`,
  refs:["Exodus 31:1–11","Exodus 35:30–36:2","Exodus 37–38"]},

 {id:"oholiab", name:"Oholiab", short:"Oholiab", cat:"exod", w:6,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Oholiab son of Ahisamak, of the tribe of Dan," appointed to help Bezalel build the tabernacle — "an engraver and designer, and an embroiderer in blue, purple and scarlet yarn and fine linen."`,
  refs:["Exodus 31:6","Exodus 35:34–36:2","Exodus 38:23"]},

 {id:"shiphrah", name:"Shiphrah", short:"Shiphrah", cat:"exod", w:6,
  dates:"c. 16th c. BC (traditional)",
  desc:`One of the two Hebrew midwives ordered by the king of Egypt to kill every newborn Hebrew boy. "The midwives, however, feared God" and let the boys live; God was kind to them and "gave them families of their own."`,
  refs:["Exodus 1:15–21"]},

 {id:"puah", name:"Puah", short:"Puah", cat:"exod", w:6,
  dates:"c. 16th c. BC (traditional)",
  desc:`The other Hebrew midwife who defied the king's order to kill the Hebrew boys. Questioned, the midwives answered, "Hebrew women are not like Egyptian women; they are vigorous and give birth before the midwives arrive."`,
  notconfused:`Puah son of Issachar (Genesis 46:13), a man of the same name.`,
  refs:["Exodus 1:15–21"]},

 {id:"korah", name:"Korah", short:"Korah", cat:"exod", w:8,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Korah son of Izhar, the son of Kohath, the son of Levi," who with the Reubenites Dathan, Abiram and On and 250 council leaders rises against Moses and Aaron: "The whole community is holy … Why then do you set yourselves above the LORD's assembly?" Moses answers, "now you are trying to get the priesthood too." The earth opens and swallows the rebels' households, fire consumes the 250 offering incense, and their bronze censers are hammered into a covering for the altar. Yet "the line of Korah, however, did not die out"; his sons were Assir, Elkanah and Abiasaph.`,
  notconfused:`Korah son of Esau, an Edomite chief (Genesis 36:5).`,
  refs:["Exodus 6:21","Exodus 6:24","Numbers 16","Numbers 26:9–11"]},

 // ---------------- PRIESTS & LEVITES ----------------
 {id:"aaron", name:"Aaron", short:"Aaron", cat:"priest", w:13, halo:1,
  aliases:"\"Aaron the Levite\" · the first priest of Israel",
  dates:"c. 1529 – 1406 BC (traditional) · died at 123 (Numbers 33:39)",
  desc:`Moses' elder brother, son of Amram and Jochebed, made his spokesman — "it will be as if he were your mouth." He stretches out his staff for the first plagues, holds up Moses' hands against the Amalekites, and sees the God of Israel on Sinai; left in charge below, he makes the golden calf — "out came this calf!" Ordained by Moses in the sacred garments, he offers the first sacrifices and blesses the people, and fire from the LORD consumes the offering; when Nadab and Abihu die for their unauthorized fire, "Aaron remained silent." He alone may enter the Most Holy Place, once a year on the Day of Atonement. In Numbers he joins Miriam in speaking against Moses; his staff alone "sprouted … budded, blossomed and produced almonds"; and with incense he "stood between the living and the dead, and the plague stopped." Barred from the land after Meribah, he dies on Mount Hor in the fortieth year, aged 123, and his garments are put on Eleazar; Deuteronomy 10:6 records his death at Moserah.`,
  refs:["Exodus 4:14–16","Exodus 28–29","Exodus 32","Leviticus 8–10","Leviticus 16","Numbers 12","Numbers 16:46–50","Numbers 17","Numbers 20:22–29","Numbers 33:38–39","Deuteronomy 10:6"]},

 {id:"elisheba", name:"Elisheba", short:"Elisheba", cat:"priest", w:6,
  dates:"c. 15th c. BC (traditional)",
  desc:`Aaron's wife, "daughter of Amminadab and sister of Nahshon" of the line of Judah, who bore him Nadab and Abihu, Eleazar and Ithamar — the first priestly family.`,
  refs:["Exodus 6:23"]},

 {id:"nadab", name:"Nadab son of Aaron", short:"Nadab", cat:"priest", w:6,
  clash:"Nadab", clashtag:"Aaron's firstborn, consumed by fire for offering unauthorized fire.",
  dates:"c. 15th c. BC (traditional)",
  desc:`Aaron's firstborn. With his father, his brother Abihu and seventy elders he goes up Sinai and they "saw the God of Israel … and they ate and drank." Consecrated as a priest, he and Abihu "took their censers … and they offered unauthorized fire before the LORD, contrary to his command. So fire came out from the presence of the LORD and consumed them." Their cousins Mishael and Elzaphan carry them out of the camp. "They had no sons."`,
  notconfused:`Nadab son of Jeroboam, a later king of Israel (1 Kings 15).`,
  refs:["Exodus 6:23","Exodus 24:1","Exodus 24:9–11","Leviticus 10:1–5","Numbers 3:2–4"]},

 {id:"abihu", name:"Abihu", short:"Abihu", cat:"priest", w:6,
  dates:"c. 15th c. BC (traditional)",
  desc:`Aaron's second son, who went up Sinai with Nadab and the seventy elders and saw the God of Israel. Consecrated as a priest, he died with Nadab when fire from the LORD consumed them for offering unauthorized fire; they left no sons.`,
  refs:["Exodus 6:23","Exodus 24:1","Exodus 24:9–11","Leviticus 10:1–5","Numbers 3:2–4"]},

 {id:"eleazar", name:"Eleazar son of Aaron", short:"Eleazar", cat:"priest", w:9,
  clash:"Eleazar", clashtag:"Aaron's son, who succeeded him as priest and helped Joshua divide the land.",
  dates:"c. 15th c. BC (traditional)",
  desc:`Aaron's third son, who with Ithamar serves as priest after Nadab and Abihu die. Numbers calls him "the chief leader of the Levites"; he hammers the rebels' censers into a covering for the altar and oversees the red heifer. On Mount Hor Moses puts Aaron's garments on him and he succeeds his father as priest. Joshua is commissioned standing before him, and he will "obtain decisions for him by inquiring of the Urim." In Joshua he and Joshua allot the land by lot at Shiloh, hear the claim of Zelophehad's daughters and the Levites' request for towns. He dies and is buried at Gibeah, which had been allotted to his son Phinehas.`,
  refs:["Exodus 6:23–25","Leviticus 10:6–20","Numbers 3:32","Numbers 20:25–28","Numbers 27:18–23","Numbers 34:17","Joshua 14:1","Joshua 17:4","Joshua 19:51","Joshua 21:1","Joshua 24:33"]},

 {id:"ithamar", name:"Ithamar", short:"Ithamar", cat:"priest", w:6,
  dates:"c. 15th c. BC (traditional)",
  desc:`Aaron's youngest son, consecrated as a priest, who serves with Eleazar after Nadab and Abihu die. The tabernacle's materials "were recorded at Moses' command by the Levites under the direction of Ithamar son of Aaron," and in Numbers the Gershonite and Merarite clans work "under the direction of Ithamar son of Aaron, the priest."`,
  refs:["Exodus 6:23","Exodus 38:21","Leviticus 10:6–20","Numbers 3:4","Numbers 4:28","Numbers 4:33","Numbers 7:8"]},

 {id:"phinehas", name:"Phinehas son of Eleazar", short:"Phinehas", cat:"priest", w:8,
  clash:"Phinehas", clashtag:"Eleazar's son, Aaron's grandson, given 'a covenant of a lasting priesthood' for his zeal at Peor.",
  dates:"c. 15th – 14th c. BC (traditional)",
  desc:`Son of Eleazar and grandson of Aaron. At Peor, when Zimri brings the Midianite woman Kozbi into the camp, Phinehas kills them both with a spear and the plague stops; the LORD gives him "my covenant of peace" — "a covenant of a lasting priesthood." He goes with the army against Midian. In Joshua he leads the delegation to Reuben, Gad and half Manasseh over their altar by the Jordan, and on hearing their answer declares, "Today we know that the LORD is with us." Gibeah in the hill country of Ephraim was allotted to him. In the war against Benjamin he is still "ministering before" the ark at Bethel.`,
  notconfused:`Phinehas son of Eli, the priest at Shiloh, centuries later (1 Samuel 1–4).`,
  refs:["Exodus 6:25","Numbers 25:7–13","Numbers 31:6","Joshua 22:10–34","Joshua 24:33","Judges 20:27–28"]},

 // ---------------- GENEALOGIES (Exodus 6) ----------------
 {id:"gershon", name:"Gershon son of Levi", short:"Gershon", cat:"line", w:4,
  dates:"c. 17th c. BC (traditional)",
  desc:`Levi's first-listed son; his sons, "by clans, were Libni and Shimei."`,
  notconfused:`Gershom son of Moses (Exodus 2:22).`,
  refs:["Genesis 46:11","Exodus 6:16–17"]},

 {id:"kohath", name:"Kohath", short:"Kohath", cat:"line", w:5,
  dates:"c. 17th c. BC (traditional) · lived 133 years (Exodus 6:18)",
  desc:`A son of Levi and grandfather of Moses and Aaron. His sons were Amram, Izhar, Hebron and Uzziel.`,
  refs:["Genesis 46:11","Exodus 6:16–18"]},

 {id:"merari", name:"Merari", short:"Merari", cat:"line", w:4,
  dates:"c. 17th c. BC (traditional)",
  desc:`A son of Levi; his sons were Mahli and Mushi.`,
  refs:["Genesis 46:11","Exodus 6:16","Exodus 6:19"]},

 {id:"izhar", name:"Izhar", short:"Izhar", cat:"line", w:4,
  dates:"c. 16th c. BC (traditional)",
  desc:`A son of Kohath; his sons were Korah, Nepheg and Zikri.`,
  refs:["Exodus 6:18","Exodus 6:21"]},

 {id:"uzziel", name:"Uzziel son of Kohath", short:"Uzziel", cat:"line", w:4,
  dates:"c. 16th c. BC (traditional)",
  desc:`A son of Kohath; his sons were Mishael, Elzaphan and Sithri.`,
  refs:["Exodus 6:18","Exodus 6:22"]},

 {id:"amminadab", name:"Amminadab", short:"Amminadab", cat:"line", w:4,
  dates:"c. 16th–15th c. BC (traditional)",
  desc:`Father of Aaron's wife Elisheba and of Nahshon. Ruth 4 places him in the line of Perez: "Ram the father of Amminadab, Amminadab the father of Nahshon."`,
  refs:["Exodus 6:23","Ruth 4:19–20"]},

 {id:"putiel", name:"Putiel", short:"Putiel", cat:"line", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`Father of the wife of Eleazar son of Aaron, and so grandfather of Phinehas. Nothing else is recorded of him.`,
  refs:["Exodus 6:25"]},

 // ================= LEVITICUS · NUMBERS · DEUTERONOMY =================
 // Sourced chapter-by-chapter from the NIV on bible.com.
 // ----- Leviticus · Numbers · Deuteronomy (wilderness figures) -----
 {id:"dathan", name:"Dathan", short:"Dathan", cat:"exod", w:6,
  dates:"c. 15th c. BC (traditional)",
  desc:`A Reubenite, son of Eliab, who with his brother Abiram joins Korah's revolt. Summoned by Moses he refuses: "We will not come! … you have brought us up out of a land flowing with milk and honey to kill us in the wilderness." The earth opens and swallows them with their households; Deuteronomy 11:6 recalls it.`,
  refs:["Numbers 16","Numbers 26:8–10","Deuteronomy 11:6"]},

 {id:"abiram", name:"Abiram", short:"Abiram", cat:"exod", w:6,
  dates:"c. 15th c. BC (traditional)",
  desc:`Dathan's brother, a son of Eliab the Reubenite and one of "the community officials who rebelled against Moses and Aaron." He refuses Moses' summons and is swallowed by the earth with his household.`,
  refs:["Numbers 16","Numbers 26:8–10","Deuteronomy 11:6"]},

 {id:"on_p", name:"On son of Peleth", short:"On", cat:"exod", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`A Reubenite named with Korah, Dathan and Abiram among those who "became insolent and rose up against Moses." Nothing more is said of him.`,
  refs:["Numbers 16:1"]},

 {id:"eldad", name:"Eldad", short:"Eldad", cat:"exod", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`One of the seventy elders, who stayed in the camp instead of going to the tent — yet "the Spirit also rested on them, and they prophesied in the camp." When Joshua urges Moses to stop him and Medad, Moses replies, "I wish that all the LORD's people were prophets."`,
  notconfused:`Elidad son of Kislon, the Benjamite leader named to help assign the land (Numbers 34:21).`,
  refs:["Numbers 11:24–29"]},

 {id:"medad", name:"Medad", short:"Medad", cat:"exod", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`With Eldad, one of the elders listed for the tent who remained in the camp and prophesied there when the Spirit rested on them.`,
  refs:["Numbers 11:26–29"]},

 {id:"cushite_wife", name:"Moses' Cushite wife", short:"Cushite wife", cat:"exod", w:5,
  dates:"c. 15th c. BC (traditional; unnamed)",
  desc:`"Miriam and Aaron began to talk against Moses because of his Cushite wife, for he had married a Cushite." Numbers does not name her, and Scripture does not say whether she is Zipporah the Midianite or another wife.`,
  refs:["Numbers 12:1"]},

 {id:"hobab", name:"Hobab", short:"Hobab", cat:"exod", w:5,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Hobab son of Reuel the Midianite, Moses' father-in-law" — the NIV wording leaves open whether "father-in-law" refers to Hobab or to Reuel. Moses urges him to come with Israel: "You know where we should camp in the wilderness, and you can be our eyes." He first answers, "No, I will not go"; Numbers does not record his final decision. Judges 4:11 later speaks of "the descendants of Hobab, Moses' brother-in-law," among the Kenites.`,
  refs:["Numbers 10:29–32","Judges 1:16","Judges 4:11"]},

 {id:"shelomith", name:"Shelomith", short:"Shelomith", cat:"exod", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"The daughter of Dibri the Danite," an Israelite woman whose son by an Egyptian father blasphemed the Name during a fight in the camp.`,
  refs:["Leviticus 24:10–11"]},

 {id:"blasphemer", name:"Son of Shelomith (the blasphemer)", short:"The blasphemer", cat:"exod", w:4,
  dates:"c. 15th c. BC (traditional; unnamed)",
  desc:`"The son of an Israelite mother and an Egyptian father," who in a fight in the camp "blasphemed the Name with a curse." Held in custody until the LORD's will was clear, he is taken outside the camp and stoned, and the law is given: "anyone who blasphemes the name of the LORD is to be put to death."`,
  refs:["Leviticus 24:10–23"]},

 {id:"zimri", name:"Zimri son of Salu", short:"Zimri", cat:"exod", w:5,
  clash:"Zimri", clashtag:"A Simeonite family leader killed by Phinehas at Peor with the Midianite woman Kozbi.",
  notconfused:`Zimri son of Zerah, of Judah, the grandfather of Achan (Joshua 7:1).`,
  dates:"c. 15th c. BC (traditional)",
  desc:`"The leader of a Simeonite family," who during the Baal of Peor apostasy brought the Midianite woman Kozbi into the camp before Moses and the assembly. Phinehas killed them both with a spear, and the plague stopped.`,
  refs:["Numbers 25:6–14"]},

 {id:"mahlah", name:"Mahlah daughter of Zelophehad", short:"Mahlah", cat:"exod", w:5,
  dates:"c. 15th c. BC (traditional)",
  desc:`The first-named of Zelophehad's five daughters, who stand before Moses, Eleazar and the assembly: "Why should our father's name disappear from his clan because he had no son?" The LORD answers, "What Zelophehad's daughters are saying is right," and a law of inheritance follows. They later marry cousins within Manasseh so the land stays in the tribe, and in Joshua they remind Eleazar and Joshua of the command and receive their inheritance "along with the brothers of their father."`,
  refs:["Numbers 26:33","Numbers 27:1–11","Numbers 36","Joshua 17:3–6"]},

 {id:"noah_z", name:"Noah daughter of Zelophehad", short:"Noah (Zelophehad's daughter)", cat:"exod", w:4,
  clash:"Noah", clashtag:"One of the five daughters of Zelophehad who won the right to inherit their father's land.",
  dates:"c. 15th c. BC (traditional)",
  desc:`One of Zelophehad's five daughters — Mahlah, Noah, Hoglah, Milkah and Tirzah — who successfully asked for their father's inheritance.`,
  notconfused:`Noah of the flood (Genesis 6–9).`,
  refs:["Numbers 26:33","Numbers 27:1–11","Numbers 36:11"]},

 {id:"hoglah", name:"Hoglah", short:"Hoglah", cat:"exod", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`One of Zelophehad's five daughters who asked for, and received, their father's inheritance.`,
  refs:["Numbers 26:33","Numbers 27:1–11","Numbers 36:11"]},

 {id:"milkah_z", name:"Milkah daughter of Zelophehad", short:"Milkah (Zelophehad's daughter)", cat:"exod", w:4,
  clash:"Milkah", clashtag:"One of the five daughters of Zelophehad who received their father's inheritance.",
  dates:"c. 15th c. BC (traditional)",
  desc:`One of Zelophehad's five daughters who asked for, and received, their father's inheritance.`,
  notconfused:`Milkah wife of Nahor, Rebekah's grandmother (Genesis 11:29).`,
  refs:["Numbers 26:33","Numbers 27:1–11","Numbers 36:11"]},

 {id:"tirzah", name:"Tirzah", short:"Tirzah", cat:"exod", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`One of Zelophehad's five daughters who asked for, and received, their father's inheritance.`,
  notconfused:`The town of Tirzah, later a royal city of the northern kingdom.`,
  refs:["Numbers 26:33","Numbers 27:1–11","Numbers 36:11"]},

 {id:"mishael", name:"Mishael son of Uzziel", short:"Mishael", cat:"priest", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`A son of Aaron's uncle Uzziel. When Nadab and Abihu die before the LORD, Moses summons Mishael and Elzaphan: "carry your cousins outside the camp," and they carry them out "still in their tunics."`,
  refs:["Exodus 6:22","Leviticus 10:4–5"]},

 {id:"elzaphan", name:"Elzaphan son of Uzziel", short:"Elzaphan", cat:"priest", w:5,
  aliases:"Elizaphan son of Uzziel",
  clash:"Elizaphan", clashtag:"Son of Uzziel, Aaron's cousin; carried out Nadab and Abihu and led the Kohathite clans.",
  dates:"c. 15th c. BC (traditional)",
  desc:`A son of Uzziel and cousin of Aaron's sons, who with Mishael carries the bodies of Nadab and Abihu outside the camp. Numbers 3:30 names "Elizaphan son of Uzziel" as "the leader of the families of the Kohathite clans," responsible for the ark, the table, the lampstand and the altars.`,
  notconfused:`Elizaphan son of Parnak, the Zebulunite leader named to help assign the land (Numbers 34:25).`,
  refs:["Exodus 6:22","Leviticus 10:4–5","Numbers 3:30–31"]},

 {id:"eliasaph_l", name:"Eliasaph son of Lael", short:"Eliasaph (Gershonites)", cat:"priest", w:4,
  clash:"Eliasaph", clashtag:"Leader of the Levite families of the Gershonites, who cared for the tabernacle's curtains and coverings.",
  dates:"c. 15th c. BC (traditional)",
  desc:`"The leader of the families of the Gershonites," whose clans camped west of the tabernacle and cared for its tent, coverings, curtains and ropes.`,
  notconfused:`Eliasaph son of Deuel, leader of the tribe of Gad (Numbers 1:14).`,
  refs:["Numbers 3:23–26"]},

 {id:"zuriel", name:"Zuriel son of Abihail", short:"Zuriel", cat:"priest", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"The leader of the families of the Merarite clans," who camped north of the tabernacle and cared for its frames, crossbars, posts and bases.`,
  refs:["Numbers 3:35–37"]},

 // ---------------- GENEALOGIES (Numbers 26–27) ----------------
 {id:"eliab_p", name:"Eliab son of Pallu", short:"Eliab (Reubenite)", cat:"line", w:4,
  clash:"Eliab", clashtag:"A Reubenite, grandson of Reuben through Pallu, and father of the rebels Dathan and Abiram.",
  dates:"c. 16th–15th c. BC (traditional)",
  desc:`"The son of Pallu was Eliab, and the sons of Eliab were Nemuel, Dathan and Abiram." Deuteronomy calls him "Eliab the Reubenite."`,
  notconfused:`Eliab son of Helon, leader of the tribe of Zebulun (Numbers 1:9).`,
  refs:["Numbers 16:1","Numbers 26:8–9","Deuteronomy 11:6"]},

 {id:"makir", name:"Makir son of Manasseh", short:"Makir", cat:"line", w:5,
  clash:"Makir", clashtag:"Son of Manasseh and grandson of Joseph; ancestor of the Gileadites.",
  dates:"c. 17th c. BC (traditional)",
  desc:`Joseph's grandson, whose children "were placed at birth on Joseph's knees." "Makir was the father of Gilead." His descendants "went to Gilead, captured it and drove out the Amorites," and Moses gave Gilead to the Makirites; Jair and Nobah, also of Manasseh, took further settlements. Joshua calls him "Manasseh's firstborn" and says the Makirites received Gilead and Bashan "because the Makirites were great soldiers."`,
  refs:["Genesis 50:23","Numbers 26:29","Numbers 32:39–42","Deuteronomy 3:13–15","Joshua 17:1"]},

 {id:"gilead_p", name:"Gilead son of Makir", short:"Gilead", cat:"line", w:4,
  clash:"Gilead", clashtag:"Son of Makir and clan father of the Gileadites of Manasseh.",
  dates:"c. 17th–16th c. BC (traditional)",
  desc:`Son of Makir and head of the Gileadite clan of Manasseh, whose sons were Iezer, Helek, Asriel, Shechem, Shemida and Hepher.`,
  notconfused:`The region of Gilead east of the Jordan, which Moses gave to the Makirites (Numbers 32:40).`,
  refs:["Numbers 26:29–32","Numbers 27:1"]},

 {id:"hepher", name:"Hepher", short:"Hepher", cat:"line", w:4,
  dates:"c. 16th c. BC (traditional)",
  desc:`A son of Gilead and head of the Hepherite clan of Manasseh; father of Zelophehad.`,
  refs:["Numbers 26:32–33","Numbers 27:1"]},

 {id:"zelophehad", name:"Zelophehad", short:"Zelophehad", cat:"line", w:5,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Zelophehad son of Hepher had no sons; he had only daughters." His daughters say he "died in the wilderness. He was not among Korah's followers … but he died for his own sin and left no sons" — and win the right to his inheritance.`,
  refs:["Numbers 26:33","Numbers 27:1–7","Numbers 36"]},

 // ---------------- TRIBAL LEADERS (Numbers) ----------------
 {id:"nahshon", name:"Nahshon son of Amminadab", short:"Nahshon", cat:"lead", w:6,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Judah, Nahshon son of Amminadab" — the leader of the tribe of Judah chosen to help Moses and Aaron take the census. He commanded Judah's camp on the east, which set out first, and on the first day of the altar's dedication he brought Judah's offering. Brother of Aaron's wife Elisheba (Exodus 6:23); Ruth 4:20 makes him "the father of Salmon," the father of Boaz.`,
  refs:["Numbers 1:7","Numbers 2","Numbers 7","Numbers 10:14–27","Exodus 6:23","Ruth 4:20"]},

 {id:"nethanel", name:"Nethanel son of Zuar", short:"Nethanel", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Issachar, Nethanel son of Zuar" — the leader of the tribe of Issachar chosen to help Moses and Aaron take the census. His division marched in Judah's camp on the east, which set out first, and on the second day of the altar's dedication he brought Issachar's offering.`,
  refs:["Numbers 1:8","Numbers 2","Numbers 7","Numbers 10:14–27"]},

 {id:"eliab_h", name:"Eliab son of Helon", short:"Eliab", cat:"lead", w:4,
  clash:"Eliab", clashtag:"Son of Helon, leader of the tribe of Zebulun at the census and dedication of the altar.",
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Zebulun, Eliab son of Helon" — the leader of the tribe of Zebulun chosen to help Moses and Aaron take the census. His division marched in Judah's camp on the east, which set out first, and on the third day of the altar's dedication he brought Zebulun's offering.`,
  notconfused:`Eliab son of Pallu, the Reubenite father of Dathan and Abiram (Numbers 26:8–9).`,
  refs:["Numbers 1:9","Numbers 2","Numbers 7","Numbers 10:14–27"]},

 {id:"elizur", name:"Elizur son of Shedeur", short:"Elizur", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Reuben, Elizur son of Shedeur" — the leader of the tribe of Reuben chosen to help Moses and Aaron take the census. He commanded Reuben's camp on the south, and on the fourth day of the altar's dedication he brought Reuben's offering.`,
  refs:["Numbers 1:5","Numbers 2","Numbers 7","Numbers 10:14–27"]},

 {id:"shelumiel", name:"Shelumiel son of Zurishaddai", short:"Shelumiel", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Simeon, Shelumiel son of Zurishaddai" — the leader of the tribe of Simeon chosen to help Moses and Aaron take the census. His division marched in Reuben's camp on the south, and on the fifth day of the altar's dedication he brought Simeon's offering.`,
  refs:["Numbers 1:6","Numbers 2","Numbers 7","Numbers 10:14–27"]},

 {id:"eliasaph_d", name:"Eliasaph son of Deuel", short:"Eliasaph", cat:"lead", w:4,
  clash:"Eliasaph", clashtag:"Son of Deuel, leader of the tribe of Gad at the census and dedication of the altar.",
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Gad, Eliasaph son of Deuel" — the leader of the tribe of Gad chosen to help Moses and Aaron take the census. His division marched in Reuben's camp on the south, and on the sixth day of the altar's dedication he brought Gad's offering.`,
  notconfused:`Eliasaph son of Lael, leader of the Gershonite Levites (Numbers 3:24).`,
  refs:["Numbers 1:14","Numbers 2","Numbers 7","Numbers 10:14–27"]},

 {id:"elishama", name:"Elishama son of Ammihud", short:"Elishama", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Ephraim, Elishama son of Ammihud" — the leader of the tribe of Ephraim chosen to help Moses and Aaron take the census. He commanded Ephraim's camp on the west, and on the seventh day of the altar's dedication he brought Ephraim's offering.`,
  refs:["Numbers 1:10","Numbers 2","Numbers 7","Numbers 10:14–27"]},

 {id:"gamaliel", name:"Gamaliel son of Pedahzur", short:"Gamaliel", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Manasseh, Gamaliel son of Pedahzur" — the leader of the tribe of Manasseh chosen to help Moses and Aaron take the census. His division marched in Ephraim's camp on the west, and on the eighth day of the altar's dedication he brought Manasseh's offering.`,
  notconfused:`Gamaliel the Pharisee and teacher of the law in Acts 5 — a New Testament figure many centuries later.`,
  refs:["Numbers 1:10","Numbers 2","Numbers 7","Numbers 10:14–27"]},

 {id:"abidan", name:"Abidan son of Gideoni", short:"Abidan", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Benjamin, Abidan son of Gideoni" — the leader of the tribe of Benjamin chosen to help Moses and Aaron take the census. His division marched in Ephraim's camp on the west, and on the ninth day of the altar's dedication he brought Benjamin's offering.`,
  refs:["Numbers 1:11","Numbers 2","Numbers 7","Numbers 10:14–27"]},

 {id:"ahiezer", name:"Ahiezer son of Ammishaddai", short:"Ahiezer", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Dan, Ahiezer son of Ammishaddai" — the leader of the tribe of Dan chosen to help Moses and Aaron take the census. He commanded Dan's camp on the north, the rear guard, and on the tenth day of the altar's dedication he brought Dan's offering.`,
  refs:["Numbers 1:12","Numbers 2","Numbers 7","Numbers 10:14–27"]},

 {id:"pagiel", name:"Pagiel son of Okran", short:"Pagiel", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Asher, Pagiel son of Okran" — the leader of the tribe of Asher chosen to help Moses and Aaron take the census. His division marched in Dan's camp on the north, the rear guard, and on the eleventh day of the altar's dedication he brought Asher's offering.`,
  refs:["Numbers 1:13","Numbers 2","Numbers 7","Numbers 10:14–27"]},

 {id:"ahira", name:"Ahira son of Enan", short:"Ahira", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From Naphtali, Ahira son of Enan" — the leader of the tribe of Naphtali chosen to help Moses and Aaron take the census. His division marched in Dan's camp on the north, the rear guard, and on the twelfth day of the altar's dedication he brought Naphtali's offering.`,
  refs:["Numbers 1:15","Numbers 2","Numbers 7","Numbers 10:14–27"]},

 {id:"shammua", name:"Shammua son of Zakkur", short:"Shammua", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From the tribe of Reuben, Shammua son of Zakkur" — one of the twelve leaders Moses sent from the Desert of Paran to explore Canaan. With all the spies except Joshua and Caleb he spread "a bad report about the land," and those men "were struck down and died of a plague before the LORD."`,
  refs:["Numbers 13:4–16","Numbers 13:31–33","Numbers 14:36–38"]},

 {id:"shaphat", name:"Shaphat son of Hori", short:"Shaphat", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From the tribe of Simeon, Shaphat son of Hori" — one of the twelve leaders Moses sent from the Desert of Paran to explore Canaan. With all the spies except Joshua and Caleb he spread "a bad report about the land," and those men "were struck down and died of a plague before the LORD."`,
  refs:["Numbers 13:4–16","Numbers 13:31–33","Numbers 14:36–38"]},

 {id:"igal", name:"Igal son of Joseph", short:"Igal", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From the tribe of Issachar, Igal son of Joseph" — one of the twelve leaders Moses sent from the Desert of Paran to explore Canaan. With all the spies except Joshua and Caleb he spread "a bad report about the land," and those men "were struck down and died of a plague before the LORD."`,
  notconfused:`Joseph son of Jacob — Igal's father Joseph, of Issachar, is a different man.`,
  refs:["Numbers 13:4–16","Numbers 13:31–33","Numbers 14:36–38"]},

 {id:"palti", name:"Palti son of Raphu", short:"Palti", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From the tribe of Benjamin, Palti son of Raphu" — one of the twelve leaders Moses sent from the Desert of Paran to explore Canaan. With all the spies except Joshua and Caleb he spread "a bad report about the land," and those men "were struck down and died of a plague before the LORD."`,
  notconfused:`Paltiel son of Azzan, the Issacharite leader named to assign the land (Numbers 34:26).`,
  refs:["Numbers 13:4–16","Numbers 13:31–33","Numbers 14:36–38"]},

 {id:"gaddiel", name:"Gaddiel son of Sodi", short:"Gaddiel", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From the tribe of Zebulun, Gaddiel son of Sodi" — one of the twelve leaders Moses sent from the Desert of Paran to explore Canaan. With all the spies except Joshua and Caleb he spread "a bad report about the land," and those men "were struck down and died of a plague before the LORD."`,
  refs:["Numbers 13:4–16","Numbers 13:31–33","Numbers 14:36–38"]},

 {id:"gaddi", name:"Gaddi son of Susi", short:"Gaddi", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From the tribe of Manasseh, Gaddi son of Susi" — one of the twelve leaders Moses sent from the Desert of Paran to explore Canaan. With all the spies except Joshua and Caleb he spread "a bad report about the land," and those men "were struck down and died of a plague before the LORD."`,
  refs:["Numbers 13:4–16","Numbers 13:31–33","Numbers 14:36–38"]},

 {id:"ammiel", name:"Ammiel son of Gemalli", short:"Ammiel", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From the tribe of Dan, Ammiel son of Gemalli" — one of the twelve leaders Moses sent from the Desert of Paran to explore Canaan. With all the spies except Joshua and Caleb he spread "a bad report about the land," and those men "were struck down and died of a plague before the LORD."`,
  refs:["Numbers 13:4–16","Numbers 13:31–33","Numbers 14:36–38"]},

 {id:"sethur", name:"Sethur son of Michael", short:"Sethur", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From the tribe of Asher, Sethur son of Michael" — one of the twelve leaders Moses sent from the Desert of Paran to explore Canaan. With all the spies except Joshua and Caleb he spread "a bad report about the land," and those men "were struck down and died of a plague before the LORD."`,
  refs:["Numbers 13:4–16","Numbers 13:31–33","Numbers 14:36–38"]},

 {id:"nahbi", name:"Nahbi son of Vophsi", short:"Nahbi", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From the tribe of Naphtali, Nahbi son of Vophsi" — one of the twelve leaders Moses sent from the Desert of Paran to explore Canaan. With all the spies except Joshua and Caleb he spread "a bad report about the land," and those men "were struck down and died of a plague before the LORD."`,
  refs:["Numbers 13:4–16","Numbers 13:31–33","Numbers 14:36–38"]},

 {id:"geuel", name:"Geuel son of Maki", short:"Geuel", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"From the tribe of Gad, Geuel son of Maki" — one of the twelve leaders Moses sent from the Desert of Paran to explore Canaan. With all the spies except Joshua and Caleb he spread "a bad report about the land," and those men "were struck down and died of a plague before the LORD."`,
  refs:["Numbers 13:4–16","Numbers 13:31–33","Numbers 14:36–38"]},

 {id:"shemuel", name:"Shemuel son of Ammihud", short:"Shemuel", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Shemuel son of Ammihud," the leader from the tribe of Simeon named to help Eleazar the priest and Joshua son of Nun assign the land of Canaan as an inheritance.`,
  refs:["Numbers 34:16–29"]},

 {id:"elidad", name:"Elidad son of Kislon", short:"Elidad", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Elidad son of Kislon," the leader from the tribe of Benjamin named to help Eleazar the priest and Joshua son of Nun assign the land of Canaan as an inheritance.`,
  notconfused:`Eldad, the elder who prophesied in the camp (Numbers 11:26).`,
  refs:["Numbers 34:16–29"]},

 {id:"bukki", name:"Bukki son of Jogli", short:"Bukki", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Bukki son of Jogli," the leader from the tribe of Dan named to help Eleazar the priest and Joshua son of Nun assign the land of Canaan as an inheritance.`,
  refs:["Numbers 34:16–29"]},

 {id:"hanniel", name:"Hanniel son of Ephod", short:"Hanniel", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Hanniel son of Ephod," the leader from the tribe of Manasseh named to help Eleazar the priest and Joshua son of Nun assign the land of Canaan as an inheritance.`,
  refs:["Numbers 34:16–29"]},

 {id:"kemuel", name:"Kemuel son of Shiphtan", short:"Kemuel", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Kemuel son of Shiphtan," the leader from the tribe of Ephraim named to help Eleazar the priest and Joshua son of Nun assign the land of Canaan as an inheritance.`,
  notconfused:`Kemuel son of Nahor, Abraham's nephew (Genesis 22:21).`,
  refs:["Numbers 34:16–29"]},

 {id:"elizaphan_p", name:"Elizaphan son of Parnak", short:"Elizaphan", cat:"lead", w:4,
  clash:"Elizaphan", clashtag:"Son of Parnak, the Zebulunite leader named to help assign the land.",
  dates:"c. 15th c. BC (traditional)",
  desc:`"Elizaphan son of Parnak," the leader from the tribe of Zebulun named to help Eleazar the priest and Joshua son of Nun assign the land of Canaan as an inheritance.`,
  notconfused:`Elizaphan (Elzaphan) son of Uzziel, leader of the Kohathite Levites (Numbers 3:30).`,
  refs:["Numbers 34:16–29"]},

 {id:"paltiel", name:"Paltiel son of Azzan", short:"Paltiel", cat:"lead", w:4,
  clash:"Paltiel", clashtag:"Son of Azzan, the Issacharite leader named to help assign the land.",
  dates:"c. 15th c. BC (traditional)",
  desc:`"Paltiel son of Azzan," the leader from the tribe of Issachar named to help Eleazar the priest and Joshua son of Nun assign the land of Canaan as an inheritance.`,
  notconfused:`Palti son of Raphu, the Benjamite spy (Numbers 13:9).`,
  refs:["Numbers 34:16–29"]},

 {id:"ahihud", name:"Ahihud son of Shelomi", short:"Ahihud", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Ahihud son of Shelomi," the leader from the tribe of Asher named to help Eleazar the priest and Joshua son of Nun assign the land of Canaan as an inheritance.`,
  refs:["Numbers 34:16–29"]},

 {id:"pedahel", name:"Pedahel son of Ammihud", short:"Pedahel", cat:"lead", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Pedahel son of Ammihud," the leader from the tribe of Naphtali named to help Eleazar the priest and Joshua son of Nun assign the land of Canaan as an inheritance.`,
  refs:["Numbers 34:16–29"]},

 // ---------------- CONQUEST & JUDGES ----------------
 {id:"joshua_ot", name:"Joshua son of Nun", short:"Joshua", cat:"judg", w:14, halo:1,
  aliases:"Hoshea · Moses' aide · \"the servant of the LORD\"",
  clash:"Joshua", clashtag:"Moses' successor who led Israel across the Jordan and conquered Canaan.",
  dates:"c. 1500 – 1390 BC (traditional) · died at 110 (Joshua 24:29)",
  desc:`An Ephraimite, "Hoshea son of Nun," renamed by Moses; he defeats the Amalekites, serves as Moses' aide on Sinai and at the tent of meeting, and with Caleb is one of only two spies who trust the LORD. Commissioned by Moses, he hears: "Be strong and courageous… I will never leave you nor forsake you." He sends spies to Rahab in Jericho, leads Israel across the Jordan on dry ground and sets up twelve stones at Gilgal, and meets "the commander of the army of the LORD." Jericho's walls collapse; after Achan's sin is exposed Ai falls; he renews the covenant at Mount Ebal, is tricked into a treaty with the Gibeonites, and at Gibeon prays "Sun, stand still." In southern and northern campaigns thirty-one kings are defeated. With Eleazar he allots the land by lot at Shiloh and receives Timnath Serah. In his farewell at Shechem he charges Israel: "choose for yourselves this day whom you will serve … But as for me and my household, we will serve the LORD." He dies at 110 and is buried at Timnath Serah (called Timnath Heres in Judges 2:9).`,
  notconfused:`Jeshua (Joshua) the high priest, who rebuilt the temple a thousand years later after the exile.`,
  refs:["Exodus 17:8–14","Numbers 13–14","Numbers 27:18–23","Deuteronomy 34:9","Joshua 1","Joshua 3–4","Joshua 6","Joshua 10","Joshua 24","Judges 2:6–9"]},

 {id:"caleb", name:"Caleb son of Jephunneh", short:"Caleb", cat:"judg", w:10,
  aliases:"the Kenizzite",
  dates:"c. 1485 – after 1400 BC (traditional) · 85 when he claimed Hebron (Joshua 14:10)",
  desc:`"Caleb son of Jephunneh the Kenizzite," the spy from the tribe of Judah, who told the frightened people, "We should go up and take possession of the land, for we can certainly do it." The LORD says, "my servant Caleb has a different spirit and follows me wholeheartedly," and he and Joshua alone of the counted generation enter the land. At 85 — "I am still as strong today as the day Moses sent me out" — he asks Joshua for the hill country promised him, receives Hebron, drives out the three sons of Anak, and offers his daughter Aksah to whoever captures Kiriath Sepher; Othniel takes it.`,
  refs:["Numbers 13:6","Numbers 13:30","Numbers 14:24","Numbers 34:19","Deuteronomy 1:36","Joshua 14:6–15","Joshua 15:13–19","Joshua 21:12","Judges 1:12–20"]},

 // ================= JOSHUA =================
 // Sourced chapter-by-chapter from the NIV on bible.com (Joshua 1–24).
 {id:"achan", name:"Achan son of Karmi", short:"Achan", cat:"judg", w:7,
  dates:"c. 1400 BC (early-date tradition; disputed)",
  desc:`"Achan son of Karmi, the son of Zimri, the son of Zerah, of the tribe of Judah," who takes some of the devoted things from Jericho. Israel is routed at Ai until the lot falls on him; he confesses, "I coveted them and took them" — "a beautiful robe from Babylonia, two hundred shekels of silver and a bar of gold weighing fifty shekels," hidden in his tent. All Israel stones him in the Valley of Achor and raises a pile of rocks over him. Joshua 22:20 recalls that "He was not the only one who died for his sin."`,
  refs:["Joshua 7","Joshua 22:20"]},

 {id:"othniel", name:"Othniel son of Kenaz", short:"Othniel", cat:"judg", w:8,
  dates:"c. 14th c. BC (traditional; disputed)",
  desc:`"Othniel son of Kenaz, Caleb's younger brother" (Judges 1:13; Joshua 15:17 says "Caleb's brother"), who captures Kiriath Sepher (Debir) and so wins Caleb's daughter Aksah. He is the first deliverer in Judges: after eight years under Cushan-Rishathaim king of Aram Naharaim, "the Spirit of the LORD came on him, so that he became Israel's judge," and "the land had peace for forty years."`,
  refs:["Joshua 15:15–19","Judges 1:12–15","Judges 3:7–11"]},

 {id:"aksah", name:"Aksah daughter of Caleb", short:"Aksah", cat:"judg", w:5,
  dates:"c. 14th c. BC (traditional; disputed)",
  desc:`Caleb's daughter, promised "to the man who attacks and captures Kiriath Sepher" and given to Othniel. She urges him to ask her father for a field, then asks Caleb herself: "Since you have given me land in the Negev, give me also springs of water." He gives her the upper and lower springs.`,
  refs:["Joshua 15:16–19"]},

 // genealogy
 {id:"zimri_j", name:"Zimri son of Zerah", short:"Zimri (Achan's grandfather)", cat:"line", w:4,
  clash:"Zimri", clashtag:"Of the Zerahite clan of Judah; grandfather of Achan.",
  dates:"c. 15th c. BC (traditional)",
  desc:`Named in Achan's line — "Achan son of Karmi, the son of Zimri, the son of Zerah." When lots are cast, "the clan of the Zerahites … and Zimri was chosen."`,
  notconfused:`Zimri son of Salu, the Simeonite killed by Phinehas at Peor (Numbers 25:14).`,
  refs:["Joshua 7:1","Joshua 7:17–18"]},

 {id:"karmi", name:"Karmi son of Zimri", short:"Karmi", cat:"line", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`Achan's father, of the Zerahite clan of Judah.`,
  notconfused:`Karmi son of Reuben (Genesis 46:9).`,
  refs:["Joshua 7:1","Joshua 7:18"]},

 {id:"kenaz_o", name:"Kenaz, father of Othniel", short:"Kenaz", cat:"line", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`Father of Othniel. Joshua 15:17 reads "Othniel son of Kenaz, Caleb's brother"; Caleb himself is called "the Kenizzite" (14:6).`,
  notconfused:`Kenaz grandson of Esau, an Edomite chief (Genesis 36:11).`,
  refs:["Joshua 15:17"]},

 {id:"arba", name:"Arba", short:"Arba", cat:"line", w:4,
  dates:"before the conquest (undated)",
  desc:`"The greatest man among the Anakites" and "the forefather of Anak," after whom Hebron was formerly called Kiriath Arba.`,
  refs:["Joshua 14:15","Joshua 15:13","Joshua 21:11"]},

 {id:"rahab", name:"Rahab", short:"Rahab", cat:"judg", w:9,
  aliases:"Rahab the prostitute",
  dates:"c. 1406 BC (early-date tradition; disputed)",
  desc:`"A prostitute named Rahab" in Jericho, whose house was part of the city wall. She hides Joshua's two spies under stalks of flax and sends the king's men the wrong way, confessing, "the LORD your God is God in heaven above and on the earth below." She lets the spies down by a rope and ties a scarlet cord in her window as the sign. When Jericho falls, "Joshua spared Rahab the prostitute, with her family and all who belonged to her … and she lives among the Israelites to this day." Matthew's genealogy names her as the mother of Boaz.`,
  refs:["Joshua 2","Joshua 6:17–25","Matthew 1:5"]},

 // ================= JUDGES =================
 // Sourced chapter-by-chapter from the NIV on bible.com (Judges 1–21).
 {id:"ehud", name:"Ehud son of Gera", short:"Ehud", cat:"judg", w:8,
  dates:"c. 14th–12th c. BC (traditional; disputed)",
  desc:`"A left-handed man, the son of Gera the Benjamite," raised up as a deliverer after eighteen years under Eglon king of Moab. Bringing Israel's tribute, he tells the king, "I have a message from God for you," and drives his double-edged sword into Eglon's belly, then escapes and leads Israel to seize the fords of the Jordan. "The land had peace for eighty years."`,
  refs:["Judges 3:12–30","Judges 4:1"]},

 {id:"shamgar", name:"Shamgar son of Anath", short:"Shamgar", cat:"judg", w:5,
  dates:"c. 13th–12th c. BC (traditional; disputed)",
  desc:`"After Ehud came Shamgar son of Anath, who struck down six hundred Philistines with an oxgoad. He too saved Israel." Deborah's song recalls "the days of Shamgar," when "the highways were abandoned."`,
  refs:["Judges 3:31","Judges 5:6"]},

 {id:"barak", name:"Barak son of Abinoam", short:"Barak", cat:"judg", w:8,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`Of Kedesh in Naphtali, summoned by Deborah to lead ten thousand men of Naphtali and Zebulun to Mount Tabor. He answers, "If you go with me, I will go," and she warns him that "the honor will not be yours, for the LORD will deliver Sisera into the hands of a woman." He routs Sisera's chariots and finds Sisera dead in Jael's tent; he and Deborah sing the victory song.`,
  refs:["Judges 4","Judges 5:1","Judges 5:12"]},

 {id:"jael", name:"Jael wife of Heber", short:"Jael", cat:"judg", w:8,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`"The wife of Heber the Kenite," to whose tent Sisera flees because of an alliance between Jabin and Heber's family. She gives him milk, covers him, and while he sleeps drives a tent peg through his temple. Deborah's song: "Most blessed of women be Jael."`,
  refs:["Judges 4:17–22","Judges 5:6","Judges 5:24–27"]},

 {id:"heber_k", name:"Heber the Kenite", short:"Heber", cat:"judg", w:5,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`A Kenite who "had left the other Kenites, the descendants of Hobab, Moses' brother-in-law," and camped near Kedesh; his family had an alliance with Jabin king of Hazor. Husband of Jael.`,
  refs:["Judges 4:11","Judges 4:17","Judges 5:24"]},

 {id:"lappidoth", name:"Lappidoth", short:"Lappidoth", cat:"line", w:4,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`Deborah's husband — "Deborah, a prophet, the wife of Lappidoth." Nothing more is recorded.`,
  refs:["Judges 4:4"]},

 {id:"joash_ab", name:"Joash the Abiezrite", short:"Joash (Gideon's father)", cat:"judg", w:5,
  clash:"Joash", clashtag:"Gideon's father, of the Abiezrite clan of Manasseh, who defended his son against the worshipers of Baal.",
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`Gideon's father, whose oak at Ophrah shelters the angel of the LORD and whose altar to Baal Gideon tears down. When the town demands his son's death he answers, "If Baal really is a god, he can defend himself." Gideon is buried in his tomb.`,
  notconfused:`Joash king of Judah and Jehoash (Joash) king of Israel, centuries later.`,
  refs:["Judges 6:11","Judges 6:29–32","Judges 8:32"]},

 {id:"purah", name:"Purah", short:"Purah", cat:"judg", w:4,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`Gideon's servant, who goes down with him at night to the Midianite camp, where they overhear the dream of the barley loaf.`,
  refs:["Judges 7:10–11"]},

 {id:"jether_g", name:"Jether son of Gideon", short:"Jether", cat:"judg", w:4,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`Gideon's oldest son, told to kill Zebah and Zalmunna, "but Jether did not draw his sword, because he was only a boy and was afraid."`,
  refs:["Judges 8:20"]},

 {id:"abimelek_g", name:"Abimelek son of Gideon", short:"Abimelek (Gideon's son)", cat:"judg", w:8,
  clash:"Abimelek", clashtag:"Gideon's son by his concubine at Shechem, who murdered his seventy brothers and was crowned king.",
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`Gideon's son by "his concubine, who lived in Shechem." Backed by his mother's clan, he murders his seventy brothers "on one stone" — only Jotham escapes — and is crowned king at Shechem. After three years God stirs up animosity between him and Shechem; he destroys the city and burns the tower of El-Berith, but at Thebez "a woman dropped an upper millstone on his head," and he has his armor-bearer kill him. "Thus God repaid the wickedness that Abimelek had done."`,
  notconfused:`Abimelek king of Gerar in the days of Abraham and Isaac (Genesis 20; 26).`,
  refs:["Judges 8:31","Judges 9"]},

 {id:"jotham_g", name:"Jotham son of Gideon", short:"Jotham (Gideon's son)", cat:"judg", w:6,
  clash:"Jotham", clashtag:"Gideon's youngest son, who escaped Abimelek and told the parable of the trees.",
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`Gideon's youngest son, the only one to escape Abimelek's massacre. From the top of Mount Gerizim he tells the parable of the trees who make the thornbush their king, then flees to Beer. "The curse of Jotham son of Jerub-Baal came on" the people of Shechem.`,
  notconfused:`Jotham king of Judah, son of Uzziah, centuries later (2 Kings 15).`,
  refs:["Judges 9:5–21","Judges 9:57"]},

 {id:"gaal", name:"Gaal son of Ebed", short:"Gaal", cat:"judg", w:4,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`A newcomer to Shechem who stirs up its citizens against Abimelek — "Who is Abimelek …?" — and is defeated and driven out of the city by Zebul.`,
  refs:["Judges 9:26–41"]},

 {id:"zebul", name:"Zebul", short:"Zebul", cat:"judg", w:4,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`"The governor of the city" of Shechem and Abimelek's deputy, who secretly warns Abimelek about Gaal and then drives Gaal and his clan out.`,
  refs:["Judges 9:28–41"]},

 {id:"tola", name:"Tola son of Puah", short:"Tola", cat:"judg", w:5,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`"A man of Issachar named Tola son of Puah, the son of Dodo," who rose to save Israel after Abimelek; he lived in Shamir and "led Israel twenty-three years."`,
  notconfused:`Tola son of Issachar (Genesis 46:13); and Tola's father Puah is not the midwife Puah of Exodus 1.`,
  refs:["Judges 10:1–2"]},

 {id:"jair_g", name:"Jair of Gilead", short:"Jair", cat:"judg", w:5,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`A judge who "led Israel twenty-two years." "He had thirty sons, who rode thirty donkeys. They controlled thirty towns in Gilead, which to this day are called Havvoth Jair."`,
  notconfused:`Jair the descendant of Manasseh in Moses' day, after whom Havvoth Jair was first named (Numbers 32:41; Deuteronomy 3:14).`,
  refs:["Judges 10:3–5"]},

 {id:"gilead_j", name:"Gilead, father of Jephthah", short:"Gilead (Jephthah's father)", cat:"line", w:4,
  clash:"Gilead", clashtag:"Jephthah's father, whose sons by his wife drove Jephthah away.",
  dates:"c. 11th c. BC (traditional; disputed)",
  desc:`"His father was Gilead; his mother was a prostitute." Gilead's sons by his wife drove Jephthah out: "You are not going to get any inheritance in our family."`,
  notconfused:`Gilead son of Makir, the clan father of the Gileadites in Moses' day (Numbers 26:29).`,
  refs:["Judges 11:1–2"]},

 {id:"jephthah_dau", name:"Jephthah's daughter", short:"Jephthah's daughter", cat:"judg", w:6,
  dates:"c. 11th c. BC (traditional; disputed)",
  desc:`Jephthah's only child, who comes out "dancing to the sound of timbrels" to meet him after his vow. She answers, "Do to me just as you promised," asks two months to weep with her friends in the hills "because I will never marry," then returns, "and he did to her as he had vowed." Each year the young women of Israel "commemorate the daughter of Jephthah." Scripture does not give her name.`,
  refs:["Judges 11:34–40"]},

 {id:"ibzan", name:"Ibzan of Bethlehem", short:"Ibzan", cat:"judg", w:4,
  dates:"c. 11th c. BC (traditional; disputed)",
  desc:`A judge who "led Israel seven years"; he had thirty sons and thirty daughters and arranged their marriages outside his clan.`,
  refs:["Judges 12:8–10"]},

 {id:"elon_z", name:"Elon the Zebulunite", short:"Elon", cat:"judg", w:4,
  dates:"c. 11th c. BC (traditional; disputed)",
  desc:`A judge who "led Israel ten years" and was buried in Aijalon in Zebulun.`,
  notconfused:`Elon son of Zebulun (Genesis 46:14) and Elon the Hittite, father-in-law of Esau (Genesis 26:34).`,
  refs:["Judges 12:11–12"]},

 {id:"abdon", name:"Abdon son of Hillel", short:"Abdon", cat:"judg", w:4,
  dates:"c. 11th c. BC (traditional; disputed)",
  desc:`A judge from Pirathon in Ephraim who "led Israel eight years"; "he had forty sons and thirty grandsons, who rode on seventy donkeys."`,
  refs:["Judges 12:13–15"]},

 {id:"manoah", name:"Manoah", short:"Manoah", cat:"judg", w:6,
  dates:"c. 11th c. BC (traditional; disputed)",
  desc:`"A certain man of Zorah, named Manoah, from the clan of the Danites," father of Samson. He prays for the man of God to return, asks his name — "It is beyond understanding" — and sees the angel of the LORD ascend in the altar's flame: "We are doomed to die! … We have seen God!" Samson is buried in his tomb.`,
  refs:["Judges 13","Judges 14:2–10","Judges 16:31"]},

 {id:"manoah_wife", name:"Manoah's wife", short:"Samson's mother", cat:"judg", w:6,
  dates:"c. 11th c. BC (traditional; disputed)",
  desc:`Childless until the angel of the LORD tells her she will bear a son who will be "a Nazirite, dedicated to God from the womb." When Manoah fears they will die, she reasons, "If the LORD had meant to kill us, he would not have accepted a burnt offering." She names her son Samson. Scripture does not give her name.`,
  refs:["Judges 13"]},

 {id:"samson_wife", name:"Samson's Timnite wife", short:"Samson's wife", cat:"judg", w:5,
  dates:"c. 11th c. BC (traditional; disputed)",
  desc:`A Philistine woman of Timnah whom Samson insists on marrying. Threatened by her people, she weeps for seven days until he tells her his riddle; she is then given to his companion, and after Samson burns their fields the Philistines "burned her and her father to death." Unnamed in Scripture.`,
  refs:["Judges 14","Judges 15:1–6"]},

 {id:"micah_e", name:"Micah of Ephraim", short:"Micah (Ephraim)", cat:"judg", w:6,
  clash:"Micah", clashtag:"An Ephraimite of the judges' era who set up a household shrine with an idol and hired a Levite priest.",
  dates:"c. 12th–11th c. BC (traditional; disputed)",
  desc:`A man from the hill country of Ephraim who returns eleven hundred shekels he took from his mother; she has an idol made from it. He sets up a shrine with an ephod and household gods and hires a young Levite: "Now I know that the LORD will be good to me." The Danites take his idol and his priest — "You took the gods I made, and my priest … What else do I have?" "In those days Israel had no king; everyone did as they saw fit."`,
  notconfused:`Micah the prophet of Moresheth, centuries later (Micah 1).`,
  refs:["Judges 17–18"]},

 {id:"jonathan_g", name:"Jonathan son of Gershom", short:"Jonathan (Gershom's son)", cat:"priest", w:5,
  clash:"Jonathan", clashtag:"A Levite, 'son of Gershom, the son of Moses,' who served as priest for the Danites' idol.",
  dates:"c. 12th–11th c. BC (traditional; disputed)",
  desc:`"Jonathan son of Gershom, the son of Moses, and his sons were priests for the tribe of Dan until the time of the captivity of the land," serving the idol taken from Micah. Judges 17–18 calls Micah's priest only "a young Levite from Bethlehem"; the text implies but does not state outright that he is this Jonathan.`,
  notconfused:`Jonathan son of Saul, David's friend (1 Samuel 18–20).`,
  refs:["Judges 17:7–13","Judges 18:30"]},

 {id:"levite_j", name:"The Levite of Ephraim", short:"The Levite (Judges 19)", cat:"judg", w:5,
  dates:"c. 12th–11th c. BC (traditional; disputed)",
  desc:`A Levite from the hill country of Ephraim whose concubine is raped and killed by men of Gibeah after he sends her out to them. He cuts her body into twelve parts and sends them through Israel, and the tribes go to war against Benjamin. Unnamed in Scripture.`,
  refs:["Judges 19","Judges 20:4–7"]},

 {id:"concubine_j", name:"The Levite's concubine", short:"The concubine (Judges 19)", cat:"judg", w:5,
  dates:"c. 12th–11th c. BC (traditional; disputed)",
  desc:`A woman from Bethlehem in Judah, concubine of a Levite. At Gibeah she is sent out to the men of the city, who "raped her and abused her throughout the night"; at dawn she falls at the door "with her hands on the threshold." Her death leads to civil war against Benjamin. Unnamed in Scripture.`,
  refs:["Judges 19:1–30","Judges 20:4–6"]},

 // ================= RUTH =================
 // Ruth 1:1 — "In the days when the judges ruled."
 {id:"elimelek", name:"Elimelek", short:"Elimelek", cat:"judg", w:5,
  dates:"c. 12th–11th c. BC (traditional; 'when the judges ruled')",
  desc:`An Ephrathite from Bethlehem in Judah who goes to Moab in a famine with his wife Naomi and sons Mahlon and Kilion, and dies there. Boaz is "from the clan of Elimelek," and later buys his property.`,
  refs:["Ruth 1:1–3","Ruth 2:1–3","Ruth 4:3","Ruth 4:9"]},

 {id:"mahlon", name:"Mahlon", short:"Mahlon", cat:"judg", w:5,
  dates:"c. 12th–11th c. BC (traditional)",
  desc:`Son of Elimelek and Naomi, who marries in Moab and dies there; Boaz acquires "Ruth the Moabite, Mahlon's widow," to maintain his name.`,
  refs:["Ruth 1:2–5","Ruth 4:9–10"]},

 {id:"kilion", name:"Kilion", short:"Kilion", cat:"judg", w:4,
  dates:"c. 12th–11th c. BC (traditional)",
  desc:`Son of Elimelek and Naomi, who marries in Moab and dies there. Ruth 1:4 names the brothers' Moabite wives as Orpah and Ruth, and Ruth 4:10 makes Ruth "Mahlon's widow"; the text does not pair Orpah with Kilion by name.`,
  refs:["Ruth 1:2–5","Ruth 4:9"]},

 {id:"orpah", name:"Orpah", short:"Orpah", cat:"judg", w:5,
  dates:"c. 12th–11th c. BC (traditional)",
  desc:`A Moabite daughter-in-law of Naomi. Urged to go home, "Orpah kissed her mother-in-law goodbye, but Ruth clung to her"; Naomi says she is "going back to her people and her gods."`,
  refs:["Ruth 1:4–15"]},

 {id:"redeemer", name:"The nearer guardian-redeemer", short:"The other redeemer", cat:"judg", w:4,
  dates:"c. 12th–11th c. BC (traditional)",
  desc:`A relative of Elimelek "more closely related" than Boaz. He is willing to buy Naomi's land, but when told he must also acquire Ruth, he says, "I cannot redeem it because I might endanger my own estate," and gives Boaz his sandal. Ruth does not give his name.`,
  refs:["Ruth 3:12–13","Ruth 4:1–8"]},

 {id:"obed", name:"Obed", short:"Obed", cat:"judg", w:6,
  dates:"c. 11th c. BC (traditional)",
  desc:`Son of Boaz and Ruth, whom Naomi takes in her arms; the women of the town say, "Naomi has a son!" and name him Obed. "He was the father of Jesse, the father of David."`,
  refs:["Ruth 4:13–22","Matthew 1:5"]},

 {id:"salmon", name:"Salmon", short:"Salmon", cat:"line", w:4,
  dates:"c. 14th–12th c. BC (traditional)",
  desc:`In Ruth's genealogy, "Nahshon the father of Salmon, Salmon the father of Boaz." Matthew 1:5 names Rahab as Boaz's mother.`,
  refs:["Ruth 4:20–21","Matthew 1:4–5"]},

 {id:"hezron_j", name:"Hezron son of Perez", short:"Hezron", cat:"line", w:4,
  dates:"c. 17th c. BC (traditional)",
  desc:`Son of Perez and grandson of Judah, head of the Hezronite clan; "Hezron the father of Ram."`,
  notconfused:`Hezron son of Reuben (Genesis 46:9).`,
  refs:["Genesis 46:12","Numbers 26:21","Ruth 4:18–19"]},

 {id:"ram_j", name:"Ram son of Hezron", short:"Ram", cat:"line", w:4,
  dates:"c. 16th c. BC (traditional)",
  desc:`In Ruth's genealogy, "Hezron the father of Ram, Ram the father of Amminadab."`,
  refs:["Ruth 4:19","Matthew 1:3–4"]},

 {id:"deborah", name:"Deborah", short:"Deborah", cat:"judg", w:11,
  aliases:"\"Deborah, a prophet\" · \"a mother in Israel\"",
  clash:"Deborah", clashtag:"Prophet and judge who summoned Barak and, with him, defeated Sisera.",
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`"Deborah, a prophet, the wife of Lappidoth, was leading Israel at that time." She holds court under the Palm of Deborah, summons Barak to fight Jabin's commander Sisera, and goes with him, warning that "the LORD will deliver Sisera into the hands of a woman." Her song with Barak (Judges 5) celebrates the victory: "until I, Deborah, arose, until I arose, a mother in Israel." "Then the land had peace forty years."`,
  notconfused:`Deborah, Rebekah's nurse, buried near Bethel in Jacob's day (Genesis 35:8).`,
  refs:["Judges 4–5"]},

 {id:"gideon", name:"Gideon", short:"Gideon", cat:"judg", w:11,
  aliases:"Jerub-Baal",
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`Son of Joash the Abiezrite, threshing wheat in a winepress when the angel of the LORD greets him: "The LORD is with you, mighty warrior." He tears down his father's altar to Baal — and is named Jerub-Baal, "Let Baal contend with him" — and tests God with the fleece. The LORD cuts his army to three hundred men, who rout Midian with trumpets, jars and torches: "A sword for the LORD and for Gideon!" He captures the kings Zebah and Zalmunna and refuses to rule — "The LORD will rule over you" — but makes a gold ephod that "became a snare to Gideon and his family." He has seventy sons and, by a concubine in Shechem, Abimelek; "the land had peace forty years."`,
  refs:["Judges 6–8","Judges 9:1–5"]},

 {id:"jephthah", name:"Jephthah", short:"Jephthah", cat:"judg", w:9,
  aliases:"Jephthah the Gileadite",
  dates:"c. 11th c. BC (traditional; disputed)",
  desc:`"A mighty warrior," son of Gilead by a prostitute, driven out by his half-brothers to the land of Tob, then called back by the elders of Gilead to fight the Ammonites. He argues Israel's claim to the land, the Spirit of the LORD comes on him, and he vows that "whatever comes out of the door of my house to meet me" will be a burnt offering — and his only daughter comes out dancing. He later fights Ephraim, whose survivors are exposed at the Jordan by "Shibboleth." "Jephthah led Israel six years."`,
  refs:["Judges 10:17–12:7"]},

 {id:"samson", name:"Samson", short:"Samson", cat:"judg", w:11,
  aliases:"\"a Nazirite, dedicated to God from the womb\"",
  dates:"c. 11th c. BC (traditional; disputed)",
  desc:`Son of Manoah of Zorah, announced by the angel of the LORD as a Nazirite who would "take the lead in delivering Israel from the hands of the Philistines." The Spirit of the LORD comes on him: he tears a lion apart, poses a riddle at his wedding feast in Timnah, burns the Philistines' grain with three hundred foxes, kills a thousand men with a donkey's jawbone, and carries off the gates of Gaza. Delilah coaxes out the secret of his uncut hair; shaved, captured, blinded and set to grinding grain, he prays "strengthen me just once more" and pulls down the temple of Dagon — "he killed many more when he died than while he lived." "He had led Israel twenty years."`,
  refs:["Judges 13–16"]},

 {id:"delilah", name:"Delilah", short:"Delilah", cat:"judg", w:7,
  dates:"c. 11th c. BC (traditional; disputed)",
  desc:`A woman "in the Valley of Sorek" whom Samson loves. The rulers of the Philistines each offer her eleven hundred shekels of silver to learn the secret of his strength; after three false answers he tells her of his uncut hair, and while he sleeps on her lap she has his seven braids shaved: "Samson, the Philistines are upon you!"`,
  refs:["Judges 16:4–21"]},

 {id:"ruth", name:"Ruth", short:"Ruth", cat:"judg", w:11,
  aliases:"Ruth the Moabite",
  dates:"c. 12th–11th c. BC (traditional; 'when the judges ruled')",
  desc:`A Moabite, widow of Naomi's son Mahlon, who refuses to leave her mother-in-law: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God." In Bethlehem she gleans in the field of Boaz, a relative of Elimelek, who praises what she has done; at the threshing floor she asks him, as a guardian-redeemer, to "spread the corner of your garment over me." Boaz marries her and she bears Obed, the grandfather of David; the women say she is "better to you than seven sons."`,
  refs:["Ruth 1–4","Matthew 1:5"]},

 {id:"boaz", name:"Boaz", short:"Boaz", cat:"judg", w:9,
  dates:"c. 12th–11th c. BC (traditional)",
  desc:`"A man of standing from the clan of Elimelek" in Bethlehem, son of Salmon (and, per Matthew 1:5, of Rahab). He protects and provides for Ruth as she gleans, and when she comes to him at the threshing floor he promises to act as guardian-redeemer. At the town gate the nearer relative declines, and Boaz buys Elimelek's property and acquires "Ruth the Moabite, Mahlon's widow, as my wife." He becomes the father of Obed, the grandfather of David.`,
  refs:["Ruth 2–4","Matthew 1:5"]},

 {id:"naomi", name:"Naomi", short:"Naomi", cat:"judg", w:9,
  aliases:"Mara",
  dates:"c. 12th–11th c. BC (traditional)",
  desc:`Wife of Elimelek of Bethlehem, who goes to Moab in a famine and loses her husband and both sons. Returning with Ruth she says, "Call me Mara, because the Almighty has made my life very bitter… I went away full, but the LORD has brought me back empty." She guides Ruth to Boaz, and when Obed is born she takes him in her arms: "Naomi has a son!"`,
  refs:["Ruth 1–4"]},

 {id:"eli", name:"Eli", short:"Eli", cat:"judg", w:8,
  dates:"c. 11th c. BC (traditional) · died at 98 (1 Samuel 4:15)",
  desc:`The priest at Shiloh, sitting "by the doorpost of the LORD's house," who mistakes Hannah's silent prayer for drunkenness and then blesses her. He raises the boy Samuel and teaches him to answer, "Speak, LORD, for your servant is listening." His sons Hophni and Phinehas are scoundrels he fails to restrain, and the LORD announces judgment on his house. Hearing that the ark is captured and his sons are dead, he falls backward and breaks his neck at ninety-eight. "He had led Israel forty years."`,
  refs:["1 Samuel 1:9–17","1 Samuel 2:11–36","1 Samuel 3","1 Samuel 4:12–18"]},

 {id:"hannah", name:"Hannah", short:"Hannah", cat:"judg", w:8,
  dates:"c. 11th c. BC (traditional)",
  desc:`Elkanah's beloved wife, childless and provoked by her rival Peninnah. At Shiloh she weeps and vows that if the LORD gives her a son "I will give him to the LORD for all the days of his life." She names her son Samuel, "Because I asked the LORD for him," brings him to Eli once he is weaned, and prays, "My heart rejoices in the LORD… He raises the poor from the dust." She later bears three more sons and two daughters.`,
  refs:["1 Samuel 1–2"]},

 {id:"samuel", name:"Samuel", short:"Samuel", cat:"judg", w:13, halo:1,
  aliases:"the seer · prophet of the LORD",
  dates:"c. 1100 – 1010 BC (traditional)",
  desc:`Son of Elkanah and Hannah, given to the LORD and raised by Eli at Shiloh. Called by name in the night — "Speak, for your servant is listening" — he is "attested as a prophet of the LORD" from Dan to Beersheba. He leads Israel to put away their idols, intercedes at Mizpah as the LORD routs the Philistines, and sets up the stone Ebenezer: "Thus far the LORD has helped us." He judges Israel on a circuit from Ramah. When the people demand a king he warns them, then anoints Saul; when Saul disobeys he declares, "To obey is better than sacrifice," and anoints David in Bethlehem. He dies and is buried at Ramah, and is called up by the medium at Endor to pronounce Saul's end.`,
  refs:["1 Samuel 1–3","1 Samuel 7–10","1 Samuel 12","1 Samuel 15–16","1 Samuel 25:1","1 Samuel 28:11–19"]},

 // ---------------- KINGS OF ISRAEL & JUDAH ----------------
 {id:"jesse", name:"Jesse", short:"Jesse", cat:"king", w:8,
  dates:"c. 11th c. BC (traditional)",
  desc:`Son of Obed and grandson of Boaz and Ruth — "Obed the father of Jesse, and Jesse the father of David."`,
  refs:["Ruth 4:17–22","Matthew 1:5–6"]},

 // ================= 1 SAMUEL =================
 // Sourced chapter-by-chapter from the NIV on bible.com (1 Samuel 1–31).
 {id:"elkanah", name:"Elkanah son of Jeroham", short:"Elkanah", cat:"judg", w:6,
  dates:"c. 11th c. BC (traditional)",
  desc:`"A Zuphite from the hill country of Ephraim," of Ramathaim, with two wives, Hannah and Peninnah. He goes up yearly to sacrifice at Shiloh and gives Hannah a double portion "because he loved her": "Don't I mean more to you than ten sons?" Father of Samuel.`,
  refs:["1 Samuel 1–2"]},

 {id:"peninnah", name:"Peninnah", short:"Peninnah", cat:"judg", w:5,
  dates:"c. 11th c. BC (traditional)",
  desc:`Elkanah's other wife, who had children while Hannah had none; "her rival kept provoking her in order to irritate her" year after year at Shiloh.`,
  refs:["1 Samuel 1:2–7"]},

 {id:"hophni", name:"Hophni son of Eli", short:"Hophni", cat:"priest", w:6,
  dates:"c. 11th c. BC (traditional)",
  desc:`With his brother Phinehas, a priest at Shiloh. "Eli's sons were scoundrels; they had no regard for the LORD," taking the people's offerings by force and sleeping with the women who served at the tent of meeting. A man of God foretells that both will die on the same day; they are killed when the Philistines capture the ark.`,
  refs:["1 Samuel 1:3","1 Samuel 2:12–36","1 Samuel 4:4–17"]},

 {id:"phinehas_eli", name:"Phinehas son of Eli", short:"Phinehas (Eli's son)", cat:"priest", w:6,
  clash:"Phinehas", clashtag:"Eli's corrupt son, a priest at Shiloh, killed when the ark was captured.",
  dates:"c. 11th c. BC (traditional)",
  desc:`With his brother Hophni, a priest at Shiloh who treated "the LORD's offering with contempt." Both die the day the Philistines capture the ark; his wife, giving birth at the news, names the child Ichabod. Through his son Ahitub his line continues in the priests Ahijah and Ahimelek.`,
  notconfused:`Phinehas son of Eleazar, Aaron's grandson, whose zeal at Peor won "a covenant of a lasting priesthood" (Numbers 25).`,
  refs:["1 Samuel 1:3","1 Samuel 2:12–34","1 Samuel 4:11–22","1 Samuel 14:3"]},

 {id:"ichabod", name:"Ichabod", short:"Ichabod", cat:"priest", w:5,
  dates:"c. 11th c. BC (traditional)",
  desc:`Son of Phinehas, born as his mother died on hearing that the ark was captured and her husband and father-in-law were dead. She named him Ichabod, saying, "The Glory has departed from Israel."`,
  refs:["1 Samuel 4:19–22","1 Samuel 14:3"]},

 {id:"ahitub", name:"Ahitub son of Phinehas", short:"Ahitub", cat:"line", w:4,
  dates:"c. 11th c. BC (traditional)",
  desc:`"Ichabod's brother Ahitub son of Phinehas, the son of Eli"; father of the priests Ahijah (1 Samuel 14:3) and Ahimelek (22:9, 11).`,
  refs:["1 Samuel 14:3","1 Samuel 22:9–12"]},

 {id:"ahijah_p", name:"Ahijah son of Ahitub", short:"Ahijah (priest)", cat:"priest", w:5,
  clash:"Ahijah", clashtag:"Son of Ahitub, the priest who wore the ephod with Saul's army.",
  dates:"c. 11th c. BC (traditional)",
  desc:`The priest "wearing an ephod" with Saul's men at Gibeah when Jonathan attacks the Philistine outpost; Saul tells him, "Bring the ark of God," then, "Withdraw your hand."`,
  refs:["1 Samuel 14:3","1 Samuel 14:18–19"]},

 {id:"ahimelek_p", name:"Ahimelek son of Ahitub", short:"Ahimelek (priest)", cat:"priest", w:6,
  clash:"Ahimelek", clashtag:"The priest at Nob who gave David the consecrated bread and Goliath's sword, and was killed on Saul's orders.",
  dates:"c. 11th c. BC (traditional)",
  desc:`The priest at Nob who trembles when David arrives alone, gives him the consecrated bread and "the sword of Goliath the Philistine." Accused by Doeg, he tells Saul, "Who of all your servants is as loyal as David?" — and Saul has Doeg kill him with eighty-five priests. Only his son Abiathar escapes.`,
  refs:["1 Samuel 21:1–9","1 Samuel 22:9–20"]},

 {id:"abiathar", name:"Abiathar son of Ahimelek", short:"Abiathar", cat:"priest", w:8,
  dates:"c. 11th–10th c. BC (traditional)",
  desc:`The only son of Ahimelek to escape the massacre at Nob; he flees to David, who says, "I am responsible for the death of your whole family. Stay with me." He brings the ephod, through which David inquires of the LORD at Keilah and after the raid on Ziklag.`,
  refs:["1 Samuel 22:20–23","1 Samuel 23:6–12","1 Samuel 30:7–8"]},

 {id:"abinadab_k", name:"Abinadab of Kiriath Jearim", short:"Abinadab (ark keeper)", cat:"judg", w:4,
  clash:"Abinadab", clashtag:"The man of Kiriath Jearim in whose house on the hill the ark stayed for twenty years.",
  dates:"c. 11th c. BC (traditional)",
  desc:`When the ark is returned by the Philistines, the men of Kiriath Jearim bring it "to Abinadab's house on the hill and consecrated Eleazar his son to guard the ark." It remains there twenty years.`,
  refs:["1 Samuel 7:1–2"]},

 {id:"eleazar_ab", name:"Eleazar son of Abinadab", short:"Eleazar (ark guard)", cat:"judg", w:4,
  clash:"Eleazar", clashtag:"Abinadab's son, consecrated to guard the ark at Kiriath Jearim.",
  dates:"c. 11th c. BC (traditional)",
  desc:`Consecrated by the men of Kiriath Jearim "to guard the ark of the LORD" in his father Abinadab's house.`,
  notconfused:`Eleazar son of Aaron, the high priest who succeeded his father (Numbers 20).`,
  refs:["1 Samuel 7:1"]},

 {id:"joel_s", name:"Joel son of Samuel", short:"Joel (Samuel's son)", cat:"judg", w:4,
  dates:"c. 11th c. BC (traditional)",
  desc:`Samuel's firstborn, appointed with his brother Abijah as a leader at Beersheba; they "turned aside after dishonest gain and accepted bribes and perverted justice," and the elders asked for a king.`,
  notconfused:`Joel the prophet (Joel 1).`,
  refs:["1 Samuel 8:1–5"]},

 {id:"abijah_s", name:"Abijah son of Samuel", short:"Abijah (Samuel's son)", cat:"judg", w:4,
  clash:"Abijah", clashtag:"Samuel's second son, who took bribes at Beersheba.",
  dates:"c. 11th c. BC (traditional)",
  desc:`Samuel's second son, who with Joel "did not follow his ways" at Beersheba.`,
  refs:["1 Samuel 8:1–3"]},

 // Saul's house
 {id:"kish", name:"Kish son of Abiel", short:"Kish", cat:"king", w:6,
  dates:"c. 11th c. BC (traditional)",
  desc:`"A Benjamite, a man of standing," father of Saul. Saul is out looking for his father's lost donkeys when Samuel anoints him; "What is this that has happened to the son of Kish?"`,
  refs:["1 Samuel 9:1–3","1 Samuel 10:11","1 Samuel 14:51"]},

 {id:"abiel", name:"Abiel", short:"Abiel", cat:"line", w:4,
  dates:"c. 11th c. BC (traditional)",
  desc:`A Benjamite, "son of Zeror"; "Saul's father Kish and Abner's father Ner were sons of Abiel."`,
  refs:["1 Samuel 9:1","1 Samuel 14:51"]},

 {id:"ner", name:"Ner son of Abiel", short:"Ner", cat:"line", w:4,
  dates:"c. 11th c. BC (traditional)",
  desc:`"Ner was Saul's uncle," and father of Abner, the commander of Saul's army.`,
  refs:["1 Samuel 14:50–51"]},

 {id:"abner", name:"Abner son of Ner", short:"Abner", cat:"king", w:9,
  dates:"c. 11th c. BC (traditional)",
  desc:`Saul's cousin and "the commander of Saul's army." After Saul's death he makes Ish-Bosheth king over Israel and kills Asahel at Gibeon. When Ish-Bosheth accuses him over Saul's concubine Rizpah, he goes over to David and brings Michal back, but Joab, avenging his brother, stabs him at Hebron. David walks behind his bier: "a commander and a great man has fallen in Israel this day."`,
  refs:["1 Samuel 14:50–51","1 Samuel 17:55–57","1 Samuel 26:5–16","2 Samuel 2:8–32","2 Samuel 3"]},

 {id:"ahinoam_s", name:"Ahinoam daughter of Ahimaaz", short:"Ahinoam (Saul's wife)", cat:"king", w:4,
  clash:"Ahinoam", clashtag:"Saul's wife, daughter of Ahimaaz.",
  dates:"c. 11th c. BC (traditional)",
  desc:`"His wife's name was Ahinoam daughter of Ahimaaz" — Saul's wife, the only one named in 1 Samuel.`,
  refs:["1 Samuel 14:50"]},

 {id:"ishvi", name:"Ishvi son of Saul", short:"Ishvi", cat:"king", w:4,
  dates:"c. 11th c. BC (traditional)",
  desc:`Named among Saul's sons with Jonathan and Malki-Shua.`,
  refs:["1 Samuel 14:49"]},

 {id:"malkishua", name:"Malki-Shua son of Saul", short:"Malki-Shua", cat:"king", w:5,
  dates:"c. 11th c. BC (traditional)",
  desc:`A son of Saul killed with Jonathan and Abinadab by the Philistines on Mount Gilboa.`,
  refs:["1 Samuel 14:49","1 Samuel 31:2"]},

 {id:"abinadab_s", name:"Abinadab son of Saul", short:"Abinadab (Saul's son)", cat:"king", w:4,
  clash:"Abinadab", clashtag:"A son of Saul killed with Jonathan on Mount Gilboa.",
  dates:"c. 11th c. BC (traditional)",
  desc:`A son of Saul killed with Jonathan and Malki-Shua on Mount Gilboa.`,
  refs:["1 Samuel 31:2"]},

 {id:"merab", name:"Merab daughter of Saul", short:"Merab", cat:"king", w:5,
  dates:"c. 11th c. BC (traditional)",
  desc:`Saul's older daughter, promised to David — "only serve me bravely" — but "given in marriage to Adriel of Meholah."`,
  refs:["1 Samuel 14:49","1 Samuel 18:17–19"]},

 {id:"adriel", name:"Adriel of Meholah", short:"Adriel", cat:"king", w:4,
  dates:"c. 11th c. BC (traditional)",
  desc:`The man to whom Merab, Saul's daughter promised to David, was given in marriage instead.`,
  refs:["1 Samuel 18:19"]},

 {id:"michal", name:"Michal daughter of Saul", short:"Michal", cat:"king", w:8,
  dates:"c. 11th–10th c. BC (traditional)",
  desc:`Saul's younger daughter, who "was in love with David." She becomes his wife for a bride-price of Philistine foreskins and saves him by letting him down through a window. Saul gives her to Paltiel, but David demands her back, and Paltiel follows "weeping behind her all the way to Bahurim." When David dances before the ark she "despised him in her heart," and she "had no children to the day of her death."`,
  refs:["1 Samuel 18:20–28","1 Samuel 19:11–17","1 Samuel 25:44","2 Samuel 3:13–16","2 Samuel 6:16–23"]},

 {id:"paltiel_l", name:"Paltiel son of Laish", short:"Paltiel (Michal's husband)", cat:"king", w:4,
  clash:"Paltiel", clashtag:"The man of Gallim to whom Saul gave Michal, David's wife.",
  dates:"c. 11th c. BC (traditional)",
  desc:`"Saul had given his daughter Michal, David's wife, to Paltiel son of Laish, who was from Gallim."`,
  notconfused:`Paltiel son of Azzan, the Issacharite leader named in Numbers 34:26.`,
  refs:["1 Samuel 25:44"]},

 {id:"endor_medium", name:"The medium at Endor", short:"Medium of Endor", cat:"king", w:6,
  dates:"c. 1010 BC (traditional)",
  desc:`A woman "who is a medium" at Endor, whom Saul, after expelling the mediums, consults in disguise when the LORD will not answer him. She sees "a ghostly figure coming up out of the earth" — Samuel, who foretells Saul's death — then urges the shaken king to eat. Unnamed in Scripture.`,
  refs:["1 Samuel 28:3–25"]},

 // Jesse's sons and David's early circle
 {id:"eliab_j", name:"Eliab son of Jesse", short:"Eliab (David's brother)", cat:"king", w:5,
  clash:"Eliab", clashtag:"Jesse's firstborn, whom Samuel thought must be the LORD's anointed.",
  dates:"c. 11th c. BC (traditional)",
  desc:`Jesse's firstborn. Seeing him, Samuel thinks, "Surely the LORD's anointed stands here," but the LORD says, "People look at the outward appearance, but the LORD looks at the heart." At the Valley of Elah he scolds David: "I know how conceited you are."`,
  refs:["1 Samuel 16:6–7","1 Samuel 17:13","1 Samuel 17:28"]},

 {id:"abinadab_j", name:"Abinadab son of Jesse", short:"Abinadab (David's brother)", cat:"king", w:4,
  clash:"Abinadab", clashtag:"Jesse's second son, passed over when Samuel came to anoint a king.",
  dates:"c. 11th c. BC (traditional)",
  desc:`Jesse's second son, passed over by Samuel and later in Saul's army at the Valley of Elah.`,
  refs:["1 Samuel 16:8","1 Samuel 17:13"]},

 {id:"shammah_j", name:"Shammah son of Jesse", short:"Shammah (David's brother)", cat:"king", w:4,
  clash:"Shammah", clashtag:"Jesse's third son, David's brother.",
  dates:"c. 11th c. BC (traditional)",
  desc:`Jesse's third son, passed over by Samuel and in Saul's army when David faced Goliath.`,
  refs:["1 Samuel 16:9","1 Samuel 17:13"]},

 {id:"abigail", name:"Abigail", short:"Abigail", cat:"king", w:8,
  aliases:"Abigail of Carmel",
  dates:"c. 11th–10th c. BC (traditional)",
  desc:`"An intelligent and beautiful woman," wife of the surly Nabal. When Nabal insults David's men she rides out with food and turns David from bloodshed: "the life of my lord will be bound securely in the bundle of the living." After the LORD strikes Nabal she becomes David's wife; she is captured at Ziklag and rescued.`,
  refs:["1 Samuel 25","1 Samuel 27:3","1 Samuel 30:5–18"]},

 {id:"nabal", name:"Nabal", short:"Nabal", cat:"king", w:6,
  dates:"c. 11th c. BC (traditional)",
  desc:`A wealthy Calebite of Maon who refuses David's men — "Who is this David?" Abigail says, "He is just like his name — his name means Fool." When he learns what she has done, "his heart failed him and he became like a stone"; ten days later "the LORD struck Nabal and he died."`,
  refs:["1 Samuel 25"]},

 {id:"ahinoam_j", name:"Ahinoam of Jezreel", short:"Ahinoam (David's wife)", cat:"king", w:6,
  clash:"Ahinoam", clashtag:"David's wife from Jezreel, who shared his exile among the Philistines.",
  dates:"c. 11th–10th c. BC (traditional)",
  desc:`"David had also married Ahinoam of Jezreel"; with Abigail she lives with David at Gath and Ziklag and is captured and rescued from the Amalekites.`,
  refs:["1 Samuel 25:43","1 Samuel 27:3","1 Samuel 30:5"]},

 {id:"ahimelek_h", name:"Ahimelek the Hittite", short:"Ahimelek the Hittite", cat:"king", w:4,
  clash:"Ahimelek", clashtag:"A Hittite with David in the wilderness, asked to go down into Saul's camp.",
  dates:"c. 11th c. BC (traditional)",
  desc:`One of the two men David asks, "Who will go down into the camp with me to Saul?" (Abishai volunteers).`,
  refs:["1 Samuel 26:6"]},

 {id:"gad_p", name:"Gad the prophet", short:"Gad (prophet)", cat:"proph", w:7,
  clash:"Gad", clashtag:"'David's seer,' who advised him in the wilderness and gave the LORD's word after the census.",
  dates:"c. 11th–10th c. BC (traditional)",
  desc:`"The prophet Gad," who tells the fugitive David, "Go into the land of Judah." Called "David's seer," after the census he brings David the LORD's three options — famine, flight or plague — and then tells him to build an altar on the threshing floor of Araunah.`,
  notconfused:`Gad son of Jacob and Zilpah, ancestor of the tribe of Gad (Genesis 30:11).`,
  refs:["1 Samuel 22:5","2 Samuel 24:11–19"]},


 {id:"saul", name:"Saul son of Kish", short:"Saul", cat:"king", w:13,
  aliases:"first king of Israel",
  dates:"reigned c. 1050 – 1010 BC (1 Samuel 13:1's figures are uncertain in the text)",
  desc:`A Benjamite, "as handsome a young man as could be found anywhere in Israel, and he was a head taller than anyone else." Out looking for his father's donkeys, he is anointed by Samuel, prophesies — "Is Saul also among the prophets?" — and is chosen by lot at Mizpah, hiding among the supplies. He rescues Jabesh Gilead from Nahash, but offers the burnt offering at Gilgal without Samuel and spares Agag and the best of the plunder, and the LORD rejects him as king. Tormented by an evil spirit and jealous of David — "Saul has slain his thousands, and David his tens of thousands" — he hurls his spear at him, hunts him through the wilderness, and has the priests of Nob killed. Twice spared by David, he admits, "You are more righteous than I." Facing the Philistines at Gilboa he consults the medium at Endor, and the next day, critically wounded, he falls on his own sword; the men of Jabesh Gilead bury him.`,
  notconfused:`Saul of Tarsus (the apostle Paul), named after this king — a different man in the New Testament.`,
  refs:["1 Samuel 9–11","1 Samuel 13–15","1 Samuel 18–19","1 Samuel 24","1 Samuel 26","1 Samuel 28","1 Samuel 31"]},

 {id:"jonathan", name:"Jonathan son of Saul", short:"Jonathan", cat:"king", w:10,
  clash:"Jonathan", clashtag:"Saul's son, David's close friend, killed with Saul at Gilboa.",
  dates:"c. 11th c. BC (traditional)",
  desc:`Saul's son, who with only his armor-bearer climbs to the Philistine outpost — "Nothing can hinder the LORD from saving, whether by many or by few" — and is spared from his father's rash oath by the army. After David kills Goliath, "Jonathan became one in spirit with David, and he loved him as himself"; he gives David his robe, sword and bow, warns him with the arrows in the field, and in the wilderness tells him, "You will be king over Israel, and I will be second to you." He falls with Saul at Gilboa.`,
  refs:["1 Samuel 13–14","1 Samuel 18:1–4","1 Samuel 19:1–7","1 Samuel 20","1 Samuel 23:16–18","1 Samuel 31:2"]},

 {id:"david", name:"David son of Jesse", short:"David", cat:"king", w:16, halo:1,
  aliases:"\"a man after his own heart\" (1 Samuel 13:14) · \"the hero of Israel's songs\"",
  dates:"reigned c. 1010 – 970 BC · 30 when he became king; reigned 40 years (2 Samuel 5:4)",
  desc:`The youngest son of Jesse of Bethlehem, a shepherd anointed by Samuel — "the LORD looks at the heart." He plays the lyre for Saul, kills Goliath "in the name of the LORD Almighty," and is loved by Jonathan; hunted by Saul, he twice spares "the LORD's anointed." Made king over Judah at Hebron and then over all Israel, he takes Jerusalem, brings up the ark dancing "with all his might," and receives the LORD's promise through Nathan: "your throne will be established forever." He takes Bathsheba and has Uriah killed; confronted — "You are the man!" — he confesses, "I have sinned against the LORD." The sword does not depart from his house: Amnon rapes Tamar, Absalom kills Amnon and rebels, and David weeps, "O my son Absalom!" He sings of the LORD as "my rock, my fortress and my deliverer," and after the census buys Araunah's threshing floor to stop the plague.`,
  refs:["1 Samuel 16–17","1 Samuel 24","1 Samuel 26","2 Samuel 2:4","2 Samuel 5–7","2 Samuel 11–12","2 Samuel 15–19","2 Samuel 22–24","Psalms"]},

 {id:"bathsheba", name:"Bathsheba", short:"Bathsheba", cat:"king", w:9,
  dates:"c. 10th c. BC (traditional)",
  desc:`"The daughter of Eliam and the wife of Uriah the Hittite," whom David sees bathing, sends for and sleeps with; when she is pregnant David arranges Uriah's death and marries her. Their first son dies; she then bears Solomon, whom the LORD loved and named Jedidiah through Nathan.`,
  refs:["2 Samuel 11–12","1 Kings 1–2"]},

 {id:"absalom", name:"Absalom son of David", short:"Absalom", cat:"king", w:10,
  dates:"c. 10th c. BC (traditional)",
  desc:`David's third son, by Maakah daughter of Talmai king of Geshur; "in all Israel there was not a man so highly praised for his handsome appearance." After Amnon rapes his sister Tamar he has Amnon killed and flees to Geshur; brought back by Joab's scheme, he "stole the hearts of the people of Israel," proclaims himself king in Hebron, takes Jerusalem and sleeps with his father's concubines. Following Hushai's advice over Ahithophel's, he is defeated in the forest of Ephraim; his hair catches in an oak, and Joab kills him against David's order. He had set up "Absalom's Monument" because "I have no son to carry on the memory of my name."`,
  refs:["2 Samuel 3:3","2 Samuel 13–18"]},

 // ================= 2 SAMUEL =================
 // Sourced chapter-by-chapter from the NIV on bible.com (2 Samuel 1–24).
 {id:"ishbosheth", name:"Ish-Bosheth son of Saul", short:"Ish-Bosheth", cat:"king", w:7,
  dates:"reigned 2 years, c. 1010 BC (2 Samuel 2:10)",
  desc:`Saul's son, made king over Israel by Abner at Mahanaim at forty while Judah followed David; "he reigned two years." When he accuses Abner over Saul's concubine Rizpah, Abner goes over to David. After Abner's death he loses courage and is murdered in his bed by Rekab and Baanah; David executes the killers and buries his head in Abner's tomb.`,
  refs:["2 Samuel 2:8–10","2 Samuel 3:6–11","2 Samuel 4"]},

 {id:"joab", name:"Joab son of Zeruiah", short:"Joab", cat:"king", w:11,
  dates:"c. 11th–10th c. BC (traditional)",
  desc:`Commander of David's army, the eldest of "the three sons of Zeruiah." He murders Abner to avenge his brother Asahel; takes Rabbah; carries David's letter that sends Uriah to his death; brings Absalom home through the wise woman of Tekoa — and later drives three javelins into Absalom's heart against David's order. He stabs Amasa, ends Sheba's revolt at Abel Beth Maakah, and objects to David's census. David laments, "these sons of Zeruiah are too strong for me."`,
  refs:["2 Samuel 2:13–32","2 Samuel 3:22–39","2 Samuel 11–12","2 Samuel 14","2 Samuel 18–20","2 Samuel 24:1–9"]},

 {id:"abishai", name:"Abishai son of Zeruiah", short:"Abishai", cat:"king", w:8,
  dates:"c. 11th–10th c. BC (traditional)",
  desc:`Joab's brother, who goes down with David into Saul's camp and urges, "let me pin him to the ground." He joins Joab in killing Abner, offers to cut off Shimei's head, commands a third of the army against Absalom, and saves David from the giant Ishbi-Benob. "Chief of the Three," he once killed three hundred men.`,
  refs:["1 Samuel 26:6–9","2 Samuel 3:30","2 Samuel 16:9–11","2 Samuel 18:2","2 Samuel 21:16–17","2 Samuel 23:18–19"]},

 {id:"asahel", name:"Asahel son of Zeruiah", short:"Asahel", cat:"king", w:6,
  dates:"c. 1010 BC (traditional)",
  desc:`Joab's brother, "as fleet-footed as a wild gazelle," who chases Abner at Gibeon and will not turn aside; Abner kills him with the butt of his spear. He is buried in his father's tomb at Bethlehem and listed among the Thirty.`,
  refs:["2 Samuel 2:18–23","2 Samuel 3:27–30","2 Samuel 23:24"]},

 {id:"zeruiah", name:"Zeruiah", short:"Zeruiah", cat:"king", w:5,
  dates:"c. 11th c. BC (traditional)",
  desc:`Mother of Joab, Abishai and Asahel — "the three sons of Zeruiah." 2 Samuel 17:25 calls Amasa's mother Abigail "sister of Zeruiah the mother of Joab."`,
  refs:["2 Samuel 2:18","2 Samuel 17:25"]},

 {id:"amnon", name:"Amnon son of David", short:"Amnon", cat:"king", w:7,
  dates:"c. 10th c. BC (traditional)",
  desc:`David's firstborn, by Ahinoam of Jezreel. Advised by Jonadab, he feigns illness and rapes his half-sister Tamar, then "hated her with intense hatred." Two years later Absalom has him killed at the sheepshearing at Baal Hazor.`,
  refs:["2 Samuel 3:2","2 Samuel 13"]},

 {id:"kileab", name:"Kileab son of David", short:"Kileab", cat:"king", w:4,
  dates:"c. 10th c. BC (traditional)",
  desc:`David's second son, born in Hebron to Abigail, the widow of Nabal.`,
  refs:["2 Samuel 3:3"]},

 {id:"maakah_g", name:"Maakah daughter of Talmai", short:"Maakah (Absalom's mother)", cat:"king", w:5,
  clash:"Maakah", clashtag:"Daughter of Talmai king of Geshur, David's wife and Absalom's mother.",
  dates:"c. 10th c. BC (traditional)",
  desc:`Mother of Absalom (and so of Tamar), "daughter of Talmai king of Geshur" — the grandfather to whom Absalom flees after killing Amnon.`,
  refs:["2 Samuel 3:3","2 Samuel 13:37"]},

 {id:"haggith", name:"Haggith", short:"Haggith", cat:"king", w:4,
  dates:"c. 10th c. BC (traditional)",
  desc:`One of David's wives in Hebron; mother of Adonijah, his fourth son.`,
  refs:["2 Samuel 3:4","1 Kings 1:5"]},

 {id:"nathan_s", name:"Nathan son of David", short:"Nathan (David's son)", cat:"king", w:4,
  clash:"Nathan", clashtag:"A son born to David in Jerusalem, named alongside Solomon.",
  dates:"c. 10th c. BC (traditional)",
  desc:`One of the sons born to David in Jerusalem — "Shammua, Shobab, Nathan, Solomon," with Ibhar, Elishua, Nepheg, Japhia, Elishama, Eliada and Eliphelet.`,
  notconfused:`Nathan the prophet, who confronted David over Bathsheba (2 Samuel 12).`,
  refs:["2 Samuel 5:14"]},

 {id:"tamar_d", name:"Tamar daughter of David", short:"Tamar (David's daughter)", cat:"king", w:7,
  clash:"Tamar", clashtag:"David's daughter, Absalom's sister, raped by her half-brother Amnon.",
  dates:"c. 10th c. BC (traditional)",
  desc:`"The beautiful sister of Absalom," whom Amnon lures into his room and rapes despite her plea, "Don't do this wicked thing." Sent away, she tears her ornate robe and lives "in her brother Absalom's house, a desolate woman." Absalom names his own daughter Tamar.`,
  notconfused:`Tamar, Judah's daughter-in-law (Genesis 38).`,
  refs:["2 Samuel 13:1–22","2 Samuel 13:32","2 Samuel 14:27"]},

 {id:"jonadab", name:"Jonadab son of Shimeah", short:"Jonadab", cat:"king", w:5,
  dates:"c. 10th c. BC (traditional)",
  desc:`Amnon's adviser, "son of Shimeah, David's brother" — "a very shrewd man" — who suggests the ruse that lets Amnon get Tamar alone, and later assures David that "only Amnon is dead."`,
  refs:["2 Samuel 13:3–5","2 Samuel 13:32–35"]},

 {id:"rizpah", name:"Rizpah daughter of Aiah", short:"Rizpah", cat:"king", w:6,
  dates:"c. 10th c. BC (traditional)",
  desc:`Saul's concubine, over whom Ish-Bosheth accuses Abner. When her two sons Armoni and Mephibosheth are handed to the Gibeonites and killed, she spreads sackcloth on a rock and guards their bodies "from the beginning of the harvest till the rain poured down"; moved by this, David gives Saul and Jonathan an honorable burial.`,
  refs:["2 Samuel 3:7","2 Samuel 21:8–14"]},

 {id:"armoni", name:"Armoni son of Saul", short:"Armoni", cat:"king", w:4,
  dates:"c. 10th c. BC (traditional)",
  desc:`A son of Saul by Rizpah, handed over to the Gibeonites with six others and put to death at the start of the barley harvest.`,
  refs:["2 Samuel 21:8–9"]},

 {id:"mephibosheth_r", name:"Mephibosheth son of Saul", short:"Mephibosheth (Rizpah's son)", cat:"king", w:4,
  clash:"Mephibosheth", clashtag:"Saul's son by Rizpah, put to death by the Gibeonites.",
  dates:"c. 10th c. BC (traditional)",
  desc:`A son of Saul by Rizpah, given to the Gibeonites and killed; David spared the other Mephibosheth, Jonathan's son.`,
  notconfused:`Mephibosheth son of Jonathan, who ate at David's table (2 Samuel 9).`,
  refs:["2 Samuel 21:8–9"]},

 {id:"mephibosheth", name:"Mephibosheth son of Jonathan", short:"Mephibosheth", cat:"king", w:7,
  clash:"Mephibosheth", clashtag:"Jonathan's lame son, who ate at David's table.",
  dates:"c. 10th c. BC (traditional)",
  desc:`Jonathan's son, lamed at five when his nurse fled with him at news of Gilboa. David shows him kindness "for the sake of your father Jonathan," restores Saul's land and has him eat at the king's table: "What is your servant, that you should notice a dead dog like me?" During Absalom's revolt Ziba accuses him; when David returns, Mephibosheth says Ziba betrayed him, and David divides the land between them. David spares him when the Gibeonites demand Saul's descendants. His son was Mika.`,
  notconfused:`Mephibosheth son of Saul by Rizpah (2 Samuel 21:8).`,
  refs:["2 Samuel 4:4","2 Samuel 9","2 Samuel 16:1–4","2 Samuel 19:24–30","2 Samuel 21:7"]},

 {id:"ziba", name:"Ziba", short:"Ziba", cat:"king", w:6,
  dates:"c. 10th c. BC (traditional)",
  desc:`"A servant of Saul's household" with fifteen sons and twenty servants, who tells David of Mephibosheth and is ordered to farm Saul's land for him. When David flees Absalom, Ziba meets him with provisions and claims Mephibosheth hopes to regain Saul's kingdom; David later orders the land divided between them.`,
  refs:["2 Samuel 9","2 Samuel 16:1–4","2 Samuel 19:17","2 Samuel 19:26–29"]},

 {id:"makir_a", name:"Makir son of Ammiel", short:"Makir (Lo Debar)", cat:"king", w:4,
  clash:"Makir", clashtag:"The man of Lo Debar who sheltered Mephibosheth and later supplied David at Mahanaim.",
  dates:"c. 10th c. BC (traditional)",
  desc:`Of Lo Debar, in whose house Mephibosheth was living; later he brings bedding and food to David at Mahanaim.`,
  notconfused:`Makir son of Manasseh, Joseph's grandson (Numbers 26:29).`,
  refs:["2 Samuel 9:4–5","2 Samuel 17:27–29"]},

 {id:"zadok", name:"Zadok son of Ahitub", short:"Zadok", cat:"priest", w:8,
  dates:"c. 10th c. BC (traditional)",
  desc:`A priest with Abiathar under David. When David flees Absalom he sends Zadok back with the ark — "If I find favor in the LORD's eyes, he will bring me back" — and Zadok's son Ahimaaz carries Hushai's warnings to David.`,
  refs:["2 Samuel 8:17","2 Samuel 15:24–36","2 Samuel 17:15","2 Samuel 19:11","2 Samuel 20:25"]},

 {id:"ahimaaz_z", name:"Ahimaaz son of Zadok", short:"Ahimaaz", cat:"priest", w:6,
  dates:"c. 10th c. BC (traditional)",
  desc:`Zadok's son, who with Jonathan son of Abiathar hides in a well at Bahurim and brings David Hushai's warning. After the battle he outruns the Cushite to David but cannot bring himself to say that Absalom is dead.`,
  notconfused:`Ahimaaz the father of Saul's wife Ahinoam (1 Samuel 14:50).`,
  refs:["2 Samuel 15:27–36","2 Samuel 17:17–21","2 Samuel 18:19–30"]},

 {id:"jonathan_a", name:"Jonathan son of Abiathar", short:"Jonathan (Abiathar's son)", cat:"priest", w:5,
  clash:"Jonathan", clashtag:"Abiathar's son, a messenger for David during Absalom's revolt.",
  dates:"c. 10th c. BC (traditional)",
  desc:`With Ahimaaz son of Zadok, a messenger who hides in a well at Bahurim and carries Hushai's warning to David.`,
  refs:["2 Samuel 15:27","2 Samuel 15:36","2 Samuel 17:17–21"]},

 {id:"uzzah", name:"Uzzah son of Abinadab", short:"Uzzah", cat:"judg", w:5,
  dates:"c. 10th c. BC (traditional)",
  desc:`With his brother Ahio, he guides the new cart bringing the ark from Abinadab's house. When the oxen stumble he takes hold of the ark, and "God struck him down, and he died there beside the ark of God"; the place is called Perez Uzzah.`,
  refs:["2 Samuel 6:3–8"]},

 {id:"ahio", name:"Ahio son of Abinadab", short:"Ahio", cat:"judg", w:4,
  dates:"c. 10th c. BC (traditional)",
  desc:`Uzzah's brother, who walked in front of the ark on the new cart.`,
  refs:["2 Samuel 6:3–4"]},

 {id:"obededom", name:"Obed-Edom the Gittite", short:"Obed-Edom", cat:"king", w:5,
  dates:"c. 10th c. BC (traditional)",
  desc:`In whose house David leaves the ark for three months after Uzzah's death; "the LORD blessed him and his entire household," and David then brings the ark up to the City of David.`,
  refs:["2 Samuel 6:10–12"]},

 {id:"ittai", name:"Ittai the Gittite", short:"Ittai", cat:"king", w:6,
  dates:"c. 10th c. BC (traditional)",
  desc:`A foreigner from Gath who refuses to leave David when he flees: "wherever my lord the king may be, whether it means life or death, there will your servant be." He commands a third of David's army against Absalom.`,
  refs:["2 Samuel 15:18–22","2 Samuel 18:2–5"]},

 {id:"hushai", name:"Hushai the Arkite", short:"Hushai", cat:"king", w:7,
  dates:"c. 10th c. BC (traditional)",
  desc:`"David's confidant," sent back to Jerusalem to serve Absalom and frustrate Ahithophel's advice. His counsel to wait and gather all Israel prevails — "the LORD had determined to frustrate the good advice of Ahithophel" — and he warns David through the priests.`,
  refs:["2 Samuel 15:32–37","2 Samuel 16:16–19","2 Samuel 17:5–16"]},

 {id:"ahithophel", name:"Ahithophel the Gilonite", short:"Ahithophel", cat:"king", w:7,
  dates:"c. 10th c. BC (traditional)",
  desc:`David's counselor, whose advice "was like that of one who inquires of God," who joins Absalom's conspiracy. He tells Absalom to sleep with his father's concubines and to strike David at once; when Hushai's advice is chosen instead, he goes home, puts his house in order and hangs himself. Eliam son of Ahithophel is listed among David's Thirty.`,
  refs:["2 Samuel 15:12","2 Samuel 15:31","2 Samuel 16:20–23","2 Samuel 17:1–23","2 Samuel 23:34"]},

 {id:"shimei", name:"Shimei son of Gera", short:"Shimei", cat:"king", w:6,
  dates:"c. 10th c. BC (traditional)",
  desc:`A Benjamite of Saul's clan who pelts the fleeing David with stones and curses — "Get out, get out, you murderer!" David restrains Abishai: "let him curse, for the LORD has told him to." On David's return Shimei falls before him, and David swears, "You shall not die."`,
  refs:["2 Samuel 16:5–13","2 Samuel 19:16–23"]},

 {id:"amasa", name:"Amasa son of Jether", short:"Amasa", cat:"king", w:6,
  dates:"c. 10th c. BC (traditional)",
  desc:`Absalom's commander "in place of Joab," son of Jether, an Ishmaelite, and of "Abigail, the daughter of Nahash and sister of Zeruiah." David later promises him command of his army, but when he is slow to summon Judah against Sheba, Joab greets him — "How are you, my brother?" — and stabs him.`,
  refs:["2 Samuel 17:25","2 Samuel 19:13","2 Samuel 20:4–12"]},

 {id:"barzillai", name:"Barzillai the Gileadite", short:"Barzillai", cat:"king", w:6,
  dates:"c. 10th c. BC (traditional)",
  desc:`"A very wealthy man" of Rogelim, eighty years old, who provides for David at Mahanaim. Invited to Jerusalem, he declines — "Can your servant taste what he eats and drinks?" — and sends his servant Kimham instead.`,
  refs:["2 Samuel 17:27–29","2 Samuel 19:31–39"]},

 {id:"sheba_b", name:"Sheba son of Bikri", short:"Sheba", cat:"king", w:6,
  dates:"c. 10th c. BC (traditional)",
  desc:`"A troublemaker," a Benjamite who sounds the trumpet — "We have no share in David… Every man to his tent, Israel!" — and leads Israel away. Besieged in Abel Beth Maakah, he is beheaded by the townspeople on the advice of a wise woman, and his head is thrown to Joab.`,
  refs:["2 Samuel 20:1–22"]},

 {id:"wisewoman_tekoa", name:"The wise woman of Tekoa", short:"Wise woman of Tekoa", cat:"king", w:5,
  dates:"c. 10th c. BC (traditional)",
  desc:`Brought by Joab to tell David a story of two sons, one of whom killed the other, so that he would bring the banished Absalom home: "God… devises ways so that a banished person does not remain banished from him." Unnamed in Scripture.`,
  refs:["2 Samuel 14:1–20"]},

 {id:"wisewoman_abel", name:"The wise woman of Abel", short:"Wise woman of Abel", cat:"king", w:5,
  dates:"c. 10th c. BC (traditional)",
  desc:`A woman of Abel Beth Maakah who calls to Joab from the wall — "You are trying to destroy a city that is a mother in Israel" — and persuades her town to throw Sheba's head to him. Unnamed in Scripture.`,
  refs:["2 Samuel 20:16–22"]},

 {id:"benaiah", name:"Benaiah son of Jehoiada", short:"Benaiah", cat:"king", w:8,
  dates:"c. 10th c. BC (traditional)",
  desc:`"A valiant fighter from Kabzeel," over David's Kerethites and Pelethites and in charge of his bodyguard. He struck down Moab's two mightiest warriors, "went down into a pit on a snowy day and killed a lion," and killed a huge Egyptian with his own spear.`,
  refs:["2 Samuel 8:18","2 Samuel 20:23","2 Samuel 23:20–23"]},

 {id:"jehoshaphat_r", name:"Jehoshaphat son of Ahilud", short:"Jehoshaphat (recorder)", cat:"king", w:4,
  clash:"Jehoshaphat", clashtag:"David's (and Solomon's) recorder.",
  dates:"c. 10th c. BC (traditional)",
  desc:`David's recorder, listed among his officials.`,
  refs:["2 Samuel 8:16","2 Samuel 20:24","1 Kings 4:3"]},

 {id:"uriah", name:"Uriah the Hittite", short:"Uriah", cat:"king", w:7,
  clash:"Uriah", clashtag:"The Hittite, Bathsheba's husband, whom David had killed.",
  dates:"c. 10th c. BC (traditional)",
  desc:`Husband of Bathsheba and one of David's Thirty. Called home from the siege of Rabbah, he will not go to his house: "How could I go to my house to eat and drink and make love to my wife?" He carries David's own letter to Joab — "Put Uriah out in front where the fighting is fiercest" — and is killed.`,
  refs:["2 Samuel 11","2 Samuel 12:9–10","2 Samuel 23:39"]},

 {id:"josheb", name:"Josheb-Basshebeth", short:"Josheb-Basshebeth", cat:"king", w:5,
  dates:"c. 10th c. BC (traditional)",
  desc:`"A Tahkemonite," chief of the Three among David's mighty warriors, who "raised his spear against eight hundred men, whom he killed in one encounter."`,
  refs:["2 Samuel 23:8"]},

 {id:"eleazar_d", name:"Eleazar son of Dodai", short:"Eleazar (mighty man)", cat:"king", w:5,
  clash:"Eleazar", clashtag:"One of David's Three, who fought until his hand froze to his sword.",
  dates:"c. 10th c. BC (traditional)",
  desc:`"The Ahohite," one of the Three, who stood his ground against the Philistines "till his hand grew tired and froze to the sword."`,
  refs:["2 Samuel 23:9–10"]},

 {id:"shammah_a", name:"Shammah son of Agee", short:"Shammah (mighty man)", cat:"king", w:5,
  clash:"Shammah", clashtag:"One of David's Three, who defended a field of lentils alone.",
  dates:"c. 10th c. BC (traditional)",
  desc:`"The Hararite," one of the Three, who took his stand in a field full of lentils when Israel fled, "and the LORD brought about a great victory."`,
  notconfused:`Shammah son of Jesse, David's brother (1 Samuel 16:9).`,
  refs:["2 Samuel 23:11–12"]},

 {id:"adonijah", name:"Adonijah son of David", short:"Adonijah", cat:"king", w:7,
  dates:"c. 10th c. BC (traditional)",
  desc:`David's fourth son, by Haggith, "born next after Absalom" and "very handsome"; his father "had never rebuked him." As David lies old he declares, "I will be king," backed by Joab and Abiathar, and holds a feast at En Rogel. When Nathan and Bathsheba secure Solomon's anointing, he clings to the horns of the altar and is spared — until he asks for Abishag as his wife, and Solomon has Benaiah strike him down.`,
  refs:["2 Samuel 3:4","1 Kings 1:5–53","1 Kings 2:13–25"]},


 {id:"solomon", name:"Solomon son of David", short:"Solomon", cat:"king", w:14, halo:1,
  aliases:"Jedidiah",
  dates:"reigned 40 years, c. 970 – 931 BC (1 Kings 11:42)",
  desc:`Son of David and Bathsheba, named Jedidiah because "the LORD loved him." Anointed at Gihon by Zadok and Nathan when Adonijah claims the throne, he secures his rule by executing Adonijah, Joab and Shimei and banishing Abiathar. At Gibeon he asks for "a discerning heart to govern your people," and God adds wealth and honor; his ruling between two mothers shows "wisdom from God to administer justice." He speaks three thousand proverbs and 1,005 songs, builds the temple in seven years — begun "in the four hundred and eightieth year after the Israelites came out of Egypt" — and prays at its dedication, "will God really dwell on earth?" The queen of Sheba finds that "not even half was told me." But his many foreign wives "turned his heart after other gods," and the LORD tears ten tribes from his son, raising up Hadad, Rezon and Jeroboam against him.`,
  refs:["2 Samuel 12:24–25","1 Kings 1–11"]},

 {id:"rehoboam", name:"Rehoboam son of Solomon", short:"Rehoboam", cat:"king", w:8,
  dates:"reigned 17 years, c. 931 – 913 BC (Judah)",
  desc:`Solomon's son by Naamah the Ammonite. At Shechem he rejects the elders' advice and answers Israel harshly — "My father scourged you with whips; I will scourge you with scorpions" — and the northern tribes cry, "To your tents, Israel!" and make Jeroboam king. Shemaiah stops him from going to war. In his fifth year Shishak of Egypt plunders Jerusalem; he replaces Solomon's gold shields with bronze. "There was continual warfare between Rehoboam and Jeroboam."`,
  refs:["1 Kings 11:43","1 Kings 12:1–24","1 Kings 14:21–31"]},

 {id:"jeroboam1", name:"Jeroboam son of Nebat", short:"Jeroboam I", cat:"king", w:9,
  clash:"Jeroboam", clashtag:"The official who led the northern tribes away and made the first king of divided Israel; set up the golden calves.",
  dates:"reigned 22 years, c. 931 – 910 BC (Israel)",
  desc:`"An Ephraimite from Zeredah," whose mother was a widow named Zeruah; put in charge of the labor force of the tribes of Joseph. Ahijah tears his cloak and gives him ten pieces — ten tribes. He flees from Solomon to Shishak in Egypt, returns, and is made king of Israel. Fearing his people will turn back to Jerusalem, he sets up golden calves at Bethel and Dan — "Here are your gods, Israel" — appoints non-Levite priests and a festival of his own choosing. A man of God from Judah denounces his altar; Ahijah foretells the end of his house. "This was the sin of the house of Jeroboam."`,
  notconfused:`Jeroboam II, a later and more prosperous king of the same northern kingdom.`,
  refs:["1 Kings 11:26–40","1 Kings 12–14"]},

 // ================= 1 KINGS =================
 // Sourced chapter-by-chapter from the NIV on bible.com (1 Kings 1–22).
 {id:"abishag", name:"Abishag the Shunammite", short:"Abishag", cat:"king", w:6,
  dates:"c. 970 BC (traditional)",
  desc:`"A beautiful young woman" brought to care for the aged David, "but the king had no sexual relations with her." When Adonijah asks for her as his wife, Solomon replies, "You might as well request the kingdom for him," and has him killed.`,
  refs:["1 Kings 1:1–4","1 Kings 1:15","1 Kings 2:13–25"]},

 {id:"adoniram", name:"Adoniram son of Abda", short:"Adoniram", cat:"king", w:5,
  dates:"c. 10th c. BC (traditional)",
  desc:`In charge of forced labor under David and Solomon. When Rehoboam sends him out to the rebellious northern tribes, "all Israel stoned him to death."`,
  refs:["2 Samuel 20:24","1 Kings 4:6","1 Kings 5:14","1 Kings 12:18"]},

 {id:"ahijah_sh", name:"Ahijah the Shilonite", short:"Ahijah (prophet)", cat:"proph", w:7,
  clash:"Ahijah", clashtag:"The prophet of Shiloh who tore his cloak into twelve pieces and gave Jeroboam ten.",
  dates:"c. 10th c. BC",
  desc:`"The prophet of Shiloh," who meets Jeroboam on the road, tears his new cloak into twelve pieces and tells him, "Take ten pieces for yourself… I am going to tear the kingdom out of Solomon's hand." Years later, old and blind, he recognizes Jeroboam's disguised wife and announces disaster on Jeroboam's house and the death of their son.`,
  notconfused:`Ahijah son of Ahitub, the priest with Saul's army (1 Samuel 14:3).`,
  refs:["1 Kings 11:29–39","1 Kings 12:15","1 Kings 14:1–18","1 Kings 15:29"]},

 {id:"shemaiah", name:"Shemaiah the man of God", short:"Shemaiah", cat:"proph", w:5,
  dates:"c. 10th c. BC",
  desc:`"The man of God" who tells Rehoboam and the army of Judah and Benjamin, "Do not go up to fight against your brothers, the Israelites… this is my doing" — and they go home.`,
  refs:["1 Kings 12:21–24"]},

 {id:"manofgod_judah", name:"The man of God from Judah", short:"Man of God from Judah", cat:"proph", w:6,
  dates:"c. 10th c. BC",
  desc:`Sent to Bethel, he cries out against Jeroboam's altar that "a son named Josiah will be born to the house of David" who will burn the priests' bones on it; the altar splits and Jeroboam's hand shrivels. Deceived by an old prophet into eating in Bethel against the LORD's command, he is killed by a lion on the road. Unnamed in Scripture.`,
  refs:["1 Kings 13"]},

 {id:"oldprophet_bethel", name:"The old prophet of Bethel", short:"Old prophet of Bethel", cat:"proph", w:5,
  dates:"c. 10th c. BC",
  desc:`A prophet living in Bethel who lies to the man of God from Judah — "an angel said to me…" — and brings him home to eat, then pronounces his doom. He buries him in his own tomb and asks to be buried beside him. Unnamed in Scripture.`,
  refs:["1 Kings 13:11–32"]},

 {id:"abijah_j", name:"Abijah son of Jeroboam", short:"Abijah (Jeroboam's son)", cat:"king", w:4,
  clash:"Abijah", clashtag:"Jeroboam's son who died as a boy — 'the only one in the house of Jeroboam in whom the LORD… found anything good.'",
  dates:"c. 10th c. BC",
  desc:`Jeroboam's son, whose illness sends his disguised mother to Ahijah; he dies as she steps over her threshold, "the only one in the house of Jeroboam in whom the LORD, the God of Israel, has found anything good."`,
  refs:["1 Kings 14:1–18"]},

 {id:"naamah_a", name:"Naamah the Ammonite", short:"Naamah (Rehoboam's mother)", cat:"king", w:4,
  clash:"Naamah", clashtag:"Rehoboam's mother, an Ammonite.",
  dates:"c. 10th c. BC",
  desc:`"His mother's name was Naamah; she was an Ammonite" — the mother of Rehoboam, named twice in his reign summary.`,
  notconfused:`Naamah, Tubal-Cain's sister in Cain's line (Genesis 4:22).`,
  refs:["1 Kings 14:21","1 Kings 14:31"]},

 {id:"abijah_k", name:"Abijah king of Judah", short:"Abijah (king)", cat:"king", w:6,
  clash:"Abijah", clashtag:"Rehoboam's son and successor, king of Judah for three years.",
  dates:"reigned 3 years, c. 913 – 910 BC (Judah)",
  desc:`Son of Rehoboam, king of Judah three years; "he committed all the sins his father had done." Yet "for David's sake the LORD his God gave him a lamp in Jerusalem." There was war between him and Jeroboam.`,
  refs:["1 Kings 14:31","1 Kings 15:1–8"]},

 {id:"maakah_ab", name:"Maakah daughter of Abishalom", short:"Maakah (queen mother)", cat:"king", w:5,
  clash:"Maakah", clashtag:"Mother of King Abijah and grandmother of Asa, deposed as queen mother for an Asherah image.",
  dates:"c. 10th c. BC",
  desc:`Mother of Abijah and "grandmother" of Asa, who "deposed his grandmother Maakah from her position as queen mother, because she had made a repulsive image for the worship of Asherah."`,
  refs:["1 Kings 15:2","1 Kings 15:10–13"]},

 {id:"asa", name:"Asa king of Judah", short:"Asa", cat:"king", w:8,
  dates:"reigned 41 years, c. 910 – 869 BC (Judah)",
  desc:`Abijah's son, who "did what was right in the eyes of the LORD, as his father David had done": he expels the shrine prostitutes, removes the idols and deposes Maakah. At war with Baasha, he sends the temple treasure to Ben-Hadad of Aram to break his treaty with Israel. "In his old age, however, his feet became diseased."`,
  refs:["1 Kings 15:8–24"]},

 {id:"jehoshaphat_j", name:"Jehoshaphat king of Judah", short:"Jehoshaphat (king)", cat:"king", w:8,
  clash:"Jehoshaphat", clashtag:"Asa's son, a king of Judah who 'did what was right' and allied with Ahab at Ramoth Gilead.",
  dates:"reigned 25 years, c. 872 – 848 BC (Judah)",
  desc:`Son of Asa and Azubah, who "did what was right in the eyes of the LORD." At peace with Israel, he joins Ahab against Ramoth Gilead but insists, "First seek the counsel of the LORD," and asks for a true prophet, Micaiah. His trading fleet is wrecked at Ezion Geber.`,
  notconfused:`Jehoshaphat son of Ahilud, recorder under David and Solomon (2 Samuel 8:16).`,
  refs:["1 Kings 15:24","1 Kings 22:1–50"]},

 {id:"nadab_k", name:"Nadab king of Israel", short:"Nadab (king)", cat:"king", w:5,
  clash:"Nadab", clashtag:"Jeroboam's son, who reigned two years before Baasha killed him.",
  dates:"reigned 2 years, c. 910 – 909 BC (Israel)",
  desc:`Son of Jeroboam, king of Israel two years; he "did evil," and Baasha strikes him down at Gibbethon and destroys Jeroboam's whole family, "according to the word of the LORD given through… Ahijah."`,
  notconfused:`Nadab son of Aaron, consumed by fire for offering unauthorized fire (Leviticus 10).`,
  refs:["1 Kings 14:20","1 Kings 15:25–31"]},

 {id:"baasha", name:"Baasha king of Israel", short:"Baasha", cat:"king", w:7,
  dates:"reigned 24 years, c. 909 – 886 BC (Israel)",
  desc:`"Baasha son of Ahijah from the tribe of Issachar," who kills Nadab and wipes out Jeroboam's house, then follows Jeroboam's ways. He fortifies Ramah against Asa until Ben-Hadad attacks Israel. The prophet Jehu son of Hanani announces that his house will be like Jeroboam's.`,
  refs:["1 Kings 15:16–34","1 Kings 16:1–7"]},

 {id:"jehu_h", name:"Jehu son of Hanani", short:"Jehu (prophet)", cat:"proph", w:5,
  clash:"Jehu", clashtag:"The prophet who announced the end of Baasha's house.",
  dates:"c. 9th c. BC",
  desc:`The prophet through whom "the word of the LORD came… concerning Baasha": "I lifted you up from the dust… So I am about to wipe out Baasha and his house." Zimri fulfills it.`,
  notconfused:`Jehu son of Nimshi, the army commander anointed to destroy Ahab's dynasty (2 Kings 9).`,
  refs:["1 Kings 16:1–7","1 Kings 16:12"]},

 {id:"elah", name:"Elah king of Israel", short:"Elah", cat:"king", w:5,
  dates:"reigned 2 years, c. 886 – 885 BC (Israel)",
  desc:`Son of Baasha, king two years, killed while "getting drunk in the home of Arza, the palace administrator at Tirzah" by Zimri, one of his chariot commanders.`,
  refs:["1 Kings 16:6–14"]},

 {id:"zimri_k", name:"Zimri king of Israel", short:"Zimri (king)", cat:"king", w:5,
  clash:"Zimri", clashtag:"The chariot commander who killed Elah and reigned seven days before burning the palace around himself.",
  dates:"reigned 7 days, c. 885 BC (Israel)",
  desc:`A chariot commander who kills Elah and wipes out Baasha's family. He "reigned in Tirzah seven days"; when Omri besieges the city, he sets the palace on fire around himself and dies.`,
  refs:["1 Kings 16:9–20"]},

 {id:"tibni", name:"Tibni son of Ginath", short:"Tibni", cat:"king", w:4,
  dates:"c. 885 BC (Israel)",
  desc:`After Zimri's death "half supported Tibni son of Ginath for king, and the other half supported Omri. But Omri's followers proved stronger… So Tibni died and Omri became king."`,
  refs:["1 Kings 16:21–22"]},

 {id:"omri", name:"Omri king of Israel", short:"Omri", cat:"king", w:8,
  dates:"reigned 12 years, c. 885 – 874 BC (Israel)",
  desc:`Commander of Israel's army, proclaimed king in the camp when Zimri murders Elah. He buys the hill of Samaria from Shemer and builds the city of Samaria, but "sinned more than all those before him." Father of Ahab.`,
  refs:["1 Kings 16:16–28"]},

 {id:"hiel", name:"Hiel of Bethel", short:"Hiel", cat:"king", w:4,
  dates:"c. 9th c. BC (Israel)",
  desc:`In Ahab's time he rebuilt Jericho, laying its foundations "at the cost of his firstborn son Abiram" and setting up its gates "at the cost of his youngest son Segub, in accordance with the word of the LORD spoken by Joshua son of Nun."`,
  refs:["1 Kings 16:34","Joshua 6:26"]},

 {id:"obadiah_a", name:"Obadiah, Ahab's palace administrator", short:"Obadiah (Ahab's steward)", cat:"king", w:6,
  clash:"Obadiah", clashtag:"Ahab's palace administrator, 'a devout believer in the LORD,' who hid a hundred prophets.",
  dates:"c. 9th c. BC (Israel)",
  desc:`Ahab's palace administrator, "a devout believer in the LORD," who hid a hundred of the LORD's prophets in two caves while Jezebel was killing them. Meeting Elijah, he fears to report him to Ahab, but carries the message.`,
  notconfused:`Obadiah the prophet, author of the short book against Edom.`,
  refs:["1 Kings 18:3–16"]},

 {id:"widow_zarephath", name:"The widow of Zarephath", short:"Widow of Zarephath", cat:"proph", w:6,
  dates:"c. 9th c. BC",
  desc:`A widow in Sidonian Zarephath who, with only a handful of flour and a little oil, bakes bread first for Elijah: "The jar of flour will not be used up and the jug of oil will not run dry." When her son dies, Elijah stretches himself on him and he lives — "Now I know that you are a man of God." Unnamed in Scripture.`,
  refs:["1 Kings 17:8–24"]},

 {id:"naboth", name:"Naboth the Jezreelite", short:"Naboth", cat:"king", w:6,
  dates:"c. 9th c. BC (Israel)",
  desc:`Owner of a vineyard next to Ahab's palace in Jezreel, who refuses to sell it: "The LORD forbid that I should give you the inheritance of my ancestors." Jezebel has two scoundrels accuse him of cursing God and the king, and he is stoned; Elijah announces that dogs will lick up Ahab's blood in the same place.`,
  refs:["1 Kings 21","2 Kings 9:21–26"]},

 {id:"micaiah", name:"Micaiah son of Imlah", short:"Micaiah", cat:"proph", w:7,
  dates:"c. 9th c. BC",
  desc:`The prophet Ahab hates "because he never prophesies anything good about me." Summoned before Ahab and Jehoshaphat, he says, "I can tell him only what the LORD tells me," and describes Israel "scattered on the hills like sheep without a shepherd" and a deceiving spirit in the mouths of Ahab's prophets. Slapped by Zedekiah and imprisoned, he declares, "If you ever return safely, the LORD has not spoken through me." Ahab dies at Ramoth Gilead.`,
  refs:["1 Kings 22:7–28"]},

 {id:"zedekiah_k", name:"Zedekiah son of Kenaanah", short:"Zedekiah (prophet)", cat:"proph", w:5,
  clash:"Zedekiah", clashtag:"One of Ahab's prophets, who made iron horns and slapped Micaiah.",
  dates:"c. 9th c. BC",
  desc:`One of Ahab's four hundred prophets, who makes iron horns — "With these you will gore the Arameans" — and slaps Micaiah in the face.`,
  notconfused:`Zedekiah the last king of Judah (2 Kings 24–25).`,
  refs:["1 Kings 22:11","1 Kings 22:24–25"]},


 {id:"ahab", name:"Ahab son of Omri", short:"Ahab", cat:"king", w:11,
  dates:"reigned 22 years, c. 874 – 853 BC (Israel)",
  desc:`King of Israel in Samaria, who "did more evil in the eyes of the LORD than any of those before him": he marries Jezebel daughter of Ethbaal, builds a temple of Baal and an Asherah pole. Elijah announces a drought and calls down fire on Mount Carmel — "Is that you, you troubler of Israel?" He defeats Ben-Hadad twice but lets him go. When Jezebel has Naboth killed for his vineyard, Elijah says dogs will lick up his blood; Ahab humbles himself in sackcloth and the disaster is delayed to his son's days. Ignoring Micaiah, he goes in disguise to Ramoth Gilead, is hit by a random arrow, and dies; dogs lick his blood from the chariot.`,
  refs:["1 Kings 16:28–34","1 Kings 18","1 Kings 20–22"]},

 {id:"jezebel", name:"Jezebel daughter of Ethbaal", short:"Jezebel", cat:"king", w:9,
  dates:"c. 9th c. BC (Israel)",
  desc:`"Jezebel daughter of Ethbaal king of the Sidonians," whose marriage to Ahab comes with his turn to "serve Baal." She kills off the LORD's prophets, feeds the prophets of Baal and Asherah "at Jezebel's table," and after Carmel vows to take Elijah's life. She has Naboth falsely accused and stoned so Ahab can take his vineyard; Elijah foretells that dogs will devour her at Jezreel. Mother of King Joram, she is thrown from a window when Jehu enters Jezreel — "you Zimri, you murderer of your master" — and only her skull, feet and hands are found.`,
  refs:["1 Kings 16:31","1 Kings 18:4","1 Kings 18:19","1 Kings 19:1–2","1 Kings 21","2 Kings 9:22","2 Kings 9:30–37"]},

 {id:"jehu", name:"Jehu son of Nimshi", short:"Jehu", cat:"king", w:9,
  clash:"Jehu", clashtag:"Son of Jehoshaphat, son of Nimshi: the commander anointed to destroy Ahab's house.",
  dates:"reigned 28 years, c. 841 – 814 BC (Israel)",
  desc:`An army commander at Ramoth Gilead — "Jehu son of Jehoshaphat, the son of Nimshi" — anointed by a young prophet sent by Elisha: "You are to destroy the house of Ahab." Driving "like a maniac" to Jezreel, he shoots Joram, has Ahaziah of Judah struck down and Jezebel thrown from a window. He has Ahab's seventy sons killed, takes Jehonadab son of Rekab into his chariot, then calls a great sacrifice for Baal and slaughters its servants: "So Jehu destroyed Baal worship in Israel." Yet he keeps the golden calves of Bethel and Dan. The LORD promises his descendants the throne "to the fourth generation," while Hazael begins to take Israel's land.`,
  notconfused:`Jehu son of Hanani, the prophet who denounced Baasha. His father Jehoshaphat son of Nimshi is not Jehoshaphat king of Judah.`,
  refs:["1 Kings 19:16–17","2 Kings 9–10","2 Kings 15:12"]},

 {id:"athaliah", name:"Athaliah", short:"Athaliah", cat:"king", w:8,
  dates:"ruled 6 years, c. 841 – 835 BC (Judah)",
  desc:`Mother of King Ahaziah of Judah, "a granddaughter of Omri king of Israel." When her son is killed, "she proceeded to destroy the whole royal family" and rules the land six years — but the infant Joash is hidden in the temple by Jehosheba. In the seventh year the priest Jehoiada crowns Joash; Athaliah tears her robes crying "Treason! Treason!" and is put to death where the horses enter the palace grounds.`,
  notconfused:`2 Kings 8:18 says her husband Jehoram "married a daughter of Ahab." She is the only wife of his named, but the text does not state the identification outright.`,
  refs:["2 Kings 8:18","2 Kings 8:26","2 Kings 11"]},

 {id:"jehoram_judah", name:"Jehoram son of Jehoshaphat", short:"Jehoram (Judah)", cat:"king", w:7,
  aliases:"Joram of Judah",
  clash:"Joram", clashtag:"King of Judah, son of Jehoshaphat, who 'married a daughter of Ahab.'",
  dates:"reigned 8 years, c. 848 – 841 BC (Judah)",
  desc:`King of Judah at 32. "He followed the ways of the kings of Israel… for he married a daughter of Ahab," yet for David's sake the LORD will not destroy Judah, having promised "to maintain a lamp for David." In his time Edom rebels and sets up its own king, and Libnah revolts. His son Ahaziah succeeds him; his daughter Jehosheba later saves the infant Joash.`,
  notconfused:`Joram (Jehoram) of Israel, son of Ahab, reigning at the same time in the north.`,
  refs:["1 Kings 22:50","2 Kings 8:16–24","2 Kings 11:2"]},

 {id:"joram_israel", name:"Joram son of Ahab", short:"Joram (Israel)", cat:"king", w:7,
  aliases:"Jehoram of Israel",
  clash:"Joram", clashtag:"King of Israel, son of Ahab and Jezebel; shot by Jehu at Jezreel.",
  dates:"reigned 12 years, c. 852 – 841 BC (Israel)",
  desc:`Son of Ahab who does evil, "but not as his father and mother had done": he removes Baal's sacred stone yet clings to Jeroboam's sins. With Jehoshaphat of Judah and the king of Edom he marches against Mesha of Moab; Elisha helps only out of respect for Jehoshaphat. Wounded by Hazael's Arameans at Ramoth Gilead, he recovers at Jezreel, where Jehu shoots him "between the shoulders," and his body is thrown on Naboth's field. The "king of Israel" in the Naaman and Samaria-siege stories (2 Kings 5–7) is not named.`,
  notconfused:`Jehoram (Joram) of Judah, son of Jehoshaphat, reigning at the same time in the south.`,
  refs:["2 Kings 1:17","2 Kings 3","2 Kings 8:28–29","2 Kings 9:14–26"]},

 {id:"ahaziah_israel", name:"Ahaziah son of Ahab", short:"Ahaziah (Israel)", cat:"king", w:6,
  clash:"Ahaziah", clashtag:"Short-reigning king of Israel, son of Ahab; injured in a fall, he consulted Baal-Zebub and was rebuked by Elijah.",
  dates:"reigned 2 years, c. 853 – 852 BC (Israel)",
  desc:`Son of Ahab, who "reigned over Israel two years," following "the ways of his father and mother" and serving Baal. Injured in a fall "through the lattice of his upper room in Samaria," he sends to consult Baal-Zebub, the god of Ekron. Elijah intercepts the messengers — "Is it because there is no God in Israel?" — and, after fire consumes two companies sent to seize him, tells the king to his face he will die. He has no son, and Joram succeeds him.`,
  notconfused:`Ahaziah of Judah, son of Jehoram, killed by Jehu about a decade later.`,
  refs:["1 Kings 22:51–53","2 Kings 1"]},

 {id:"ahaziah_judah", name:"Ahaziah son of Jehoram", short:"Ahaziah (Judah)", cat:"king", w:6,
  clash:"Ahaziah", clashtag:"King of Judah for one year, son of Jehoram and Athaliah; killed in Jehu's revolt.",
  dates:"reigned 1 year, c. 841 BC (Judah)",
  desc:`King of Judah at 22; "his mother's name was Athaliah, a granddaughter of Omri," and he "was related by marriage to Ahab's family." He fights beside Joram of Israel against Hazael at Ramoth Gilead and visits the wounded Joram at Jezreel. When Jehu strikes he flees, is wounded near Ibleam and dies at Megiddo, and is buried in the City of David. Jehu later kills forty-two of his relatives at Beth Eked.`,
  notconfused:`Ahaziah of Israel, son of Ahab.`,
  refs:["2 Kings 8:24–29","2 Kings 9:16–29","2 Kings 10:12–14"]},

 {id:"joash_judah", name:"Joash son of Ahaziah", short:"Joash (Judah)", cat:"king", w:7,
  aliases:"Jehoash of Judah",
  clash:"Joash", clashtag:"The boy-king of Judah hidden from Athaliah and crowned by the priest Jehoiada; repaired the temple.",
  dates:"reigned 40 years, c. 835 – 796 BC (Judah)",
  desc:`Rescued as a baby by his aunt Jehosheba when Athaliah kills the royal family, and hidden "at the temple of the LORD for six years." At seven he is crowned by the priest Jehoiada. His mother was Zibiah of Beersheba. He "did what was right… all the years Jehoiada the priest instructed him," and repairs the temple with money from a collection chest. He strips the temple treasuries to buy off Hazael, and is assassinated by his officials Jozabad and Jehozabad at Beth Millo. 2 Chronicles adds that after Jehoiada's death he turned to idols and had Jehoiada's son Zechariah stoned.`,
  notconfused:`Jehoash (Joash) of Israel, son of Jehoahaz, who reigned a generation later; and Joash the Abiezrite, Gideon's father.`,
  refs:["2 Kings 11–12","2 Chronicles 24"]},

 {id:"jehoash_israel", name:"Jehoash son of Jehoahaz", short:"Jehoash (Israel)", cat:"king", w:7,
  aliases:"Joash of Israel",
  clash:"Joash", clashtag:"King of Israel, grandson of Jehu, who wept at Elisha's deathbed and defeated Amaziah.",
  dates:"reigned 16 years, c. 798 – 782 BC (Israel)",
  desc:`Grandson of Jehu, who "did evil in the eyes of the LORD." He weeps at the dying Elisha's bedside — "My father! My father! The chariots and horsemen of Israel!" — and shoots "the LORD's arrow of victory," but strikes the ground only three times; so he defeats Ben-Hadad son of Hazael three times and recovers Israel's towns. Challenged by Amaziah of Judah, he answers with the parable of the thistle and the cedar, captures Amaziah at Beth Shemesh, breaks down Jerusalem's wall and carries off the temple's gold and silver.`,
  notconfused:`Joash of Judah, son of Ahaziah, the earlier boy-king of the same name.`,
  refs:["2 Kings 13:9–25","2 Kings 14:8–16"]},

 {id:"jeroboam2", name:"Jeroboam son of Jehoash", short:"Jeroboam II", cat:"king", w:8,
  clash:"Jeroboam", clashtag:"Jeroboam son of Jehoash, who restored Israel's borders; Amos and Hosea prophesied in his reign.",
  dates:"reigned 41 years, c. 793 – 753 BC (Israel)",
  desc:`King in Samaria, who "did evil in the eyes of the LORD." Even so, "he restored the boundaries of Israel from Lebo Hamath to the Dead Sea," as the LORD had spoken "through his servant Jonah son of Amittai," because the LORD "had seen how bitterly everyone in Israel… was suffering." He recovers Damascus and Hamath. The prophets Amos and Hosea date their ministries to his reign.`,
  notconfused:`Jeroboam son of Nebat (Jeroboam I), the first king of the northern kingdom.`,
  refs:["2 Kings 14:16","2 Kings 14:23–29","Amos 1:1","Hosea 1:1"]},

 {id:"zechariah_k", name:"Zechariah son of Jeroboam", short:"Zechariah (King)", cat:"king", w:6,
  clash:"Zechariah", clashtag:"Son of Jeroboam II and last king of Jehu's dynasty; reigned six months before he was assassinated.",
  dates:"reigned 6 months, c. 753 BC (Israel)",
  desc:`King in Samaria for six months, who does evil "as his predecessors had done." Shallum son of Jabesh assassinates him "in front of the people," and so the word to Jehu is fulfilled: "Your descendants will sit on the throne of Israel to the fourth generation."`,
  notconfused:`Zechariah the post-exilic prophet, and Zechariah the father of John the Baptist in the New Testament.`,
  refs:["2 Kings 14:29","2 Kings 15:8–12"]},

 {id:"uzziah", name:"Azariah (Uzziah) son of Amaziah", short:"Uzziah", cat:"king", w:8,
  aliases:"Azariah",
  dates:"reigned 52 years, c. 792 – 740 BC (Judah)",
  desc:`Called Azariah in most of 2 Kings and Uzziah in 2 Kings 15:13 and 15:30–34. Made king at sixteen by "all the people of Judah" after his father's murder, he rebuilds Elath and does "what was right in the eyes of the LORD," though the high places remain. "The LORD afflicted the king with leprosy until the day he died"; he lives in a separate house while his son Jotham governs. 2 Chronicles explains that "his pride led to his downfall" when he burned incense in the temple. Isaiah's vision is dated "in the year that King Uzziah died."`,
  refs:["2 Kings 14:21–22","2 Kings 15:1–7","2 Chronicles 26","Isaiah 6:1"]},

 {id:"hezekiah", name:"Hezekiah son of Ahaz", short:"Hezekiah", cat:"king", w:11,
  dates:"reigned 29 years, c. 715 – 686 BC (Judah) — start date disputed",
  desc:`He removes the high places and breaks up Moses' bronze snake, Nehushtan, to which Israel had burned incense: "There was no one like him among all the kings of Judah." He rebels against Assyria. When Sennacherib takes Judah's fortified cities he pays tribute, but when the field commander mocks the LORD he spreads the Assyrian letter "before the LORD" and prays. Through Isaiah the LORD promises deliverance, and the angel of the LORD strikes the Assyrian camp. Healed of a deadly illness with fifteen years added, he is given the sign of the shadow going back ten steps — then shows all his treasures to envoys from Babylon, and Isaiah foretells they will be carried there. He made the pool and tunnel that brought water into the city.`,
  refs:["2 Kings 16:20","2 Kings 18–20","Isaiah 36–39"]},

 {id:"manasseh_k", name:"Manasseh son of Hezekiah", short:"Manasseh (King)", cat:"king", w:7,
  clash:"Manasseh", clashtag:"Judah's longest-reigning king (55 years), whose sins 2 Kings names as the cause of Judah's fall.",
  dates:"reigned 55 years, c. 697 – 642 BC (Judah)",
  desc:`King at twelve. He rebuilds the high places, sets up altars to Baal and to the starry hosts in the temple courts, puts a carved Asherah pole in the temple, sacrifices his own son, consults mediums, and "shed so much innocent blood that he filled Jerusalem from end to end." The LORD declares a disaster on Jerusalem so great "that the ears of everyone who hears of it will tingle," and 2 Kings later names his sins as the reason Judah fell. 2 Chronicles adds that Assyria's commanders took him prisoner to Babylon, where he humbled himself and was restored.`,
  notconfused:`Manasseh son of Joseph, ancestor of the tribe of Manasseh.`,
  refs:["2 Kings 21:1–18","2 Kings 23:26","2 Kings 24:3–4","2 Chronicles 33"]},

 {id:"josiah", name:"Josiah son of Amon", short:"Josiah", cat:"king", w:10,
  dates:"reigned 31 years, c. 640 – 609 BC (Judah)",
  desc:`King at eight after his father Amon's assassination. In his eighteenth year Hilkiah the high priest finds "the Book of the Law" in the temple; when Shaphan reads it to him, Josiah tears his robes and sends to the prophet Huldah. He renews the covenant, purges the temple of Baal and Asherah, desecrates Topheth and the high places Solomon built, and tears down Jeroboam's altar at Bethel, as the man of God from Judah had foretold. He keeps a Passover unlike any since "the days of the judges." "Neither before nor after Josiah was there a king like him." He is killed by Pharaoh Necho at Megiddo.`,
  refs:["1 Kings 13:2","2 Kings 21:24–26","2 Kings 22–23","2 Chronicles 34–35"]},

 {id:"zedekiah", name:"Zedekiah (Mattaniah)", short:"Zedekiah", cat:"king", w:8,
  aliases:"Mattaniah",
  clash:"Zedekiah", clashtag:"The last king of Judah (born Mattaniah), blinded and taken to Babylon.",
  dates:"reigned 11 years, c. 597 – 586 BC (Judah)",
  desc:`Born Mattaniah, the uncle of Jehoiachin; Nebuchadnezzar makes him king and renames him Zedekiah. His mother is Hamutal of Libnah. He "did evil in the eyes of the LORD" and rebels against Babylon, which besieges Jerusalem from his ninth year to his eleventh. When the wall is breached he flees toward the Arabah, is captured in the plains of Jericho, and at Riblah his sons are killed before his eyes; then "they put out his eyes" and take him in bronze shackles to Babylon.`,
  notconfused:`Zedekiah son of Kenaanah, the false prophet in Ahab's day. 2 Kings calls him Jehoiachin's uncle and gives his mother as Hamutal, also mother of Jehoahaz son of Josiah.`,
  refs:["2 Kings 24:17–20","2 Kings 25:1–7","Jeremiah 52"]},

 // ---------------- THE PROPHETS ----------------
 // ================= 2 KINGS =================
 // --- Elisha's circle ---
 {id:"widow_oil", name:"The prophet's widow", short:"Widow (olive oil)", cat:"proph", w:5,
  dates:"c. 9th c. BC (unnamed)",
  desc:`"The wife of a man from the company of the prophets," whose husband "revered the LORD." When his creditor comes to take her two boys as slaves, Elisha has her borrow empty jars and pour from her one small jar of olive oil until "there is not a jar left"; she sells the oil and pays her debts.`,
  refs:["2 Kings 4:1–7"]},

 {id:"shunammite", name:"The Shunammite woman", short:"Shunammite", cat:"proph", w:7,
  dates:"c. 9th c. BC (unnamed)",
  desc:`"A well-to-do woman" of Shunem who builds Elisha a small room on her roof. Childless with an old husband, she bears a son "about this time next year," as Elisha foretold. When the boy dies she lays him on the prophet's bed and rides to Mount Carmel — "I will not leave you" — and Elisha raises him. Warned of a seven-year famine, she lives among the Philistines; on her return, as Gehazi is telling the king about her, the king restores her house, land and income.`,
  notconfused:`Abishag the Shunammite, who cared for King David in his old age (1 Kings 1).`,
  refs:["2 Kings 4:8–37","2 Kings 8:1–6"]},

 {id:"gehazi", name:"Gehazi", short:"Gehazi", cat:"proph", w:6,
  dates:"c. 9th c. BC",
  desc:`Elisha's servant. He points out that the Shunammite "has no son," and runs ahead with Elisha's staff, but "the boy has not awakened." After Naaman is healed he runs after him, lies that Elisha wants silver and clothing, and hides two talents; Elisha says, "Naaman's leprosy will cling to you," and he leaves "as white as snow." Later he is found telling the king "about all the great things Elisha has done."`,
  refs:["2 Kings 4:12–36","2 Kings 5:20–27","2 Kings 8:4–5"]},

 {id:"naaman_girl", name:"The young girl from Israel", short:"Naaman's servant girl", cat:"proph", w:5,
  dates:"c. 9th c. BC (unnamed)",
  desc:`Taken captive by Aramean raiders, she serves Naaman's wife and says, "If only my master would see the prophet who is in Samaria! He would cure him of his leprosy."`,
  refs:["2 Kings 5:2–4"]},

 // --- Jehu's revolt and Athaliah ---
 {id:"bidkar", name:"Bidkar", short:"Bidkar", cat:"king", w:4,
  dates:"c. 841 BC",
  desc:`Jehu's chariot officer, told to throw Joram's body on Naboth's field. Jehu reminds him how "you and I were riding together in chariots behind Ahab his father" when the LORD spoke against Ahab.`,
  refs:["2 Kings 9:25–26"]},

 {id:"jehonadab", name:"Jehonadab son of Rekab", short:"Jehonadab", cat:"king", w:5,
  dates:"c. 841 BC",
  desc:`Met by Jehu on the road to Samaria — "Are you in accord with me?" "I am." Jehu takes him into his chariot: "Come with me and see my zeal for the LORD." He goes with Jehu into the temple of Baal before the slaughter of its servants.`,
  notconfused:`Rekab son of Rimmon, who murdered Ish-Bosheth (2 Samuel 4), and Jonadab son of Shimeah, David's nephew (2 Samuel 13).`,
  refs:["2 Kings 10:15–17","2 Kings 10:23"]},

 {id:"jehosheba", name:"Jehosheba daughter of Jehoram", short:"Jehosheba", cat:"king", w:6,
  dates:"c. 841 BC",
  desc:`"The daughter of King Jehoram and sister of Ahaziah." When Athaliah sets out to destroy the royal family, she steals the infant Joash "away from among the royal princes" and hides him and his nurse, so "he was not killed."`,
  refs:["2 Kings 11:2–3"]},

 {id:"zibiah", name:"Zibiah of Beersheba", short:"Zibiah", cat:"king", w:3,
  dates:"c. 9th c. BC",
  desc:`Mother of King Joash of Judah — "his mother's name was Zibiah; she was from Beersheba."`,
  refs:["2 Kings 12:1"]},

 {id:"jozabad", name:"Jozabad son of Shimeath", short:"Jozabad", cat:"king", w:4,
  dates:"c. 796 BC",
  desc:`One of the officials who conspired against King Joash and murdered him "at Beth Millo, on the road down to Silla." Amaziah later executed his father's murderers.`,
  refs:["2 Kings 12:20–21","2 Kings 14:5"]},

 {id:"jehozabad", name:"Jehozabad son of Shomer", short:"Jehozabad", cat:"king", w:4,
  dates:"c. 796 BC",
  desc:`With Jozabad son of Shimeath, one of the officials who assassinated King Joash; executed by Amaziah once the kingdom was "firmly in his grasp."`,
  refs:["2 Kings 12:21","2 Kings 14:5"]},

 // --- Jehu's dynasty ---
 {id:"jehoahaz_i", name:"Jehoahaz son of Jehu", short:"Jehoahaz (Israel)", cat:"king", w:5,
  clash:"Jehoahaz", clashtag:"King of Israel, son of Jehu, who reigned 17 years under Aramean oppression.",
  dates:"reigned 17 years, c. 814 – 798 BC (Israel)",
  desc:`Jehu's son, who reigns in Samaria and follows "the sins of Jeroboam son of Nebat." The LORD keeps Israel "under the power of Hazael king of Aram and Ben-Hadad his son" until Jehoahaz "sought the LORD's favor," and the LORD provides "a deliverer." His army is left with only fifty horsemen, ten chariots and ten thousand foot soldiers.`,
  notconfused:`Jehoahaz son of Josiah, who reigned three months in Judah about two centuries later.`,
  refs:["2 Kings 10:35","2 Kings 13:1–9","2 Kings 13:22–25"]},

 // --- Judah: Amaziah to Ahaz ---
 {id:"amaziah", name:"Amaziah son of Joash", short:"Amaziah", cat:"king", w:7,
  dates:"reigned 29 years, c. 796 – 767 BC (Judah)",
  desc:`King of Judah at 25, who does right, "but not as his father David had done." He executes his father's assassins but spares their children, following the Law of Moses. He defeats ten thousand Edomites in the Valley of Salt, then challenges Jehoash of Israel, who warns him with the parable of the thistle and the cedar. Routed and captured at Beth Shemesh, he sees Jerusalem's wall broken down. He outlives Jehoash by fifteen years but is killed by conspirators at Lachish.`,
  refs:["2 Kings 12:21","2 Kings 14:1–22"]},

 {id:"jehoaddan", name:"Jehoaddan of Jerusalem", short:"Jehoaddan", cat:"king", w:3,
  dates:"c. 9th–8th c. BC",
  desc:`Mother of King Amaziah — "his mother's name was Jehoaddan; she was from Jerusalem."`,
  refs:["2 Kings 14:2"]},

 {id:"jekoliah", name:"Jekoliah of Jerusalem", short:"Jekoliah", cat:"king", w:3,
  dates:"c. 8th c. BC",
  desc:`Mother of King Azariah (Uzziah) — "his mother's name was Jekoliah; she was from Jerusalem."`,
  refs:["2 Kings 15:2"]},

 {id:"jotham_k", name:"Jotham son of Uzziah", short:"Jotham (king)", cat:"king", w:6,
  clash:"Jotham", clashtag:"King of Judah, son of Uzziah, who governed while his father had leprosy and rebuilt the temple's Upper Gate.",
  dates:"reigned 16 years, c. 750 – 732 BC (Judah) — includes a co-regency; disputed",
  desc:`While his father has leprosy, "Jotham the king's son had charge of the palace and governed the people of the land." King at 25, he does "what was right in the eyes of the LORD" and rebuilds "the Upper Gate of the temple of the LORD." In his days the LORD begins to send Rezin of Aram and Pekah of Israel against Judah.`,
  notconfused:`Jotham son of Gideon, who told the parable of the trees from Mount Gerizim (Judges 9).`,
  refs:["2 Kings 15:5–7","2 Kings 15:32–38"]},

 {id:"jerusha", name:"Jerusha daughter of Zadok", short:"Jerusha", cat:"king", w:3,
  dates:"c. 8th c. BC",
  desc:`Mother of King Jotham — "his mother's name was Jerusha daughter of Zadok." The text does not say whether this Zadok is of the priestly line.`,
  refs:["2 Kings 15:33"]},

 {id:"ahaz", name:"Ahaz son of Jotham", short:"Ahaz", cat:"king", w:8,
  dates:"reigned 16 years, c. 735 – 715 BC (Judah) — dates disputed",
  desc:`King at twenty who, "unlike David his father," follows "the ways of the kings of Israel" and "even sacrificed his son in the fire." Besieged by Rezin and Pekah, he sends temple silver and gold to Tiglath-Pileser — "I am your servant and vassal." Assyria takes Damascus. Visiting Tiglath-Pileser there, he sends a sketch of an altar to Uriah the priest, sets the new altar in the temple, moves the bronze altar aside and dismantles temple furnishings "in deference to the king of Assyria."`,
  refs:["2 Kings 15:38","2 Kings 16","2 Kings 20:11"]},

 {id:"uriah_p", name:"Uriah the priest", short:"Uriah (priest)", cat:"priest", w:5,
  clash:"Uriah", clashtag:"The priest who built King Ahaz's altar from a Damascus pattern.",
  dates:"c. 8th c. BC",
  desc:`Priest in Jerusalem under Ahaz. From the king's sketch he builds an altar copied from one in Damascus, finishes it before Ahaz returns, and offers the daily sacrifices on it: "Uriah the priest did just as King Ahaz had ordered."`,
  notconfused:`Uriah the Hittite, Bathsheba's husband, whom David had killed (2 Samuel 11).`,
  refs:["2 Kings 16:10–16"]},

 // --- Israel's last kings ---
 {id:"shallum_k", name:"Shallum son of Jabesh", short:"Shallum (king)", cat:"king", w:4,
  clash:"Shallum", clashtag:"King of Israel for one month after assassinating Zechariah; killed by Menahem.",
  dates:"reigned 1 month, c. 752 BC (Israel)",
  desc:`He "conspired against Zechariah," assassinates him "in front of the people" and becomes king, ending Jehu's dynasty. He reigns one month in Samaria before Menahem son of Gadi kills him.`,
  notconfused:`Shallum son of Tikvah, husband of the prophet Huldah, a century later in Judah.`,
  refs:["2 Kings 15:10–15"]},

 {id:"menahem", name:"Menahem son of Gadi", short:"Menahem", cat:"king", w:5,
  dates:"reigned 10 years, c. 752 – 742 BC (Israel)",
  desc:`Comes from Tirzah, assassinates Shallum and takes the throne, then sacks Tiphsah with great cruelty "because they refused to open their gates." When Pul king of Assyria invades, he pays him a thousand talents of silver, taxing every wealthy man fifty shekels, "to strengthen his own hold on the kingdom."`,
  refs:["2 Kings 15:14–22"]},

 {id:"pekahiah", name:"Pekahiah son of Menahem", short:"Pekahiah", cat:"king", w:4,
  dates:"reigned 2 years, c. 742 – 740 BC (Israel)",
  desc:`Menahem's son, who does evil in the LORD's eyes. His chief officer Pekah son of Remaliah, with fifty men of Gilead, assassinates him in the citadel of the palace at Samaria, together with Argob and Arieh.`,
  refs:["2 Kings 15:22–26"]},

 {id:"pekah", name:"Pekah son of Remaliah", short:"Pekah", cat:"king", w:6,
  dates:"reigned 20 years (2 Kings 15:27), c. 752 – 732 BC (Israel) — how the 20 years are counted is disputed",
  desc:`An officer of Pekahiah who assassinates him and takes the throne. In his time Tiglath-Pileser takes Gilead and Galilee, "including all the land of Naphtali," and deports the people. With Rezin of Aram he marches against Jerusalem and besieges Ahaz. Hoshea son of Elah assassinates him.`,
  refs:["2 Kings 15:25–31","2 Kings 15:37","2 Kings 16:5"]},

 {id:"hoshea_k", name:"Hoshea son of Elah", short:"Hoshea (king)", cat:"king", w:7,
  dates:"reigned 9 years, c. 732 – 722 BC (Israel)",
  desc:`The last king of Israel. He assassinates Pekah and reigns in Samaria, doing evil, "but not like the kings of Israel who preceded him." A vassal of Shalmaneser, he sends envoys to So king of Egypt and stops paying tribute; Shalmaneser imprisons him, besieges Samaria for three years, and "in the ninth year of Hoshea" deports Israel to Assyria. 2 Kings 17 explains the exile: Israel "would not listen."`,
  notconfused:`Hoshea son of Nun, renamed Joshua by Moses (Numbers 13:16); the prophet Hosea; and Elah king of Israel, son of Baasha, who is not said to be his father.`,
  refs:["2 Kings 15:30","2 Kings 17:1–23","2 Kings 18:9–12"]},

 // --- Hezekiah's household and court ---
 {id:"abijah_h", name:"Abijah daughter of Zechariah", short:"Abijah (Hezekiah's mother)", cat:"king", w:4,
  clash:"Abijah", clashtag:"Mother of King Hezekiah.",
  dates:"c. 8th c. BC",
  desc:`Mother of King Hezekiah — "his mother's name was Abijah daughter of Zechariah."`,
  refs:["2 Kings 18:2"]},

 {id:"eliakim_h", name:"Eliakim son of Hilkiah", short:"Eliakim (palace)", cat:"king", w:5,
  clash:"Eliakim", clashtag:"Hezekiah's palace administrator, who met Sennacherib's commanders at Jerusalem's wall.",
  dates:"c. 701 BC",
  desc:`Hezekiah's palace administrator. With Shebna and Joah he goes out to Sennacherib's field commander and begs, "Please speak to your servants in Aramaic… Don't speak to us in Hebrew in the hearing of the people on the wall." He reports to Hezekiah with his clothes torn and is sent in sackcloth to the prophet Isaiah.`,
  notconfused:`Eliakim son of Josiah, renamed Jehoiakim by Pharaoh Necho. His father Hilkiah is not said to be Hilkiah the high priest of Josiah's day.`,
  refs:["2 Kings 18:18","2 Kings 18:26","2 Kings 18:37","2 Kings 19:2"]},

 {id:"shebna", name:"Shebna the secretary", short:"Shebna", cat:"king", w:5,
  dates:"c. 701 BC",
  desc:`Hezekiah's secretary, who goes out with Eliakim and Joah to the Assyrian field commander, returns to the king with torn clothes, and is sent in sackcloth to Isaiah.`,
  refs:["2 Kings 18:18","2 Kings 18:26","2 Kings 18:37","2 Kings 19:2"]},

 {id:"joah_a", name:"Joah son of Asaph", short:"Joah", cat:"king", w:4,
  dates:"c. 701 BC",
  desc:`Hezekiah's recorder, one of the three officials who hear the Assyrian field commander's threats and report them to the king.`,
  refs:["2 Kings 18:18","2 Kings 18:26","2 Kings 18:37"]},

 // --- Manasseh to Josiah ---
 {id:"hephzibah", name:"Hephzibah", short:"Hephzibah", cat:"king", w:3,
  dates:"c. 7th c. BC",
  desc:`Mother of King Manasseh — "his mother's name was Hephzibah."`,
  refs:["2 Kings 21:1"]},

 {id:"amon", name:"Amon son of Manasseh", short:"Amon", cat:"king", w:5,
  dates:"reigned 2 years, c. 642 – 640 BC (Judah)",
  desc:`King at 22, who "followed completely the ways of his father," worshiping his father's idols and forsaking the LORD. His officials assassinate him in his palace; "the people of the land" kill the plotters and make his son Josiah king. He is buried in the garden of Uzza.`,
  refs:["2 Kings 21:18–26"]},

 {id:"meshullemeth", name:"Meshullemeth daughter of Haruz", short:"Meshullemeth", cat:"king", w:3,
  dates:"c. 7th c. BC",
  desc:`Mother of King Amon — "Meshullemeth daughter of Haruz; she was from Jotbah."`,
  refs:["2 Kings 21:19"]},

 {id:"jedidah", name:"Jedidah daughter of Adaiah", short:"Jedidah", cat:"king", w:3,
  dates:"c. 7th c. BC",
  desc:`Mother of King Josiah — "Jedidah daughter of Adaiah; she was from Bozkath."`,
  refs:["2 Kings 22:1"]},

 {id:"shaphan", name:"Shaphan son of Azaliah", short:"Shaphan", cat:"king", w:6,
  dates:"c. 622 BC",
  desc:`"The secretary, Shaphan son of Azaliah, the son of Meshullam," sent by Josiah to the temple about the repair money. Hilkiah gives him the newly found Book of the Law; he reads it, then reads it "in the presence of the king," and goes with the delegation to the prophet Huldah. His son Ahikam and grandson Gedaliah follow him in royal service.`,
  refs:["2 Kings 22:3–14","2 Kings 25:22"]},

 {id:"ahikam", name:"Ahikam son of Shaphan", short:"Ahikam", cat:"king", w:5,
  dates:"c. 622 BC",
  desc:`One of the five Josiah sends to "inquire of the LORD" about the Book of the Law, who consult the prophet Huldah. Father of Gedaliah, later appointed governor of Judah by Nebuchadnezzar.`,
  refs:["2 Kings 22:12–14","2 Kings 25:22"]},

 {id:"akbor", name:"Akbor son of Micaiah", short:"Akbor", cat:"king", w:3,
  dates:"c. 622 BC",
  desc:`A member of Josiah's delegation to the prophet Huldah. His father Micaiah is not said to be Micaiah son of Imlah of Ahab's day.`,
  refs:["2 Kings 22:12–14"]},

 {id:"asaiah", name:"Asaiah the king's attendant", short:"Asaiah", cat:"king", w:3,
  dates:"c. 622 BC",
  desc:`"Asaiah the king's attendant," one of the five Josiah sends to inquire of the LORD, who go to the prophet Huldah.`,
  refs:["2 Kings 22:12–14"]},

 {id:"shallum_t", name:"Shallum son of Tikvah", short:"Shallum (Huldah's husband)", cat:"king", w:4,
  clash:"Shallum", clashtag:"Husband of the prophet Huldah, keeper of the wardrobe in Josiah's day.",
  dates:"c. 622 BC",
  desc:`"Shallum son of Tikvah, the son of Harhas, keeper of the wardrobe" — husband of the prophet Huldah.`,
  notconfused:`Shallum son of Jabesh, who reigned one month over Israel.`,
  refs:["2 Kings 22:14"]},

 // --- the last kings of Judah ---
 {id:"jehoahaz_j", name:"Jehoahaz son of Josiah", short:"Jehoahaz (Judah)", cat:"king", w:5,
  clash:"Jehoahaz", clashtag:"King of Judah for three months after Josiah; taken to Egypt by Pharaoh Necho.",
  dates:"reigned 3 months, c. 609 BC (Judah)",
  desc:`After Josiah's death "the people of the land took Jehoahaz son of Josiah and anointed him." King at 23, he does evil and reigns three months before Pharaoh Necho puts him in chains at Riblah, places Judah under a levy, and carries him off to Egypt, "and there he died."`,
  notconfused:`Jehoahaz son of Jehu, king of Israel two centuries earlier.`,
  refs:["2 Kings 23:30–34"]},

 {id:"hamutal", name:"Hamutal daughter of Jeremiah", short:"Hamutal", cat:"king", w:4,
  dates:"c. 7th–6th c. BC",
  desc:`"Hamutal daughter of Jeremiah; she was from Libnah" — named as the mother of two kings of Judah, Jehoahaz and Zedekiah. Her father is not said to be the prophet Jeremiah.`,
  refs:["2 Kings 23:31","2 Kings 24:18"]},

 {id:"jehoiakim", name:"Jehoiakim son of Josiah", short:"Jehoiakim", cat:"king", w:7,
  clash:"Eliakim", clashtag:"Born Eliakim son of Josiah; renamed Jehoiakim when Pharaoh Necho made him king.",
  aliases:"Eliakim",
  dates:"reigned 11 years, c. 609 – 598 BC (Judah)",
  desc:`"Pharaoh Necho made Eliakim son of Josiah king in place of his father Josiah and changed Eliakim's name to Jehoiakim." King at 25, he taxes the land to pay Necho and does evil. Nebuchadnezzar invades and Jehoiakim is his vassal three years, then rebels; the LORD sends Babylonian, Aramean, Moabite and Ammonite raiders against Judah "because of the sins of Manasseh." His son Jehoiachin succeeds him.`,
  notconfused:`Eliakim son of Hilkiah, Hezekiah's palace administrator.`,
  refs:["2 Kings 23:34–24:6"]},

 {id:"zebidah", name:"Zebidah daughter of Pedaiah", short:"Zebidah", cat:"king", w:3,
  dates:"c. 7th c. BC",
  desc:`Mother of King Jehoiakim — "Zebidah daughter of Pedaiah; she was from Rumah."`,
  refs:["2 Kings 23:36"]},

 {id:"jehoiachin", name:"Jehoiachin son of Jehoiakim", short:"Jehoiachin", cat:"king", w:7,
  dates:"reigned 3 months, c. 598 – 597 BC (Judah); released c. 562 BC",
  desc:`King at eighteen for three months. When Nebuchadnezzar besieges Jerusalem, he surrenders with his mother, attendants, nobles and officials, and is taken captive to Babylon "in the eighth year" of Nebuchadnezzar, with ten thousand of Jerusalem's people and the temple treasures. His uncle Mattaniah is made king as Zedekiah. In the thirty-seventh year of his exile Awel-Marduk releases him, gives him "a seat of honor," and he eats "at the king's table" for the rest of his life — the last scene of Kings.`,
  refs:["2 Kings 24:6–17","2 Kings 25:27–30"]},

 {id:"nehushta", name:"Nehushta daughter of Elnathan", short:"Nehushta", cat:"king", w:4,
  dates:"c. 6th c. BC",
  desc:`Mother of King Jehoiachin — "Nehushta daughter of Elnathan; she was from Jerusalem." She surrenders with her son and is taken to Babylon as "the king's mother."`,
  refs:["2 Kings 24:8","2 Kings 24:12","2 Kings 24:15"]},

 // --- priests ---
 {id:"jehoiada", name:"Jehoiada the priest", short:"Jehoiada", cat:"priest", w:8,
  dates:"c. 9th c. BC",
  desc:`Priest at the temple, who hides the boy Joash for six years. In the seventh year he puts the commanders and guards under oath, arms them with King David's spears and shields, crowns Joash and proclaims him king, and orders Athaliah put to death outside the temple. He makes a covenant "that they would be the LORD's people." Joash does right "all the years Jehoiada the priest instructed him"; Jehoiada sets up the collection chest for the temple repairs.`,
  notconfused:`Jehoiada the father of Benaiah, David's commander (2 Samuel 8:18); the text does not connect the two.`,
  refs:["2 Kings 11:4–20","2 Kings 12:2–10"]},

 {id:"hilkiah", name:"Hilkiah the high priest", short:"Hilkiah", cat:"priest", w:7,
  dates:"c. 622 BC",
  desc:`High priest in Josiah's eighteenth year, who tells Shaphan, "I have found the Book of the Law in the temple of the LORD." He leads the delegation to Huldah and, at the king's order, removes from the temple "all the articles made for Baal and Asherah and all the starry hosts."`,
  notconfused:`Hilkiah the father of Eliakim, Hezekiah's palace administrator; the text does not say they are the same man.`,
  refs:["2 Kings 22:4–14","2 Kings 23:4","2 Kings 23:24"]},

 {id:"seraiah", name:"Seraiah the chief priest", short:"Seraiah", cat:"priest", w:4,
  dates:"c. 586 BC",
  desc:`Chief priest when Jerusalem fell. Nebuzaradan takes him prisoner with Zephaniah and the three doorkeepers and brings them to Nebuchadnezzar at Riblah, where they are executed.`,
  refs:["2 Kings 25:18–21"]},

 {id:"zephaniah_p", name:"Zephaniah the priest", short:"Zephaniah (priest)", cat:"priest", w:4,
  clash:"Zephaniah", clashtag:"The priest next in rank to Seraiah, executed at Riblah after Jerusalem fell.",
  dates:"c. 586 BC",
  desc:`"The priest next in rank" to Seraiah. Taken prisoner by Nebuzaradan and executed at Riblah.`,
  notconfused:`Zephaniah the prophet of Josiah's day.`,
  refs:["2 Kings 25:18–21"]},

 // --- after the fall ---
 {id:"gedaliah", name:"Gedaliah son of Ahikam", short:"Gedaliah", cat:"exile", w:6,
  dates:"c. 586 BC",
  desc:`"Gedaliah son of Ahikam, the son of Shaphan," appointed by Nebuchadnezzar over the people left in Judah. At Mizpah he reassures the army officers, "Do not be afraid of the Babylonian officials… serve the king of Babylon, and it will go well with you." In the seventh month Ishmael son of Nethaniah assassinates him, and the people flee to Egypt.`,
  refs:["2 Kings 25:22–26"]},

 {id:"ishmael_n", name:"Ishmael son of Nethaniah", short:"Ishmael (Gedaliah's killer)", cat:"exile", w:5,
  clash:"Ishmael", clashtag:"Of royal blood, he assassinated Gedaliah the governor at Mizpah.",
  dates:"c. 586 BC",
  desc:`"Ishmael son of Nethaniah, the son of Elishama, who was of royal blood." One of the army officers who come to Gedaliah at Mizpah, he returns with ten men and kills Gedaliah and the Judeans and Babylonians with him.`,
  notconfused:`Ishmael son of Abraham and Hagar (Genesis 16).`,
  refs:["2 Kings 25:23–25"]},

 {id:"johanan", name:"Johanan son of Kareah", short:"Johanan", cat:"exile", w:4,
  dates:"c. 586 BC",
  desc:`One of the army officers who come with their men to Gedaliah at Mizpah, with Ishmael, Seraiah son of Tanhumeth and Jaazaniah.`,
  refs:["2 Kings 25:23"]},


 {id:"nathan", name:"Nathan the prophet", short:"Nathan", cat:"proph", w:9,
  clash:"Nathan", clashtag:"The prophet who gave David the covenant promise and confronted him over Bathsheba.",
  dates:"c. 10th c. BC",
  desc:`David's prophet. When David wishes to build a house for the ark, the LORD sends Nathan to promise instead that the LORD will build David a house: "Your house and your kingdom will endure forever before me." After David takes Bathsheba, Nathan tells him the parable of the rich man and the poor man's ewe lamb — "You are the man!" — and announces that "the sword will never depart from your house." He conveys the LORD's name for Solomon, Jedidiah.`,
  notconfused:`Nathan son of David, born in Jerusalem (2 Samuel 5:14).`,
  refs:["2 Samuel 7","2 Samuel 12:1–25","1 Kings 1"]},

 {id:"elijah", name:"Elijah the Tishbite", short:"Elijah", cat:"proph", w:14, halo:1,
  aliases:"the Tishbite · from Tishbe in Gilead",
  dates:"c. 9th c. BC (days of Ahab and Ahaziah)",
  desc:`"Elijah the Tishbite, from Tishbe in Gilead," tells Ahab there will be "neither dew nor rain in the next few years except at my word." Fed by ravens at the Kerith Ravine and by a widow at Zarephath, whose son he raises, he faces the prophets of Baal on Mount Carmel — "How long will you waver between two opinions?" — and the fire of the LORD falls: "The LORD—he is God!" Fleeing Jezebel to Horeb, he hears "a gentle whisper" and is sent to anoint Hazael, Jehu and Elisha. He condemns Ahab over Naboth's vineyard, foretells Ahaziah's death and calls down fire on two companies of fifty. At the Jordan he parts the water with his cloak, and "a chariot of fire and horses of fire" appear as he goes "up to heaven in a whirlwind." Malachi promises his return.`,
  refs:["1 Kings 17–19","1 Kings 21:17–29","2 Kings 1–2","Malachi 4:5"]},

 {id:"elisha", name:"Elisha son of Shaphat", short:"Elisha", cat:"proph", w:12,
  aliases:"the man of God",
  dates:"c. 9th c. BC (from Ahab's day to Jehoash's)",
  desc:`Plowing "with twelve yoke of oxen" when Elijah throws his cloak around him, he leaves to become Elijah's servant. Asking for "a double portion of your spirit," he sees Elijah taken up, takes his cloak and parts the Jordan. His ministry is full of signs: healing Jericho's water, cursing the jeering boys of Bethel, multiplying a widow's oil, raising the Shunammite's son, healing Naaman's leprosy, making an axhead float, blinding an Aramean army, and foretelling the end of Samaria's famine. He tells Hazael he will be king of Aram and sends a young prophet to anoint Jehu. King Jehoash weeps at his deathbed; after his burial a dead man thrown into his tomb "came to life and stood up on his feet."`,
  notconfused:`Elijah, his master and predecessor. His father Shaphat of Abel Meholah is not Shaphat son of Hori, the Simeonite spy (Numbers 13:5).`,
  refs:["1 Kings 19:16–21","2 Kings 2–9","2 Kings 13:14–21"]},

 {id:"isaiah", name:"Isaiah", short:"Isaiah", cat:"proph", w:13, halo:1,
  dates:"prophesied c. 740 – 686 BC",
  desc:`The towering prophet of Judah, called in the Temple with "Holy, holy, holy." He counsels kings against Assyria and foretells both judgment and a coming servant who bears the people's sins.`,
  refs:["Isaiah 6","Isaiah 7","Isaiah 53"]},

 {id:"jeremiah", name:"Jeremiah", short:"Jeremiah", cat:"proph", w:12, halo:1,
  aliases:"the weeping prophet",
  dates:"prophesied c. 627 – 586 BC",
  desc:`Called young and opposed all his life, he warns Judah of Babylon and lives to see Jerusalem fall. He promises a "new covenant" written on the heart; traditionally also author of Lamentations.`,
  refs:["Jeremiah 1","Jeremiah 31","Lamentations 1"]},

 {id:"ezekiel", name:"Ezekiel", short:"Ezekiel", cat:"proph", w:11,
  dates:"prophesied c. 593 – 571 BC (in exile)",
  desc:`A priest exiled to Babylon who prophesies in vivid visions — the wheels and living creatures, the valley of dry bones, and a restored Temple — that God will give his people a new heart.`,
  refs:["Ezekiel 1","Ezekiel 37","Ezekiel 40"]},

 {id:"daniel", name:"Daniel", short:"Daniel", cat:"proph", w:13, halo:1,
  aliases:"Belteshazzar",
  dates:"prophesied c. 605 – 536 BC (in exile)",
  desc:`A young noble taken to Babylon who rises to serve its kings. Preserved in the lions' den and interpreter of dreams and visions, he foresees the rise and fall of empires and a coming kingdom that never ends.`,
  refs:["Daniel 1–2","Daniel 6","Daniel 7"]},

 {id:"hosea", name:"Hosea", short:"Hosea", cat:"proph", w:8,
  dates:"prophesied c. 750 – 725 BC (Israel)",
  desc:`A northern prophet commanded to marry the unfaithful Gomer as a living picture of God's grieved, enduring love for wayward Israel.`,
  refs:["Hosea 1","Hosea 3","Hosea 11"]},

 {id:"joel", name:"Joel", short:"Joel", cat:"proph", w:7,
  dates:"date uncertain (9th–5th c. BC)",
  desc:`A prophet who reads a locust plague as a sign of "the Day of the LORD" and promises that God will pour out his Spirit on all people — words Peter quotes at Pentecost.`,
  refs:["Joel 1–2","Acts 2:16–21"]},

 {id:"amos", name:"Amos", short:"Amos", cat:"proph", w:8,
  dates:"prophesied c. 760 BC (Israel)",
  desc:`A shepherd from Judah sent north in Jeroboam II's golden age to thunder against injustice: "let justice roll down like waters."`,
  refs:["Amos 1","Amos 5","Amos 7"]},

 {id:"obadiah", name:"Obadiah", short:"Obadiah", cat:"proph", w:6,
  clash:"Obadiah", clashtag:"The prophet whose short book condemns Edom.",
  dates:"c. 6th c. BC",
  desc:`Author of the Bible's shortest book, a single-chapter oracle of judgment against Edom for gloating over Jerusalem's fall.`,
  refs:["Obadiah 1"]},

 {id:"jonah", name:"Jonah", short:"Jonah", cat:"proph", w:9,
  dates:"c. 8th c. BC (Israel)",
  desc:`The reluctant prophet who flees God's call to Nineveh, is swallowed by a great fish, then preaches to the city — and sulks when it repents and is spared.`,
  refs:["Jonah 1–4","2 Kings 14:25"]},

 {id:"micah", name:"Micah", short:"Micah", cat:"proph", w:8,
  clash:"Micah", clashtag:"Micah of Moresheth, the prophet in the reigns of Jotham, Ahaz and Hezekiah.",
  dates:"prophesied c. 735 – 700 BC (Judah)",
  desc:`A contemporary of Isaiah who denounces the greed of leaders, foretells a ruler born in Bethlehem, and sums up true religion: "to act justly, love mercy, and walk humbly with your God."`,
  refs:["Micah 5:2","Micah 6:8"]},

 {id:"nahum", name:"Nahum", short:"Nahum", cat:"proph", w:6,
  dates:"c. 650 – 612 BC",
  desc:`A prophet who announces the coming fall of Nineveh — the Assyrian capital that Jonah once spared — as God's judgment on its cruelty.`,
  refs:["Nahum 1–3"]},

 {id:"habakkuk", name:"Habakkuk", short:"Habakkuk", cat:"proph", w:7,
  dates:"c. 612 – 589 BC (Judah)",
  desc:`A prophet who dares to question God about injustice and Babylon's rise, and receives the answer that echoes through the New Testament: "the righteous shall live by his faith."`,
  refs:["Habakkuk 1–2","Habakkuk 2:4"]},

 {id:"zephaniah", name:"Zephaniah", short:"Zephaniah", cat:"proph", w:6,
  clash:"Zephaniah", clashtag:"The prophet of Josiah's day who warned of the Day of the LORD.",
  dates:"prophesied c. 630 BC (Judah)",
  desc:`A prophet in Josiah's reign who warns of the Day of the LORD against Judah and the nations, yet ends with a promise of joyful restoration.`,
  refs:["Zephaniah 1","Zephaniah 3"]},

 {id:"haggai", name:"Haggai", short:"Haggai", cat:"proph", w:7,
  dates:"prophesied c. 520 BC (post-exile)",
  desc:`A post-exilic prophet who rouses the returned exiles to stop neglecting the ruined Temple and rebuild it, with Zerubbabel and Jeshua leading the work.`,
  refs:["Haggai 1–2","Ezra 5:1"]},

 {id:"zechariah_p", name:"Zechariah the prophet", short:"Zechariah (Prophet)", cat:"proph", w:8,
  clash:"Zechariah", clashtag:"Post-exilic prophet of visions who, with Haggai, urged on the rebuilding of the Temple.",
  dates:"prophesied c. 520 – 518 BC (post-exile)",
  desc:`A post-exilic prophet of night visions who, with Haggai, spurs the Temple's rebuilding and foretells a humble king coming "on a donkey" and a shepherd who is pierced.`,
  notconfused:`King Zechariah of Israel, and Zechariah the father of John the Baptist in the New Testament.`,
  refs:["Zechariah 1","Zechariah 9:9","Ezra 5:1"]},

 {id:"malachi", name:"Malachi", short:"Malachi", cat:"proph", w:8,
  dates:"prophesied c. 430 BC (post-exile)",
  desc:`The last of the writing prophets, who rebukes a lax priesthood and half-hearted worship and promises a messenger — a coming "Elijah" — before the Day of the LORD. Then four centuries of prophetic silence.`,
  refs:["Malachi 1","Malachi 3","Malachi 4:5"]},

 {id:"huldah", name:"Huldah the prophet", short:"Huldah", cat:"proph", w:6,
  dates:"c. 622 BC (Judah)",
  desc:`"The prophet Huldah, who was the wife of Shallum son of Tikvah… keeper of the wardrobe," living in Jerusalem's New Quarter. Hilkiah, Ahikam, Akbor, Shaphan and Asaiah consult her for King Josiah about the newly found Book of the Law. She declares that disaster will come on Jerusalem as the book says, but because the king "humbled himself" he "will be buried in peace" and not see it.`,
  refs:["2 Kings 22:14–20"]},

 // ---------------- EXILE & RETURN ----------------
 {id:"zerubbabel", name:"Zerubbabel", short:"Zerubbabel", cat:"exile", w:9,
  dates:"c. 520 BC (post-exile)",
  desc:`A prince of David's line who leads the first exiles home from Babylon and, with the high priest Jeshua, lays the foundation of the second Temple.`,
  refs:["Ezra 3","Ezra 5","Haggai 2:23"]},

 {id:"jeshua_hp", name:"Jeshua the high priest", short:"Jeshua (High Priest)", cat:"exile", w:7,
  aliases:"Joshua the high priest",
  clash:"Joshua", clashtag:"The high priest who, with Zerubbabel, rebuilt the altar and Temple after the return from exile.",
  dates:"c. 520 BC (post-exile)",
  desc:`The first high priest of the restored community, who returns with Zerubbabel and rebuilds the altar and Temple; the prophet Zechariah sees him cleansed and re-clothed in a vision.`,
  notconfused:`Joshua son of Nun, who conquered Canaan nearly a thousand years earlier.`,
  refs:["Ezra 3","Zechariah 3","Haggai 1:1"]},

 {id:"ezra", name:"Ezra", short:"Ezra", cat:"exile", w:10,
  aliases:"the scribe",
  dates:"c. 458 BC (post-exile)",
  desc:`A priest and scribe "skilled in the Law of Moses" who leads a later group home from Babylon and re-establishes the Torah at the heart of Jewish life.`,
  refs:["Ezra 7","Nehemiah 8"]},

 {id:"nehemiah", name:"Nehemiah", short:"Nehemiah", cat:"exile", w:10,
  dates:"c. 445 BC (post-exile)",
  desc:`The Persian king's cupbearer who returns to rebuild Jerusalem's ruined walls in fifty-two days against fierce opposition, and reforms the restored community with Ezra.`,
  refs:["Nehemiah 1–2","Nehemiah 6","Nehemiah 8"]},

 {id:"esther", name:"Esther", short:"Esther", cat:"exile", w:10,
  aliases:"Hadassah",
  dates:"c. 479 BC (Persia)",
  desc:`A Jewish orphan who becomes queen of Persia and risks her life — "for such a time as this" — to expose Haman's plot and save her people. The feast of Purim celebrates the deliverance.`,
  refs:["Esther 2","Esther 4","Esther 7–9"]},

 {id:"mordecai", name:"Mordecai", short:"Mordecai", cat:"exile", w:8,
  dates:"c. 479 BC (Persia)",
  desc:`Esther's older cousin and guardian, whose refusal to bow to Haman sparks the crisis — and whose loyalty is finally honored above the schemer's.`,
  refs:["Esther 2","Esther 6","Esther 10"]},

 // ---------------- FOREIGN NATIONS ----------------
 // Genesis
 {id:"pharaoh_abr", name:"Pharaoh in Abram's day", short:"Pharaoh (Abram)", cat:"natn", w:6,
  clash:"Pharaoh", clashtag:"The king of Egypt who took Sarai into his palace, until the LORD struck his household with serious diseases.",
  dates:"c. 2000 BC (traditional; unnamed)",
  desc:`The unnamed king of Egypt when Abram went down during a famine. Told Sarai is Abram's sister, he takes her into his palace and treats Abram well — until "the LORD inflicted serious diseases on Pharaoh and his household." He sends them away: "Why didn't you tell me she was your wife?"`,
  notconfused:`The pharaoh of Joseph's day and the pharaoh of the Exodus — "Pharaoh" is a royal title, and Scripture names none of the three.`,
  refs:["Genesis 12:10–20"]},

 {id:"pharaoh_jos", name:"Pharaoh in Joseph's day", short:"Pharaoh (Joseph)", cat:"natn", w:9,
  clash:"Pharaoh", clashtag:"The king of Egypt whose dreams Joseph interpreted; he put Joseph in charge of Egypt and settled Jacob's family in Goshen.",
  dates:"c. 18th c. BC (traditional; unnamed)",
  desc:`The unnamed king who imprisons his chief cupbearer and baker, then dreams of seven fat and seven gaunt cows. When Joseph interprets, he asks, "Can we find anyone like this man, one in whom is the spirit of God?" and puts him in charge of the whole land of Egypt, giving him his signet ring, the name Zaphenath-Paneah and a wife, Asenath. He welcomes Jacob's family to Goshen, and Jacob blesses him.`,
  notconfused:`The pharaoh of Abram's day and the pharaoh of the Exodus, a "new king, to whom Joseph meant nothing" (Exodus 1:8).`,
  refs:["Genesis 40–41","Genesis 45:16–20","Genesis 47:1–10","Genesis 50:4–6"]},

 {id:"melchizedek", name:"Melchizedek", short:"Melchizedek", cat:"natn", w:8,
  aliases:"king of Salem · priest of God Most High",
  dates:"c. 2000 BC (traditional)",
  desc:`King of Salem and "priest of God Most High," who brings out bread and wine to Abram after his victory over the four kings and blesses him: "Blessed be Abram by God Most High, Creator of heaven and earth." Abram gives him a tenth of everything.`,
  refs:["Genesis 14:18–20","Psalm 110:4","Hebrews 7"]},

 {id:"kedorlaomer", name:"Kedorlaomer", short:"Kedorlaomer", cat:"natn", w:6,
  aliases:"king of Elam",
  dates:"c. 2000 BC (traditional)",
  desc:`King of Elam, to whom the kings of Sodom, Gomorrah and the other cities of the plain were subject for twelve years. When they rebel, he and his allies — Amraphel of Shinar, Arioch of Ellasar and Tidal of Goyim — defeat them in the Valley of Siddim and carry off Lot, until Abram routs them by night with 318 trained men.`,
  refs:["Genesis 14:1–17"]},

 {id:"bera", name:"Bera king of Sodom", short:"King of Sodom", cat:"natn", w:5,
  dates:"c. 2000 BC (traditional)",
  desc:`King of Sodom when the four kings attacked. After Abram's victory he offers, "Give me the people and keep the goods for yourself," but Abram will accept "nothing belonging to you, not even a thread or the strap of a sandal."`,
  refs:["Genesis 14:2","Genesis 14:17–24"]},

 {id:"abimelek", name:"Abimelek king of Gerar", short:"Abimelek", cat:"natn", w:8,
  clash:"Abimelek", clashtag:"King of Gerar who took Sarah and later made treaties with Abraham and Isaac.",
  dates:"c. 20th–19th c. BC (traditional)",
  desc:`King of Gerar who takes Sarah after Abraham calls her his sister, is warned by God in a dream, and returns her with gifts; he and his commander Phicol later make a treaty with Abraham at Beersheba. In Isaac's time "Abimelek king of the Philistines" sees Isaac caressing Rebekah, sends him away as "too powerful for us," then makes a sworn treaty with him. Genesis does not say whether this is the same king.`,
  notconfused:`Abimelek son of Gideon (Jerub-Baal), crowned king by the citizens of Shechem (Judges 9).`,
  refs:["Genesis 20","Genesis 21:22–34","Genesis 26"]},

 {id:"phicol", name:"Phicol", short:"Phicol", cat:"natn", w:5,
  dates:"c. 20th–19th c. BC (traditional)",
  desc:`"The commander of his forces" — Abimelek's — present at the treaty with Abraham at Beersheba and again, with the adviser Ahuzzath, at the treaty with Isaac.`,
  refs:["Genesis 21:22–32","Genesis 26:26–31"]},

 {id:"ephron", name:"Ephron the Hittite", short:"Ephron", cat:"natn", w:5,
  dates:"c. 1900 BC (traditional)",
  desc:`Son of Zohar, a Hittite who sells Abraham the field and cave of Machpelah near Mamre for four hundred shekels of silver as a burial site for Sarah. Abraham, Isaac, Rebekah, Leah and Jacob are later buried there.`,
  refs:["Genesis 23","Genesis 25:9–10","Genesis 49:29–32","Genesis 50:13"]},

 {id:"hamor", name:"Hamor the Hivite", short:"Hamor", cat:"natn", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`"The ruler of that area" around Shechem and father of Shechem; Jacob buys land from his sons. After Shechem takes Dinah, Hamor proposes intermarriage with Jacob's family and persuades the men of his city to be circumcised — and is killed with his son by Simeon and Levi.`,
  refs:["Genesis 33:19","Genesis 34"]},

 {id:"shechem_p", name:"Shechem son of Hamor", short:"Shechem", cat:"natn", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`Son of Hamor and "the most honored of all his father's family." He takes and rapes Dinah, then, his heart drawn to her, asks to marry her and agrees to the circumcision of every male in the city. Simeon and Levi kill him and take Dinah from his house.`,
  notconfused:`The city of Shechem, where Abram built his first altar in Canaan (12:6–7) and where these events take place.`,
  refs:["Genesis 34"]},

 {id:"potiphar", name:"Potiphar", short:"Potiphar", cat:"natn", w:8,
  dates:"c. 18th c. BC (traditional)",
  desc:`"One of Pharaoh's officials, the captain of the guard," who buys Joseph from the Ishmaelites and puts him in charge of his household — and the LORD blesses his house because of Joseph. When his wife accuses Joseph, "he burned with anger" and puts him in prison.`,
  notconfused:`Potiphera, priest of On, the father of Joseph's wife Asenath (41:45).`,
  refs:["Genesis 37:36","Genesis 39"]},

 {id:"potiphar_wife", name:"Potiphar's wife", short:"Potiphar's wife", cat:"natn", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`Unnamed in Scripture. Day after day she urges Joseph, "Come to bed with me!" When he runs out leaving his cloak in her hand, she claims he tried to sleep with her, and her husband has him imprisoned.`,
  refs:["Genesis 39:7–20"]},

 {id:"cupbearer", name:"Pharaoh's chief cupbearer", short:"Chief cupbearer", cat:"natn", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`Imprisoned with the chief baker, he dreams of a vine with three branches; Joseph foretells his restoration within three days. Restored, he "did not remember Joseph; he forgot him" — until two full years later, when Pharaoh's dreams remind him.`,
  refs:["Genesis 40","Genesis 41:9–13"]},

 {id:"baker", name:"Pharaoh's chief baker", short:"Chief baker", cat:"natn", w:5,
  dates:"c. 18th c. BC (traditional)",
  desc:`Imprisoned with the chief cupbearer, he dreams of three baskets of bread on his head and birds eating from the top one. As Joseph foretold, within three days Pharaoh impales him.`,
  refs:["Genesis 40"]},

 {id:"asenath", name:"Asenath", short:"Asenath", cat:"natn", w:6,
  dates:"c. 18th c. BC (traditional)",
  desc:`Daughter of Potiphera, priest of On, given by Pharaoh to Joseph as his wife; mother of Manasseh and Ephraim, born before the years of famine.`,
  refs:["Genesis 41:45","Genesis 41:50–52","Genesis 46:20"]},

 {id:"potiphera", name:"Potiphera", short:"Potiphera", cat:"natn", w:4,
  aliases:"priest of On",
  dates:"c. 18th c. BC (traditional)",
  desc:`Priest of On and father of Asenath, Joseph's wife.`,
  notconfused:`Potiphar, the captain of the guard who bought Joseph (39:1).`,
  refs:["Genesis 41:45","Genesis 41:50","Genesis 46:20"]},

 {id:"hirah", name:"Hirah the Adullamite", short:"Hirah", cat:"natn", w:4,
  dates:"c. 18th c. BC (traditional)",
  desc:`Judah's friend from Adullam, with whom Judah went to stay. Judah sends him with a young goat to recover his pledge from the woman at Enaim, but he cannot find her.`,
  refs:["Genesis 38:1","Genesis 38:12","Genesis 38:20–23"]},

 // Exodus
 {id:"pharaoh_opp", name:"Pharaoh of the oppression", short:"Pharaoh (oppression)", cat:"natn", w:8,
  clash:"Pharaoh", clashtag:"The 'new king, to whom Joseph meant nothing,' who enslaved Israel and ordered the Hebrew boys thrown into the Nile.",
  dates:"c. 16th–15th or 14th–13th c. BC (disputed; unnamed)",
  desc:`"A new king, to whom Joseph meant nothing," who fears Israel's growing numbers, puts slave masters over them to build the store cities Pithom and Rameses, orders the Hebrew midwives to kill the newborn boys, and then commands, "Every Hebrew boy that is born you must throw into the Nile." When Moses kills an Egyptian, Pharaoh tries to kill him. "During that long period, the king of Egypt died." Exodus does not say whether every mention in chapters 1–2 is the same king.`,
  notconfused:`The pharaoh of the plagues and the Exodus, who reigns after "the king of Egypt died" (Exodus 2:23; 4:19) — and the pharaohs of Abram's and Joseph's day in Genesis.`,
  refs:["Exodus 1:8–22","Exodus 2:15","Exodus 2:23","Exodus 4:19"]},

 {id:"pharaoh_daughter", name:"Pharaoh's daughter", short:"Pharaoh's daughter", cat:"natn", w:7,
  dates:"c. 16th c. BC (traditional; unnamed)",
  desc:`Coming down to bathe in the Nile, she finds the basket among the reeds: "This is one of the Hebrew babies." She pays the baby's own mother to nurse him, and when the child grows older "he became her son. She named him Moses, saying, 'I drew him out of the water.'" Exodus does not give her name.`,
  refs:["Exodus 2:5–10"]},

 // Exodus onward
 {id:"pharaoh_ex", name:"Pharaoh of the Exodus", short:"Pharaoh (Exodus)", cat:"natn", w:9,
  clash:"Pharaoh", clashtag:"The king of the plagues, who refused to let Israel go until the death of the firstborn, then pursued them to the sea.",
  dates:"c. 15th or 13th c. BC (disputed; unnamed)",
  desc:`The king Moses and Aaron confront after the death of the earlier king: "Who is the LORD, that I should obey him and let Israel go?" He makes the Israelites gather their own straw for bricks, and through blood, frogs, gnats, flies, the plague on livestock, boils, hail, locusts and darkness his heart is hardened — by himself and by the LORD. Twice he says "I have sinned," then refuses again. After his own firstborn son dies he summons Moses and Aaron in the night: "Up! Leave my people … And also bless me." Then he changes his mind and pursues with six hundred chariots; the sea flows back over his army, and "not one of them survived." Exodus does not name him or say plainly whether he himself died; scholars who try to identify him propose Amenhotep II or Rameses II, depending on the Exodus date.`,
  notconfused:`The pharaoh of the oppression earlier in Exodus, who "died" during Moses' years in Midian (Exodus 2:23), and the pharaohs of Genesis — the one who took Sarai into his palace (Genesis 12) and the one who raised Joseph to power (Genesis 41).`,
  refs:["Exodus 5","Exodus 7–12","Exodus 14"]},

 {id:"sihon", name:"Sihon king of the Amorites", short:"Sihon", cat:"natn", w:7,
  dates:"c. 15th c. BC (traditional)",
  desc:`The Amorite king "who reigned in Heshbon," who had taken Moab's land as far as the Arnon. When Israel asks to pass along the King's Highway he refuses and marches out to fight at Jahaz; Israel puts him to the sword and takes his land from the Arnon to the Jabbok. Deuteronomy says "the LORD your God had made his spirit stubborn and his heart obstinate."`,
  refs:["Numbers 21:21–31","Deuteronomy 2:24–37","Deuteronomy 29:7","Joshua 12:2–3","Joshua 13:21"]},

 {id:"og", name:"Og king of Bashan", short:"Og", cat:"natn", w:7,
  dates:"c. 15th c. BC (traditional)",
  desc:`King of Bashan, who marches out against Israel at Edrei and is struck down with his sons and his army; his sixty fortified cities in Argob are taken. "Og king of Bashan was the last of the Rephaites. His bed was decorated with iron and was more than nine cubits long and four cubits wide." His land goes to the half-tribe of Manasseh.`,
  refs:["Numbers 21:33–35","Numbers 32:33","Deuteronomy 3:1–13","Joshua 12:4–5","Joshua 13:12"]},

 {id:"zur_m", name:"Zur", short:"Zur", cat:"natn", w:5,
  dates:"c. 15th c. BC (traditional)",
  desc:`"A tribal chief of a Midianite family," father of Kozbi. Numbers 31:8 names a Zur among "the five kings of Midian" — Evi, Rekem, Zur, Hur and Reba — killed in Israel's war on Midian; the text does not say outright that he is the same man. Joshua 13:21 lists the same five as "Midianite chiefs … princes allied with Sihon."`,
  refs:["Numbers 25:15","Numbers 25:18","Numbers 31:8","Joshua 13:21"]},

 {id:"kozbi", name:"Kozbi", short:"Kozbi", cat:"natn", w:5,
  dates:"c. 15th c. BC (traditional)",
  desc:`"Kozbi daughter of Zur, a tribal chief of a Midianite family," brought into the camp by Zimri during the Peor apostasy and killed with him by Phinehas. The LORD later says the Midianites "deceived you in the Peor incident involving their sister Kozbi."`,
  refs:["Numbers 25:6–18"]},

 {id:"balaam", name:"Balaam son of Beor", short:"Balaam", cat:"natn", w:8,
  dates:"c. 15th c. BC (traditional)",
  desc:`A diviner "at Pethor, near the Euphrates River," hired by Balak king of Moab to curse Israel. God first forbids him, then lets him go — "but do only what I tell you." On the road his donkey sees the angel of the LORD and speaks to him. From Bamoth Baal, Pisgah and Peor he blesses Israel instead of cursing them: "How can I curse those whom God has not cursed?" and "A star will come out of Jacob; a scepter will rise out of Israel." Numbers 31 says the Midianite women "followed Balaam's advice" at Peor, and he is killed with the sword in the war on Midian. Deuteronomy 23:5: "the LORD your God … turned the curse into a blessing for you."`,
  refs:["Numbers 22–24","Numbers 31:8","Numbers 31:16","Deuteronomy 23:4–5","Joshua 13:22","Joshua 24:9–10"]},

 {id:"balak", name:"Balak son of Zippor", short:"Balak", cat:"natn", w:6,
  aliases:"king of Moab",
  dates:"c. 15th c. BC (traditional)",
  desc:`"Balak son of Zippor, who was king of Moab at that time," terrified by Israel's numbers, sends twice for Balaam to curse them and builds seven altars on three heights. Each time Balaam blesses Israel; finally "Balak's anger burned against Balaam. He struck his hands together" and sent him home.`,
  refs:["Numbers 22–24"]},

 // Joshua
 {id:"adonizedek", name:"Adoni-Zedek king of Jerusalem", short:"Adoni-Zedek", cat:"natn", w:6,
  dates:"c. 1400 BC (early-date tradition; disputed)",
  desc:`King of Jerusalem who, alarmed that Gibeon had made peace with Israel, summons the kings of Hebron, Jarmuth, Lachish and Eglon: "Come up and help me attack Gibeon." Joshua marches all night from Gilgal; the LORD hurls hailstones on the fleeing Amorites and "the sun stood still." The five kings hide in the cave at Makkedah, and Joshua has his commanders put their feet on their necks before putting them to death.`,
  refs:["Joshua 10:1–27","Joshua 12:10"]},

 {id:"hoham", name:"Hoham king of Hebron", short:"Hoham", cat:"natn", w:4,
  dates:"c. 1400 BC (early-date tradition; disputed)",
  desc:`One of the five Amorite kings summoned by Adoni-Zedek against Gibeon; captured in the cave at Makkedah and put to death by Joshua.`,
  refs:["Joshua 10:3–27"]},

 {id:"piram", name:"Piram king of Jarmuth", short:"Piram", cat:"natn", w:4,
  dates:"c. 1400 BC (early-date tradition; disputed)",
  desc:`One of the five Amorite kings summoned by Adoni-Zedek against Gibeon; captured in the cave at Makkedah and put to death by Joshua.`,
  refs:["Joshua 10:3–27"]},

 {id:"japhia", name:"Japhia king of Lachish", short:"Japhia", cat:"natn", w:4,
  dates:"c. 1400 BC (early-date tradition; disputed)",
  desc:`One of the five Amorite kings summoned by Adoni-Zedek against Gibeon; captured in the cave at Makkedah and put to death by Joshua.`,
  notconfused:`Japhia, a town on Zebulun's boundary (Joshua 19:12).`,
  refs:["Joshua 10:3–27"]},

 {id:"debir_k", name:"Debir king of Eglon", short:"Debir (king)", cat:"natn", w:4,
  dates:"c. 1400 BC (early-date tradition; disputed)",
  desc:`One of the five Amorite kings summoned by Adoni-Zedek against Gibeon; captured in the cave at Makkedah and put to death by Joshua.`,
  notconfused:`The city of Debir (formerly Kiriath Sepher), which Joshua took and Othniel later captured (Joshua 10:38; 15:15).`,
  refs:["Joshua 10:3–27"]},

 {id:"horam", name:"Horam king of Gezer", short:"Horam", cat:"natn", w:4,
  dates:"c. 1400 BC (early-date tradition; disputed)",
  desc:`"Horam king of Gezer had come up to help Lachish, but Joshua defeated him and his army — until no survivors were left."`,
  refs:["Joshua 10:33"]},

 {id:"jabin_h", name:"Jabin king of Hazor", short:"Jabin (Joshua)", cat:"natn", w:6,
  clash:"Jabin", clashtag:"King of Hazor, 'the head of all these kingdoms,' defeated by Joshua at the Waters of Merom.",
  dates:"c. 1400 BC (early-date tradition; disputed)",
  desc:`King of Hazor — "the head of all these kingdoms" — who gathers the northern kings with "a large number of horses and chariots" at the Waters of Merom. Joshua attacks suddenly, hamstrings their horses and burns their chariots, then captures Hazor, puts its king to the sword and burns the city.`,
  notconfused:`Jabin king of Canaan, who reigned in Hazor in the time of Deborah (Judges 4).`,
  refs:["Joshua 11:1–13"]},

 {id:"jobab_m", name:"Jobab king of Madon", short:"Jobab", cat:"natn", w:4,
  dates:"c. 1400 BC (early-date tradition; disputed)",
  desc:`One of the northern kings Jabin of Hazor summoned to fight Israel at the Waters of Merom; the king of Madon is listed among the thirty-one kings Joshua defeated.`,
  notconfused:`Jobab son of Joktan (Genesis 10:29) and Jobab son of Zerah, an early king of Edom (Genesis 36:33).`,
  refs:["Joshua 11:1–12","Joshua 12:19"]},

 {id:"anak", name:"Anak", short:"Anak", cat:"natn", w:5,
  dates:"before the conquest (undated)",
  desc:`Ancestor of the Anakites, the people of great size whom the spies saw at Hebron — "the descendants of Anak come from the Nephilim" (Numbers 13:33). His forefather was Arba. Joshua destroyed the Anakites from the hill country; "only in Gaza, Gath and Ashdod did any survive."`,
  refs:["Numbers 13:22","Numbers 13:28–33","Deuteronomy 9:2","Joshua 11:21–22","Joshua 15:13–14"]},

 {id:"sheshai", name:"Sheshai", short:"Sheshai", cat:"natn", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`One of "the three Anakites — Sheshai, Ahiman and Talmai, the sons of Anak," living at Hebron when the spies came, and later driven out by Caleb.`,
  refs:["Numbers 13:22","Joshua 15:14"]},

 {id:"ahiman", name:"Ahiman", short:"Ahiman", cat:"natn", w:4,
  dates:"c. 15th c. BC (traditional)",
  desc:`One of the three sons of Anak at Hebron whom the spies saw and Caleb later drove out.`,
  refs:["Numbers 13:22","Joshua 15:14"]},

 {id:"talmai", name:"Talmai son of Anak", short:"Talmai", cat:"natn", w:4,
  clash:"Talmai", clashtag:"A son of Anak at Hebron, driven out by Caleb.",
  dates:"c. 15th c. BC (traditional)",
  desc:`One of the three sons of Anak at Hebron whom the spies saw and Caleb later drove out.`,
  notconfused:`Talmai king of Geshur, the father of David's wife Maakah (2 Samuel 3:3).`,
  refs:["Numbers 13:22","Joshua 15:14"]},

 // Judges
 {id:"adonibezek", name:"Adoni-Bezek", short:"Adoni-Bezek", cat:"natn", w:5,
  dates:"c. 14th c. BC (traditional; disputed)",
  desc:`A Canaanite ruler defeated by Judah at Bezek; they cut off his thumbs and big toes, and he says, "Seventy kings with their thumbs and big toes cut off have picked up scraps under my table. Now God has paid me back for what I did to them." He dies in Jerusalem.`,
  refs:["Judges 1:4–7"]},

 {id:"cushan", name:"Cushan-Rishathaim", short:"Cushan-Rishathaim", cat:"natn", w:5,
  dates:"c. 14th c. BC (traditional; disputed)",
  desc:`"King of Aram Naharaim," to whom the Israelites were subject for eight years until the LORD gave him "into the hands of Othniel."`,
  refs:["Judges 3:8–10"]},

 {id:"eglon", name:"Eglon king of Moab", short:"Eglon", cat:"natn", w:6,
  dates:"c. 14th–13th c. BC (traditional; disputed)",
  desc:`King of Moab, "a very fat man," who with the Ammonites and Amalekites takes the City of Palms and rules Israel eighteen years. Ehud, bringing tribute, kills him in his upper room with a hidden sword.`,
  notconfused:`Eglon, the Amorite city whose king Debir was defeated by Joshua (Joshua 10:3).`,
  refs:["Judges 3:12–25"]},

 {id:"jabin_c", name:"Jabin king of Canaan", short:"Jabin (Judges)", cat:"natn", w:6,
  clash:"Jabin", clashtag:"'Jabin king of Canaan, who reigned in Hazor,' whose commander Sisera oppressed Israel for twenty years.",
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`"Jabin king of Canaan, who reigned in Hazor," with nine hundred iron chariots under his commander Sisera, who "cruelly oppressed the Israelites for twenty years." After Sisera's defeat "the hand of the Israelites pressed harder and harder against Jabin king of Canaan until they destroyed him."`,
  notconfused:`Jabin king of Hazor, defeated by Joshua at the Waters of Merom (Joshua 11).`,
  refs:["Judges 4:2–3","Judges 4:23–24"]},

 {id:"sisera", name:"Sisera", short:"Sisera", cat:"natn", w:7,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`"The commander of Jabin's army," based in Harosheth Haggoyim. Routed by Barak at the Kishon, he flees on foot to the tent of Jael, who kills him in his sleep with a tent peg. "From the heavens the stars fought … against Sisera."`,
  refs:["Judges 4","Judges 5:20–30"]},

 {id:"sisera_mother", name:"Sisera's mother", short:"Sisera's mother", cat:"natn", w:4,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`In Deborah's song she peers through the window — "Why is his chariot so long in coming?" — imagining her son dividing the plunder. Unnamed in Scripture.`,
  refs:["Judges 5:28–30"]},

 {id:"oreb", name:"Oreb", short:"Oreb", cat:"natn", w:4,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`A Midianite leader captured by the men of Ephraim and killed "at the rock of Oreb"; his head was brought to Gideon.`,
  refs:["Judges 7:24–25","Judges 8:3"]},

 {id:"zeeb", name:"Zeeb", short:"Zeeb", cat:"natn", w:4,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`A Midianite leader captured by the men of Ephraim and killed "at the winepress of Zeeb"; his head was brought to Gideon.`,
  refs:["Judges 7:24–25","Judges 8:3"]},

 {id:"zebah", name:"Zebah", short:"Zebah", cat:"natn", w:5,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`One of "the two kings of Midian," pursued across the Jordan and captured by Gideon. Because they had killed Gideon's brothers at Tabor, Gideon kills them himself.`,
  refs:["Judges 8:4–21"]},

 {id:"zalmunna", name:"Zalmunna", short:"Zalmunna", cat:"natn", w:5,
  dates:"c. 12th c. BC (traditional; disputed)",
  desc:`With Zebah, one of the two kings of Midian captured by Gideon; when Jether is afraid, they say, "Come, do it yourself. 'As is the man, so is his strength.'"`,
  refs:["Judges 8:4–21"]},

 // 1 Samuel
 {id:"nahash", name:"Nahash the Ammonite", short:"Nahash", cat:"natn", w:6,
  dates:"c. 11th c. BC (traditional)",
  desc:`An Ammonite who besieges Jabesh Gilead and offers a treaty "only on the condition that I gouge out the right eye of every one of you." Saul rallies Israel and routs the Ammonites. Samuel later calls him "Nahash king of the Ammonites."`,
  refs:["1 Samuel 11:1–11","1 Samuel 12:12"]},

 {id:"agag", name:"Agag king of the Amalekites", short:"Agag", cat:"natn", w:6,
  dates:"c. 11th c. BC (traditional)",
  desc:`King of the Amalekites whom Saul spares against the LORD's command. Brought in chains, he thinks, "Surely the bitterness of death is past," but Samuel says, "As your sword has made women childless, so will your mother be childless among women," and puts him to death at Gilgal.`,
  refs:["1 Samuel 15:8–33"]},

 {id:"achish", name:"Achish son of Maok", short:"Achish", cat:"natn", w:7,
  aliases:"king of Gath",
  dates:"c. 11th c. BC (traditional)",
  desc:`King of Gath. David first flees to him and feigns madness — "Am I so short of madmen?" Later Achish takes in David and his six hundred men, gives him Ziklag, and trusts him — "you have been as pleasing in my eyes as an angel of God" — until the Philistine commanders refuse to let David fight with them at Gilboa.`,
  refs:["1 Samuel 21:10–15","1 Samuel 27","1 Samuel 28:1–2","1 Samuel 29"]},

 {id:"doeg", name:"Doeg the Edomite", short:"Doeg", cat:"natn", w:6,
  dates:"c. 11th c. BC (traditional)",
  desc:`"Saul's chief shepherd," who sees David at Nob and reports Ahimelek to Saul. When Saul's guards refuse to strike the priests, Doeg kills eighty-five of them and puts the town of Nob to the sword.`,
  refs:["1 Samuel 21:7","1 Samuel 22:9–19"]},

 {id:"goliath", name:"Goliath of Gath", short:"Goliath", cat:"natn", w:8,
  dates:"c. 11th c. BC (traditional)",
  desc:`"A champion named Goliath, who was from Gath," whose "height was six cubits and a span," armed in bronze with an iron-pointed spear. For forty days he defies the ranks of Israel; David, coming "in the name of the LORD Almighty," fells him with a sling and a stone and cuts off his head with his own sword. His sword is later kept at Nob and given to David.`,
  refs:["1 Samuel 17","1 Samuel 21:9","1 Samuel 22:10"]},

 // 2 Samuel
 {id:"amalekite_msg", name:"The Amalekite messenger", short:"Amalekite messenger", cat:"natn", w:5,
  dates:"c. 1010 BC (traditional)",
  desc:`"The son of a foreigner, an Amalekite," who brings David Saul's crown and armband and claims, "I stood beside him and killed him." David has him struck down: "Your own mouth testified against you." (1 Samuel 31 says Saul fell on his own sword.) Unnamed in Scripture.`,
  refs:["2 Samuel 1:1–16","1 Samuel 31:4"]},

 {id:"rekab", name:"Rekab son of Rimmon", short:"Rekab", cat:"king", w:5,
  dates:"c. 1010 BC (traditional)",
  desc:`With his brother Baanah, a Benjamite raiding leader under Ish-Bosheth, who murders Ish-Bosheth in his bed and brings his head to David at Hebron; David has them killed.`,
  refs:["2 Samuel 4:2–12"]},

 {id:"baanah", name:"Baanah son of Rimmon", short:"Baanah", cat:"king", w:5,
  dates:"c. 1010 BC (traditional)",
  desc:`Rekab's brother and accomplice in the murder of Ish-Bosheth; executed on David's order.`,
  refs:["2 Samuel 4:2–12"]},

 {id:"hiram", name:"Hiram king of Tyre", short:"Hiram", cat:"natn", w:7,
  dates:"c. 10th c. BC (traditional)",
  desc:`King of Tyre, who "sent envoys to David, along with cedar logs and carpenters and stonemasons, and they built a palace for David."`,
  refs:["2 Samuel 5:11"]},

 {id:"hadadezer", name:"Hadadezer son of Rehob", short:"Hadadezer", cat:"natn", w:6,
  aliases:"king of Zobah",
  dates:"c. 10th c. BC (traditional)",
  desc:`King of Zobah, defeated by David when he went to restore his monument at the Euphrates; David took his gold shields to Jerusalem. He later sends Arameans under his commander Shobak to help the Ammonites, and is routed again at Helam.`,
  refs:["2 Samuel 8:3–12","2 Samuel 10:16–19"]},

 {id:"tou", name:"Tou king of Hamath", short:"Tou", cat:"natn", w:4,
  dates:"c. 10th c. BC (traditional)",
  desc:`King of Hamath, who had been at war with Hadadezer; he sends his son Joram to congratulate David with articles of silver, gold and bronze.`,
  refs:["2 Samuel 8:9–10"]},

 {id:"joram_t", name:"Joram son of Tou", short:"Joram (Tou's son)", cat:"natn", w:4,
  clash:"Joram", clashtag:"Son of Tou king of Hamath, sent to congratulate David.",
  dates:"c. 10th c. BC (traditional)",
  desc:`Sent by his father Tou king of Hamath to greet David after his victory over Hadadezer, bringing gifts that David dedicated to the LORD.`,
  refs:["2 Samuel 8:10"]},

 {id:"hanun", name:"Hanun son of Nahash", short:"Hanun", cat:"natn", w:5,
  dates:"c. 10th c. BC (traditional)",
  desc:`King of the Ammonites after his father. Suspecting David's envoys of spying, he shaves off half of each man's beard and cuts off their garments, provoking war with Israel.`,
  refs:["2 Samuel 10:1–14"]},

 {id:"shobak", name:"Shobak", short:"Shobak", cat:"natn", w:4,
  dates:"c. 10th c. BC (traditional)",
  desc:`"The commander of Hadadezer's army," struck down by David at Helam.`,
  refs:["2 Samuel 10:16–18"]},

 {id:"talmai_g", name:"Talmai king of Geshur", short:"Talmai (Geshur)", cat:"natn", w:5,
  clash:"Talmai", clashtag:"King of Geshur, Absalom's grandfather, with whom Absalom took refuge.",
  dates:"c. 10th c. BC (traditional)",
  desc:`"Talmai son of Ammihud, the king of Geshur," father of David's wife Maakah. Absalom flees to him after killing Amnon and stays three years.`,
  notconfused:`Talmai son of Anak, driven out of Hebron by Caleb (Joshua 15:14).`,
  refs:["2 Samuel 3:3","2 Samuel 13:37–38"]},

 {id:"araunah", name:"Araunah the Jebusite", short:"Araunah", cat:"natn", w:5,
  dates:"c. 10th c. BC (traditional)",
  desc:`Owner of the threshing floor where the angel of the LORD stops the plague. He offers it free, but David insists on paying — "I will not sacrifice to the LORD my God burnt offerings that cost me nothing" — and builds an altar there.`,
  refs:["2 Samuel 24:16–25"]},

 // 1 Kings
 {id:"pharaoh_sol", name:"Pharaoh in Solomon's day", short:"Pharaoh (Solomon)", cat:"natn", w:5,
  clash:"Pharaoh", clashtag:"The king of Egypt whose daughter Solomon married, and who gave Gezer as her dowry.",
  dates:"c. 10th c. BC (unnamed)",
  desc:`The unnamed king of Egypt with whom Solomon "made an alliance… and married his daughter." He had captured and burned Gezer "and then gave it as a wedding gift to his daughter, Solomon's wife."`,
  refs:["1 Kings 3:1","1 Kings 7:8","1 Kings 9:16","1 Kings 9:24"]},

 {id:"sheba_queen", name:"The queen of Sheba", short:"Queen of Sheba", cat:"natn", w:7,
  dates:"c. 10th c. BC (unnamed)",
  desc:`Hearing of Solomon's fame "and his relationship to the LORD," she comes "to test Solomon with hard questions," with a great caravan of spices, gold and precious stones. Overwhelmed, she says, "not even half was told me," praises the LORD "who has delighted in you," and gives Solomon 120 talents of gold.`,
  refs:["1 Kings 10:1–13"]},

 {id:"huram", name:"Huram of Tyre", short:"Huram", cat:"natn", w:5,
  dates:"c. 10th c. BC",
  desc:`A bronze craftsman "whose mother was a widow from the tribe of Naphtali and whose father was from Tyre," brought by Solomon to cast the temple's bronze pillars Jakin and Boaz, the Sea on twelve bulls, the stands and basins.`,
  notconfused:`Hiram king of Tyre, who supplied Solomon's cedar (1 Kings 5).`,
  refs:["1 Kings 7:13–47"]},

 {id:"hadad_e", name:"Hadad the Edomite", short:"Hadad", cat:"natn", w:5,
  dates:"c. 10th c. BC",
  desc:`"From the royal line of Edom," he fled to Egypt as a boy when Joab struck down Edom's men; Pharaoh gave him the sister of Queen Tahpenes as his wife. After David and Joab die he returns, and "the LORD raised up against Solomon an adversary."`,
  refs:["1 Kings 11:14–22"]},

 {id:"rezon", name:"Rezon son of Eliada", short:"Rezon", cat:"natn", w:5,
  dates:"c. 10th c. BC",
  desc:`A fugitive from Hadadezer king of Zobah who gathers a band, takes control in Damascus, and "was Israel's adversary as long as Solomon lived."`,
  refs:["1 Kings 11:23–25"]},

 {id:"shishak", name:"Shishak king of Egypt", short:"Shishak", cat:"natn", w:6,
  dates:"c. 10th c. BC (Egypt)",
  desc:`The king of Egypt with whom Jeroboam took refuge from Solomon. "In the fifth year of King Rehoboam, Shishak king of Egypt attacked Jerusalem" and carried off the treasures of the temple and palace, including Solomon's gold shields.`,
  refs:["1 Kings 11:40","1 Kings 14:25–26"]},

 {id:"benhadad_t", name:"Ben-Hadad son of Tabrimmon", short:"Ben-Hadad (Asa's day)", cat:"natn", w:5,
  clash:"Ben-Hadad", clashtag:"The king of Aram in Damascus paid by Asa to break his treaty with Baasha.",
  dates:"c. 9th c. BC (Aram)",
  desc:`"Ben-Hadad son of Tabrimmon, the son of Hezion, the king of Aram, who was ruling in Damascus." Bribed with the temple's silver and gold by Asa, he breaks his treaty with Baasha and conquers towns in northern Israel.`,
  refs:["1 Kings 15:18–20"]},

 {id:"benhadad_a", name:"Ben-Hadad king of Aram", short:"Ben-Hadad (Ahab's day)", cat:"natn", w:7,
  clash:"Ben-Hadad", clashtag:"The king of Aram who besieged Samaria in the days of Ahab.",
  dates:"c. 9th c. BC (Aram)",
  desc:`King of Aram who besieges Samaria with thirty-two kings and demands Ahab's silver, gold, wives and children. Defeated at Samaria and again at Aphek — where his officials think Israel's gods are "gods of the hills" — he is spared by Ahab: "He is my brother." 1 Kings does not say whether he is the Ben-Hadad of Asa's day.`,
  refs:["1 Kings 20","1 Kings 22:1–4"]},

 {id:"ethbaal", name:"Ethbaal king of the Sidonians", short:"Ethbaal", cat:"natn", w:5,
  dates:"c. 9th c. BC (Sidon)",
  desc:`Father of Jezebel, whom Ahab married — "Jezebel daughter of Ethbaal king of the Sidonians."`,
  refs:["1 Kings 16:31"]},

 // 2 Kings
 {id:"mesha", name:"Mesha king of Moab", short:"Mesha", cat:"natn", w:6,
  dates:"c. 9th c. BC (Moab)",
  desc:`A sheep-raising king who paid Israel "a hundred thousand lambs and the wool of a hundred thousand rams," and rebelled after Ahab died. Facing Joram, Jehoshaphat and the king of Edom, he is driven back to Kir Hareseth, where he offers his firstborn son "as a sacrifice on the city wall," and Israel withdraws. A Moabite inscription (the Mesha Stele) also names him.`,
  refs:["2 Kings 1:1","2 Kings 3:4–27"]},

 {id:"naaman", name:"Naaman the Aramean", short:"Naaman", cat:"natn", w:8,
  dates:"c. 9th c. BC (Aram)",
  desc:`"Commander of the army of the king of Aram… a valiant soldier, but he had leprosy." Sent by his king to the king of Israel, he comes to Elisha's door and is told to wash seven times in the Jordan; angry at first — "Are not Abana and Pharpar, the rivers of Damascus, better?" — he obeys, and his flesh becomes "clean like that of a young boy." "Now I know that there is no God in all the world except in Israel." He takes home earth to worship the LORD, asking pardon for bowing in the temple of Rimmon.`,
  refs:["2 Kings 5"]},

 {id:"hazael", name:"Hazael king of Aram", short:"Hazael", cat:"natn", w:8,
  dates:"c. 842 – c. 800 BC (Aram)",
  desc:`An official of Ben-Hadad sent to ask Elisha whether the king will recover. Elisha weeps, foretelling "the harm you will do to the Israelites," and says, "The LORD has shown me that you will become king of Aram." The next day Hazael smothers Ben-Hadad with a wet cloth and takes the throne. He wounds Joram at Ramoth Gilead, seizes Israel's land east of the Jordan in Jehu's day, takes Gath and is bought off from Jerusalem by Joash, and oppresses Israel "throughout the reign of Jehoahaz." Elijah had been told to anoint him (1 Kings 19:15).`,
  refs:["1 Kings 19:15","2 Kings 8:7–15","2 Kings 8:28–29","2 Kings 10:32–33","2 Kings 12:17–18","2 Kings 13:3","2 Kings 13:22–25"]},

 {id:"benhadad_e", name:"Ben-Hadad king of Aram (Elisha's day)", short:"Ben-Hadad (Elisha's day)", cat:"natn", w:6,
  clash:"Ben-Hadad", clashtag:"The king of Aram who besieged Samaria in Elisha's day and was smothered by Hazael.",
  dates:"c. 9th c. BC (Aram)",
  desc:`"Ben-Hadad king of Aram mobilized his entire army" and besieges Samaria until famine grips the city; the LORD makes the Arameans hear "the sound of chariots and horses" and they flee. Later, ill in Damascus, he sends Hazael with forty camel-loads of gifts to ask Elisha, "Will I recover?" — and Hazael smothers him. 2 Kings does not say whether he is the Ben-Hadad of Ahab's day.`,
  refs:["2 Kings 6:24–7:16","2 Kings 8:7–15"]},

 {id:"benhadad_h", name:"Ben-Hadad son of Hazael", short:"Ben-Hadad (Hazael's son)", cat:"natn", w:5,
  clash:"Ben-Hadad", clashtag:"Hazael's son and successor, three times defeated by Jehoash of Israel.",
  dates:"c. 8th c. BC (Aram)",
  desc:`Son of Hazael, who keeps Israel under Aram's power in Jehoahaz's day and succeeds his father. "Three times Jehoash defeated him," recovering the towns taken from Jehoahaz — as Elisha's three arrow-strikes foretold.`,
  refs:["2 Kings 13:3","2 Kings 13:18–19","2 Kings 13:24–25"]},

 {id:"rezin", name:"Rezin king of Aram", short:"Rezin", cat:"natn", w:6,
  dates:"c. 8th c. BC (Aram)",
  desc:`King of Aram sent with Pekah of Israel against Judah in Jotham's day. Together they besiege Ahaz in Jerusalem but "could not overpower him"; Rezin recovers Elath for Aram. At Ahaz's request Tiglath-Pileser captures Damascus, deports its people to Kir "and put Rezin to death."`,
  refs:["2 Kings 15:37","2 Kings 16:5–9"]},

 {id:"pul", name:"Pul king of Assyria", short:"Pul", cat:"natn", w:5,
  dates:"c. 8th c. BC (Assyria)",
  desc:`An Assyrian king who invades Israel in Menahem's reign and withdraws after receiving a thousand talents of silver. 2 Kings names Pul and Tiglath-Pileser separately; many historians identify them as the same king, Pul being his name in Babylonian records.`,
  refs:["2 Kings 15:19–20"]},

 {id:"tiglath", name:"Tiglath-Pileser king of Assyria", short:"Tiglath-Pileser", cat:"natn", w:7,
  dates:"reigned 745 – 727 BC (Assyria)",
  desc:`In Pekah's reign he takes Ijon, Abel Beth Maakah, Kedesh, Hazor, Gilead and Galilee, "including all the land of Naphtali," and deports the people to Assyria. Paid by Ahaz with temple treasure, he captures Damascus and kills Rezin; Ahaz meets him there and copies an altar he sees.`,
  notconfused:`Possibly the same king as Pul (2 Kings 15:19); see that entry.`,
  refs:["2 Kings 15:29","2 Kings 16:7–10"]},

 {id:"shalmaneser", name:"Shalmaneser king of Assyria", short:"Shalmaneser", cat:"natn", w:6,
  dates:"reigned 727 – 722 BC (Assyria)",
  desc:`Overlord of Hoshea, whom he imprisons as a traitor for sending envoys to Egypt and withholding tribute. He besieges Samaria for three years; "in the ninth year of Hoshea, the king of Assyria captured Samaria and deported the Israelites to Assyria."`,
  refs:["2 Kings 17:3–6","2 Kings 18:9–11"]},

 {id:"so_egypt", name:"So king of Egypt", short:"So", cat:"natn", w:4,
  dates:"c. 725 BC (Egypt) — identity uncertain",
  desc:`The king of Egypt to whom Hoshea "had sent envoys," which Assyria treated as treason. He is not securely identified in Egyptian records.`,
  refs:["2 Kings 17:4"]},

 {id:"field_cmdr", name:"The Assyrian field commander", short:"Field commander", cat:"natn", w:6,
  dates:"c. 701 BC (Assyria)",
  desc:`Sent by Sennacherib from Lachish with "his supreme commander, his chief officer and his field commander," he stands by the aqueduct of the Upper Pool and taunts Jerusalem in Hebrew so the people on the wall can hear: Egypt is "that splintered reed of a staff," and "Has the god of any nation ever delivered his land from the hand of the king of Assyria?"`,
  refs:["2 Kings 18:17–37","2 Kings 19:4","2 Kings 19:8"]},

 {id:"tirhakah", name:"Tirhakah king of Cush", short:"Tirhakah", cat:"natn", w:4,
  dates:"c. 701 BC (Cush / Egypt)",
  desc:`Sennacherib receives "a report that Tirhakah, the king of Cush, was marching out to fight against him," and sends Hezekiah a second threatening message.`,
  refs:["2 Kings 19:9"]},

 {id:"adrammelek", name:"Adrammelek son of Sennacherib", short:"Adrammelek", cat:"natn", w:4,
  dates:"c. 681 BC (Assyria)",
  desc:`With his brother Sharezer he kills their father Sennacherib "while he was worshiping in the temple of his god Nisrok," and escapes to the land of Ararat.`,
  notconfused:`Adrammelek, a god of the Sepharvites to whom children were burned (2 Kings 17:31).`,
  refs:["2 Kings 19:37"]},

 {id:"sharezer", name:"Sharezer son of Sennacherib", short:"Sharezer", cat:"natn", w:4,
  dates:"c. 681 BC (Assyria)",
  desc:`With his brother Adrammelek he kills Sennacherib with the sword and flees to Ararat.`,
  refs:["2 Kings 19:37"]},

 {id:"esarhaddon", name:"Esarhaddon king of Assyria", short:"Esarhaddon", cat:"natn", w:4,
  dates:"reigned 681 – 669 BC (Assyria)",
  desc:`Son of Sennacherib, who "succeeded him as king" after his brothers murdered their father.`,
  refs:["2 Kings 19:37"]},

 {id:"merodach", name:"Marduk-Baladan son of Baladan", short:"Marduk-Baladan", cat:"natn", w:5,
  dates:"c. late 8th c. BC (Babylon)",
  desc:`King of Babylon who sends Hezekiah letters and a gift on hearing of his illness. Hezekiah shows the envoys everything in his storehouses, and Isaiah foretells that all of it will be "carried off to Babylon."`,
  refs:["2 Kings 20:12–19"]},

 {id:"necho", name:"Pharaoh Necho king of Egypt", short:"Pharaoh Necho", cat:"natn", w:6,
  clash:"Pharaoh", clashtag:"Pharaoh Necho, who killed Josiah at Megiddo and made Jehoiakim king.",
  dates:"c. 609 BC (Egypt)",
  desc:`Going up to the Euphrates "to help the king of Assyria," he kills King Josiah at Megiddo. He puts Jehoahaz in chains at Riblah and takes him to Egypt, levies silver and gold on Judah, and makes Eliakim son of Josiah king, renaming him Jehoiakim. Afterward "the king of Egypt did not march out from his own country again," for Babylon had taken his territory.`,
  refs:["2 Kings 23:29–35","2 Kings 24:7"]},

 {id:"nebuzaradan", name:"Nebuzaradan commander of the guard", short:"Nebuzaradan", cat:"natn", w:6,
  dates:"c. 586 BC (Babylon)",
  desc:`"Commander of the imperial guard, an official of the king of Babylon." In Nebuchadnezzar's nineteenth year he burns the temple, the royal palace and Jerusalem's houses, breaks down the walls, carries the people into exile leaving "some of the poorest people of the land," and takes Seraiah, Zephaniah and others to Riblah to be executed.`,
  refs:["2 Kings 25:8–21"]},

 {id:"awel_marduk", name:"Awel-Marduk king of Babylon", short:"Awel-Marduk", cat:"natn", w:5,
  dates:"reigned c. 562 – 560 BC (Babylon)",
  desc:`In the year he becomes king — the thirty-seventh year of Jehoiachin's exile — he releases Jehoiachin from prison, "spoke kindly to him," gives him a seat of honor above the other captive kings and a regular allowance for life.`,
  refs:["2 Kings 25:27–30"]},


 {id:"sennacherib", name:"Sennacherib king of Assyria", short:"Sennacherib", cat:"natn", w:8,
  dates:"reigned 705 – 681 BC (Assyria)",
  desc:`"In the fourteenth year of King Hezekiah's reign" he captures Judah's fortified cities and exacts three hundred talents of silver and thirty of gold. From Lachish he sends his commanders to demand Jerusalem's surrender and writes that its God will not save it. Isaiah answers, "I will put my hook in your nose." That night the angel of the LORD strikes 185,000 in the Assyrian camp. He returns to Nineveh, where his sons Adrammelek and Sharezer kill him in the temple of Nisrok, and Esarhaddon succeeds him.`,
  refs:["2 Kings 18:13–19:37","Isaiah 36–37"]},

 {id:"nebuchadnezzar", name:"Nebuchadnezzar king of Babylon", short:"Nebuchadnezzar", cat:"natn", w:11,
  dates:"reigned 605 – 562 BC (Babylon)",
  desc:`He invades Judah and makes Jehoiakim his vassal. In his eighth year he besieges Jerusalem, takes Jehoiachin captive to Babylon with ten thousand of its people and the temple treasures, and makes Zedekiah king. When Zedekiah rebels he besieges the city again; in his nineteenth year his commander Nebuzaradan burns the temple and Jerusalem, and he appoints Gedaliah governor. In Daniel he dreams of empires, throws three men into a furnace, and is finally humbled before "the Most High."`,
  refs:["2 Kings 24–25","Daniel 2–4"]},

 {id:"belshazzar", name:"Belshazzar", short:"Belshazzar", cat:"natn", w:7,
  dates:"c. 539 BC (Babylon)",
  desc:`The last ruler of Babylon, who feasts from the Temple's holy vessels and sees a hand write his doom on the wall — "weighed and found wanting" — the night the city falls to Persia.`,
  refs:["Daniel 5"]},

 {id:"cyrus", name:"Cyrus the Great", short:"Cyrus", cat:"natn", w:10,
  dates:"reigned 559 – 530 BC (Persia)",
  desc:`The Persian conqueror of Babylon whose decree in 538 BC frees the exiles to return home and rebuild the Temple. Isaiah names him God's "anointed" and "shepherd" long in advance.`,
  refs:["2 Chronicles 36:22–23","Ezra 1","Isaiah 45:1"]},

 {id:"darius", name:"Darius", short:"Darius", cat:"natn", w:7,
  dates:"c. 6th–5th c. BC (Persia)",
  desc:`The Persian king who reluctantly casts Daniel into the lions' den and rejoices at his rescue; a Darius also renews the decree to finish the Temple.`,
  refs:["Daniel 6","Ezra 6"]},

 {id:"xerxes", name:"Xerxes", short:"Xerxes", cat:"natn", w:8,
  aliases:"Ahasuerus",
  dates:"reigned 486 – 465 BC (Persia)",
  desc:`The Persian king of the book of Esther, who deposes Queen Vashti, takes Esther as queen, and is maneuvered into overturning Haman's plot against the Jews.`,
  refs:["Esther 1–2","Esther 8"]},

 {id:"artaxerxes", name:"Artaxerxes", short:"Artaxerxes", cat:"natn", w:7,
  dates:"reigned 465 – 424 BC (Persia)",
  desc:`The Persian king who authorizes Ezra to teach the Law and, later, sends his cupbearer Nehemiah to rebuild Jerusalem's walls.`,
  refs:["Ezra 7","Nehemiah 2"]},
];

const OT_LINKS = [
 // ================= GENESIS =================
 // ----- creation & the first family (Genesis 2–4) -----
 lk("adam","eve","fam","husband of",""),
 lk("adam","cain","fam","father of",""),
 lk("adam","abel","fam","father of",""),
 lk("adam","seth","fam","father of","at 130"),
 lk("eve","cain","fam","mother of",""),
 lk("eve","abel","fam","mother of",""),
 lk("eve","seth","fam","mother of","\"in place of Abel\""),
 lk("cain","abel","conf","killed","the first murder"),
 // Cain's line (Genesis 4:17–24)
 lk("cain","enoch_cain","fam","father of","named a city after him"),
 lk("enoch_cain","lamech_cain","fam","ancestor of","through Irad, Mehujael and Methushael"),
 lk("lamech_cain","adah","fam","husband of",""),
 lk("lamech_cain","zillah","fam","husband of",""),
 lk("adah","jabal","fam","mother of",""),
 lk("adah","jubal","fam","mother of",""),
 lk("jabal","jubal","fam","brother of",""),
 lk("zillah","tubalcain","fam","mother of",""),
 lk("tubalcain","naamah","fam","brother of",""),
 // Seth's line to Noah (Genesis 5)
 lk("seth","enosh","fam","father of",""),
 lk("enosh","kenan","fam","father of",""),
 lk("kenan","mahalalel","fam","father of",""),
 lk("mahalalel","jared","fam","father of",""),
 lk("jared","enoch","fam","father of",""),
 lk("enoch","methuselah","fam","father of",""),
 lk("methuselah","lamech_noah","fam","father of",""),
 lk("lamech_noah","noah","fam","father of",""),

 // ----- Noah and the nations (Genesis 6–10) -----
 lk("noah","shem","fam","father of",""),
 lk("noah","ham","fam","father of",""),
 lk("noah","japheth","fam","father of",""),
 lk("ham","canaan_p","fam","father of",""),
 lk("noah","canaan_p","conf","cursed","after Ham saw him uncovered"),
 lk("ham","nimrod","fam","grandfather of","through Cush"),
 // Shem's line to Abram (Genesis 11)
 lk("shem","arphaxad","fam","father of","two years after the flood"),
 lk("arphaxad","shelah_a","fam","father of",""),
 lk("shelah_a","eber","fam","father of",""),
 lk("eber","peleg","fam","father of",""),
 lk("peleg","reu","fam","father of",""),
 lk("reu","serug","fam","father of",""),
 lk("serug","nahor_elder","fam","father of",""),
 lk("nahor_elder","terah","fam","father of",""),

 // ----- Terah's family (Genesis 11–24) -----
 lk("terah","abraham","fam","father of",""),
 lk("terah","nahor_b","fam","father of",""),
 lk("terah","haran_t","fam","father of",""),
 lk("terah","sarah","fam","father of","so Abraham says (20:12)"),
 lk("haran_t","lot","fam","father of",""),
 lk("haran_t","milkah","fam","father of",""),
 lk("nahor_b","milkah","fam","husband of",""),
 lk("nahor_b","bethuel","fam","father of",""),
 lk("milkah","bethuel","fam","mother of",""),
 lk("bethuel","rebekah","fam","father of",""),
 lk("bethuel","laban","fam","father of",""),
 lk("rebekah","laban","fam","sister of",""),

 // ----- Abraham's household (Genesis 12–25) -----
 lk("abraham","sarah","fam","husband of","also his half-sister (20:12)"),
 lk("abraham","hagar","fam","took as a wife","given by Sarai (16:3)"),
 lk("sarah","hagar","conf","mistreated","her Egyptian slave; later sent away"),
 lk("abraham","keturah","fam","husband of",""),
 lk("abraham","ishmael","fam","father of","at 86"),
 lk("hagar","ishmael","fam","mother of",""),
 lk("abraham","isaac","fam","father of","at 100"),
 lk("sarah","isaac","fam","mother of",""),
 lk("isaac","ishmael","fam","half-brother of","together they buried Abraham"),
 lk("abraham","lot","fam","uncle of","rescued him from the four kings"),
 lk("lot","lotwife","fam","husband of",""),
 lk("lot","moab","fam","father of","by his older daughter"),
 lk("lot","benammi","fam","father of","by his younger daughter"),
 lk("abraham","eliezer","min","named as his heir","while childless (15:2)"),
 lk("abraham","abr_servant","min","sent to find Isaac a wife",""),
 lk("abr_servant","rebekah","min","found at the spring","and brought her to Isaac"),

 // ----- Isaac's family (Genesis 24–28) -----
 lk("isaac","rebekah","fam","husband of","married at 40"),
 lk("isaac","jacob","fam","father of",""),
 lk("isaac","esau","fam","father of",""),
 lk("rebekah","jacob","fam","mother of",""),
 lk("rebekah","esau","fam","mother of",""),
 lk("jacob","esau","fam","twin brother of",""),
 lk("jacob","esau","conf","took his birthright and blessing","reconciled twenty years later"),
 lk("deborah_n","rebekah","min","nurse to",""),
 lk("esau","ishmael","fam","son-in-law of","married his daughter Mahalath (28:9)"),

 // ----- Jacob's household (Genesis 29–35) -----
 lk("laban","leah","fam","father of",""),
 lk("laban","rachel","fam","father of",""),
 lk("laban","jacob","conf","deceived","gave Leah in place of Rachel"),
 lk("jacob","leah","fam","husband of",""),
 lk("jacob","rachel","fam","husband of","loved her more than Leah"),
 lk("leah","rachel","fam","sister of",""),
 lk("rachel","bilhah","min","gave to Jacob","her servant, from Laban"),
 lk("leah","zilpah","min","gave to Jacob","her servant, from Laban"),
 lk("jacob","bilhah","fam","took as a wife",""),
 lk("jacob","zilpah","fam","took as a wife",""),
 // the twelve sons and Dinah (in birth order)
 lk("jacob","reuben","fam","father of","firstborn"),
 lk("jacob","simeon","fam","father of",""),
 lk("jacob","levi","fam","father of",""),
 lk("jacob","judah","fam","father of",""),
 lk("jacob","dan","fam","father of",""),
 lk("jacob","naphtali","fam","father of",""),
 lk("jacob","gad","fam","father of",""),
 lk("jacob","asher","fam","father of",""),
 lk("jacob","issachar","fam","father of",""),
 lk("jacob","zebulun","fam","father of",""),
 lk("jacob","dinah","fam","father of","his daughter"),
 lk("jacob","joseph_ot","fam","father of","loved him more than any other son"),
 lk("jacob","benjamin","fam","father of","youngest"),
 lk("leah","reuben","fam","mother of",""),
 lk("leah","simeon","fam","mother of",""),
 lk("leah","levi","fam","mother of",""),
 lk("leah","judah","fam","mother of",""),
 lk("leah","issachar","fam","mother of",""),
 lk("leah","zebulun","fam","mother of",""),
 lk("leah","dinah","fam","mother of",""),
 lk("rachel","joseph_ot","fam","mother of",""),
 lk("rachel","benjamin","fam","mother of","died giving birth"),
 lk("bilhah","dan","fam","mother of",""),
 lk("bilhah","naphtali","fam","mother of",""),
 lk("zilpah","gad","fam","mother of",""),
 lk("zilpah","asher","fam","mother of",""),
 lk("reuben","bilhah","conf","slept with","his father's concubine (35:22)"),
 // Dinah and Shechem (Genesis 34)
 lk("hamor","shechem_p","fam","father of",""),
 lk("shechem_p","dinah","conf","raped","then sought to marry her"),
 lk("simeon","shechem_p","conf","killed","avenging Dinah, with Levi"),
 lk("levi","shechem_p","conf","killed","avenging Dinah, with Simeon"),

 // ----- Judah and Tamar (Genesis 38) -----
 lk("hirah","judah","min","friend of","the Adullamite"),
 lk("judah","er","fam","father of",""),
 lk("judah","onan","fam","father of",""),
 lk("judah","shelah_j","fam","father of",""),
 lk("er","tamar_g","fam","husband of",""),
 lk("judah","tamar_g","fam","father-in-law of","and father of her twins"),
 lk("judah","perez","fam","father of",""),
 lk("judah","zerah_j","fam","father of",""),
 lk("tamar_g","perez","fam","mother of",""),
 lk("tamar_g","zerah_j","fam","mother of",""),
 lk("perez","zerah_j","fam","twin brother of",""),

 // ----- Joseph in Egypt (Genesis 37–50) -----
 lk("reuben","joseph_ot","min","tried to rescue","\"Don't shed any blood\""),
 lk("judah","joseph_ot","conf","proposed selling","to the Ishmaelites"),
 lk("joseph_ot","simeon","conf","held as hostage","until Benjamin was brought"),
 lk("joseph_ot","benjamin","fam","brother of","both sons of Rachel"),
 lk("judah","benjamin","min","pledged himself for","offered to stay a slave in his place"),
 lk("potiphar","joseph_ot","rule","bought, then imprisoned",""),
 lk("potiphar","potiphar_wife","fam","husband of",""),
 lk("potiphar_wife","joseph_ot","conf","falsely accused",""),
 lk("joseph_ot","cupbearer","min","interpreted his dream","restored within three days"),
 lk("joseph_ot","baker","min","interpreted his dream","impaled within three days"),
 lk("pharaoh_jos","cupbearer","rule","restored",""),
 lk("pharaoh_jos","baker","rule","impaled",""),
 lk("pharaoh_jos","joseph_ot","rule","put in charge of Egypt","second only to Pharaoh"),
 lk("pharaoh_jos","jacob","rule","settled his family in Goshen","Jacob blessed him"),
 lk("joseph_ot","asenath","fam","husband of","given by Pharaoh"),
 lk("potiphera","asenath","fam","father of",""),
 lk("joseph_ot","manasseh_j","fam","father of","firstborn"),
 lk("joseph_ot","ephraim","fam","father of",""),
 lk("asenath","manasseh_j","fam","mother of",""),
 lk("asenath","ephraim","fam","mother of",""),
 lk("jacob","manasseh_j","spec","claimed as his own son","48:5"),
 lk("jacob","ephraim","spec","blessed with his right hand","the younger put ahead"),

 // ----- foreign kings and neighbours -----
 lk("pharaoh_abr","sarah","rule","took into his palace","returned her after the LORD struck his household"),
 lk("kedorlaomer","lot","conf","carried off","from Sodom"),
 lk("abraham","kedorlaomer","conf","routed","with 318 trained men"),
 lk("melchizedek","abraham","spec","blessed","Abram gave him a tenth"),
 lk("bera","abraham","min","offered the goods","Abram refused them"),
 lk("abimelek","sarah","rule","took, then returned","warned by God in a dream"),
 lk("abimelek","abraham","min","made a treaty with","at Beersheba"),
 lk("abimelek","isaac","min","made a treaty with","whether the same Abimelek is not stated"),
 lk("phicol","abimelek","min","commander of his forces",""),
 lk("ephron","abraham","min","sold Machpelah","the family burial cave"),

 // ----- cross-era ties out of Genesis -----
 lk("rahab","boaz","fam","mother of",""),
 lk("boaz","ruth","fam","married",""),
 lk("ruth","naomi","fam","daughter-in-law of",""),

 // ================= EXODUS =================
 // ----- the Levite line to Moses and Aaron (Exodus 6:16–25) -----
 lk("levi","gershon","fam","father of",""),
 lk("levi","kohath","fam","father of",""),
 lk("levi","merari","fam","father of",""),
 lk("kohath","amram","fam","father of",""),
 lk("kohath","izhar","fam","father of",""),
 lk("kohath","uzziel","fam","father of",""),
 lk("kohath","jochebed","fam","brother of","Amram married his father's sister (6:20)"),
 lk("izhar","korah","fam","father of",""),
 lk("amram","jochebed","fam","husband of",""),
 lk("amram","aaron","fam","father of",""),
 lk("amram","moses","fam","father of",""),
 lk("jochebed","aaron","fam","mother of",""),
 lk("jochebed","moses","fam","mother of","hid him three months"),
 lk("jochebed","miriam","fam","mother of","Numbers 26:59"),
 lk("moses","aaron","fam","brother of","Aaron three years older (7:7)"),
 lk("moses","miriam","fam","brother of",""),
 lk("miriam","aaron","fam","sister of","\"Miriam the prophet, Aaron's sister\""),

 // ----- Aaron's priestly house -----
 lk("aaron","elisheba","fam","husband of",""),
 lk("amminadab","elisheba","fam","father of",""),
 lk("amminadab","nahshon","fam","father of",""),
 lk("nahshon","elisheba","fam","brother of",""),
 lk("aaron","nadab","fam","father of",""),
 lk("aaron","abihu","fam","father of",""),
 lk("aaron","eleazar","fam","father of",""),
 lk("aaron","ithamar","fam","father of",""),
 lk("elisheba","nadab","fam","mother of",""),
 lk("elisheba","abihu","fam","mother of",""),
 lk("elisheba","eleazar","fam","mother of",""),
 lk("elisheba","ithamar","fam","mother of",""),
 lk("putiel","eleazar","fam","father-in-law of",""),
 lk("eleazar","phinehas","fam","father of",""),
 lk("moses","aaron","spec","ordained as priest","with his sons (Exodus 29; 40:12–15)"),
 lk("ithamar","moses","min","recorded the tabernacle materials","at Moses' command (38:21)"),
 // David's line through Judah (Ruth 4:18–21)

 // ----- Moses' birth and Midian (Exodus 1–4, 18) -----
 lk("pharaoh_opp","joseph_ot","rule","to whom Joseph meant nothing","Exodus 1:8"),
 lk("shiphrah","pharaoh_opp","conf","defied","let the Hebrew boys live"),
 lk("puah","pharaoh_opp","conf","defied","let the Hebrew boys live"),
 lk("pharaoh_opp","pharaoh_daughter","fam","father of",""),
 lk("pharaoh_daughter","moses","fam","adopted","\"he became her son\""),
 lk("jochebed","pharaoh_daughter","min","nursed Moses for","paid as his nurse"),
 lk("pharaoh_opp","moses","conf","tried to kill","after Moses killed an Egyptian"),
 lk("jethro","zipporah","fam","father of",""),
 lk("jethro","moses","fam","father-in-law of",""),
 lk("jethro","moses","disc","advised","appoint officials to judge (ch. 18)"),
 lk("moses","zipporah","fam","husband of",""),
 lk("moses","gershom","fam","father of",""),
 lk("moses","eliezer_m","fam","father of",""),
 lk("zipporah","gershom","fam","mother of",""),
 lk("zipporah","eliezer_m","fam","mother of",""),
 lk("aaron","moses","min","spokesman for","\"as if he were your mouth\" (4:16)"),

 // ----- plagues, exodus and the wilderness -----
 lk("pharaoh_ex","moses","conf","defied","through the plagues"),
 lk("pharaoh_ex","aaron","conf","refused","\"Who is the LORD, that I should obey him?\""),
 lk("moses","joseph_ot","min","carried his bones out of Egypt","as Joseph had made Israel swear (13:19)"),
 lk("moses","joshua_ot","disc","his young aide","Exodus 24:13; 33:11"),
 lk("hur","moses","min","held up his hands","with Aaron, against the Amalekites"),
 lk("hur","aaron","min","left in charge with","while Moses was on Sinai (24:14)"),
 lk("moses","bezalel","spec","announced as chosen by the LORD","to build the tabernacle"),
 lk("bezalel","oholiab","min","worked with","the tabernacle's craftsmen"),
 lk("moses","aaron","conf","rebuked over the golden calf","\"What did these people do to you…?\" (32:21)"),

// ================= LEVITICUS · NUMBERS · DEUTERONOMY =================
 // ----- the priesthood -----
 lk("moses","eleazar","spec","dressed in Aaron's garments","on Mount Hor; Eleazar succeeded Aaron"),
 lk("uzziel","mishael","fam","father of",""),
 lk("uzziel","elzaphan","fam","father of",""),
 lk("mishael","nadab","min","carried out","with Elzaphan (Lev 10:4–5)"),
 lk("elzaphan","abihu","min","carried out","with Mishael (Lev 10:4–5)"),
 lk("elzaphan","kohath","min","leader of the Kohathite clans","Numbers 3:30"),
 lk("eliasaph_l","gershon","min","leader of the Gershonite families","Numbers 3:24"),
 lk("zuriel","merari","min","leader of the Merarite clans","Numbers 3:35"),
 lk("eleazar","kohath","min","chief leader of the Levites","over the care of the sanctuary (3:32)"),
 lk("ithamar","gershon","min","directed the Gershonites","Numbers 4:28"),
 lk("ithamar","merari","min","directed the Merarites","Numbers 4:33"),

 // ----- wilderness rebellions -----
 lk("miriam","moses","conf","spoke against","over his Cushite wife (Num 12)"),
 lk("aaron","moses","conf","spoke against","with Miriam (Num 12)"),
 lk("moses","cushite_wife","fam","husband of","Numbers 12:1"),
 lk("eldad","moses","spec","prophesied in the camp","\"I wish that all the LORD's people were prophets\""),
 lk("medad","moses","spec","prophesied in the camp",""),
 lk("joshua_ot","eldad","conf","asked Moses to stop","\"Moses, my lord, stop them!\""),
 lk("eliab_p","dathan","fam","father of",""),
 lk("eliab_p","abiram","fam","father of",""),
 lk("dathan","abiram","fam","brother of",""),
 lk("eliab_p","reuben","fam","descendant of","through Pallu"),
 lk("dathan","moses","conf","rebelled against","with Korah; swallowed by the earth"),
 lk("abiram","moses","conf","rebelled against","with Korah; swallowed by the earth"),
 lk("on_p","moses","conf","rose up against","with Korah (16:1)"),
 lk("korah","dathan","min","allied with",""),
 lk("korah","aaron","conf","challenged his priesthood","the staff of Levi budded (Num 17)"),
 lk("shelomith","blasphemer","fam","mother of","Leviticus 24:11"),
 lk("moses","blasphemer","rule","brought before","stoned outside the camp"),
 lk("jethro","hobab","fam","father of","\"Hobab son of Reuel\" (Num 10:29)"),
 lk("moses","hobab","min","asked to guide Israel","\"you can be our eyes\""),

 // ----- spies and succession -----
 lk("caleb","judah","min","spy from the tribe of",""),
 lk("joshua_ot","ephraim","min","spy from the tribe of","Numbers 13:8"),
 lk("moses","joshua_ot","spec","renamed","Hoshea → Joshua (13:16)"),
 lk("eleazar","joshua_ot","spec","stood with at his commissioning","to inquire by the Urim (27:21)"),
 lk("eleazar","caleb","min","assigned the land with","with Joshua (Num 34:17–19)"),

 // ----- Peor and Midian -----
 lk("phinehas","zimri","conf","killed","with a spear, stopping the plague"),
 lk("phinehas","kozbi","conf","killed",""),
 lk("zimri","kozbi","min","brought into the camp","at Peor"),
 lk("zimri","simeon","min","leader of a family of","Numbers 25:14"),
 lk("zur_m","kozbi","fam","father of",""),

 // ----- kings east of the Jordan -----
 lk("moses","sihon","conf","defeated","at Jahaz"),
 lk("moses","og","conf","defeated","at Edrei"),

 // ----- Zelophehad's daughters (Num 26–27, 36) -----
 lk("manasseh_j","makir","fam","father of",""),
 lk("makir","gilead_p","fam","father of",""),
 lk("gilead_p","hepher","fam","father of",""),
 lk("hepher","zelophehad","fam","father of",""),
 lk("zelophehad","mahlah","fam","father of",""),
 lk("zelophehad","noah_z","fam","father of",""),
 lk("zelophehad","hoglah","fam","father of",""),
 lk("zelophehad","milkah_z","fam","father of",""),
 lk("zelophehad","tirzah","fam","father of",""),
 lk("mahlah","moses","min","petitioned for an inheritance","\"What Zelophehad's daughters are saying is right\""),

 // ----- tribal leaders, spies and land assigners (Numbers) -----
 lk("nahshon","judah","min","leader of the tribe of",""),
 lk("nethanel","issachar","min","leader of the tribe of",""),
 lk("eliab_h","zebulun","min","leader of the tribe of",""),
 lk("elizur","reuben","min","leader of the tribe of",""),
 lk("shelumiel","simeon","min","leader of the tribe of",""),
 lk("eliasaph_d","gad","min","leader of the tribe of",""),
 lk("elishama","ephraim","min","leader of the tribe of",""),
 lk("gamaliel","manasseh_j","min","leader of the tribe of",""),
 lk("abidan","benjamin","min","leader of the tribe of",""),
 lk("ahiezer","dan","min","leader of the tribe of",""),
 lk("pagiel","asher","min","leader of the tribe of",""),
 lk("ahira","naphtali","min","leader of the tribe of",""),
 lk("shammua","reuben","min","spy from the tribe of",""),
 lk("shaphat","simeon","min","spy from the tribe of",""),
 lk("igal","issachar","min","spy from the tribe of",""),
 lk("palti","benjamin","min","spy from the tribe of",""),
 lk("gaddiel","zebulun","min","spy from the tribe of",""),
 lk("gaddi","manasseh_j","min","spy from the tribe of",""),
 lk("ammiel","dan","min","spy from the tribe of",""),
 lk("sethur","asher","min","spy from the tribe of",""),
 lk("nahbi","naphtali","min","spy from the tribe of",""),
 lk("geuel","gad","min","spy from the tribe of",""),
 lk("shemuel","simeon","min","land assigner for","Numbers 34"),
 lk("elidad","benjamin","min","land assigner for","Numbers 34"),
 lk("bukki","dan","min","land assigner for","Numbers 34"),
 lk("hanniel","manasseh_j","min","land assigner for","Numbers 34"),
 lk("kemuel","ephraim","min","land assigner for","Numbers 34"),
 lk("elizaphan_p","zebulun","min","land assigner for","Numbers 34"),
 lk("paltiel","issachar","min","land assigner for","Numbers 34"),
 lk("ahihud","asher","min","land assigner for","Numbers 34"),
 lk("pedahel","naphtali","min","land assigner for","Numbers 34"),

 // ----- wilderness (Numbers onward) -----
 lk("korah","moses","conf","rebelled against","swallowed by the earth"),
 lk("moses","joshua_ot","spec","commissioned","as his successor"),
 lk("balak","balaam","min","hired","to curse Israel"),

// ================= JOSHUA =================
 lk("zerah_j","zimri_j","fam","ancestor of","\"Zimri, the son of Zerah\" (7:1)"),
 lk("zimri_j","karmi","fam","father of",""),
 lk("karmi","achan","fam","father of",""),
 lk("joshua_ot","achan","conf","exposed by lot","stoned in the Valley of Achor"),
 lk("adonizedek","hoham","min","summoned against Gibeon",""),
 lk("adonizedek","piram","min","summoned against Gibeon",""),
 lk("adonizedek","japhia","min","summoned against Gibeon",""),
 lk("adonizedek","debir_k","min","summoned against Gibeon",""),
 lk("joshua_ot","adonizedek","conf","put to death","with the four kings, at Makkedah"),
 lk("joshua_ot","horam","conf","defeated","at Lachish"),
 lk("jabin_h","jobab_m","min","summoned against Israel","to the Waters of Merom"),
 lk("joshua_ot","jabin_h","conf","put to the sword","and burned Hazor"),
 lk("arba","anak","fam","forefather of",""),
 lk("anak","sheshai","fam","father of",""),
 lk("anak","ahiman","fam","father of",""),
 lk("anak","talmai","fam","father of",""),
 lk("caleb","sheshai","conf","drove out","from Hebron"),
 lk("caleb","ahiman","conf","drove out","from Hebron"),
 lk("caleb","talmai","conf","drove out","from Hebron"),
 lk("joshua_ot","caleb","spec","gave Hebron to","and blessed him (14:13)"),
 lk("caleb","aksah","fam","father of",""),
 lk("kenaz_o","othniel","fam","father of",""),
 lk("othniel","aksah","fam","husband of","won by capturing Kiriath Sepher"),
 lk("caleb","othniel","fam","father-in-law of","\"Othniel son of Kenaz, Caleb's brother\" (15:17)"),
 lk("phinehas","reuben","min","led the delegation to","over the altar by the Jordan (Josh 22)"),

 // ----- conquest & judges -----
 lk("caleb","joshua_ot","min","fellow spy","the two who trusted God"),
 lk("rahab","joshua_ot","min","hid his spies","at Jericho"),
 lk("deborah","gideon","spec","a judge before",""),
 lk("samson","delilah","conf","betrayed by",""),
 lk("samson","samuel","spec","a judge before",""),
 lk("eli","samuel","disc","raised","at Shiloh"),
 lk("hannah","samuel","fam","mother of",""),

// ================= JUDGES =================
 lk("othniel","cushan","conf","overpowered","eight years of oppression ended"),
 lk("ehud","eglon","conf","killed","with a hidden double-edged sword"),
 lk("othniel","ehud","spec","a judge before",""),
 lk("ehud","shamgar","spec","a judge before","\"After Ehud came Shamgar\""),
 lk("shamgar","deborah","spec","a judge before",""),
 lk("lappidoth","deborah","fam","husband of",""),
 lk("deborah","barak","spec","summoned","to Mount Tabor"),
 lk("barak","sisera","conf","routed","at the Kishon"),
 lk("jael","sisera","conf","killed","with a tent peg"),
 lk("heber_k","jael","fam","husband of",""),
 lk("heber_k","hobab","fam","descendant of","\"the descendants of Hobab\" (4:11)"),
 lk("jabin_c","sisera","rule","commander of his army",""),
 lk("sisera_mother","sisera","fam","mother of",""),
 lk("joash_ab","gideon","fam","father of",""),
 lk("gideon","purah","min","his servant",""),
 lk("gideon","oreb","conf","Midianite leader killed","by Ephraim; his head brought to Gideon"),
 lk("gideon","zeeb","conf","Midianite leader killed","by Ephraim; his head brought to Gideon"),
 lk("gideon","zebah","conf","killed",""),
 lk("gideon","zalmunna","conf","killed",""),
 lk("gideon","jether_g","fam","father of","his oldest son"),
 lk("gideon","abimelek_g","fam","father of","by his concubine in Shechem"),
 lk("gideon","jotham_g","fam","father of","his youngest son"),
 lk("abimelek_g","jotham_g","conf","murdered his brothers","Jotham alone escaped"),
 lk("gaal","abimelek_g","conf","rebelled against",""),
 lk("zebul","abimelek_g","min","his deputy","governor of Shechem"),
 lk("abimelek_g","tola","spec","ruled before","\"After the time of Abimelek\""),
 lk("tola","jair_g","spec","a judge before",""),
 lk("jair_g","jephthah","spec","a judge before",""),
 lk("gilead_j","jephthah","fam","father of","by a prostitute"),
 lk("jephthah","jephthah_dau","fam","father of","his only child"),
 lk("jephthah","ibzan","spec","a judge before",""),
 lk("ibzan","elon_z","spec","a judge before",""),
 lk("elon_z","abdon","spec","a judge before",""),
 lk("abdon","samson","spec","a judge before",""),
 lk("manoah","samson","fam","father of",""),
 lk("manoah_wife","samson","fam","mother of",""),
 lk("manoah","manoah_wife","fam","husband of",""),
 lk("samson","samson_wife","fam","married","in Timnah"),
 lk("micah_e","jonathan_g","min","hired as priest","\"a young Levite\" — see 18:30"),
 lk("gershom","jonathan_g","fam","ancestor of","\"Jonathan son of Gershom, the son of Moses\" (18:30)"),
 lk("levite_j","concubine_j","fam","master of","her death led to war on Benjamin"),

 // ================= RUTH =================
 lk("elimelek","naomi","fam","husband of",""),
 lk("elimelek","mahlon","fam","father of",""),
 lk("elimelek","kilion","fam","father of",""),
 lk("naomi","mahlon","fam","mother of",""),
 lk("naomi","kilion","fam","mother of",""),
 lk("mahlon","ruth","fam","husband of","\"Mahlon's widow\" (4:10)"),
 lk("orpah","naomi","fam","daughter-in-law of","returned to Moab"),
 lk("boaz","elimelek","fam","of the clan of",""),
 lk("redeemer","boaz","min","declined to redeem","gave Boaz his sandal"),
 lk("boaz","obed","fam","father of",""),
 lk("ruth","obed","fam","mother of",""),
 lk("obed","jesse","fam","father of",""),
 lk("jesse","david","fam","father of",""),
 lk("perez","hezron_j","fam","father of",""),
 lk("hezron_j","ram_j","fam","father of",""),
 lk("ram_j","amminadab","fam","father of",""),
 lk("nahshon","salmon","fam","father of",""),
 lk("salmon","boaz","fam","father of",""),

// ================= 1 SAMUEL =================
 lk("elkanah","hannah","fam","husband of","\"Don't I mean more to you than ten sons?\""),
 lk("elkanah","peninnah","fam","husband of",""),
 lk("peninnah","hannah","conf","provoked","her rival, year after year"),
 lk("elkanah","samuel","fam","father of",""),
 lk("eli","hophni","fam","father of",""),
 lk("eli","phinehas_eli","fam","father of",""),
 lk("phinehas_eli","ichabod","fam","father of",""),
 lk("phinehas_eli","ahitub","fam","father of",""),
 lk("ahitub","ahijah_p","fam","father of",""),
 lk("ahitub","ahimelek_p","fam","father of",""),
 lk("ahimelek_p","abiathar","fam","father of","the only son to escape Nob"),
 lk("abinadab_k","eleazar_ab","fam","father of","guarded the ark"),
 lk("samuel","joel_s","fam","father of",""),
 lk("samuel","abijah_s","fam","father of",""),
 lk("abiel","kish","fam","father of",""),
 lk("abiel","ner","fam","father of",""),
 lk("ner","abner","fam","father of",""),
 lk("kish","saul","fam","father of",""),
 lk("saul","abner","rule","commander of his army","his cousin"),
 lk("saul","ahinoam_s","fam","husband of",""),
 lk("saul","ishvi","fam","father of",""),
 lk("saul","malkishua","fam","father of","killed at Gilboa"),
 lk("saul","abinadab_s","fam","father of","killed at Gilboa"),
 lk("saul","merab","fam","father of",""),
 lk("saul","michal","fam","father of",""),
 lk("merab","adriel","fam","married","instead of David"),
 lk("david","michal","fam","married","bride-price of Philistine foreskins"),
 lk("michal","paltiel_l","fam","given by Saul to","25:44"),
 lk("michal","david","min","saved his life","let him down through a window"),
 lk("saul","nahash","conf","routed","relieving Jabesh Gilead"),
 lk("saul","agag","conf","spared","against the LORD's command"),
 lk("samuel","agag","conf","put to death","at Gilgal"),
 lk("samuel","saul","conf","rejected as king","\"To obey is better than sacrifice\""),
 lk("jonathan","ahijah_p","min","with Saul's army","Ahijah wore the ephod at Gibeah"),
 lk("jesse","eliab_j","fam","father of",""),
 lk("jesse","abinadab_j","fam","father of",""),
 lk("jesse","shammah_j","fam","father of",""),
 lk("eliab_j","david","conf","scolded","\"I know how conceited you are\""),
 lk("ahimelek_p","david","min","gave bread and Goliath's sword","at Nob"),
 lk("doeg","ahimelek_p","conf","killed","with eighty-five priests of Nob"),
 lk("saul","ahimelek_p","conf","ordered killed",""),
 lk("abiathar","david","min","fled to","brought the ephod"),
 lk("achish","david","rule","gave Ziklag to","and later sent him back"),
 lk("nabal","david","conf","insulted",""),
 lk("nabal","abigail","fam","husband of",""),
 lk("abigail","david","fam","became wife of","after Nabal's death"),
 lk("david","ahinoam_j","fam","married",""),
 lk("ahimelek_h","david","min","with David in the wilderness",""),
 lk("endor_medium","saul","min","consulted by","the night before Gilboa"),
 lk("endor_medium","samuel","spec","brought up","\"a ghostly figure coming up out of the earth\""),
 lk("gad_p","david","spec","advised","\"Go into the land of Judah\""),

// ================= 2 SAMUEL =================
 lk("amalekite_msg","david","min","brought Saul's crown","executed for claiming to kill Saul"),
 lk("abner","ishbosheth","spec","made king","over Israel at Mahanaim"),
 lk("saul","ishbosheth","fam","father of",""),
 lk("zeruiah","joab","fam","mother of",""),
 lk("zeruiah","abishai","fam","mother of",""),
 lk("zeruiah","asahel","fam","mother of",""),
 lk("joab","abishai","fam","brother of",""),
 lk("abner","asahel","conf","killed","at Gibeon"),
 lk("joab","abner","conf","murdered","avenging Asahel"),
 lk("david","joab","rule","commander of his army",""),
 lk("rekab","ishbosheth","conf","murdered","with Baanah"),
 lk("baanah","rekab","fam","brother of",""),
 lk("david","rekab","conf","executed","for killing Ish-Bosheth"),
 lk("david","amnon","fam","father of","by Ahinoam of Jezreel"),
 lk("ahinoam_j","amnon","fam","mother of",""),
 lk("david","kileab","fam","father of","by Abigail"),
 lk("abigail","kileab","fam","mother of",""),
 lk("maakah_g","absalom","fam","mother of",""),
 lk("talmai_g","maakah_g","fam","father of",""),
 lk("david","maakah_g","fam","married",""),
 lk("david","adonijah","fam","father of","by Haggith"),
 lk("haggith","adonijah","fam","mother of",""),
 lk("david","nathan_s","fam","father of",""),
 lk("david","tamar_d","fam","father of",""),
 lk("absalom","tamar_d","fam","brother of",""),
 lk("amnon","tamar_d","conf","raped",""),
 lk("jonadab","amnon","min","advised","\"a very shrewd man\""),
 lk("absalom","amnon","conf","had him killed","at Baal Hazor"),
 lk("absalom","talmai_g","min","fled to","his grandfather, for three years"),
 lk("wisewoman_tekoa","david","min","persuaded to recall Absalom","at Joab's direction"),
 lk("saul","rizpah","fam","concubine",""),
 lk("rizpah","armoni","fam","mother of",""),
 lk("rizpah","mephibosheth_r","fam","mother of",""),
 lk("jonathan","mephibosheth","fam","father of",""),
 lk("david","mephibosheth","min","showed kindness to","\"for the sake of your father Jonathan\""),
 lk("ziba","mephibosheth","min","steward of","later accused him"),
 lk("makir_a","mephibosheth","min","sheltered","at Lo Debar"),
 lk("hiram","david","min","built him a palace","cedar and craftsmen"),
 lk("uzzah","ahio","fam","brother of",""),
 lk("abinadab_k","uzzah","fam","father of",""),
 lk("abinadab_k","ahio","fam","father of",""),
 lk("obededom","david","min","kept the ark","three months, and was blessed"),
 lk("michal","david","conf","despised","when he danced before the ark"),
 lk("nathan","david","conf","rebuked","\"You are the man!\""),
 lk("david","hadadezer","conf","defeated",""),
 lk("tou","joram_t","fam","father of",""),
 lk("joram_t","david","min","congratulated",""),
 lk("hadadezer","shobak","rule","commander of his army",""),
 lk("nahash","hanun","fam","father of","2 Samuel 10:2"),
 lk("hanun","david","conf","humiliated his envoys",""),
 lk("uriah","bathsheba","fam","husband of",""),
 lk("david","uriah","conf","had him killed","by Joab's arrangement"),
 lk("ittai","david","min","loyal in exile","\"whether it means life or death\""),
 lk("hushai","david","min","his confidant","sent to frustrate Ahithophel"),
 lk("hushai","ahithophel","conf","countered his advice",""),
 lk("ahithophel","absalom","min","counselor to",""),
 lk("zadok","david","min","priest to","returned the ark to Jerusalem"),
 lk("abiathar","zadok","min","fellow priest",""),
 lk("zadok","ahimaaz_z","fam","father of",""),
 lk("abiathar","jonathan_a","fam","father of",""),
 lk("ahimaaz_z","jonathan_a","min","messengers together","hid in a well at Bahurim"),
 lk("shimei","david","conf","cursed","\"Get out, you murderer!\""),
 lk("joab","absalom","conf","killed","against David's order"),
 lk("amasa","absalom","rule","commander of his army",""),
 lk("joab","amasa","conf","murdered","\"How are you, my brother?\""),
 lk("zeruiah","amasa","fam","aunt of","his mother Abigail was Zeruiah's sister"),
 lk("barzillai","david","min","provided for","at Mahanaim"),
 lk("sheba_b","david","conf","rebelled against",""),
 lk("wisewoman_abel","sheba_b","conf","had him beheaded",""),
 lk("joab","sheba_b","conf","besieged",""),
 lk("benaiah","david","min","over his bodyguard",""),
 lk("jehoshaphat_r","david","min","recorder",""),
 lk("josheb","david","min","chief of the Three",""),
 lk("eleazar_d","david","min","one of the Three",""),
 lk("shammah_a","david","min","one of the Three",""),
 lk("gad_p","david","spec","brought judgment after the census","three options"),
 lk("araunah","david","min","sold the threshing floor","for the altar"),

 // ----- united monarchy -----
 lk("samuel","saul","spec","anointed","first king"),
 lk("samuel","david","spec","anointed","the shepherd boy"),
 lk("saul","jonathan","fam","father of",""),
 lk("jonathan","david","min","close friend of",""),
 lk("saul","david","conf","hunted","in jealousy"),
 lk("goliath","david","conf","defied","felled by a sling"),
 lk("david","bathsheba","fam","married","after his great sin"),
 lk("nathan","david","spec","gave the throne promise","2 Samuel 7"),
 lk("bathsheba","solomon","fam","mother of",""),
 lk("david","solomon","fam","father of",""),
 lk("david","absalom","fam","father of",""),
 lk("absalom","david","conf","rebelled against",""),
 lk("nathan","solomon","min","secured his succession",""),

// ================= 1 KINGS =================
 lk("abishag","david","min","cared for","in his old age"),
 lk("adonijah","abishag","conf","asked to marry","which cost him his life"),
 lk("adonijah","solomon","conf","claimed the throne against","\"I will be king\""),
 lk("joab","adonijah","min","supported",""),
 lk("abiathar","adonijah","min","supported",""),
 lk("nathan","solomon","spec","anointed","with Zadok at Gihon"),
 lk("zadok","solomon","spec","anointed","at Gihon"),
 lk("bathsheba","adonijah","min","pleaded for him","Solomon refused"),
 lk("benaiah","adonijah","conf","struck down","on Solomon's order"),
 lk("benaiah","joab","conf","struck down","at the altar"),
 lk("benaiah","shimei","conf","struck down","after he left Jerusalem"),
 lk("solomon","abiathar","conf","removed from the priesthood","fulfilling the word against Eli's house"),
 lk("pharaoh_sol","solomon","fam","father-in-law of","gave Gezer as dowry"),
 lk("hiram","solomon","min","supplied cedar for the temple","\"my brother\""),
 lk("huram","solomon","min","cast the temple bronzework",""),
 lk("sheba_queen","solomon","min","visited","\"not even half was told me\""),
 lk("adoniram","solomon","min","over forced labor",""),
 lk("hadad_e","solomon","conf","adversary of",""),
 lk("rezon","solomon","conf","adversary of",""),
 lk("rezon","hadadezer","conf","fled from","his former master"),
 lk("ahijah_sh","jeroboam1","spec","gave ten tribes to","the torn cloak"),
 lk("shishak","jeroboam1","min","sheltered","from Solomon"),
 lk("naamah_a","rehoboam","fam","mother of",""),
 lk("adoniram","rehoboam","min","stoned when sent by",""),
 lk("shemaiah","rehoboam","spec","forbade war","\"this is my doing\""),
 lk("shishak","rehoboam","conf","plundered Jerusalem",""),
 lk("manofgod_judah","jeroboam1","conf","denounced his altar","foretold Josiah"),
 lk("oldprophet_bethel","manofgod_judah","conf","deceived","then buried him"),
 lk("jeroboam1","abijah_j","fam","father of",""),
 lk("ahijah_sh","abijah_j","spec","foretold the death of",""),
 lk("rehoboam","abijah_k","fam","father of",""),
 lk("maakah_ab","abijah_k","fam","mother of",""),
 lk("abijah_k","asa","fam","father of",""),
 lk("asa","maakah_ab","conf","deposed","as queen mother"),
 lk("asa","jehoshaphat_j","fam","father of",""),
 lk("jeroboam1","nadab_k","fam","father of",""),
 lk("baasha","nadab_k","conf","killed","and wiped out Jeroboam's house"),
 lk("asa","baasha","conf","at war with",""),
 lk("asa","benhadad_t","min","bribed","to break his treaty with Baasha"),
 lk("jehu_h","baasha","conf","prophesied against",""),
 lk("baasha","elah","fam","father of",""),
 lk("zimri_k","elah","conf","killed",""),
 lk("omri","zimri_k","conf","besieged","Zimri burned the palace around himself"),
 lk("omri","tibni","conf","rival for the throne",""),
 lk("omri","ahab","fam","father of",""),
 lk("ethbaal","jezebel","fam","father of",""),
 lk("hiel","joshua_ot","min","fulfilled his curse","rebuilding Jericho (Josh 6:26)"),
 lk("obadiah_a","ahab","min","palace administrator",""),
 lk("obadiah_a","elijah","min","met and reported",""),
 lk("widow_zarephath","elijah","min","fed","her son raised to life"),
 lk("benhadad_a","ahab","conf","besieged Samaria","twice defeated, then spared"),
 lk("jezebel","naboth","conf","had him stoned",""),
 lk("ahab","naboth","conf","seized his vineyard",""),
 lk("micaiah","ahab","conf","prophesied his death",""),
 lk("zedekiah_k","micaiah","conf","slapped",""),
 lk("jehoshaphat_j","ahab","min","allied with","at Ramoth Gilead"),

 // ================= 2 KINGS =================
 // Elijah's last days and Elisha
 lk("elijah","ahaziah_israel","conf","foretold his death","he had consulted Baal-Zebub"),
 lk("elijah","hazael","spec","commissioned to anoint","1 Kings 19:15"),
 lk("elijah","jehu","spec","commissioned to anoint","1 Kings 19:16"),
 lk("jehoshaphat_j","jehoram_judah","fam","father of",""),
 lk("jehoshaphat_j","joram_israel","min","allied against Moab",""),
 lk("joram_israel","mesha","conf","marched against","Moab's revolt"),
 lk("elisha","joram_israel","conf","rebuked","\"Go to the prophets of your father\""),
 lk("elisha","jehoshaphat_j","min","prophesied for","out of respect for him"),
 lk("elisha","widow_oil","min","multiplied her oil",""),
 lk("elisha","shunammite","min","raised her son","she had given him a room"),
 lk("gehazi","elisha","disc","servant of",""),
 lk("gehazi","naaman","conf","took silver from","by a lie; struck with leprosy"),
 lk("elisha","naaman","min","healed","\"wash seven times in the Jordan\""),
 lk("naaman_girl","naaman","min","pointed to the prophet","she served his wife"),
 lk("benhadad_e","elisha","min","consulted through Hazael","\"Will I recover?\""),
 lk("elisha","hazael","spec","foretold his kingship","and wept over the harm he would do"),
 lk("hazael","benhadad_e","conf","smothered","and took the throne"),
 lk("hazael","joram_israel","conf","wounded","at Ramoth Gilead"),
 lk("hazael","jehu","conf","took Israel's land","east of the Jordan"),
 lk("hazael","joash_judah","conf","threatened Jerusalem","bought off with temple gold"),
 lk("hazael","jehoahaz_i","conf","oppressed",""),
 lk("hazael","benhadad_h","fam","father of",""),
 lk("benhadad_h","jehoahaz_i","conf","oppressed","with his father Hazael"),
 lk("jehoash_israel","benhadad_h","conf","defeated three times","as Elisha's arrows foretold"),
 // Jehu's revolt
 lk("bidkar","jehu","min","chariot officer of",""),
 lk("jehonadab","jehu","min","rode with","\"see my zeal for the LORD\""),
 lk("jehu","naboth","spec","fulfilled the word about","Joram's body thrown on Naboth's plot"),
 lk("jezebel","joram_israel","fam","mother of","2 Kings 9:22"),
 lk("jehu","jehoahaz_i","fam","father of",""),
 lk("jehoahaz_i","jehoash_israel","fam","father of",""),
 lk("jehoash_israel","jeroboam2","fam","father of",""),
 // Athaliah and Joash
 lk("athaliah","omri","fam","granddaughter of","2 Kings 8:26"),
 lk("jehoram_judah","jehosheba","fam","father of",""),
 lk("jehosheba","joash_judah","fam","hid and saved","her nephew"),
 lk("ahaziah_judah","joash_judah","fam","father of",""),
 lk("zibiah","joash_judah","fam","mother of",""),
 lk("jehoiada","joash_judah","spec","crowned","and instructed him"),
 lk("jehoiada","athaliah","conf","had her put to death",""),
 lk("jozabad","joash_judah","conf","assassinated",""),
 lk("jehozabad","joash_judah","conf","assassinated",""),
 // Judah: Amaziah to Ahaz
 lk("joash_judah","amaziah","fam","father of",""),
 lk("jehoaddan","amaziah","fam","mother of",""),
 lk("amaziah","jozabad","conf","executed","his father's murderer"),
 lk("amaziah","jehozabad","conf","executed","his father's murderer"),
 lk("jehoash_israel","amaziah","conf","defeated and captured","at Beth Shemesh"),
 lk("amaziah","uzziah","fam","father of",""),
 lk("jekoliah","uzziah","fam","mother of",""),
 lk("uzziah","jotham_k","fam","father of","Jotham governed during his leprosy"),
 lk("jerusha","jotham_k","fam","mother of",""),
 lk("jotham_k","ahaz","fam","father of",""),
 lk("rezin","ahaz","conf","besieged Jerusalem","with Pekah"),
 lk("pekah","ahaz","conf","besieged Jerusalem","with Rezin"),
 lk("ahaz","tiglath","rule","became vassal of","\"I am your servant and vassal\""),
 lk("tiglath","rezin","conf","took Damascus and killed",""),
 lk("tiglath","pekah","conf","took Gilead and Galilee","and deported Naphtali"),
 lk("uriah_p","ahaz","min","built the Damascus altar for",""),
 lk("ahaz","hezekiah","fam","father of",""),
 // Israel's last kings
 lk("shallum_k","zechariah_k","conf","assassinated","ending Jehu's dynasty"),
 lk("menahem","shallum_k","conf","assassinated",""),
 lk("pul","menahem","rule","took tribute from","a thousand talents of silver"),
 lk("menahem","pekahiah","fam","father of",""),
 lk("pekah","pekahiah","conf","assassinated",""),
 lk("hoshea_k","pekah","conf","assassinated",""),
 lk("shalmaneser","hoshea_k","conf","imprisoned","then took Samaria"),
 lk("hoshea_k","so_egypt","min","sent envoys to","treason in Assyria's eyes"),
 // Hezekiah and Assyria
 lk("abijah_h","hezekiah","fam","mother of",""),
 lk("eliakim_h","hezekiah","min","palace administrator of",""),
 lk("shebna","hezekiah","min","secretary to",""),
 lk("joah_a","hezekiah","min","recorder for",""),
 lk("eliakim_h","isaiah","min","sent to","in sackcloth"),
 lk("sennacherib","field_cmdr","rule","sent","from Lachish"),
 lk("field_cmdr","hezekiah","conf","taunted","at the Upper Pool"),
 lk("isaiah","sennacherib","conf","prophesied his fall","\"I will put my hook in your nose\""),
 lk("tirhakah","sennacherib","conf","marched against",""),
 lk("adrammelek","sennacherib","conf","killed","his father"),
 lk("sharezer","sennacherib","conf","killed","his father"),
 lk("sennacherib","esarhaddon","fam","father of","and was succeeded by him"),
 lk("merodach","hezekiah","min","sent envoys to","after his illness"),
 // Manasseh to Josiah
 lk("hephzibah","manasseh_k","fam","mother of",""),
 lk("manasseh_k","amon","fam","father of",""),
 lk("meshullemeth","amon","fam","mother of",""),
 lk("amon","josiah","fam","father of",""),
 lk("jedidah","josiah","fam","mother of",""),
 lk("hilkiah","josiah","min","found the Book of the Law","in the temple"),
 lk("hilkiah","shaphan","min","gave the book to",""),
 lk("shaphan","josiah","min","read the book to",""),
 lk("shaphan","ahikam","fam","father of",""),
 lk("hilkiah","huldah","min","consulted",""),
 lk("ahikam","huldah","min","consulted",""),
 lk("akbor","huldah","min","consulted",""),
 lk("asaiah","huldah","min","consulted",""),
 lk("shallum_t","huldah","fam","husband of",""),
 lk("josiah","jeroboam1","conf","tore down his altar","at Bethel"),
 lk("josiah","manofgod_judah","spec","fulfilled his prophecy","and spared his tomb"),
 lk("necho","josiah","conf","killed","at Megiddo"),
 // the last kings of Judah
 lk("josiah","jehoahaz_j","fam","father of",""),
 lk("hamutal","jehoahaz_j","fam","mother of",""),
 lk("necho","jehoahaz_j","rule","deposed","he died in Egypt"),
 lk("josiah","jehoiakim","fam","father of",""),
 lk("zebidah","jehoiakim","fam","mother of",""),
 lk("necho","jehoiakim","rule","made king","renamed Eliakim Jehoiakim"),
 lk("nebuchadnezzar","jehoiakim","rule","made his vassal","then he rebelled"),
 lk("jehoiakim","jehoiachin","fam","father of",""),
 lk("nehushta","jehoiachin","fam","mother of",""),
 lk("nebuchadnezzar","jehoiachin","rule","took captive to Babylon",""),
 lk("nebuchadnezzar","zedekiah","rule","made king","renamed Mattaniah Zedekiah"),
 lk("zedekiah","jehoiachin","fam","uncle of",""),
 lk("hamutal","zedekiah","fam","mother of",""),
 lk("nebuchadnezzar","nebuzaradan","rule","commander of his imperial guard",""),
 lk("nebuzaradan","seraiah","conf","took prisoner","executed at Riblah"),
 lk("nebuzaradan","zephaniah_p","conf","took prisoner","executed at Riblah"),
 lk("nebuchadnezzar","gedaliah","rule","appointed governor",""),
 lk("ahikam","gedaliah","fam","father of",""),
 lk("ishmael_n","gedaliah","conf","assassinated","at Mizpah"),
 lk("johanan","gedaliah","min","came to him at Mizpah",""),
 lk("awel_marduk","jehoiachin","rule","released from prison","a place at the king's table"),

 // ----- divided monarchy -----
 lk("solomon","rehoboam","fam","father of",""),
 lk("rehoboam","jeroboam1","conf","split the kingdom","the ten tribes revolt"),
 lk("ahab","jezebel","fam","married",""),
 lk("ahab","ahaziah_israel","fam","father of",""),
 lk("ahab","joram_israel","fam","father of",""),
 lk("athaliah","jehoram_judah","fam","married","mother of his son Ahaziah"),
 lk("jehoram_judah","ahaziah_judah","fam","father of",""),
 lk("athaliah","ahaziah_judah","fam","mother of",""),
 lk("athaliah","joash_judah","conf","sought to kill","he was hidden as a baby"),
 lk("jehu","joram_israel","conf","killed",""),
 lk("jehu","jezebel","conf","killed","thrown from a window"),
 lk("jehu","ahaziah_judah","conf","killed",""),
 lk("jehu","ahab","conf","ended his dynasty",""),
 lk("jeroboam2","zechariah_k","fam","father of",""),

 // ----- prophets & kings -----
 lk("elijah","ahab","conf","confronted",""),
 lk("elijah","jezebel","conf","opposed",""),
 lk("elijah","elisha","spec","passed his mantle to",""),
 lk("elisha","jehu","spec","anointed","through one of the company of the prophets"),
 lk("elisha","jehoash_israel","min","prophet to",""),
 lk("isaiah","uzziah","min","prophet in his reign",""),
 lk("isaiah","hezekiah","min","counseled",""),
 lk("micah","hezekiah","min","prophet in his reign",""),
 lk("sennacherib","hezekiah","conf","besieged","Jerusalem delivered"),
 lk("amos","jeroboam2","conf","prophesied against","Israel's injustice"),
 lk("hosea","jeroboam2","conf","prophesied against",""),
 lk("jonah","jeroboam2","min","prophet in his reign",""),
 lk("nahum","jonah","min","Nineveh, generations later","one spared it, one saw it fall"),
 lk("obadiah","esau","conf","condemned Edom","Esau's descendants"),
 lk("joel","amos","min","the Day of the LORD","shared theme"),
 lk("jeremiah","josiah","min","prophet in his reign",""),
 lk("zephaniah","josiah","min","prophet in his reign",""),
 lk("huldah","josiah","min","prophesied to","confirmed the Law scroll"),
 lk("jeremiah","zedekiah","conf","warned","ignored to the end"),
 lk("habakkuk","nebuchadnezzar","conf","questioned God about","Babylon's rise"),
 lk("malachi","elijah","spec","promised his return","Malachi 4:5"),

 // ----- exile & return -----
 lk("nebuchadnezzar","zedekiah","conf","captured and blinded","his sons killed before his eyes at Riblah"),
 lk("nebuchadnezzar","daniel","rule","took into exile","then raised him up"),
 lk("nebuchadnezzar","ezekiel","rule","exiled","to Babylon"),
 lk("ezekiel","daniel","min","named as righteous",""),
 lk("nebuchadnezzar","belshazzar","fam","reckoned his father","Daniel 5"),
 lk("belshazzar","daniel","min","summoned","to read the writing on the wall"),
 lk("cyrus","belshazzar","conf","took his kingdom","Babylon falls to Persia"),
 lk("darius","daniel","conf","cast into the lions' den","then rejoiced at his rescue"),
 lk("cyrus","zerubbabel","rule","freed to return","the decree of 538 BC"),
 lk("zerubbabel","jeshua_hp","min","rebuilt the Temple with",""),
 lk("haggai","zerubbabel","min","encouraged","to rebuild"),
 lk("zechariah_p","zerubbabel","min","encouraged",""),
 lk("zechariah_p","jeshua_hp","min","saw in a vision","cleansed and re-clothed"),
 lk("haggai","jeshua_hp","min","encouraged",""),
 lk("ezra","nehemiah","min","fellow reformer","rebuilt the community"),
 lk("artaxerxes","ezra","rule","authorized","to teach the Law"),
 lk("artaxerxes","nehemiah","rule","sent to rebuild","the walls of Jerusalem"),
 lk("esther","mordecai","fam","cousin of","and raised by him"),
 lk("xerxes","esther","fam","married","made her queen"),
 lk("xerxes","mordecai","rule","honored",""),

 // ----- Persian royal succession -----
 lk("cyrus","darius","spec","succeeded by",""),
 lk("darius","xerxes","fam","father of",""),
 lk("xerxes","artaxerxes","fam","father of",""),

 // ----- connective ties -----
 lk("job","solomon","min","the Wisdom writings","Job, Proverbs, Ecclesiastes"),
 lk("hezekiah","manasseh_k","fam","father of",""),
];

const OT_EVENTS = [
 {y:-2000, label:"God's call of Abraham", note:"traditional"},
 {y:-1446, label:"The Exodus from Egypt", note:"or c. 1250 — disputed"},
 {y:-1406, label:"Conquest of Canaan begins"},
 {y:-1050, label:"Saul anointed first king"},
 {y:-1010, label:"David becomes king"},
 {y:-966,  label:"Solomon builds the Temple"},
 {y:-931,  label:"The kingdom divides"},
 {y:-841,  label:"Jehu's revolt · end of Ahab's house"},
 {y:-722,  label:"Fall of Samaria · Israel exiled", note:"Assyria"},
 {y:-701,  label:"Sennacherib invades Judah", note:"Hezekiah's 14th year"},
 {y:-597,  label:"Jehoiachin taken to Babylon", note:"Nebuchadnezzar's 8th year"},
 {y:-586,  label:"Fall of Jerusalem · Temple destroyed", note:"Babylon"},
 {y:-538,  label:"Cyrus' decree · exiles return", note:"Persia"},
 {y:-516,  label:"Second Temple completed"},
 {y:-445,  label:"Nehemiah rebuilds the walls"},
 {y:-430,  label:"Malachi · the prophets fall silent"},
];

const OT_LIVES = [
 {id:"abraham",       s:-2000, e:-1825, uS:true, uE:true},
 {id:"isaac",         s:-1900, e:-1720, uS:true, uE:true},
 {id:"jacob",         s:-1840, e:-1693, uS:true, uE:true},
 {id:"joseph_ot",     s:-1750, e:-1640, uS:true, uE:true},
 {id:"moses",         s:-1526, e:-1406, uS:true, uE:true},
 {id:"aaron",         s:-1529, e:-1406, uS:true, uE:true},
 {id:"joshua_ot",     s:-1500, e:-1390, uS:true, uE:true},
 {id:"samuel",        s:-1100, e:-1010, uS:true, uE:true},
 {id:"saul",          s:-1050, e:-1010, tenure:true, lab:"reigned"},
 {id:"david",         s:-1010, e:-970,  tenure:true, lab:"reigned"},
 {id:"solomon",       s:-970,  e:-931,  tenure:true, lab:"reigned"},
 {id:"jeroboam1",     s:-931,  e:-910,  tenure:true, lab:"reigned"},
 {id:"elijah",        s:-870,  e:-848,  tenure:true, lab:"active", uS:true, uE:true},
 {id:"ahab",          s:-874,  e:-853,  tenure:true, lab:"reigned"},
 {id:"jehu",          s:-841,  e:-814,  tenure:true, lab:"reigned"},
 {id:"athaliah",      s:-841,  e:-835,  tenure:true, lab:"ruled"},
 {id:"joash_judah",   s:-835,  e:-796,  tenure:true, lab:"reigned"},
 {id:"elisha",        s:-848,  e:-797,  tenure:true, lab:"active", uS:true, uE:true},
 {id:"jeroboam2",     s:-793,  e:-753,  tenure:true, lab:"reigned"},
 {id:"uzziah",        s:-792,  e:-740,  tenure:true, lab:"reigned"},
 {id:"amos",          s:-765,  e:-755,  tenure:true, lab:"active", uS:true, uE:true},
 {id:"hosea",         s:-755,  e:-725,  tenure:true, lab:"active", uS:true, uE:true},
 {id:"isaiah",        s:-740,  e:-686,  tenure:true, lab:"active", uS:true, uE:true},
 {id:"ahaz",          s:-735,  e:-715,  tenure:true, lab:"reigned", uS:true},
 {id:"hoshea_k",      s:-732,  e:-722,  tenure:true, lab:"reigned"},
 {id:"hezekiah",      s:-715,  e:-686,  tenure:true, lab:"reigned"},
 {id:"manasseh_k",    s:-697,  e:-642,  tenure:true, lab:"reigned"},
 {id:"josiah",        s:-640,  e:-609,  tenure:true, lab:"reigned"},
 {id:"jehoiakim",     s:-609,  e:-598,  tenure:true, lab:"reigned"},
 {id:"jeremiah",      s:-627,  e:-586,  tenure:true, lab:"active", uS:true, uE:true},
 {id:"nebuchadnezzar",s:-605,  e:-562,  tenure:true, lab:"reigned"},
 {id:"daniel",        s:-605,  e:-536,  tenure:true, lab:"in exile", uS:true, uE:true},
 {id:"ezekiel",       s:-593,  e:-571,  tenure:true, lab:"active", uS:true, uE:true},
 {id:"zedekiah",      s:-597,  e:-586,  tenure:true, lab:"reigned"},
 {id:"cyrus",         s:-559,  e:-530,  tenure:true, lab:"reigned"},
 {id:"zerubbabel",    s:-538,  e:-515,  tenure:true, lab:"active", uS:true, uE:true},
 {id:"xerxes",        s:-486,  e:-465,  tenure:true, lab:"reigned"},
 {id:"esther",        s:-479,  e:-465,  tenure:true, lab:"queen", uS:true, uE:true},
 {id:"ezra",          s:-458,  e:-440,  tenure:true, lab:"active", uS:true, uE:true},
 {id:"nehemiah",      s:-445,  e:-420,  tenure:true, lab:"active", uS:true, uE:true},
 {id:"malachi",       s:-433,  e:-424,  tenure:true, lab:"active", uS:true, uE:true},
];

const OT_META = {
  kicker:"A relational map",
  title:"People of the Old Testament",
  subtitle:"From Adam and the patriarchs through Moses, the judges, the kings, and the prophets to the exile and return — and who is who among the many kings and prophets who share a name.",
  graphLabel:"Relationship network of Old Testament figures",
  hub:null,
  centroids:{ prim:[.07,.22], line:[.04,.62], patri:[.17,.42], kin:[.12,.84], tribe:[.27,.70], exod:[.35,.34], priest:[.39,.60], lead:[.24,.12], judg:[.50,.70], king:[.59,.34], proph:[.73,.64], exile:[.88,.36], natn:[.52,.92] },
  legend:[["--tie-fam","Family & bloodline"],["--tie-disc","Mentor & successor"],["--tie-min","Alliance & service"],["--tie-conf","Conflict & war"],["--tie-spec","Anointing & calling","dash"],["--tie-rule","Foreign power"],["--muted","Possible / disputed","dot"]],
  clashNames:["Pharaoh","Enoch","Lamech","Nahor","Shelah","Manasseh","Deborah","Eliezer","Noah","Milkah","Eliab","Eliasaph","Elizaphan","Zimri","Abimelek","Jabin","Micah","Jonathan","Gilead","Joram","Joash","Ahaziah","Jeroboam","Zechariah","Joshua","Phinehas","Eleazar","Gad","Abinadab","Ahinoam","Ahimelek","Paltiel","Nathan","Tamar","Mephibosheth","Makir","Shammah","Talmai","Ahijah","Abijah","Naamah","Maakah","Nadab","Jehu","Obadiah","Zedekiah","Jehoshaphat","Ben-Hadad","Ishmael","Jotham","Uriah","Zephaniah","Eliakim","Jehoahaz","Shallum"],
  clashSub:{
    Ishmael:"Abraham's son by Hagar, and the man of royal blood who assassinated Gedaliah after Jerusalem fell.",
    Jotham:"Gideon's son who told the parable of the trees, and a king of Judah, son of Uzziah.",
    Uriah:"David's Hittite soldier, Bathsheba's husband, and the priest who built Ahaz's Damascus altar.",
    Zephaniah:"The prophet of Josiah's day, and the priest executed at Riblah after Jerusalem fell.",
    Eliakim:"Hezekiah's palace administrator, and Josiah's son renamed Jehoiakim by Pharaoh Necho.",
    Jehoahaz:"Two kings two centuries apart: Jehu's son in Israel, and Josiah's son in Judah, reigning three months.",
    Shallum:"A one-month king of Israel, and the husband of the prophet Huldah.",
    Ahijah:"A priest with Saul's army, and the prophet of Shiloh who gave Jeroboam ten tribes.",
    Abijah:"Samuel's corrupt son, Jeroboam's son who died young, Rehoboam's son who reigned in Judah, and Hezekiah's mother.",
    Naamah:"Tubal-Cain's sister in Genesis, and Rehoboam's Ammonite mother.",
    Maakah:"Absalom's mother from Geshur, and the queen mother Asa deposed.",
    Nadab:"Aaron's son who died for offering unauthorized fire, and Jeroboam's son who reigned two years.",
    Jehu:"The prophet who condemned Baasha, and the commander who destroyed Ahab's house.",
    Obadiah:"Ahab's devout steward who hid a hundred prophets, and the prophet who wrote against Edom.",
    Zedekiah:"A false prophet who slapped Micaiah, and the last king of Judah.",
    Jehoshaphat:"David's recorder, and the king of Judah who allied with Ahab.",
    "Ben-Hadad":"Kings of Aram: one bribed by Asa, one who besieged Samaria in Ahab's day, one smothered by Hazael in Elisha's day, and Hazael's son. Scripture does not say whether any of the first three are the same man.",
    Nathan:"The prophet who confronted David, and a son of David born in Jerusalem.",
    Tamar:"Judah's daughter-in-law in Genesis, and David's daughter, Absalom's sister.",
    Mephibosheth:"Jonathan's lame son who ate at David's table, and a son of Saul by Rizpah.",
    Makir:"Joseph's grandson, ancestor of the Gileadites, and the man of Lo Debar who sheltered Mephibosheth.",
    Shammah:"Jesse's son, David's brother, and one of David's Three mighty warriors.",
    Talmai:"A son of Anak at Hebron, and the king of Geshur who was Absalom's grandfather.",
    Phinehas:"Aaron's zealous grandson, and Eli's corrupt son at Shiloh.",
    Eleazar:"Aaron's son and successor, Abinadab's son who guarded the ark, and one of David's Three.",
    Gad:"Jacob's son, ancestor of a tribe, and the prophet who advised David.",
    Abinadab:"The keeper of the ark at Kiriath Jearim, Jesse's second son, and a son of Saul killed at Gilboa.",
    Ahinoam:"Saul's wife, and David's wife from Jezreel.",
    Ahimelek:"The priest at Nob killed on Saul's orders, and a Hittite who was with David.",
    Paltiel:"A tribal leader in Numbers, and the man to whom Saul gave Michal.",
    Pharaoh:"A royal title: unnamed kings of Egypt in the days of Abram, Joseph, the oppression, the Exodus and Solomon — and Pharaoh Necho, who killed Josiah.",
    Eliezer:"Abram's would-be heir from Damascus, and Moses' second son.",
    Noah:"The builder of the ark, and one of the five daughters of Zelophehad.",
    Milkah:"The wife of Abraham's brother Nahor, and one of the five daughters of Zelophehad.",
    Eliab:"The leader of Zebulun at the census, the Reubenite father of Dathan and Abiram, and Jesse's firstborn.",
    Eliasaph:"The leader of the tribe of Gad, and the leader of the Gershonite Levites.",
    Abimelek:"The king of Gerar in Abraham's and Isaac's day, and Gideon's son who made himself king at Shechem.",
    Jabin:"Two kings of Hazor: the one Joshua defeated, and 'Jabin king of Canaan' in Deborah's day.",
    Micah:"An Ephraimite with a household idol in the days of the judges, and the prophet of Moresheth.",
    Jonathan:"Saul's son and David's friend, a Levite descended from Moses, and Abiathar's son who carried messages for David.",
    Gilead:"Makir's son, clan father of the Gileadites, and Jephthah's father.",
    Zimri:"The Simeonite killed at Peor, Achan's grandfather, and the king who reigned seven days.",
    Elizaphan:"Uzziel's son who led the Kohathite Levites, and Parnak's son of Zebulun named to assign the land.",
    Enoch:"Cain's son, after whom the first city was named, and Jared's son, who walked faithfully with God.",
    Lamech:"One in Cain's line who boasted of vengeance; one in Seth's line who was Noah's father.",
    Nahor:"Abraham's grandfather and Abraham's brother share the name.",
    Shelah:"A son of Arphaxad in Shem's line, and Judah's third son, withheld from Tamar.",
    Manasseh:"Joseph's firstborn son, and a king of Judah many centuries later.",
    Deborah:"Rebekah's nurse, buried near Bethel, and the prophetess who judged Israel.",
    Joram:"A son of the king of Hamath in David's day, and a king of Israel and a king of Judah reigning at the same time.",
    Joash:"Gideon's father in the days of the judges, and a king of Judah and a king of Israel a generation apart.",
    Ahaziah:"A king of Israel and a king of Judah, from the intertwined royal houses.",
    Jeroboam:"Two northern kings: the one who split the kingdom, and the one who enlarged it.",
    Zechariah:"A post-exilic prophet and a short-lived king of Israel share the name.",
    Joshua:"Moses' successor who took the land, and the high priest who rebuilt the Temple."
  },
  tlTitle:"A rough chronology, c. 2000 – 430 BC",
  tlCaption:"Dates are scholarly estimates and often disputed — especially the Exodus (c. 1446 BC by the early date, c. 1250 BC by the late date). Primeval figures (Adam, Noah) lie outside datable history and have no bar. Dashed ends mark greater uncertainty.",
  tlDomain:[-2100,-380],
  tlTicks:[-2000,-1500,-1000,-722,-586,-450],
  tlMinWidth:1680
};


/* ================= DATASET REGISTRY ================= */
const DATASETS = {
  nt:{ CAT:NT_CAT, PEOPLE:NT_PEOPLE, LINKS:NT_LINKS, EVENTS:NT_EVENTS, LIVES:NT_LIVES, META:NT_META },
  ot:{ CAT:OT_CAT, PEOPLE:OT_PEOPLE, LINKS:OT_LINKS, EVENTS:OT_EVENTS, LIVES:OT_LIVES, META:OT_META }
};
let TESTAMENT="nt", CAT, PEOPLE, LINKS, TL_EVENTS, TL_LIVES, META;

/* =========================================================================
   SETUP
   ========================================================================= */
let byId={}, rawLinks=[], neighbors={};
const catColorVar = c => CAT[c].color;
const kindVar = k => LG[k];
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const svg = d3.select("#graph");
const stage = document.getElementById("stage");
let W = stage.clientWidth, H = stage.clientHeight;

const gRoot = svg.append("g");
const gLinks = gRoot.append("g").attr("stroke-opacity",.9);
const gNodes = gRoot.append("g");
const gLabels = gRoot.append("g");

const tooltip = d3.select("#tooltip");

// zoom
const zoom = d3.zoom().scaleExtent([0.3,3.2]).on("zoom", e=>gRoot.attr("transform", e.transform));
svg.call(zoom).on("dblclick.zoom", null);

// cluster centres by category (from the active dataset's META)
function centroids(){
  const c={};
  for(const k in META.centroids){ const f=META.centroids[k]; c[k]=[f[0]*W, f[1]*H]; }
  return c;
}
let CENT = {};
const tX = d => d.id===META.hub ? W*0.5 : (CENT[d.cat]?CENT[d.cat][0]:W*0.5);
const tY = d => d.id===META.hub ? H*0.46 : (CENT[d.cat]?CENT[d.cat][1]:H*0.5);

// --- saved-arrangement persistence (works when opened in a real browser;
//     silently no-ops in sandboxes where storage is blocked)
let PIN_KEY = "bible-people-map:nt:pins:v1";
function loadPins(){ try{ const r=localStorage.getItem(PIN_KEY); return r?JSON.parse(r):null; }catch(e){ return null; } }
function savePins(){
  try{
    const d={};
    nodes.forEach(n=>{ if(n.pinned && n.fx!=null && n.fy!=null) d[n.id]=[Math.round(n.fx*10)/10, Math.round(n.fy*10)/10]; });
    localStorage.setItem(PIN_KEY, JSON.stringify(d));
  }catch(e){/* storage unavailable — session only */}
}

// ---- module-scope graph state (rebuilt per dataset in build()) ----
let nodes=[], links=[], sim=null, linkSel, nodeSel, labelSel;

const linkDist = l => {
  if(l.kind==="fam") return 46;
  if(l.kind==="disc") return 66;
  if(l.kind==="spec") return 80;
  return 74;
};

function syncPins(){ if(nodeSel) nodeSel.select(".pin-tack").attr("opacity",d=>d.pinned?1:0); }

function ticked(){
  linkSel.attr("d",d=>{
    const s=d.source, t=d.target;
    const dx=t.x-s.x, dy=t.y-s.y, dr=Math.hypot(dx,dy)*1.9;
    return `M${s.x},${s.y}A${dr},${dr} 0 0,1 ${t.x},${t.y}`;
  });
  nodeSel.attr("transform",d=>`translate(${d.x},${d.y})`);
  labelSel.attr("x",d=>d.x).attr("y",d=>d.y);
}

function build(){
  selectedId=null; clashActive=null; activeCats=new Set(Object.keys(CAT));
  byId = Object.fromEntries(PEOPLE.map(p=>[p.id,p]));
  rawLinks = LINKS.map(l=>({...l}));
  neighbors = {}; PEOPLE.forEach(p=>neighbors[p.id]=new Set());
  rawLinks.forEach(l=>{ neighbors[l.source].add(l.target); neighbors[l.target].add(l.source); });
  CENT = centroids();

  nodes = PEOPLE.map(p=>({...p}));
  links = rawLinks.map(l=>({...l}));

  const saved = loadPins();
  if(saved){ nodes.forEach(n=>{ const p=saved[n.id]; if(Array.isArray(p)){ n.x=n.fx=p[0]; n.y=n.fy=p[1]; n.pinned=true; } }); }

  if(sim) sim.stop();
  sim = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d=>d.id).distance(linkDist).strength(l=>l.kind==="fam"?0.55:0.28))
    .force("charge", d3.forceManyBody().strength(d=>-70 - d.w*10))
    .force("collide", d3.forceCollide().radius(d=>d.w+13).strength(.9))
    .force("x", d3.forceX(tX).strength(d=>d.id===META.hub?.16:.08))
    .force("y", d3.forceY(tY).strength(d=>d.id===META.hub?.16:.08))
    .force("center", d3.forceCenter(W/2, H/2).strength(.02));

  gLinks.selectAll("*").remove();
  linkSel = gLinks.selectAll("path").data(links).join("path")
    .attr("class","link")
    .attr("stroke", d=>kindVar(d.kind))
    .attr("stroke-width", d=> d.kind==="fam"?1.7 : d.kind==="spec"?1.8 : 1.3)
    .attr("stroke-opacity", d=> d.kind==="conf"?.55 : .4)
    .attr("stroke-dasharray", linkDash);

  gNodes.selectAll("*").remove();
  nodeSel = gNodes.selectAll("g.node").data(nodes).join("g")
    .attr("class","node-hit")
    .call(d3.drag()
      .on("start",(e,d)=>{ if(!prefersReduced && !e.active) sim.alphaTarget(.25).restart(); d.fx=d.x; d.fy=d.y; })
      .on("drag",(e,d)=>{ d.fx=e.x; d.fy=e.y; if(prefersReduced) ticked(); })
      .on("end",(e,d)=>{ if(!prefersReduced && !e.active) sim.alphaTarget(0); d.pinned=true; syncPins(); savePins(); }))
    .on("mouseenter",(e,d)=>{ if(!clashActive) focusNode(d.id,true); showTip(e,d); })
    .on("mousemove", moveTip)
    .on("mouseleave",()=>{ if(!clashActive && !selectedId) focusNode(null); hideTip(); })
    .on("dblclick",(e,d)=>{ e.stopPropagation(); if(d.pinned){ d.pinned=false; d.fx=null; d.fy=null; syncPins(); savePins();
        if(prefersReduced){ for(let i=0;i<120;i++) sim.tick(); ticked(); }
        else { sim.alphaTarget(.2).restart(); setTimeout(()=>sim.alphaTarget(0),650); } } })
    .on("click",(e,d)=>{ e.stopPropagation(); selectPerson(d.id); });

  nodeSel.filter(d=>d.halo).append("circle").attr("class","halo").attr("r",d=>d.w+7).attr("stroke-width",1.4);
  nodeSel.filter(d=>d.halo===2).append("circle").attr("class","halo").attr("r",d=>d.w+12).attr("stroke-width",1).attr("opacity",.32);
  nodeSel.append("circle").attr("class","node-dot").attr("r",d=>d.w)
    .attr("fill",d=> d.id===META.hub ? "var(--gold)" : catColorVar(d.cat))
    .attr("fill-opacity",d=> d.id===META.hub?1:.9)
    .attr("stroke", d=> d.id===META.hub ? "#f4d989" : "rgba(15,19,28,.85)")
    .attr("stroke-width", d=> d.id===META.hub?2:1.5);
  nodeSel.append("circle").attr("class","pin-tack").attr("r",3.1)
    .attr("cx",d=>d.w*0.72).attr("cy",d=>-d.w*0.72)
    .attr("fill","var(--gold)").attr("stroke","var(--ink)").attr("stroke-width",1)
    .attr("opacity",0).style("pointer-events","none");

  gLabels.selectAll("*").remove();
  labelSel = gLabels.selectAll("text").data(nodes).join("text")
    .attr("class","node-label").attr("dy",d=>d.w+13)
    .style("font-size",d=> (d.w>=13?12.5: d.w>=9?11: 10)+"px")
    .style("font-weight",d=> d.w>=12?600:500)
    .style("opacity",d=> d.w>=9?1:.62)
    .text(d=>d.short);

  syncPins();
  sim.on("tick", ticked);

  buildFilters();
  buildClashChips();

  sim.alpha(1).restart();
  if(prefersReduced){ for(let i=0;i<220;i++) sim.tick(); sim.stop(); ticked(); fitView(0); }
  else setTimeout(()=>fitView(600), 900);
}

function fitView(dur){
  const pad=70;
  const xs=nodes.map(n=>n.x), ys=nodes.map(n=>n.y);
  const minX=Math.min(...xs), maxX=Math.max(...xs), minY=Math.min(...ys), maxY=Math.max(...ys);
  const bw=maxX-minX, bh=maxY-minY;
  const k=Math.min(2.6, 0.92*Math.min(W/(bw+pad*2), H/(bh+pad*2)));
  const tx=W/2-k*(minX+bw/2), ty=H/2-k*(minY+bh/2);
  svg.transition().duration(dur).call(zoom.transform, d3.zoomIdentity.translate(tx,ty).scale(k));
}

/* ---------- focus / highlight ---------- */
let selectedId=null, activeCats=new Set(), clashActive=null;

function inFilter(id){ return activeCats.has(byId[id].cat); }

function focusNode(id, hover){
  // returns visual emphasis on a node's neighborhood
  const active = id!==null;
  nodeSel.select(".node-dot")
    .attr("opacity",d=>{
      if(!inFilter(d.id)) return .06;
      if(!active) return 1;
      return (d.id===id || neighbors[id].has(d.id)) ? 1 : .16;
    });
  nodeSel.selectAll(".halo").attr("opacity",d=>{
    if(active && !(d.id===id||neighbors[id].has(d.id))) return .06;
    return d.halo===2?.32:.5;
  });
  labelSel.style("opacity",d=>{
    if(!inFilter(d.id)) return .05;
    if(!active) return d.w>=9?1:.62;
    return (d.id===id || neighbors[id].has(d.id)) ? 1 : .1;
  });
  linkSel
    .attr("stroke-opacity",d=>{
      if(!inFilter(d.source.id)||!inFilter(d.target.id)) return .03;
      if(!active) return d.kind==="conf"?.55:.4;
      return (d.source.id===id||d.target.id===id) ? .9 : .04;
    })
    .attr("stroke-width",d=>{
      const base = d.kind==="fam"?1.7 : d.kind==="spec"?1.8 : 1.3;
      if(active && (d.source.id===id||d.target.id===id)) return base+1.2;
      return base;
    });
}

function applyFilter(){
  focusNode(selectedId, false);
}

/* ---------- tooltip ---------- */
function showTip(e,d){
  tooltip.html(
    `<div class="tt-name">${d.name}</div>`+
    `<div class="tt-role">${roleLine(d)}</div>`+
    `<div class="tt-dates">${d.dates||""}</div>`
  );
  tooltip.style("opacity",1); moveTip(e);
}
function moveTip(e){
  const r=stage.getBoundingClientRect();
  tooltip.style("left",(e.clientX-r.left)+"px").style("top",(e.clientY-r.top-14)+"px");
}
function hideTip(){ tooltip.style("opacity",0); }
function roleLine(d){
  const map={family:"Family & kin",twelve:"One of the Twelve",follow:"Follower of Jesus",church:"Early church",rulers:"Ruler / authority",rome:"Roman Empire",
    prim:"Creation & Flood",line:"Genealogies",patri:"Patriarchs & Matriarchs",tribe:"House of Jacob",kin:"Wider family & kin",exod:"Exodus & Wilderness",priest:"Priest / Levite",lead:"Tribal leader",judg:"Conquest & Judges",king:"King of Israel/Judah",proph:"Prophet",exile:"Exile & Return",natn:"Foreign nation"};
  return d.aliases ? d.aliases : (map[d.cat]||"");
}

/* ---------- detail panel ---------- */
const panel=document.getElementById("panel");
const panelScroll=document.getElementById("panelScroll");
document.getElementById("panelClose").onclick=()=>{ closePanel(); };
svg.on("click",()=>{ if(selectedId){ closePanel(); } });
svg.on("dblclick",()=>{
  let any=false;
  nodes.forEach(n=>{ if(n.pinned){ n.pinned=false; n.fx=null; n.fy=null; any=true; } });
  if(any){ syncPins(); savePins();
    if(prefersReduced){ for(let i=0;i<160;i++) sim.tick(); ticked(); }
    else { sim.alphaTarget(.25).restart(); setTimeout(()=>sim.alphaTarget(0),700); } }
});

function relationsFor(id){
  const out=[];
  rawLinks.forEach(l=>{
    if(l.source===id) out.push({other:l.target, type:l.type, note:l.note});
    else if(l.target===id) out.push({other:l.source, type:invert(l.type), note:l.note});
  });
  // sort: family first, then discipleship, then rest
  return out;
}
function invert(t){
  const m={
    "father of":"child (father)","mother of":"child (mother)","legal father of":"legal child of",
    "brother of":"sibling of","sister of":"sibling of","married":"married","kin of":"kin of",
    "kinswoman of":"kin of","grandfather of":"grandchild of","father-in-law of":"son/daughter-in-law of",
    "called":"called by","betrayed by":"betrayed","later chosen":"chosen by","replaced":"replaced by",
    "mentor of":"mentored by","instructed":"instructed by","brought in":"brought in by",
    "first teacher of":"first followed","partner of":"partner of","cousin of":"cousin of",
    "co-worker of":"co-worker of","converted":"converted by","convert":"convert (of)",
    "fellow leader of":"fellow leader of","fellow deacon of":"fellow deacon of",
    "master of":"servant of","approved his death":"death approved by","rebuked by":"rebuked",
    "baptized by":"baptized","sheltered by":"sheltered","follower":"followed by","friend of":"friend of",
    "raised from death":"raised by","cross carried by":"carried the cross of","possibly brother of":"possibly brother of",
    "sought to kill":"sought by","executed":"executed by","questioned":"questioned by","sentenced":"sentenced by",
    "condemned":"condemned by","interrogated":"interrogated by","called (in a vision)":"appeared to"
  };
  return m[t]||t;
}

/* ---------- bible.com (YouVersion) linking ---------- */
const BOOK_CODES = {
  "genesis":"GEN","exodus":"EXO","leviticus":"LEV","numbers":"NUM","deuteronomy":"DEU",
  "joshua":"JOS","judges":"JDG","ruth":"RUT","1 samuel":"1SA","2 samuel":"2SA",
  "1 kings":"1KI","2 kings":"2KI","1 chronicles":"1CH","2 chronicles":"2CH",
  "ezra":"EZR","nehemiah":"NEH","esther":"EST","job":"JOB","psalm":"PSA","psalms":"PSA",
  "proverbs":"PRO","ecclesiastes":"ECC","song of solomon":"SNG","song of songs":"SNG",
  "isaiah":"ISA","jeremiah":"JER","lamentations":"LAM","ezekiel":"EZK","daniel":"DAN",
  "hosea":"HOS","joel":"JOL","amos":"AMO","obadiah":"OBA","jonah":"JON","micah":"MIC",
  "nahum":"NAM","habakkuk":"HAB","zephaniah":"ZEP","haggai":"HAG","zechariah":"ZEC","malachi":"MAL",
  "matthew":"MAT","mark":"MRK","luke":"LUK","john":"JHN","acts":"ACT","romans":"ROM",
  "1 corinthians":"1CO","2 corinthians":"2CO","galatians":"GAL","ephesians":"EPH",
  "philippians":"PHP","colossians":"COL","1 thessalonians":"1TH","2 thessalonians":"2TH",
  "1 timothy":"1TI","2 timothy":"2TI","titus":"TIT","philemon":"PHM","hebrews":"HEB",
  "james":"JAS","1 peter":"1PE","2 peter":"2PE","1 john":"1JN","2 john":"2JN","3 john":"3JN",
  "jude":"JUD","revelation":"REV"
};
const ONE_CHAPTER_BOOKS = new Set(["obadiah","philemon","2 john","3 john","jude"]);
function refBookName(ref){
  const m = ref.match(/^((?:[1-3]\s)?[A-Za-z][A-Za-z ]*?)\s+(\d+)(?::(\d+))?/);
  return m ? m[1].trim().toLowerCase() : null;
}
function bibleUrl(ref){
  const book = refBookName(ref);
  const code = book && BOOK_CODES[book];
  if(!code) return null;
  if(ONE_CHAPTER_BOOKS.has(book)) return `https://www.bible.com/bible/111/${code}.1.NIV`;
  const m = ref.match(/^((?:[1-3]\s)?[A-Za-z][A-Za-z ]*?)\s+(\d+)(?::(\d+))?/);
  const chapter = m[2], verse = m[3];
  return `https://www.bible.com/bible/111/${code}.${chapter}${verse?"."+verse:""}.NIV`;
}

/* ---------- BibleProject book-overview posters ----------
   Hotlinked directly from BibleProject's own CDN (never downloaded/resized/
   reformatted -- see CLAUDE.md "Source of truth" for the licensing basis).
   One row per poster IMAGE (not per book), so combined-book posters (e.g.
   1-2 Samuel) are a single entry. Verified against the real catalog at
   https://bibleproject.com/downloads/ on 2026-07-10; there is currently no
   poster for Hebrews. */
const POSTER_CDN = "https://d1bsmz3sdihplr.cloudfront.net/media/Posters%20Download/";
const POSTER_OT_OVERVIEW = POSTER_CDN + "TaNaKOTovw_FNL.jpg";
const POSTER_NT_OVERVIEW = POSTER_CDN + "NT%20Overview.jpg";
const POSTERS = [
  { books:["genesis"], testament:"ot", url:POSTER_CDN+"01-02%20Genesis_FNL.jpg" },
  { books:["exodus"], testament:"ot", url:POSTER_CDN+"03-04_Exodus_art_FNL.jpg" },
  { books:["leviticus"], testament:"ot", url:POSTER_CDN+"05-Leviticus-FNL-1.jpg" },
  { books:["numbers"], testament:"ot", url:POSTER_CDN+"06-Numbers-FNL-1.jpg" },
  { books:["deuteronomy"], testament:"ot", url:POSTER_CDN+"07-Deuteronomy-FNL.jpg" },
  { books:["joshua"], testament:"ot", url:POSTER_CDN+"08-Joshua-FNL.jpg" },
  { books:["judges"], testament:"ot", url:POSTER_CDN+"09-Judges_FNL.jpg" },
  { books:["ruth"], testament:"ot", url:POSTER_CDN+"10%20Ruth%20FNL.jpg" },
  { books:["1 samuel","2 samuel"], testament:"ot", url:POSTER_CDN+"11-12-Samuel-FNL.jpg" },
  { books:["1 kings","2 kings"], testament:"ot", url:POSTER_CDN+"13-14-Kings-FNL.jpg" },
  { books:["ezra","nehemiah"], testament:"ot", url:POSTER_CDN+"15-Ezra-Nehemiah-FNL.jpg" },
  { books:["esther"], testament:"ot", url:POSTER_CDN+"16-Esther-FNL.jpg" },
  { books:["job"], testament:"ot", url:POSTER_CDN+"17-Job-FNL.jpg" },
  { books:["psalm","psalms"], testament:"ot", url:POSTER_CDN+"18-Psalms-FNL.jpg" },
  { books:["proverbs"], testament:"ot", url:POSTER_CDN+"19-Proverbs-FNL.jpg" },
  { books:["ecclesiastes"], testament:"ot", url:POSTER_CDN+"20_Ecclesiastes.jpg" },
  { books:["song of solomon","song of songs"], testament:"ot", url:POSTER_CDN+"21-Song-of-Songs-FNL.jpg" },
  { books:["isaiah"], testament:"ot", url:POSTER_CDN+"22-23-Isaiah-FNL.jpg" },
  { books:["jeremiah"], testament:"ot", url:POSTER_CDN+"24_Jeremiah_hq.jpg" },
  { books:["lamentations"], testament:"ot", url:POSTER_CDN+"25-Lamentations-FNL.jpg" },
  { books:["ezekiel"], testament:"ot", url:POSTER_CDN+"26-27-Ezekiel-FNL.jpg" },
  { books:["daniel"], testament:"ot", url:POSTER_CDN+"28-Daniel-FNL.jpg" },
  { books:["hosea"], testament:"ot", url:POSTER_CDN+"29-Hosea_FNL.jpg" },
  { books:["joel"], testament:"ot", url:POSTER_CDN+"30-Joel-FNL.jpg" },
  { books:["amos"], testament:"ot", url:POSTER_CDN+"31-Amos-FNL.jpg" },
  { books:["obadiah"], testament:"ot", url:POSTER_CDN+"32-Obadiah-FNL.jpg" },
  { books:["jonah"], testament:"ot", url:POSTER_CDN+"33-Jonah-FNL.jpg" },
  { books:["micah"], testament:"ot", url:POSTER_CDN+"34-Micah-FNL.jpg" },
  { books:["nahum"], testament:"ot", url:POSTER_CDN+"35-Nahum-FNL.jpg" },
  { books:["habakkuk"], testament:"ot", url:POSTER_CDN+"36-Habakkuk-FNL.jpg" },
  { books:["zephaniah"], testament:"ot", url:POSTER_CDN+"37-Zephaniah-FNL.jpg" },
  { books:["haggai"], testament:"ot", url:POSTER_CDN+"38-Haggai-FNL.jpg" },
  { books:["zechariah"], testament:"ot", url:POSTER_CDN+"39-Zechariah-FNL.jpg" },
  { books:["malachi"], testament:"ot", url:POSTER_CDN+"40-Malachi-FNL.jpg" },
  // filename says "41-Chronicles" (single number) but the poster itself
  // covers both 1st and 2nd Chronicles side by side -- verified visually.
  { books:["1 chronicles","2 chronicles"], testament:"ot", url:POSTER_CDN+"41-Chronicles-FNL.jpg" },
  { books:["matthew"], testament:"nt", url:POSTER_CDN+"42-Matthew-FNL-1.jpg" },
  { books:["mark"], testament:"nt", url:POSTER_CDN+"44-Mark-FNL.jpg" },
  // "45-46" reflects a two-part video for the single Gospel of John, not two books.
  { books:["john"], testament:"nt", url:POSTER_CDN+"45-46-john-1.jpg" },
  { books:["luke"], testament:"nt", url:POSTER_CDN+"47-48-Luke-FNL.jpg" },
  { books:["acts"], testament:"nt", url:POSTER_CDN+"49-Acts-FNL.jpg" },
  { books:["romans"], testament:"nt", url:POSTER_CDN+"50_Romans.jpg" },
  // Despite the "52-53" filename, this poster is 1 Corinthians only -- verified
  // visually; 2 Corinthians is the separate file below, not a duplicate.
  { books:["1 corinthians"], testament:"nt", url:POSTER_CDN+"52-53-Corinthians.jpg" },
  { books:["2 corinthians"], testament:"nt", url:POSTER_CDN+"53-2-Corinthians-FNL2.jpg" },
  { books:["galatians"], testament:"nt", url:POSTER_CDN+"54-Galatians-FNL.jpg" },
  { books:["ephesians"], testament:"nt", url:POSTER_CDN+"55-Ephesians-FNL.jpg" },
  { books:["philippians"], testament:"nt", url:POSTER_CDN+"56-Philippians-FNL.jpg" },
  { books:["colossians"], testament:"nt", url:POSTER_CDN+"57%20Colossians%20PRF.jpg" },
  { books:["philemon"], testament:"nt", url:POSTER_CDN+"58-Philemon-FNL-1.jpg" },
  { books:["1 thessalonians"], testament:"nt", url:POSTER_CDN+"59a-1-Thessalonians-FNL.jpg" },
  { books:["2 thessalonians"], testament:"nt", url:POSTER_CDN+"59b-2-Thessalonians-FNL.jpg" },
  { books:["1 timothy"], testament:"nt", url:POSTER_CDN+"60-1-Timothy-FNL.jpg" },
  { books:["2 timothy"], testament:"nt", url:POSTER_CDN+"61-2-Timothy-FNL.jpg" },
  { books:["titus"], testament:"nt", url:POSTER_CDN+"62%20Titus%20FNL.jpg" },
  // no poster currently exists for Hebrews -- intentional gap, not an omission.
  { books:["james"], testament:"nt", url:POSTER_CDN+"64-James_FNL.jpg" },
  { books:["1 peter"], testament:"nt", url:POSTER_CDN+"65-1-Peter-FNL.jpg" },
  { books:["2 peter"], testament:"nt", url:POSTER_CDN+"66-2-Peter-FNL.jpg" },
  { books:["1 john","2 john","3 john"], testament:"nt", url:POSTER_CDN+"67-123-John.jpg" },
  { books:["jude"], testament:"nt", url:POSTER_CDN+"68-Jude-FNL.jpg" },
  // "69-70" is Revelation split across a two-part video, not a Jude+Revelation
  // combo -- verified visually.
  { books:["revelation"], testament:"nt", url:POSTER_CDN+"69-70-Revelation-FNL.jpg" }
];
const POSTER_BY_BOOK = {};
POSTERS.forEach(row=>row.books.forEach(b=>POSTER_BY_BOOK[b]=row));

function selectPerson(id){
  selectedId=id;
  focusNode(id,false);
  const d=byId[id];
  const rels=relationsFor(id);
  const relHtml = rels.map(r=>{
    const o=byId[r.other];
    return `<div class="rel" data-goto="${o.id}">`+
      `<span class="rel-type">${r.type}</span>`+
      `<span><span class="rel-name">${o.short}</span>`+
      (r.note?` <span class="rel-note">— ${r.note}</span>`:"")+`</span></div>`;
  }).join("");
  const posterRows = d.refs ? dedupePosters(d.refs.map(refBookName).map(b=>POSTER_BY_BOOK[b]).filter(Boolean)) : [];

  panelScroll.innerHTML =
    `<div class="p-cat" style="--c:${catColorVar(d.cat)}"><span class="dot"></span>${CAT[d.cat].label}</div>`+
    `<div class="p-name">${d.name}</div>`+
    (d.aliases?`<div class="p-alias">${d.aliases}</div>`:"")+
    (d.dates?`<div class="p-dates">${d.dates}</div>`:"")+
    `<p class="p-desc">${d.desc}</p>`+
    (d.notconfused?`<div class="p-warn"><b>Not to be confused with</b> ${d.notconfused}</div>`:"")+
    (rels.length?`<div class="p-section-h">Connections</div>${relHtml}`:"")+
    (d.refs?`<div class="p-section-h">Where to read</div><div class="p-refs">${d.refs.map(r=>{
      const url=bibleUrl(r);
      return url?`<a href="${url}" target="_blank" rel="noopener noreferrer">${r}</a>`:`<span>${r}</span>`;
    }).join("")}</div>`:"")+
    (posterRows.length?`<div class="p-posters">${posterRows.map(row=>
      `<button class="p-poster-btn" type="button" data-poster="${row.url}">${posterLabel(row)}</button>`
    ).join("")}</div>`:"");

  panelScroll.querySelectorAll(".rel").forEach(el=>{
    el.onclick=()=>{ selectPerson(el.dataset.goto); centerOn(el.dataset.goto); };
  });
  panelScroll.querySelectorAll(".p-poster-btn").forEach(el=>{
    el.onclick=()=>openPosterView(el.dataset.poster, el.textContent);
  });
  panel.classList.add("open");
  hideTip();
}
function dedupePosters(rows){
  const seen=new Set(), out=[];
  rows.forEach(r=>{ if(!seen.has(r.url)){ seen.add(r.url); out.push(r); } });
  return out;
}
function posterLabel(row){
  const cap = s => s.replace(/\b\w/g,c=>c.toUpperCase());
  return "Poster: " + row.books.map(cap).join(" & ");
}
function closePanel(){ selectedId=null; panel.classList.remove("open"); focusNode(null,false); }
function centerOn(id){
  const n=byId[id]; if(n.x==null) return;
  const t=d3.zoomTransform(svg.node());
  const k=Math.max(t.k,1.1);
  svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity.translate(W/2-k*n.x, (H*0.46)-k*n.y).scale(k));
}

/* ---------- category filter chips ---------- */
const catWrap=document.getElementById("catFilters");
function buildFilters(){
  catWrap.innerHTML='<span class="ctl-label">Groups</span>';
  Object.entries(CAT).forEach(([key,val])=>{
    const b=document.createElement("button");
    b.className="chip"; b.setAttribute("aria-pressed","true");
    b.style.setProperty("--c",val.color);
    b.innerHTML=`<span class="dot"></span>${val.label}`;
    b.onclick=()=>{
      const on=b.getAttribute("aria-pressed")==="true";
      b.setAttribute("aria-pressed", (!on).toString());
      if(on) activeCats.delete(key); else activeCats.add(key);
      applyFilter();
    };
    catWrap.appendChild(b);
  });
}

/* ---------- name-clash lens ---------- */
const clashWrap=document.getElementById("clashFilters");
function buildClashChips(){
  clashWrap.innerHTML='<span class="ctl-label">Name lens</span>';
  (META.clashNames||[]).forEach(nm=>{
    const b=document.createElement("button");
    b.className="chip clash"; b.setAttribute("aria-pressed","false");
    b.textContent=nm;
    b.onclick=()=>toggleClash(nm,b);
    clashWrap.appendChild(b);
  });
}
const clashPanel=document.getElementById("clashPanel");
document.getElementById("clashClose").onclick=()=>clearClash();

function toggleClash(nm,btn){
  const already = clashActive===nm;
  document.querySelectorAll(".chip.clash").forEach(c=>c.setAttribute("aria-pressed","false"));
  if(already){ clearClash(); return; }
  clashActive=nm; btn.setAttribute("aria-pressed","true");
  const members=PEOPLE.filter(p=>p.clash===nm);
  const ids=new Set(members.map(m=>m.id));
  // dim all but members
  nodeSel.select(".node-dot").attr("opacity",d=> ids.has(d.id)?1:.08);
  nodeSel.selectAll(".halo").attr("opacity",d=> ids.has(d.id)? .6 : .04);
  labelSel.style("opacity",d=> ids.has(d.id)?1:.06);
  linkSel.attr("stroke-opacity",.03);
  // pulse rings
  nodeSel.selectAll(".clash-ring").remove();
  if(!prefersReduced){
    nodeSel.filter(d=>ids.has(d.id)).append("circle")
      .attr("class","clash-ring").attr("r",d=>d.w+4).attr("fill","none")
      .attr("stroke","var(--gold)").attr("stroke-width",2).attr("opacity",.9)
      .append("animate").attr("attributeName","r").attr("values",d=>`${d.w+4};${d.w+13}`)
        .attr("dur","1.4s").attr("repeatCount","indefinite");
  }
  // comparison cards
  document.getElementById("clashTitle").textContent=`Everyone called “${nm}”`;
  document.getElementById("clashSub").textContent=(META.clashSub&&META.clashSub[nm])||"";
  const grid=document.getElementById("clashGrid");
  grid.innerHTML=members.map(m=>
    `<div class="clash-card" style="--c:${catColorVar(m.cat)}" data-goto="${m.id}">`+
    `<div class="cc-name">${m.name}</div>`+
    `<div class="cc-dates">${m.dates||""}</div>`+
    `<div class="cc-tag">${m.clashtag||m.desc}</div></div>`
  ).join("");
  grid.querySelectorAll(".clash-card").forEach(c=>{
    c.onclick=()=>{ selectPerson(c.dataset.goto); centerOn(c.dataset.goto); };
  });
  clashPanel.classList.add("show");
  document.getElementById("legend").style.display="none";
}
function clearClash(){
  clashActive=null;
  document.querySelectorAll(".chip.clash").forEach(c=>c.setAttribute("aria-pressed","false"));
  nodeSel.selectAll(".clash-ring").remove();
  clashPanel.classList.remove("show");
  if(window.matchMedia("(min-width:761px)").matches) document.getElementById("legend").style.display="";
  focusNode(selectedId,false);
}

/* ---------- poster gallery / viewer ----------
   Images are only ever requested at the moment a user opens one -- gallery
   tiles and per-person buttons are text-only, and openPosterView() is the
   single place in the codebase that ever sets #posterImg's src. */
const posterModal=document.getElementById("posterModal");
const posterGallery=document.getElementById("posterGallery");
const posterView=document.getElementById("posterView");
const posterImg=document.getElementById("posterImg");
const posterFullscreen=document.getElementById("posterFullscreen");
document.getElementById("postersBtn").onclick=()=>openPosterGallery();
document.getElementById("posterModalClose").onclick=()=>closePosterModal();
document.getElementById("posterBack").onclick=()=>{ posterView.hidden=true; posterGallery.hidden=false; posterImg.removeAttribute("src"); };
posterModal.addEventListener("click",e=>{ if(e.target===posterModal) closePosterModal(); });

function openPosterGallery(){
  const overview = TESTAMENT==="ot" ? POSTER_OT_OVERVIEW : POSTER_NT_OVERVIEW;
  const overviewLabel = TESTAMENT==="ot" ? "Old Testament Overview" : "New Testament Overview";
  const rows = POSTERS.filter(p=>p.testament===TESTAMENT);
  document.getElementById("posterGalleryTitle").textContent =
    (TESTAMENT==="ot"?"Old Testament":"New Testament")+" book posters";
  const grid=document.getElementById("posterGrid");
  grid.innerHTML =
    `<button class="poster-tile" type="button" data-poster="${overview}">${overviewLabel}</button>`+
    rows.map(row=>`<button class="poster-tile" type="button" data-poster="${row.url}">${posterLabel(row)}</button>`).join("");
  grid.querySelectorAll(".poster-tile").forEach(el=>{
    el.onclick=()=>openPosterView(el.dataset.poster, el.textContent);
  });
  posterView.hidden=true;
  posterGallery.hidden=false;
  posterModal.classList.add("show");
}
function openPosterView(url,label){
  posterImg.src=url;
  posterImg.alt=label||"BibleProject poster";
  posterFullscreen.href=url;
  posterGallery.hidden=true;
  posterView.hidden=false;
  posterModal.classList.add("show");
}
function closePosterModal(){
  posterModal.classList.remove("show");
  posterImg.removeAttribute("src");
}

/* ---------- search ---------- */
const search=document.getElementById("searchBox");
search.addEventListener("input",()=>{
  const q=search.value.trim().toLowerCase();
  if(!q){ focusNode(selectedId,false); return; }
  const hits=nodes.filter(n=>(n.name+" "+(n.aliases||"")+" "+n.short).toLowerCase().includes(q));
  const ids=new Set(hits.map(h=>h.id));
  nodeSel.select(".node-dot").attr("opacity",d=> ids.has(d.id)?1:.08);
  labelSel.style("opacity",d=> ids.has(d.id)?1:.06);
  nodeSel.selectAll(".halo").attr("opacity",d=> ids.has(d.id)?.6:.04);
  linkSel.attr("stroke-opacity",.03);
});
search.addEventListener("keydown",e=>{
  if(e.key==="Enter"){
    const q=search.value.trim().toLowerCase();
    const hit=nodes.find(n=>(n.name+" "+n.short).toLowerCase().includes(q));
    if(hit){ selectPerson(hit.id); centerOn(hit.id); }
  }
});

/* =========================================================================
   TIMELINE VIEW
   ========================================================================= */
const tlWrap=document.getElementById("timeline");
const tlSvg=d3.select("#tl");
let tlBuilt=false;

function buildTimeline(){
  const rowH=26, top=118, left=176, right=40;
  const width=Math.max(stage.clientWidth, META.tlMinWidth||1180);
  const inner=width-left-right;
  const x=d3.scaleLinear().domain(META.tlDomain||[-12,108]).range([left,left+inner]);
  const lives=TL_LIVES.map(l=>({...l, p:byId[l.id]}));
  const height=top + lives.length*rowH + 120;
  tlSvg.attr("width",width).attr("height",height).selectAll("*").remove();

  // title / caveat
  tlSvg.append("text").attr("x",left).attr("y",30)
    .attr("class","tl-band-label").style("font-family","var(--display)").style("font-size","18px").style("fill","var(--vellum)")
    .text(META.tlTitle||"");
  tlSvg.append("text").attr("x",left).attr("y",50).attr("class","tl-note")
    .text(META.tlCaption||"");

  // axis ticks
  const ticks=META.tlTicks||[];
  const axisY=top-14;
  tlSvg.append("line").attr("x1",left).attr("x2",left+inner).attr("y1",axisY).attr("y2",axisY).attr("stroke","var(--edge)");
  ticks.forEach(t=>{
    const xx=x(t);
    tlSvg.append("line").attr("class","tl-grid").attr("x1",xx).attr("x2",xx).attr("y1",top-8).attr("y2",top+lives.length*rowH+6);
    tlSvg.append("text").attr("x",xx).attr("y",axisY-6).attr("text-anchor","middle")
      .style("font-family","var(--mono)").style("font-size","10.5px").style("fill","var(--muted-2)")
      .text(fmtYear(t));
  });

  // events (vertical gold lines with labels alternating)
  TL_EVENTS.forEach((ev,i)=>{
    const xx=x(ev.y);
    const g=tlSvg.append("g").attr("class","tl-event");
    g.append("line").attr("x1",xx).attr("x2",xx).attr("y1",top-8).attr("y2",top+lives.length*rowH+10)
      .attr("stroke","var(--gold)").attr("stroke-opacity",.45).attr("stroke-dasharray","2 3");
    const ly=top+lives.length*rowH+22 + (i%2)*30;
    g.append("circle").attr("cx",xx).attr("cy",top+lives.length*rowH+10).attr("r",3).attr("fill","var(--gold)");
    g.append("text").attr("x",xx).attr("y",ly).attr("text-anchor","middle")
      .style("font-family","var(--mono)").style("font-size","10px").style("fill","var(--gold)")
      .text(fmtYear(ev.y));
    const lbl=g.append("text").attr("x",xx).attr("y",ly+13).attr("text-anchor","middle")
      .style("font-family","var(--serif)").style("font-size","11.5px").style("fill","var(--vellum)");
    wrapText(lbl, ev.label, 118);
    if(ev.note){
      const lines=lbl.selectAll("tspan").size()||1;
      g.append("text").attr("x",xx).attr("y",ly+13+lines*13+2).attr("text-anchor","middle")
        .style("font-family","var(--serif)").style("font-style","italic").style("font-size","10px").style("fill","var(--muted-2)")
        .text(ev.note);
    }
  });

  // life bars
  lives.forEach((l,i)=>{
    const y=top + i*rowH;
    const c=catColorVar(l.p.cat);
    // label
    tlSvg.append("text").attr("x",left-12).attr("y",y+7).attr("text-anchor","end")
      .attr("class","tl-band-label").style("fill","var(--vellum)").style("font-size","12.5px")
      .text(l.p.short);
    const x1=x(l.s), x2=x(l.e);
    const bar=tlSvg.append("rect")
      .attr("x",x1).attr("y",y-4).attr("width",Math.max(3,x2-x1)).attr("height",13).attr("rx",4)
      .attr("fill",c).attr("fill-opacity",l.tenure?.35:.55).attr("stroke",c).attr("stroke-opacity",.9)
      .style("cursor","pointer");
    if(l.uS||l.uE) bar.attr("stroke-dasharray","3 3");
    bar.on("click",()=>{ setView("network"); selectPerson(l.id); centerOn(l.id); })
       .append("title").text(l.tenure? `${l.p.short} — ${l.lab||"in office"} ${fmtYear(l.s)}–${fmtYear(l.e)}` : `${l.p.short} — ${fmtYear(l.s)} to ${fmtYear(l.e)} (est.)`);
    if(l.tenure){
      tlSvg.append("text").attr("x",x2+6).attr("y",y+6).style("font-family","var(--mono)").style("font-size","9px").style("fill","var(--muted-2)").text(l.lab||"in office");
    }
  });

  tlBuilt=true;
}
function fmtYear(y){ return y<0 ? (-y)+" BC" : (y===0?"AD 1":"AD "+y); }
function wrapText(sel,text,width){
  const words=text.split(/\s+/); let line=[],lineNo=0;
  const el=sel; el.text(null);
  const x=+el.attr("x"), y=+el.attr("y");
  let tspan=el.append("tspan").attr("x",x).attr("y",y);
  words.forEach(w=>{
    line.push(w); tspan.text(line.join(" "));
    if(tspan.node().getComputedTextLength()>width && line.length>1){
      line.pop(); tspan.text(line.join(" ")); line=[w];
      tspan=el.append("tspan").attr("x",x).attr("y",y+(++lineNo)*13).text(w);
    }
  });
}

/* ---------- view switching ---------- */
const btnNet=document.getElementById("viewNetwork"), btnTl=document.getElementById("viewTimeline");
function setView(v){
  const net=v==="network";
  btnNet.setAttribute("aria-pressed",net); btnTl.setAttribute("aria-pressed",!net);
  document.getElementById("graph").style.display=net?"block":"none";
  document.getElementById("legend").style.display=(net&&!clashActive&&window.matchMedia("(min-width:761px)").matches)?"":"none";
  document.getElementById("hint").style.display=net?"":"none";
  tlWrap.classList.toggle("show",!net);
  if(!net){ if(!tlBuilt) buildTimeline(); closePanel(); clearClash(); }
}
btnNet.onclick=()=>setView("network");
btnTl.onclick=()=>setView("timeline");

/* ---------- resize ---------- */
let rT;
window.addEventListener("resize",()=>{
  clearTimeout(rT);
  rT=setTimeout(()=>{
    W=stage.clientWidth; H=stage.clientHeight; CENT=centroids();
    if(sim){
      sim.force("x",d3.forceX(tX).strength(d=>d.id===META.hub?.16:.08));
      sim.force("y",d3.forceY(tY).strength(d=>d.id===META.hub?.16:.08));
      sim.force("center",d3.forceCenter(W/2,H/2).strength(.02));
      sim.alpha(.35).restart();
    }
    tlBuilt=false; if(tlWrap.classList.contains("show")) buildTimeline();
  },220);
});

// keyboard: Escape closes
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ if(posterModal.classList.contains("show")) closePosterModal(); else if(clashActive) clearClash(); else if(filterDrawer.classList.contains("open")) closeFilterDrawer(); else closePanel(); } });

/* ---------- mobile filter drawer ---------- */
const filtersToggle=document.getElementById("filtersToggle");
const filterDrawer=document.getElementById("filterDrawer");
function closeFilterDrawer(){ filterDrawer.classList.remove("open"); filtersToggle.setAttribute("aria-expanded","false"); }
function openFilterDrawer(){ filterDrawer.classList.add("open"); filtersToggle.setAttribute("aria-expanded","true"); }
filtersToggle.onclick=()=>{ filterDrawer.classList.contains("open") ? closeFilterDrawer() : openFilterDrawer(); };
svg.on("click.drawer",()=>{ if(filterDrawer.classList.contains("open")) closeFilterDrawer(); });

/* ---------- testament switching ---------- */
function applyMeta(){
  document.getElementById("appKicker").textContent=META.kicker||"";
  document.getElementById("appTitle").textContent=META.title||"";
  document.getElementById("appSubtitle").textContent=META.subtitle||"";
  document.getElementById("graph").setAttribute("aria-label",META.graphLabel||"");
  document.getElementById("legend").innerHTML='<h4>Kind of tie</h4>'+
    (META.legend||[]).map(([v,l,s])=>`<div class="row"><span class="swatch${s?" "+s:""}" style="--c:var(${v})"></span>${l}</div>`).join("");
}
function loadTestament(key){
  TESTAMENT=key;
  const ds=DATASETS[key];
  CAT=ds.CAT; PEOPLE=ds.PEOPLE; LINKS=ds.LINKS; TL_EVENTS=ds.EVENTS; TL_LIVES=ds.LIVES; META=ds.META;
  PIN_KEY="bible-people-map:"+key+":pins:v1";
  // reset UI state
  clashActive=null; clashPanel.classList.remove("show");
  panel.classList.remove("open");
  closePosterModal();
  document.getElementById("searchBox").value="";
  svg.call(zoom.transform, d3.zoomIdentity);
  applyMeta();
  build();
  tlBuilt=false;
  setView("network");
  document.getElementById("testOT").setAttribute("aria-pressed",(key==="ot").toString());
  document.getElementById("testNT").setAttribute("aria-pressed",(key==="nt").toString());
}
document.getElementById("testOT").onclick=()=>{ if(TESTAMENT!=="ot") loadTestament("ot"); };
document.getElementById("testNT").onclick=()=>{ if(TESTAMENT!=="nt") loadTestament("nt"); };

// ---- initial load ----
loadTestament("nt");
