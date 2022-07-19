import React, { ChangeEvent, memo, useCallback, useState } from 'react'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import { Box, Fab, IconButton, Stack, Typography } from '@mui/material'

import styles from './styles.module.css'

interface UploadProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  minFileSize?: number
  maxFileSize?: number
  onSelect: (file: File | null) => void
}

const Upload: React.FC<UploadProps> = ({
  title,
  description,
  icon,
  onSelect,
  minFileSize = 1,
  maxFileSize = 10,
}) => {
  const [preview, setPreview] = useState<string>()
  const [isShowError, setIsShowError] = useState(false)

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target
      const file = files && files[0]

      if (file) {
        if (file.size > maxFileSize * 1024 * 1024) return setIsShowError(true)
        if (isShowError) setIsShowError(false)

        const url = window.URL.createObjectURL(file)
        setPreview(url)
        onSelect(file)
      }
    },
    [onSelect, maxFileSize, setIsShowError, isShowError],
  )
  const onDeleteFile = useCallback(() => {
    setPreview(undefined)
    onSelect(null)
  }, [onSelect])

  return (
    <div className={`${styles.upload} ${isShowError && styles.error}`}>
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        {!preview && (
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept=".jpeg,.png,.pdf" type="file" onChange={onChange} />
            <AddCircleIcon sx={{ fontSize: '60px' }} />
          </IconButton>
        )}
        {!preview && title && <Typography variant="h5">{title}</Typography>}
        {!preview && description && (
          <Typography variant="subtitle2" color="secondary">
            {description}
          </Typography>
        )}
        {preview && (
          <Box sx={{ position: 'relative', width: '60%' }}>
            <img src={preview} width="100%" alt="" />
            <Fab
              color="secondary"
              size="small"
              onClick={onDeleteFile}
              sx={{ position: 'absolute', top: -25, right: -25 }}
            >
              <CloseTwoToneIcon />
            </Fab>
          </Box>
        )}
      </Stack>
    </div>
  )
}

export default memo(Upload)
