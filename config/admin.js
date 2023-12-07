module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});


// 426f2132d5905ae0e35de49716bf1c4cafd06042123e205cf86f17d751418cc797c40973274c28d6718547ea82ae7dc2b9edcfd80bdfb96297446118e49beff77874d9422cd0fcd5c4a5e59f1236507fc3b39526162ace0d793db409e03e71614cbc3a752f050c5ca613df674303a3e3c27cbeee7d57497091800db596f58d8a