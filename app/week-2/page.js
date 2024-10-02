import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <div>
        <p>Patrik Santiago</p>
        <Link href="https://github.com/gameovercheeseburger/cprg306-assignments" passHref legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            A link to my GitHub repository
          </a>
        </Link>
      </div>
    </main>
  );
}
