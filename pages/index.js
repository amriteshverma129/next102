import Head from 'next/head'
import Image from 'next/image'

import { Carousel} from 'react-bootstrap'


export default function Home() {
  return (
    <div >
      <Head><title>Home</title></Head>
    
      
    <Carousel  style={{height:"80vh"}}>
        <Carousel.Item >
            <Image src="/assets/car1.jpg"  className="d-block" width={1600} height={600} alt="First slide" style={{height:"80vh"}} ></Image>
           
            <Carousel.Caption>
                <h3 className="text-dark">First slide label</h3>
                <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
        <Image src="/assets/car4.jpg" className="d-block" width={1600} height={600} alt="Second slide" ></Image>
           
            <Carousel.Caption className="text-dark">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image src="/assets/car3.jpg"  className="d-block" width={1600} height={600}  alt="Third slide"  ></Image>
          
            <Carousel.Caption className="text-dark">
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
   </div>
  )
}
