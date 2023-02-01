import { Roboto } from "@next/font/google";

const inter = Roboto({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

export default function Home() {
  return (
    <main className={inter.className}>
      now we start with our shop
      <br />
      <br />
      it is gonna be awesome
    </main>
  );
}
