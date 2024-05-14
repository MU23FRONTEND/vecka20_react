type Props = {
  name : string
}

function Home({ name } : Props) {
  return (
    <>
        <h1>Home</h1>
        <p>Välkommen världens coolaste, snyggaste { name }</p>
    </>
  )
}

export default Home;
