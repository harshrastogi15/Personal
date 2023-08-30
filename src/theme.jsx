// src/theme.js
module.exports = {
  colors: {
    primary: 'bg-[#00004d]',
    textPrimary: 'text-white',
    buttonBg: 'bg-white',
    buttonText: 'text-blue-900',
    buttonHover: 'hover:bg-blue-100',
    buttonFocus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
  },
  typography: {
    title: 'text-4xl md:text-5xl lg:text-6xl font-bold mb-4',
    heading: 'text-2xl text-[#00004d] md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800',
    subheading: 'text-lg md:text-xl mb-8',
    button: 'px-6 py-3 rounded-full font-semibold shadow-md',
    section: {
      mainBlock: 'bg-gray-100 py-16',
      childBlock: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
    },
  },
};
