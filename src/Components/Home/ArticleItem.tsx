type Props = {
  title: string;
  link: string;
  date: string;
};

function ArticleItem(props: Props) {
  return (
    <div className="items-center mt-4 md:space-x-3 md:flex md:flex-row-reverse">
      <p className="text-darker-primary w-[180px]">{props.date}</p>
      <a href={props.link} target="_blank" className="hover:text-primary">
        {props.title}
      </a>
    </div>
  );
}

export default ArticleItem;
