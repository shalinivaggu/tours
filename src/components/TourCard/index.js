import {List, Image, Text} from './styledComponents'

const TourCard = props => {
  const {card} = props
  const {name, imageUrl, description} = card

  return (
    <List>
      <Image src={imageUrl} alt={name} />
      <Text>
        <h1>{name}</h1>
        <p>{description}</p>
      </Text>
    </List>
  )
}

export default TourCard
