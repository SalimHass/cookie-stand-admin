
import Link from "next/link";
import { useRouter } from 'next/router';
export default function Overview() {


    const router = useRouter();
    const counter = router.query;

    return (
      <>
        <h1>{counter.counter} locations entered</h1>
        <Link href={{ pathname: "/" }}>
          <a>back to Home</a>
        </Link>
      </>
    );
}