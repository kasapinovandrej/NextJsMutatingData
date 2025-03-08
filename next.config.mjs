/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ovo sam dodao da bih mogao eksterne slike da koristim!
  images: {
    remotePatterns: [{ hostname: "res.cloudinary.com" }],
  },
};

export default nextConfig;
