import AllButton from "../atoms/AllButton"

 const Header = () => {
    return (
        <>
        <div className="container text-center mt-5">
            <h1 className="text-white landing__heading">Landing template for <span className="text-primary">startups</span></h1>
            <p className="text-brown">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
            <AllButton>Get Started</AllButton>
            <AllButton>View On Github</AllButton>
        </div>
        </>
    )
}

export default Header