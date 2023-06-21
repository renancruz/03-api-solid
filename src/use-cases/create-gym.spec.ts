import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUserCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUserCase

describe('Register Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUserCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -22.0660686,
      longitude: -42.9236307,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
