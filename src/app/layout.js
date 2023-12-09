import './global.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'My portfolio',
  description: 'Here you can find my latest work  ',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
