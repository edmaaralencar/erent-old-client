import { useOptions } from 'services/hooks/useOptions'

function OptionsTemplate() {
  const { data, isLoading, isFetching, error } = useOptions()

  return (
    <ul>
      {data?.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ul>
  )
}

export default OptionsTemplate
