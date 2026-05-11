import { Menu } from "@/components/menu";

export async function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "en" }];
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
