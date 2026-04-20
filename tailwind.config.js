export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ops: {
          bg: '#020617',
          panel: '#0f172a',
          panelAlt: '#111827',
          border: '#1e293b',
          accent: '#38bdf8',
          success: '#22c55e',
          warn: '#f59e0b',
          danger: '#ef4444',
          text: '#e2e8f0',
          muted: '#94a3b8',
        },
      },
      boxShadow: {
        panel: '0 10px 30px rgba(2, 6, 23, 0.35)',
      },
    },
  },
  plugins: [],
}
