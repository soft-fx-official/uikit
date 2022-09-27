import React from 'react'

import { SvgIcon } from '@mui/material'

import { ReactComponent as Certificate } from '../../../assets/certificate.svg'
import { ReactComponent as ErrorCertificate } from '../../../assets/error_certificate.svg'
import { ReactComponent as ErrorIdIcon } from '../../../assets/error_ID.svg'
import { ReactComponent as ErrorPassport } from '../../../assets/error_passport.svg'
import { ReactComponent as IDdoc } from '../../../assets/ID_doc.svg'
import { ReactComponent as Passport } from '../../../assets/passport.svg'
import { UploadDocumentType } from '../index'

type DocumentTemplate = {
  component: React.ReactNode
  errorIcon: React.ReactNode
}

export const DOCUMENT_TEMPLATES: Record<UploadDocumentType, DocumentTemplate> = {
  idCard: {
    component: (
      <SvgIcon
        style={{ width: '320px', height: 'auto' }}
        sx={theme => ({
          'svg > rect:first-of-type': {
            fill: theme.palette.document?.primary,
            stroke: theme.palette.document?.secondary,
          },
          'svg > rect:not(:first-of-type)': {
            fill: theme.palette.document?.secondary,
          },
          'svg > path': {
            stroke: theme.palette.document?.secondary,
          },
          'svg > g > path': {
            fill: theme.palette.document?.primary,
          },
        })}
        viewBox="0 0 320 188"
      >
        <IDdoc />
      </SvgIcon>
    ),
    errorIcon: (
      <SvgIcon
        style={{ width: '320px', height: 'auto' }}
        sx={theme => ({
          'svg > g > rect[fill]': {
            fill: theme.palette.document?.secondary,
          },
          'svg > g > rect[fill]:first-of-type': {
            fill: theme.palette.document?.primary,
          },
          'svg > g > rect[stroke]:first-of-type': {
            stroke: theme.palette.warning.main,
          },
          'svg > g > rect[fill]:last-of-type': {
            fill: theme.palette.warning.main,
          },
          'svg > g > path[stroke]': {
            stroke: theme.palette.document?.secondary,
          },
          'svg > g > path:nth-last-of-type(-n+2)': {
            fill: theme.palette.document?.secondary,
            stroke: theme.palette.document?.secondary,
          },
          'svg > g > g > path[fill]': {
            fill: theme.palette.document?.primary,
          },
        })}
        viewBox="0 0 320 188"
      >
        <ErrorIdIcon />
      </SvgIcon>
    ),
  },
  certificate: {
    component: (
      <SvgIcon
        style={{ width: '230px', height: 'auto' }}
        sx={theme => ({
          'svg > rect:first-of-type': {
            fill: theme.palette.document?.primary,
            stroke: theme.palette.document?.secondary,
          },
          'svg > path': {
            stroke: theme.palette.document?.secondary,
          },
          'svg > rect:not(:first-of-type)': {
            fill: theme.palette.document?.secondary,
          },
        })}
        viewBox="0 0 230 257"
      >
        <Certificate />
      </SvgIcon>
    ),
    errorIcon: (
      <SvgIcon
        style={{ width: '230px', height: 'auto' }}
        sx={theme => ({
          'svg > rect': {
            fill: theme.palette.document?.secondary,
          },
          'svg > rect:first-of-type': {
            fill: theme.palette.document?.primary,
            stroke: theme.palette.warning.main,
          },
          'svg > path[stroke]': {
            stroke: theme.palette.document?.secondary,
          },
          'svg > path[fill]': {
            fill: theme.palette.document?.secondary,
            stroke: theme.palette.document?.secondary,
          },
          'svg > path:nth-last-of-type(3)': {
            fill: theme.palette.warning.main,
          },
          'svg > path:nth-last-of-type(-n+2)': {
            fill: theme.palette.document?.secondary,
            stroke: theme.palette.document?.secondary,
          },
        })}
        viewBox="0 0 230 261"
      >
        <ErrorCertificate />
      </SvgIcon>
    ),
  },
  passport: {
    component: (
      <SvgIcon
        style={{ width: '240px', height: 'auto' }}
        sx={theme => ({
          'svg > rect:first-of-type': {
            fill: theme.palette.document?.primary,
            stroke: theme.palette.document?.secondary,
          },
          'svg > rect:not(:first-of-type)': {
            fill: theme.palette.document?.secondary,
          },
          'svg > path': {
            stroke: theme.palette.document?.secondary,
          },
          'svg > g > path': {
            fill: theme.palette.document?.primary,
          },
        })}
        viewBox="0 0 240 274"
      >
        <Passport />
      </SvgIcon>
    ),
    errorIcon: (
      <SvgIcon
        style={{ width: '240px', height: 'auto' }}
        sx={theme => ({
          'svg > g > rect:first-of-type': {
            fill: theme.palette.document?.primary,
            stroke: theme.palette.warning.main,
          },
          'svg > g > rect:last-of-type': {
            fill: theme.palette.warning.main,
          },
          'svg > g > rect:not(:first-of-type):not(:last-of-type)': {
            fill: theme.palette.document?.secondary,
          },
          'svg > g > path': {
            stroke: theme.palette.document?.secondary,
          },
          'svg > g > path[fill]': {
            fill: theme.palette.document?.secondary,
          },
          'svg > g > g > path': {
            fill: theme.palette.document?.primary,
          },
        })}
        viewBox="0 0 240 274"
      >
        <ErrorPassport />
      </SvgIcon>
    ),
  },
}
