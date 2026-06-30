import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "Research Overview | Forecasting India's Eighth Pay Commission",
  description:
    "A comprehensive overview of the research paper on forecasting India's Eighth Pay Commission and its impact on household consumption using econometric and machine learning models.",
}

export default function PaperContent() {
  return (
    <>
      <main>
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          {/* Back Link */}
          <div className="mb-8">
            <a href="/" className="text-accent hover:underline text-sm">
              ← Back to Research Paper
            </a>
          </div>

          {/* Title */}
          <div className="mb-12 border-b border-border pb-8">
            <h1
              className="text-5xl md:text-6xl font-sans mb-4 text-pretty"
              style={{ fontWeight: 700 }}
            >
              Research Overview
            </h1>

            <p className="text-lg text-muted-foreground font-sans">
              Forecasting India&apos;s Eighth Pay Commission and Its Household
              Consumption Effects: A Hybrid Econometric–Machine Learning
              Framework
            </p>
          </div>

          {/* Content */}
          <article className="space-y-10 text-foreground">
            {/* Overview */}
            <section className="space-y-4">
              <h2
                className="text-3xl font-sans"
                style={{ fontWeight: 700 }}
              >
                Overview
              </h2>

              <p className="leading-relaxed text-lg">
                This research presents a hybrid econometric and machine learning
                framework to forecast the outcomes of India&apos;s Eighth Pay
                Commission and evaluate its impact on household consumption
                across rural and urban India. By integrating traditional
                econometric forecasting with modern machine learning techniques,
                the study provides data-driven projections of pay revisions,
                fiscal implications, and changes in consumption behaviour.
              </p>

              <p className="leading-relaxed text-lg">
                Beyond estimating salary revisions, the framework examines how
                changes in government employee compensation may influence
                expenditure across sixteen household consumption categories. The
                proposed methodology offers an evidence-based approach for
                understanding the broader economic consequences of future pay
                commission reforms.
              </p>
            </section>
            <div className="border-t border-border mx-auto w-[40vw]"></div>

            {/* Key Findings */}
            <section className="space-y-4">
              <h2
                className="text-3xl font-sans"
                style={{ fontWeight: 700 }}
              >
                Key Findings
              </h2>

              <ul className="space-y-3 list-disc list-inside text-lg">
                <li className="leading-relaxed">
                  The model forecasts minimum and maximum pay growth of
                  approximately <strong>171.3%</strong> and{" "}
                  <strong>202.3%</strong>, respectively, under the Eighth Pay
                  Commission.
                </li>

                <li className="leading-relaxed">
                  Government fiscal expenditure is projected to exceed{" "}
                  <strong>₹2.13 trillion</strong>, highlighting the significant
                  budgetary implications of the proposed pay revision.
                </li>

                <li className="leading-relaxed">
                  Urban household consumption is projected to witness
                  substantial growth, particularly across discretionary
                  non-food categories such as clothing, footwear, and durable
                  goods.
                </li>

                <li className="leading-relaxed">
                  Rural household expenditure is expected to grow more
                  moderately, with higher spending concentrated in essential
                  goods such as cereals, milk, and beverages.
                </li>

                <li className="leading-relaxed">
                  The hybrid forecasting framework demonstrates how
                  econometric modelling and machine learning can jointly improve
                  policy forecasting, fiscal planning, and household consumption
                  analysis.
                </li>
              </ul>
            </section>
            <div className="border-t border-border mx-auto w-[40vw]"></div>

            {/* Methodology */}
            <section className="space-y-4">
              <h2
                className="text-3xl font-sans"
                style={{ fontWeight: 700 }}
              >
                Methodology
              </h2>

              <p className="leading-relaxed text-lg">
                The study employs a modular forecasting pipeline that combines
                classical econometric models with supervised machine learning
                algorithms to estimate macroeconomic indicators, pay commission
                outcomes, and household consumption patterns. Each stage builds
                upon validated outputs from the previous stage, ensuring both
                transparency and reproducibility.
              </p>

              <ul className="space-y-3 list-disc list-inside text-lg">
                <li className="leading-relaxed">
                  <strong>Macroeconomic Forecasting:</strong> ARIMA and
                  SARIMAX models forecast GDP per capita, Net National Income
                  (NNI), and inflation.
                </li>

                <li className="leading-relaxed">
                  <strong>Intermediate Indicators:</strong> Support Vector
                  Regression, Linear Regression, and Polynomial Regression
                  estimate disposable income, real pay growth, and fiscal
                  impact.
                </li>

                <li className="leading-relaxed">
                  <strong>Pay Growth Forecasting:</strong> Multi-output Ridge
                  Regression predicts minimum and maximum pay revisions under
                  the Eighth Pay Commission.
                </li>

                <li className="leading-relaxed">
                  <strong>Consumption Forecasting:</strong> A second
                  multi-output Ridge Regression estimates expenditure across
                  sixteen rural and urban household consumption categories.
                </li>

                <li className="leading-relaxed">
                  <strong>Validation:</strong> Cross-validation,
                  back-testing, and multiple evaluation metrics ensure the
                  robustness and reliability of the forecasting framework.
                </li>
              </ul>
            </section>
            <div className="border-t border-border mx-auto w-[40vw]"></div>

            {/* Policy Implications */}
            <section className="space-y-4">
              <h2
                className="text-3xl font-sans"
                style={{ fontWeight: 700 }}
              >
                Policy Implications
              </h2>

              <p className="leading-relaxed text-lg">
                The findings provide practical insights for policymakers,
                economists, and public finance institutions by quantifying both
                the fiscal burden of pay revisions and their downstream effects
                on household consumption. The framework enables a deeper
                understanding of how public-sector wage reforms can influence
                economic activity and consumer demand.
              </p>

              <ul className="space-y-3 list-disc list-inside text-lg">
                <li className="leading-relaxed">
                  Support evidence-based planning for future government
                  expenditure and fiscal sustainability.
                </li>

                <li className="leading-relaxed">
                  Assist policymakers in evaluating the inflationary and
                  consumption effects of large-scale public wage revisions.
                </li>

                <li className="leading-relaxed">
                  Identify sectors likely to experience increased consumer
                  demand following implementation of the Eighth Pay Commission.
                </li>

                <li className="leading-relaxed">
                  Demonstrate how machine learning can complement traditional
                  econometric methods in public policy forecasting.
                </li>
              </ul>
            </section>
            <div className="border-t border-border mx-auto w-[40vw]"></div>

            {/* Limitations */}
            <section className="space-y-4">
              <h2
                className="text-3xl font-sans"
                style={{ fontWeight: 700 }}
              >
                Limitations & Future Research
              </h2>

              <p className="leading-relaxed text-lg">
                While the proposed framework provides a comprehensive approach
                for forecasting pay commission outcomes, certain limitations
                arise from the availability of historical Pay Commission data
                and household expenditure surveys.
              </p>

              <ul className="space-y-3 list-disc list-inside text-lg">
                <li className="leading-relaxed">
                  The analysis is based on a limited number of historical Pay
                  Commission cycles, restricting model complexity and increasing
                  sensitivity to outliers.
                </li>

                <li className="leading-relaxed">
                  Recent household consumption datasets remain limited,
                  constraining the representation of evolving expenditure
                  patterns.
                </li>

                <li className="leading-relaxed">
                  The framework assumes relatively stable behavioural
                  relationships between income growth and household consumption
                  over time.
                </li>

                <li className="leading-relaxed">
                  Future research can incorporate deep learning techniques,
                  micro-level household datasets, scenario analysis, and
                  high-frequency economic indicators to further improve
                  forecasting accuracy.
                </li>
              </ul>
            </section>
            <div className="border-t border-border mx-auto w-[40vw]"></div>
            
            {/* Conclusion */}
            <section className="space-y-4">
              <h2
                className="text-3xl font-sans"
                style={{ fontWeight: 700 }}
              >
                Conclusion
              </h2>

              <p className="leading-relaxed text-lg">
                This research introduces an integrated econometric and machine
                learning framework for forecasting the Eighth Pay Commission and
                assessing its broader economic implications. Rather than
                focusing solely on salary revisions, the study extends the
                analysis to household consumption, providing a comprehensive
                understanding of how public-sector wage reforms may influence
                consumer behaviour across rural and urban India.
              </p>

              <p className="leading-relaxed text-lg">
                By bridging traditional economic modelling with modern machine
                learning techniques, the framework offers a transparent,
                reproducible, and scalable approach to policy forecasting. It
                contributes to evidence-based policymaking by enabling
                researchers and decision-makers to evaluate future fiscal
                reforms and their wider socioeconomic impacts with greater
                confidence.
              </p>
            </section>

            {/* CTA */}
            <div className="pt-8 border-t border-border">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                ← Back to Research Paper
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}