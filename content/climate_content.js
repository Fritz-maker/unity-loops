// Add this at the very beginning of your climate_content.js file
function getLoopContent() {
    return climateContent;
}

// This file contains the content pool for the "Climate Action" loop.
// It must be loaded BEFORE game_logic.js in your HTML.
// VIDEOS REMOVED - Clean version for faster gameplay

const climateContent = [
    // === TRUE/FALSE QUESTIONS: Environmental Protection Stance (20 total: 14 TRUE, 6 FALSE) ===
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: 2024 set a new record for both global temperature and atmospheric CO2 levels.",
        correct_answer: true,
        value: 12,
        correct_feedback: "Correct! 2024 was the warmest year since global records began in 1850, and atmospheric CO2 reached 422.8 ppm with the largest one-year increase on record.",
        incorrect_feedback: "Actually, 2024 broke both temperature and CO2 records, showing accelerating climate change impacts.",
        bridge_commentary: "The Bridge observes: While the data shows clear warming trends, both environmental advocates and economic leaders agree on the importance of accurate climate monitoring for informed decision-making."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Electric vehicles produce zero emissions throughout their entire lifecycle, including manufacturing and electricity generation.",
        correct_answer: false,
        value: 15,
        correct_feedback: "Correct! While EVs have much lower lifetime emissions than gas cars, manufacturing batteries and generating electricity still produce some emissions.",
        incorrect_feedback: "EVs significantly reduce emissions compared to gas cars, but they\'re not completely emission-free when considering manufacturing and electricity sources.",
        bridge_commentary: "The Bridge observes: Understanding the full lifecycle of clean technologies helps make realistic comparisons and drives continued improvements in manufacturing processes."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Climate change is projected to reduce global crop yields by 8% by 2050 regardless of how much emissions rise or fall.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct! Stanford research estimates that by 2050, climate change will drag global crop yields down by 8% regardless of emissions scenarios due to climate changes already locked in.",
        incorrect_feedback: "Unfortunately, some agricultural impacts are now inevitable due to past emissions, making adaptation support for farmers essential.",
        bridge_commentary: "The Bridge observes: The inevitable near-term agricultural impacts underscore why both climate mitigation and adaptation support for farmers are essential policy priorities."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Renewable energy sources like solar and wind power are now often cheaper to build and operate than new fossil fuel plants.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct. The declining costs of renewables have made them economically competitive and a preferred choice for new energy generation.",
        incorrect_feedback: "Incorrect. The economics of energy generation have shifted, with renewables frequently offering lower costs than fossil fuels.",
        bridge_commentary: "The Bridge observes: The economic viability of renewables presents a strong case for accelerating the energy transition, benefiting both climate and economy."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Solar and wind power are available 24/7 and can provide constant, uninterrupted electricity just like coal or nuclear plants.",
        correct_answer: false,
        value: 16,
        correct_feedback: "Correct! Solar and wind are intermittent sources that require energy storage, backup power, or grid flexibility to provide constant electricity.",
        incorrect_feedback: "Solar only generates during daylight hours and wind varies with weather conditions, requiring backup systems for reliable 24/7 power.",
        bridge_commentary: "The Bridge observes: Acknowledging the intermittency challenge of renewables highlights the importance of energy storage and grid modernization investments."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Extreme weather events, such as heatwaves, droughts, and intense storms, are becoming more frequent and severe due to climate change.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct. Scientific consensus indicates a clear link between climate change and the increasing intensity and frequency of extreme weather.",
        incorrect_feedback: "Incorrect. Observed climate patterns show a global increase in disruptive and dangerous weather phenomena.",
        bridge_commentary: "The Bridge observes: The rising costs and human impacts of extreme weather highlight the urgent need for both climate mitigation and resilience-building."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Planting trees can completely solve climate change by absorbing all human-caused CO2 emissions.",
        correct_answer: false,
        value: 14,
        correct_feedback: "Correct! While forests are important carbon sinks, there isn\'t enough available land to plant trees that could absorb all our emissions.",
        incorrect_feedback: "Tree planting is valuable but can\'t single-handedly solve climate change - we need emission reductions plus natural solutions.",
        bridge_commentary: "The Bridge observes: Natural climate solutions like reforestation are important components of climate action, but must be combined with emissions reductions for maximum effectiveness."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: The Paris Agreement's goal is to limit global warming to well below 2 degrees Celsius, preferably to 1.5 degrees Celsius, compared to pre-industrial levels.",
        correct_answer: true,
        value: 14,
        correct_feedback: "Correct. The 1.5 degree target is a critical threshold to avoid the most catastrophic impacts of climate change.",
        incorrect_feedback: "Incorrect. The Paris Agreement sets specific temperature targets to guide global climate action.",
        bridge_commentary: "The Bridge observes: International agreements provide a framework for collective action, but their effectiveness depends on national commitments and implementation."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Permafrost thawing in the Arctic could release vast amounts of methane, a potent greenhouse gas, creating a positive feedback loop that accelerates warming.",
        correct_answer: true,
        value: 18,
        correct_feedback: "Correct. The thawing permafrost poses a significant risk for additional greenhouse gas emissions, potentially making warming harder to control.",
        incorrect_feedback: "Incorrect. The stability of permafrost is a critical factor in global climate models due to its methane content.",
        bridge_commentary: "The Bridge observes: Understanding potential feedback loops in the climate system highlights the urgency of emissions reduction to prevent irreversible changes."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Investing in green infrastructure, such as public transport and renewable energy grids, creates more jobs than equivalent investments in fossil fuel industries.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct. Studies consistently show that green investments have a higher job creation multiplier effect.",
        incorrect_feedback: "Incorrect. The transition to a green economy is projected to be a net job creator in many sectors.",
        bridge_commentary: "The Bridge observes: Economic transition plans can align climate goals with job creation, benefiting workers and communities."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Climate change affects all regions of the world equally, with the same temperature increases and weather impacts everywhere.",
        correct_answer: false,
        value: 16,
        correct_feedback: "Correct! Climate impacts vary dramatically by region - the Arctic warms much faster, while some areas face more droughts and others more flooding.",
        incorrect_feedback: "Climate change affects different regions very differently - polar areas warm faster, and impacts like sea level rise affect coastal areas most.",
        bridge_commentary: "The Bridge observes: Understanding regional differences in climate impacts helps tailor adaptation strategies and build support for targeted solutions."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Transitioning to electric vehicles is a key strategy for reducing greenhouse gas emissions from the transportation sector.",
        correct_answer: true,
        value: 14,
        correct_feedback: "Correct. EVs, especially when powered by renewable electricity, significantly lower carbon footprints compared to gasoline cars.",
        incorrect_feedback: "Incorrect. Electrification of transport is a core component of achieving climate targets in many countries.",
        bridge_commentary: "The Bridge observes: Technological shifts in transportation offer a clear path to reducing emissions, impacting both individual consumers and national energy grids."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Reducing food waste can significantly cut down on greenhouse gas emissions, as rotting food in landfills produces methane.",
        correct_answer: true,
        value: 13,
        correct_feedback: "Correct. Food waste is a major contributor to greenhouse gas emissions, particularly methane, and also wastes resources.",
        incorrect_feedback: "Incorrect. Minimizing food waste is an often-overlooked but impactful climate action strategy.",
        bridge_commentary: "The Bridge observes: Individual and systemic changes in food consumption and waste management can contribute to broader climate goals."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Individual actions like recycling and turning off lights have no meaningful impact on global climate change.",
        correct_answer: false,
        value: 15,
        correct_feedback: "Correct! While individual actions alone aren\'t sufficient, collective individual action by millions of people can create significant impact.",
        incorrect_feedback: "Individual actions matter when adopted at scale - collective behavior change has driven major environmental improvements in the past.",
        bridge_commentary: "The Bridge observes: Individual responsibility and systemic change work together most effectively, with personal actions creating momentum for larger policy changes."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Protecting and restoring wetlands is important for climate action because they store significant amounts of carbon.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct. Wetlands are highly efficient carbon sinks, and their preservation is vital for climate mitigation.",
        incorrect_feedback: "Incorrect. Wetlands play a crucial role in regulating atmospheric carbon and supporting biodiversity.",
        bridge_commentary: "The Bridge observes: Natural climate solutions, like wetland restoration, offer co-benefits for both the environment and local communities."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Renewable energy capacity additions in 2024 were the largest ever, setting a new global record.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct. Global renewable energy deployment continues to accelerate, driven by falling costs and policy support.",
        incorrect_feedback: "Incorrect. 2024 saw unprecedented growth in renewable energy installations worldwide.",
        bridge_commentary: "The Bridge observes: The rapid growth of renewables signals a significant shift in global energy markets and a positive trend for climate action."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: All scientists worldwide agree on every detail of climate change predictions and timing.",
        correct_answer: false,
        value: 14,
        correct_feedback: "Correct! While there\'s strong consensus that human activities cause climate change, scientists continue to refine predictions about specific impacts and timing.",
        incorrect_feedback: "There's overwhelming scientific consensus on human-caused climate change, but ongoing research continues to improve our understanding of details.",
        bridge_commentary: "The Bridge observes: Scientific consensus on core climate facts provides a solid foundation, while ongoing research helps refine our understanding and responses."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Building energy efficiency improvements, like better insulation and efficient appliances, are crucial for reducing energy consumption and emissions from buildings.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct. Buildings are major energy consumers, and efficiency measures are a cost-effective way to cut emissions.",
        incorrect_feedback: "Incorrect. Energy efficiency in buildings is a fundamental strategy for climate action with significant potential.",
        bridge_commentary: "The Bridge observes: Smart investments in building efficiency can lower energy bills for consumers while contributing significantly to emissions reductions."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: Reforestation and afforestation (planting new forests) are effective ways to remove CO2 from the atmosphere.",
        correct_answer: true,
        value: 14,
        correct_feedback: "Correct. Trees act as natural carbon capture technology, absorbing CO2 as they grow.",
        incorrect_feedback: "Incorrect. Forest-based solutions are widely recognized as powerful tools for climate mitigation.",
        bridge_commentary: "The Bridge observes: Natural solutions, like planting trees, offer a universally appealing approach to addressing climate change."
    },
    {
        type: "tf_question",
        stance: "environmental_protection",
        question: "TRUE or FALSE: The energy sector is the largest contributor to global greenhouse gas emissions.",
        correct_answer: true,
        value: 13,
        correct_feedback: "Correct. The burning of fossil fuels for electricity, heat, and transport accounts for the vast majority of global emissions.",
        incorrect_feedback: "Incorrect. The energy sector is indeed the dominant source of human-caused greenhouse gas emissions.",
        bridge_commentary: "The Bridge observes: Transitioning to clean energy is paramount for tackling climate change, affecting every aspect of global energy production and consumption."
    },

    // === TRUE/FALSE QUESTIONS: Economic Priorities Stance (20 total: 14 TRUE, 6 FALSE) ===
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Strict environmental regulations can hinder economic growth by increasing costs for businesses and discouraging investment.",
        correct_answer: true,
        value: 14,
        correct_feedback: "Correct. Companies often argue that compliance costs divert resources from innovation and expansion.",
        incorrect_feedback: "Incorrect. Regulatory burdens are a frequent concern for businesses operating under strict environmental policies.",
        bridge_commentary: "The Bridge observes: Balancing environmental protection with economic competitiveness is a core challenge in climate policy discussions."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Carbon taxes always reduce economic growth and harm all businesses equally.",
        correct_answer: false,
        value: 16,
        correct_feedback: "Correct! Well-designed carbon pricing can be revenue-neutral and may even stimulate innovation and growth in clean technology sectors.",
        incorrect_feedback: "Carbon taxes can be designed to return revenue to businesses or consumers, and often create winners in clean technology industries.",
        bridge_commentary: "The Bridge observes: Carbon pricing design matters greatly - policies can be structured to minimize economic disruption while incentivizing clean innovation."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Relying heavily on renewable energy sources like solar and wind can pose challenges for grid stability due to their intermittency.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct. Managing grid stability with variable renewable output requires significant investment in energy storage and smart grid technologies.",
        incorrect_feedback: "Incorrect. The variable nature of some renewables is a known engineering challenge that requires solutions like energy storage.",
        bridge_commentary: "The Bridge observes: Ensuring energy reliability is a top priority for economic stability, influencing the pace and method of renewable energy adoption."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: The transition away from fossil fuels could lead to job losses in traditional energy sectors, impacting coal mining and oil and gas communities.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct. Economic transitions, even beneficial ones, often create challenges for existing industries and their workforces.",
        incorrect_feedback: "Incorrect. The impact on fossil fuel jobs is a significant concern often raised in discussions about energy transition.",
        bridge_commentary: "The Bridge observes: Supporting workers and communities affected by energy transition is a critical social and economic challenge for policymakers."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Renewable energy is always more expensive than fossil fuels for consumers and businesses.",
        correct_answer: false,
        value: 17,
        correct_feedback: "Correct! Renewable energy costs have dropped dramatically and are now often cheaper than fossil fuels in many markets.",
        incorrect_feedback: "Renewable energy costs have fallen so much that solar and wind are now the cheapest sources of electricity in most regions.",
        bridge_commentary: "The Bridge observes: The changing economics of energy generation are making renewables attractive even from a purely cost perspective."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Carbon capture and storage (CCS) technologies are often expensive and have not yet achieved widespread commercial viability without significant subsidies.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct. The high costs and technological hurdles make CCS a challenging solution for widespread deployment.",
        incorrect_feedback: "Incorrect. The economic and technical viability of CCS is a frequent point of discussion in carbon reduction strategies.",
        bridge_commentary: "The Bridge observes: Evaluating the cost-effectiveness of different climate technologies is essential for making sound economic and environmental policy."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Some argue that focusing too heavily on climate action diverts resources from other pressing social and economic issues, like poverty or healthcare.",
        correct_answer: true,
        value: 14,
        correct_feedback: "Correct. The opportunity cost of climate investments is a common argument for balancing priorities.",
        incorrect_feedback: "Incorrect. Resource allocation and competing priorities are central to discussions about the scale of climate investment.",
        bridge_commentary: "The Bridge observes: Prioritizing competing societal needs requires careful consideration of trade-offs and integrated policy solutions."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: All climate policies inevitably hurt low-income households more than wealthy ones.",
        correct_answer: false,
        value: 15,
        correct_feedback: "Correct! Many climate policies can be designed to benefit low-income households through rebates, job creation, and reduced energy costs.",
        incorrect_feedback: "Well-designed climate policies can include protections and benefits for low-income households, such as energy efficiency programs and rebates.",
        bridge_commentary: "The Bridge observes: Policy design can address equity concerns by ensuring that climate action benefits rather than burdens vulnerable populations."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Implementing a carbon tax could disproportionately affect lower-income households if not paired with compensatory measures.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct. The regressive nature of some carbon pricing mechanisms is a key concern for economic equity.",
        incorrect_feedback: "Incorrect. The potential for a carbon tax to impact low-income households is a widely discussed social justice issue.",
        bridge_commentary: "The Bridge observes: Climate policies need to consider economic equity to ensure a just transition that doesn\'t burden vulnerable populations."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Shifting to a fully renewable energy grid would require massive infrastructure upgrades and significant upfront investment.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct. The scale of transformation needed for a 100% renewable grid is enormous, requiring substantial capital.",
        incorrect_feedback: "Incorrect. The infrastructural demands of a full renewable transition are a major engineering and financial challenge.",
        bridge_commentary: "The Bridge observes: The economic scale of energy transition presents both challenges in funding and opportunities for new industries and jobs."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Environmental regulations never create any economic opportunities or business advantages.",
        correct_answer: false,
        value: 14,
        correct_feedback: "Correct! Environmental regulations often drive innovation and create first-mover advantages for companies that develop clean technologies.",
        incorrect_feedback: "Many businesses have found competitive advantages and new markets by getting ahead of environmental regulations.",
        bridge_commentary: "The Bridge observes: Environmental standards can drive innovation and create competitive advantages for forward-thinking businesses."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Some businesses advocate for voluntary emissions reductions rather than government mandates, arguing it fosters innovation and efficiency more effectively.",
        correct_answer: true,
        value: 13,
        correct_feedback: "Correct. Industry-led initiatives can be nimble and responsive, potentially achieving reductions without heavy regulatory burdens.",
        incorrect_feedback: "Incorrect. Many industry groups prefer market-based or voluntary approaches over strict government regulation.",
        bridge_commentary: "The Bridge observes: Different approaches to emissions reduction reflect varying beliefs about the role of government vs. market forces."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Abandoning fossil fuel investments too quickly could lead to stranded assets and financial instability for companies and economies reliant on them.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct. The risk of stranded assets is a significant financial concern for investors and governments in fossil fuel-dependent economies.",
        incorrect_feedback: "Incorrect. Financial risks associated with rapid divestment from fossil fuels are a major economic consideration.",
        bridge_commentary: "The Bridge observes: Managing the financial risks of energy transition requires careful planning and a balanced approach to investment portfolios."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: The cost of adapting to climate change impacts (e.g., sea walls, drought-resistant crops) will be substantial and compete with other infrastructure needs.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct. Adaptation requires massive investments that will place significant demands on public and private budgets.",
        incorrect_feedback: "Incorrect. The financial demands of climate adaptation are a major economic consideration for governments.",
        bridge_commentary: "The Bridge observes: Decisions about infrastructure investment will increasingly be shaped by the need for climate resilience, impacting diverse sectors."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Climate change will have no economic impacts and won\'t affect business operations or investments.",
        correct_answer: false,
        value: 16,
        correct_feedback: "Correct! Climate change poses significant economic risks through extreme weather, supply chain disruptions, and changing consumer demands.",
        incorrect_feedback: "Climate change is already affecting businesses through extreme weather, supply chains, and regulatory changes.",
        bridge_commentary: "The Bridge observes: Understanding climate-related business risks helps companies prepare and can make climate action a business imperative."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Some argue that economic growth itself can provide the resources and innovation needed to solve climate change.",
        correct_answer: true,
        value: 14,
        correct_feedback: "Correct. This perspective suggests that prosperity enables technological solutions and greater capacity for environmental action.",
        incorrect_feedback: "Incorrect. The idea that economic development can be a solution to environmental problems is a common argument.",
        bridge_commentary: "The Bridge observes: The relationship between economic growth and environmental sustainability is a complex and ongoing debate."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Policies that promote energy independence through domestic fossil fuel production are seen by some as vital for national security and economic stability.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct. Reducing reliance on foreign energy sources is a key goal for energy security advocates.",
        incorrect_feedback: "Incorrect. The concept of energy independence is a significant driver of policy in resource-rich nations.",
        bridge_commentary: "The Bridge observes: National security concerns often intersect with energy policy, affecting decisions about domestic resource development."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Carbon capture technologies could allow continued use of fossil fuels with reduced emissions, potentially preserving jobs in those industries.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct. CCS offers a pathway for decarbonization that aims to mitigate the economic disruption of a full fossil fuel phase-out.",
        incorrect_feedback: "Incorrect. CCS is often presented as a way to extend the lifespan of existing fossil fuel infrastructure with lower emissions.",
        bridge_commentary: "The Bridge observes: Technological solutions offer a means to address emissions while potentially reducing economic disruption for certain sectors."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: Increased energy costs from climate policies could negatively impact manufacturing competitiveness if industries move to countries with less stringent regulations.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct. Carbon leakage and competitiveness concerns are valid economic considerations in climate policy design.",
        incorrect_feedback: "Incorrect. The potential for industries to relocate due to carbon costs is a key economic argument against certain climate policies.",
        bridge_commentary: "The Bridge observes: Designing climate policies requires careful consideration of international competitiveness and potential economic impacts on industries."
    },
    {
        type: "tf_question",
        stance: "economic_priorities",
        question: "TRUE or FALSE: The Trump administration plans to reduce greenhouse gas emissions monitoring from 8,000 facilities to approximately 2,300 facilities in certain oil and gas sectors.",
        correct_answer: true,
        value: 13,
        correct_feedback: "Correct. This reduction in monitoring is part of broader regulatory rollbacks in environmental oversight.",
        incorrect_feedback: "Incorrect. The current administration has announced plans to significantly reduce emissions monitoring requirements for certain industries.",
        bridge_commentary: "The Bridge observes: While some see reduced reporting as cutting regulatory burden on businesses, others argue that accurate emissions data helps companies track their own sustainability progress and meet investor expectations."
    },

    // === TRUE/FALSE QUESTIONS: Neutral Stance (8 total: 6 TRUE, 2 FALSE) ===
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Carbon pricing now covers around 28% of global emissions and mobilized over $100 billion in 2024.",
        correct_answer: true,
        value: 15,
        correct_feedback: "True! Carbon pricing instruments now cover approximately 28% of global emissions and mobilized over $100 billion for public budgets in 2024.",
        incorrect_feedback: "Carbon pricing has indeed expanded significantly, covering 28% of global emissions and generating substantial revenue for governments.",
        bridge_commentary: "The Bridge observes: Carbon pricing demonstrates growing consensus that market mechanisms can address climate change while generating revenue for governments and incentivizing innovation."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Both adaptation strategies (adjusting to climate impacts) and mitigation strategies (reducing emissions) are necessary for addressing climate change effectively.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct. Adaptation addresses current and inevitable impacts, while mitigation works to prevent more severe future warming.",
        incorrect_feedback: "Incorrect. A comprehensive approach to climate change requires both reducing emissions and preparing for unavoidable changes.",
        bridge_commentary: "The Bridge observes: Recognizing the dual necessity of adaptation and mitigation helps bridge divides by focusing on a holistic response to climate challenges."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Climate change is only about temperature - it doesn\'t affect weather patterns, sea levels, or ecosystems.",
        correct_answer: false,
        value: 17,
        correct_feedback: "Correct! Climate change affects temperature, precipitation, storm intensity, sea levels, ecosystems, agriculture, and human health.",
        incorrect_feedback: "Climate change has wide-ranging impacts beyond temperature, affecting weather patterns, sea levels, ecosystems, and human societies.",
        bridge_commentary: "The Bridge observes: Understanding the broad scope of climate impacts helps explain why comprehensive solutions across multiple sectors are needed."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: The energy transition will create millions of new jobs globally in renewable energy, energy efficiency, and related sectors by 2030.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct. Forecasts from organizations like the IRENA project significant job growth in the clean energy economy.",
        incorrect_feedback: "Incorrect. The clean energy sector is projected to be a major source of future employment globally.",
        bridge_commentary: "The Bridge observes: The economic shifts of climate action present opportunities for job creation and industrial transformation across many sectors."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Public opinion polls in many countries show growing concern about climate change across political divides, though approaches to solutions differ.",
        correct_answer: true,
        value: 14,
        correct_feedback: "Correct. A rising number of people globally recognize climate change as a serious issue, even if they disagree on policy.",
        incorrect_feedback: "Incorrect. Surveys indicate increasing public awareness and concern about climate impacts in diverse populations.",
        bridge_commentary: "The Bridge observes: Finding common ground in shared concerns about climate change can open pathways for constructive dialogue on solutions."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: International cooperation is widely considered essential for effectively addressing global climate change.",
        correct_answer: true,
        value: 15,
        correct_feedback: "Correct. Climate change is a transboundary problem that requires coordinated efforts from all nations.",
        incorrect_feedback: "Incorrect. Global challenges like climate change inherently demand collaborative international responses.",
        bridge_commentary: "The Bridge observes: The global nature of climate change necessitates collaborative solutions, transcending national borders and political differences."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: There is only one correct approach to addressing climate change that all experts agree on.",
        correct_answer: false,
        value: 16,
        correct_feedback: "Correct! Experts agree on the need for climate action but debate the best mix of policies, technologies, and strategies.",
        incorrect_feedback: "While experts agree on the reality and urgency of climate change, they discuss various approaches including different policy tools and technologies.",
        bridge_commentary: "The Bridge observes: Recognizing legitimate debates about approaches can help build broader coalitions while maintaining focus on the shared goal of climate action."
    },
    {
        type: "tf_question",
        stance: "neutral",
        question: "TRUE or FALSE: Energy efficiency improvements often provide economic benefits to businesses and households regardless of environmental motivations.",
        correct_answer: true,
        value: 14,
        correct_feedback: "Correct. Reducing energy consumption typically lowers costs and improves competitiveness.",
        incorrect_feedback: "Incorrect. The economic benefits of efficiency create win-win scenarios for both finances and environment.",
        bridge_commentary: "The Bridge observes: Energy efficiency represents common ground where economic and environmental interests naturally align."
    },

    // === MULTIPLE CHOICE QUESTIONS: Environmental Protection Stance (8 total) ===
    {
        type: "mc_question",
        stance: "environmental_protection",
        question: "What percentage of global electricity generation are renewables expected to provide in 2025?",
        options: {
            "A": "More than one-third",
            "B": "About one-quarter",
            "C": "Nearly half",
            "D": "Less than one-fifth"
        },
        correct_answer_key: "A",
        value: 14,
        correct_feedback: "Correct! Renewables are forecast to provide more than one-third of total electricity generation globally in 2025, overtaking coal-fired generation for the first time.",
        incorrect_feedback: "Renewables are expected to provide more than one-third of global electricity in 2025, marking a historic energy transition milestone.",
        bridge_commentary: "The Bridge observes: The renewable energy milestone represents both environmental progress and economic opportunity, as clean energy has become cost-competitive with fossil fuels."
    },
    {
        type: "mc_question",
        stance: "environmental_protection",
        question: "What is the primary way forests contribute to mitigating climate change?",
        options: {
            "A": "By reflecting sunlight back into space",
            "B": "By releasing water vapor that cools the atmosphere",
            "C": "By absorbing carbon dioxide from the atmosphere",
            "D": "By reducing wind speeds"
        },
        correct_answer_key: "C",
        value: 15,
        correct_feedback: "Correct. Photosynthesis by trees removes CO2, storing carbon in their biomass and the soil.",
        incorrect_feedback: "Incorrect. Forests serve as crucial carbon sinks, playing a key role in regulating atmospheric CO2 levels.",
        bridge_commentary: "The Bridge observes: Nature-based solutions offer powerful and accessible ways to address climate change while benefiting ecosystems."
    },
    {
        type: "mc_question",
        stance: "environmental_protection",
        question: "Which sector is the largest contributor to global greenhouse gas emissions?",
        options: {
            "A": "Agriculture",
            "B": "Transportation",
            "C": "Industry",
            "D": "Energy production and use"
        },
        correct_answer_key: "D",
        value: 14,
        correct_feedback: "Correct. Burning fossil fuels for electricity, heat, and fuel makes the energy sector the dominant emitter.",
        incorrect_feedback: "Incorrect. The energy sector is the leading source of greenhouse gas emissions globally.",
        bridge_commentary: "The Bridge observes: Targeting the largest sources of emissions is essential for achieving meaningful progress in climate action."
    },
    {
        type: "mc_question",
        stance: "environmental_protection",
        question: "What does net-zero emissions mean?",
        options: {
            "A": "No emissions are produced at all",
            "B": "Only 50% of emissions are produced compared to a baseline",
            "C": "Any emissions produced are balanced by an equivalent amount removed from the atmosphere",
            "D": "Emissions are only produced from renewable sources"
        },
        correct_answer_key: "C",
        value: 16,
        correct_feedback: "Correct. Net-zero aims for a balance between emissions released and emissions removed, often through carbon capture or natural sinks.",
        incorrect_feedback: "Incorrect. Net-zero is a target that acknowledges some emissions may still occur but must be offset.",
        bridge_commentary: "The Bridge observes: The concept of net-zero emissions provides a clear, actionable target for global climate policy, driving innovation and strategy."
    },
    {
        type: "mc_question",
        stance: "environmental_protection",
        question: "Which of these everyday actions has the largest impact on an individual's carbon footprint?",
        options: {
            "A": "Recycling plastic bottles",
            "B": "Turning off lights when leaving a room",
            "C": "Reducing meat consumption, especially beef",
            "D": "Using a reusable shopping bag"
        },
        correct_answer_key: "C",
        value: 15,
        correct_feedback: "Correct. The environmental footprint of meat production, especially beef, is significantly higher than other food sources.",
        incorrect_feedback: "Incorrect. While all these actions help, some have a disproportionately larger effect on personal emissions.",
        bridge_commentary: "The Bridge observes: Individual choices, especially around diet and consumption, can collectively contribute to significant climate impact reductions."
    },
    {
        type: "mc_question",
        stance: "environmental_protection",
        question: "Which renewable energy source has shown the fastest cost decline over the past decade?",
        options: {
            "A": "Wind power",
            "B": "Solar photovoltaic",
            "C": "Hydroelectric",
            "D": "Geothermal"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "Correct. Solar PV costs have declined by over 85% since 2010, making it the cheapest electricity source in many regions.",
        incorrect_feedback: "Incorrect. Solar photovoltaic technology has experienced the most dramatic cost reductions among renewable sources.",
        bridge_commentary: "The Bridge observes: Rapid cost declines in solar power demonstrate how technological innovation can make clean energy economically attractive."
    },
    {
        type: "mc_question",
        stance: "environmental_protection",
        question: "What percentage of global CO2 emissions come from buildings (both construction and operation)?",
        options: {
            "A": "Around 20%",
            "B": "Nearly 40%",
            "C": "About 15%",
            "D": "Over 50%"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct. Buildings account for nearly 40% of global CO2 emissions, making them a critical target for decarbonization.",
        incorrect_feedback: "Incorrect. The building sector represents a massive opportunity for emissions reductions through efficiency and electrification.",
        bridge_commentary: "The Bridge observes: The large emissions footprint of buildings highlights opportunities for both individual action and policy interventions."
    },
    {
        type: "mc_question",
        stance: "environmental_protection",
        question: "What is the main reason why methane emissions are particularly concerning for near-term climate action?",
        options: {
            "A": "Methane is much more abundant than CO2",
            "B": "Methane has a much higher warming potential than CO2 over short time periods",
            "C": "Methane emissions are increasing faster than any other greenhouse gas",
            "D": "Methane cannot be captured or reduced with current technology"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "Correct. Methane has over 80 times the warming potential of CO2 over a 20-year period, making it a high-impact target for near-term action.",
        incorrect_feedback: "Incorrect. The extreme potency of methane makes it a priority for rapid emissions reductions.",
        bridge_commentary: "The Bridge observes: Targeting methane offers a fast way to slow warming while longer-term CO2 reduction strategies take effect."
    },

    // === MULTIPLE CHOICE QUESTIONS: Economic Priorities Stance (8 total) ===
    {
        type: "mc_question",
        stance: "economic_priorities",
        question: "Which of the following is an argument for a gradual transition away from fossil fuels?",
        options: {
            "A": "To accelerate job creation in renewable energy",
            "B": "To ensure grid stability and energy security during the transition",
            "C": "To meet aggressive emissions targets quickly",
            "D": "To avoid any investment in carbon capture technologies"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "Correct. A phased approach is often advocated to manage economic disruption and maintain reliable energy supply.",
        incorrect_feedback: "Incorrect. Managing energy supply and demand during a transition is a key economic and logistical concern.",
        bridge_commentary: "The Bridge observes: The pace of energy transition involves a trade-off between speed of decarbonization and economic stability and security."
    },
    {
        type: "mc_question",
        stance: "economic_priorities",
        question: "What economic impact is most frequently cited by industries concerned about strict climate regulations?",
        options: {
            "A": "Increased consumer demand for green products",
            "B": "Higher operational costs and reduced competitiveness",
            "C": "More funding for research and development",
            "D": "Improved public image and brand value"
        },
        correct_answer_key: "B",
        value: 15,
        correct_feedback: "Correct. Businesses often worry that compliance costs will make them less competitive against international rivals with looser regulations.",
        incorrect_feedback: "Incorrect. Cost increases and market position are primary concerns for industries facing new environmental mandates.",
        bridge_commentary: "The Bridge observes: Policy design often seeks to balance environmental benefits with potential economic impacts on businesses and sectors."
    },
    {
        type: "mc_question",
        stance: "economic_priorities",
        question: "Which of the following describes carbon leakage?",
        options: {
            "A": "The natural release of carbon from soils",
            "B": "The transfer of carbon pollution from one country to another through international trade",
            "C": "The unintended release of CO2 from carbon capture facilities",
            "D": "The effect of melting permafrost releasing methane"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct. Carbon leakage occurs when companies move production to countries with less strict climate policies, shifting emissions rather than reducing them globally.",
        incorrect_feedback: "Incorrect. Carbon leakage describes a specific economic phenomenon related to international climate policy.",
        bridge_commentary: "The Bridge observes: Addressing carbon leakage concerns is crucial for designing effective global climate policies that don't inadvertently shift emissions or jobs."
    },
    {
        type: "mc_question",
        stance: "economic_priorities",
        question: "What is the primary concern regarding stranded assets in the context of climate policy?",
        options: {
            "A": "Loss of natural habitats due to climate change",
            "B": "Financial losses from fossil fuel infrastructure that becomes uneconomic due to climate policies",
            "C": "Difficulty in financing new renewable energy projects",
            "D": "The abandonment of coastal properties due to sea-level rise"
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "Correct. Stranded assets refer to investments (like oil reserves or power plants) that lose value prematurely due to climate action.",
        incorrect_feedback: "Incorrect. This term describes a specific financial risk associated with the transition to a low-carbon economy.",
        bridge_commentary: "The Bridge observes: Managing the financial risks of energy transition requires careful consideration of investment strategies and policy timelines."
    },
    {
        type: "mc_question",
        stance: "economic_priorities",
        question: "What is a primary concern for fossil fuel-dependent economies during a rapid energy transition?",
        options: {
            "A": "Increased tourism due to cleaner environments",
            "B": "Economic diversification into new industries",
            "C": "Job losses and economic disruption for workers and communities",
            "D": "Higher tax revenues from renewable energy"
        },
        correct_answer_key: "C",
        value: 17,
        correct_feedback: "Correct. Regions heavily reliant on fossil fuel industries face significant challenges in adapting their economies and workforce.",
        incorrect_feedback: "Incorrect. The human and economic impact on traditional energy communities is a major concern in energy transition planning.",
        bridge_commentary: "The Bridge observes: Addressing the social and economic impacts of energy transition is crucial for ensuring a just and equitable future for all."
    },
    {
        type: "mc_question",
        stance: "economic_priorities",
        question: "What percentage of global energy investment went to clean energy technologies in 2024?",
        options: {
            "A": "Around 40%",
            "B": "Nearly 70%",
            "C": "About 25%",
            "D": "Over 80%"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "Correct. Clean energy attracted nearly 70% of global energy investment in 2024, showing strong market confidence in the transition.",
        incorrect_feedback: "Incorrect. The majority of energy investment is now flowing to clean technologies, reflecting changing market dynamics.",
        bridge_commentary: "The Bridge observes: Investment patterns show that markets are increasingly viewing clean energy as the more attractive and profitable option."
    },
    {
        type: "mc_question",
        stance: "economic_priorities",
        question: "Which factor is most often cited as limiting small business adoption of clean energy technologies?",
        options: {
            "A": "Lack of environmental concern",
            "B": "High upfront capital costs",
            "C": "Regulatory complexity",
            "D": "Technical performance issues"
        },
        correct_answer_key: "B",
        value: 15,
        correct_feedback: "Correct. Small businesses often lack access to capital for efficiency improvements that would provide long-term savings.",
        incorrect_feedback: "Incorrect. Financial barriers are the primary constraint preventing small business clean energy adoption.",
        bridge_commentary: "The Bridge observes: Addressing financing barriers for small businesses could accelerate clean energy adoption while supporting local economic development."
    },
    {
        type: "mc_question",
        stance: "economic_priorities",
        question: "What is the projected annual investment needed globally to achieve net-zero emissions by 2050?",
        options: {
            "A": "Around $1 trillion",
            "B": "Nearly $5 trillion",
            "C": "About $500 billion",
            "D": "Over $10 trillion"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct. The International Energy Agency projects that achieving net-zero by 2050 requires nearly $5 trillion in annual clean energy investment by 2030.",
        incorrect_feedback: "Incorrect. The scale of investment required for net-zero demonstrates both the challenge and the enormous market opportunity.",
        bridge_commentary: "The Bridge observes: The massive investment requirements for net-zero highlight both economic challenges and unprecedented opportunities for growth and innovation."
    },

    // === MULTIPLE CHOICE QUESTIONS: Neutral Stance (6 total) ===
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is a just transition in the context of climate action?",
        options: {
            "A": "A rapid shift to a purely renewable energy system without any fossil fuels",
            "B": "A framework to ensure that the economic and social impacts of transitioning to a low-carbon economy are fair and equitable",
            "C": "A legal process for suing polluters for environmental damages",
            "D": "A tax on carbon emissions that disproportionately affects fossil fuel companies"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct. A just transition seeks to protect workers and communities reliant on fossil fuels, ensuring they benefit from the new green economy.",
        incorrect_feedback: "Incorrect. This concept emphasizes social equity and fairness during the shift to a sustainable economy.",
        bridge_commentary: "The Bridge observes: The concept of a just transition seeks to bridge the gap between environmental imperatives and economic concerns, fostering broad support for climate action."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "Which international body provides the scientific consensus on climate change?",
        options: {
            "A": "World Economic Forum (WEF)",
            "B": "United Nations (UN)",
            "C": "Intergovernmental Panel on Climate Change (IPCC)",
            "D": "International Energy Agency (IEA)"
        },
        correct_answer_key: "C",
        value: 15,
        correct_feedback: "Correct. The IPCC is responsible for assessing and synthesizing the latest climate science for policymakers.",
        incorrect_feedback: "Incorrect. This specific body is dedicated to providing comprehensive scientific assessments of climate change.",
        bridge_commentary: "The Bridge observes: Relying on robust scientific assessments provides a common foundation for understanding climate change across different perspectives."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is the general trend in the cost of renewable energy technologies (solar, wind) over the last decade?",
        options: {
            "A": "Significantly increased",
            "B": "Remained stable",
            "C": "Significantly decreased",
            "D": "Only decreased for fossil fuels"
        },
        correct_answer_key: "C",
        value: 16,
        correct_feedback: "Correct. The dramatic reduction in costs has made renewables increasingly competitive with traditional energy sources.",
        incorrect_feedback: "Incorrect. The economic competitiveness of renewables has been transformed by a sharp decline in their costs.",
        bridge_commentary: "The Bridge observes: The economic viability of clean energy technologies offers a compelling point of convergence for both environmental and economic interests."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is the primary function of a carbon market?",
        options: {
            "A": "To sell carbon-rich soil amendments",
            "B": "To allow companies to buy and sell allowances to emit greenhouse gases",
            "C": "To trade in fossil fuel derivatives",
            "D": "To regulate the price of gasoline"
        },
        correct_answer_key: "B",
        value: 15,
        correct_feedback: "Correct. Carbon markets create a financial incentive for companies to reduce their emissions by making pollution a tradable commodity.",
        incorrect_feedback: "Incorrect. Carbon markets are designed to use economic mechanisms to incentivize emissions reductions.",
        bridge_commentary: "The Bridge observes: Market-based approaches to climate action aim to harness economic forces to achieve environmental outcomes efficiently."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "Which approach to climate action typically enjoys the broadest public support across political divides?",
        options: {
            "A": "Carbon taxes",
            "B": "Energy efficiency programs",
            "C": "Fossil fuel bans",
            "D": "International climate agreements"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct. Energy efficiency programs typically have broad support because they save money while reducing emissions.",
        incorrect_feedback: "Incorrect. Efficiency measures often represent the most politically feasible climate action.",
        bridge_commentary: "The Bridge observes: Energy efficiency represents common ground where economic and environmental benefits naturally align, making it widely acceptable."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What role do cities play in global climate action?",
        options: {
            "A": "Cities have minimal impact on climate change",
            "B": "Cities are responsible for over 70% of global emissions but also drive most climate innovation",
            "C": "Cities can only respond to national policies",
            "D": "Cities primarily focus on adaptation rather than mitigation"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "Correct. Cities generate most global emissions but are also leading sources of climate solutions and innovation.",
        incorrect_feedback: "Incorrect. Cities are both major contributors to climate change and key drivers of solutions.",
        bridge_commentary: "The Bridge observes: Cities represent both the challenge and the opportunity of climate action, often moving faster than national governments on solutions."
    },

    // === FACTOIDS: Environmental Protection Stance (10 total) ===
    {
        type: "factoid",
        stance: "environmental_protection",
        text: "Soils hold 5 times more carbon than the atmosphere, so even small increases in soil organic matter through farming practices can remove significant amounts of carbon from the air.",
        value: 14,
        bridge_commentary: "The Bridge observes: Soil carbon storage represents a rare win-win opportunity where farmers can improve soil health and productivity while contributing to climate solutions."
    },
    {
        type: "factoid",
        stance: "environmental_protection",
        text: "The Arctic is warming at more than twice the global average rate, leading to rapid ice melt, permafrost thaw, and disruption of polar ecosystems, with global ripple effects.",
        value: 18,
        bridge_commentary: "The Bridge observes: The accelerated warming in the Arctic highlights the urgency of addressing global emissions to protect vulnerable polar regions."
    },
    {
        type: "factoid",
        stance: "environmental_protection",
        text: "Over 30% of global food produced is wasted annually, contributing 8-10% of global greenhouse gas emissions through decomposition in landfills and resource-intensive production.",
        value: 15,
        bridge_commentary: "The Bridge observes: Reducing food waste is a powerful and accessible climate action that also addresses resource efficiency and food security."
    },
    {
        type: "factoid",
        stance: "environmental_protection",
        text: "By 2025, over 150 major cities globally have committed to ambitious climate action plans, including transitioning to 100% renewable energy or achieving net-zero emissions.",
        value: 16,
        bridge_commentary: "The Bridge observes: City-level climate leadership demonstrates how local initiatives can contribute significantly to national and global climate goals."
    },
    {
        type: "factoid",
        stance: "environmental_protection",
        text: "Renewable energy technologies like solar and wind require less water for operation compared to traditional fossil fuel or nuclear power plants, offering a water-saving benefit.",
        value: 14,
        bridge_commentary: "The Bridge observes: The water footprint of energy production is a growing concern, making water-efficient renewables an attractive solution in water-stressed regions."
    },
    {
        type: "factoid",
        stance: "environmental_protection",
        text: "Electric vehicles powered by renewable electricity can reduce transportation emissions by up to 80% compared to gasoline vehicles over their lifetime.",
        value: 16,
        bridge_commentary: "The Bridge observes: The emissions benefits of electric vehicles increase as electricity grids become cleaner, creating a positive feedback loop for decarbonization."
    },
    {
        type: "factoid",
        stance: "environmental_protection",
        text: "Protecting and restoring mangrove forests can sequester carbon 10 times faster per acre than terrestrial forests while also providing coastal storm protection.",
        value: 17,
        bridge_commentary: "The Bridge observes: Coastal ecosystem restoration offers multiple benefits, protecting both communities and climate simultaneously."
    },
    {
        type: "factoid",
        stance: "environmental_protection",
        text: "Green roofs and walls in cities can reduce building energy use by 30% while also decreasing urban heat island effects and improving air quality.",
        value: 14,
        bridge_commentary: "The Bridge observes: Nature-based urban solutions provide multiple benefits for both climate and quality of life in cities."
    },
    {
        type: "factoid",
        stance: "environmental_protection",
        text: "Heat pumps work efficiently even in cold climates, with new models operating effectively at temperatures down to -15 degrees Fahrenheit while using 65% less energy than traditional heating.",
        value: 17,
        bridge_commentary: "The Bridge observes: Technological improvements are expanding the applicability of clean energy solutions to diverse geographic and climate conditions."
    },
    {
        type: "factoid",
        stance: "environmental_protection",
        text: "Community solar projects allow people who can\'t install rooftop panels to access renewable energy, democratizing clean electricity access.",
        value: 16,
        bridge_commentary: "The Bridge observes: Innovative financing and ownership models are making clean energy accessible to broader populations, including renters and low-income households."
    },

    // === FACTOIDS: Economic Priorities Stance (10 total) ===
    {
        type: "factoid",
        stance: "economic_priorities",
        text: "The International Energy Agency projects that achieving net-zero emissions by 2050 would require global annual clean energy investment to triple by 2030, reaching nearly $5 trillion.",
        value: 17,
        bridge_commentary: "The Bridge observes: The sheer scale of investment required for a rapid energy transition highlights both economic challenges and enormous market opportunities."
    },
    {
        type: "factoid",
        stance: "economic_priorities",
        text: "Many oil and gas companies are investing in carbon capture, utilization, and storage technologies, viewing them as a way to decarbonize while maintaining their existing infrastructure.",
        value: 15,
        bridge_commentary: "The Bridge observes: Industry-led investments in CCUS reflect a strategy to address emissions within existing economic frameworks, balancing climate goals with current business models."
    },
    {
        type: "factoid",
        stance: "economic_priorities",
        text: "The rise of Environmental, Social, and Governance investing indicates that financial markets are increasingly factoring climate risks and opportunities into investment decisions.",
        value: 15,
        bridge_commentary: "The Bridge observes: Investor demand for sustainability is driving corporate climate action, demonstrating the growing financial imperative of addressing climate change."
    },
    {
        type: "factoid",
        stance: "economic_priorities",
        text: "Coal plant retirements in the U.S. have accelerated due to economic factors, with natural gas and renewables often providing cheaper electricity than continued coal operations.",
        value: 16,
        bridge_commentary: "The Bridge observes: Market forces are driving energy transitions even without policy mandates, as clean energy becomes increasingly cost-competitive."
    },
    {
        type: "factoid",
        stance: "economic_priorities",
        text: "Small and medium enterprises often face financial barriers to energy efficiency improvements, despite potential savings of 20-30% on energy costs.",
        value: 14,
        bridge_commentary: "The Bridge observes: Addressing financing barriers for smaller businesses could unlock significant economic and environmental benefits."
    },
    {
        type: "factoid",
        stance: "economic_priorities",
        text: "Energy storage costs have declined by 90% since 2010, making renewable energy with battery backup increasingly competitive with traditional power plants.",
        value: 16,
        bridge_commentary: "The Bridge observes: Technological cost reductions are addressing traditional economic concerns about renewable energy reliability and grid stability."
    },
    {
        type: "factoid",
        stance: "economic_priorities",
        text: "The circular economy approach to manufacturing can reduce material costs by 80% while cutting emissions, creating economic incentives for waste reduction.",
        value: 15,
        bridge_commentary: "The Bridge observes: Circular business models demonstrate how environmental improvements can drive cost savings and competitive advantages."
    },
    {
        type: "factoid",
        stance: "economic_priorities",
        text: "Regional economic development programs are increasingly focusing on clean energy manufacturing to attract investment and create jobs in rural and industrial areas.",
        value: 16,
        bridge_commentary: "The Bridge observes: Clean energy manufacturing is becoming a tool for economic development, particularly in regions seeking to diversify their economies."
    },
    {
        type: "factoid",
        stance: "economic_priorities",
        text: "Productivity gains from energy efficiency improvements often exceed the direct energy cost savings, providing additional economic benefits beyond bill reductions.",
        value: 14,
        bridge_commentary: "The Bridge observes: The broader economic benefits of efficiency investments extend beyond energy savings to include improved competitiveness and worker comfort."
    },
    {
        type: "factoid",
        stance: "economic_priorities",
        text: "Financial institutions are increasingly requiring climate risk disclosures and stress testing, making climate adaptation a business imperative for loan approval.",
        value: 18,
        bridge_commentary: "The Bridge observes: Financial system requirements are creating economic incentives for climate action independent of regulatory mandates."
    },

    // === FACTOIDS: Neutral/Bridge-Building Stance (8 total) ===
    {
        type: "factoid",
        stance: "neutral",
        text: "Public-private partnerships are becoming increasingly crucial for financing the large-scale infrastructure projects needed for both renewable energy deployment and climate adaptation.",
        value: 16,
        bridge_commentary: "The Bridge observes: Collaborative funding models can accelerate climate action by pooling resources and expertise from both government and the private sector."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Investment in climate education and green skills training is vital for preparing the workforce for the jobs of the future in a low-carbon economy.",
        value: 16,
        bridge_commentary: "The Bridge observes: Educating and training a skilled workforce for the green economy is a shared goal that benefits individuals, industries, and national competitiveness."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Local communities often bear the brunt of both climate impacts (e.g., flooding, wildfires) and the economic shifts of energy transitions, highlighting the need for local-level support.",
        value: 17,
        bridge_commentary: "The Bridge observes: Understanding and addressing the specific needs of local communities is essential for designing effective and equitable climate policies."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Energy independence is a goal shared across political perspectives, though the preferred paths differ, with some favoring domestic fossil fuels and others renewable energy.",
        value: 15,
        bridge_commentary: "The Bridge observes: The shared goal of energy independence provides common ground for discussions about energy policy, even when preferred approaches differ."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Innovation in clean technology is driving job creation in both traditional industrial regions and tech hubs, spreading economic benefits across diverse communities.",
        value: 18,
        bridge_commentary: "The Bridge observes: Clean technology innovation is creating opportunities for economic development across different types of communities and skill levels."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Both farmers and environmentalists have strong interests in soil health, water conservation, and pollinator protection, creating natural areas for collaboration.",
        value: 15,
        bridge_commentary: "The Bridge observes: Shared concerns about land and water stewardship can bridge divides between agricultural and environmental communities."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Military and security agencies worldwide are incorporating climate change into strategic planning due to its impacts on resource scarcity, migration, and regional stability.",
        value: 17,
        bridge_commentary: "The Bridge observes: National security perspectives on climate change can provide common ground for action across different political viewpoints."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Community-scale renewable energy projects often enjoy broad local support because they keep energy dollars in the local economy while providing clean power.",
        value: 16,
        bridge_commentary: "The Bridge observes: Local ownership of clean energy projects can align economic development goals with environmental benefits, creating win-win scenarios."
    }
];

// Export for use in game logic
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { climateContent, getLoopContent };
}
