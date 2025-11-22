import LeftText from './LeftText'
import RightText from './RightText'

const Page1content = (props) => {
  return (
    <div className='py-10 px-15 flex items-center h-[90vh] gap-10 '>
      <LeftText/>
      <RightText user={props.user} />
    </div>
  )
}

export default Page1content
