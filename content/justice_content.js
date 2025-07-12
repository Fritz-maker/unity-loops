// Add this at the very beginning of your justice_content.js file
function getLoopContent() {
    return justiceContent;
}

// This file contains the content pool for the "Criminal Justice" loop.
// It must be loaded BEFORE game_logic.js in your HTML.
// 98 pieces matching climate content structure exactly

const justiceContent = [
    // === TRUE/FALSE QUESTIONS: Reform & Rehabilitation Stance (20 total: 12 true, 8 false) ===
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: States that invested heavily in Second Chance Act programs saw reincarceration rates drop by 23% since 2008.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Federal investment in evidence-based reentry programs across 48 states has dramatically reduced repeat incarceration.",
        incorrect_feedback: "Actually, the Second Chance Act's 1,200+ grantees serving over 400,000 people demonstrate rehabilitation's measurable effectiveness.",
        bridge_commentary: "The Bridge observes: Bipartisan federal investment in reentry programs shows how evidence-based policy can achieve public safety goals through rehabilitation."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation", 
        question: "TRUE or FALSE: Among first-time prisoners, only about one-third commit new offenses, challenging assumptions about inevitable criminal careers.",
        correct_answer: true,
        value: 18,
        correct_feedback: "Correct! Individual-focused studies show much lower reoffending rates, especially for first-time offenders.",
        incorrect_feedback: "First-timer data reveals that most people don't become career criminals, supporting early intervention approaches.",
        bridge_commentary: "The Bridge observes: First-time offender success rates suggest both the potential for redemption and the value of targeted intervention."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Prison education programs cost more than they save in reduced recidivism and crime prevention.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False! The RAND Corporation found that every dollar invested in prison education saves five dollars in reincarceration costs.",
        incorrect_feedback: "Prison education consistently shows both reduced reoffending and significant cost savings for taxpayers.",
        bridge_commentary: "The Bridge observes: Education programs demonstrate how rehabilitation investments can simultaneously improve outcomes and reduce costs."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Drug courts that combine treatment with supervision achieve 40% lower recidivism than traditional prosecution.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Specialty courts addressing underlying issues show consistently better outcomes than punishment alone.",
        incorrect_feedback: "Drug courts prove that treating addiction as a health issue rather than just criminal behavior reduces repeat offenses.",
        bridge_commentary: "The Bridge observes: Treatment-focused courts show how addressing root causes can achieve better public safety outcomes."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Most crime victims prefer harsh punishment over rehabilitation programs for offenders.",
        correct_answer: false,
        value: 18,
        correct_feedback: "False! Surveys show that victims often support both accountability and programs that prevent future victimization.",
        incorrect_feedback: "Many victims want justice that includes both consequences and efforts to prevent future crimes against others.",
        bridge_commentary: "The Bridge observes: Victim perspectives often include both accountability and prevention goals, suggesting balanced approaches may serve victim needs."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Mental health courts reduce jail bookings by 60% for participants with serious mental illness.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct! Specialized courts addressing mental health needs dramatically reduce the criminalization of mental illness.",
        incorrect_feedback: "Mental health courts prove that treatment-focused approaches prevent cycling through the justice system.",
        bridge_commentary: "The Bridge observes: Mental health courts demonstrate how treating underlying conditions improves both individual and public safety."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Community supervision has higher failure rates than prison for violent offenders.",
        correct_answer: false,
        value: 15,
        correct_feedback: "False! When properly implemented, community supervision achieves similar public safety outcomes at 90% lower cost.",
        incorrect_feedback: "Community supervision provides cost-effective public safety with proper programming and support.",
        bridge_commentary: "The Bridge observes: Cost-effective supervision shows how smart justice policies can protect communities while saving taxpayer money."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Restorative justice programs increase victim satisfaction rates to over 90% compared to 34% in traditional court.",
        correct_answer: true,
        value: 19,
        correct_feedback: "Correct! Victims report much higher satisfaction when they can participate directly in the justice process.",
        incorrect_feedback: "Restorative justice gives victims voice and agency that traditional prosecution often lacks.",
        bridge_commentary: "The Bridge observes: Restorative approaches can better serve victim needs while promoting offender accountability."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Rehabilitation programs are too expensive for most states to implement effectively.",
        correct_answer: false,
        value: 14,
        correct_feedback: "False! Most evidence-based programs pay for themselves through reduced reoffending and lower incarceration costs.",
        incorrect_feedback: "Evidence-based rehabilitation typically saves money while improving outcomes compared to incarceration alone.",
        bridge_commentary: "The Bridge observes: Cost-effective programming demonstrates that rehabilitation can be fiscally responsible while improving public safety."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: States with higher rehabilitation spending have 13% lower recidivism rates than high-punishment states.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Research shows clear correlation between rehabilitation investment and reduced reoffending.",
        incorrect_feedback: "Cross-state comparisons consistently show that rehabilitation-focused states achieve better public safety outcomes.",
        bridge_commentary: "The Bridge observes: State-level data demonstrates that rehabilitation strategies produce measurable improvements in public safety."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Cognitive behavioral therapy in prison reduces violent reoffending by 30% within three years.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct! CBT helps offenders develop problem-solving skills and emotional regulation that prevent future violence.",
        incorrect_feedback: "Evidence-based programming like CBT shows that people can learn to change harmful behavior patterns.",
        bridge_commentary: "The Bridge observes: Therapeutic interventions demonstrate that criminal behavior can be addressed through skill-building and treatment."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Private rehabilitation programs have no measurable impact on reducing recidivism compared to government programs.",
        correct_answer: false,
        value: 15,
        correct_feedback: "False! Both public and private evidence-based programs show effectiveness when properly implemented and monitored.",
        incorrect_feedback: "Effective programming depends more on evidence-based practices than on whether programs are public or private.",
        bridge_commentary: "The Bridge observes: Program effectiveness depends on evidence-based design rather than purely on funding source or management structure."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Family visitation programs reduce recidivism by 25% by maintaining crucial social support networks.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Strong family connections provide motivation and support that help people avoid reoffending.",
        incorrect_feedback: "Maintaining family bonds during incarceration creates the foundation for successful community reintegration.",
        bridge_commentary: "The Bridge observes: Family support demonstrates how relationships can be powerful tools for both accountability and rehabilitation."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Therapeutic communities in prison reduce drug-related reoffending by 50% compared to standard incarceration.",
        correct_answer: true,
        value: 18,
        correct_feedback: "Correct! Intensive treatment programs address the addiction that drives much criminal behavior.",
        incorrect_feedback: "Therapeutic communities prove that sustained treatment can break the cycle of addiction and crime.",
        bridge_commentary: "The Bridge observes: Addressing substance abuse through intensive treatment tackles one of the primary drivers of repeat offending."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Offenders who participate in rehabilitation programs are just manipulating the system to get early release.",
        correct_answer: false,
        value: 14,
        correct_feedback: "False! Research shows that program participants have genuinely lower recidivism rates, indicating real behavior change.",
        incorrect_feedback: "If programs were just manipulation, recidivism rates wouldn\'t actually drop for participants compared to non-participants.",
        bridge_commentary: "The Bridge observes: Measurable outcomes demonstrate that effective programs create genuine change rather than mere system manipulation."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Victim-offender mediation programs achieve 95% completion rates and high satisfaction for both parties.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct! When voluntary, these programs create meaningful dialogue and accountability that benefits everyone involved.",
        incorrect_feedback: "Mediation programs show that direct communication can achieve healing and understanding in appropriate cases.",
        bridge_commentary: "The Bridge observes: Facilitated dialogue can create understanding and closure that traditional prosecution cannot provide."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Reentry housing programs reduce homelessness among ex-offenders from 85% to 25% in the first year.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Stable housing is fundamental to successful reintegration and crime prevention.",
        incorrect_feedback: "Housing support addresses one of the biggest barriers to successful reentry and community safety.",
        bridge_commentary: "The Bridge observes: Stable housing provides the foundation for employment, family reunification, and crime-free living."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Reform advocates ignore the needs and rights of crime victims in favor of helping offenders.",
        correct_answer: false,
        value: 15,
        correct_feedback: "False! Modern reform focuses on preventing future victimization while ensuring accountability and victim support.",
        incorrect_feedback: "Effective reform serves both victim safety through crime prevention and offender accountability through evidence-based intervention.",
        bridge_commentary: "The Bridge observes: Comprehensive reform approaches recognize that preventing future crimes serves both victim interests and community safety."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Trauma-informed treatment reduces violent recidivism by 40% by addressing underlying psychological wounds.",
        correct_answer: true,
        value: 18,
        correct_feedback: "Correct! Addressing childhood trauma and PTSD helps people develop healthy coping mechanisms instead of violence.",
        incorrect_feedback: "Trauma treatment recognizes that many offenders are also victims who need healing to break cycles of harm.",
        bridge_commentary: "The Bridge observes: Trauma-informed care acknowledges that healing past wounds is often necessary to prevent future harm."
    },
    {
        type: "tf_question",
        stance: "reform_rehabilitation",
        question: "TRUE or FALSE: Community courts that address quality-of-life crimes through services reduce repeat arrests by 60%.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Addressing underlying issues like homelessness and mental illness prevents cycling through the system.",
        incorrect_feedback: "Community courts prove that connecting people to services works better than jail for low-level offenses.",
        bridge_commentary: "The Bridge observes: Problem-solving courts demonstrate how addressing root causes can improve both individual and community outcomes."
    },

    // === TRUE/FALSE QUESTIONS: Law & Order Stance (20 total: 12 true, 8 false) ===
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Property crime increased 6.7% in 2022 after 20 years of decline, coinciding with reduced prosecution in major cities.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct! The first property crime increase since 2001 occurred as many cities reduced enforcement of theft and drug crimes.",
        incorrect_feedback: "Rising property crime after two decades of improvement suggests consequences when enforcement is weakened.",
        bridge_commentary: "The Bridge observes: Property crime trends highlight the ongoing debate about the relationship between enforcement levels and public safety."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Violent crime rates fell dramatically from 1993-2010 during a period of increased incarceration and enhanced penalties.",
        correct_answer: true,
        value: 18,
        correct_feedback: "Correct! The 'Great Crime Decline' coincided with policies emphasizing deterrence and incapacitation of repeat offenders.",
        incorrect_feedback: "Historical data shows the strongest correlation between enhanced enforcement and reduced violent crime rates.",
        bridge_commentary: "The Bridge observes: The crime decline of the 1990s-2000s involved multiple factors, with enhanced enforcement playing a significant role."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Longer prison sentences always result in lower crime rates in communities.",
        correct_answer: false,
        value: 16,
        correct_feedback: "False! Research shows diminishing returns on sentence length - certainty of punishment deters more than severity alone.",
        incorrect_feedback: "While appropriate sentences are important, extremely long sentences don't always produce additional deterrent effects.",
        bridge_commentary: "The Bridge observes: Deterrence research suggests that swift, certain consequences may be more effective than purely harsh sentences."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Three-strikes laws reduced violent crime by 30% in states that implemented them consistently.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct! Enhanced penalties for repeat offenders both deter crime and prevent reoffending through incapacitation.",
        incorrect_feedback: "Three-strikes policies demonstrate how certainty of enhanced punishment can effectively reduce serious crime.",
        bridge_commentary: "The Bridge observes: Enhanced repeat offender penalties reflect the principle that justice should escalate consequences for persistent criminal behavior."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Private prisons cost taxpayers less than government-run facilities when all costs are included.",
        correct_answer: false,
        value: 18,
        correct_feedback: "False! Studies show private prisons often cost similar amounts while sometimes having higher recidivism and safety issues.",
        incorrect_feedback: "Comprehensive cost analyses suggest private prisons don't consistently deliver promised savings.",
        bridge_commentary: "The Bridge observes: Prison management decisions should focus on effectiveness and safety rather than purely cost considerations."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Broken Windows policing reduced major crime by 40% in cities that consistently addressed disorder.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Addressing minor crimes and disorder prevents escalation to serious offenses while improving quality of life.",
        incorrect_feedback: "Quality-of-life enforcement creates environments where serious crime cannot take root and flourish.",
        bridge_commentary: "The Bridge observes: Order maintenance policing reflects the belief that addressing small problems prevents larger ones."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Mandatory minimum sentencing laws have eliminated racial disparities in criminal justice.",
        correct_answer: false,
        value: 19,
        correct_feedback: "False! Despite mandatory minimums, significant racial disparities persist in arrests, charging, and sentencing.",
        incorrect_feedback: "Mandatory minimums haven't solved the problem of unequal treatment across racial groups in the justice system.",
        bridge_commentary: "The Bridge observes: Ensuring equal justice requires ongoing attention to disparities at all levels of the criminal justice system."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Police presence reduces crime by 15% per 10% increase in officer deployment, according to randomized studies.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct! Visible police presence creates deterrent effects that prevent crime before it occurs.",
        incorrect_feedback: "Police deployment studies consistently show that law enforcement visibility reduces criminal activity.",
        bridge_commentary: "The Bridge observes: Police presence research demonstrates how visible enforcement can prevent crime through deterrence."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Most criminals are deterred from committing crimes primarily by the fear of long prison sentences.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False! Research shows that certainty of being caught is a stronger deterrent than severity of punishment alone.",
        incorrect_feedback: "Deterrence studies indicate that criminals are more influenced by likelihood of apprehension than sentence length.",
        bridge_commentary: "The Bridge observes: Effective deterrence strategies should focus on both swift apprehension and appropriate consequences."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: DNA evidence has solved over 500,000 previously unsolved cases, demonstrating the importance of forensic investment.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Advanced forensic capabilities ensure that criminals cannot escape justice through technological limitations.",
        incorrect_feedback: "DNA technology proves that investment in law enforcement capabilities delivers justice for victims.",
        bridge_commentary: "The Bridge observes: Forensic advances show how technology can improve both crime solving and prevention of wrongful convictions."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Swift and certain sanctions reduce probation violations by 55% compared to traditional supervision.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct! Immediate consequences for violations create accountability that prevents escalation to new crimes.",
        incorrect_feedback: "Swift sanctions demonstrate that prompt accountability prevents minor violations from becoming major crimes.",
        bridge_commentary: "The Bridge observes: Swift sanctions show how accountability can work within both traditional and alternative justice approaches."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Enhanced prosecution strategies have completely eliminated domestic violence in communities where they're implemented.",
        correct_answer: false,
        value: 18,
        correct_feedback: "False! While enhanced prosecution reduces repeat abuse significantly, domestic violence remains a complex social problem requiring multiple approaches.",
        incorrect_feedback: "No single strategy completely eliminates domestic violence, though enhanced prosecution does provide important victim protection.",
        bridge_commentary: "The Bridge observes: Complex social problems like domestic violence benefit from coordinated approaches combining enforcement with support services."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Drug trafficking sentences that target suppliers reduce street-level availability by 60% in target areas.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Disrupting supply networks through enhanced penalties reduces drug availability and related crime.",
        incorrect_feedback: "Supply-focused enforcement demonstrates how targeting major traffickers can disrupt entire criminal enterprises.",
        bridge_commentary: "The Bridge observes: Drug trafficking enforcement illustrates the strategy of targeting criminal enterprises rather than just individual users."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Community prosecution programs that focus on disorder achieve 45% reductions in resident complaints.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct! Focused prosecution of quality-of-life crimes creates safer, more livable communities for law-abiding residents.",
        incorrect_feedback: "Community prosecution proves that addressing disorder improves quality of life for responsible citizens.",
        bridge_commentary: "The Bridge observes: Community prosecution demonstrates how enforcement can be tailored to specific neighborhood needs and concerns."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: All types of crimes respond equally well to enhanced enforcement and tougher penalties.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False! Different crimes respond to different strategies - some benefit more from enforcement, others from treatment or prevention.",
        incorrect_feedback: "Effective crime fighting requires tailored approaches that match strategies to specific crime types and causes.",
        bridge_commentary: "The Bridge observes: Different types of criminal behavior may require different combinations of enforcement, treatment, and prevention strategies."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Sex offender registries and enhanced monitoring reduce repeat sexual offenses by 40% over five years.",
        correct_answer: true,
        value: 18,
        correct_feedback: "Correct! Enhanced monitoring and registration create accountability that protects potential victims from dangerous predators.",
        incorrect_feedback: "Sex offender monitoring demonstrates how enhanced supervision can prevent the most serious crimes against vulnerable victims.",
        bridge_commentary: "The Bridge observes: Sex offender monitoring reflects society's commitment to protecting the most vulnerable potential victims."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Pretrial detention for violent offenders prevents 25% of them from committing new crimes while awaiting trial.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Pretrial detention of dangerous offenders directly prevents new crimes and protects public safety.",
        incorrect_feedback: "Pretrial detention demonstrates how incapacitation can provide immediate community protection.",
        bridge_commentary: "The Bridge observes: Pretrial detention policies balance individual liberty concerns with immediate public safety needs."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Enhanced penalties alone, without community support or treatment options, solve all crime problems in neighborhoods.",
        correct_answer: false,
        value: 15,
        correct_feedback: "False! While enforcement is important, most effective crime reduction combines law enforcement with community and social programs.",
        incorrect_feedback: "Comprehensive crime reduction typically requires both strong enforcement and community-based prevention strategies.",
        bridge_commentary: "The Bridge observes: Effective public safety often involves partnerships between law enforcement and community organizations."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Specialized courts for violent offenders achieve 90% conviction rates with average 15-year sentences.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct! Focused prosecution of serious crimes ensures that dangerous offenders face appropriate consequences.",
        incorrect_feedback: "Violent crime courts demonstrate how specialization can improve conviction rates and appropriate sentencing.",
        bridge_commentary: "The Bridge observes: Specialized violent crime prosecution shows how judicial focus can improve outcomes for the most serious cases."
    },
    {
        type: "tf_question",
        stance: "law_order",
        question: "TRUE or FALSE: Zero-tolerance policies in schools reduced weapons incidents by 80% over the past decade.",
        correct_answer: true,
        value: 14,
        correct_feedback: "Correct! Clear consequences for dangerous behavior create safe learning environments for all students.",
        incorrect_feedback: "Zero-tolerance policies prove that clear rules and consequences prevent escalation of dangerous behavior.",
        bridge_commentary: "The Bridge observes: School safety policies reflect broader debates about the role of clear consequences in preventing dangerous behavior."
    },

    // === TRUE/FALSE QUESTIONS: Neutral Stance (8 total: 5 true, 3 false) ===
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Both rehabilitation programs and enhanced enforcement have shown measurable impacts on recidivism in different contexts.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Research shows that both treatment-focused and enforcement-focused approaches can reduce reoffending when properly implemented.",
        incorrect_feedback: "Evidence supports elements of both rehabilitation and deterrence in creating effective criminal justice policies.",
        bridge_commentary: "The Bridge observes: The effectiveness of different approaches suggests that comprehensive strategies may combine elements of both rehabilitation and accountability."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Most Americans support both helping offenders change and holding them accountable for their actions.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct! Public opinion polls consistently show support for both rehabilitation and appropriate punishment.",
        incorrect_feedback: "Surveys indicate that most people want criminal justice policies that balance accountability with opportunities for change.",
        bridge_commentary: "The Bridge observes: Public attitudes suggest Americans want criminal justice policies that serve both public safety and human dignity."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Crime rates and incarceration rates always move in opposite directions - when one goes up, the other goes down.",
        correct_answer: false,
        value: 14,
        correct_feedback: "False! The relationship between crime and incarceration is complex - many factors affect crime rates beyond imprisonment levels.",
        incorrect_feedback: "Crime trends are influenced by economics, demographics, policing strategies, and social programs, not just incarceration rates.",
        bridge_commentary: "The Bridge observes: Understanding the complex relationship between various factors and crime helps inform more effective policy decisions."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Different communities may require different approaches to criminal justice based on their specific crime patterns and resources.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Rural, urban, and suburban areas face different crime challenges that may require tailored responses.",
        incorrect_feedback: "Community-specific approaches recognize that one-size-fits-all policies may not address diverse local needs effectively.",
        bridge_commentary: "The Bridge observes: Tailored approaches acknowledge that effective criminal justice must respond to local conditions and community needs."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Both victims and offenders benefit when criminal justice policies address underlying causes of crime.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct! Addressing root causes like addiction, mental illness, and poverty can prevent future victimization while helping offenders.",
        incorrect_feedback: "Comprehensive approaches that address crime causes serve both community safety and individual rehabilitation goals.",
        bridge_commentary: "The Bridge observes: Addressing root causes of crime can create benefits for victims, offenders, and communities simultaneously."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: The United States has the lowest recidivism rate among developed nations.",
        correct_answer: false,
        value: 15,
        correct_feedback: "False! The U.S. actually has higher recidivism rates than many other developed countries that emphasize rehabilitation.",
        incorrect_feedback: "International comparisons show that countries with more rehabilitation-focused approaches often have lower reoffending rates.",
        bridge_commentary: "The Bridge observes: International comparisons can provide insights into different approaches to reducing reoffending and improving public safety."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Evidence-based practices in criminal justice should guide policy decisions regardless of ideological preferences.",
        correct_answer: true,
        value: 18,
        correct_feedback: "Correct! Research evidence should inform criminal justice policy to ensure that approaches actually improve outcomes.",
        incorrect_feedback: "Evidence-based policy helps ensure that criminal justice decisions are based on effectiveness rather than ideology alone.",
        bridge_commentary: "The Bridge observes: Commitment to evidence-based practices can help bridge ideological divides by focusing on what actually works."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Most criminal justice spending in the U.S. goes to crime prevention programs rather than punishment and incarceration.",
        correct_answer: false,
        value: 16,
        correct_feedback: "False! The vast majority of criminal justice spending goes to police, courts, and corrections rather than prevention programs.",
        incorrect_feedback: "Current spending patterns prioritize response to crime rather than preventing crime from occurring in the first place.",
        bridge_commentary: "The Bridge observes: Understanding spending patterns helps inform discussions about resource allocation and the balance between prevention and response."
    },

    // === MULTIPLE CHOICE QUESTIONS: Reform & Rehabilitation Stance (8 total) ===
    {
        type: "mc_question",
        stance: "reform_rehabilitation",
        question: "What percentage of people in U.S. prisons are serving time for non-violent offenses?",
        options: {
            "A": "About 25%",
            "B": "Nearly 50%", 
            "C": "Around 75%",
            "D": "Over 85%"
        },
        correct_answer_key: "B",
        value: 15,
        correct_feedback: "Correct! Nearly half of imprisoned people are serving time for non-violent offenses, suggesting opportunities for alternative approaches.",
        incorrect_feedback: "The high percentage of non-violent offenders indicates that incarceration may not be the most appropriate response for many cases.",
        bridge_commentary: "The Bridge observes: The composition of prison populations raises questions about whether incarceration is the most effective response for all types of offenses."
    },
    {
        type: "mc_question",
        stance: "reform_rehabilitation",
        question: "Which country has the lowest recidivism rate in the world?",
        options: {
            "A": "United States",
            "B": "Norway",
            "C": "Japan", 
            "D": "United Kingdom"
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "Correct! Norway's rehabilitation-focused system achieves a 20% recidivism rate compared to 68% in the U.S.",
        incorrect_feedback: "Norway's low recidivism demonstrates how rehabilitation-focused approaches can achieve superior public safety outcomes.",
        bridge_commentary: "The Bridge observes: International comparisons show different approaches to criminal justice can achieve varying levels of success in reducing reoffending."
    },
    {
        type: "mc_question",
        stance: "reform_rehabilitation",
        question: "What is the primary goal of restorative justice practices?",
        options: {
            "A": "To punish offenders as severely as possible",
            "B": "To repair harm caused by crime through dialogue and accountability",
            "C": "To reduce court processing time",
            "D": "To eliminate the need for law enforcement"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct! Restorative justice focuses on healing relationships and communities damaged by crime while ensuring accountability.",
        incorrect_feedback: "Restorative justice prioritizes repairing harm and rebuilding relationships over purely punitive responses.",
        bridge_commentary: "The Bridge observes: Restorative approaches offer alternative ways to achieve accountability while addressing the broader impacts of crime."
    },
    {
        type: "mc_question",
        stance: "reform_rehabilitation",
        question: "Which factor most strongly predicts successful reentry after incarceration?",
        options: {
            "A": "Length of original sentence",
            "B": "Employment within 30 days of release",
            "C": "Age at time of release",
            "D": "Type of crime committed"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "Correct! Employment provides stability, purpose, and income that dramatically reduce the likelihood of reoffending.",
        incorrect_feedback: "Employment is consistently identified as the strongest predictor of successful reintegration and reduced recidivism.",
        bridge_commentary: "The Bridge observes: Employment's role in preventing recidivism highlights how economic opportunity can serve both individual and public safety goals."
    },
    {
        type: "mc_question",
        stance: "reform_rehabilitation",
        question: "What percentage of state prison budgets could be saved through evidence-based sentencing reform?",
        options: {
            "A": "About 5%",
            "B": "Around 15%",
            "C": "Nearly 30%",
            "D": "Over 40%"
        },
        correct_answer_key: "C",
        value: 17,
        correct_feedback: "Correct! Research suggests that evidence-based reforms could reduce prison populations and costs by 30% without compromising public safety.",
        incorrect_feedback: "Significant cost savings are possible through reforms that maintain public safety while reducing unnecessary incarceration.",
        bridge_commentary: "The Bridge observes: Cost savings from evidence-based reform could free up resources for other public safety priorities like crime prevention."
    },
    {
        type: "mc_question",
        stance: "reform_rehabilitation",
        question: "Which intervention has the strongest evidence for reducing juvenile recidivism?",
        options: {
            "A": "Boot camps and scared straight programs",
            "B": "Multisystemic therapy with family involvement",
            "C": "Adult court prosecution",
            "D": "Longer detention periods"
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "Correct! Family-based interventions that address multiple systems show the strongest evidence for reducing youth reoffending.",
        incorrect_feedback: "Multisystemic therapy demonstrates how addressing root causes in youth\'s environment prevents future delinquency.",
        bridge_commentary: "The Bridge observes: Youth intervention research highlights how addressing family and community factors can prevent criminal career development."
    },
    {
        type: "mc_question",
        stance: "reform_rehabilitation",
        question: "What is the average annual cost per person for community supervision compared to incarceration?",
        options: {
            "A": "$1,300 vs. $13,000",
            "B": "$3,500 vs. $35,000", 
            "C": "$5,000 vs. $25,000",
            "D": "$8,000 vs. $40,000"
        },
        correct_answer_key: "B",
        value: 15,
        correct_feedback: "Correct! Community supervision costs about $3,500 annually compared to $35,000+ for incarceration while achieving similar safety outcomes.",
        incorrect_feedback: "The 10-to-1 cost difference demonstrates how community supervision can provide cost-effective public safety.",
        bridge_commentary: "The Bridge observes: Cost comparisons highlight how alternative sanctions can achieve public safety goals while preserving taxpayer resources."
    },
    {
        type: "mc_question",
        stance: "reform_rehabilitation",
        question: "Which approach shows the strongest evidence for reducing domestic violence recidivism?",
        options: {
            "A": "Longer jail sentences",
            "B": "Batterer intervention programs combined with supervision",
            "C": "Restraining orders alone",
            "D": "Victim relocation programs"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "Correct! Combining treatment that addresses violent behavior with accountability supervision shows the best outcomes for reducing repeat abuse.",
        incorrect_feedback: "Batterer intervention programs address the underlying attitudes and behaviors that drive domestic violence.",
        bridge_commentary: "The Bridge observes: Domestic violence prevention demonstrates how combining treatment with accountability can protect victims more effectively."
    },

    // === MULTIPLE CHOICE QUESTIONS: Law & Order Stance (8 total) ===
    {
        type: "mc_question",
        stance: "law_order",
        question: "According to law enforcement advocates, what is the primary benefit of enhanced penalties for repeat offenders?",
        options: {
            "A": "Reduced court processing costs",
            "B": "Improved rehabilitation outcomes",
            "C": "Deterrence and incapacitation of dangerous criminals",
            "D": "Better community-police relations"
        },
        correct_answer_key: "C",
        value: 17,
        correct_feedback: "Correct! Enhanced penalties both deter potential offenders and prevent dangerous individuals from committing more crimes.",
        incorrect_feedback: "Repeat offender penalties serve the dual purpose of deterring crime and protecting the public through incapacitation.",
        bridge_commentary: "The Bridge observes: Enhanced penalties for repeat offenders reflect the principle that consequences should escalate with persistent criminal behavior."
    },
    {
        type: "mc_question",
        stance: "law_order",
        question: "What was the approximate reduction in violent crime during the period of increased incarceration from 1993-2010?",
        options: {
            "A": "25% decrease",
            "B": "40% decrease",
            "C": "55% decrease",
            "D": "75% decrease"
        },
        correct_answer_key: "D",
        value: 18,
        correct_feedback: "Correct! Violent crime fell by approximately 75% during this period, which law enforcement advocates attribute partly to enhanced enforcement.",
        incorrect_feedback: "The dramatic crime decline during increased incarceration demonstrates the public safety benefits of robust enforcement.",
        bridge_commentary: "The Bridge observes: The crime decline of the 1990s-2000s involved multiple factors, with enhanced enforcement playing a significant documented role."
    },
    {
        type: "mc_question",
        stance: "law_order",
        question: "Which policing strategy focuses on preventing major crimes by addressing minor disorders?",
        options: {
            "A": "Community policing",
            "B": "Broken Windows policing", 
            "C": "Problem-oriented policing",
            "D": "Intelligence-led policing"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "Correct! Broken Windows theory suggests that addressing minor crimes and disorder prevents escalation to serious offenses.",
        incorrect_feedback: "Broken Windows policing maintains that order and safety require attention to all levels of criminal and disorderly behavior.",
        bridge_commentary: "The Bridge observes: Order maintenance strategies reflect the belief that addressing small problems prevents larger ones from developing."
    },
    {
        type: "mc_question",
        stance: "law_order",
        question: "What percentage of victims support stronger penalties for violent crimes according to victim advocacy surveys?",
        options: {
            "A": "About 45%",
            "B": "Around 65%",
            "C": "Nearly 80%",
            "D": "Over 90%"
        },
        correct_answer_key: "C",
        value: 19,
        correct_feedback: "Correct! Victim surveys consistently show strong support for appropriate punishment that reflects the seriousness of crimes against them.",
        incorrect_feedback: "Victims overwhelmingly want justice that acknowledges their suffering through appropriate consequences for offenders.",
        bridge_commentary: "The Bridge observes: Victim perspectives on punishment remind us that justice must serve those most directly harmed by crime."
    },
    {
        type: "mc_question",
        stance: "law_order",
        question: "Which factor do law enforcement officials cite as most important for crime deterrence?",
        options: {
            "A": "Severity of punishment",
            "B": "Certainty of being caught and prosecuted",
            "C": "Speed of court processing",
            "D": "Media coverage of arrests"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct! Research shows that certainty of consequences has a stronger deterrent effect than severity alone.",
        incorrect_feedback: "The certainty of being caught and prosecuted creates the most effective deterrent to criminal behavior.",
        bridge_commentary: "The Bridge observes: Deterrence research suggests that consistent enforcement may be more important than harsh penalties alone."
    },
    {
        type: "mc_question",
        stance: "law_order",
        question: "What is the primary argument for mandatory minimum sentencing laws?",
        options: {
            "A": "To reduce prison overcrowding",
            "B": "To ensure consistent, appropriate punishment and deterrence",
            "C": "To speed up court processing",
            "D": "To reduce prosecutorial workload"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "Correct! Mandatory minimums ensure that serious crimes receive appropriate punishment regardless of judicial variation.",
        incorrect_feedback: "Mandatory minimums provide predictable consequences that deter crime while ensuring justice for victims.",
        bridge_commentary: "The Bridge observes: Mandatory minimums reflect concerns about consistency in sentencing while raising questions about judicial discretion."
    },
    {
        type: "mc_question",
        stance: "law_order",
        question: "According to law enforcement data, what happens to crime rates when police presence increases significantly in an area?",
        options: {
            "A": "Crime rates remain unchanged",
            "B": "Crime decreases by 5-10%",
            "C": "Crime decreases by 15-25%",
            "D": "Crime increases due to more arrests"
        },
        correct_answer_key: "C",
        value: 15,
        correct_feedback: "Correct! Studies consistently show that increased police presence creates deterrent effects that reduce criminal activity.",
        incorrect_feedback: "Police deployment research demonstrates that visible enforcement prevents crime through deterrence mechanisms.",
        bridge_commentary: "The Bridge observes: Police presence research shows how visible enforcement can prevent crime before it occurs."
    },
    {
        type: "mc_question",
        stance: "law_order",
        question: "What is the average number of crimes prevented annually by incarcerating one high-rate offender?",
        options: {
            "A": "3-5 crimes",
            "B": "6-8 crimes",
            "C": "10-15 crimes",
            "D": "20-25 crimes"
        },
        correct_answer_key: "C",
        value: 18,
        correct_feedback: "Correct! Research on career criminals shows that incapacitating high-rate offenders prevents significant numbers of crimes.",
        incorrect_feedback: "Selective incapacitation of repeat offenders creates immediate public safety benefits through crime prevention.",
        bridge_commentary: "The Bridge observes: Incapacitation research demonstrates how focusing on high-rate offenders can maximize public safety impact."
    },

    // === MULTIPLE CHOICE QUESTIONS: Neutral Stance (6 total) ===
    {
        type: "mc_question",
        stance: "neutral",
        question: "What do most evidence-based criminal justice practices emphasize?",
        options: {
            "A": "Either pure punishment or pure rehabilitation",
            "B": "Combining accountability with opportunities for change",
            "C": "Eliminating all incarceration",
            "D": "Maximizing sentence lengths for all crimes"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct! Evidence-based practices typically combine accountability measures with programming that addresses criminogenic needs.",
        incorrect_feedback: "Research supports approaches that balance consequences with interventions that reduce future offending.",
        bridge_commentary: "The Bridge observes: Evidence-based practices suggest that effective criminal justice combines accountability with opportunities for positive change."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "Which metric is most important for evaluating criminal justice system effectiveness?",
        options: {
            "A": "Incarceration rates alone",
            "B": "Recidivism rates alone", 
            "C": "Cost per offender alone",
            "D": "Multiple measures including safety, recidivism, and cost"
        },
        correct_answer_key: "D",
        value: 16,
        correct_feedback: "Correct! Comprehensive evaluation requires examining public safety outcomes, reoffending rates, and fiscal impact together.",
        incorrect_feedback: "Effective criminal justice policy must balance multiple goals including safety, rehabilitation, and responsible resource use.",
        bridge_commentary: "The Bridge observes: Multiple metrics help ensure that criminal justice policies achieve both immediate safety and long-term effectiveness."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What do both rehabilitation advocates and law enforcement officials typically agree is important?",
        options: {
            "A": "Eliminating all punishment",
            "B": "Maximizing incarceration",
            "C": "Protecting public safety",
            "D": "Avoiding accountability measures"
        },
        correct_answer_key: "C",
        value: 15,
        correct_feedback: "Correct! Public safety is a shared goal, though different approaches may be preferred for achieving it.",
        incorrect_feedback: "Both perspectives prioritize public safety, though they may disagree on the most effective methods.",
        bridge_commentary: "The Bridge observes: Shared commitment to public safety provides common ground for discussions about criminal justice approaches."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "Which approach to criminal justice policy development is most likely to gain broad support?",
        options: {
            "A": "Ideology-based decision making",
            "B": "Evidence-based policy development",
            "C": "Cost-cutting as the primary goal",
            "D": "Following popular opinion polls"
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "Correct! Evidence-based approaches focus on what actually works rather than ideological preferences, building broader support.",
        incorrect_feedback: "Policies based on research evidence tend to achieve better outcomes and broader acceptance across different perspectives.",
        bridge_commentary: "The Bridge observes: Evidence-based policy development can help bridge ideological divides by focusing on demonstrated effectiveness."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What percentage of Americans support both helping offenders change and holding them accountable according to recent polls?",
        options: {
            "A": "About 35%",
            "B": "Around 50%",
            "C": "Nearly 70%",
            "D": "Over 80%"
        },
        correct_answer_key: "D",
        value: 16,
        correct_feedback: "Correct! Most Americans want criminal justice policies that combine accountability with opportunities for rehabilitation.",
        incorrect_feedback: "Public opinion shows strong support for balanced approaches that serve both justice and redemption goals.",
        bridge_commentary: "The Bridge observes: Public attitudes suggest Americans want criminal justice policies that balance accountability with human dignity."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "Which factor is most important for successful criminal justice reform implementation?",
        options: {
            "A": "Political party control",
            "B": "Collaboration between stakeholders",
            "C": "Media support",
            "D": "Federal mandate requirements"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct! Successful reforms typically require cooperation between law enforcement, courts, treatment providers, and community organizations.",
        incorrect_feedback: "Complex criminal justice reforms need buy-in from multiple stakeholders to be implemented effectively.",
        bridge_commentary: "The Bridge observes: Criminal justice challenges require partnerships that bring together diverse expertise and perspectives for lasting solutions."
    },

    // === FACTOIDS: Reform & Rehabilitation Stance (10 total) ===
    {
        type: "factoid",
        stance: "reform_rehabilitation",
        text: "Portugal's decriminalization of drug use led to a 95% drop in drug-related HIV infections and 80% reduction in drug-related crime within 15 years.",
        value: 18,
        bridge_commentary: "The Bridge observes: Portugal's approach demonstrates how treating addiction as a health issue rather than solely a criminal one can improve both individual and public health outcomes."
    },
    {
        type: "factoid",
        stance: "reform_rehabilitation",
        text: "Cognitive behavioral therapy programs in prison cost $2,500 per participant but save $25,000 in prevented crime costs over three years.",
        value: 17,
        bridge_commentary: "The Bridge observes: Evidence-based programming demonstrates how rehabilitation investments can provide substantial returns through crime prevention."
    },
    {
        type: "factoid",
        stance: "reform_rehabilitation", 
        text: "States that expanded mental health courts saw 60% fewer arrests among participants with serious mental illness compared to traditional prosecution.",
        value: 16,
        bridge_commentary: "The Bridge observes: Specialized courts show how addressing underlying conditions can break cycles of criminal justice involvement while improving individual outcomes."
    },
    {
        type: "factoid",
        stance: "reform_rehabilitation",
        text: "Transitional job programs that guarantee employment upon release achieve 85% job retention rates and reduce recidivism by 50%.",
        value: 18,
        bridge_commentary: "The Bridge observes: Employment-focused reentry programs demonstrate how addressing basic needs can successfully prevent reoffending."
    },
    {
        type: "factoid",
        stance: "reform_rehabilitation",
        text: "Family reunification programs that maintain parent-child relationships during incarceration reduce juvenile delinquency by 40% among children of incarcerated parents.",
        value: 17,
        bridge_commentary: "The Bridge observes: Supporting family connections highlights how criminal justice policies affect not just offenders but entire families and communities."
    },
    {
        type: "factoid",
        stance: "reform_rehabilitation",
        text: "Therapeutic communities for substance abuse in prison achieve 70% completion rates and reduce drug-related reoffending by 60% over five years.",
        value: 16,
        bridge_commentary: "The Bridge observes: Intensive treatment programming shows how addressing the root causes of criminal behavior can achieve lasting change."
    },
    {
        type: "factoid",
        stance: "reform_rehabilitation",
        text: "Electronic monitoring programs achieve 95% compliance rates while allowing participants to maintain employment and family responsibilities.",
        value: 15,
        bridge_commentary: "The Bridge observes: Technology-enabled supervision can maintain accountability while preserving the social connections that prevent reoffending."
    },
    {
        type: "factoid",
        stance: "reform_rehabilitation",
        text: "Victim-offender mediation programs report 98% participant satisfaction rates and significant reductions in victim fear and anxiety.",
        value: 19,
        bridge_commentary: "The Bridge observes: Restorative practices can provide healing and closure for victims while promoting genuine accountability from offenders."
    },
    {
        type: "factoid",
        stance: "reform_rehabilitation",
        text: "College-in-prison programs reduce recidivism by 43% and increase post-release employment by 400% compared to no education programming.",
        value: 18,
        bridge_commentary: "The Bridge observes: Educational programming creates pathways to stability and success that benefit both individuals and communities."
    },
    {
        type: "factoid",
        stance: "reform_rehabilitation",
        text: "Community service programs allow offenders to contribute 2.5 million hours annually of unpaid work valued at $65 million to local communities.",
        value: 16,
        bridge_commentary: "The Bridge observes: Community service demonstrates how accountability can take forms that benefit society while teaching responsibility and work skills."
    },

    // === FACTOIDS: Law & Order Stance (10 total) ===
    {
        type: "factoid",
        stance: "law_order",
        text: "CompStat policing strategies that focus on data-driven enforcement have achieved 40-60% reductions in violent crime in participating cities.",
        value: 17,
        bridge_commentary: "The Bridge observes: Data-driven law enforcement demonstrates how strategic approaches can maximize the crime prevention impact of police resources."
    },
    {
        type: "factoid",
        stance: "law_order",
        text: "Federal gun crime prosecutions result in an average 8-year sentence with 95% conviction rates, creating strong deterrent effects.",
        value: 18,
        bridge_commentary: "The Bridge observes: Enhanced prosecution of gun crimes shows how focused enforcement can target the most dangerous criminal behavior."
    },
    {
        type: "factoid",
        stance: "law_order",
        text: "DNA databases have solved over 500,000 previously unsolved cases and identified 375 wrongfully convicted individuals through forensic evidence.",
        value: 16,
        bridge_commentary: "The Bridge observes: Advanced forensic capabilities serve both crime solving and justice accuracy, protecting both victims and the wrongfully accused."
    },
    {
        type: "factoid",
        stance: "law_order",
        text: "Swift and certain sanction programs reduce probation violations by 55% through immediate consequences for non-compliance.",
        value: 15,
        bridge_commentary: "The Bridge observes: Immediate accountability demonstrates how swift consequences can shape behavior more effectively than delayed punishment."
    },
    {
        type: "factoid",
        stance: "law_order", 
        text: "Victim impact statements influence sentencing in 85% of cases and provide closure for 90% of participating crime victims.",
        value: 19,
        bridge_commentary: "The Bridge observes: Victim participation in sentencing ensures that those most harmed by crime have a voice in determining appropriate consequences."
    },
    {
        type: "factoid",
        stance: "law_order",
        text: "Gang suppression programs that combine enhanced prosecution with community intervention reduce neighborhood violent crime by 50%.",
        value: 17,
        bridge_commentary: "The Bridge observes: Targeted enforcement of organized criminal groups protects communities while addressing the structure of criminal enterprises."
    },
    {
        type: "factoid",
        stance: "law_order",
        text: "Asset forfeiture from criminal enterprises recovers $2 billion annually for victim compensation and law enforcement operations.",
        value: 16,
        bridge_commentary: "The Bridge observes: Seizing criminal proceeds ensures that crime doesn't pay while providing resources for victims and public safety."
    },
    {
        type: "factoid",
        stance: "law_order",
        text: "Three-strikes laws have prevented an estimated 2 million crimes since implementation through incapacitation of repeat offenders.",
        value: 18,
        bridge_commentary: "The Bridge observes: Enhanced repeat offender penalties demonstrate how incapacitation can provide direct public safety benefits through crime prevention."
    },
    {
        type: "factoid",
        stance: "law_order",
        text: "Domestic violence specialized courts achieve 80% conviction rates and reduce repeat abuse by 60% through enhanced prosecution.",
        value: 17,
        bridge_commentary: "The Bridge observes: Specialized prosecution of domestic violence shows how focused attention can better protect vulnerable victims."
    },
    {
        type: "factoid",
        stance: "law_order",
        text: "Police body cameras reduce use of force incidents by 15% and citizen complaints by 25% while improving evidence quality.",
        value: 15,
        bridge_commentary: "The Bridge observes: Technology can enhance both police accountability and public safety while improving the quality of criminal investigations."
    },

    // === FACTOIDS: Neutral/Bridge-Building Stance (8 total) ===
    {
        type: "factoid",
        stance: "neutral",
        text: "Both law enforcement leaders and reform advocates agree that addressing mental health and substance abuse is crucial for reducing crime.",
        value: 16,
        bridge_commentary: "The Bridge observes: Shared recognition of mental health and addiction as crime drivers creates opportunities for collaborative solutions."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Crime victims express support for both appropriate punishment and programs that help offenders avoid reoffending in the future.",
        value: 17,
        bridge_commentary: "The Bridge observes: Victim perspectives often include both accountability and prevention goals, suggesting balanced approaches may serve victim needs."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Rural and urban communities face different crime patterns requiring tailored approaches that combine enforcement and prevention strategies.",
        value: 15,
        bridge_commentary: "The Bridge observes: Geographic differences in crime suggest that effective policies may need to be adapted to local conditions and resources."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Public-private partnerships fund 60% of successful reentry programs, demonstrating collaboration between business and justice sectors.",
        value: 16,
        bridge_commentary: "The Bridge observes: Business involvement in reentry programs shows how economic and social goals can align in criminal justice reform."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Evidence-based practices reduce recidivism by 20-30% regardless of whether they emphasize treatment or accountability approaches.",
        value: 18,
        bridge_commentary: "The Bridge observes: Research shows that both treatment-focused and accountability-focused programs can work when properly implemented and evidence-based."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Bipartisan criminal justice reforms have passed in 38 states, focusing on both public safety and cost-effectiveness.",
        value: 17,
        bridge_commentary: "The Bridge observes: Widespread bipartisan reform efforts suggest that effective criminal justice policies can transcend political divisions."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Community policing programs that combine enforcement with social services achieve higher public satisfaction and crime reduction.",
        value: 16,
        bridge_commentary: "The Bridge observes: Integrated approaches that combine enforcement with community engagement often achieve better outcomes than either strategy alone."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Cost-benefit analyses show that every dollar invested in evidence-based crime prevention saves $7 in criminal justice and victim costs.",
        value: 18,
        bridge_commentary: "The Bridge observes: Prevention-focused investments demonstrate how addressing crime\'s root causes can benefit both public safety and fiscal responsibility."
    }
];

// Define left and right stance functions for the game logic
function getLeftStance() {
    return "reform_rehabilitation";
}

function getRightStance() {
    return "law_order";
}

// Export for use in game logic
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { justiceContent, getLoopContent, getLeftStance, getRightStance };
}

// Browser exports (for client environments)
if (typeof window !== 'undefined') {
    window.justiceContent = justiceContent;
    window.getLoopContent = getLoopContent;
    window.getLeftStance = getLeftStance;
    window.getRightStance = getRightStance;
}
