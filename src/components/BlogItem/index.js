/* eslint-disable arrow-body-style */
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsData} = props
  const {id, author, imageUrl, avatarUrl, title, topic} = blogsData

  return (
    <Link to={`/blogs/${id}`}>
      <div className="item-card">
        <div className="image-card">
          <img src={imageUrl} className="image-icon" alt={title} />
        </div>
        <div>
          <p>{topic}</p>
          <h1 className="item-heading">{title}</h1>
          <div className="profile-card">
            <img src={avatarUrl} className="profile-icon" alt={author} />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
