import "./globals.css";

export const metadata = {
  title: "Product List with Cart",
  description: "Adding foods to cart!",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
