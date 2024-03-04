/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        remotePatterns:[
            {
                protocol : 'https',
                hostname : 'www.nextg.cz',
                pathname : '**'

            }
        ]
    }
};

export default nextConfig;
