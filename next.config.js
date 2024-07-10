module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/patrimoine/actualites",
        destination: "http://127.0.0.1:8000/api/patrimoine/actualites",
      },
      {
        source: "/api/patrimoine/actualite/:id",
        destination: "http://127.0.0.1:8000/api/patrimoine/actualite/:id",
      },
    ];
  },
};
