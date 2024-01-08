import { useParams } from "react-router-dom";
const ArticlePage = () => {
    const { articleId } = useParams();
    // const articleId = params.articleId;
   // const { articleId } = params;
    return (
        <h1>This is the article page for the id: {articleId}! </h1>
    );
}

export default ArticlePage;