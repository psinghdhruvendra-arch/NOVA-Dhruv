import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Howl } from 'howler'
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import {
  FaBars,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaMusic,
  FaPause,
  FaPaperPlane,
  FaPhone,
  FaRotate,
  FaWhatsapp,
  FaXmark,
} from 'react-icons/fa6'
import {
  SiCss,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiReplit,
  SiTailwindcss,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import DhruvPortrait from './assets/Dhruv.jpg'
import './App.css'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const navItems = ['Home', 'About', 'Projects', 'Case Study', 'Skills', 'Contact']

const projects = [
  {
    title: 'Baba Agro Hub',
    type: 'Freelance project',
    description:
      'Professional freelance website developed for a real client with responsive layouts and modern UI practices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    live: 'https://psinghdhruvendra-arch.github.io/BabaAgroHub/',
    featured: true,
  },
  {
    title: 'Varsha Coaching Center',
    description: 'Freelance coaching institute website with clean UI and responsive layout.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://psinghdhruvendra-arch.github.io/Varsha-Coching-classes/',
  },
  {
    title: 'Itachi Uchiha Landing Page',
    description:
      'Anime-inspired cinematic landing page focused on visual storytelling and immersive UI design.',
    tech: ['HTML', 'CSS', 'Animation'],
    live: 'https://psinghdhruvendra-arch.github.io/Itachi-The-silence-behind-the-Massacre/',
  },
  {
    title: 'Obito Uchiha Landing Page',
    description:
      'Character-focused immersive landing page with smooth animations and emotional visual design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://psinghdhruvendra-arch.github.io/Obito-Uchiha/',
  },
  {
    title: 'Indian Biodiversity',
    description:
      'Wildlife-inspired informational platform focused on Indian biodiversity and exploration visuals.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://psinghdhruvendra-arch.github.io/theWildlifeOfIndia/',
  },
  {
    title: 'Tsukiko Uchiha',
    type: 'AI project',
    description:
      'AI-assisted cinematic landing page built using modern AI workflows and frontend experimentation.',
    tech: ['AI Workflow', 'Frontend', 'Visual Design'],
    live: 'https://sukiko-chronicle--singh07varsha.replit.app/',
  },
]

const skillIcons = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  Java: FaCode,
  Python: SiPython,
  SQL: FaDatabase,
  GitHub: SiGithub,
  Replit: SiReplit,
  Figma: SiFigma,
  'VS Code': VscVscode,
}

const skillGroups = [
  {
    label: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    level: 92,
    focus: 'Responsive UI, motion, component systems, and polished production layouts.',
    metric: 'Core strength',
  },
  {
    label: 'Backend',
    items: ['Node.js'],
    level: 58,
    focus: 'API awareness, integration thinking, and frontend-friendly service structure.',
    metric: 'Growing layer',
  },
  {
    label: 'Programming',
    items: ['Java', 'Python'],
    level: 72,
    focus: 'Problem solving, structured logic, scripting, and experimentation workflows.',
    metric: 'Logic base',
  },
  {
    label: 'Database',
    items: ['SQL'],
    level: 64,
    focus: 'Data modeling basics, query thinking, and application data flow understanding.',
    metric: 'Data fluency',
  },
  {
    label: 'Tools',
    items: ['GitHub', 'Replit', 'Figma', 'VS Code'],
    level: 86,
    focus: 'Design handoff, deployment habits, version control, and rapid iteration.',
    metric: 'Workflow speed',
  },
]

const testimonials = [
  {
    client: 'Amit Sharma',
    project: 'Freelance Website',
    review:
      'Dhruvendra shaped our business website with a clean layout, smooth sections, and a polished launch experience.',
  },
  {
    client: 'Priya Verma',
    project: 'Education Platform',
    review:
      'The coaching site became easier for parents and students to understand, especially on mobile screens.',
  },
  {
    client: 'Rohit Mishra',
    project: 'Cinematic UI',
    review:
      'His visual direction gave the landing page a cinematic feel while keeping the content readable and professional.',
  },
]

const journey = [
  ['Learning', 'Built strong fundamentals across HTML, CSS, JavaScript, and responsive systems.'],
  ['Freelancing', 'Delivered real client websites with practical UI decisions and deployment discipline.'],
  ['Experimentation', 'Explored animation, AI workflows, cinematic layouts, and interface storytelling.'],
  ['Modern Frontend', 'Focused on React, clean component thinking, polish, accessibility, and performance.'],
]

const caseSteps = [
  ['Introduction', 'Indian Biodiversity began as an exploration-first informational platform with a visual identity rooted in discovery.'],
  ['Problem', 'The challenge was to make wildlife content feel inviting, structured, and memorable across screen sizes.'],
  ['Design Process', 'The layout uses clear hierarchy, immersive visual pacing, and preview-led content sections to guide visitors.'],
  ['Development', 'Responsive structure, animated reveals, and lightweight interactions support the educational storytelling.'],
  ['Final Outcome', 'The project sharpened visual composition, content hierarchy, and nature-focused frontend presentation.'],
]

const wildlifeImages = [
  {
    title: 'Bengal Tiger',
    caption: 'Hero wildlife imagery for strength, focus, and Indian biodiversity presence.',
    src: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1400&q=85',
    alt: 'Bengal tiger in natural habitat',
  },
  {
    title: 'Asian Elephant',
    caption: 'Large-format visual pacing for scale, calmness, and environmental depth.',
    src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85',
    alt: 'Asian elephant walking through greenery',
  },
  {
    title: 'Forest Deer',
    caption: 'Soft gallery texture to balance cinematic energy with educational calm.',
    src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1200&q=85',
    alt: 'Deer standing in a forest landscape',
  },
]

