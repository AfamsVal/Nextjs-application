const dev = process.env.NODE_ENV === 'production'

export const server = dev ? 'https://laffout.com/api':'http://localhost:3000/api'