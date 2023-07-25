import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeFetchNearbyGyms() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new FetchNearbyGymsUseCase(gymsRepository)

  return useCase
}
