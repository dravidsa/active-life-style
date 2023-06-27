import './globals.css'

import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Active Life Style' ,
  description: 'A fitness platform ',
}




export default function RootLayout({ children }) {
  return (
    /* header */
    

    /* nav */ 

    /* searchBox */ 

    /*Footer */ 
    
    <html lang="en">
    
      <body>

      
      

        <Header />


        {children}
        </body>
    </html>
  )
}