const spinnerSegments = [
  'UI Polish',
  'Motion Boost',
  'Clean Code',
  'Responsive Win',
  'Creative Spark',
  'Deploy Ready',
]

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [ambientOn, setAmbientOn] = useState(false)
  const audioEngine = useRef(null)
  const reducedMotion = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => setIsLoading(false), 3100)
    return () => window.clearTimeout(loaderTimer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          setActiveSection(visible.target.dataset.nav)
        }
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: [0.16, 0.35, 0.6] },
    )

    document.querySelectorAll('[data-nav]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('ambient-active', ambientOn)
    window.localStorage.setItem('nova-ambient-mode', ambientOn ? 'enabled' : 'disabled')
  }, [ambientOn])

  useEffect(() => {
    if (isLoading || !window.location.hash) return

    const target = document.querySelector(window.location.hash)
    const frame = window.requestAnimationFrame(() => {
      if (target?.dataset.nav) {
        setActiveSection(target.dataset.nav)
      }
      target?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [isLoading, reducedMotion])

  useEffect(() => {
    return () => {
      stopAmbient(audioEngine)
    }
  }, [])

  const toggleAmbient = async () => {
    if (ambientOn) {
      await stopAmbient(audioEngine)
      setAmbientOn(false)
      return
    }

    await startAmbient(audioEngine, reducedMotion)
    setAmbientOn(true)
  }

  return (
    <>
      <AnimatePresence>{isLoading && <CinematicLoader />}</AnimatePresence>
      <ReactParticles />
      <Navbar
        activeSection={activeSection}
        ambientOn={ambientOn}
        isLoading={isLoading}
        menuOpen={menuOpen}
        onAmbientToggle={toggleAmbient}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={(item) => {
          setMenuOpen(false)
          if (item) setActiveSection(item)
        }}
      />
      <motion.div
        className={`site-shell ${isLoading ? 'site-shell--loading' : 'site-shell--ready'}`}
        initial={{ opacity: 0, filter: 'blur(18px)', scale: 1.018 }}
        animate={{
          opacity: isLoading ? 0 : 1,
          filter: isLoading ? 'blur(18px)' : 'blur(0px)',
          scale: isLoading ? 1.018 : 1,
        }}
        transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      >
        <main>
          <Hero />
          <Intro />
          <FeaturedProject />
          <About />
          <Projects />
          <CaseStudy />
          <Skills />
          <BuildProcess />
          <Contact />
          <SpinnerGame />
        </main>
      </motion.div>
      <FloatingWhatsApp isLoading={isLoading} />
    </>
  )
}

function CinematicLoader() {
  return (
    <motion.div
      className="loader"
      role="status"
      aria-label="Loading portfolio"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(12px)' }}
      transition={{ duration: 0.34, ease: 'easeOut' }}
    >
      <div className="loader__grid" />
      <div className="loader__scan" />
      <div className="loader__particle loader__particle--one" />
      <div className="loader__particle loader__particle--two" />
      <div className="loader__particle loader__particle--three" />
      <div className="loader__content">
        <div className="loader__ring" aria-hidden="true" />
        <p className="loader__logo">o_O</p>
        <h1>Dhruvendra P. Singh</h1>
        <p className="loader__brand">Nova Dhruv</p>
        <div className="loader__terminal" aria-hidden="true">
          <span>booting interface</span>
          <span>syncing motion system</span>
          <span>rendering portfolio</span>
        </div>
        <div className="loader__bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </motion.div>
  )
}

function ReactParticles() {
  const canvasRef = useRef(null)
  const cursorRef = useRef({ x: 0, y: 0, active: false })
  const clickBurstRef = useRef([])

  const particleColors = useMemo(() => ['#17a9e5', '#6263d9', '#e53d92', '#fd7742'], [])

  const reducedMotion = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let particles = []
    let width = 0
    let height = 0

    const getParticleCount = (w) => {
      if (reducedMotion) return 0
      if (w < 640) return 30
      if (w < 1024) return 60
      return 100
    }

    const initParticles = (w, h) => {
      const count = getParticleCount(w)
      particles = []
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: 1 + Math.random() * 2,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          alpha: 0.15 + Math.random() * 0.35,
          targetAlpha: 0.15 + Math.random() * 0.35,
        })
      }
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      width = rect.width
      height = rect.height
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      initParticles(rect.width, rect.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const repulsionRadius = 130
    const repulsionStrength = 0.8
    const friction = 0.96

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      const cursor = cursorRef.current

      // Update and draw floating particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Wrap around screen edges
        if (p.x < -10) p.x = width + 10
        else if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        else if (p.y > height + 10) p.y = -10

        // Repel from cursor
        if (cursor.active) {
          const dx = p.x - cursor.x
          const dy = p.y - cursor.y
          const dist = Math.hypot(dx, dy)

          if (dist < repulsionRadius) {
            const force = (repulsionRadius - dist) / repulsionRadius
            const angle = Math.atan2(dy, dx)
            const pushX = Math.cos(angle) * force * repulsionStrength
            const pushY = Math.sin(angle) * force * repulsionStrength

            p.x += pushX
            p.y += pushY
            p.alpha = Math.min(0.8, p.alpha + 0.05)
          } else {
            if (p.alpha > p.targetAlpha) {
              p.alpha -= 0.01
            }
          }
        } else {
          if (p.alpha > p.targetAlpha) {
            p.alpha -= 0.01
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.shadowBlur = 4
        ctx.shadowColor = p.color
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Connections between particles
      if (!reducedMotion) {
        ctx.lineWidth = 0.6
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i]
            const p2 = particles[j]
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)

            if (dist < 80) {
              const alpha = (1 - dist / 80) * 0.12 * Math.min(p1.alpha, p2.alpha)
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.strokeStyle = p1.color
              ctx.globalAlpha = alpha
              ctx.stroke()
            }
          }
        }
      }

      // Connection from cursor to particles
      if (cursor.active && !reducedMotion) {
        particles.forEach((p) => {
          const dist = Math.hypot(p.x - cursor.x, p.y - cursor.y)
          if (dist < repulsionRadius) {
            const alpha = (1 - dist / repulsionRadius) * 0.28
            ctx.beginPath()
            ctx.moveTo(cursor.x, cursor.y)
            ctx.lineTo(p.x, p.y)
            ctx.strokeStyle = p.color
            ctx.globalAlpha = alpha
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })
      }

      // Update and draw click burst particles
      const burstList = clickBurstRef.current
      if (burstList.length > 0) {
        for (let i = burstList.length - 1; i >= 0; i--) {
          const bp = burstList[i]
          bp.x += bp.vx
          bp.y += bp.vy
          bp.vx *= friction
          bp.vy *= friction
          bp.alpha -= 0.015
          bp.radius *= 0.98

          if (bp.alpha <= 0) {
            burstList.splice(i, 1)
            continue
          }

          ctx.beginPath()
          ctx.arc(bp.x, bp.y, bp.radius, 0, Math.PI * 2)
          ctx.fillStyle = bp.color
          ctx.globalAlpha = bp.alpha
          ctx.shadowBlur = 8
          ctx.shadowColor = bp.color
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    if (!reducedMotion) {
      animate()
    } else {
      ctx.clearRect(0, 0, width, height)
      initParticles(width, height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha * 0.5
        ctx.fill()
      })
    }

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [reducedMotion, particleColors])

  useEffect(() => {
    const handlePointerMove = (e) => {
      cursorRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      }
    }

    const handlePointerLeave = () => {
      cursorRef.current.active = false
    }

    const handlePointerDown = (e) => {
      if (reducedMotion) return
      const colors = ['#17a9e5', '#6263d9', '#e53d92', '#fd7742']
      const count = 12
      const burstParticles = []

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 1.5 + Math.random() * 3.5
        burstParticles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 2 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1.0,
        })
      }
      clickBurstRef.current = [...clickBurstRef.current, ...burstParticles]
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [reducedMotion])

  return (
    <div className="react-particles" aria-hidden="true">
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  )
}

