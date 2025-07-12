// Add this at the very beginning of your immigration_content.js file
function getLoopContent() {
    return immigrationContent;
}

// This file contains the content pool for the "Immigration" loop.
// It must be loaded BEFORE game_logic.js in your HTML.
// Expanded to ~75KB with research-driven content (2025)

const immigrationContent = [
    // TRUE/FALSE QUESTIONS - Humanitarian Perspective (8 questions from original + 10 new = 18 total)
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "For the first time in recorded US history, immigration accounted for 100% of population growth between 2022 and 2023.",
        correct_answer: true,
        value: 16,
        correct_feedback: "True! This is unprecedented since census data began in 1850, reflecting declining US birth rates.",
        incorrect_feedback: "Actually, immigration drove all population growth in 2022-2023 for the first time in over 170 years.",
        bridge_commentary: "This historic shift shows how immigration has become essential for America\'s demographic sustainability."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Undocumented immigrants contributed nearly 90 billion dollars in taxes in 2023 despite lacking legal status.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct! Undocumented households paid $89.8 billion in federal, state, and local taxes in 2023.",
        incorrect_feedback: "Undocumented immigrants do pay substantial taxes through payroll deductions, sales taxes, and property taxes.",
        bridge_commentary: "Tax contributions challenge assumptions about who pays into the system that supports American communities."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Over 4 million US citizen children live with at least one undocumented parent, making them vulnerable to family separation.",
        correct_answer: true,
        value: 18,
        correct_feedback: "True. 4.1 million US citizen children have undocumented parents, creating complex family situations.",
        incorrect_feedback: "Family separation affects millions of American children whose parents lack legal status.",
        bridge_commentary: "Immigration enforcement directly impacts American citizens, not just immigrants themselves."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "The number of people displaced by war and persecution worldwide has reached historic levels, affecting over 100 million people.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct. Global displacement has reached unprecedented levels due to conflicts and persecution worldwide.",
        incorrect_feedback: "Global displacement is at historic highs, creating unprecedented humanitarian challenges.",
        bridge_commentary: "Understanding global displacement helps contextualize why people seek refuge in countries like America."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Foreign-born workers are significantly overrepresented in essential industries like healthcare, agriculture, and construction.",
        correct_answer: true,
        value: 15,
        correct_feedback: "True! Immigrants fill critical roles in sectors that struggled with worker shortages during the pandemic.",
        incorrect_feedback: "Foreign-born workers are indeed concentrated in essential industries that keep America running.",
        bridge_commentary: "Essential worker patterns show how immigration and American economic needs are deeply interconnected."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "The US asylum system currently has a backlog of over 1 million cases, with wait times of several years.",
        correct_answer: true,
        value: 17,
        correct_feedback: "True. Massive backlogs mean people wait years in limbo for asylum decisions.",
        incorrect_feedback: "The asylum system is severely backlogged, creating lengthy delays for people seeking protection.",
        bridge_commentary: "System capacity challenges affect both those seeking help and those concerned about orderly processes."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Second-generation immigrants typically achieve higher education and income levels than the general US population.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Children of immigrants often outperform natives in educational and economic outcomes.",
        incorrect_feedback: "Research consistently shows second-generation immigrants achieve high levels of success in America.",
        bridge_commentary: "Long-term integration patterns suggest that immigration investments pay off across generations."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Climate change is increasingly driving migration as extreme weather makes some regions uninhabitable.",
        correct_answer: true,
        value: 18,
        correct_feedback: "True. Rising sea levels, droughts, and extreme weather are creating new forms of displacement.",
        incorrect_feedback: "Climate displacement is a growing reality that will likely increase migration pressures globally.",
        bridge_commentary: "Climate migration presents new challenges that traditional immigration frameworks weren\'t designed to handle."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Ending birthright citizenship for children born in the U.S. to unauthorized immigrants would significantly decrease the unauthorized immigrant population over time.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False. Projections suggest ending birthright citizenship could *increase* the unauthorized population by millions, as they would have no pathway to legal status and remain in the shadows.",
        incorrect_feedback: "Research indicates that ending birthright citizenship would likely lead to a *larger* unauthorized population rather than a decrease.",
        bridge_commentary: "This policy change has complex, long-term demographic implications that are not always intuitive."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Immigrants, including undocumented individuals, contribute significantly to the U.S. labor force, especially in sectors with persistent worker shortages.",
        correct_answer: true,
        value: 16,
        correct_feedback: "True. Immigrants make up a vital part of the labor market in industries like agriculture, construction, and healthcare, addressing shortages.",
        incorrect_feedback: "Yes, immigrants play a crucial role in filling labor gaps across various essential industries in the U.S.",
        bridge_commentary: "Understanding labor market needs reveals how immigration is deeply intertwined with America\'s economic functionality."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Most climate-displaced individuals currently have legal protection mechanisms in the U.S. to offer them permanent safe haven.",
        correct_answer: false,
        value: 18,
        correct_feedback: "False. The United States currently lacks specific legal protection mechanisms for those permanently displaced by climate change, with Temporary Protected Status being the closest, but temporary, form of protection.",
        incorrect_feedback: "Unfortunately, the U.S. and international frameworks are still developing comprehensive legal protections for climate migrants.",
        bridge_commentary: "Climate migration presents a new frontier for international and national humanitarian law, highlighting gaps in existing frameworks."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Social support networks among immigrants are a fundamental dimension for their successful social integration.",
        correct_answer: true,
        value: 15,
        correct_feedback: "True. Studies confirm that strong social support networks enhance immigrants' experience of community and provide essential assistance, promoting integration.",
        incorrect_feedback: "Research indicates that social networks are indeed crucial for the social integration and well-being of immigrants.",
        bridge_commentary: "Community bonds and mutual support are powerful forces in helping newcomers thrive in a new land."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Increased immigration enforcement has no measurable effect on the physical and mental health of unauthorized immigrants and their children.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False. Evidence suggests that heightened enforcement can have major and lasting negative effects on the physical and mental health of unauthorized immigrants and their children, leading them to avoid essential healthcare.",
        incorrect_feedback: "Research indicates that increased immigration enforcement can have significant detrimental impacts on the health and well-being of immigrant families.",
        bridge_commentary: "The human costs of enforcement policies extend beyond legal outcomes, affecting families and public health."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Refugees and TPS (Temporary Protected Status) holders contribute billions in taxes and spending power, often offsetting initial resettlement costs.",
        correct_answer: true,
        value: 16,
        correct_feedback: "True. In 2023, refugees paid $31.2 billion in taxes, and TPS holders paid $5.2 billion, demonstrating significant economic contributions.",
        incorrect_feedback: "Refugees and TPS holders do contribute substantially to the economy through taxes and spending, often surpassing initial expenditures.",
        bridge_commentary: "Investing in resettlement can yield long-term economic benefits, transforming initial costs into societal gains."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "The majority of immigrants are dependent on government housing assistance and do not contribute to the housing market.",
        correct_answer: false,
        value: 15,
        correct_feedback: "False. In 2023, immigrant households paid over $167 billion in rent and held over $6.6 trillion in housing wealth, actively contributing to the housing market and revitalizing neighborhoods.",
        incorrect_feedback: "Actually, immigrants significantly invest in the housing market through rent and homeownership, revitalizing communities.",
        bridge_commentary: "Immigrants are active participants in the housing economy, reflecting their commitment to building lives and communities."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "The U.S. Refugee Admissions Program's funding has recently seen proposed increases to support refugee protection and resettlement efforts.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False. The White House has formally requested over $800 million in cuts from the State Department's Migration and Refugee Assistance budget, which funds the U.S. Refugee Admissions Program.",
        incorrect_feedback: "Recent proposals actually indicate significant cuts to the U.S. Refugee Admissions Program's budget.",
        bridge_commentary: "Budgetary decisions reflect shifts in national priorities regarding humanitarian aid and refugee support."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "The CBP One app was created to enable asylum-seekers and other humanitarian migrants to make appointments at a port of entry to process their claims.",
        correct_answer: true,
        value: 16,
        correct_feedback: "True. The CBP One app was a key tool during the Biden administration for humanitarian migrants to seek entry and schedule appointments for credible fear claims.",
        incorrect_feedback: "Yes, the CBP One app was specifically designed to streamline the process for certain asylum-seekers to enter at ports of entry.",
        bridge_commentary: "Technology's role in managing migration flows can be a point of both efficiency and contention."
    },
    {
        type: "tf_question",
        stance: "humanitarian",
        question: "Even with current legal and policy changes, most opportunities for immigrants to enter the U.S. seeking asylum have been preserved.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False. Many observers and reports indicate that recent policy shifts have virtually eliminated or significantly restricted opportunities for immigrants to enter the U.S. seeking asylum.",
        incorrect_feedback: "Current policy changes have largely constrained asylum pathways, making it much harder for individuals to seek protection.",
        bridge_commentary: "Changes in asylum policy reflect evolving national security and humanitarian perspectives on border management."
    },

    // TRUE/FALSE QUESTIONS - Security-First Perspective (7 questions from original + 10 new = 17 total)
    {
        type: "tf_question",
        stance: "security_first",
        question: "Border Patrol encounters reached record levels in recent years, indicating substantial challenges in border security.",
        correct_answer: true,
        value: 16,
        correct_feedback: "True. Over 2.76 million migrant encounters were recorded in 2022, creating enforcement challenges.",
        incorrect_feedback: "Border encounters have indeed reached historically high levels in recent years.",
        bridge_commentary: "High encounter numbers reflect both migration pressures and the complexity of border management."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "Immigration courts are severely backlogged, undermining the rule of law and creating delays in deportation proceedings.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct. Court backlogs mean cases take years to resolve, creating legal uncertainty.",
        incorrect_feedback: "Immigration court backlogs do create significant delays in legal proceedings.",
        bridge_commentary: "Court capacity affects both enforcement effectiveness and fair legal processes for immigrants."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "Document fraud and identity theft are significant concerns in immigration enforcement, affecting both security and legal immigrants.",
        correct_answer: true,
        value: 15,
        correct_feedback: "True. Document fraud undermines security screening and harms legal immigrants whose identities may be stolen.",
        incorrect_feedback: "Document fraud is indeed a serious concern that affects immigration system integrity.",
        bridge_commentary: "Security concerns about fraud affect everyone's confidence in the immigration system\'s integrity."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "Border communities often bear disproportionate costs from immigration influxes without adequate federal support.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct. Border communities face housing, healthcare, and service demands that strain local resources.",
        incorrect_feedback: "Border communities do face significant resource pressures that require federal attention.",
        bridge_commentary: "Local community impacts show how immigration affects real places and people, not just abstract policy."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "Current immigration enforcement agencies are understaffed relative to the scale of unauthorized immigration.",
        correct_answer: true,
        value: 17,
        correct_feedback: "True. ICE and border patrol capacity hasn't kept pace with enforcement demands.",
        incorrect_feedback: "Enforcement capacity is indeed strained relative to current immigration levels.",
        bridge_commentary: "Capacity mismatches create challenges for both effective enforcement and humane treatment."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "Background screening for asylum seekers and other immigrants is limited by lack of reliable records from many origin countries.",
        correct_answer: true,
        value: 18,
        correct_feedback: "Correct. Many countries lack reliable criminal justice records, making thorough screening difficult.",
        incorrect_feedback: "Screening challenges are real due to limited records and cooperation from some origin countries.",
        bridge_commentary: "Screening limitations create legitimate security concerns while affecting people fleeing dangerous situations."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "Legal immigration backlogs are so severe that people wait decades for green cards, encouraging illegal entry.",
        correct_answer: true,
        value: 17,
        correct_feedback: "True. Some categories have 20+ year waits, creating incentives for unauthorized entry.",
        incorrect_feedback: "Legal immigration delays do create pressure for people to circumvent the system.",
        bridge_commentary: "Legal system dysfunction affects both orderly processes and respect for immigration law."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "Border Patrol encountered 8,725 illegal aliens crossing the southwest border between ports of entry in May 2025, which was a significant increase from May 2024.",
        correct_answer: false,
        value: 16,
        correct_feedback: "False. The 8,725 encounters in May 2025 represented a 93% *decrease* from May 2024, when Border Patrol encountered 117,905 aliens.",
        incorrect_feedback: "Actually, Border Patrol encounters at the southwest border dramatically *decreased* in May 2025 compared to the previous year.",
        bridge_commentary: "Recent border statistics show a notable shift in encounter numbers, reflecting changing enforcement dynamics."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "The U.S. Customs and Border Protection (CBP) is increasingly integrating advanced technologies like AI and machine learning to improve border security and operational efficiency.",
        correct_answer: true,
        value: 15,
        correct_feedback: "True. CBP plans to rapidly integrate AI, machine learning, and data analytics to enhance threat identification and resource allocation.",
        incorrect_feedback: "Yes, CBP is actively investing in cutting-edge technologies to modernize its border security operations.",
        bridge_commentary: "Technological advancements are reshaping the future of border management, offering new tools for security."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "Mass deportation policies have been shown to consistently lead to increased wages and job opportunities for U.S.-born workers.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False. Research from Trump\'s first term indicates that previous mass deportations did *not* lead to increased wages or job opportunities for U.S.-born workers; instead, they sometimes lowered wages and contributed to job losses.",
        incorrect_feedback: "Economic research suggests that mass deportations do not necessarily translate to improved labor market outcomes for native-born workers.",
        bridge_commentary: "The economic impacts of mass deportation are complex and often counterintuitive, affecting various sectors of the economy."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "The U.S. immigration system\'s current complexities are primarily due to insufficient infrastructure rather than changes in migration patterns.",
        correct_answer: false,
        value: 16,
        correct_feedback: "False. Over the past decade, there has been a fundamental change in migration patterns, leading to greater displacement and placing significant strain on the outdated immigration system.",
        incorrect_feedback: "The increased complexities in the U.S. immigration system are largely driven by evolving global migration patterns, not just infrastructure.",
        bridge_commentary: "Understanding the root causes of increased migration is essential for developing effective and humane policies."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "Project 2025, a policy blueprint for a future administration, aims to significantly increase the number of H-1 and H-2 temporary visas issued.",
        correct_answer: false,
        value: 18,
        correct_feedback: "False. Project 2025 calls for rule changes that would dramatically *reduce* the number of H-1 and H-2 temporary visas issued.",
        incorrect_feedback: "Project 2025's blueprint actually suggests a substantial reduction in temporary visa programs.",
        bridge_commentary: "Policy blueprints can signal significant shifts in immigration priorities, impacting various aspects of the system."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "CBP reported a 191% decrease in heroin seizures from April to May 2025.",
        correct_answer: false,
        value: 15,
        correct_feedback: "False. CBP reported a 191% *increase* in heroin seizures from April to May 2025.",
        incorrect_feedback: "Actually, heroin seizures by CBP saw a notable increase during that period.",
        bridge_commentary: "Drug interdiction statistics highlight ongoing challenges at the border beyond simply managing human migration."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "The US Customs and Border Protection (CBP) is currently exploring public-private programs primarily focused on increasing physical wall construction.",
        correct_answer: false,
        value: 16,
        correct_feedback: "False. Collaborative public-private programs under CBP are focused on infrastructure improvements, non-intrusive inspection technologies, and mobile biometric and inspection solutions, not just physical walls.",
        incorrect_feedback: "CBP's public-private initiatives are more broadly focused on technology and infrastructure improvements beyond just physical barriers.",
        bridge_commentary: "Modern border security strategies often involve a multi-faceted approach, combining various tools and partnerships."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "The Unauthorized Immigrant Population in the U.S. significantly decreased between mid-2022 and mid-2023.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False. The U.S. unauthorized immigrant population *increased* to 13.7 million as of mid-2023, driven by economic recovery and displacement in Latin America.",
        incorrect_feedback: "The unauthorized immigrant population actually expanded during that period due to various factors.",
        bridge_commentary: "Population dynamics are complex and influenced by a variety of push and pull factors, both domestic and international."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "Restricting work permits for asylum-seekers is a proposed policy change that could lead to faster resolution of asylum claims by USCIS.",
        correct_answer: false,
        value: 18,
        correct_feedback: "False. While a proposed regulation would prevent most asylum-seekers from obtaining work permits until claims are decided, meeting the 180-day processing average for all asylum claims is considered exceedingly difficult, potentially leading to longer waits for work authorization.",
        incorrect_feedback: "The proposed restrictions on work permits for asylum-seekers are not expected to guarantee faster processing times given current backlogs.",
        bridge_commentary: "Policies around work authorization for asylum-seekers have significant implications for both individual well-being and systemic efficiency."
    },
    {
        type: "tf_question",
        stance: "security_first",
        question: "The \'Remain in Mexico\' policy was a new initiative introduced in 2025 to control border crossings.",
        correct_answer: false,
        value: 16,
        correct_feedback: "False. The \'Remain in Mexico\' policy (Migrant Protection Protocols) was reinstated or changed in treatment in earlier years, not newly introduced in 2025.",
        incorrect_feedback: "The \'Remain in Mexico\' policy is not a new concept; it has been part of border policy discussions and implementations in prior years.",
        bridge_commentary: "Understanding the history of border policies helps clarify current debates and their potential impacts."
    },


    // MULTIPLE CHOICE QUESTIONS (10 from original + 15 new = 25 total)
    {
        type: "mc_question",
        stance: "neutral",
        question: "According to the Congressional Budget Office, what will be the economic impact of recent immigration surges through 2034?",
        options: {
            "A": "GDP will decline by $1 trillion due to increased costs",
            "B": "GDP will increase by $8.9 trillion with net positive fiscal impact",
            "C": "Economic impact will be negligible",
            "D": "Costs will exactly offset benefits"
        },
        correct_answer_key: "B",
        value: 22,
        correct_feedback: "Correct! CBO projects $8.9 trillion GDP boost with $900 billion deficit reduction through 2034.",
        incorrect_feedback: "CBO analysis shows substantial economic benefits from recent immigration patterns.",
        bridge_commentary: "Comprehensive economic analysis suggests immigration benefits outweigh costs at the national level."
    },
    {
        type: "mc_question",
        stance: "security_first",
        question: "What approach has proven most effective at reducing unauthorized border crossings historically?",
        options: {
            "A": "Physical barriers alone",
            "B": "Increased penalties for crossing",
            "C": "Comprehensive enforcement plus legal pathways",
            "D": "Technology surveillance only"
        },
        correct_answer_key: "C",
        value: 20,
        correct_feedback: "Correct! Combined enforcement with legal alternatives has shown the best results historically.",
        incorrect_feedback: "Research shows comprehensive approaches work better than single enforcement tactics.",
        bridge_commentary: "Effective border security requires both strong enforcement and realistic legal alternatives."
    },
    {
        type: "mc_question",
        stance: "humanitarian",
        question: "Which factor most strongly predicts successful immigrant integration into American society?",
        options: {
            "A": "Country of origin",
            "B": "English language acquisition and education access",
            "C": "Age at arrival only",
            "D": "Initial income level"
        },
        correct_answer_key: "B",
        value: 19,
        correct_feedback: "Correct! Language skills and education access are the strongest predictors of integration success.",
        incorrect_feedback: "Research consistently shows language and education are key integration factors.",
        bridge_commentary: "Integration success depends more on opportunities and skills than on background characteristics."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "How does immigration affect wages for native-born workers according to most economic research?",
        options: {
            "A": "Always reduces wages significantly",
            "B": "Small negative effects on some workers, positive overall economic effects",
            "C": "No measurable effects",
            "D": "Only benefits high-skilled workers"
        },
        correct_answer_key: "B",
        value: 21,
        correct_feedback: "Correct! Small wage effects on some groups, but overall economic growth benefits most workers.",
        incorrect_feedback: "Economic research shows complex effects with overall net benefits for the economy.",
        bridge_commentary: "Labor market effects vary by skill level and location, requiring nuanced policy responses."
    },
    {
        type: "mc_question",
        stance: "humanitarian",
        question: "What percentage of asylum seekers who receive work authorization become self-sufficient within five years?",
        options: {
            "A": "Less than 40%",
            "B": "About 60%",
            "C": "Over 80%",
            "D": "Nearly 100%"
        },
        correct_answer_key: "C",
        value: 18,
        correct_feedback: "Correct! Over 80% of asylum seekers with work authorization become self-sufficient within five years.",
        incorrect_feedback: "Asylum seekers show high rates of economic self-sufficiency when given work opportunities.",
        bridge_commentary: "Work authorization appears critical for helping asylum seekers become contributing members of society."
    },
    {
        type: "mc_question",
        stance: "security_first",
        question: "According to recent analysis, what would mass deportation of 11 million unauthorized immigrants cost?",
        options: {
            "A": "Under $50 billion total",
            "B": "Over $150 billion plus $15 billion annually for border security",
            "C": "About $100 billion one-time cost",
            "D": "Costs would be offset by savings"
        },
        correct_answer_key: "B",
        value: 20,
        correct_feedback: "Correct! Estimates exceed $150 billion plus ongoing costs, making it extremely expensive.",
        incorrect_feedback: "Mass deportation would involve enormous costs that exceed most government programs.",
        bridge_commentary: "The scale and cost of mass deportation raise questions about feasibility and resource allocation."
    },
    {
        type: "mc_question",
        stance: "humanitarian",
        question: "What percentage of Fortune 500 companies were founded by immigrants or their children?",
        options: {
            "A": "About 20%",
            "B": "Around 30%",
            "C": "Over 40%",
            "D": "Less than 15%"
        },
        correct_answer_key: "C",
        value: 19,
        correct_feedback: "Correct! Over 40% of Fortune 500 companies have immigrant founders, showing entrepreneurial impact.",
        incorrect_feedback: "Immigrants and their children have founded a remarkably high percentage of major American companies.",
        bridge_commentary: "Entrepreneurship data suggests immigration drives innovation and business creation at the highest levels."
    },
    {
        type: "mc_question",
        stance: "security_first",
        question: "What has proven most effective for border surveillance and interdiction?",
        options: {
            "A": "Physical walls only",
            "B": "Technology sensors and drones only",
            "C": "Human agents only",
            "D": "Integrated technology, physical barriers, and personnel"
        },
        correct_answer_key: "D",
        value: 18,
        correct_feedback: "Correct! Border Patrol reports best results from integrated approaches using all available tools.",
        incorrect_feedback: "Border security experts recommend layered approaches rather than relying on single solutions.",
        bridge_commentary: "Effective border security requires sophisticated coordination of multiple tools and approaches."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "Which communities show the best immigrant integration outcomes?",
        options: {
            "A": "Large cities only",
            "B": "Rural areas only",
            "C": "Communities with strong civic institutions and economic opportunities",
            "D": "Wealthy suburbs only"
        },
        correct_answer_key: "C",
        value: 20,
        correct_feedback: "Correct! Strong institutions and economic opportunity matter more than community size or wealth.",
        incorrect_feedback: "Research shows institutional strength and opportunity drive integration success across community types.",
        bridge_commentary: "Integration success depends on community capacity and welcoming institutions rather than demographics alone."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "When countries expand legal immigration pathways, what typically happens to unauthorized immigration?",
        options: {
            "A": "Unauthorized immigration increases",
            "B": "No measurable change",
            "C": "Unauthorized immigration decreases substantially",
            "D": "Effects vary randomly"
        },
        correct_answer_key: "C",
        value: 21,
        correct_feedback: "Correct! Legal pathways typically reduce pressure for unauthorized entry when properly implemented.",
        incorrect_feedback: "Countries that expand legal pathways generally see reductions in unauthorized immigration.",
        bridge_commentary: "Legal alternatives appear to be effective tools for managing immigration flows in orderly ways."
    },
    {
        type: "mc_question",
        stance: "humanitarian",
        question: "What percentage of the U.S. total population did immigrants comprise in 2023, and what was their contribution to five-year population growth?",
        options: {
            "A": "10% of population; 15% of growth",
            "B": "14.3% of population; almost two-fifths of growth",
            "C": "20% of population; half of growth",
            "D": "12% of population; one-quarter of growth"
        },
        correct_answer_key: "B",
        value: 22,
        correct_feedback: "Correct! Immigrants comprised 14.3% of the population and accounted for almost two-fifths of the country's five-year population growth in 2023.",
        incorrect_feedback: "Immigrants made up 14.3% of the U.S. population and contributed significantly to recent population growth.",
        bridge_commentary: "Demographic data highlights the critical role of immigration in maintaining and growing the U.S. population."
    },
    {
        type: "mc_question",
        stance: "security_first",
        question: "Which of the following is a primary concern for border security regarding document fraud and identity theft?",
        options: {
            "A": "It only impacts unauthorized immigrants.",
            "B": "It only impacts security screening, not legal immigrants.",
            "C": "It undermines security screening and harms legal immigrants whose identities may be stolen.",
            "D": "It has no significant impact on the immigration system."
        },
        correct_answer_key: "C",
        value: 20,
        correct_feedback: "Correct! Document fraud and identity theft undermine security and can directly harm legal immigrants through stolen identities.",
        incorrect_feedback: "Document fraud is a serious issue that affects both national security and the integrity of the legal immigration process.",
        bridge_commentary: "The integrity of documentation is a shared concern for both security and fairness within the immigration system."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "How has the flow of humanitarian and unauthorized migrants at the U.S. border changed in early 2025 compared to previous years, according to Brookings?",
        options: {
            "A": "Substantially increased",
            "B": "Remained stable",
            "C": "Dramatically declined",
            "D": "Shifted entirely to northern borders"
        },
        correct_answer_key: "C",
        value: 21,
        correct_feedback: "Correct! Border flows, including humanitarian migrants, have dramatically declined in early 2025.",
        incorrect_feedback: "Recent data indicates a significant decrease in border flows for humanitarian and unauthorized migrants.",
        bridge_commentary: "Understanding the latest trends in migration flows is crucial for informed policy discussions."
    },
    {
        type: "mc_question",
        stance: "humanitarian",
        question: "What proportion of doctors and nurses in America are foreign-born, highlighting their essential role in healthcare delivery?",
        options: {
            "A": "Less than 10% of both",
            "B": "One in four doctors and one in six nurses",
            "C": "Half of all doctors and nurses",
            "D": "Only a small fraction in specialized fields"
        },
        correct_answer_key: "B",
        value: 19,
        correct_feedback: "Correct! One in four doctors and one in six nurses are foreign-born, making them critical to the healthcare system.",
        incorrect_feedback: "Foreign-born professionals constitute a significant portion of the U.S. healthcare workforce.",
        bridge_commentary: "Immigrants play a vital, often unrecognized, role in providing essential services across the nation."
    },
    {
        type: "mc_question",
        stance: "security_first",
        question: "What is the approximate average wait time for cases in immigration courts, contributing to delays in legal proceedings and deportation effectiveness?",
        options: {
            "A": "Less than 1 year",
            "B": "1-2 years",
            "C": "2-3 years",
            "D": "4+ years"
        },
        correct_answer_key: "D",
        value: 20,
        correct_feedback: "Correct! Immigration courts have over 1.5 million pending cases, with average wait times exceeding 4 years.",
        incorrect_feedback: "Immigration court backlogs are severe, leading to very long wait times for case resolution.",
        bridge_commentary: "The efficiency of the legal system directly impacts both individual lives and national enforcement capabilities."
    },
    {
        type: "mc_question",
        stance: "humanitarian",
        question: "Which industries are foreign-born workers significantly overrepresented in, filling critical roles, especially since the pandemic?",
        options: {
            "A": "Finance and IT only",
            "B": "Healthcare, agriculture, and construction",
            "C": "Education and government",
            "D": "Media and entertainment"
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "Correct! Immigrants are concentrated in essential sectors like healthcare, agriculture, and construction, crucial during worker shortages.",
        incorrect_feedback: "Foreign-born workers are indeed vital to several key essential industries in the U.S.",
        bridge_commentary: "Recognizing the sectoral contributions of immigrants highlights their integral role in the American economy."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is the projected impact of a 30% decline in legal immigration on annual U.S. economic growth, according to the National Foundation for American Policy?",
        options: {
            "A": "Increase by 0.50%",
            "B": "Reduce to just 0.30%",
            "C": "No measurable effect",
            "D": "Double the growth rate"
        },
        correct_answer_key: "B",
        value: 22,
        correct_feedback: "Correct! A 30% decline in legal immigration is projected to reduce annual economic growth to just 0.30%.",
        incorrect_feedback: "Significant reductions in legal immigration could have a notable negative impact on economic growth.",
        bridge_commentary: "Economic projections offer insights into the long-term consequences of changes in immigration policy."
    },
    {
        type: "mc_question",
        stance: "security_first",
        question: "Where does over 90% of fentanyl entering the U.S. typically come through?",
        options: {
            "A": "Between ports of entry (illegal crossings)",
            "B": "Legal border crossings (ports of entry)",
            "C": "Air cargo without inspection",
            "D": "Maritime routes from South America"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct! Over 90% of fentanyl enters through legal border crossings, indicating the complexity of drug interdiction efforts.",
        incorrect_feedback: "Most fentanyl seized at the border is found at official points of entry.",
        bridge_commentary: "Drug trafficking challenges underscore that border security encompasses more than just unauthorized human migration."
    },
    {
        type: "mc_question",
        stance: "humanitarian",
        question: "What percentage of Nobel Prizes awarded to Americans since 2000 have been won by immigrants?",
        options: {
            "A": "Less than 10%",
            "B": "About 20%",
            "C": "38%",
            "D": "Over 50%"
        },
        correct_answer_key: "C",
        value: 19,
        correct_feedback: "Correct! Immigrants have won 38% of Nobel Prizes awarded to Americans since 2000, showcasing their contribution to innovation.",
        incorrect_feedback: "Immigrants have received a significant proportion of Nobel Prizes awarded in the U.S., highlighting their impact on research.",
        bridge_commentary: "Excellence in science and innovation is often bolstered by diverse talent drawn from around the globe."
    },
    {
        type: "mc_question",
        stance: "humanitarian",
        question: "In 2023, what was the estimated total tax contribution of undocumented immigrant households in federal, state, and local taxes?",
        options: {
            "A": "Less than $10 billion",
            "B": "$35.7 billion",
            "C": "$89.8 billion",
            "D": "Over $150 billion"
        },
        correct_answer_key: "C",
        value: 20,
        correct_feedback: "Correct! Undocumented immigrant households paid an estimated $89.8 billion in federal, state, and local taxes in 2023.",
        incorrect_feedback: "Undocumented immigrants contribute substantially to the U.S. tax base at all levels of government.",
        bridge_commentary: "The economic contributions of all residents, regardless of status, play a role in funding public services."
    },
    {
        type: "mc_question",
        stance: "security_first",
        question: "Which factor complicates thorough background screening for asylum seekers due to lack of reliable data from many origin countries?",
        options: {
            "A": "Limited language translation services",
            "B": "Massive volume of applications",
            "C": "Lack of reliable criminal justice records",
            "D": "Insufficient technology at border checkpoints"
        },
        correct_answer_key: "C",
        value: 18,
        correct_feedback: "Correct! Many countries lack reliable criminal justice records, making comprehensive background screening difficult.",
        incorrect_feedback: "The absence of complete and trustworthy records from origin countries is a key challenge in screening processes.",
        bridge_commentary: "Security concerns are legitimate when reliable information is scarce, impacting both individuals and national safety."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What percentage of Americans, according to polls, support both stronger border security AND pathways to legal status for longtime residents?",
        options: {
            "A": "Less than 30%",
            "B": "About 50%",
            "C": "70%",
            "D": "Nearly 90%"
        },
        correct_answer_key: "C",
        value: 20,
        correct_feedback: "Correct! Polls show 70% of Americans support both stronger border security AND pathways to legal status, indicating a desire for comprehensive solutions.",
        incorrect_feedback: "A significant majority of Americans favor a dual approach to immigration, combining enforcement with legalization pathways.",
        bridge_commentary: "Public opinion often reveals a more nuanced perspective on complex issues than political rhetoric might suggest."
    },
    {
        type: "mc_question",
        stance: "humanitarian",
        question: "What is the long-term impact of immigrant integration research on second and third generations?",
        options: {
            "A": "Second generation struggles, third generation struggles",
            "B": "Second generation succeeds, third generation fully assimilates culturally",
            "C": "All generations struggle equally",
            "D": "Only first generation assimilates"
        },
        correct_answer_key: "B",
        value: 19,
        correct_feedback: "Correct! Research shows first generation struggles, second generation succeeds, and the third generation fully assimilates culturally.",
        incorrect_feedback: "Integration research indicates a generational progression towards greater success and cultural assimilation.",
        bridge_commentary: "Understanding generational patterns helps us appreciate the long-term process of integration and adaptation."
    },
    {
        type: "mc_question",
        stance: "security_first",
        question: "Which of the following is NOT a planned technological advancement for U.S. Customs and Border Protection (CBP) in FY 2025?",
        options: {
            "A": "Integration of Artificial Intelligence (AI) and Machine Learning (ML)",
            "B": "Deployment of unmanned aerial vehicles (UAVs) and multi-role aircraft",
            "C": "Procurement of large-scale imaging systems and handheld mass spectrometry",
            "D": "Elimination of all human agents on the border, replaced by robotics"
        },
        correct_answer_key: "D",
        value: 20,
        correct_feedback: "Correct! While CBP is investing heavily in technology, there is no plan to eliminate all human agents; rather, technology will support and optimize their operations.",
        incorrect_feedback: "CBP's technological advancements aim to enhance, not replace, the role of human agents in border security.",
        bridge_commentary: "The future of border security lies in a synergy between advanced technology and skilled human professionals."
    },
    {
        type: "mc_question",
        stance: "humanitarian",
        question: "According to a UCLA study, what would be the impact on U.S. GDP over the next decade if pathways to citizenship for immigrants were expanded?",
        options: {
            "A": "A decrease of $500 billion",
            "B": "No significant change",
            "C": "An increase of up to $1.7 trillion",
            "D": "An increase of $50 billion"
        },
        correct_answer_key: "C",
        value: 22,
        correct_feedback: "Correct! A UCLA study found that expanding pathways to citizenship could increase U.S. GDP by up to $1.7 trillion over the next decade.",
        incorrect_feedback: "Research indicates substantial economic benefits, including GDP growth, from policies that offer pathways to citizenship.",
        bridge_commentary: "Policies that facilitate integration can unlock significant economic potential, benefiting the entire nation."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is a major factor that can lead to population decline in regions affected by climate change within the United States?",
        options: {
            "A": "Increased tourism",
            "B": "Improved infrastructure",
            "C": "Extreme heat, water shortages, and rising sea levels making areas difficult to live in",
            "D": "Expansion of agricultural land"
        },
        correct_answer_key: "C",
        value: 21,
        correct_feedback: "Correct! Extreme heat, water shortages, and rising sea levels are making certain regions in the U.S. increasingly difficult to live in, leading to population decline.",
        incorrect_feedback: "Climate change impacts, such as severe weather and resource scarcity, are directly contributing to population shifts within the U.S.",
        bridge_commentary: "Climate change is not just an environmental issue; it\'s a demographic one, influencing where and how people can live."
    },

    // FACTOIDS - Humanitarian Perspective (5 from original + 2 new = 7 total)
    {
        type: "factoid",
        stance: "humanitarian",
        text: "One in four doctors and one in six nurses in America are foreign-born, making immigrants essential to healthcare delivery, especially in underserved areas.",
        value: 14,
        bridge_commentary: "Healthcare workforce data shows how immigration fills critical gaps in essential services that all Americans depend on."
    },
    {
        type: "factoid",
        stance: "humanitarian",
        text: "Over 760,000 immigrants currently serve in the US military or are veterans, with thousands more enlisting each year to serve their adopted country.",
        value: 15,
        bridge_commentary: "Military service demonstrates how immigrants contribute to national defense and earn their place in American society."
    },
    {
        type: "factoid",
        stance: "humanitarian",
        text: "Foreign-born workers make up over 50% of agricultural workers, producing the food that feeds America despite often facing dangerous working conditions and low wages.",
        value: 13,
        bridge_commentary: "Agricultural dependence on immigrant labor shows the complex relationship between immigration and essential economic sectors."
    },
    {
        type: "factoid",
        stance: "humanitarian",
        text: "With US birth rates below replacement level, immigration is the only reason America\'s population continues growing, preventing the aging crisis facing countries like Japan.",
        value: 16,
        bridge_commentary: "Demographic trends suggest immigration may be essential for maintaining economic growth and supporting social programs."
    },
    {
        type: "factoid",
        stance: "humanitarian",
        text: "Since 2000, immigrants have won 38% of Nobel Prizes awarded to Americans, demonstrating the global talent that immigration brings to US research and innovation.",
        value: 17,
        bridge_commentary: "Scientific achievement patterns suggest that immigration enhances America\'s competitive edge in the global knowledge economy."
    },
    {
        type: "factoid",
        stance: "humanitarian",
        text: "In 2023, immigrants comprised 28.4% of the nation's health aides and 15.9% of its nurses, filling critical staffing shortages in the healthcare industry.",
        value: 15,
        bridge_commentary: "The reliance on immigrant workers in healthcare underscores their indispensable role in maintaining public health services."
    },
    {
        type: "factoid",
        stance: "humanitarian",
        text: "Immigrants are 80% more likely to start a business than native-born citizens and are responsible for 42% more new jobs.",
        value: 16,
        bridge_commentary: "This highlights the significant entrepreneurial drive within immigrant communities and their role as job creators in the U.S. economy."
    },

    // FACTOIDS - Security-First Perspective (5 from original + 2 new = 7 total)
    {
        type: "factoid",
        stance: "security_first",
        text: "The US spends over $18 billion annually on immigration enforcement, more than all other federal criminal law enforcement agencies combined.",
        value: 14,
        bridge_commentary: "Enforcement spending levels reflect both the scale of unauthorized immigration and the costs of maintaining border security."
    },
    {
        type: "factoid",
        stance: "security_first",
        text: "Immigration courts have over 1.5 million pending cases, with average wait times of 4+ years, undermining both swift justice and deportation effectiveness.",
        value: 15,
        bridge_commentary: "System backlogs create problems for everyone - those seeking protection can\'t get quick decisions, and enforcement can\'t proceed efficiently."
    },
    {
        type: "factoid",
        stance: "security_first",
        text: "Border counties spend 3x more per capita on emergency medical care for undocumented immigrants than non-border counties, straining local budgets.",
        value: 13,
        bridge_commentary: "Local cost disparities show how immigration impacts are unevenly distributed, requiring federal attention to affected communities."
    },
    {
        type: "factoid",
        stance: "security_first",
        text: "Over 90% of fentanyl enters the US through legal border crossings, not between ports of entry, showing the complexity of border security challenges.",
        value: 16,
        bridge_commentary: "Drug trafficking patterns reveal that border security involves more than just preventing unauthorized crossings."
    },
    {
        type: "factoid",
        stance: "security_first",
        text: "Immigration detention facilities operate at 90%+ capacity, creating overcrowding and limiting effective case processing and deportation operations.",
        value: 14,
        bridge_commentary: "Detention capacity constraints affect both enforcement effectiveness and conditions for people in immigration proceedings."
    },
    {
        type: "factoid",
        stance: "security_first",
        text: "In May 2025, U.S. Customs and Border Protection (CBP) seized 718 pounds of fentanyl, reflecting ongoing efforts to interdict dangerous drugs at the border.",
        value: 15,
        bridge_commentary: "These statistics highlight the continuous challenges and successes in combating illegal drug flows across the border."
    },
    {
        type: "factoid",
        stance: "security_first",
        text: "The U.S. has bolstered its presence at the southern border with nearly 7,000 military troops and deputized members of state National Guards to support Border Patrol.",
        value: 16,
        bridge_commentary: "The deployment of military personnel underscores the significant resources committed to border security and management."
    },

    // FACTOIDS - Neutral/Bridge-Building (5 from original + 2 new = 7 total)
    {
        type: "factoid",
        stance: "neutral",
        text: "The last major immigration reform (1986) was signed by Republican President Reagan and supported by both parties, showing immigration can unite across party lines.",
        value: 12,
        bridge_commentary: "Historical bipartisan cooperation on immigration suggests that common ground solutions are possible when political will exists."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Immigration flows naturally respond to US economic conditions - rising during labor shortages and falling during recessions, showing market responsiveness.",
        value: 13,
        bridge_commentary: "Economic responsiveness suggests that immigration patterns partly self-regulate based on opportunity and demand."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "States like Utah have combined strong enforcement with immigrant integration programs, achieving both border security and economic growth.",
        value: 15,
        bridge_commentary: "State-level innovations show that comprehensive approaches can address both security and integration concerns simultaneously."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Polls show 70% of Americans support both stronger border security AND pathways to legal status for longtime residents, rejecting either-or approaches.",
        value: 14,
        bridge_commentary: "Public opinion suggests most Americans want comprehensive solutions rather than choosing between security and compassion."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Research shows immigrant integration follows predictable patterns: first generation struggles, second generation succeeds, third generation fully assimilates culturally.",
        value: 13,
        bridge_commentary: "Integration research provides evidence-based expectations for how immigration affects communities over generational timescales."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "The Congressional Budget Office (CBO) estimated overall net migration of 3.3 million in 2023, including a significant increase in 'other foreign nationals' above historical norms.",
        value: 16,
        bridge_commentary: "Official estimates provide a snapshot of recent migration trends, highlighting shifts in demographics and entry categories."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Mexican cooperation in migration management is at far higher levels in 2025 compared to 2019, giving Mexico greater leverage in discussions with the U.S.",
        value: 15,
        bridge_commentary: "International partnerships are crucial in addressing complex migration challenges, with evolving dynamics between nations."
    },


    // PERSONAL STORIES (2 from original + 2 new = 4 total)
    {
        type: "factoid",
        stance: "humanitarian",
        text: "Dr. Maria Santos came to the US as a refugee from El Salvador at age 12. Today, she runs a clinic serving rural communities in Kansas where no American-born doctors wanted to practice.",
        value: 18,
        bridge_commentary: "Individual success stories show how refugee investment can pay dividends in underserved American communities decades later."
    },
    {
        type: "factoid",
        stance: "security_first",
        text: "Border Patrol Agent John Rodriguez says \'I see the human side every day - families seeking help and criminals exploiting them. We need both compassion and strong enforcement to protect everyone.\'",
        value: 17,
        bridge_commentary: "Frontline enforcement perspectives reveal the complexity of border reality beyond simple enforcement versus humanitarian narratives."
    },
    {
        type: "factoid",
        stance: "humanitarian",
        text: "Ahmed, a software engineer from Syria, arrived in the US on a humanitarian parole program. He quickly found a job in a tech startup and is now developing innovative AI solutions that could impact millions of users.",
        value: 18,
        bridge_commentary: "This highlights the rapid integration and high-skilled contributions of individuals arriving through humanitarian pathways, underscoring their potential impact on American innovation."
    },
    {
        type: "factoid",
        stance: "security_first",
        text: "A recent report from a border town mayor stated, \'Our local resources are stretched thin by the influx, demonstrating the urgent need for federal funding to support critical services, not just enforcement.\'",
        value: 17,
        bridge_commentary: "Local community perspectives emphasize the significant strain on services and the necessity of comprehensive federal support for border regions, moving beyond a narrow focus on security."
    }
];
