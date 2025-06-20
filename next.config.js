module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["cdn.sanity.io"]
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/intro",
        permanent: true
      }
    ];
  }
};
