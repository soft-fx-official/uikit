/* eslint max-lines: off */
import React, { ChangeEvent, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import {
  Box,
  Fab,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { ReactComponent as Certificate } from '../../assets/certificate.svg'
import { ReactComponent as ErrorCertificate } from '../../assets/error_certificate.svg'
import { ReactComponent as ErrorIdIcon } from '../../assets/error_ID.svg'
import { ReactComponent as ErrorPassport } from '../../assets/error_passport.svg'
import { ReactComponent as IDdoc } from '../../assets/ID_doc.svg'
import { ReactComponent as Passport } from '../../assets/passport.svg'
import { AddPlusIcon } from '../../components/Icons'

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
}

enum UploadDocumentType {
  idCard = 'idCard',
  certificate = 'certificate',
  passport = 'passport',
}

enum ErrorCode {
  minFileSizeErr = 'MIN_FILE_SIZE_ERR',
  maxFileSizeErr = 'MAX_FILE_SIZE_ERR',
}

type DocumentTemplate = {
  viewBox: string
  component: () => React.ReactNode
  errorIcon: () => React.ReactNode
}

const documentTemplates: Record<UploadDocumentType, DocumentTemplate> = {
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
  documentType?: UploadDocumentType
  acceptFormats?: string
  onSelect: (file: File | null) => void
  customError?: string
  onError?: (errCode: string) => string
}

const BYTES_IN_MB = 1024 * 1024

const Upload: React.FC<UploadProps> = ({
  title,
  description,
  onSelect,
  onError,
  customError,
  documentType = UploadDocumentType.idCard,
  acceptFormats = '.jpeg,.png,.pdf',
  minFileSize = 1,
  maxFileSize = 10,
}) => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
  const [preview, setPreview] = useState<string>()
  const [error, setError] = useState<string | undefined>(undefined)
  const [isPDF, setIsPDF] = useState(false)
  const [file, setFile] = useState<File>()

  useEffect(() => {
    setError(customError)
  }, [customError])

  const handleErrorCode = useCallback(
    (errCode: ErrorCode) => {
      setError(onError ? onError(errCode) : errCode)
    },
    [onError],
  )

  const minSizeBytes = useMemo(() => minFileSize * BYTES_IN_MB, [minFileSize])

  const maxSizeBytes = useMemo(() => maxFileSize * BYTES_IN_MB, [maxFileSize])

  const prepareFile = useCallback(
    (file?: File | null) => {
      if (file) {
        const isPDF = /.pdf/g.test(file.name)
        setIsPDF(isPDF)

        if (file.size < minSizeBytes) return handleErrorCode(ErrorCode.minFileSizeErr)
        if (file.size > maxSizeBytes) return handleErrorCode(ErrorCode.maxFileSizeErr)
        if (error) setError(undefined)

        const url = window.URL.createObjectURL(file)
        setPreview(url)
        onSelect(file)
        setFile(file)
      }
    },
    [error, handleErrorCode, minSizeBytes, maxSizeBytes, onSelect],
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
                {!error
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
        {!error && !preview && description && (
          <Typography variant="subtitle2" color="secondary" align="center">
            {description}
          </Typography>
        )}
        {error && (
          <Typography variant="subtitle2" color="warning.main" align="center">
            {error}
          </Typography>
        )}
      </Stack>
    </Box>
  )
}

const memoUpload = memo(Upload)

export { memoUpload as Upload }
