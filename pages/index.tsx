import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getServerSideProps(context: any) {
  const { params } = context;

  return {
    redirect: {
      destination: "/pages/temp mail",
      permanent: false,
    },
  };
}

export default function Home({ params }: { params: any }) {
  const router = useRouter();

  useEffect(() => {
    router.push("/pages/temp mail");
  }, [router]);
  return (
    <>
      <h1>Temp mail</h1>
    </>
  );
}
