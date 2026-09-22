import Link from "next/link";

Import Link from "next/link";


export default function Home(){

  return (
    <main>
      <h1>AnimeApp</h1>
      <p>Descubre y explora animes, conoce mas sobre tus favoritos y sobre tus mangas (proximamente)</p>
      <Link href="/login">Iniciar Sesion</Link>
    </main>
  )
}