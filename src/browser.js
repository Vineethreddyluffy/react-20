import {Component} from 'react'

import GetItem from './history'

import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class GetBrowserHistory extends Component {
  state = {searchInput: '', List: initialHistoryList, name: ''}

  onChangeHistory = event => {
    const {List} = this.state
    const Arr = List.filter(each =>
      each.title.toLowerCase().includes(event.target.value.toLowerCase()),
    )
    if (Arr.length === 0) {
      this.setState({name: <p className="name">There is no history to show</p>})
    } else {
      this.setState({name: ''})
    }
    this.setState({searchInput: event.target.value})
  }

  onDelete = props => {
    const {List} = this.state
    const deleteList = List.filter(each => each.id !== props)
    this.setState({List: deleteList})
    let variable
    if (deleteList.length === 0) {
      variable = <p className="name">There is no history to show</p>
    } else {
      variable = null
    }
    this.setState({name: variable})
  }

  render() {
    const {List} = this.state
    const {name} = this.state
    const {searchInput} = this.state
    const searchResults = List.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="comp">
        <div className="main-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="image"
          />
          <div className="out-cont">
            <div className="input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="image1"
              />
              <input
                type="search"
                className="input"
                onChange={this.onChangeHistory}
              />
            </div>
          </div>
        </div>
        <div className="bottom">
          <ul className="card-cont">
            {searchResults.map(each => (
              <GetItem item={each} key={each.id} onDelete={this.onDelete} />
            ))}
          </ul>
          <div className="name-cont">{name}</div>
        </div>
      </div>
    )
  }
}
export default GetBrowserHistory
