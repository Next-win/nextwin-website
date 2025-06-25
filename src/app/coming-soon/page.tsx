import Image from 'next/image';

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo-200x37-nextwin.svg"
            alt="Next Win Logo"
            width={200}
            height={37}
            className="mx-auto"
          />
        </div>

        {/* Main content */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
              Binnenkort live!
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
            We werken hard aan onze nieuwe website. 
            Samen brengen we jouw bedrijf naar de{' '}
            <span className="text-primary-600 font-semibold">volgende stap</span>. 
            Binnenkort zijn we{' '}
            <span className="text-green-500 font-semibold">live</span>!
          </p>

          {/* Animated progress dots */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>

          {/* Services preview */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-800 mb-4 text-sm">Straks beschikbaar voor jou:</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <span className="text-gray-700 text-sm font-medium">Websites</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <span className="text-gray-700 text-sm font-medium">Webshops</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <span className="text-gray-700 text-sm font-medium">Online Marketing</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <span className="text-gray-700 text-sm font-medium">CRM & Apps</span>
              </div>
            </div>
          </div>

                    {/* Contact section */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-gray-800 mb-4 text-sm">
              Kan het niet wachten? Neem direct contact op!
            </h3>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a 
                href="mailto:gerwin@next-win.nl" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2.5 rounded-lg transition-colors duration-200 font-medium shadow-sm text-sm"
              >
                gerwin@next-win.nl
              </a>
              
              <a 
                href="tel:+31643545506" 
                className="border-primary-600 text-primary-600 hover:bg-primary-50 border px-6 py-2.5 rounded-lg transition-colors duration-200 font-medium text-sm"
              >
                +31 6 4354 5506
              </a>
            </div>
          </div>

                    {/* Progress indicator */}
          <div className="mb-6">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden max-w-sm mx-auto">
              <div className="bg-gradient-to-r from-primary-600 to-green-500 h-full w-3/4 rounded-full transition-all duration-1000"></div>
            </div>
            <p className="text-gray-600 text-xs mt-2">Website is 75% voltooid</p>
          </div>

          {/* Status badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-xs font-medium">
            We zijn hard aan het werk!
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-400 mt-6 text-xs">
          © 2025 Next Win - Creatief Digital Agency
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage; 