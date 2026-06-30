"use client"

import { useState } from 'react'

export function Hero() {
  const [isPdfMaximized, setIsPdfMaximized] = useState(false)

  return (
    <section className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-16">
        <div className="grid md:grid-cols-2 gap-32">
          {/* Left column */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h1 className="text-4xl md:text-4xl font-sans leading-tight mb-8 text-pretty" style={{ fontWeight: 700 }}>
                Forecasting India&apos;s <br /> Eighth Pay Commission
              </h1>
              <p className="text-lg text-muted-foreground font-sans">
                Published On: <b>June 12, 2025</b>
              </p>
            </div>

            {/* Abstract */}
            <div className="space-y-4">
              <h2 className="text-2xl font-sans" style={{ fontWeight: 700 }}>Quick Overview</h2>
              <p className="leading-relaxed text-foreground">
                This paper presents a comprehensive econometric and machine learning analysis of India&apos;s Eighth Pay Commission. 
                It forecasts pay scale revisions and evaluates their implications for household consumption across rural and urban India by integrating econometric models with machine learning techniques.
              </p>
              <p>
                <a
                  href="/research-overview"
                  className="text-accent hover:underline font-sans" style={{ fontWeight: 500 }}
                >
                  Read complete research overview here →
                </a>
              </p>
            </div>

            {/* Download section */}
            <div className="border-t border-border pt-6">
              <a
                href="/Forecasting India’s Eighth Pay Commission and Its Household Consumption Impacts.pdf"
                download="Forecasting-Indias-Eighth-Pay-Commission.pdf"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 hover:opacity-90 transition-opacity"
              >
                <span>Download Paper (PDF)</span>
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                Having trouble viewing? Download the PDF.
              </p>
            </div>
          </div>

          {/* Right column - PDF viewer */}
          <div className="md:col-span-1 flex flex-col" style={{marginTop: '-1.5rem'}}>
            <div className={`border-2 border-border overflow-hidden bg-muted ${isPdfMaximized ? 'fixed inset-4 z-50 mx-auto max-w-6xl w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]' : 'aspect-11/12'}`}>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-end border-b border-border bg-background/80">
                  {isPdfMaximized ? (
                    <button
                      type="button"
                      onClick={() => setIsPdfMaximized(false)}
                      className="text-sm font-sans hover:point cursor-pointer transition-colors px-6" style={{ fontWeight: 700 }}
                    >
                      Minimize
                    </button>
                  ) : null}
                </div>
                <object
                  data="/Forecasting India’s Eighth Pay Commission and Its
Household Consumption Impacts.pdf"
                  type="application/pdf"
                  className="h-full w-full"
                >
                  <div className="flex h-full items-center justify-center p-6 text-center text-sm text-muted-foreground">
                    <p>
                      Your browser cannot display the PDF inline.
                      <br />
                      Use the download button to open it instead.
                    </p>
                  </div>
                </object>
              </div>
            </div>
            {isPdfMaximized ? (
              <button
                type="button"
                onClick={() => setIsPdfMaximized(false)}
                className="mt-3 text-sm text-accent hover:underline font-sans self-start"
              >
                Click here to minimize
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsPdfMaximized(true)}
                className="mt-3 text-md text-accent hover:underline font-sans self-center" style={{ fontWeight: 700 }}
              >
                Click here to maximise
              </button>
            )}
          </div>
        </div>
      </div>
      {isPdfMaximized ? (
        <button
          type="button"
          aria-label="Close maximized PDF"
          onClick={() => setIsPdfMaximized(false)}
          className="fixed inset-0 z-40 cursor-default bg-black/40"
        />
      ) : null}
    </section>
  )
}
