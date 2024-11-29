import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href='/' className='ml-10'>
            <Image src='/logo.svg' alt='Logo' width={150} height={100} priority />
        </Link>
    )
}
