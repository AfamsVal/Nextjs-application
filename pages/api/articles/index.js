import {articles} from '../../../articlesData'

export default function handler (req,res) {
    res.status(200).json(articles)
}