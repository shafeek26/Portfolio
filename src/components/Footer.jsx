/* eslint-disable react/no-unescaped-entities */

function Footer() {
  return (
    <>
    <footer className=" max-w-4xl mx-auto mt-5 bg-transparent dark:bg-gray-800 text-gray-800 dark:text-white py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to take your project to the next level?</h2>
                <p className="mb-6">Let's work together to create something amazing.</p>
                <a 
                    href="#contact" 
                    className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                    Contact Me
                </a>
            </div>
        </footer>
    </>
  )
}

export default Footer