import {articles} from '../data'

export default (req, res) => {
    const {id} = req.query
    const article = articles.find(article => article.id === id)
    article? res.status(200).json(article) : res.status(404).json({message: `Article with the id of ${id} is not found`})
}