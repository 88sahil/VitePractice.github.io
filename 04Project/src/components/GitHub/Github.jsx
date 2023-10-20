import React from 'react'

const Github = () => {
    const data = GithubInfo()
  return (
    <div>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </div>
  )
}

export default Github
export const GithubInfo = async()=>{
        const response = await fetch('https://api.github.com/users/88sahil')
        return response.json()
    }