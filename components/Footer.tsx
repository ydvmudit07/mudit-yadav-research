export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24" style={{ marginTop: '-2rem' }}>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Logo/Name */}
          <div>
            <h3 className="text-3xl font-sans mb-2" style={{ fontWeight: 700 }}>MY</h3>
            <p className="text-sm text-muted-foreground">Mudit Yadav Research</p>
          </div>

          {/* Contact + Social */}
          <div className="md:justify-self-end md:text-left">
            <div className="flex flex-col gap-12 sm:flex-row sm:gap-16">
              <div>
                <h4 className="text-sm font-sans mb-4 uppercase tracking-wider" style={{ fontWeight: 700 }}>Social</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <a
                      href="https://linkedin.com/in/ydvmudit07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/ydvmudit07/mudit-yadav-research"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </div>
            
              <div>
                <h4 className="text-sm font-sans mb-4 uppercase tracking-wider" style={{ fontWeight: 700 }}>Contact</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Suggestions or Questions?</p>
                    <p className="text-foreground">
                      Mail me at{' '}
                      <a
                        href="mailto:ydvmudit24@gmail.com"
                        className="text-accent hover:underline"
                      >
                        <b>ydvmudit24@gmail.com</b>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-muted-foreground" style={{ marginBottom: '-3rem' }} >
          <p>&copy; {currentYear} Mudit Yadav Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
