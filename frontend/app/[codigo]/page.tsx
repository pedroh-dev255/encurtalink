import ClientPage from "./ClientPage";

export default async function Page({
  params,
}: {
  params: Promise<{ codigo: string }>;
}) {
  const { codigo } = await params;

  return <ClientPage codigo={codigo} />;
}
