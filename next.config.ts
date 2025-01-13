import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  output: 'export', // Configura exportação estática
  // images: {
  //   unoptimized: true, // Desativa otimização de imagens (necessária para exportação)
  // },
  // basePath: isProd ? '/apvs_page' : '', // Use o nome exato do repositório
  // assetPrefix: isProd ? '/apvs_page/' : '',
};

export default nextConfig;
