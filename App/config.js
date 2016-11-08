const configuration = {
  production: {
    EXAMPLE_API: 'https://example.com'
  },
  development: {
    EXAMPLE_API: 'https://example.com'
  },
}


const config = configuration[process.env.NODE_ENV]
window.config = config
export default config
