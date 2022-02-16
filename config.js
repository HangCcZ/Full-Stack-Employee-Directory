const env = process.env.NODE_ENV
let HOST

if (env == 'development') {
  HOST = process.env.NEXT_PUBLIC_LOCALHOST_NAME
} else if (env == 'production') {
  HOST = process.env.NEXT_PUBLIC_PRODUCTION_HOST
}

module.exports = {
  HOST,
}
