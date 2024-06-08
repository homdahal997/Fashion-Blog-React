import BlogPost from '../components/BlogPost'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './App.css'
import image1 from './assets/blog-image-1.jpg'
import image2 from './assets/blog-image-2.jpg'

function App() {
  return (
    <>
    <Header />
    <main>
      <BlogPost date="11/12/20" title ="On the Street in Brooklyn" imgURL = {image1} content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta nemo sunt, explicabo maxime facilis cum enim ab illum officiis. Recusandae vero excepturi dolores at unde, officia porro beatae iste eligendi nesciunt magni commodi dicta quibusdam enim tempora esse consequatur quasi assumenda!Repudiandae deserunt earum nemo numquam voluptates. Aliquam ullam saepe sequi, doloribus ipsam ad accusantium quia repellendus mollitia, dolore impedit harum quaerat asperiores incidunt totam exercitationem veniam! Porro exercitationem illo dicta quia. Omnis, vitae cumque optio unde consequatur, blanditiis corrupti eveniet a beatae voluptate sapiente placeat, hic dolor ratione sequi qui molestiae praesentium saepe inventore itaque necessitatibus ea. Obcaecati." postLinkURL = "#">
      </BlogPost>
      <BlogPost date="11/11/20" title ="Vintage in Vogue" imgURL = {image2} content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta nemo sunt, explicabo maxime facilis cum enim ab illum officiis. Recusandae vero excepturi dolores at unde, officia porro beatae iste eligendi nesciunt magni commodi dicta quibusdam enim tempora esse consequatur quasi assumenda!Repudiandae deserunt earum nemo numquam voluptates. Aliquam ullam saepe sequi, doloribus ipsam ad accusantium quia repellendus mollitia, dolore impedit harum quaerat asperiores incidunt totam exercitationem veniam! Porro exercitationem illo dicta quia. Omnis, vitae cumque optio unde consequatur, blanditiis corrupti eveniet a beatae voluptate sapiente placeat, hic dolor ratione sequi qui molestiae praesentium saepe inventore itaque necessitatibus ea. Obcaecati." postLinkURL = "#">
      </BlogPost>
    </main>
    <Footer />
    </>
  )
}

export default App
