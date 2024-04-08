type Props = {
  title: string;
  link: string;
};

function ArticleItem(props: Props) {
  return (
    <div className="mb-3">
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hover:text-primary"
      >
        <span className=" mr-2">&#x2197;</span>
        {props.title}
      </a>
    </div>
  );
}

export default ArticleItem;
