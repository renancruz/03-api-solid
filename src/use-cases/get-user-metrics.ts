import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMetricsCaseRequest {
  userId: string
}

interface GetUserMetricsCaseResponse {
  checkInsCount: number
}

export class GetUserMetricsUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricsCaseRequest): Promise<GetUserMetricsCaseResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
