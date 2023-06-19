import { Request, Response } from "express";
import { api } from "../services/apiPipedrive";
import { CreateDealsWithWonRepository } from "../repositories/CreateDealsWithWonRepository";
import { dTcreateDealsWithWonRepository } from '../dt/createDealsWithWonRepository.dt'

class DealsWithWonController {
    async createDeals(request: Request, response: Response) {
        try {
            const { data } = await api.get('deals')
            console.log(data)
            if (data.success === false) {
                return "fail"
            }
            const createDealsWithWonRepository = new CreateDealsWithWonRepository();
            var dealsObject = dTcreateDealsWithWonRepository(data);
            

            dealsObject.map((deal) => {
                createDealsWithWonRepository.execute(deal);
            })
            return response.json("data saved successfully");
        } catch {

        }
    }
}

export { DealsWithWonController }