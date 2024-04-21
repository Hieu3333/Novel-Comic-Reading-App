import React from 'react'
import NovelCard from './NovelCard.jsx'
import NovelCardAdmin from './NovelCardAdmin.jsx';
const NovelGridAdmin = ({novels, user}) => {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {novels.map((novel, index) => (
        <NovelCardAdmin key={index} novel={novel} user={user} />
      ))}
    </div>
  )
}

export default NovelGridAdmin;
