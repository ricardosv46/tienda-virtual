import Container from '@components/layout/Container'
import Input from '@components/shared/Input'
import Select from '@components/shared/Select'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container className="py-10" bgColor="">
      <div className="flex flex-col max-w-screen-sm gap-5 mx-auto ">
        <Input type="text" label="Username" className="w-full" error="El usuario es requerido" />
        <Input type="password" label="Password" className="w-full" />
        <Select
          label="Password"
          options={[
            { value: 'values1', label: 'label1' },
            { value: 'values2', label: 'label2' }
          ]}
        />
        <button disabled={false} className="w-full btn btn-outline-green">
          fuaaa
        </button>
      </div>
    </Container>
  )
}

export default Home
