import { Gym } from '@prisma/client'
import { GynsRepository } from '../gym-repository'

export class InMemoryGynsRepository implements GynsRepository {
  public items: Gym[] = []

  async findById(id: string) {
    const gym = this.items.find((item) => item.id === id)

    if (!gym) {
      return null
    }

    return gym
  }
}
