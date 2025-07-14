// This file contains the content pool for the "Healthcare" loop.
// It must be loaded BEFORE game_logic.js in your HTML.
// VIDEOS REMOVED - Clean version for faster gameplay

function getLoopContent() {
    return healthcareContent;
}

const healthcareContent = [
    // === TRUE/FALSE QUESTIONS: Universal Care Stance (16 questions) ===
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Universal healthcare systems generally lead to better public health outcomes including lower infant mortality rates.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. Many studies suggest a link between universal access and improved population health indicators.",
        incorrect_feedback: "The Bridge: Incorrect. Proponents of universal care often highlight its positive impact on public health metrics.",
        bridge_commentary: "Examining global health outcomes can inform debates about the structure and accessibility of healthcare systems."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: High medical debt is a significant driver of personal bankruptcy in countries without universal healthcare.",
        correct_answer: true,
        value: 18,
        correct_feedback: "The Bridge: Correct. Medical expenses are frequently cited as a leading cause of financial hardship in private insurance systems.",
        incorrect_feedback: "The Bridge: Incorrect. The financial burden of illness can be severe in systems without comprehensive public coverage.",
        bridge_commentary: "Financial implications of healthcare access directly impact individual economic stability and societal well-being."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Preventative care is often underutilized in market-based healthcare systems due to cost barriers.",
        correct_answer: true,
        value: 16,
        correct_feedback: "The Bridge: Correct. When individuals delay care due to cost, minor issues can escalate into expensive interventions.",
        incorrect_feedback: "The Bridge: Incorrect. Advocates for universal care often point to cost-effectiveness of accessible preventative services.",
        bridge_commentary: "Investing in preventative health can yield significant benefits for both individual health and overall system costs."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Single-payer healthcare systems can reduce administrative costs by eliminating multiple insurance companies.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. Streamlining billing and claims processing under one entity can lead to substantial savings.",
        incorrect_feedback: "The Bridge: Incorrect. Administrative efficiency is a key argument made for single-payer systems.",
        bridge_commentary: "The efficiency of healthcare administration is critical for managing overall system costs and resource allocation."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Health outcomes for racial minorities tend to be worse in systems with access disparities.",
        correct_answer: true,
        value: 18,
        correct_feedback: "The Bridge: Correct. Systemic inequities in healthcare access often exacerbate existing health disparities.",
        incorrect_feedback: "The Bridge: Incorrect. Universal care advocates highlight its potential to reduce health disparities through equitable access.",
        bridge_commentary: "Addressing health equity involves examining both healthcare access and broader social determinants of health."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Guaranteeing healthcare as a human right motivates care based on need rather than ability to pay.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. Framing healthcare as a human right shifts the philosophical basis to a universal public good.",
        incorrect_feedback: "The Bridge: Incorrect. This ethical framework implies that access should not be determined by financial means.",
        bridge_commentary: "The ethical framing of healthcare shapes fundamental policy choices and societal values."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: The U.S. spends significantly more per capita on healthcare than other developed nations yet has worse outcomes.",
        correct_answer: true,
        value: 19,
        correct_feedback: "The Bridge: Correct. This discrepancy is a central argument for healthcare reform suggesting system inefficiency.",
        incorrect_feedback: "The Bridge: Incorrect. International comparisons frequently highlight high cost and modest outcomes of the U.S. system.",
        bridge_commentary: "Analyzing healthcare spending and outcomes across nations provides insights into different system efficiencies."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Expanding Medicaid eligibility improves health outcomes and reduces uncompensated care burdens on hospitals.",
        correct_answer: true,
        value: 16,
        correct_feedback: "The Bridge: Correct. Providing coverage to low-income individuals leads to earlier diagnosis benefiting patients and providers.",
        incorrect_feedback: "The Bridge: Incorrect. Research consistently shows positive impact of expanded public health insurance programs.",
        bridge_commentary: "Public insurance programs are key policy tools for expanding access and addressing vulnerable population needs."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Physician shortages in rural areas are exacerbated by market systems as doctors move to higher-paying urban centers.",
        correct_answer: true,
        value: 15,
        correct_feedback: "The Bridge: Correct. Market forces can lead to uneven distribution leaving underserved areas without adequate care.",
        incorrect_feedback: "The Bridge: Incorrect. Provider distribution is a significant challenge often linked to economic incentives.",
        bridge_commentary: "Ensuring equitable access to healthcare professionals across all geographic regions is crucial for policy."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Prescription drug prices are often higher in market systems compared to countries where governments negotiate prices.",
        correct_answer: true,
        value: 18,
        correct_feedback: "The Bridge: Correct. Government negotiation power can lead to substantial reductions in drug costs for patients.",
        incorrect_feedback: "The Bridge: Incorrect. Drug pricing is a major point with differences seen between regulated and market-driven systems.",
        bridge_commentary: "Pharmaceutical markets highlight complex interplay of innovation, accessibility, and affordability."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Many Americans report skipping or delaying necessary medical care due to cost concerns.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. Cost-related barriers to care are widespread impacting health and financial stability.",
        incorrect_feedback: "The Bridge: Incorrect. Surveys consistently indicate cost is a major deterrent to healthcare access.",
        bridge_commentary: "Healthcare affordability directly influences access leading to trade-offs between financial concerns and health."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Public health systems are crucial for responding to pandemics as they prioritize collective well-being.",
        correct_answer: true,
        value: 18,
        correct_feedback: "The Bridge: Correct. Robust public health infrastructure is essential for coordinated responses to widespread threats.",
        incorrect_feedback: "The Bridge: Incorrect. The importance of centralized public health efforts during emergencies is widely recognized.",
        bridge_commentary: "Pandemics underscore the interconnectedness of individual health and necessity of strong public health infrastructure."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Universal healthcare eliminates all private insurance options in a country.",
        correct_answer: false,
        value: 15,
        correct_feedback: "The Bridge: Correct. Many universal systems, like Germany or Switzerland, maintain robust private insurance markets alongside public options.",
        incorrect_feedback: "The Bridge: Incorrect. Some universal healthcare models integrate private insurance as a complementary or supplementary choice.",
        bridge_commentary: "Understanding the nuances of universal healthcare models reveals their diverse structures and funding mechanisms."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: A primary goal of universal healthcare is to ensure financial protection against catastrophic medical bills.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. Preventing medical bankruptcy is a key benefit often cited for universal systems.",
        incorrect_feedback: "The Bridge: Incorrect. Universal care aims to remove the financial risk associated with severe illness.",
        bridge_commentary: "The financial security provided by healthcare systems is a major factor in public well-being."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Centralized purchasing of medical supplies and equipment in universal systems can lead to lower costs.",
        correct_answer: true,
        value: 16,
        correct_feedback: "The Bridge: Correct. Bulk purchasing power often results in significant cost savings for national health systems.",
        incorrect_feedback: "The Bridge: Incorrect. This is a common economic argument for the efficiency of centralized healthcare procurement.",
        bridge_commentary: "Supply chain management and procurement are often overlooked but crucial areas for healthcare cost control."
    },
    {
        type: "tf_question",
        stance: "universal_care",
        question: "TRUE or FALSE: Countries with universal healthcare rarely face issues with healthcare worker shortages.",
        correct_answer: false,
        value: 16,
        correct_feedback: "The Bridge: Correct. Worker shortages are a global challenge, affecting both universal and market-based systems.",
        incorrect_feedback: "The Bridge: Incorrect. Staffing challenges are a complex issue not solely tied to one type of healthcare system.",
        bridge_commentary: "The global demand for healthcare professionals highlights the need for robust workforce planning across all systems."
    },

    // === TRUE/FALSE QUESTIONS: Market Solutions Stance (15 questions) ===
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Competition among private healthcare providers leads to greater innovation and higher quality services.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. Proponents argue that market forces drive efficiency and continuous improvement in delivery.",
        incorrect_feedback: "The Bridge: Incorrect. Many believe competition is key to fostering excellence and choice in healthcare.",
        bridge_commentary: "The impact of market competition on innovation and quality is a central point of debate in policy discussions."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Government-controlled healthcare systems often suffer from long wait times and reduced patient choice.",
        correct_answer: true,
        value: 18,
        correct_feedback: "The Bridge: Correct. Centralized planning can lead to rationing of services and less flexibility for patients.",
        incorrect_feedback: "The Bridge: Incorrect. Critics of universal systems frequently point to issues of access and limited options.",
        bridge_commentary: "Balancing universal access with efficiency and patient choice is a persistent challenge for all systems."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Taxpayer-funded universal healthcare systems involve higher taxes and larger government bureaucracy.",
        correct_answer: true,
        value: 16,
        correct_feedback: "The Bridge: Correct. Funding universal care typically requires significant public revenue and increased oversight.",
        incorrect_feedback: "The Bridge: Incorrect. Financial and bureaucratic implications of government healthcare are emphasized by critics.",
        bridge_commentary: "The scale of government intervention and its impact on taxation are core considerations in healthcare reform."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Personal responsibility for health choices leads to more efficient resource allocation and healthier lifestyles.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. This perspective argues individuals are more incentivized when they bear direct financial stake.",
        incorrect_feedback: "The Bridge: Incorrect. Individual accountability in health management is a key tenet of this approach.",
        bridge_commentary: "The role of individual responsibility in health outcomes is complex with varied interpretations across healthcare philosophies."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Government price controls on prescription drugs can stifle innovation and reduce new treatment availability.",
        correct_answer: true,
        value: 18,
        correct_feedback: "The Bridge: Correct. Drug companies argue high prices are necessary to recoup research and development costs.",
        incorrect_feedback: "The Bridge: Incorrect. The impact of price regulation on drug development is a significant concern for industry.",
        bridge_commentary: "Balancing affordable drug access with incentives for pharmaceutical innovation is a critical policy challenge."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Direct primary care models can reduce administrative overhead and improve patient-physician relationships.",
        correct_answer: true,
        value: 16,
        correct_feedback: "The Bridge: Correct. By bypassing insurance these models aim to simplify care delivery and foster personalized relationships.",
        incorrect_feedback: "The Bridge: Incorrect. Direct primary care is presented as an innovative market-based solution to healthcare delivery.",
        bridge_commentary: "Innovative healthcare delivery models explore new ways to improve access and reduce costs outside traditional frameworks."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Health Savings Accounts empower individuals to manage healthcare spending and make cost-conscious decisions.",
        correct_answer: true,
        value: 15,
        correct_feedback: "The Bridge: Correct. HSAs give consumers more control over healthcare dollars and encourage price transparency.",
        incorrect_feedback: "The Bridge: Incorrect. HSAs are a key tool advocated by those promoting consumer-driven healthcare.",
        bridge_commentary: "Consumer-driven healthcare models aim to increase individual agency and transparency in healthcare markets."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Much healthcare cost is attributable to defensive medicine driven by fear of malpractice lawsuits.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. Doctors often order excessive tests and procedures to avoid legal risk increasing costs.",
        incorrect_feedback: "The Bridge: Incorrect. Malpractice concerns are frequently cited as a driver of unnecessary healthcare spending.",
        bridge_commentary: "Addressing systemic cost drivers involves examining factors beyond just insurance and provider payments."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Allowing health insurance sales across state lines would increase competition and lower premiums.",
        correct_answer: true,
        value: 16,
        correct_feedback: "The Bridge: Correct. Proponents argue this would introduce more choices and force insurers to offer competitive rates.",
        incorrect_feedback: "The Bridge: Incorrect. Interstate insurance sales are a key policy proposal aimed at increasing market competition.",
        bridge_commentary: "Regulatory frameworks for health insurance are critical components of policy debates impacting competition and choice."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Government intervention in healthcare inevitably leads to bureaucratic inefficiencies and reduced care quality.",
        correct_answer: true,
        value: 18,
        correct_feedback: "The Bridge: Correct. Critics argue centralized control hinders responsiveness and innovation inherent in market systems.",
        incorrect_feedback: "The Bridge: Incorrect. The perceived downsides of government involvement are a core tenet of this perspective.",
        bridge_commentary: "The debate over government role in healthcare reflects fundamental differences in political and economic philosophy."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Telemedicine and remote care models thrive in flexible patient-driven systems offering convenience and access.",
        correct_answer: true,
        value: 15,
        correct_feedback: "The Bridge: Correct. Digital health solutions often flourish when regulations allow innovation and consumer choice.",
        incorrect_feedback: "The Bridge: Incorrect. Technological advancements in healthcare are often seen as benefiting from market flexibility.",
        bridge_commentary: "Technology role in expanding healthcare access and efficiency is a shared interest across different policy approaches."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Removing regulations on insurance companies always results in lower premiums for consumers.",
        correct_answer: false,
        value: 16,
        correct_feedback: "The Bridge: Correct. While intended to increase competition, deregulation can sometimes lead to market instability or reduced consumer protections.",
        incorrect_feedback: "The Bridge: Incorrect. The effects of deregulation on insurance markets are complex and debated among economists.",
        bridge_commentary: "The impact of regulatory frameworks on market outcomes is a critical area of study in healthcare economics."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: The existence of medical tourism is a sign that market-based healthcare systems offer greater choice.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. Patients sometimes travel internationally to find specialized care or avoid wait times/costs in their home systems.",
        incorrect_feedback: "The Bridge: Incorrect. Medical tourism highlights global disparities and patient pursuit of optimal care options.",
        bridge_commentary: "Global healthcare markets influence patient choices and access to specialized medical services."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: A key benefit of private healthcare is the rapid adoption of new medical technologies and treatments.",
        correct_answer: true,
        value: 18,
        correct_feedback: "The Bridge: Correct. Private providers often have stronger incentives and flexibility to invest in cutting-edge innovations.",
        incorrect_feedback: "The Bridge: Incorrect. Rapid technological adoption is a frequently cited advantage of competitive market systems.",
        bridge_commentary: "The speed of innovation adoption is a differentiating factor between various healthcare system designs."
    },
    {
        type: "tf_question",
        stance: "market_solutions",
        question: "TRUE or FALSE: Introducing more deductibles and co-pays reduces healthcare utilization to only necessary services.",
        correct_answer: true,
        value: 15,
        correct_feedback: "The Bridge: Correct. Cost-sharing mechanisms are intended to make patients more mindful of healthcare expenses.",
        incorrect_feedback: "The Bridge: Incorrect. This is a common argument for consumer cost-sharing in market-driven healthcare.",
        bridge_commentary: "Patient financial responsibility is a core tenet of market-based healthcare systems aimed at efficiency."
    },

    // === TRUE/FALSE QUESTIONS: Neutral Stance (9 questions) ===
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: The aging global population is placing increasing demand on healthcare systems worldwide.",
        correct_answer: true,
        value: 15,
        correct_feedback: "The Bridge: Correct. As populations age there is a natural increase in chronic conditions and demand for services.",
        incorrect_feedback: "The Bridge: Incorrect. Demographic shifts are a major factor influencing healthcare planning globally.",
        bridge_commentary: "Demographic trends highlight a universal challenge for healthcare systems requiring long-term planning and resource allocation."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Technological advancements like AI-powered diagnostics are transforming healthcare delivery.",
        correct_answer: true,
        value: 16,
        correct_feedback: "The Bridge: Correct. These innovations promise more accurate diagnoses and improved patient outcomes.",
        incorrect_feedback: "The Bridge: Incorrect. Technology is rapidly reshaping the landscape of medical care and research.",
        bridge_commentary: "Technological innovation in healthcare presents both opportunities for improved care and challenges related to cost and access."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Healthcare systems globally face challenges balancing access, quality, and cost.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. This iron triangle of healthcare is a universal policy dilemma with trade-offs.",
        incorrect_feedback: "The Bridge: Incorrect. These three dimensions represent core trade-offs in designing any healthcare system.",
        bridge_commentary: "The fundamental trade-offs in healthcare policy are a common thread across diverse political and economic systems."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: The rise of chronic diseases is a major driver of increasing healthcare costs worldwide.",
        correct_answer: true,
        value: 15,
        correct_feedback: "The Bridge: Correct. Managing long-term conditions requires sustained medical attention contributing to expenditures.",
        incorrect_feedback: "The Bridge: Incorrect. Chronic disease management is a primary focus for healthcare systems due to prevalence and cost.",
        bridge_commentary: "Understanding epidemiological shifts in disease patterns is essential for effective public health and healthcare planning."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Mental health has become a significant public health concern requiring integrated healthcare solutions.",
        correct_answer: true,
        value: 16,
        correct_feedback: "The Bridge: Correct. Increasing awareness and demand for mental health services highlight need for comprehensive care.",
        incorrect_feedback: "The Bridge: Incorrect. Mental health is a growing area of focus for healthcare policy and resource allocation globally.",
        bridge_commentary: "Mental health is an increasingly recognized component of overall well-being demanding integrated approaches."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Health literacy significantly impacts individual health outcomes and healthcare utilization.",
        correct_answer: true,
        value: 15,
        correct_feedback: "The Bridge: Correct. Individuals with higher health literacy are better equipped to make informed care decisions.",
        incorrect_feedback: "The Bridge: Incorrect. Health literacy is a key factor in empowering individuals to navigate healthcare systems effectively.",
        bridge_commentary: "Empowering individuals with health knowledge can lead to better personal management and more efficient utilization."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Data privacy and security are growing concerns across all types of healthcare systems worldwide.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. Protecting sensitive patient information is a universal challenge with digital healthcare.",
        incorrect_feedback: "The Bridge: Incorrect. Cybersecurity and data protection are critical for modern healthcare infrastructure.",
        bridge_commentary: "The digital transformation of healthcare brings both immense benefits and critical responsibilities for data protection."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Wearable health technology has no impact on preventative care.",
        correct_answer: false,
        value: 15,
        correct_feedback: "The Bridge: Correct. Wearable tech can monitor vital signs and activity, aiding in early detection and lifestyle improvements.",
        incorrect_feedback: "The Bridge: Incorrect. Wearable devices are increasingly integrated into preventative health strategies.",
        bridge_commentary: "Personal health technology offers new avenues for individuals to proactively manage their well-being."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: The opioid crisis is a challenge faced by healthcare systems in multiple countries.",
        correct_answer: true,
        value: 17,
        correct_feedback: "The Bridge: Correct. Many nations are grappling with the complex issue of opioid addiction and its healthcare burden.",
        incorrect_feedback: "The Bridge: Incorrect. The opioid crisis is a widespread public health emergency affecting diverse healthcare contexts.",
        bridge_commentary: "Global health challenges like the opioid crisis require coordinated efforts and tailored healthcare responses."
    },

    // === MULTIPLE CHOICE QUESTIONS: Universal Care (6 questions) ===
    {
        type: "mc_question",
        stance: "universal_care",
        question: "Which of the following is a primary argument for universal healthcare?",
        options: {
            "A": "It promotes market competition among insurers",
            "B": "It ensures healthcare is a right accessible to all regardless of income",
            "C": "It reduces government bureaucracy",
            "D": "It encourages patient choice in every aspect of care"
        },
        correct_answer_key: "B",
        value: 19,
        correct_feedback: "The Bridge: Correct. This philosophy prioritizes equitable access to care as a fundamental societal value.",
        incorrect_feedback: "The Bridge: Incorrect. The ethical imperative of universal access is a central tenet of this stance.",
        bridge_commentary: "Different moral frameworks underpin approaches to healthcare shaping what is considered a just system."
    },
    {
        type: "mc_question",
        stance: "universal_care",
        question: "How do universal care proponents argue it can reduce overall healthcare costs?",
        options: {
            "A": "By increasing out-of-pocket expenses for patients",
            "B": "By focusing on preventative care and reducing emergency room visits",
            "C": "By encouraging more private insurance companies",
            "D": "By limiting access to expensive treatments"
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "The Bridge: Correct. Early intervention and disease management prevent costly complications down the line.",
        incorrect_feedback: "The Bridge: Incorrect. The long-term cost-saving potential of universal preventive services is a key argument.",
        bridge_commentary: "The debate over healthcare costs often includes differing views on whether upfront investment leads to long-term savings."
    },
    {
        type: "mc_question",
        stance: "universal_care",
        question: "What criticism do universal care advocates make against market-based systems?",
        options: {
            "A": "Too much government control",
            "B": "Excessive administrative waste due to multiple payers and complex billing",
            "C": "Lack of innovation",
            "D": "Insufficient patient choice"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "The Bridge: Correct. The fragmentation and complexity of multi-payer systems are cited as sources of inefficiency.",
        incorrect_feedback: "The Bridge: Incorrect. Administrative burden is a frequent criticism against highly privatized healthcare models.",
        bridge_commentary: "The efficiency of different healthcare system structures is a key area of comparison and policy analysis."
    },
    {
        type: "mc_question",
        stance: "universal_care",
        question: "Which of the following describes a \'single-payer\' healthcare system?",
        options: {
            "A": "Multiple private insurance companies compete for customers",
            "B": "Individuals pay directly for all medical services",
            "C": "The government funds healthcare services, often by collecting taxes, and pays providers",
            "D": "Healthcare is provided only to those who can afford it"
        },
        correct_answer_key: "C",
        value: 18,
        correct_feedback: "The Bridge: Correct. In a single-payer system, the government acts as the primary payer for healthcare services.",
        incorrect_feedback: "The Bridge: Incorrect. Single-payer refers to a system where a single entity, usually the government, funds healthcare.",
        bridge_commentary: "Understanding funding mechanisms is essential to differentiating between various healthcare system models."
    },
    {
        type: "mc_question",
        stance: "universal_care",
        question: "A common argument against universal healthcare is that it leads to:",
        options: {
            "A": "Lower taxes for citizens",
            "B": "Increased private sector innovation",
            "C": "Longer wait times for non-emergency procedures",
            "D": "More personalized patient care"
        },
        correct_answer_key: "C",
        value: 16,
        correct_feedback: "The Bridge: Correct. Critics often point to potential delays in specialized or elective care.",
        incorrect_feedback: "The Bridge: Incorrect. Wait times are a frequently raised concern about government-run healthcare systems.",
        bridge_commentary: "The trade-off between universal access and efficiency in service delivery is a persistent challenge."
    },
    {
        type: "mc_question",
        stance: "universal_care",
        question: "What is a benefit of universal healthcare for public health emergencies, like pandemics?",
        options: {
            "A": "It allows for individual states to manage their own outbreaks without federal intervention.",
            "B": "It enables rapid, coordinated national responses and equitable distribution of resources.",
            "C": "It limits information sharing to protect individual privacy during a crisis.",
            "D": "It encourages private companies to develop vaccines quickly without government oversight."
        },
        correct_answer_key: "B",
        value: 19,
        correct_feedback: "The Bridge: Correct. Centralized systems can mobilize resources and implement uniform policies more effectively.",
        incorrect_feedback: "The Bridge: Incorrect. Public health crises often highlight the need for unified and coordinated healthcare efforts.",
        bridge_commentary: "The effectiveness of a healthcare system during a crisis is a crucial measure of its resilience and structure."
    },

    // === MULTIPLE CHOICE QUESTIONS: Market Solutions (6 questions) ===
    {
        type: "mc_question",
        stance: "market_solutions",
        question: "What is a primary argument for market-driven healthcare systems?",
        options: {
            "A": "It ensures equitable access for all citizens",
            "B": "It fosters innovation, consumer choice, and efficient resource allocation through competition",
            "C": "It minimizes administrative overhead through single-payer funding",
            "D": "It prioritizes public health initiatives over individual treatments"
        },
        correct_answer_key: "B",
        value: 19,
        correct_feedback: "The Bridge: Correct. This perspective argues market forces drive efficiency and responsiveness to patient needs.",
        incorrect_feedback: "The Bridge: Incorrect. The belief in market mechanisms to optimize healthcare delivery is central to this approach.",
        bridge_commentary: "The fundamental role of market forces in healthcare provision is a key differentiating factor in policy debates."
    },
    {
        type: "mc_question",
        stance: "market_solutions",
        question: "What criticism do market advocates make against universal healthcare systems?",
        options: {
            "A": "Excessive profit-seeking",
            "B": "Long wait times, limited patient choice, and lack of innovation due to bureaucracy",
            "C": "High administrative costs",
            "D": "Underspending on preventative care"
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "The Bridge: Correct. Critics argue government control can lead to inefficiencies and reduced patient autonomy.",
        incorrect_feedback: "The Bridge: Incorrect. Bureaucracy and delays are frequent concerns raised about centralized healthcare systems.",
        bridge_commentary: "The challenges of managing healthcare systems are complex with different models experiencing various inefficiencies."
    },
    {
        type: "mc_question",
        stance: "market_solutions",
        question: "What does consumer-driven healthcare primarily aim to achieve?",
        options: {
            "A": "To shift all healthcare decisions to government",
            "B": "To empower patients with financial incentives and information for cost-effective choices",
            "C": "To create a single-payer system",
            "D": "To increase reliance on employer-sponsored plans"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "The Bridge: Correct. This approach seeks to make patients more active participants in managing healthcare spending.",
        incorrect_feedback: "The Bridge: Incorrect. This model emphasizes individual financial responsibility and market transparency in decisions.",
        bridge_commentary: "Different approaches to healthcare decision-making reflect varying beliefs about individual autonomy and system efficiency."
    },
    {
        type: "mc_question",
        stance: "market_solutions",
        question: "Which of the following is NOT typically seen as a benefit of competition in healthcare?",
        options: {
            "A": "Lower prices for consumers",
            "B": "Increased quality of care",
            "C": "Greater patient access regardless of ability to pay",
            "D": "More specialized services and treatment options"
        },
        correct_answer_key: "C",
        value: 17,
        correct_feedback: "The Bridge: Correct. While competition may drive quality and choice, it doesnt inherently guarantee universal access.",
        incorrect_feedback: "The Bridge: Incorrect. Market competition is often debated for its impact on universal access versus other benefits.",
        bridge_commentary: "The goals of market efficiency and equitable access are often in tension within healthcare policy."
    },
    {
        type: "mc_question",
        stance: "market_solutions",
        question: "A common criticism of market-based healthcare systems is that they may lead to:",
        options: {
            "A": "Too many preventative care options",
            "B": "Health disparities due to unequal access based on income or insurance status",
            "C": "A lack of medical innovation",
            "D": "Excessive government oversight"
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "The Bridge: Correct. Access can be unevenly distributed in systems where ability to pay is a factor.",
        incorrect_feedback: "The Bridge: Incorrect. Equity of access is a significant concern often raised about purely market-driven systems.",
        bridge_commentary: "The tension between market efficiency and social equity is a central theme in healthcare debates."
    },
    {
        type: "mc_question",
        stance: "market_solutions",
        question: "What is a Health Savings Account (HSA) designed to do?",
        options: {
            "A": "Fund government-run healthcare programs",
            "B": "Help individuals save for healthcare expenses with tax advantages",
            "C": "Provide free healthcare services to low-income individuals",
            "D": "Replace all forms of private health insurance"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "The Bridge: Correct. HSAs are a key component of consumer-driven healthcare encouraging personal financial management.",
        incorrect_feedback: "The Bridge: Incorrect. HSAs are tools for individuals to manage their own healthcare costs.",
        bridge_commentary: "Financial mechanisms like HSAs reflect a philosophy of individual empowerment in healthcare choices."
    },

    // === MULTIPLE CHOICE QUESTIONS: Neutral (6 questions) ===
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is the primary purpose of a deductible in health insurance?",
        options: {
            "A": "The amount the insurance company pays for a service",
            "B": "The annual amount the patient must pay before insurance coverage begins",
            "C": "A discount applied to a medical bill",
            "D": "The monthly payment for insurance coverage"
        },
        correct_answer_key: "B",
        value: 15,
        correct_feedback: "The Bridge: Correct. Deductibles are a common feature requiring patients to cover initial costs.",
        incorrect_feedback: "The Bridge: Incorrect. Understanding deductibles is key to navigating most health insurance plans.",
        bridge_commentary: "Health insurance terms like deductibles are critical for understanding how systems allocate financial responsibility."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is telemedicine?",
        options: {
            "A": "Medical treatment from television doctors",
            "B": "Healthcare services delivered remotely via telecommunications technology",
            "C": "A historical medical practice involving telepathy",
            "D": "A specialized surgery field using small instruments"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "The Bridge: Correct. Telemedicine uses technology to provide care over distances improving access and convenience.",
        incorrect_feedback: "The Bridge: Incorrect. Telemedicine has become an important part of modern healthcare delivery.",
        bridge_commentary: "Technology is continually reshaping how healthcare is accessed and delivered creating opportunities and policy considerations."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is the primary role of the World Health Organization?",
        options: {
            "A": "To provide universal healthcare to all countries",
            "B": "To set global health standards, monitor disease outbreaks, and coordinate responses",
            "C": "To regulate pharmaceutical companies worldwide",
            "D": "To fund all medical research globally"
        },
        correct_answer_key: "B",
        value: 15,
        correct_feedback: "The Bridge: Correct. The WHO is a specialized UN agency focused on international public health.",
        incorrect_feedback: "The Bridge: Incorrect. The WHO plays a crucial role in global health governance and coordination.",
        bridge_commentary: "International health organizations highlight the interconnectedness of global health and need for collaborative efforts."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is a \'co-payment\' in health insurance?",
        options: {
            "A": "The total amount an individual pays for insurance annually",
            "B": "A fixed amount a patient pays for a covered healthcare service after the deductible is met",
            "C": "The amount an employer pays towards an employee\\'s insurance",
            "D": "A rebate received for healthy lifestyle choices"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "The Bridge: Correct. Co-payments are a common out-of-pocket expense for insured individuals.",
        incorrect_feedback: "The Bridge: Incorrect. Understanding co-pays is crucial for managing healthcare costs.",
        bridge_commentary: "Cost-sharing mechanisms are a common feature across many healthcare insurance models."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "Which of the following is considered a \'social determinant of health\'?",
        options: {
            "A": "Access to advanced surgical procedures",
            "B": "Pharmaceutical drug development",
            "C": "Socioeconomic status and living conditions",
            "D": "The number of hospitals in a region"
        },
        correct_answer_key: "C",
        value: 17,
        correct_feedback: "The Bridge: Correct. Factors like education, income, and housing profoundly influence health outcomes.",
        incorrect_feedback: "The Bridge: Incorrect. Social determinants extend beyond direct medical care to broader societal influences.",
        bridge_commentary: "Understanding the non-medical factors that impact health is crucial for comprehensive public health approaches."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is the purpose of a \'formulary\' in health insurance?",
        options: {
            "A": "A list of approved doctors and hospitals",
            "B": "A list of prescription drugs covered by the insurance plan",
            "C": "A document outlining patient rights",
            "D": "A calculation of a patient\\'s annual healthcare spending limit"
        },
        correct_answer_key: "B",
        value: 15,
        correct_feedback: "The Bridge: Correct. Formularies dictate which medications an insurance plan will cover.",
        incorrect_feedback: "The Bridge: Incorrect. Prescription drug coverage is often managed through a formulary.",
        bridge_commentary: "Health insurance formularies represent an important aspect of medication access and affordability."
    },

    // === FACTOIDS: Universal Care (11 questions) ===
    {
        type: "factoid",
        stance: "universal_care",
        text: "In 2024, a Lancet report found universal healthcare coverage could prevent 10 million premature deaths globally by 2030 through expanded access.",
        value: 18,
        bridge_commentary: "The potential to save lives on a global scale highlights a powerful humanitarian argument for expanding healthcare access."
    },
    {
        type: "factoid",
        stance: "universal_care",
        text: "Countries with universal healthcare often report higher patient satisfaction as individuals do not face financial barriers to treatment.",
        value: 16,
        bridge_commentary: "Patient satisfaction levels can reflect the perceived fairness and accessibility of a healthcare system."
    },
    {
        type: "factoid",
        stance: "universal_care",
        text: "Canada single-payer Medicare system ensures all citizens have access to medically necessary hospital and physician services funded through taxes.",
        value: 15,
        bridge_commentary: "International examples provide diverse models for healthcare funding and delivery with unique strengths and challenges."
    },
    {
        type: "factoid",
        stance: "universal_care",
        text: "According to 2025 studies, uninsured individuals are three times more likely to delay emergency care leading to worse outcomes.",
        value: 18,
        bridge_commentary: "Access to timely care is critical and financial barriers can lead to cycles of escalating health problems and costs."
    },
    {
        type: "factoid",
        stance: "universal_care",
        text: "Health equity aims to ensure everyone has fair opportunity to be healthy requiring elimination of obstacles to health.",
        value: 16,
        bridge_commentary: "Achieving health equity is a societal goal that often requires proactive policies to address disparities and barriers."
    },
    {
        type: "factoid",
        stance: "universal_care",
        text: "Germany multi-payer universal system combines public and private insurance offering comprehensive coverage with patient choice.",
        value: 15,
        bridge_commentary: "Different universal healthcare models demonstrate flexibility in how access is achieved and funded beyond single-payer approaches."
    },
    {
        type: "factoid",
        stance: "universal_care",
        text: "Universal mental health coverage has led to significant reductions in suicide rates and improved treatment outcomes.",
        value: 19,
        bridge_commentary: "Mental health access represents a critical component of comprehensive healthcare affecting overall population wellness."
    },
    {
        type: "factoid",
        stance: "universal_care",
        text: "Public health emergency preparedness is stronger in countries with universal systems as demonstrated during pandemic responses.",
        value: 18,
        bridge_commentary: "Coordinated public health infrastructure proves essential during health emergencies and crisis situations."
    },
    {
        type: "factoid",
        stance: "universal_care",
        text: "Nations with universal systems consistently rank higher in health equality metrics, showing less variance in health outcomes across income levels.",
        value: 17,
        bridge_commentary: "Equality in health outcomes is a key aim of universal healthcare systems, striving to reduce societal health gaps."
    },
    {
        type: "factoid",
        stance: "universal_care",
        text: "The NHS in the UK, a universal healthcare system, provides comprehensive care free at the point of use funded through general taxation.",
        value: 16,
        bridge_commentary: "The UK\\'s National Health Service is a prominent example of a fully publicly funded and operated universal healthcare model."
    },
    {
        type: "factoid",
        stance: "universal_care",
        text: "Studies show that a healthy workforce supported by universal healthcare contributes to greater economic productivity.",
        value: 17,
        bridge_commentary: "The link between public health and economic strength is a compelling argument for accessible healthcare systems."
    },

    // === FACTOIDS: Market Solutions (11 questions) ===
    {
        type: "factoid",
        stance: "market_solutions",
        text: "The United States leads the world in medical innovation including new drugs and surgical techniques attributed to robust private sector funding.",
        value: 18,
        bridge_commentary: "The pace of medical innovation is a key factor in improving health outcomes with different systems fostering it in various ways."
    },
    {
        type: "factoid",
        stance: "market_solutions",
        text: "Patient choice and ability to select doctors and insurance plans are highly valued in market-based systems promoting autonomy.",
        value: 17,
        bridge_commentary: "Individual autonomy and choice are important considerations when designing healthcare systems reflecting diverse patient preferences."
    },
    {
        type: "factoid",
        stance: "market_solutions",
        text: "Private insurance companies offer tailored plans and specialized services catering to diverse individual needs beyond government approaches.",
        value: 16,
        bridge_commentary: "The diversity of offerings in private markets can appeal to consumers seeking customized health coverage options."
    },
    {
        type: "factoid",
        stance: "market_solutions",
        text: "Growth of urgent care centers demonstrates market response to consumer demand for convenient accessible immediate care.",
        value: 15,
        bridge_commentary: "Market-driven innovation can lead to new models of care delivery that enhance convenience and address specific needs."
    },
    {
        type: "factoid",
        stance: "market_solutions",
        text: "Medical tort reform could reduce healthcare costs by curbing defensive medicine and lowering insurance premiums for providers.",
        value: 17,
        bridge_commentary: "Legal frameworks in healthcare can significantly influence provider behavior and overall system costs."
    },
    {
        type: "factoid",
        stance: "market_solutions",
        text: "Accountable Care Organizations and Value-Based Care models incentivize providers for better outcomes and efficiency through market approaches.",
        value: 16,
        bridge_commentary: "Shifting payment models to reward quality and efficiency is a common goal for improving healthcare system performance."
    },
    {
        type: "factoid",
        stance: "market_solutions",
        text: "Health Savings Accounts have grown to serve over 30 million Americans providing tax advantages and consumer control over spending.",
        value: 16,
        bridge_commentary: "Consumer-directed healthcare tools can provide individuals with more financial control and engagement in healthcare decisions."
    },
    {
        type: "factoid",
        stance: "market_solutions",
        text: "Private specialty hospitals often achieve superior outcomes in specific procedures due to focused expertise and market competition.",
        value: 18,
        bridge_commentary: "Specialization and competition can drive excellence in specific areas of medical care and treatment outcomes."
    },
    {
        type: "factoid",
        stance: "market_solutions",
        text: "The ability to choose a private doctor and avoid long wait times is a key advantage cited by proponents of market systems.",
        value: 17,
        bridge_commentary: "Personal preference for provider choice often influences support for market-oriented healthcare models."
    },
    {
        type: "factoid",
        stance: "market_solutions",
        text: "Free market principles suggest that prices in a competitive healthcare system will naturally adjust to reflect demand and supply.",
        value: 16,
        bridge_commentary: "Economic theory underpins many arguments for market-based healthcare, emphasizing efficiency through supply and demand."
    },
    {
        type: "factoid",
        stance: "market_solutions",
        text: "For-profit hospitals argue that profit motivates efficiency and reinvestment into better facilities and patient care.",
        value: 15,
        bridge_commentary: "The role of profit in healthcare delivery is a contentious issue, with differing views on its impact on quality and access."
    },

    // === FACTOIDS: Neutral (11 questions) ===
    {
        type: "factoid",
        stance: "neutral",
        text: "In 2024, global healthcare spending reached over $10 trillion annually making it one of the largest economic sectors worldwide.",
        value: 15,
        bridge_commentary: "The immense economic scale of the healthcare sector highlights its impact on national economies and global markets."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "COVID-19 exposed both strengths and weaknesses in healthcare systems globally regardless of their market-based or universal structure.",
        value: 17,
        bridge_commentary: "Global health crises often reveal systemic vulnerabilities and catalyze re-evaluation of healthcare priorities and resilience."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Electronic Health Records have revolutionized patient data management offering benefits for care coordination but challenges for security.",
        value: 16,
        bridge_commentary: "Digital transformation in healthcare brings both significant efficiencies and complex ethical and technical considerations."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Healthcare worker burnout exacerbated by staffing shortages and administrative burdens is a growing concern globally affecting care quality.",
        value: 17,
        bridge_commentary: "The well-being of healthcare workers is paramount for maintaining a robust and compassionate healthcare system."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Access to affordable healthy food and safe housing are increasingly recognized as crucial determinants of health outcomes.",
        value: 16,
        bridge_commentary: "A broader understanding of health extends beyond medical interventions to encompass fundamental conditions of daily life."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Government funding of basic scientific and medical research is widely accepted across political spectrums contributing to treatment breakthroughs.",
        value: 15,
        bridge_commentary: "Public investment in foundational research is a common area of consensus driving long-term medical advancements."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Developing a new prescription drug can exceed $1 billion largely due to extensive research and clinical trial processes.",
        value: 16,
        bridge_commentary: "The high cost of drug development is a significant factor in debates about pharmaceutical pricing and innovation incentives."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Personalized medicine tailoring treatments to individual genetic makeup promises effective therapies but presents cost and accessibility challenges.",
        value: 17,
        bridge_commentary: "Advancements in precision medicine offer exciting possibilities but necessitate careful consideration of equity and affordability."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "The global shortage of medical professionals is a challenge affecting both developed and developing nations.",
        value: 16,
        bridge_commentary: "Workforce issues in healthcare are a universal concern, impacting service delivery worldwide."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Value-based care models, which pay providers for outcomes rather than services, are being explored in various healthcare systems.",
        value: 17,
        bridge_commentary: "Shifting payment structures aims to align incentives with patient health and system efficiency, regardless of system type."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "The increasing prevalence of chronic conditions like diabetes and heart disease puts a strain on healthcare budgets globally.",
        value: 16,
        bridge_commentary: "Managing chronic illnesses is a core challenge that all healthcare systems must address to maintain sustainability."
    }
];

// Export for use in game logic
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { healthcareContent, getLoopContent };
}
