import './global.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
      </body>
    </html>
  );
};

export default RootLayout;
