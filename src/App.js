import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TourCard from './components/TourCard'
import {Globaldiv, Heading, UnorderedList} from './styledComponents'
import './App.css'

class App extends Component {
  state = {isLoading: true, packages: []}

  componentDidMount() {
    this.getPackages()
  }

  getPackages = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const result = await response.json()
    const updateData = result.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))
    this.setState({packages: updateData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderPackages = () => {
    const {packages} = this.state

    return (
      <UnorderedList>
        {packages.map(each => (
          <TourCard card={each} key={each.id} />
        ))}
      </UnorderedList>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <Globaldiv>
        <Heading>Travel Guide</Heading>
        {isLoading ? this.renderLoader() : this.renderPackages()}
      </Globaldiv>
    )
  }
}

export default App
