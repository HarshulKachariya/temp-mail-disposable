import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getServerSideProps(context: any) {
  const { params } = context;
  console.log(params, "params");

  return {
    redirect: {
      destination: "/page/temp mail",
      permanent: false,
    },
  };
}

export default function Home({ params }: { params: any }) {
  const router = useRouter();

  useEffect(() => {
    router.push("/page/temp mail");
  }, [router]);
  return (
    <>
      <h1>Temp mail</h1>
    </>
  );
}
