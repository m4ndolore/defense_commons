import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Guidelines - Industry Commons for Defense",
  description: "ICD Foundation brand guidelines, design system, color palette, typography, and component specifications.",
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}