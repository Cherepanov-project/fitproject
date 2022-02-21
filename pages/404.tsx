import {useEffect} from "react";
import {useRouter} from "next/router";

const Error = () => {
  const router = useRouter();
  
  useEffect(() => {
    setTimeout(()=>{
      router.push('/admin');
    },3000)
  }, [router]);
  

  return (
    <>
      <h1>404</h1>
      <h2>Something is going wrong...</h2>
    </>
  );
};

export default Error;