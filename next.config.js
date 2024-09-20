/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "https://ratalla816.github.io/robazon-pics/assets/images/squirrel.jpg" },
      { hostname: "https://ratalla816.github.io/robazon-pics/assets/images/spaghetti-hat.jpg" },
      { hostname: "https://ratalla816.github.io/robazon-pics/assets/images/ship-bottle.jpg" },
      { hostname: "https://ratalla816.github.io/robazon-pics/assets/images/plant.jpg" },
      { hostname: "https://ratalla816.github.io/robazon-pics/assets/images/luxury-tank.jpg" },
      { hostname: "https://ratalla816.github.io/robazon-pics/assets/images/fish-shoes.jpg" },
      { hostname: "https://ratalla816.github.io/robazon-pics/assets/images/cobra.jpg" },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
