import React, { useCallback, useMemo, useState } from 'react'
import { observer } from 'mobx-react-lite'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import Buttons from './Buttons'
import Inputs from './Inputs'
import Selectors from './Selectors'
import TextFields from './TextFields'

const tabs = [
  { value: '1', label: 'Buttons', content: <Buttons /> },
  { value: '2', label: 'Input', content: <Inputs /> },
  { value: '3', label: 'Text fields', content: <TextFields /> },
  { value: '4', label: 'Select', content: <Selectors /> },
]

const Content = () => {
  const [activeTab, setActiveTab] = useState('1')

  const activeContent = useMemo(
    () => tabs.find(item => item.value === activeTab)?.content,
    [activeTab],
  )

  const handleChange = useCallback((_: unknown, newValue: string) => {
    setActiveTab(newValue)
  }, [])

  return (
    <Stack spacing={4}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleChange}>
          {tabs.map(({ value, label }) => (
            <Tab key={value} value={value} label={label} />
          ))}
        </Tabs>
      </Box>
      <Box>{activeContent}</Box>
    </Stack>
  )
}

export default observer(Content)
