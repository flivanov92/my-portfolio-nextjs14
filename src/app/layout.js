import './global.css';

export const metadata = {
  title: 'My portfolio',
  description: 'Here you can find my latest work  ',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
