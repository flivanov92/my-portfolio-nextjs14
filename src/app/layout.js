import { GlobalCss } from '@/ui/reset';

export const metadata = {
  title: 'My portfolio',
  description: 'Here you can find my latest work  ',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <GlobalCss>{children}</GlobalCss>
    </html>
  );
};

export default RootLayout;
