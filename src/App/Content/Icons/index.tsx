import { Box, Stack, Typography } from '@mui/material'

import {
  AddPlusIcon,
  AndroidIcon,
  ArchitectureIcon,
  ArtIcon,
  BankStatementIcon,
  BusinessIcon,
  CancelModalIcon,
  CertificateGoodIcon,
  CertificateIncorporationIcon,
  ComputerServicesIcon,
  CorporateAccountIcon,
  DrivingLicenseIcon,
  EmployedIcon,
  ErrorIcon,
  FinanceLawIcon,
  HealthcareIcon,
  HedgingIcon,
  IOSIcon,
  LockIcon,
  MemorandumAssociationIcon,
  NationalIdCardIcon,
  PassportIcon,
  PDFIcon,
  PersonalAccountIcon,
  PowerAttorneyIcon,
  PrintIcon,
  RetiredIcon,
  SalesMarketingIcon,
  ScienceIcon,
  SpeculationIcon,
  StandingIcon,
  UnemployedIcon,
  UtilityBillIcon,
  WindowsIcon,
} from '../../../icons'

const icons = [
  { icon: AndroidIcon, title: 'AndroidIcon' },
  { icon: ArchitectureIcon, title: 'ArchitectureIcon' },
  { icon: ArtIcon, title: 'ArtIcon' },
  { icon: BankStatementIcon, title: 'BankStatementIcon' },
  { icon: BusinessIcon, title: 'BusinessIcon' },
  { icon: CertificateGoodIcon, title: 'CertificateGoodIcon' },
  { icon: CertificateIncorporationIcon, title: 'CertificateIncorporationIcon' },
  { icon: ComputerServicesIcon, title: 'ComputerServicesIcon' },
  { icon: CorporateAccountIcon, title: 'CorporateAccountIcon' },
  { icon: DrivingLicenseIcon, title: 'DrivingLicenseIcon' },
  { icon: EmployedIcon, title: 'EmployedIcon' },
  { icon: ErrorIcon, title: 'ErrorIcon' },
  { icon: FinanceLawIcon, title: 'FinanceLawIcon' },
  { icon: HealthcareIcon, title: 'HealthcareIcon' },
  { icon: HedgingIcon, title: 'HedgingIcon' },
  { icon: IOSIcon, title: 'IOSIcon' },
  { icon: LockIcon, title: 'LockIcon' },
  { icon: MemorandumAssociationIcon, title: 'MemorandumAssociationIcon' },
  { icon: NationalIdCardIcon, title: 'NationalIdCardIcon' },
  { icon: PassportIcon, title: 'PassportIcon' },
  { icon: PDFIcon, title: 'PDFIcon' },
  { icon: PersonalAccountIcon, title: 'PersonalAccountIcon' },
  { icon: PowerAttorneyIcon, title: 'PowerAttorneyIcon' },
  { icon: PrintIcon, title: 'PrintIcon' },
  { icon: RetiredIcon, title: 'RetiredIcon' },
  { icon: SalesMarketingIcon, title: 'SalesMarketingIcon' },
  { icon: ScienceIcon, title: 'ScienceIcon' },
  { icon: SpeculationIcon, title: 'SpeculationIcon' },
  { icon: StandingIcon, title: 'StandingIcon' },
  { icon: UnemployedIcon, title: 'UnemployedIcon' },
  { icon: UtilityBillIcon, title: 'UtilityBillIcon' },
  { icon: WindowsIcon, title: 'WindowsIcon' },
  { icon: AddPlusIcon, title: 'AddPlusIcon' },
  { icon: CancelModalIcon, title: 'CancelModalIcon' },
]

const Icons = () => (
  <Box
    sx={{
      display: 'grid',
      justifyContent: 'center',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
      gap: '50px',
      flexWrap: 'wrap',
      marginBottom: '40px',
    }}
  >
    {icons.map((iconItem, i) => {
      const Icon = iconItem.icon

      return (
        <Stack key={i} spacing={3} justifyContent="center" alignItems="center">
          <Icon fontSize="large" />
          <Typography variant="subtitle1">{iconItem.title}</Typography>
        </Stack>
      )
    })}
  </Box>
)

export default Icons
