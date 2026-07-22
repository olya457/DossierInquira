export const cases = [
  {
    id: 'the-ledger-beneath-the-ashes',
    title: 'The Ledger Beneath the Ashes',
    difficulty: 'Medium',
    category: 'Café Fraud',
    time: '7 min',
    story:
      'For twelve years, Bell & Briar Café reported modest but steady profits. Then its owner, Mara Voss, discovered that weekend revenue had been falling despite full tables and constant reservations.\nOn Monday morning, a small fire damaged the office beside the kitchen. The flames destroyed several accounting folders—but left the expensive equipment untouched. Among the ashes, investigators found part of a handwritten ledger containing payment totals that did not match the café’s official records.\nThe manager, Adrian Cole, claimed the notebook was only an abandoned forecasting exercise.',
    subjects: [
      {
        name: 'Mara Voss',
        role: 'The café owner',
      },
      {
        name: 'Adrian Cole',
        role: 'The general manager',
      },
      {
        name: 'Nina Bell',
        role: 'The weekend cashier',
      },
      {
        name: 'Everett Shaw',
        role: 'The bookkeeping consultant',
      },
    ],
    question:
      'Was the fire an accident, or was it used to conceal missing revenue?',
    clues: [
      {
        text: 'The damaged ledger records higher weekend revenue than the official accounting system.',
        answer: 'True',
      },
      {
        text: 'The fire began inside an electrical socket behind the office printer.',
        answer: 'Fake',
      },
      {
        text: 'Adrian accessed the office twenty minutes after closing on Sunday.',
        answer: 'True',
      },
      {
        text: 'Nina recently asked another café about an open cashier position.',
        answer: 'Unclear',
      },
      {
        text: 'A metal wastebasket contained traces of lighter fluid.',
        answer: 'True',
      },
      {
        text: 'Everett disliked Adrian and therefore must have altered the ledger.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Revenue mismatch\n The handwritten totals align with card-terminal data that was absent from the official reports.\nFAKE — Electrical origin\n The electrical inspection found no short circuit or damaged wiring near the printer.\nTRUE — Late office access\n The electronic lock registered Adrian’s personal access code after every other employee had left.\nUNCLEAR — Nina’s job search\n Seeking another job may indicate dissatisfaction, but it does not connect her to the missing money or the fire.\nTRUE — Lighter fluid\n The chemical residue establishes that an accelerant was used.\nFAKE — Everett’s motive\n Personal conflict is not evidence that he created false records.',
    solution:
      'Adrian had been removing part of the weekend cash revenue before the figures reached the accounting system. The handwritten ledger recorded the real totals so he could track how much had been taken.\nWhen Mara announced an independent audit, Adrian returned after closing, placed selected financial records in the wastebasket, and started the fire with lighter fluid. He expected the damage to look electrical, but the undamaged socket and chemical residue exposed the staging.\nThe fire was deliberate, and the missing revenue was part of a long-running internal fraud scheme.',
    takeaway:
      'A convincing conclusion requires several independent links: financial discrepancies, access records, physical evidence, and a clear reason for destroying documents.',
  },
  {
    id: 'the-whispered-formula',
    title: 'The Whispered Formula',
    difficulty: 'Hard',
    category: 'Food Science Mystery',
    time: '10 min',
    story:
      'A private tasting laboratory was preparing to unveil a reduced-sugar chocolate filling that maintained the texture of a traditional ganache. Only four people had access to the final formula.\nTwo days before the presentation, a rival manufacturer announced an almost identical product. The rival’s technical description included a highly unusual cooling sequence known only to the laboratory team.\nNo files appeared to have been downloaded, and the laboratory’s security system showed no unauthorized entry.',
    subjects: [
      {
        name: 'Dr. Elena March',
        role: 'Lead food scientist',
      },
      {
        name: 'Victor Lane',
        role: 'Laboratory technician',
      },
      {
        name: 'Sofia Ren',
        role: 'Sensory testing coordinator',
      },
      {
        name: 'Marcus Vale',
        role: 'External equipment engineer',
      },
    ],
    question: 'How did the confidential formula leave a secured laboratory?',
    clues: [
      {
        text: 'The rival product uses the same uncommon three-stage cooling process.',
        answer: 'True',
      },
      {
        text: 'Victor photographed the formula because his phone was found near the laboratory desk.',
        answer: 'Unclear',
      },
      {
        text: 'A voice assistant in the testing room stored several accidental audio recordings.',
        answer: 'True',
      },
      {
        text: 'Sofia deliberately transmitted the formula during a phone call with the rival company.',
        answer: 'Fake',
      },
      {
        text: 'Marcus serviced the room’s smart speaker one week before the leak.',
        answer: 'True',
      },
      {
        text: 'One recovered recording includes Elena reading the complete cooling sequence aloud.',
        answer: 'True',
      },
      {
        text: 'The rival company obtained the recording through Marcus’s maintenance account.',
        answer: 'True',
      },
    ],
    clueByClue:
      'TRUE — Matching process\n The cooling sequence is too specific to be an independent coincidence.\nUNCLEAR — Victor’s phone\n Its presence in the room does not prove that it was used to capture confidential information.\nTRUE — Stored recordings\n The device had mistakenly activated during several technical discussions.\nFAKE — Sofia’s phone call\n Telephone records show she contacted a packaging supplier, not the rival manufacturer.\nTRUE — Maintenance access\n Marcus retained remote access after completing the equipment service.\nTRUE — Formula spoken aloud\n The recovered audio clearly contains the protected method.\nTRUE — Account connection\n Server logs show that Marcus’s credentials accessed and exported the recording.',
    solution:
      'No one removed a document or entered the laboratory illegally. The leak occurred because the team discussed the formula beside a voice-enabled device that had been left connected to a cloud account.\nMarcus discovered the recordings while checking the system remotely. Recognizing their commercial value, he downloaded the discussion and sold it to the rival manufacturer.\nThe case was not a traditional break-in. It was a failure of information security combined with the misuse of legitimate technical access.',
    takeaway:
      'Confidential information can escape without a missing file. Investigators must consider microphones, cloud services, access permissions, and ordinary devices that quietly collect data.',
  },
  {
    id: 'the-clockwork-macaron',
    title: 'The Clockwork Macaron',
    difficulty: 'Medium',
    category: 'Auction Deception',
    time: '6 min',
    story:
      'At a charity auction, guests competed for an ornate mechanical display shaped like a tower of macarons. The piece was advertised as an original creation by renowned confectionery artist Étienne Rocher.\nMinutes after it sold for €48,000, the winning bidder received an anonymous message claiming the sculpture was a modern replica.\nThe certificate looked authentic, the artist’s signature appeared beneath the base, and the auction house insisted the provenance was complete.',
    subjects: [
      {
        name: 'Étienne Rocher',
        role: 'The celebrated confectionery artist',
      },
      {
        name: 'Claire Mornay',
        role: 'The auction curator',
      },
      {
        name: 'Julian Crest',
        role: 'The winning bidder',
      },
      {
        name: 'Theo Arden',
        role: 'A former studio assistant',
      },
    ],
    question: 'Was the auctioned sculpture genuine?',
    clues: [
      {
        text: 'The certificate uses paper manufactured five years after the artist’s death.',
        answer: 'True',
      },
      {
        text: 'The signature resembles examples found in exhibition catalogues.',
        answer: 'Unclear',
      },
      {
        text: 'A hidden motor carries a serial number issued only three years ago.',
        answer: 'True',
      },
      {
        text: 'Theo once argued with the artist and therefore created the replica.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Modern paper\n Material dating directly contradicts the claimed age of the certificate.\nUNCLEAR — Similar signature\n A visual match may support authenticity, but signatures can be copied.\nTRUE — Recent motor\n The internal component could not have existed when the original work was supposedly produced.\nFAKE — Former dispute\n An argument establishes neither access nor participation in the deception.',
    solution:
      'The sculpture was a recent replica assembled around a modern motor. Its certificate had been artificially aged, and the signature was copied from a published catalogue.\nClaire had accepted the piece from a private collector without conducting a technical inspection. She did not create the forgery, but she ignored inconsistencies because the famous name was expected to attract high bids.\nThe anonymous warning came from Theo, who recognized construction methods never used in Rocher’s studio.',
    takeaway:
      'Appearance and reputation can create false confidence. Reliable authentication combines documentation with materials, manufacturing dates, and technical examination.',
  },
  {
    id: 'the-last-table-at-bellamy-s',
    title: 'The Last Table at Bellamy’s',
    difficulty: 'Hard',
    category: 'Restaurant Alibi',
    time: '11 min',
    story:
      'A rare nineteenth-century wine journal disappeared during a private dinner at Bellamy’s, a members-only restaurant. The journal had been displayed in a glass cabinet near the dining room before its transfer to a museum.\nOnly six guests and three employees remained inside the building when the security alarm briefly failed.\nOne guest, financier Lucien Ward, claimed he never left the dining table. The waiter confirmed this. Yet the journal was later found inside a delivery crate addressed to Ward’s private cellar.',
    subjects: [
      {
        name: 'Lucien Ward',
        role: 'The financier and collector',
      },
      {
        name: 'Mira Solano',
        role: 'The head waiter',
      },
      {
        name: 'Daniel Reeve',
        role: 'The restaurant sommelier',
      },
      {
        name: 'Asha Bellamy',
        role: 'The restaurant director',
      },
    ],
    question: 'Who removed the journal, and how was the theft disguised?',
    clues: [
      {
        text: 'Dining-room footage shows Lucien seated throughout the alarm failure.',
        answer: 'True',
      },
      {
        text: 'The crate label proves Lucien personally placed the journal inside it.',
        answer: 'Unclear',
      },
      {
        text: 'Mira’s service tablet issued a staff-door unlock request during the outage.',
        answer: 'True',
      },
      {
        text: 'Daniel’s fingerprints were found on the journal’s protective glass.',
        answer: 'Unclear',
      },
      {
        text: 'The waiter’s statement was recorded before investigators mentioned the exact outage time.',
        answer: 'True',
      },
      {
        text: 'The alarm failed because a storm interrupted the city’s electricity supply.',
        answer: 'Fake',
      },
      {
        text: 'A payment from Lucien reached Mira’s brother three days before the dinner.',
        answer: 'True',
      },
    ],
    clueByClue:
      'TRUE — Lucien remained seated\n The footage confirms that he did not physically enter the display area.\nUNCLEAR — Addressed crate\n The destination connects the shipment to Lucien, but someone else could have packed it.\nTRUE — Door request\n Mira’s tablet was used to access the staff corridor beside the cabinet.\nUNCLEAR — Daniel’s fingerprints\n As sommelier, he had previously handled the cabinet while arranging the display.\nTRUE — Prematurely precise statement\n Mira described Lucien as seated during the exact two-minute outage before that timing was publicly known.\nFAKE — Storm explanation\n Weather and utility records show no power interruption.\nTRUE — Financial link\n The payment provides a traceable connection between Lucien and Mira.',
    solution:
      'Lucien designed the theft but remained visibly seated to preserve his alibi. Mira triggered a local alarm interruption through the restaurant’s maintenance panel, unlocked the service corridor, removed the journal, and concealed it inside a prepared wine-delivery crate.\nShe then gave an overly specific statement supporting Lucien’s innocence. Her knowledge of the precise outage window revealed that the story had been coordinated in advance.\nDaniel’s fingerprints were legitimate and unrelated. The theft depended on dividing responsibility: one person planned and financed it, while another performed the physical act.',
    takeaway:
      'An alibi may prove that a suspect did not perform one action, but it does not prove that they did not organize the crime.',
  },
  {
    id: 'the-violet-sugar-shipment',
    title: 'The Violet Sugar Shipment',
    difficulty: 'Easy',
    category: 'Supply Chain Mystery',
    time: '5 min',
    story:
      'A boutique bakery received twenty bags of violet-colored decorating sugar for an important evening event. When the bags were opened, the sugar smelled faintly chemical and stained the frosting blue instead of violet.\nThe supplier insisted the correct product had been shipped. The bakery accused a temporary employee of switching the bags to sabotage the event.\nThe labels appeared genuine, and every package remained sealed.',
    subjects: [
      {
        name: 'Imani Cross',
        role: 'The bakery owner',
      },
      {
        name: 'Rhea Moss',
        role: 'The temporary assistant',
      },
      {
        name: 'Calder Foods',
        role: 'The ingredient supplier',
      },
    ],
    question: 'Was the shipment deliberately switched?',
    clues: [
      {
        text: 'The printed batch code belongs to an industrial cleaning product.',
        answer: 'True',
      },
      {
        text: 'Rhea had access to the storage room before the bags were opened.',
        answer: 'Unclear',
      },
      {
        text: 'All twenty seals match the supplier’s factory sealing pattern.',
        answer: 'True',
      },
      {
        text: 'The warehouse scan assigned the wrong label file to the packaging line.',
        answer: 'True',
      },
      {
        text: 'The blue color proves that Rhea added food dye.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Incorrect batch code\n The code identifies a different product from the supplier’s own catalogue.\nUNCLEAR — Storage access\n Opportunity alone does not prove that Rhea altered sealed packages.\nTRUE — Factory seals\n The packaging was not opened after leaving the production line.\nTRUE — Labeling error\n Digital records show that the wrong product labels were loaded during packing.\nFAKE — Blue dye accusation\n Laboratory testing found no added food coloring.',
    solution:
      'The bakery was not sabotaged. At the supplier’s warehouse, a software error linked the violet-sugar label design to a nearby packaging run for a cleaning compound.\nThe bags were sealed at the factory with the wrong labels and delivered through the normal supply chain. Rhea’s access created suspicion, but the intact seals and warehouse records cleared her.\nThe incident was a dangerous labeling failure, not an internal crime.',
    takeaway:
      'Opportunity should never outweigh physical evidence. Packaging integrity and production records can distinguish deliberate interference from a system error.',
  },
  {
    id: 'the-portrait-in-the-cocoa-tin',
    title: 'The Portrait in the Cocoa Tin',
    difficulty: 'Hard',
    category: 'Hidden Provenance',
    time: '12 min',
    story:
      'During renovations at an old Parisian chocolate shop, workers discovered a rolled portrait inside a sealed cocoa tin behind a wall panel. The unsigned painting appeared to depict a famous actress who had visited the shop in the 1920s.\nA private dealer quickly offered €300,000, claiming the work was an unknown portrait by modernist painter Luc Moreau.\nBefore the sale, an archivist warned that someone may have planted the painting to create a sensational discovery story.',
    subjects: [
      {
        name: 'Camille Duret',
        role: 'The current shop owner',
      },
      {
        name: 'Henri Vale',
        role: 'The private art dealer',
      },
      {
        name: 'Dr. Noor Bensaïd',
        role: 'The paper conservator',
      },
      {
        name: 'Émile Laurent',
        role: 'The renovation contractor',
      },
    ],
    question:
      'Is the portrait a genuine historical discovery or a staged forgery?',
    clues: [
      {
        text: 'The paper contains a synthetic brightener introduced in commercial production after 1950.',
        answer: 'True',
      },
      {
        text: 'The cocoa tin design was used by the shop during the 1920s.',
        answer: 'True',
      },
      {
        text: 'A genuine period container proves that everything inside it is equally old.',
        answer: 'Fake',
      },
      {
        text: 'The wall panel contains modern screws beneath an older decorative frame.',
        answer: 'True',
      },
      {
        text: 'Henri transferred money to Émile shortly before the renovation began.',
        answer: 'True',
      },
      {
        text: 'The portrait resembles Luc Moreau’s known brushwork.',
        answer: 'Unclear',
      },
    ],
    clueByClue:
      'TRUE — Modern paper component\n The material could not have been manufactured during the claimed period.\nTRUE — Authentic container\n The tin itself is historically genuine.\nFAKE — Container proves contents\n Old containers can be reused to make newer objects appear older.\nTRUE — Recently opened wall space\n The modern fasteners show that the hiding place had been accessed in recent years.\nTRUE — Dealer-contractor payment\n The financial connection supports coordination between Henri and Émile.\nUNCLEAR — Similar style\n Stylistic resemblance is subjective and can be deliberately imitated.',
    solution:
      'Henri acquired an authentic 1920s cocoa tin and commissioned a portrait designed to imitate Luc Moreau’s style. Émile placed both objects behind the decorative wall panel before the renovation team officially entered the room.\nThe staged discovery was intended to create a dramatic provenance story and raise the painting’s value. The old tin provided credibility, but the modern paper, recent screws, and hidden payment exposed the scheme.\nThe portrait was not a lost modernist work. It was a contemporary forgery supported by authentic historical packaging.',
    takeaway:
      'A real object can be used to authenticate a false story. Investigators must date every component separately and reconstruct the entire chain of custody.',
  },
  {
    id: 'the-midnight-roast',
    title: 'The Midnight Roast',
    difficulty: 'Medium',
    category: 'Café Sabotage',
    time: '8 min',
    story:
      'On the morning of an international coffee competition, the signature roast from North Vale Roastery produced a harsh, smoky flavor. The same beans had passed quality control the previous evening.\nOnly three people had access to the roasting room overnight. The head roaster blamed a faulty temperature sensor, while a rival competitor suggested the beans had been intentionally overheated.\nThe damaged batch was worth thousands, but the roasting machine showed no obvious malfunction.',
    subjects: [
      {
        name: 'Mara Quinn',
        role: 'The head roaster',
      },
      {
        name: 'Elias Thorn',
        role: 'The night technician',
      },
      {
        name: 'Jonas Reed',
        role: 'A competing roaster',
      },
      {
        name: 'Priya Sen',
        role: 'The quality-control specialist',
      },
    ],
    question:
      'Was the competition batch ruined by equipment failure or deliberate interference?',
    clues: [
      {
        text: 'The machine log shows a temperature increase at 2:14 AM.',
        answer: 'True',
      },
      {
        text: 'The internal temperature sensor recorded normal values throughout the roast.',
        answer: 'True',
      },
      {
        text: 'Elias entered the roasting room shortly before the temperature spike.',
        answer: 'True',
      },
      {
        text: 'Jonas had previously criticized North Vale’s roasting style.',
        answer: 'Unclear',
      },
      {
        text: 'A portable heating probe was found inside Elias’s equipment bag.',
        answer: 'True',
      },
      {
        text: 'The beans were already defective before arriving at the roastery.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Temperature change\n The machine registered an unusual increase during the unattended night cycle.\nTRUE — Normal sensor reading\n The built-in sensor had been bypassed, which explains why it did not reflect the real chamber temperature.\nTRUE — Room access\n Elias’s access card places him at the scene immediately before the damage occurred.\nUNCLEAR — Rival criticism\n A negative opinion does not connect Jonas to the machine or the damaged beans.\nTRUE — Portable probe\n The device could interfere with the control system and create false temperature feedback.\nFAKE — Defective beans\n Samples from the same shipment roasted correctly before and after the incident.',
    solution:
      'Elias had secretly accepted payment from another competitor to damage North Vale’s entry. He used a portable probe to manipulate the control system, causing the machine to continue heating while its internal display appeared normal.\nThe sabotage was designed to resemble a technical failure. The synchronized access record, temperature anomaly, and hidden equipment revealed deliberate interference.',
    takeaway:
      'Technical sabotage often depends on creating two realities: what the machine actually does and what its monitoring system reports.',
  },
  {
    id: 'the-silent-reservation',
    title: 'The Silent Reservation',
    difficulty: 'Hard',
    category: 'Identity Deception',
    time: '10 min',
    story:
      'A private dining room at an exclusive restaurant was booked under the name of a celebrated food critic. The reservation triggered a carefully prepared tasting menu and unusually attentive service.\nThe critic never arrived.\nBy the end of the evening, photographs of unreleased dishes had appeared on a competitor’s social media account. The restaurant manager suspected that someone had used the critic’s identity to gain access.',
    subjects: [
      {
        name: 'Celine Hart',
        role: 'The restaurant manager',
      },
      {
        name: 'Adrian Voss',
        role: 'The food critic',
      },
      {
        name: 'Mira Lane',
        role: 'A freelance photographer',
      },
      {
        name: 'Theo Brandt',
        role: 'The rival restaurant’s marketing director',
      },
    ],
    question: 'Who made the false reservation, and why?',
    clues: [
      {
        text: 'The booking email differs by one letter from the critic’s verified address.',
        answer: 'True',
      },
      {
        text: 'The reservation was confirmed from a public Wi-Fi network near the rival restaurant.',
        answer: 'True',
      },
      {
        text: 'Mira photographed the dishes during the dinner.',
        answer: 'True',
      },
      {
        text: 'Mira’s presence proves she created the false identity.',
        answer: 'Unclear',
      },
      {
        text: 'Theo paid Mira for a “competitive visual audit.”',
        answer: 'True',
      },
      {
        text: 'Adrian secretly attended under another name.',
        answer: 'Fake',
      },
      {
        text: 'The restaurant’s own waiter leaked the images.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — False email\n The address was designed to look authentic at a glance.\nTRUE — Network origin\n The confirmation came from a location linked to the rival business.\nTRUE — Photographer present\n Security footage shows Mira documenting every course.\nUNCLEAR — Identity creation\n She may have participated without designing the entire scheme.\nTRUE — Payment trail\n The invoice language disguises the real purpose but connects Theo to the operation.\nFAKE — Critic attendance\n Travel records confirm Adrian was in another country.\nFAKE — Waiter leak\n The image angles match Mira’s seat, not the service area.',
    solution:
      'Theo created the false reservation using an email address nearly identical to Adrian’s. He hired Mira to attend as the critic’s assistant and photograph the unreleased dishes.\nThe goal was not only to copy presentation ideas but also to embarrass the restaurant by publishing its menu before launch.\nMira gathered the images, but Theo organized the deception and financed it.',
    takeaway:
      'Identity fraud often succeeds through small visual similarities rather than sophisticated technology.',
  },
  {
    id: 'the-burnt-sugar-alibi',
    title: 'The Burnt Sugar Alibi',
    difficulty: 'Easy',
    category: 'Kitchen Incident',
    time: '5 min',
    story:
      'A pastry chef collapsed shortly before an evening service. A strong burnt-sugar odor filled the kitchen, and several employees assumed she had inhaled smoke from an overheated caramel pan.\nThe emergency ventilation system activated automatically, yet no pan was found on the stove. One assistant claimed the chef had simply fainted from exhaustion.\nA broken bottle was later discovered beneath the preparation table.',
    subjects: [
      {
        name: 'Sofia Marin',
        role: 'The pastry chef',
      },
      {
        name: 'Lena Graves',
        role: 'The assistant pastry chef',
      },
      {
        name: 'Owen Pike',
        role: 'The kitchen porter',
      },
    ],
    question: 'Was the collapse caused by ordinary kitchen smoke?',
    clues: [
      {
        text: 'No caramel residue was found on the stove or cookware.',
        answer: 'True',
      },
      {
        text: 'The broken bottle contained a concentrated food-aroma compound.',
        answer: 'True',
      },
      {
        text: 'Sofia had worked a long shift.',
        answer: 'Unclear',
      },
      {
        text: 'The ventilation alarm proves a real fire occurred.',
        answer: 'Fake',
      },
      {
        text: 'Lena ordered the aroma compound under a false product name.',
        answer: 'True',
      },
    ],
    clueByClue:
      'TRUE — No cooking source\n The expected physical evidence of burnt caramel was absent.\nTRUE — Aroma compound\n The liquid could imitate the smell of overheated sugar without producing a visible fire.\nUNCLEAR — Long shift\n Fatigue may contribute to illness but does not explain the chemical exposure.\nFAKE — Alarm interpretation\n The system responded to airborne particles, not necessarily flames.\nTRUE — Hidden purchase\n The false description shows an attempt to conceal the material’s purpose.',
    solution:
      'Lena spilled a concentrated aroma compound near Sofia’s station after the two argued over a promotion. The vapors triggered the ventilation system and caused Sofia’s respiratory distress.\nThe familiar smell encouraged everyone to assume a routine kitchen accident. The missing caramel residue and disguised purchase exposed the staging.',
    takeaway:
      'A familiar smell can direct attention toward the wrong cause. Sensory impressions must be tested against physical evidence.',
  },
  {
    id: 'the-photograph-that-arrived-too-early',
    title: 'The Photograph That Arrived Too Early',
    difficulty: 'Hard',
    category: 'Timeline Manipulation',
    time: '11 min',
    story:
      'A luxury bakery unveiled a sculpted wedding cake in a locked display room at 6:00 PM. At 5:42 PM, an anonymous account posted a photograph of the finished design online.\nThe decorator insisted the cake had not been completed until minutes before the unveiling. Only five staff members knew the final appearance.\nThe photograph appeared to show the exact display room, including a floral arrangement installed shortly before the event.',
    subjects: [
      {
        name: 'Amelia Frost',
        role: 'The cake designer',
      },
      {
        name: 'Victor Hale',
        role: 'The event photographer',
      },
      {
        name: 'Nora Bell',
        role: 'The floral stylist',
      },
      {
        name: 'Silas Kent',
        role: 'The production manager',
      },
    ],
    question:
      'How was the finished cake photographed before it was officially complete?',
    clues: [
      {
        text: 'The photo metadata states that the image was taken at 5:39 PM.',
        answer: 'Unclear',
      },
      {
        text: 'The floral arrangement in the photograph differs slightly from the final display.',
        answer: 'True',
      },
      {
        text: 'Victor photographed an earlier prototype during a rehearsal.',
        answer: 'True',
      },
      {
        text: 'The posted image was digitally edited to include details from the final cake.',
        answer: 'True',
      },
      {
        text: 'Amelia leaked the final design to increase publicity.',
        answer: 'Fake',
      },
      {
        text: 'Silas had access to both the prototype images and the final design files.',
        answer: 'True',
      },
      {
        text: 'The social-media timestamp proves the physical cake existed at that moment.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'UNCLEAR — Metadata time\n Metadata can be altered and does not independently establish when the scene existed.\nTRUE — Floral mismatch\n The photograph contains rehearsal flowers, not the arrangement installed for the unveiling.\nTRUE — Earlier prototype\n Victor’s archive includes the original base image.\nTRUE — Digital alteration\n Layer analysis reveals that decorative elements were added from design renders.\nFAKE — Designer’s publicity plan\n No communication or financial motive supports this claim.\nTRUE — Silas’s access\n He could obtain every component needed to construct the deceptive image.\nFAKE — Upload time\n It proves only when the edited file was posted.',
    solution:
      'Silas combined a rehearsal photograph of the prototype with digital elements from the final design render. He posted the composite before the unveiling to create the impression of an internal leak.\nHis plan was to damage Amelia’s credibility and replace her as creative director. The floral discrepancy and digital-layer evidence revealed that the photograph did not show the completed physical cake.',
    takeaway:
      'A photograph can be authentic in parts while false as a whole. Time, place, and content must each be verified separately.',
  },
  {
    id: 'the-empty-vanilla-vault',
    title: 'The Empty Vanilla Vault',
    difficulty: 'Medium',
    category: 'Inventory Fraud',
    time: '7 min',
    story:
      'A specialty ingredient importer discovered that several kilograms of premium vanilla had disappeared from a temperature-controlled storage room.\nThe vault had not been forced, and the inventory system showed no removal. The missing product was extremely valuable and easy to resell in small quantities.\nThe warehouse supervisor claimed the loss was caused by an incorrect shipment count.',
    subjects: [
      {
        name: 'Leila Orr',
        role: 'The importer',
      },
      {
        name: 'Marcus Dene',
        role: 'The warehouse supervisor',
      },
      {
        name: 'Tomas Reed',
        role: 'The delivery driver',
      },
      {
        name: 'Iris Vale',
        role: 'The inventory auditor',
      },
    ],
    question: 'Was the vanilla ever delivered, or was it stolen after arrival?',
    clues: [
      {
        text: 'The delivery truck’s weight changed by the exact mass of the vanilla shipment.',
        answer: 'True',
      },
      {
        text: 'The receiving camera shows sealed crates entering the warehouse.',
        answer: 'True',
      },
      {
        text: 'The inventory system was placed in maintenance mode for nine minutes.',
        answer: 'True',
      },
      {
        text: 'Tomas frequently delivers to other food companies.',
        answer: 'Unclear',
      },
      {
        text: 'Marcus’s access badge opened the vault during the maintenance window.',
        answer: 'True',
      },
      {
        text: 'The crates were empty when they arrived.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Truck weight\n The shipment’s physical mass was present when the vehicle reached the warehouse.\nTRUE — Sealed delivery\n The crates entered intact.\nTRUE — System interruption\n The inventory record was deliberately disabled during the critical period.\nUNCLEAR — Other deliveries\n This is normal for a professional driver and does not suggest theft.\nTRUE — Vault entry\n Marcus accessed the storage area while digital tracking was unavailable.\nFAKE — Empty crates\n Weight records and later packaging examination disprove this claim.',
    solution:
      'The vanilla was delivered correctly. Marcus placed the inventory system into maintenance mode, entered the vault, removed part of the shipment, and resealed the outer packaging.\nHe planned to blame a supplier counting error, knowing the system would show no recorded withdrawal.\nThe truck weight, receiving footage, and access record proved that the loss occurred inside the warehouse.',
    takeaway:
      'When digital records disappear, physical measurements and access logs can reconstruct what actually happened.',
  },
  {
    id: 'the-bitter-aftertaste',
    title: 'The Bitter Aftertaste',
    difficulty: 'Hard',
    category: 'Recipe Tampering',
    time: '12 min',
    story:
      'A respected chocolatier launched a new tasting collection for investors. Every sample from one tray left a sharp metallic aftertaste, forcing the event to stop.\nThe kitchen team used the same ingredients for all six trays, yet only one was affected. The production chef blamed a defective mixing bowl.\nNo one became seriously ill, but the company’s acquisition negotiations collapsed the next morning.',
    subjects: [
      {
        name: 'Ariane Cole',
        role: 'The chocolatier',
      },
      {
        name: 'Felix Marr',
        role: 'The production chef',
      },
      {
        name: 'Clara Venn',
        role: 'The business partner',
      },
      {
        name: 'Samuel Pike',
        role: 'The equipment supplier',
      },
    ],
    question: 'Was the tasting failure accidental or commercially motivated?',
    clues: [
      {
        text: 'Only the investor tray contained the metallic compound.',
        answer: 'True',
      },
      {
        text: 'The affected tray was plated separately after the others.',
        answer: 'True',
      },
      {
        text: 'The mixing bowl contains scratches and discoloration.',
        answer: 'Unclear',
      },
      {
        text: 'Samuel supplied the bowl six months earlier.',
        answer: 'Unclear',
      },
      {
        text: 'Clara had recently negotiated with a competing buyer.',
        answer: 'True',
      },
      {
        text: 'A vial matching the contaminant was found in Clara’s locked desk.',
        answer: 'True',
      },
      {
        text: 'Felix disliked the investors and therefore poisoned the samples.',
        answer: 'Fake',
      },
      {
        text: 'Security footage shows Clara entering the plating room alone.',
        answer: 'True',
      },
    ],
    clueByClue:
      'TRUE — Targeted contamination\n The compound appeared only in samples intended for the investors.\nTRUE — Separate plating\n This created a narrow opportunity for selective tampering.\nUNCLEAR — Damaged bowl\n Wear may explain contamination in theory, but it would likely affect multiple batches.\nUNCLEAR — Supplier connection\n Providing equipment does not connect Samuel to the incident.\nTRUE — Competing negotiation\n Clara stood to gain if the current acquisition failed.\nTRUE — Matching vial\n The material directly connects her to the contaminant.\nFAKE — Personal dislike\n Emotion alone does not establish action.\nTRUE — Private access\n She was alone with the investor tray shortly before service.',
    solution:
      'Clara wanted the existing acquisition to collapse so she could move the company toward a competing buyer offering her a larger personal stake.\nShe added a small amount of a nonlethal metallic-tasting compound to the investor tray during plating. The quantity was chosen to ruin confidence without causing severe injury.\nThe worn bowl provided a convenient alternative explanation, but the selective contamination, hidden vial, footage, and financial motive revealed deliberate tampering.',
    takeaway:
      'The distribution of harm often reveals intent. An accident tends to follow the production process; sabotage follows the target.',
  },
  {
    id: 'the-locked-room-tasting',
    title: 'The Locked Room Tasting',
    difficulty: 'Expert',
    category: 'Corporate Espionage',
    time: '14 min',
    story:
      'A beverage company invited four executives to a confidential tasting of a new coffee extract. The meeting took place in a sealed conference room with phones collected at the door.\nWithin three hours, a rival company filed a trademark application using the exact unreleased product name discussed during the tasting.\nNo attendee admitted communicating with anyone outside the room. Security confirmed that the door remained locked throughout the session.',
    subjects: [
      {
        name: 'Dr. Mina Cross',
        role: 'The product director',
      },
      {
        name: 'Julian Ward',
        role: 'The chief financial officer',
      },
      {
        name: 'Elise Mora',
        role: 'The brand strategist',
      },
      {
        name: 'Gavin Holt',
        role: 'The legal adviser',
      },
      {
        name: 'Rook & Vale',
        role: 'The rival beverage company',
      },
    ],
    question:
      'How did the unreleased name leave a room with no visible communication devices?',
    clues: [
      {
        text: 'Every attendee’s phone remained sealed outside the room.',
        answer: 'True',
      },
      {
        text: 'The conference-room display was connected to the building network.',
        answer: 'True',
      },
      {
        text: 'A presentation slide briefly showed the final product name.',
        answer: 'True',
      },
      {
        text: 'The display automatically synchronized screenshots to a remote support server.',
        answer: 'True',
      },
      {
        text: 'Gavin had once represented the rival company.',
        answer: 'Unclear',
      },
      {
        text: 'Julian sent the name through a hidden mobile phone.',
        answer: 'Fake',
      },
      {
        text: 'The remote support account was accessed from an IP address used by Rook & Vale’s contractor.',
        answer: 'True',
      },
      {
        text: 'Elise deliberately left the slide visible for several minutes.',
        answer: 'Unclear',
      },
      {
        text: 'The locked door prevented all information from leaving the room.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Phones secured\n The leak did not occur through the collected personal devices.\nTRUE — Networked display\n The room still contained connected technology.\nTRUE — Name displayed\n The confidential term appeared on a screen capable of transmitting data.\nTRUE — Automatic screenshots\n The support system captured and uploaded the presentation.\nUNCLEAR — Gavin’s former client\n The prior relationship is relevant but does not prove participation.\nFAKE — Hidden phone\n Search records and signal logs found no unauthorized mobile device.\nTRUE — Contractor access\n The remote login connects the leak to infrastructure used by the rival.\nUNCLEAR — Long display time\n Poor presentation practice may have increased exposure, but intent is unproven.\nFAKE — Physical security assumption\n A room can be physically sealed while remaining digitally open.',
    solution:
      'The leak occurred through the conference-room display, not through any attendee. Its remote-support software automatically captured screenshots for diagnostic purposes.\nA contractor with access to the support server recognized the product name and passed it to Rook & Vale, which immediately filed the trademark application.\nThe executives focused on visible devices and physical access but overlooked the networked system already inside the room.',
    takeaway:
      'A secure meeting is only as private as every connected device within it. Physical isolation does not guarantee information security.',
  },
] as const;
