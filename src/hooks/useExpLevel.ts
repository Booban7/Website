import { useMemo } from 'react'
import { calculateExp } from '@/utils/expCalculator'

export const useExpLevel = (careerStartDate: string) =>
  useMemo(() => calculateExp(careerStartDate), [careerStartDate])
