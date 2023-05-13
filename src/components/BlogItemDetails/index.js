/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {data: {}, isLoader: true}

  componentDidMount() {
    this.getItemBlogDetail()
  }

  getItemBlogDetail = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const dataItem = await response.json()

    const updateData = {
      id: dataItem.id,
      author: dataItem.author,
      title: dataItem.title,
      content: dataItem.content,
      imageUrl: dataItem.image_url,
      avatarUrl: dataItem.avatar_url,
    }
    this.setState({data: updateData, isLoader: false})
  }

  renderData = () => {
    const {data} = this.state
    const {title, imageUrl, avatarUrl, content, author} = data

    return (
      <div className="card">
        <h1>{title}</h1>
        <div className="profile-detail-card">
          <img src={avatarUrl} className="profile-detail-icon" alt={author} />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="item-img" />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state

    return (
      <div>
        {isLoader ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
