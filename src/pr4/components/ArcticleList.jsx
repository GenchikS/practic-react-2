const ArticleList = ({items}) => {
    return (
      <ul>
        {/* зробили деструктурізацію, щоб достати необхідні ключі */}
        {items.map(({ objectID, url, title }) => (
          <li key={objectID}>
            <a href={url} target="_blank" rel="noreferrer noopener">
              {title}
            </a>
          </li>
        ))}
      </ul>
    );
}

export default ArticleList