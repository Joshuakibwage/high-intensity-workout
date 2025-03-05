 

const Button = ({label, className, iconURL}) => {
  return (
    <button className={className}>
      {iconURL}
      {label}
    </button>
  )
}

export default Button