import type { ReactNode } from 'react'
import { memo, FC } from 'react'

interface IProps {
  children?: ReactNode
  title: string
  description: string
  url: string
}

// 直接对props进行类型约束
// const Template = ({ title, description, url }: IProps) => {
//   return (
//     <div className="template">
//       <h1>{title}</h1>
//       <p>{description}</p>
//       <a href={url} template></a>
//       <button onClick={() => window.open(url, '_blank')}>Template</button>
//     </div>
//   )
// }

// 使用泛型接收props的约束
const Template: FC<IProps> = ({ title, description, url, children }) => {
  return (
    <div className="template">
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => window.open(url, '_blank')}>Template</button>
      {children}
    </div>
  )
}

export default memo(Template)
