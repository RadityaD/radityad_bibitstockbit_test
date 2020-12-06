module.exports = {
  images: {
    domains: ['m.media-amazon.com'],
  },
  async redirects() {
    return [
      {
        source: '/filmdb',
        destination: '/filmdb/movies',
        permanent: true,
      },
    ];
  },
};
