const Button = ({click,text,classN}) => {
  return <button className={classN} onClick={click}>{text}</button>
}

export default Button