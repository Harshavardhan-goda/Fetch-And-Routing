/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-body-style */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const blogItemData = data.map(each => ({
      id: each.id,
      author: each.author,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({blogsData: blogItemData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(item => <BlogItem blogsData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
