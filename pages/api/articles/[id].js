import {articles} from '../../../articlesData'

export default function handler (req,res) {
     const {id} = req.query;
    const article = articles.find(article => String(article.id) === id)
    if(article && Object.keys(article).length > 0){
         res.status(200).json(article)
    }else{
        res.status(404).json({error:`Cant find a post with an id of ${id}`})
    }

}