/* eslint-disable react/no-unescaped-entities */

function Footer() {
  return (
    <>
    <footer className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-10 transition duration-500 ease-in-out transform hover:scale-105">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 transition duration-500 ease-in-out transform hover:translate-y-1">
                    Ready to take your project to the next level?
                </h2>
                <p className="mb-6 text-sm md:text-lg transition duration-500 ease-in-out transform hover:translate-y-1">
                    Let's work together to create something amazing.
                </p>
                <a 
                    href="#contact" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-110"
                >
                    Contact Me
                </a>
            </div>
        </footer>
    </>
  )
}

export default Footer