import React from 'react'
import NovelCard from './NovelCard.jsx'
const NovelGrid = ({novels}) => {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {novels.map((novel, index) => (
        <NovelCard key={index} novel={novel} />
      ))}
    </div>
  )
}

export default NovelGrid
