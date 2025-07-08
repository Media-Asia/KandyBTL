import React from "react"

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold mb-4">KandyBTL</div>
          <p className="text-sm mb-4">Mon - Fri 9:00 - 17:00</p>
          <p className="text-xs">Sat - Sun 10:00 - 14:00</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">OUR SERVICES</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Hoardings & billboards</li>
            <li>Bus shelter Advertising</li>
            <li>Roundabout branding</li>
            <li>Brand Activations</li>
            <li>Sports & Entertainment</li>
            <li>Mall activations & Events</li>
            <li>Signage branding</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">CITY OFFICE</h4>
          <div className="text-sm text-gray-400 space-y-2">
            <p>94, Captain's Square</p>
            <p>Rajapihilla Mw, Kandy</p>
            <p>20000, Sri Lanka</p>
            <p>+94 711225777</p>
            <p>marketing@kandybtl.lk</p>
            <p>talk@kandybtl.lk</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">OUR LOCATIONS</h4>
          <div className="text-sm text-gray-400 space-y-2">
            <p>Studio complex in Pallekele</p>
            <p>Activation House - Aniwatthe</p>
            <p>Workshop 23, Rosita Estate</p>
            <p>Nillambe, Kandy</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>© 2025 KandyBTL. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer 