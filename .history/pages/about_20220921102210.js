import Footer from "../components/Footer"

export default function About(){
    return(
        <h1 className="content">About Page</h1>
    )
}

About.getLayout=function pageLayout(page){
    return(
        <>
        {page}
        <Footer/>
        </>
    )
}