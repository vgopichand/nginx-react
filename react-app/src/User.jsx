import { useParams } from "react-router-dom"

const userMap = {
  '111': 'Gopichand Vuyyuru',
  '222': 'Trane Technologies'
}

const User = () => {
  const { userId } = useParams()
  // console.log(userId, 'route APP')

  return (
    <div>
      {
        Object.keys(userMap).includes(userId)
          ? <div>{userMap[userId]}</div>
          : <div>Invalid User</div>
      }
    </div>
  )
}

export default User
