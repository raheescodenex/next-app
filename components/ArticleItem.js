import Link from "next/link";
import articelStyle from '../styles/Article.module.css'
const ArticleItem = ({article}) => {
    return ( 
        <Link href="article/[id]" as={`/article/${article.id}`}>
            <a className={articelStyle.card}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </a>
        </Link>
     );
}
 
export default ArticleItem;