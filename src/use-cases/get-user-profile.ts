import { ResourceNotFoundError } from '@/errors/resource-not-found-error'
import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'

interface GetUserProfileUseCaseCaseRequest {
  userId: string
}

interface GetUserProfileUseCaserCaseResponse {
  user: User
}

export class GetUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
  }: GetUserProfileUseCaseCaseRequest): Promise<GetUserProfileUseCaserCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return {
      user,
    }
  }
}
