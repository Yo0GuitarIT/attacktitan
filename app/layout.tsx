import { Metadata } from "next";
import ApolloWrapper from "@/lib/apollo-wrapper";

export const metadata: Metadata = {
  title: "Spotify",
  description: "Spotify Clone Project",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
