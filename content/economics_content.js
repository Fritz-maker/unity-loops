// Add this at the very beginning
function getLoopContent() {
    return economicContent;
}

// Economics Content Pool - Expanded for Unity Loops
// Research-driven, balanced perspectives, current 2025 data
// Aiming for significantly increased content pool size

const economicContent = [
    // TRUE/FALSE QUESTIONS - Government Intervention Perspective (8 from original + 10 new = 18 total)
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Income inequality in the US has reached levels not seen since the 1920s, just before the Great Depression.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! The top 1% now controls about 32% of total wealth, approaching pre-Depression levels of concentration.",
        incorrect_feedback: "Actually, wealth concentration has reached extreme levels, with inequality now rivaling the pre-Great Depression era.",
        bridge_commentary: "Extreme inequality raises questions about economic sustainability and social stability that transcend partisan politics."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "The minimum wage has lost 21% of its purchasing power since 2009, failing to keep pace with inflation and productivity gains.",
        correct_answer: true,
        value: 17,
        correct_feedback: "True. Despite productivity increases, minimum wage workers can afford less today than they could over a decade ago.",
        incorrect_feedback: "The minimum wage has indeed lost significant purchasing power, leaving workers worse off despite economic growth.",
        bridge_commentary: "Wage stagnation affects both individual workers and consumer demand that drives business growth."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Corporate profits as a share of GDP have reached historic highs while worker wages have remained flat for decades.",
        correct_answer: true,
        value: 18,
        correct_feedback: "Correct! Corporate profit margins have expanded dramatically while median wages have stagnated since the 1970s.",
        incorrect_feedback: "The gap between corporate profits and worker compensation has indeed widened to historic proportions.",
        bridge_commentary: "The divergence between profits and wages raises questions about how economic gains are distributed."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Climate change poses systemic economic risks that markets alone cannot adequately address without government coordination.",
        correct_answer: true,
        value: 16,
        correct_feedback: "True. Climate risks require long-term coordination and investment that exceeds typical market time horizons.",
        incorrect_feedback: "Market failures in addressing climate change reflect the need for government intervention in long-term planning.",
        bridge_commentary: "Climate economics demonstrates how some challenges require coordination beyond what individual actors can achieve."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Healthcare spending in the US is twice the OECD average, yet outcomes lag behind countries with more government involvement.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct! The US spends about 18% of GDP on healthcare while achieving worse outcomes than many countries spending 10-11%.",
        incorrect_feedback: "US healthcare costs are indeed exceptionally high relative to outcomes compared to other developed nations.",
        bridge_commentary: "Healthcare economics illustrates how market efficiency doesn\'t always translate to cost effectiveness or better results."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Infrastructure investment has declined as a share of GDP for decades, undermining the foundation for private sector growth.",
        correct_answer: true,
        value: 18,
        correct_feedback: "True. Public infrastructure investment has fallen from 3% to 1.5% of GDP, creating maintenance backlogs and capacity constraints.",
        incorrect_feedback: "Infrastructure underinvestment creates bottlenecks that limit private sector productivity and competitiveness.",
        bridge_commentary: "Infrastructure demonstrates how public investment creates the foundation for private economic success."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Financial crises recur approximately every decade, requiring government intervention to prevent economic collapse.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct. From the S&L crisis to 2008 to COVID, financial instability regularly requires government response.",
        incorrect_feedback: "Financial markets have repeatedly required government intervention to prevent systemic collapse.",
        bridge_commentary: "Financial instability patterns suggest that markets need regulatory frameworks to function sustainably."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Student debt has reached $1.7 trillion, creating a drag on economic growth as young people delay home purchases and business formation.",
        correct_answer: true,
        value: 17,
        correct_feedback: "True. Rising education costs and debt burdens are constraining economic mobility and consumer spending.",
        incorrect_feedback: "Student debt levels are indeed creating macroeconomic headwinds that affect overall growth and opportunity.",
        bridge_commentary: "Education financing illustrates how individual debt problems can become broader economic challenges."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "According to the Economic Policy Institute, the typical CEO of a major U.S. firm earns over 300 times more than the typical worker.",
        correct_answer: true,
        value: 17,
        correct_feedback: "True. In 2023, CEO compensation was approximately 344 times higher than that of the typical worker, a significant increase from the 1970s.",
        incorrect_feedback: "Yes, the gap between CEO and worker pay in the U.S. has widened dramatically, reaching hundreds of times the typical worker's earnings.",
        bridge_commentary: "Executive compensation trends highlight ongoing debates about fair wage distribution and corporate governance."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Public investments in research and development, such as those that led to the internet and GPS, have rarely yielded significant private sector returns.",
        correct_answer: false,
        value: 18,
        correct_feedback: "False. Public investments in foundational research, like the internet and GPS, have generated immense private sector innovation and economic growth, demonstrating the multiplier effect of government R&D.",
        incorrect_feedback: "Publicly funded research has a strong track record of spurring private sector growth and technological advancements.",
        bridge_commentary: "The history of innovation shows a powerful symbiotic relationship between public foundational research and private market application."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "During economic downturns, automatic stabilizers like unemployment benefits and food assistance help to prevent deeper recessions.",
        correct_answer: true,
        value: 16,
        correct_feedback: "True. These programs automatically increase spending during recessions, providing a crucial floor for demand and stabilizing the economy.",
        incorrect_feedback: "Yes, automatic stabilizers are designed to kick in during economic contractions, acting as a built-in buffer against severe downturns.",
        bridge_commentary: "Government programs can play a vital counter-cyclical role in mitigating the severity of economic shocks."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "The top 0.1% of American households now own more wealth than the bottom 80% combined.",
        correct_answer: true,
        value: 19,
        correct_feedback: "True. Wealth concentration has become extreme, with a tiny fraction of households holding a disproportionate share of national wealth.",
        incorrect_feedback: "Unfortunately, a very small segment of the wealthiest Americans holds more assets than the vast majority of the population combined.",
        bridge_commentary: "Such levels of wealth concentration raise fundamental questions about economic opportunity and the structure of capitalism."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Effective environmental regulations primarily hinder economic growth by increasing costs for businesses.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False. Studies show that well-designed environmental regulations can spur innovation, create new industries (like green energy), and improve public health, leading to net economic benefits in the long run.",
        incorrect_feedback: "While there may be initial costs, effective environmental regulations can drive innovation and lead to long-term economic gains.",
        bridge_commentary: "The relationship between environmental protection and economic development is often one of synergy rather than conflict."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Research suggests that increasing the federal minimum wage to $15 per hour would lead to widespread job losses across most industries.",
        correct_answer: false,
        value: 18,
        correct_feedback: "False. While some studies project modest job losses, many others find little to no significant negative impact on overall employment, with benefits for low-wage workers and local economies.",
        incorrect_feedback: "The economic impact of a $15 federal minimum wage is a subject of ongoing debate, with many analyses showing limited job loss effects.",
        bridge_commentary: "The minimum wage debate highlights the complex tradeoffs between supporting workers and potential impacts on businesses."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "The \'Too Big to Fail\' problem, where large financial institutions pose systemic risks, has been fully resolved by post-2008 financial reforms.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False. Many economists and policymakers argue that while Dodd-Frank reforms helped, the \'Too Big to Fail\' problem persists, and some financial institutions remain capable of destabilizing the entire economy.",
        incorrect_feedback: "Despite reforms, concerns remain that some financial institutions are still too large and interconnected to fail without major economic disruption.",
        bridge_commentary: "The ongoing debate over \'Too Big to Fail\' reflects the challenge of balancing financial stability with market freedom."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Universal childcare programs, like those in many European countries, typically lead to decreased maternal labor force participation.",
        correct_answer: false,
        value: 16,
        correct_feedback: "False. Universal childcare programs are strongly correlated with *increased* maternal labor force participation, boosting economic output and gender equality.",
        incorrect_feedback: "Universal childcare programs are generally found to encourage, rather than discourage, women's participation in the workforce.",
        bridge_commentary: "Social policies can have significant economic ripple effects, particularly concerning labor force dynamics."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "Public healthcare systems, despite high costs, generally provide better population health outcomes than market-based systems in the U.S.",
        correct_answer: true,
        value: 17,
        correct_feedback: "True. Countries with universal public healthcare systems often achieve better health outcomes (e.g., lower infant mortality, higher life expectancy) at lower per capita costs than the U.S.",
        incorrect_feedback: "Yes, many countries with significant government involvement in healthcare achieve superior health outcomes for their populations compared to the U.S. system.",
        bridge_commentary: "Comparing health system models reveals different approaches to balancing access, cost, and quality."
    },
    {
        type: "tf_question",
        stance: "government_intervention",
        question: "The recent Inflation Reduction Act (IRA) mainly focuses on short-term economic stimulus with little impact on long-term climate goals.",
        correct_answer: false,
        value: 18,
        correct_feedback: "False. The IRA is a landmark piece of legislation with significant long-term investments in clean energy, manufacturing, and climate resilience, aiming to reduce U.S. emissions by 40% by 2030.",
        incorrect_feedback: "The Inflation Reduction Act is primarily designed for substantial long-term investments in climate action and clean energy.",
        bridge_commentary: "Major legislation often serves multiple economic and societal goals, with effects unfolding over decades."
    },


    // TRUE/FALSE QUESTIONS - Free Market Perspective (7 from original + 10 new = 17 total)
    {
        type: "tf_question",
        stance: "free_market",
        question: "Economic growth and innovation accelerate fastest in countries with the most economic freedom and least government intervention.",
        correct_answer: true,
        value: 16,
        correct_feedback: "True. Countries like Singapore, Switzerland, and Hong Kong demonstrate how economic freedom drives prosperity.",
        incorrect_feedback: "Economic freedom indices consistently show correlation between market freedom and growth, innovation, and living standards.",
        bridge_commentary: "Economic freedom data suggests that competitive markets create strong incentives for innovation and efficiency."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Government spending as a share of GDP has grown from 20% to over 35% since 1960, crowding out private investment.",
        correct_answer: true,
        value: 17,
        correct_feedback: "Correct! Rising government spending absorbs resources that could otherwise fund private innovation and job creation.",
        incorrect_feedback: "Government's growing share of the economy does reduce resources available for private sector investment and growth.",
        bridge_commentary: "The balance between public and private resource allocation affects both economic efficiency and social outcomes."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Regulatory compliance costs now exceed $2 trillion annually, equivalent to a massive tax on business innovation and job creation.",
        correct_answer: true,
        value: 18,
        correct_feedback: "True. Regulatory burden has grown enormously, particularly affecting small businesses that drive innovation and employment.",
        incorrect_feedback: "Regulatory costs have indeed reached levels that significantly impact business formation and competitive dynamics.",
        bridge_commentary: "Regulatory costs illustrate the tradeoff between protecting consumers and enabling business innovation."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Competition from global markets has driven American innovation in technology, forcing companies to become more efficient and customer-focused.",
        correct_answer: true,
        value: 16,
        correct_feedback: "Correct! Global competition has spurred American leadership in tech, aerospace, entertainment, and other innovative sectors.",
        incorrect_feedback: "Market competition has indeed driven American companies to achieve world-leading positions in many industries.",
        bridge_commentary: "Global competition demonstrates how market pressure can drive excellence and innovation."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Price controls and rent regulations consistently create shortages, black markets, and reduced quality in affected markets.",
        correct_answer: true,
        value: 17,
        correct_feedback: "True. From rent control in New York to price controls in Venezuela, government price-setting creates predictable distortions.",
        incorrect_feedback: "Price controls have consistently failed across different times and places, creating the problems they aim to solve.",
        bridge_commentary: "Price control outcomes illustrate both market mechanisms and the unintended consequences of well-intentioned policies."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Entrepreneurship and small business formation are highest in states with lower taxes and less regulation.",
        correct_answer: true,
        value: 18,
        correct_feedback: "Correct! States like Texas and Florida see higher business formation rates than highly regulated states like California and New York.",
        incorrect_feedback: "Business formation data consistently shows correlation between regulatory burden and entrepreneurial activity.",
        bridge_commentary: "State-level differences provide natural experiments in how policy affects business creation and economic dynamism."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Free trade has lifted over 1 billion people out of extreme poverty globally while making goods more affordable for American consumers.",
        correct_answer: true,
        value: 16,
        correct_feedback: "True. Global trade integration has created unprecedented prosperity worldwide while benefiting American consumers through lower prices.",
        incorrect_feedback: "Trade liberalization has indeed driven global poverty reduction while providing Americans access to affordable goods.",
        bridge_commentary: "Trade outcomes show how market integration can create benefits across countries while also creating adjustment challenges."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Government-run industries are generally more innovative and responsive to consumer needs than private companies due to lack of profit motive.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False. Studies often show that government-run industries tend to be less innovative and responsive due to lack of competitive pressure and profit incentives compared to private companies.",
        incorrect_feedback: "History suggests that government-run industries can struggle with innovation and responsiveness compared to those operating in competitive markets.",
        bridge_commentary: "The debate over public vs. private ownership often centers on the balance between public service goals and market incentives."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Reducing corporate tax rates in the U.S. primarily benefits shareholders and executives, with little impact on worker wages or job creation.",
        correct_answer: false,
        value: 18,
        correct_feedback: "False. While shareholders benefit, many economists argue that lower corporate tax rates can also stimulate investment, lead to higher wages for workers in the long run, and encourage job growth.",
        incorrect_feedback: "Research suggests that corporate tax cuts can have broader economic impacts beyond just benefiting shareholders, including potential benefits for workers.",
        bridge_commentary: "The impact of corporate tax policy is a complex economic question with varied effects on different stakeholders."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Excessive government debt and deficits can lead to higher interest rates, crowding out private investment and hindering long-term economic growth.",
        correct_answer: true,
        value: 16,
        correct_feedback: "True. Large and persistent government deficits can increase competition for loanable funds, driving up interest rates and making it more expensive for businesses to invest and expand.",
        incorrect_feedback: "Yes, unchecked government borrowing can indeed lead to higher interest rates, which can stifle private sector investment and slow economic growth.",
        bridge_commentary: "Fiscal responsibility is a shared concern, as government debt impacts both public finances and private economic activity."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Deregulation of industries like airlines and telecommunications in the U.S. primarily led to reduced quality and increased prices for consumers.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False. Deregulation in these industries often led to increased competition, lower prices, and expanded access for consumers, though quality impacts can be debated in specific contexts.",
        incorrect_feedback: "Deregulation in industries like airlines and telecommunications generally resulted in more competition and lower costs for consumers.",
        bridge_commentary: "The effects of deregulation are complex, with benefits for consumers often needing to be weighed against other considerations."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Private sector innovation, driven by competition and profit motive, is the primary engine of long-term economic growth and rising living standards.",
        correct_answer: true,
        value: 18,
        correct_feedback: "True. The drive for profit and market competition incentivizes companies to develop new products and processes, which is fundamental to sustained economic growth.",
        incorrect_feedback: "Yes, the private sector's pursuit of innovation within competitive markets is widely recognized as the main driver of long-term prosperity.",
        bridge_commentary: "Recognizing the sources of innovation helps in designing policies that foster continued progress and prosperity."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Subsidies for renewable energy industries have always led to market distortions without accelerating clean energy adoption significantly.",
        correct_answer: false,
        value: 16,
        correct_feedback: "False. While subsidies can create distortions, many economists argue that targeted subsidies for renewable energy have been crucial in accelerating technological development and driving down costs, making clean energy more competitive.",
        incorrect_feedback: "Subsidies for renewable energy have often played a critical role in fostering industry growth and technological advancement.",
        bridge_commentary: "The debate over subsidies often involves weighing potential market distortions against the acceleration of strategic goals like climate action."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Excessive government bureaucracy and permitting processes are major barriers to new infrastructure projects and housing development.",
        correct_answer: true,
        value: 17,
        correct_feedback: "True. Lengthy and complex regulatory processes, often referred to as 'red tape,' significantly delay and increase the cost of essential infrastructure and housing projects.",
        incorrect_feedback: "Yes, inefficient government processes are frequently cited as a primary obstacle to building new infrastructure and addressing housing shortages.",
        bridge_commentary: "Streamlining governmental processes can unlock private sector investment and accelerate critical developments."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "The \'sharing economy\' platforms like Airbnb and Uber are universally praised by economists for their efficiency without any negative impacts on traditional industries or labor.",
        correct_answer: false,
        value: 16,
        correct_feedback: "False. While praised for efficiency, \'sharing economy\' platforms have also raised concerns among economists and policymakers regarding labor rights, regulatory arbitrage, and impact on traditional industries.",
        incorrect_feedback: "Sharing economy platforms have brought both significant efficiencies and complex challenges regarding labor and regulation.",
        bridge_commentary: "New economic models often present a mix of benefits and challenges, requiring careful evaluation of their broader societal impacts."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "Market-based solutions for healthcare, such as Health Savings Accounts (HSAs) and high-deductible plans, have been shown to significantly reduce overall healthcare costs without impacting access to care.",
        correct_answer: false,
        value: 18,
        correct_feedback: "False. While market-based solutions aim to control costs, research indicates that high-deductible plans can lead to individuals delaying or avoiding necessary care, particularly for lower-income households, potentially increasing long-term health issues.",
        incorrect_feedback: "Market-based healthcare solutions often face scrutiny for their impact on equitable access to care, especially for vulnerable populations.",
        bridge_commentary: "Healthcare reforms involve intricate tradeoffs between cost containment, access, and quality of care."
    },
    {
        type: "tf_question",
        stance: "free_market",
        question: "The recent surge in inflation in the U.S. is solely attributable to excessive government spending and stimulus measures.",
        correct_answer: false,
        value: 17,
        correct_feedback: "False. While government spending played a role, factors such as supply chain disruptions, energy price shocks, and strong consumer demand post-pandemic also significantly contributed to recent inflation.",
        incorrect_feedback: "Inflation is a complex phenomenon influenced by multiple factors, not just government spending.",
        bridge_commentary: "Economic challenges like inflation are rarely caused by a single factor, often reflecting a confluence of global and domestic pressures."
    },

    // MULTIPLE CHOICE QUESTIONS - Mixed Perspectives (10 from original + 15 new = 25 total)
    {
        type: "mc_question",
        stance: "government_intervention",
        question: "What explains why CEO compensation has grown 1,322% since 1978 while worker pay increased only 18%?",
        options: {
            "A": "CEOs have become 1,322% more productive",
            "B": "Market failures in executive compensation and weakened worker bargaining power",
            "C": "Natural result of skill-biased technological change",
            "D": "Globalization has increased CEO responsibilities proportionally"
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "Correct! Executive pay inflation reflects governance failures and reduced worker power rather than proportional value creation.",
        incorrect_feedback: "CEO pay growth far exceeds any measure of productivity or value creation, suggesting market dysfunction.",
        bridge_commentary: "Executive compensation trends raise questions about how markets determine value and distribute economic gains."
    },
    {
        type: "mc_question",
        stance: "free_market",
        question: "Which factor most explains why American companies dominate global technology markets?",
        options: {
            "A": "Government industrial policy and subsidies",
            "B": "Competitive markets, venture capital, and entrepreneurial culture",
            "C": "Trade protection from foreign competition",
            "D": "Superior public education and training programs"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct! American tech leadership stems from competitive markets, risk capital, and culture that rewards innovation.",
        incorrect_feedback: "American tech dominance reflects market-driven innovation rather than government planning or protection.",
        bridge_commentary: "Tech sector success illustrates how competitive markets can drive innovation and global competitiveness."
    },
    {
        type: "mc_question",
        stance: "government_intervention",
        question: "What would most effectively address climate change while maintaining economic growth?",
        options: {
            "A": "Rely solely on voluntary corporate initiatives",
            "B": "Carbon pricing plus public investment in clean energy infrastructure",
            "C": "Ban fossil fuels immediately regardless of economic costs",
            "D": "Wait for market solutions to emerge naturally"
        },
        correct_answer_key: "B",
        value: 19,
        correct_feedback: "Correct! Carbon pricing harnesses market forces while public investment accelerates necessary infrastructure transitions.",
        incorrect_feedback: "Climate economics requires both market incentives and coordinated investment in new energy systems.",
        bridge_commentary: "Climate policy demonstrates how market mechanisms and government coordination can work together."
    },
    {
        type: "mc_question",
        stance: "free_market",
        question: "What has most reduced extreme poverty worldwide over the past 30 years?",
        options: {
            "A": "Foreign aid and international development programs",
            "B": "Global trade integration and economic liberalization",
            "C": "United Nations poverty reduction initiatives",
            "D": "Debt relief for developing countries"
        },
        correct_answer_key: "B",
        value: 20,
        correct_feedback: "Correct! Market integration and economic freedom have lifted more people from poverty than all aid programs combined.",
        incorrect_feedback: "Economic liberalization and trade have been the primary drivers of global poverty reduction since 1990.",
        bridge_commentary: "Global poverty reduction demonstrates how market integration can create broad-based prosperity."
    },
    {
        type: "mc_question",
        stance: "government_intervention",
        question: "Why do Nordic countries achieve both high prosperity and low inequality?",
        options: {
            "A": "They have abandoned market economics entirely",
            "B": "High taxes, strong safety nets, and active labor market policies combined with market freedom",
            "C": "They have much smaller economies that are easier to manage",
            "D": "Cultural homogeneity eliminates economic conflicts"
        },
        correct_answer_key: "B",
        value: 21,
        correct_feedback: "Correct! Nordic success combines market efficiency with government programs that ensure broad prosperity sharing.",
        incorrect_feedback: "Nordic countries demonstrate how markets and government can work together to achieve both growth and equity.",
        bridge_commentary: "Nordic models suggest that market efficiency and social equity can be achieved simultaneously through smart policy design."
    },
    {
        type: "mc_question",
        stance: "free_market",
        question: "What best explains why living standards have risen dramatically over the past century?",
        options: {
            "A": "Government economic planning and industrial policy",
            "B": "Technological innovation driven by competitive markets and profit incentives",
            "C": "International cooperation and aid programs",
            "D": "Natural resource extraction and exploitation"
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "Correct! Market competition and profit incentives have driven innovation that has dramatically improved living standards.",
        incorrect_feedback: "Long-term prosperity growth reflects market-driven innovation more than government planning or resource extraction.",
        bridge_commentary: "Historical prosperity trends show how market incentives can drive innovation that benefits everyone."
    },
    {
        type: "mc_question",
        stance: "government_intervention",
        question: "What would most effectively address housing affordability in major cities?",
        options: {
            "A": "Eliminate all zoning and building regulations",
            "B": "Rent control to limit housing cost increases",
            "C": "Public housing investment plus zoning reform to increase supply",
            "D": "Tax incentives for private developers only"
        },
        correct_answer_key: "C",
        value: 19,
        correct_feedback: "Correct! Housing affordability requires both supply-side reforms and public investment to serve all income levels.",
        incorrect_feedback: "Housing policy requires coordinated approaches that increase supply while ensuring affordability for working families.",
        bridge_commentary: "Housing challenges illustrate how market failures and government barriers both contribute to affordability problems."
    },
    {
        type: "mc_question",
        stance: "free_market",
        question: "What most explains why some countries remain poor despite natural resource wealth?",
        options: {
            "A": "Lack of international aid and investment",
            "B": "Poor institutions, corruption, and lack of economic freedom",
            "C": "Exploitation by wealthy countries and multinational corporations",
            "D": "Geographic and climate disadvantages"
        },
        correct_answer_key: "B",
        value: 20,
        correct_feedback: "Correct! Institutional quality and economic freedom matter more for development than natural resource endowments.",
        incorrect_feedback: "Resource-rich countries that remain poor typically suffer from weak institutions rather than external exploitation.",
        bridge_commentary: "Development patterns show how institutional quality affects whether countries can translate resources into broad prosperity."
    },
    {
        type: "mc_question",
        stance: "government_intervention",
        question: "What would most effectively promote small business growth and entrepreneurship?",
        options: {
            "A": "Eliminate all business regulations and taxes",
            "B": "Public investment in education, infrastructure, and small business lending plus streamlined regulations",
            "C": "Large subsidies for established corporations",
            "D": "Import tariffs to protect domestic businesses"
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct! Small business growth requires both public infrastructure and smart regulation that doesn\'t burden startups.",
        incorrect_feedback: "Entrepreneurship thrives with supportive infrastructure and regulations that enable rather than obstruct business formation.",
        bridge_commentary: "Small business policy shows how government can create conditions for market success rather than replacing markets."
    },
    {
        type: "mc_question",
        stance: "free_market",
        question: "What has most improved workplace safety and conditions over the past century?",
        options: {
            "A": "Government regulations and labor laws exclusively",
            "B": "Technological progress and competitive labor markets that reward safe, attractive workplaces",
            "C": "Union organizing and collective bargaining alone",
            "D": "International labor standards and agreements"
        },
        correct_answer_key: "B",
        value: 16,
        correct_feedback: "Correct! Competition for workers and technological advancement have driven most workplace improvements.",
        incorrect_feedback: "Market competition for talent has been the primary driver of workplace improvements, supplemented by regulation.",
        bridge_commentary: "Workplace improvements reflect both market incentives and regulatory standards working together."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is the primary trade-off highlighted in the debate between economic efficiency and economic equity?",
        options: {
            "A": "More efficiency always means less equity, and vice versa.",
            "B": "Policies promoting one often come at a cost to the other, requiring careful balance.",
            "C": "Efficiency and equity are always mutually reinforcing.",
            "D": "There is no significant relationship between them."
        },
        correct_answer_key: "B",
        value: 20,
        correct_feedback: "Correct! Economists often discuss the efficiency-equity trade-off, where policies aimed at one may negatively impact the other, necessitating a balanced approach.",
        incorrect_feedback: "The relationship between efficiency and equity is complex, with policies often requiring a balancing act between the two goals.",
        bridge_commentary: "Economic policy frequently involves navigating inherent tensions to achieve multiple societal objectives."
    },
    {
        type: "mc_question",
        stance: "government_intervention",
        question: "Which of the following is an example of a public good that typically requires government provision due to market failure?",
        options: {
            "A": "A new smartphone model",
            "B": "A private gym membership",
            "C": "National defense or street lighting",
            "D": "A subscription to a streaming service"
        },
        correct_answer_key: "C",
        value: 18,
        correct_feedback: "Correct! Public goods like national defense or street lighting are non-excludable and non-rivalrous, making it difficult for private markets to provide them efficiently.",
        incorrect_feedback: "Public goods are characterized by their non-excludable and non-rivalrous nature, often leading to under-provision by private markets.",
        bridge_commentary: "Understanding market failures helps explain why government intervention is sometimes necessary for collective well-being."
    },
    {
        type: "mc_question",
        stance: "free_market",
        question: "According to free-market principles, what is the most effective way to allocate scarce resources in an economy?",
        options: {
            "A": "Centralized government planning and directives",
            "B": "Prices determined by supply and demand in competitive markets",
            "C": "Equitable distribution by a central authority",
            "D": "Random allocation to ensure fairness"
        },
        correct_answer_key: "B",
        value: 19,
        correct_feedback: "Correct! Free markets rely on the price mechanism, driven by supply and demand, to efficiently allocate resources.",
        incorrect_feedback: "In a free market, prices serve as signals that guide the efficient allocation of resources based on consumer preferences and producer costs.",
        bridge_commentary: "The invisible hand of the market, driven by price signals, is a core concept in free-market economics."
    },
    {
        type: "mc_question",
        stance: "government_intervention",
        question: "What is the economic term for situations where private actions impose costs on society (e.g., pollution) that are not reflected in market prices?",
        options: {
            "A": "Positive externality",
            "B": "Public good",
            "C": "Negative externality",
            "D": "Internalized cost"
        },
        correct_answer_key: "C",
        value: 17,
        correct_feedback: "Correct! This is a negative externality, a common market failure that often warrants government intervention through regulations or taxes.",
        incorrect_feedback: "When private activities impose uncompensated costs on third parties or society, it\'s known as a negative externality.",
        bridge_commentary: "Externalities highlight the broader societal impacts of economic activities beyond individual transactions."
    },
    {
        type: "mc_question",
        stance: "free_market",
        question: "What did the economic research on the 1980s U.S. deregulation of industries like airlines and trucking primarily find regarding consumer benefits?",
        options: {
            "A": "Decreased safety and increased prices",
            "B": "Increased safety and decreased prices",
            "C": "Lower prices and expanded service options",
            "D": "No significant change in prices or services"
        },
        correct_answer_key: "C",
        value: 19,
        correct_feedback: "Correct! Deregulation typically led to increased competition, lower prices, and more diverse service options for consumers in those sectors.",
        incorrect_feedback: "The deregulation of industries in the 1980s generally resulted in significant benefits for consumers through increased competition.",
        bridge_commentary: "Historical case studies of economic policy can offer valuable insights into the real-world effects of different approaches."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "Which economic indicator is most commonly used to measure the overall health and growth of a country's economy?",
        options: {
            "A": "Unemployment Rate",
            "B": "Inflation Rate",
            "C": "Gross Domestic Product (GDP)",
            "D": "Stock Market Index"
        },
        correct_answer_key: "C",
        value: 16,
        correct_feedback: "Correct! GDP is the most widely used measure of a country's total economic output and serves as a key indicator of economic health.",
        incorrect_feedback: "While other indicators are important, Gross Domestic Product (GDP) provides the broadest measure of a nation's economic activity.",
        bridge_commentary: "Economic indicators provide a snapshot of a country's performance, but a holistic view requires considering multiple data points."
    },
    {
        type: "mc_question",
        stance: "government_intervention",
        question: "What is the primary goal of progressive taxation, where higher earners pay a larger percentage of their income in taxes?",
        options: {
            "A": "To increase overall tax revenue to its maximum",
            "B": "To reduce income inequality and fund social programs",
            "C": "To discourage high-income earners from working",
            "D": "To simplify the tax code for all citizens"
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "Correct! Progressive taxation aims to redistribute wealth, reduce income disparities, and provide funding for public services and social safety nets.",
        incorrect_feedback: "Progressive tax systems are designed to address income inequality and support public services by requiring higher contributions from those with greater earning capacity.",
        bridge_commentary: "Taxation policies reflect societal values regarding fairness, equity, and the role of government in resource distribution."
    },
    {
        type: "mc_question",
        stance: "free_market",
        question: "According to free-market advocates, what is the main benefit of allowing businesses to fail in a competitive economy?",
        options: {
            "A": "It creates opportunities for government intervention.",
            "B": "It ensures that only the most efficient and innovative businesses survive, leading to overall economic improvement.",
            "C": "It reduces consumer choice.",
            "D": "It encourages monopolies."
        },
        correct_answer_key: "B",
        value: 17,
        correct_feedback: "Correct! Failure allows for creative destruction, where inefficient firms are replaced by more efficient and innovative ones, leading to stronger long-term economic health.",
        incorrect_feedback: "The ability of businesses to fail is a crucial component of a dynamic market economy, fostering efficiency and innovation.",
        bridge_commentary: "The concept of \'creative destruction\' highlights how economic change, even painful, can lead to progress."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "Which of the following is an example of \'monetary policy\' typically implemented by a central bank?",
        options: {
            "A": "Government spending on infrastructure projects",
            "B": "Changes in income tax rates",
            "C": "Adjusting interest rates to control inflation or stimulate growth",
            "D": "Direct subsidies to specific industries"
        },
        correct_answer_key: "C",
        value: 16,
        correct_feedback: "Correct! Monetary policy refers to actions by a central bank (like the Federal Reserve) to manage the money supply and credit conditions, primarily through interest rates.",
        incorrect_feedback: "Monetary policy tools, such as interest rate adjustments, are wielded by central banks to influence economic activity and price stability.",
        bridge_commentary: "Monetary and fiscal policies are distinct but interconnected tools governments use to manage the economy."
    },
    {
        type: "mc_question",
        stance: "government_intervention",
        question: "What role does government regulation play in ensuring market stability and preventing financial crises?",
        options: {
            "A": "Regulations always stifle innovation and lead to instability.",
            "B": "Strict regulations are unnecessary, as markets self-correct.",
            "C": "Regulations can mitigate excessive risk-taking and protect consumers, contributing to stability.",
            "D": "Government intervention is irrelevant to market stability."
        },
        correct_answer_key: "C",
        value: 19,
        correct_feedback: "Correct! Appropriate regulations can create guardrails that prevent financial institutions from taking on excessive risks that could trigger systemic crises.",
        incorrect_feedback: "Regulations are often seen as essential safeguards to ensure the stability and integrity of financial markets.",
        bridge_commentary: "The level and type of regulation are ongoing points of debate, with different views on balancing freedom and stability."
    },
    {
        type: "mc_question",
        stance: "free_market",
        question: "What is the concept of \'moral hazard\' in economics, often associated with government bailouts?",
        options: {
            "A": "When individuals or institutions take fewer risks knowing they will be protected from the consequences of those risks.",
            "B": "When individuals or institutions take more risks knowing they will be protected from the consequences of those risks.",
            "C": "When markets are inherently fair and ethical.",
            "D": "When all economic decisions are made based on moral principles."
        },
        correct_answer_key: "B",
        value: 20,
        correct_feedback: "Correct! Moral hazard occurs when a party increases its exposure to risk because it does not bear the full costs of that risk, often due to government guarantees.",
        incorrect_feedback: "Moral hazard refers to the tendency for risk-taking to increase when the potential negative consequences are borne by others, such as taxpayers during bailouts.",
        bridge_commentary: "Moral hazard is a key concern for free-market advocates when considering government interventions in financial markets."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is the Gini coefficient primarily used to measure in economics?",
        options: {
            "A": "Economic growth rate",
            "B": "Inflation rate",
            "C": "Income or wealth inequality within a population",
            "D": "Level of government spending"
        },
        correct_answer_key: "C",
        value: 17,
        correct_feedback: "Correct! The Gini coefficient is a statistical measure that quantifies the degree of inequality in the distribution of income or wealth.",
        incorrect_feedback: "The Gini coefficient is a widely used tool for assessing the level of income or wealth disparity within a country or group.",
        bridge_commentary: "Economic tools like the Gini coefficient allow for objective measurement of complex social phenomena like inequality."
    },
    {
        type: "mc_question",
        stance: "government_intervention",
        question: "What is often cited as a key benefit of universal healthcare systems compared to private insurance models, even if they incur higher taxes?",
        options: {
            "A": "Higher administrative costs due to bureaucracy.",
            "B": "Improved public health outcomes and reduced financial burden on individuals.",
            "C": "Slower adoption of new medical technologies.",
            "D": "Limited choice of doctors and facilities."
        },
        correct_answer_key: "B",
        value: 19,
        correct_feedback: "Correct! Universal healthcare systems often lead to better overall population health and reduce the risk of medical bankruptcy for citizens.",
        incorrect_feedback: "A major argument for universal healthcare is its potential to improve public health and provide financial security regarding medical care.",
        bridge_commentary: "The debate around healthcare systems often balances individual choice and private innovation against universal access and public health."
    },
    {
        type: "mc_question",
        stance: "free_market",
        question: "What is the concept of \'creative destruction\' in economics?",
        options: {
            "A": "The destruction of old industries and jobs without replacement.",
            "B": "The process by which new innovations and industries replace outdated ones, leading to economic growth.",
            "C": "Government intervention to dismantle monopolies.",
            "D": "The negative impact of technology on employment."
        },
        correct_answer_key: "B",
        value: 18,
        correct_feedback: "Correct! Coined by Joseph Schumpeter, it describes how innovation destroys old economic structures to create new ones, driving progress.",
        incorrect_feedback: "Creative destruction is the idea that economic progress often involves the disruption and replacement of existing industries by more innovative ones.",
        bridge_commentary: "This concept highlights the dynamic and often disruptive nature of market-driven economic change."
    },
    {
        type: "mc_question",
        stance: "neutral",
        question: "What is the primary role of the Federal Reserve (the U.S. central bank) in the economy?",
        options: {
            "A": "To directly fund government spending projects.",
            "B": "To manage the money supply and interest rates to achieve price stability and maximum employment.",
            "C": "To regulate all private businesses and industries.",
            "D": "To collect federal taxes and enforce tax laws."
        },
        correct_answer_key: "B",
        value: 20,
        correct_feedback: "Correct! The Federal Reserve conducts monetary policy to influence economic conditions, aiming for stable prices and a healthy job market.",
        incorrect_feedback: "The Federal Reserve's core mission involves maintaining economic stability through monetary policy tools.",
        bridge_commentary: "Understanding the role of independent institutions like the Federal Reserve is key to grasping modern economic management."
    },

    // FACTOIDS - Mixed Perspectives (25 from original + 5 new = 30 total)
    {
        type: "factoid",
        stance: "government_intervention",
        text: "The top 1% of Americans now own 32% of total wealth, while the bottom 50% own just 2%, representing the highest inequality since the 1920s.",
        value: 14,
        bridge_commentary: "Wealth concentration data raises questions about economic sustainability and opportunity that affect everyone's long-term prospects."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "Every $1 invested in public infrastructure generates $1.50-$2.00 in economic returns, making it one of the most effective growth policies.",
        value: 15,
        bridge_commentary: "Infrastructure investment demonstrates how public spending can create the foundation for private sector growth and competitiveness."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "Economic freedom strongly correlates with prosperity: the freest quartile of countries has per capita income 7x higher than the least free quartile.",
        value: 14,
        bridge_commentary: "Economic freedom data suggests that market-oriented policies create substantial prosperity advantages across countries."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "American companies created over 6 million jobs in 2023, demonstrating how competitive markets drive employment growth and opportunity.",
        value: 15,
        bridge_commentary: "Job creation data shows how market dynamism can generate employment opportunities across skill levels and industries."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "Countries with stronger social safety nets have higher economic mobility, enabling more people to achieve the American Dream of upward mobility.",
        value: 13,
        bridge_commentary: "Social policy outcomes suggest that government programs can enhance rather than undermine individual opportunity and success."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "Regulatory compliance costs small businesses $12,000 per employee annually, making it harder for startups to compete with large corporations.",
        value: 13,
        bridge_commentary: "Regulatory burden data illustrates how well-intentioned rules can inadvertently favor large companies over innovative startups."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "The 2008 financial crisis required $12 trillion in government intervention to prevent economic collapse, demonstrating market instability.",
        value: 16,
        bridge_commentary: "Financial crisis responses show how government action can be essential for protecting savings, jobs, and economic stability."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "Free trade has reduced global extreme poverty from 36% in 1990 to under 9% today, lifting over 1 billion people into better lives.",
        value: 16,
        bridge_commentary: "Global poverty reduction demonstrates how market integration can create widespread prosperity across countries and cultures."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "Medicare operates with 2% administrative costs compared to 8% for private insurance, showing potential efficiency gains from public programs.",
        value: 17,
        bridge_commentary: "Healthcare administration data suggests that public programs can achieve efficiency advantages in some sectors."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "Venture capital invested $170 billion in American startups in 2023, fueling innovation that creates new industries and high-paying jobs.",
        value: 17,
        bridge_commentary: "Venture capital data shows how private risk-taking drives the innovation that creates new economic opportunities."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "Research and development tax credits have generated $7 in economic returns for every $1 in government investment, spurring innovation.",
        value: 14,
        bridge_commentary: "R&D policy shows how government incentives can amplify market-driven innovation rather than replacing it."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "States with no income tax have experienced 2x faster population and job growth than high-tax states over the past decade.",
        value: 14,
        bridge_commentary: "State-level migration patterns suggest that tax policy affects where people and businesses choose to locate and invest."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "Worker productivity has increased 72% since 1973, but wages have grown only 13%, showing that growth doesn\'t automatically benefit workers.",
        value: 15,
        bridge_commentary: "Productivity and wage data illustrate how economic growth and worker benefits can become disconnected without policy intervention."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "Competition has driven down prices in industries like telecommunications and air travel while dramatically improving quality and access.",
        value: 15,
        bridge_commentary: "Deregulation outcomes demonstrate how competitive pressure can simultaneously reduce costs and improve services for consumers."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "Universal basic services in Finland reduced poverty and improved health outcomes while saving money on emergency services and welfare administration.",
        value: 16,
        bridge_commentary: "Finnish experiments suggest that comprehensive social programs can be both economically efficient and socially beneficial."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "Private space companies like SpaceX have reduced launch costs by 90% while traditional government space programs stagnated for decades.",
        value: 16,
        bridge_commentary: "Space industry transformation illustrates how private competition can drive innovation and efficiency gains that seemed impossible."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Most successful economies combine market freedom with strong institutions, property rights, and safety nets rather than choosing pure capitalism or socialism.",
        value: 12,
        bridge_commentary: "International economic comparisons suggest that successful countries blend market mechanisms with institutional frameworks."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Polls show 70% of Americans support both free enterprise and stronger worker protections, rejecting either-or approaches to economic policy.",
        value: 13,
        bridge_commentary: "Public opinion data suggests most Americans want policies that harness market dynamism while ensuring broad prosperity sharing."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "Maria Gonzalez, a restaurant worker from Miami, couldn't afford childcare until Florida expanded public pre-K, allowing her to work full-time and pursue community college.",
        value: 18,
        bridge_commentary: "Personal stories like Maria's show how public investment in families can enable individual success and economic mobility."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "David Chen started his tech company with $5,000 and grew it to 200 employees by 2024, demonstrating how entrepreneurial freedom creates jobs and innovation.",
        value: 17,
        bridge_commentary: "Success stories like David's illustrate how market opportunity and entrepreneurial spirit can create prosperity for individuals and communities."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "The Interstate Highway System, built through government investment, generated $6 in economic returns for every $1 spent and enabled decades of economic growth.",
        value: 19,
        bridge_commentary: "Historical infrastructure investment demonstrates how public projects can create the foundation for long-term private sector success."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "Amazon, Google, and Apple started in garages and grew into global companies worth trillions, showing how markets reward innovation and value creation.",
        value: 18,
        bridge_commentary: "Tech company origins illustrate how market systems can enable dramatic value creation that benefits consumers worldwide."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "The GI Bill helped 8 million World War II veterans access higher education and home ownership, creating the modern middle class through public investment.",
        value: 20,
        bridge_commentary: "The GI Bill's success shows how targeted government programs can create broad-based prosperity and economic opportunity."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "The smartphone revolution, driven by private competition and innovation, has created millions of jobs and entirely new industries worth trillions globally.",
        value: 19,
        bridge_commentary: "Smartphone innovation demonstrates how market competition can create transformative technologies that improve lives worldwide."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "Germany's social market economy combines strong labor protections with competitive markets, achieving both high productivity and shared prosperity.",
        value: 21,
        bridge_commentary: "German economic success suggests that market efficiency and social protection can work together when properly balanced."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "The average cost of a college degree in the U.S. has increased by over 169% since 1980, significantly outpacing wage growth and contributing to the student debt crisis.",
        value: 15,
        bridge_commentary: "Rising education costs are a major economic burden for many families, raising questions about affordability and access to opportunity."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "Studies show that businesses in states with right-to-work laws (which weaken unions) experienced higher job growth and investment compared to states without such laws.",
        value: 14,
        bridge_commentary: "Labor market regulations are a key area of debate between those prioritizing worker protections and those focusing on business flexibility."
    },
    {
        type: "factoid",
        stance: "neutral",
        text: "The 'gig economy' comprises over one-third of the U.S. workforce, posing new challenges and opportunities for both labor regulations and business models.",
        value: 13,
        bridge_commentary: "The rise of the gig economy necessitates new approaches to understanding labor, benefits, and market structures."
    },
    {
        type: "factoid",
        stance: "government_intervention",
        text: "Access to affordable broadband internet, often requiring government investment in underserved areas, is increasingly seen as essential for economic opportunity in the 21st century.",
        value: 16,
        bridge_commentary: "Digital infrastructure highlights how modern economic participation often relies on public and private collaboration."
    },
    {
        type: "factoid",
        stance: "free_market",
        text: "Venture capital investment in artificial intelligence (AI) startups reached a record $27 billion in 2023, showcasing private sector leadership in emerging technologies.",
        value: 17,
        bridge_commentary: "AI's rapid growth demonstrates how private investment and entrepreneurial risk-taking are driving the next wave of technological innovation."
    }
];


