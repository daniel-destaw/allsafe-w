import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      {/* Header with Small Logo */}
      <header className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2">
          <Link href="/">
            <a className="flex items-center">
              {/* Small logo: w-6 h-6 = 24px x 24px */}
              <Image
                src="/img/logo.svg"
                alt="Allsafe Logo"
                width={154}
                height={34}
                className="w-6 h-6 object-contain"
              />
            </a>
          </Link>
        </div>
        <nav className="flex items-center gap-5">
          <a
            className="hidden sm:inline-flex items-center gap-1 text-sm border-b text-slate-900 hover:text-violet-500 hover:border-violet-200"
            href="/docs"
          >
            Documentation
          </a>
          <a
            href="https://github.com/daniel-destaw/AllSafe-SecureScan" 
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-1 text-sm border-b text-slate-900 hover:text-violet-500 hover:border-violet-200"
          >
            <span>Download</span>
            <div className="w-3 h-3 bg-gray-400"></div>
          </a>
          <a
            href="https://github.com/daniel-destaw/AllSafe-SecureScan" 
            target="_blank"
            rel="noopener"
          >
            <div className="w-5 h-5 bg-gray-400"></div>
          </a>
        </nav>
      </header>

      {/* Background Gradient */}
      <div className="fixed inset-0 [background:radial-gradient(circle_at_15%_50%,#ece6fa,#ffffff00_40%),radial-gradient(circle_at_85%_30%,#d6f0fb,#ffffff00_40%)] opacity-70 -z-10"></div>

      {/* Hero Section */}
      <div className="max-w-2xl text-center mx-auto py-24 px-5">
        <span className="p-4 text-white inline-flex rounded-full">
          <Image
            src="/img/allsafe.svg"
            alt="Allsafe Icon"
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </span>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
          <span className="block">Run on your servers, your way</span>
          <span className="block">with Allsafe plugins</span>
        </h1>
        <p className="mt-3 text-gray-500 md:text-lg">
          A modular, plugin-driven platform for automating, monitoring, and managing servers at scale — built for DevOps and system administrators.
        </p>
        <div className="flex justify-center flex-col md:flex-row mt-5 gap-3">
          <span className="bg-violet-100 flex gap-5 items-center justify-between py-3 px-5 rounded-full">
            <code className="text-violet-900 text-left whitespace-nowrap overflow-hidden overflow-ellipsis">
              apt-get install allsafe-auth
            </code>
            <span className="text-violet-900">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0C6.55228 0 7 0.447715 7 1V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V1C5 0.447715 5.44772 0 6 0Z" fill="currentColor" />
              </svg>
            </span>
          </span>
          <a
            className="bg-violet-500 justify-center inline-flex items-center gap-2 rounded-full py-3 px-6 text-white font-medium hover:bg-violet-700"
            href="/docs"
          >
            <span>Documentation</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-10 px-5">
        {/* Modular Plugins */}
        <div className="flex gap-4 items-start flex-col">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 7V10L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Modular Plugins</h3>
            <p className="mt-1 text-gray-500">Add only what you need. Choose from dozens of security, automation, and monitoring plugins — no bloat, no overhead.</p>
          </div>
        </div>

        {/* Secure by Default */}
        <div className="flex gap-4 items-start flex-col">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 7V10L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Secure by Default</h3>
            <p className="mt-1 text-gray-500">Built-in encryption, role-based access control, and audit logging ensure your infrastructure stays protected.</p>
          </div>
        </div>

        {/* Easy Integration */}
        <div className="flex gap-4 items-start flex-col">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 15L8 11H16L12 15M16 5L12 9H4L8 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Easy Integration</h3>
            <p className="mt-1 text-gray-500">Seamlessly integrate Allsafe into your existing workflows using simple CLI tools or REST APIs.</p>
          </div>
        </div>
      </div>

      {/* Code Demo Section */}
      <div className="grid md:grid-cols-2 max-w-screen-lg mx-auto mt-40 px-5 gap-5">
        <div className="flex items-center flex-wrap">
          <div className="max-w-sm">
            <span className="text-violet-500 bg-violet-500/10 px-3 py-1 rounded-full text-xs uppercase font-medium tracking-wider">Best Plugin Platform</span>
            <h2 className="font-semibold text-2xl mt-3">Build powerful server solutions with Allsafe’s extensible architecture.</h2>
            <p className="mt-2 text-gray-500">Use our open-source plugins or build your own custom modules to suit your unique infrastructure needs.</p>
            <a className="inline-flex items-center gap-2 border-b text-violet-500 text-sm mt-3 hover:border-violet-500" href="/docs">
              <span>Read Docs</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L9 7L5 11M9 7L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
        <div className="min-w-0 relative">
          <div className="flex flex-col opacity-100 rounded-3xl shadow-xl bg-gradient-to-br from-[#9795f0] to-[#fbc8d4]">
            <div className="flex items-center w-full px-4 py-[6px] lg:py-[10px] rounded-t-lg bg-white/80 relative z-10 backdrop-blur-xl">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#EB6B5E] rounded-full md:w-[10px] md:h-[10px]"></div>
                <div className="w-2 h-2 bg-[#F3BD50] rounded-full md:w-[10px] md:h-[10px]"></div>
                <div className="w-2 h-2 bg-[#62C454] rounded-full md:w-[10px] md:h-[10px]"></div>
              </div>
            </div>
            <div className="rounded-3xl rounded-t-none bg-gray-900 overflow-x-auto text-gray-100 text-sm md:text-base p-8 relative">
              <code>
                <span className="text-green-400">#!/bin/bash</span><br />
                <span className="text-purple-400">@-</span><br />
                <span className="text-blue-400">display-mode=1</span><br />
                <span className="text-blue-400">screen_name=</span><span className="text-yellow-300">&quot;TCP Port Scan Result&quot;</span><br />
                <span className="text-blue-400">table_columns=</span><span className="text-yellow-300">&quot;IP Address, Port, Status&quot;</span><br />
                <span className="text-purple-400">$</span><br />
                <span className="text-gray-400"># Use nmap or ssh syntax</span><br />
                <span className="text-blue-400">echo </span><span className="text-yellow-300">&quot;$ip $port Open&quot;</span><br />
                <span className="text-purple-400">$</span><br />
                <span className="text-purple-400">-@</span>
              </code>
              {/* Optional SVG Decoration */}
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5" viewBox="0 0 800 600" fill="none">
                <path d="M0 0L800 0L800 600L0 600Z" stroke="white" strokeWidth="1" />
                <circle cx="100" cy="100" r="50" fill="#8b5cf6" />
                <circle cx="700" cy="500" r="80" fill="#ec4899" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="max-w-4xl mx-auto px-5 mt-40">
        <div className="text-center">
          <h2 className="font-semibold text-3xl">Features You'll Love</h2>
          <p className="max-w-md mx-auto mt-2 text-gray-500">Allsafe gives you everything you need to run and secure your infrastructure with ease.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="flex gap-4 items-start">
            <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 7V10L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-xl">Open Source</h3>
              <p className="mt-1 text-gray-500">Allsafe is fully open source and community-driven. Contribute, fork, or customize it freely.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2L18 6V14L10 18L2 14V6L10 2ZM10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5Z" fill="currentColor" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-xl">Lightweight & Fast</h3>
              <p className="mt-1 text-gray-500">Designed for performance, Allsafe runs efficiently with minimal resource overhead.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 7V10L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-xl">Cloud-Agnostic</h3>
              <p className="mt-1 text-gray-500">Whether on-prem, AWS, GCP, or Azure — Allsafe works seamlessly across any environment.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 7V10L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-xl">Developer Friendly</h3>
              <p className="mt-1 text-gray-500">Well-documented codebase, clear APIs, and detailed guides make Allsafe easy to work with.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="max-w-3xl mx-auto px-5 mt-28">
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h2 className="font-semibold text-3xl">Our Sponsors</h2>
            <p className="max-w-md mx-auto mt-2 text-gray-500">We are thankful to each and every company that has sponsored our plugin development.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
            <div className="w-[120px] h-[60px] bg-gray-200"></div>
            <div className="w-[82px] h-[40px] bg-gray-200"></div>
            <div className="w-[100px] h-[40px] bg-gray-200"></div>
            <div className="w-[100px] h-[40px] bg-gray-200"></div>
            <div className="w-[100px] h-[40px] bg-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t mt-20">
        <footer>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-10 max-w-screen-lg mx-auto text-sm px-5 text-gray-500">
            <p>© 2025 <a href="https://github.com/daniel-destaw/AllSafe-SecureScan"  target="_blank" rel="noopener">Allsafe</a>. All rights reserved.</p>
            <nav className="flex gap-5">
              <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a>
              <a href="/license" target="_blank" rel="noopener noreferrer">License</a>
              <a href="/faq" target="_blank" rel="noopener noreferrer">FAQ</a>
            </nav>
          </div>
          <a
            href="https://github.com/daniel-destaw/AllSafe-SecureScan" 
            target="_blank"
            rel="noopener"
            className="fixed flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center right-5 bottom-5"
          >
            <div className="w-4 h-4 bg-gray-400"></div>
            <span>Allsafe</span>
          </a>
        </footer>
      </div>
    </div>
  );
}