function Navbar({
  activeSection,
  ambientOn,
  isLoading,
  menuOpen,
  onAmbientToggle,
  onMenuToggle,
  onNavigate,
}) {
  return (
    <header className={`navbar ${isLoading ? 'navbar--loading' : ''}`}>
      <a className="nav-logo" href="#home" onClick={() => onNavigate('Home')} aria-label="Go to home">
        o_0
      </a>
      <nav className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`} aria-label="Primary">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
            className={activeSection === item ? 'active' : ''}
            onClick={() => onNavigate(item)}
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button
          className={`music-toggle ${ambientOn ? 'music-toggle--active' : ''}`}
          type="button"
          onClick={onAmbientToggle}
          aria-label={ambientOn ? 'Disable Ambient Mode' : 'Enable Ambient Mode'}
          title={ambientOn ? 'Disable Ambient Mode' : 'Enable Ambient Mode'}
        >
          {ambientOn ? <FaPause aria-hidden="true" /> : <FaMusic aria-hidden="true" />}
          <span className="equalizer" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
        <button
          className="menu-toggle"
          type="button"
          onClick={onMenuToggle}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  const [activeTab, setActiveTab] = useState('craft.jsx')

  const tabContents = {
    'craft.jsx': `const craft = {
  ui: "polished",
  motion: "smooth",
  systems: "responsive",
  experience: "freelance & creative"
};`,
    'profile.json': `{
  "alias": "Nova Dhruv",
  "location": "India",
  "focus": "Frontend / UI Engineering",
  "status": "Active & Available"
}`,
    'terminal.sh': `$ npx nova-dhruv status
> Core UI engines initialized.
- UI systems: STABLE (92%)
- Animation loops: ACTIVE
- Layouts: 100% RESPONSIVE`
  }

  return (
    <section className="hero-section section" id="home" data-nav="Home">
      <AmbientStage />
      <div className="hero-content reveal">
        <div className="eyebrow-container">
          <span className="pulse-indicator" />
          <div className="eyebrow">Creative Web Developer / UI Engineer</div>
        </div>
        <h1> o_O Nova Dhruv</h1>
        <p className="alias">Dhruvendra P. Singh</p>
        <p className="hero-role">Full Stack Developer | AI Enthusiast</p>
        <p className="hero-copy">
          Building high-fidelity digital products, interactive interfaces, and pixel-perfect responsive layouts.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#projects">
            Explore Work
          </a>
          <a className="button button--ghost" href="#contact">
            Let's Collaborate
          </a>
        </div>
      </div>
      <div className="hero-visual reveal reveal--delay">
        <div className="hero-gradient-orbit" aria-hidden="true" />
        <div className="holo-card">
          <div className="holo-card__header">
            <div className="holo-card__dots">
              <span />
              <span />
              <span />
            </div>
            <div className="holo-card__tabs">
              {Object.keys(tabContents).map((tabName) => (
                <button
                  key={tabName}
                  className={`holo-card__tab ${activeTab === tabName ? 'holo-card__tab--active' : ''}`}
                  onClick={() => setActiveTab(tabName)}
                >
                  {tabName}
                </button>
              ))}
            </div>
          </div>
          <div className="holo-card__editor">
            <pre><code>{tabContents[activeTab]}</code></pre>
          </div>
          <div className="metric-panel">
            <div className="metric-row">
              <span>Client Success</span>
              <strong>20+ Sites</strong>
            </div>
            <div className="metric-row">
              <span>Stack Efficiency</span>
              <strong>100% Responsive</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SpinnerGame() {
  const [rotation, setRotation] = useState(18)
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState('Core Status: Ready for Calibration')

  const spin = () => {
    if (spinning) return

    const nextIndex = Math.floor(Math.random() * spinnerSegments.length)
    const slice = 360 / spinnerSegments.length
    const nextRotation = rotation + 1440 + (360 - nextIndex * slice) + Math.random() * (slice * 0.52)

    setSpinning(true)
    setRotation(nextRotation)
    setResult('Calibrating Core Power...')
    window.setTimeout(() => {
      setResult(`Interface Boost: ${spinnerSegments[nextIndex]}`)
      setSpinning(false)
    }, 1700)
  }

  return (
    <section className="section spinner-section" id="spinner-game">
      <div className="spinner-panel reveal">
        <div className="section-heading">
          <p className="kicker">Core Calibration</p>
          <h2>Spin to configure interface energy.</h2>
        </div>
        <div className="spinner-layout">
          <div className="spinner-wheel-wrap">
            <div className="spinner-pointer" aria-hidden="true" />
            <div
              className={`spinner-wheel ${spinning ? 'spinner-wheel--active' : ''}`}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {spinnerSegments.map((segment, index) => (
                <span key={segment} style={{ '--segment': index }}>
                  {segment}
                </span>
              ))}
            </div>
          </div>
          <div className="spinner-copy">
            <div className="digital-readout">
              <span className="scan-line" />
              <p>{result}</p>
            </div>
            <button className="button button--primary spinner-button" type="button" onClick={spin}>
              <FaRotate aria-hidden="true" className={spinning ? 'spin-icon' : ''} />
              {spinning ? 'Calibrating...' : 'Calibrate Core'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function AmbientStage() {
  return (
    <div className="ambient-stage" aria-hidden="true">
      <div className="grid-plane" />
      <div className="glow glow--blue" />
      <div className="glow glow--pink" />
      <div className="particle-field">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} style={{ '--i': index }} />
        ))}
      </div>
    </div>
  )
}

function Intro() {
  const introCards = [
    {
      title: 'Modern UI Systems',
      desc: 'Scalable design files mapped to pixel-perfect component systems and clean web interfaces.'
    },
    {
      title: 'Fluid Adaptivity',
      desc: 'Seamless, robust layouts engineered to function flawlessly on every viewport and device.'
    },
    {
      title: 'Animation & Motion',
      desc: 'Elevating layout transitions with interactive Canvas render loops and fluid physics.'
    },
    {
      title: 'Creative Frontend',
      desc: 'Cinematic visual direction backed by clean, performant, and production-ready codebases.'
    }
  ]

  return (
    <section className="section intro-section" id="intro">
      <div className="section-heading reveal">
        <p className="kicker">Core Philosophy</p>
        <h2>Digital interfaces designed with intent and engineered with precision.</h2>
      </div>
      <div className="intro-grid">
        {introCards.map((card, index) => (
          <article className="glass-card badge-card reveal" key={card.title} style={{ '--delay': index }}>
            <div className="badge-card__hud-header">
              <span className="badge-card__num">0{index + 1}</span>
              <span className="badge-card__dot" />
            </div>
            <h3>{card.title}</h3>
            <p className="badge-card__description">{card.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function FeaturedProject() {
  const featured = projects.find((project) => project.featured)
  return (
    <section className="section featured-section" id="featured-project">
      <div className="showcase-card reveal">
        <div className="showcase-info">
          <div className="showcase-eyebrow">
            <span className="glow-dot" />
            <p className="kicker">Featured Project</p>
          </div>
          <h2>{featured.title}</h2>
          <p className="showcase-desc">{featured.description}</p>
          <div className="tags">
            {featured.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="button-row">
            <a className="button button--primary" href={featured.live} target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a
              className="button button--ghost"
              href="https://github.com/psinghdhruvendra-arch"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </div>
        </div>
        <div className="showcase-visual" aria-hidden="true">
          <div className="browser-frame">
            <div className="browser-frame__bar">
              <span className="frame-address">https://baba-agro-hub.com</span>
            </div>
            <div className="farm-preview">
              <div className="cyber-grid" />
              <span className="animated-node node-1" />
              <span className="animated-node node-2" />
              <span className="animated-node node-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about" data-nav="About">
      <div className="section-heading reveal">
        <p className="kicker">About Me</p>
        <h2>Crafting interfaces that feel fluid, responsive, and memorable.</h2>
      </div>
      <div className="about-grid">
        <article className="about-copy glass-panel reveal">
          <div className="profile-container">
            <img src={DhruvPortrait} alt="Dhruvendra P. Singh" />
            <div className="profile-sheen" />
          </div>
          <div>
            <p>
              I am Dhruvendra P. Singh (building as Nova Dhruv). My engineering workflow sits at the intersection of cinematic user interaction, production-minded responsive frontend layouts, and dynamic animation development.
            </p>
            <p>
              I design websites to feel alive—achieving this through subtle micro-animations, structured hierarchies, clean CSS layouts, and performance-first rendering architectures.
            </p>
          </div>
        </article>
        <div className="timeline reveal">
          <div className="timeline-line-glow" />
          {journey.map(([title, text]) => (
            <article key={title} className="timeline-item">
              <span className="timeline-node" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="testimonial-track reveal" aria-label="Client reviews">
        {testimonials.map((testimonial) => (
          <article className="review-card" key={testimonial.client}>
            <div className="stars" aria-label="5 star rating">
              ★★★★★
            </div>
            <p className="review-text">"{testimonial.review}"</p>
            <div className="review-footer">
              <strong>{testimonial.client}</strong>
              <span>{testimonial.project}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section projects-section" id="projects" data-nav="Projects">
      <div className="section-heading reveal">
        <p className="kicker">Full Registry</p>
        <h2>Freelance milestones, interactive layouts, and custom frontends.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`} key={project.title}>
            <div className="project-card__shine" />
            <div className="project-card__header">
              <p className="project-type-chip">{project.type || 'Frontend project'}</p>
              <span className="status-pill-glow" />
            </div>
            <h3>{project.title}</h3>
            <span className="project-description">{project.description}</span>
            <div className="tags">
              {project.tech.map((tech) => (
                <em key={tech}>{tech}</em>
              ))}
            </div>
            <div className="button-row">
              <a className="button button--small" href={project.live} target="_blank" rel="noreferrer">
                Launch Live
              </a>
              <a
                className="button button--small button--ghost"
                href="https://github.com/psinghdhruvendra-arch"
                target="_blank"
                rel="noreferrer"
              >
                Code base
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function CaseStudy() {
  return (
    <section className="section case-section" id="case-study" data-nav="Case Study">
      <div className="section-heading reveal">
        <p className="kicker">Case Study</p>
        <h2>Indian Biodiversity: Cinematic, responsive learning layouts.</h2>
      </div>
      <div className="case-layout">
        <div className="case-stack reveal">
          {caseSteps.map(([title, text], index) => (
            <article className="process-card" key={title}>
              <div className="process-card__header">
                <span className="step-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="step-bar" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="gallery reveal">
          <div className="gallery-main">
            <img src={wildlifeImages[0].src} alt={wildlifeImages[0].alt} />
            <div className="gallery-main__caption">
              <span>Indian Biodiversity</span>
              <p>{wildlifeImages[0].caption}</p>
            </div>
          </div>
          <div className="gallery-row">
            {wildlifeImages.map((image) => (
              <article key={image.title} className="gallery-thumb">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="thumb-caption">
                  <strong>{image.title}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const radarData = {
    labels: skillGroups.map((group) => group.label),
    datasets: [
      {
        label: 'Stack Confidence',
        data: skillGroups.map((group) => group.level),
        backgroundColor: 'rgba(5, 133, 230, 0.18)',
        borderColor: '#69dcff',
        borderWidth: 2,
        pointBackgroundColor: '#fd367e',
        pointBorderColor: '#f5e9da',
        pointHoverBackgroundColor: '#69dcff',
        pointHoverBorderColor: '#091221',
        fill: true,
      },
    ],
  }

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(9, 18, 33, 0.92)',
        borderColor: 'rgba(105, 220, 255, 0.28)',
        borderWidth: 1,
        titleColor: '#f5e9da',
        bodyColor: 'rgba(245, 233, 218, 0.78)',
      },
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        angleLines: { color: 'rgba(245, 233, 218, 0.1)' },
        grid: { color: 'rgba(105, 220, 255, 0.16)' },
        pointLabels: { color: '#f5e9da', font: { size: 12, family: 'Inter' } },
        ticks: { display: false, stepSize: 20 },
      },
    },
  }

  return (
    <section className="section skills-section" id="skills" data-nav="Skills">
      <div className="section-heading reveal">
        <p className="kicker">Expertise</p>
        <h2>Modern technical layout fluency and frontend integration.</h2>
      </div>
      <div className="skills-layout">
        <div className="skill-cards">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.label}>
              <div className="skill-card__head">
                <div>
                  <p className="metric-chip">{group.metric}</p>
                  <h3>{group.label}</h3>
                </div>
                <span className="percentage-display">{group.level}%</span>
              </div>
              <div className="skill-meter-segmented" aria-hidden="true" title={`Confidence: ${group.level}%`}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <span
                    key={index}
                    className={index < Math.round(group.level / 10) ? 'filled' : ''}
                    style={{ '--i': index }}
                  />
                ))}
              </div>
              <p className="skill-focus">{group.focus}</p>
              <div className="tags">
                {group.items.map((item) => {
                  const Icon = skillIcons[item]
                  return (
                    <em key={item}>
                      {Icon && <Icon aria-hidden="true" />}
                      {item}
                    </em>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
        <div className="radar-card" aria-label="Skill visualization">
          <Radar data={radarData} options={radarOptions} />
          <div className="skill-summary">
            <p>Interactive stack balance</p>
            <strong>Frontend-focused, responsive-native layouts.</strong>
          </div>
          <div className="skill-marquee" aria-hidden="true">
            {[...skillGroups.flatMap((group) => group.items), ...skillGroups.flatMap((group) => group.items)].map(
              (skill, index) => (
                <span key={`${skill}-${index}`}>{skill}</span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function BuildProcess() {
  return (
    <section className="section build-section" id="build">
      <div className="section-heading reveal">
        <p className="kicker">How I Build</p>
        <h2>Idea to refined interface, with motion and clarity supporting the work.</h2>
      </div>
      <div className="build-flow">
        {['Idea', 'Design', 'Build', 'Refine'].map((step, index) => (
          <article key={step}>
            <span className="build-step-num">{index + 1}</span>
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState('')

  const contacts = [
    ['Email', 'mailto:psinghdhruvendra@gmail.com', 'psinghdhruvendra@gmail.com', FaEnvelope],
    ['Phone', 'tel:+919410521000', '+91 94105 21000', FaPhone],
    ['WhatsApp', 'https://wa.me/919410521000', 'Message on WhatsApp', FaWhatsapp],
    ['GitHub', 'https://github.com/psinghdhruvendra-arch', 'psinghdhruvendra-arch', FaGithub],
  ]

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Project Type: ${form.project || 'Not specified'}`,
        '',
        form.message,
      ].join('\n'),
    )

    window.location.href = `mailto:psinghdhruvendra@gmail.com?subject=${subject}&body=${body}`
    setFormStatus('Opening email client with pre-filled details...')
  }

  return (
    <section className="section contact-section" id="contact" data-nav="Contact">
      <div className="cta-panel reveal">
        <p className="kicker">Secure Line</p>
        <h2>Initiate project terminal.</h2>
        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-terminal-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="terminal-title">message_sender.sh</span>
            </div>
            <div className="form-row">
              <label>
                <span>Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleContactChange}
                  placeholder="Insert name"
                  required
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleContactChange}
                  placeholder="you@domain.com"
                  required
                />
              </label>
            </div>
            <label>
              <span>Project Objective</span>
              <input
                name="project"
                value={form.project}
                onChange={handleContactChange}
                placeholder="Redesign, fullstack, freelance, etc."
              />
            </label>
            <label>
              <span>Message Payload</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleContactChange}
                placeholder="Describe your design objective..."
                rows="5"
                required
              />
            </label>
            <button className="button button--primary contact-submit" type="submit">
              <FaPaperPlane aria-hidden="true" />
              Transmit Payload
            </button>
            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>
          <div className="contact-grid">
            {contacts.map(([label, href, text, Icon]) => (
              <a
                className="contact-card"
                href={href}
                key={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <div className="contact-card__icon-box">
                  <Icon aria-hidden="true" />
                </div>
                <strong>{label}</strong>
                <em>{text}</em>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingWhatsApp({ isLoading }) {
  return (
    <a
      className={`whatsapp-float ${isLoading ? 'whatsapp-float--loading' : ''}`}
      href="https://wa.me/919410521000"
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp chat"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  )
}

async function startAmbient(audioEngine, reducedMotion) {
  const sound = new Howl({
    src: [createAmbientWaveDataUri(reducedMotion)],
    html5: false,
    loop: true,
    volume: 0,
  })

  sound.play()
  sound.fade(0, 0.2, 1600)
  audioEngine.current = sound
}

async function stopAmbient(audioEngine) {
  const sound = audioEngine.current
  if (!sound) return

  sound.fade(sound.volume(), 0, 800)
  await new Promise((resolve) => window.setTimeout(resolve, 850))
  sound.stop()
  sound.unload()
  audioEngine.current = null
}

function createAmbientWaveDataUri(reducedMotion) {
  const sampleRate = 22050
  const seconds = reducedMotion ? 3 : 5
  const samples = sampleRate * seconds
  const dataSize = samples * 2
  const buffer = new ArrayBuffer(44 + dataSize)
  const view = new DataView(buffer)
  const writeString = (offset, value) => {
    for (let index = 0; index < value.length; index += 1) {
      view.setUint8(offset + index, value.charCodeAt(index))
    }
  }

  writeString(0, 'RIFF')
  view.setUint32(4, 36 + dataSize, true)
  writeString(8, 'WAVE')
  writeString(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, 1, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * 2, true)
  view.setUint16(32, 2, true)
  view.setUint16(34, 16, true)
  writeString(36, 'data')
  view.setUint32(40, dataSize, true)

  const pianoNotes = [
    [0.25, 261.63],
    [1.35, 329.63],
    [2.45, 392],
    [3.4, 523.25],
    [4.25, 392],
  ]

  for (let index = 0; index < samples; index += 1) {
    const time = index / sampleRate
    const fade = Math.min(1, time / 0.8, (seconds - time) / 0.8)
    const drift = Math.sin(2 * Math.PI * 0.06 * time) * 0.8
    const piano = pianoNotes.reduce((sum, [start, frequency]) => {
      const age = time - start
      if (age < 0 || age > 1.2) return sum
      const envelope = Math.exp(-3.6 * age)
      const tone =
        Math.sin(2 * Math.PI * frequency * age) * 0.8 +
        Math.sin(2 * Math.PI * frequency * 2.01 * age) * 0.18 +
        Math.sin(2 * Math.PI * frequency * 3.02 * age) * 0.08
      return sum + tone * envelope
    }, 0)
    const wave =
      Math.sin(2 * Math.PI * (110 + drift) * time) * 0.35 +
      Math.sin(2 * Math.PI * 165 * time) * 0.2 +
      Math.sin(2 * Math.PI * 220 * time) * 0.12 +
      piano * 0.24
    view.setInt16(44 + index * 2, Math.max(-1, Math.min(1, wave * fade)) * 32767, true)
  }

  let binary = ''
  const bytes = new Uint8Array(buffer)
  for (let index = 0; index < bytes.length; index += 1) {
    binary += String.fromCharCode(bytes[index])
  }

  return `data:audio/wav;base64,${window.btoa(binary)}`
}

export default App
