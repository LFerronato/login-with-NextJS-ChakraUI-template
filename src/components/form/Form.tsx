import { useEscolaFormStore } from "components/form/useFormStore"
import { InputHTMLAttributes } from "react"

const Input = ({ name, onChange }: InputHTMLAttributes<HTMLInputElement>) => {
  const value = useEscolaFormStore(s => s.formData[name ?? ''])
  return (
    <input
      type="text"
      name={name}
      value={value ?? ''}
      onChange={onChange}
      style={{
        fontSize: '3rem',
        border: 'none',
        outline: 'none',
      }}
    />
  )
}

export const Form = () => {
  const onChangeForm = useEscolaFormStore(s => s.onChangeForm)
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2>form</h2>

      {/* Re-Render de forma totalmente independent cada input */}

      <Input name="name" onChange={onChangeForm} />
      <Input name="cnpj" onChange={onChangeForm} />
      <Input name="email" onChange={onChangeForm} />

    </form>

  )
}
