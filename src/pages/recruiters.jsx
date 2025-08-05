import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'

// The secret token that recruiters need to find on LinkedIn
const RECRUITER_TOKEN = 'MELBOURNE2025'

function LockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <circle cx="12" cy="16" r="1"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  )
}

function UnlockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <circle cx="12" cy="16" r="1"/>
      <path d="M7 11V7a5 5 0 0 1 8 0"/>
    </svg>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  )
}

function TokenInput({ onTokenSubmit, isLoading }) {
  const [token, setToken] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!token.trim()) {
      setError('Please enter the token')
      return
    }
    setError('')
    onTokenSubmit(token.trim().toUpperCase())
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-zinc-50/5 backdrop-blur-sm border border-zinc-200/10 rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-6">
          <LockIcon className="h-12 w-12 text-teal-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-zinc-200 mb-2">Access Required</h2>
          <p className="text-zinc-400">
            Find the token on my LinkedIn profile to access this page
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="token" className="block text-sm font-medium text-zinc-300 mb-2">
              Enter Token
            </label>
            <input
              type="text"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Enter the token from LinkedIn"
              disabled={isLoading}
            />
          </div>
          
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-800 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            {isLoading ? 'Verifying...' : 'Access Page'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-zinc-500">
            Visit my{' '}
            <a 
              href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 underline"
            >
              LinkedIn profile
            </a>
            {' '}to find the token
          </p>
        </div>
      </div>
    </div>
  )
}

function RecruiterContent() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600/20 rounded-full mb-6">
          <UnlockIcon className="h-8 w-8 text-teal-400" />
        </div>
        <h2 className="text-3xl font-bold text-zinc-200 mb-4">Welcome, Recruiter!</h2>
        <p className="text-lg text-zinc-400">
          Thank you for taking the time to find the token. I'm seeking a Principal Engineer or Tech Lead
          role with a US-based company that values innovation and technical excellence.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="bg-zinc-50/5 backdrop-blur-sm border border-zinc-200/10 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            <CheckIcon className="h-6 w-6 text-teal-400 mr-3" />
            <h3 className="text-xl font-semibold text-zinc-200">Work Arrangement</h3>
          </div>
          <p className="text-zinc-400 text-lg">
            <strong className="text-zinc-300">Remote Only - US Companies Preferred</strong>
          </p>
          <p className="text-zinc-500 mt-2">
            Seeking fully remote opportunities with US-based tech companies. Based in Melbourne, Australia
            with extensive experience working across US time zones. Open to occasional travel for team alignment.
          </p>
        </div>

        <div className="bg-zinc-50/5 backdrop-blur-sm border border-zinc-200/10 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            <CheckIcon className="h-6 w-6 text-teal-400 mr-3" />
            <h3 className="text-xl font-semibold text-zinc-200">Compensation</h3>
          </div>
          <p className="text-zinc-400 text-lg">
            <strong className="text-zinc-300">$350,000+ USD Total Compensation</strong>
          </p>
          <p className="text-zinc-500 mt-2">
            Targeting Principal Engineer / Tech Lead level compensation in USD.
            Open to equity participation and comprehensive benefits packages.
            Signing bonus expected to offset transition costs.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-600/10 to-zinc-800/20 border border-teal-500/20 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-zinc-200 mb-6">Principal-Level Engineering Leader</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-zinc-300 mb-3">Technical Excellence</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>• <strong className="text-zinc-300">AI/ML Patent Holder</strong> - Published Google patent in deep learning</li>
              <li>• <strong className="text-zinc-300">PhD + Engineering</strong> - Rare combination of research depth and practical skills</li>
              <li>• <strong className="text-zinc-300">Full-Stack .NET Architect</strong> - Enterprise-scale system design</li>
              <li>• <strong className="text-zinc-300">Open Source Contributor</strong> - Sailfish performance testing library</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-zinc-300 mb-3">Leadership & Innovation</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>• <strong className="text-zinc-300">Serial Entrepreneur</strong> - Built and scaled multiple tech products</li>
              <li>• <strong className="text-zinc-300">AI Advocate</strong> - Early adopter driving productivity transformation</li>
              <li>• <strong className="text-zinc-300">Cross-Functional Leader</strong> - Bridge technical complexity with business value</li>
              <li>• <strong className="text-zinc-300">Global Remote Experience</strong> - Proven success across time zones</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-teal-600/5 border border-teal-500/10 rounded-lg">
          <p className="text-zinc-300 text-sm">
            <strong>Unique Value:</strong> The intersection of deep scientific research, AI/ML expertise,
            and enterprise software engineering creates solutions others can't see. Ready to lead
            technical strategy and drive innovation at Principal Engineer / Tech Lead level.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-zinc-400 mb-4">
          Ready to discuss how I can drive technical innovation and team excellence at your company?
          Let's connect and explore the possibilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Connect on LinkedIn
          </a>
          <a
            href="https://paulgradie.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Recruiters() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Check if user is already authenticated (stored in localStorage)
  useEffect(() => {
    const stored = localStorage.getItem('recruiter-authenticated')
    if (stored === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleTokenSubmit = async (token) => {
    setIsLoading(true)
    setError('')
    
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (token === RECRUITER_TOKEN) {
      setIsAuthenticated(true)
      localStorage.setItem('recruiter-authenticated', 'true')
    } else {
      setError('Invalid token. Please check my LinkedIn profile for the correct token.')
    }
    
    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>For Recruiters - Paul Gradie</title>
        <meta
          name="description"
          content="Exclusive information for recruiters about Paul Gradie's career expectations and requirements."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <SimpleLayout
        title="For Recruiters"
        intro={isAuthenticated
          ? "Seeking Principal Engineer / Tech Lead opportunities with US-based companies. Here are my expectations for the next phase of my career."
          : "Exclusive information for serious recruiters about Principal-level engineering opportunities. Find the access token on my LinkedIn profile."
        }
      >
        {isAuthenticated ? (
          <RecruiterContent />
        ) : (
          <TokenInput onTokenSubmit={handleTokenSubmit} isLoading={isLoading} />
        )}
        
        {error && (
          <div className="mt-6 max-w-md mx-auto">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          </div>
        )}
      </SimpleLayout>
    </>
  )
}
