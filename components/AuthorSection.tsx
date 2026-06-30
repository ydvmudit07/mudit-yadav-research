import Image from 'next/image'

export function AuthorSection() {
  return (
    <section className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left column */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-4xl font-sans mb-8" style={{ fontWeight: 700 }}>About the Author</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Mudit Yadav received his Bachelor of Technology (B.Tech.) in <b>Computer Science and Business</b> from the <b>Indian Institute of Information Technology (IIIT), Lucknow</b>.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Mudit&apos;s research focuses on the application of econometric methods, machine learning, and data science to public policy and macroeconomic analysis. His work explores the use of predictive models to address complex policy challenges, particularly in the areas of fiscal policy, economic forecasting, and household consumption, with the objective of supporting evidence-based decision-making.
              </p>
            </div>
          </div>

          {/* Right column - Author photo */}
          <div className="md:col-span-1 flex flex-col" style={{marginTop: '-1rem'}}>
            <div className="overflow-hidden border-2 border-border bg-muted aspect-square">
              <Image
                src="/author-image.jpeg"
                alt="Mudit Yadav"
                width={800}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
