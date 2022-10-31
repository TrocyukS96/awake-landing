import Image from "next/image";

export const Logo = () =>{
    return(
        <div style={{padding:'0 10px'}}>
        <Image src="/static/logo.png" alt="logo icon" width={324} height={70} />
        </div>
    )
}