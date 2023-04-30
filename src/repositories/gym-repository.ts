import { Gym } from '@prisma/client'

export interface GynsRepository {
  findById(id: string): Promise<Gym | null>
}
