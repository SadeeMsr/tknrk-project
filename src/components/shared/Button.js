import Link from "next/link";

export default function Button({ name, path }) {
  return (
    <div>
      <Link href="/about">
        <button className="shadow px-10 py-4 rounded bg-red-600 text-white hover:bg-red-500 hover:shadow-lg">
          {name}
        </button>
      </Link>
    </div>
  );
}
