import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next Louis Vuitton",
    description: "Louis Vuitton Clone Website built with Next.js",
  };


const RootLayout =({children}:{children:React.ReactNode}) =>{
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout