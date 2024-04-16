import React from 'react'
import NovelCard from './NovelCard.jsx'
import NovelCardFav from './NovelCardFav.jsx'
const NovelGridFav = ({novels, user}) => {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {novels.map((novel, index) => (
        <NovelCardFav key={index} novel={novel} user={user} />
      ))}
    </div>
  )
}

export default NovelGridFav
