import { useField } from 'formik'
import { Input, Message, Error } from './ContactFormStyles'

export const TextInput = ({ ...props }: { [x: string]: any; name: string }) => {
  const [field, meta] = useField(props)
  return (
    <div>     
      <Input type ="text" {...field} {...props}/>
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </div>
  )
}


export const EmailInput = ({ ...props }: { [x: string]: any; name: string }) => {
  const [field, meta] = useField(props)
  
  return (
    <div>     
      <Input type ="email" {...field} {...props}/>
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </div>
  )
}

export const MessageInput = ({ ...props }: { [x: string]: any; name: string }) => {
  const [field, meta] = useField(props)
  
  return (
    <div>     
      <Message {...field} {...props}/>
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </div>
  )
}
