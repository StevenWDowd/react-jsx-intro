function Tweets ({twits}){
  console.log(`the twits are`, twits)
  return (
    <div>
      <ul>
        {twits.map(t => <Tweet msg={t} />)}
      </ul>
    </div>
  )
}