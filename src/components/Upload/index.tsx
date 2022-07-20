import React, { ChangeEvent, memo, useCallback, useState } from 'react'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { Box, Fab, IconButton, Stack, Typography } from '@mui/material'

// TODO: реализовать когда будет понятно какие типи документов существуют
// import certificateIcon from '../../assets/certificate.svg'
// import idIcon from '../../assets/id.svg'
// import passportIcon from '../../assets/passport.svg'

interface UploadProps {
  title?: string
  description?: string
  minFileSize?: number
  maxFileSize?: number
  acceptFormats?: string
  onSelect: (file: File | null) => void
}

const Upload: React.FC<UploadProps> = ({
  title,
  description,
  onSelect,
  acceptFormats = '.jpeg,.png,.pdf',
  minFileSize = 1,
  maxFileSize = 10,
}) => {
  const [preview, setPreview] = useState<string>()
  const [isShowError, setIsShowError] = useState(false)
  const [isPDF, setIsPDF] = useState(false)

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target
      const file = files && files[0]

      if (file) {
        const isPDF = /.pdf/g.test(file.name)
        setIsPDF(isPDF)

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
    setIsPDF(false)
  }, [onSelect])

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      const files = e.nativeEvent.dataTransfer?.files
      const file = files && files[0]

      if (file) {
        const isPDF = /.pdf/g.test(file.name)
        setIsPDF(isPDF)

        if (file.size > maxFileSize * 1024 * 1024) return setIsShowError(true)
        if (isShowError) setIsShowError(false)

        const url = window.URL.createObjectURL(file)
        setPreview(url)
        onSelect(file)
      }

      e.preventDefault()
    },
    [maxFileSize, isShowError, onSelect],
  )

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => e.preventDefault(), [])

  return (
    <Box
      onDrop={onDrop}
      onDragOver={onDragOver}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={theme => ({
        minWidth: '288px',
        minHeight: '288px',
        padding: '40px 20px',
        borderRadius: '24px',
        borderWidth: '2px',
        borderStyle: 'dashed',
        borderColor: isShowError ? theme.palette.error.main : theme.palette.secondary.main,
        transitionDuration: '0.3s',
        ':hover': { backgroundColor: `${theme.palette.secondary.main}40` },
      })}
    >
      {/* <img src={certificateIcon} alt="" />
      <img src={idIcon} alt="" />
      <img src={passportIcon} alt="" /> */}
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        {!preview && (
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept={acceptFormats} type="file" onChange={onChange} />
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
          <Box
            sx={{
              position: 'relative',
              width: isPDF ? '100%' : '60%',
              maxWidth: '1000px',
              maxHeight: '1000px',
            }}
          >
            {isPDF && <PictureAsPdfIcon sx={{ fontSize: '150px' }} />}
            {!isPDF && <img src={preview} width="100%" alt="" />}
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
    </Box>
  )
}

export default memo(Upload)
