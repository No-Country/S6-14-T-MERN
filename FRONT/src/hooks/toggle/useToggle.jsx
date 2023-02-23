import { useState } from 'react'

const useToggle = (state) => {
  const [toggle, updateToggle] = useState(state || false)

  const onToggle = () => updateToggle(!toggle)

  return { toggle, onToggle }
}

export { useToggle }
