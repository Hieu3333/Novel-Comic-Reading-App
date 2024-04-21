import React from 'react'
import NovelCard from './NovelCard.jsx'
const UserGrid = ({novels, user}) => {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {novels.map((novel, index) => (
        <NovelCard key={index} novel={novel} user={user} />
      ))}
    </div>
  )
}

export default UserGrid;
