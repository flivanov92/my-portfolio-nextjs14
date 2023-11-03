import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My portfolio',
  description: 'Here you can find my latest work  ',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div>Nav bar here</div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
