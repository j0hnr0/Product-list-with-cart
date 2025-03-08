import localFont from "next/font/local";
import "./globals.css";
import Providers from "./_components/providers";

const redHatBold = localFont({
  src: "../public/fonts/RedHatText-Bold.ttf",
  variable: "--red-hat-text-bold",
});

const redHatSemiBold = localFont({
  src: "../public/fonts/RedHatText-SemiBold.ttf",
  variable: "--red-hat-text-semibold",
});

const redHatRegular = localFont({
  src: "../public/fonts/RedHatText-Regular.ttf",
  variable: "--red-hat-text-regular",
});

export const metadata = {
  title: "Product List with Cart",
  description: "Adding foods to cart!",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${redHatBold.variable} ${redHatSemiBold.variable} ${redHatRegular.variable}`}
    >
      <body className="bg-custom-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
