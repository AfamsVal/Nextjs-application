import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {server} from '../../../config'


const article = ({article}) => {
    const router = useRouter()
    const {id} = router.query
    console.log(article,id);
    return (
        <section>
  <div className="container py-3">
      <div className="row ">
        {/* <div className="col-md-4">
            <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400" className="w-100"/>
        </div> */}
          <div className="col-12 px-3">
        <div className="card py-5">
            <div className="card-block px-3">
              <h3 className="card-title">{article.title}</h3>
              <p className="card-text">{article.body}</p>
            </div>
          </div>
          <div className="col-12 mt-5">
          <Link href="/" className="btn btn-info ml-5"> &lt; Go Back</Link>
          </div>
        </div>
      </div>
    </div>
</section>
    )
}

export const getServerSideProps = async(context) => {
   // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const res = await fetch(`${server}/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props:{
            article
        }
    }
}

export default article
