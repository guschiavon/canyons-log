import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className="container mx-auto py-6 md:py-8">
      <div className="flex flex-col gap-y-6">
        <h1 className="font-heading text-6xl md:text-8xl font-bold">A community-driven database of canyons, for free.</h1>
        <p className="font-body text-3xl font-light">Log your canyon descents and contribute to the community</p>
        <div>
          <Link to={'/auth'} className="btn btn-outline btn-warning btn-large">Start Logging</Link>
        </div>
      </div>
    </div>
  )
}

export default Home