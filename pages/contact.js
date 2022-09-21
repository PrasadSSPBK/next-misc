import Header from "../components/Header"

export default function Contact({data}){
    return(
        <div className="content">
        
        <h1 >{data}</h1>
        {/* Environment Variable=public? */}
        <h1>{process.env.NEXT_PUBLIC_NAME}</h1>
        </div>
      
    )
}

Contact.getLayout=function pageLayout(page){
    return(
        <>
        <Header/>
        {page}
            </>
    )
}

export async function getStaticProps(context){
    // environment variable private
    const user=process.env.name
    const pwd=process.env.pwd
    console.log(user,pwd)
    return{
        props:{
            data:context.preview?"List Of Previewed Contacts":"List of Contacts"
        }
    }
}