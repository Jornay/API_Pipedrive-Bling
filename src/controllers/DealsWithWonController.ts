import { Request, Response } from "express";
import { api } from "../services/apiPipedrive";
import { CreateDealsWithWonRepository } from "../repositories/CreateDealsWithWonRepository";
import { dTcreateDealsWithWonRepository } from '../dt/createDealsWithWonRepository.dt'
import CreatedOrdersBling from '../services/createDataInBling'


class DealsWithWonController {
    async createDeals(request: Request, response: Response) {
        try {
            const { data } = await api.get('deals')
            if (data.success === false) {
                return "Data not found."
            }

            const orders = await CreatedOrdersBling.create(data);
            if (orders[0] === false) {
                return response.json("Data already created.");
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

    async getAllDeals(request: Request, response: Response) {
        try {

            const createDealsWithWonRepository = new CreateDealsWithWonRepository();
            const allDeals = await createDealsWithWonRepository.listAllDeals();

            return response.json(allDeals);
        } catch {

        }
    }
}

export { DealsWithWonController }