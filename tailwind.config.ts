import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 40px rgba(138, 69, 255, 0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(97, 178, 255, 0.24), transparent 28%), radial-gradient(circle at bottom right, rgba(253, 126, 20, 0.18), transparent 30%)',
      },
    },
  },
  plugins: [],
};

export default config;
