import Button from '../../common/Button'
import { TypeAnimation } from 'react-type-animation'

const Codeblocks = ({children,active,text,code,linkTo,btnA,btnB}) => {
  return (
    <div className={`${active ? "flex" : "flex flex-row-reverse"} m-5`}>
      
      <div className='w-[100%] flex flex-col justify-between items-center m-2.5'>
         <div className='m-2.5'><p>{children}</p></div>
         <div className='m-2.5 text-center'><p>{text}</p></div>
         <div className='flex m-2.5'>
            <Button active={true} linkTo={linkTo} text={btnA}/>
            <Button active={false} linkTo={linkTo} text={btnB}/>
         </div>
      </div>

      <div className='flex w-[100%] h-fit m-2.5'>
         <div className='w-[10%]'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10 </p>
         </div>
         <div className='w-[90%] '> 
         <TypeAnimation
      sequence={[code,10000,""]}
      cursor={true}
      repeat={Infinity}
      omitDeletionAnimation ={true}
      style={{ whiteSpace: "pre-line", display: 'block' }}/>
         </div>
      </div>

    </div>
  )
}

export default Codeblocks
