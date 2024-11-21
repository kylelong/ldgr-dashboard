const Button = ({ text, action }: { text: string; action: () => void }) => {
  return (
    <button
      onClick={action}
      className="group relative m-1 inline-flex w-36 cursor-pointer items-center justify-center overflow-hidden rounded-lg border-b-2 border-l-2 border-r-2 border-blue-700 bg-gradient-to-tr from-blue-600 to-blue-500 px-4 py-1 text-white shadow-lg transition duration-100 ease-in-out active:translate-y-0.5 active:border-blue-600 active:shadow-none"
    >
      <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
      <span className="relative font-medium">{text}</span>
    </button>
  )
}

export default Button
