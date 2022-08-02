import React, { ChangeEvent, memo, useCallback, useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import { SvgIcon } from '@mui/material'
import { Box, Fab, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

import { ReactComponent as ErrorIdIcon } from '../../assets/error_ID.svg'
import { ReactComponent as ErrorPassport } from '../../assets/error_passport.svg'
import { ReactComponent as ErrorCertificate } from '../../assets/error_sertificate.svg'
import { ReactComponent as IDdoc } from '../../assets/ID_doc.svg'
import { ReactComponent as Passport } from '../../assets/pasport_illustration.svg'
import { ReactComponent as Certificate } from '../../assets/sertificate.svg'
import { AddPlusIcon } from '../../components/Icons'

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
}

const documentTemplates = {
  idCard: {
    viewBox: '0 0 320 188',
    component: () => <IDdoc style={{ width: '320px', height: '187.83px' }} />,
    errorIcon: () => <ErrorIdIcon style={{ width: '320px', height: '187.83px' }} />,
  },
  certificate: {
    viewBox: '0 0 240 274',
    component: () => <Certificate style={{ width: '240px', height: '274px' }} />,
    errorIcon: () => <ErrorCertificate style={{ width: '240px', height: '274px' }} />,
  },
  passport: {
    viewBox: '0 0 240 274',
    component: () => <Passport style={{ width: '240px', height: '274px' }} />,
    errorIcon: () => <ErrorPassport style={{ width: '240px', height: '274px' }} />,
  },
}

interface UploadProps {
  title?: string
  description?: string
  minFileSize?: number
  maxFileSize?: number
  documentType?: 'idCard' | 'certificate' | 'passport'
  acceptFormats?: string
  onSelect: (file: File | null) => void
}

const Upload: React.FC<UploadProps> = ({
  title,
  description,
  onSelect,
  documentType = 'idCard',
  acceptFormats = '.jpeg,.png,.pdf',
  minFileSize = 1,
  maxFileSize = 10,
}) => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
  const [preview, setPreview] = useState<string>()
  const [isShowError, setIsShowError] = useState(false)
  const [isPDF, setIsPDF] = useState(false)
  const [file, setFile] = useState<File>()

  const prepareFile = useCallback(
    (file?: File | null) => {
      if (file) {
        const isPDF = /.pdf/g.test(file.name)
        setIsPDF(isPDF)

        if (file.size > maxFileSize * 1024 * 1024) return setIsShowError(true)
        if (isShowError) setIsShowError(false)

        const url = window.URL.createObjectURL(file)
        setPreview(url)
        onSelect(file)
        setFile(file)
      }
    },
    [isShowError, maxFileSize, onSelect],
  )

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target
      const file = files && files[0]

      prepareFile(file)
    },
    [prepareFile],
  )
  const onDeleteFile = useCallback(() => {
    setPreview(undefined)
    onSelect(null)
    setIsPDF(false)
    setFile(undefined)
  }, [onSelect])

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      const files = e.nativeEvent.dataTransfer?.files
      const file = files && files[0]

      prepareFile(file)
      e.preventDefault()
    },
    [prepareFile],
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
        maxWidth: '580px',
        padding: '32px 32px',
        borderRadius: '24px',
        borderWidth: '2px',
        borderStyle: 'dashed',
        borderColor: isShowError ? theme.palette.error.main : theme.palette.secondary.main,
        transitionDuration: '0.3s',
        ':hover': { backgroundColor: `${theme.palette.secondary.main}40` },
      })}
    >
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {preview ? (
            <Box
              sx={{
                position: 'relative',
                width: isPDF ? '100%' : '60%',
                maxWidth: '1000px',
                maxHeight: '1000px',
              }}
            >
              {isPDF && (
                <Document file={file} options={options}>
                  <Page pageNumber={1} width={isTablet ? 240 : 400} />
                </Document>
              )}
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
          ) : (
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ width: '100%', height: '100%' }}
            >
              <SvgIcon
                sx={{ width: '100%', height: '100%' }}
                viewBox={documentTemplates[documentType].viewBox}
              >
                {!isShowError
                  ? documentTemplates[documentType].component()
                  : documentTemplates[documentType].errorIcon()}
              </SvgIcon>
            </Stack>
          )}
          {!preview && (
            <IconButton
              sx={{ position: 'absolute' }}
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept={acceptFormats} type="file" onChange={onChange} />
              <Box
                justifyContent="center"
                alignItems="center"
                sx={{
                  filter: 'drop-shadow(0px 0px 30px rgba(255, 85, 0, 0.5))',
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '50%',
                  height: '40px',
                  width: '40px',
                }}
              >
                <AddPlusIcon viewBox="0 0 16 16" sx={{ width: '15.29px', height: '16px' }} />
              </Box>
            </IconButton>
          )}
        </Box>
        {!preview && description && (
          <Typography variant="subtitle2" color="secondary" align="center">
            {description}
          </Typography>
        )}
      </Stack>
    </Box>
  )
}

// eslint-disable-next-line max-lines
const memoUpload = memo(Upload)

export { memoUpload as Upload }
