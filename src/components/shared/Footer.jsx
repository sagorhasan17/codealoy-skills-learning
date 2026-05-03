import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-900 via-slate-950 to-black" />

      <div className="absolute -top-25 -left-25 w-75 h-75 bg-[#5271FF]/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute -bottom-25 -right-25 w-75 h-75 bg-purple-500/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-4 text-gray-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h2 className="text-xl font-extrabold bg-linear-to-r from-[#5271FF] to-indigo-400 bg-clip-text text-transparent">
              CodeAloy
            </h2>

            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              A trusted elearning platform for students and professionals. We
              provide high-quality courses and resources to help you achieve
              your learning goals. Join us today and start your learning journey
              with CodeAloy!
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/generate"
                  className="hover:text-[#5271FF] transition"
                >
                  Generate
                </Link>
              </li>
              <li>
                <Link
                  href="/all-photos"
                  className="hover:text-[#5271FF] transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-[#5271FF] transition"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#5271FF] transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#5271FF] transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#5271FF] transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">
              Ready to get started?
            </h3>

            <p className="text-sm text-gray-400">
              Join thousands of users who are generating amazing images with
              CodeAloy. Sign up now and unleash your creativity!
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/signup"
                className="px-5 py-2.5 rounded-xl bg-[#5271FF] text-white text-sm font-medium 
                shadow-lg shadow-[#5271FF]/30 hover:bg-[#3f5ce0] transition"
              >
                Sign Up
              </Link>

              <Link
                href="/pricing"
                className="px-5 py-2.5 rounded-xl border border-[#5271FF] text-[#5271FF] text-sm font-medium 
                hover:bg-[#5271FF] hover:text-white transition"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>copyright- 2026 CodeAloy LTD. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#5271FF] transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#5271FF] transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
