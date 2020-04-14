import React, {useState} from 'react'

const style= {margin: "10px", padding: "10px"}

export const Name = () => {
  let [name, setName] = useState('')
  return (
    <div style={style}>
      <input onChange={e => setName(e.target.value)} placeholder="이름"></input>
      <span>{name}</span>
    </div>
  )
}
export const NickName = () => {
  let [nickName, setNickName] = useState('')
  return (
    <div style={style}>
      <input onChange={e => setNickName(e.target.value)} placeholder="별명"></input>
      <span>{nickName}</span>
    </div>
  )
}