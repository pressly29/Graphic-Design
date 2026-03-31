// PM2 configuration — tells PM2 how to run your Next.js app.
// PM2 keeps the app alive 24/7 and restarts it if it crashes.

module.exports = {
  apps: [
    {
      name: 'pressly-design-studio',  // The name used in: pm2 restart pressly-design-studio
      script: 'npm',
      args: 'start',
      cwd: '/var/www/pressly-design-studio',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      // Restart the app if it uses more than 500MB of memory
      max_memory_restart: '500M',
    },
  ],
}