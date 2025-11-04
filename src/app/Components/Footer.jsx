import React from 'react'

const Footer = () => {
  return (
    <>
    <section id='footer'>
     <footer className="bg-black py-10 border-t mt-25 border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">mahirTheCoder</h3>
              <p className="text-gray-400">Turning ideas into reality</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
                <a href="#portfolio" className="text-gray-400 hover:text-white">
                  Portfolio
                </a>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-gray-400">
                <p>mahir@example.com</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} mahirTheCoder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
    </>
  )
}

export default Footer