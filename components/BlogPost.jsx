function BlogPost(props) {
    return (
        <article>
            <p className="datefield">{props.date}</p>
            <h2 className="post-title">{props.title}</h2>
            <img src= {props.imgURL} alt={props.title} />
            <p className="content">{props.content}</p>
            <p className="readmore"><a href={props.postLinkURL}>Continues...</a></p>
        </article>
    );
}
export default BlogPost;