import { DealSchema } from "../models/dealModel";

interface IDealRequest {
    name: string,
    title: string,
    person_name: string,
    org_name: string,
    value: number,
    add_time: string,
    active: Boolean,
    status: string,
    cc_email: string
}

class CreateDealsWithWonRepository {
    async execute({ ...dealData }: IDealRequest) {
        try {
            const deal = await DealSchema.create({
                name: dealData.name,
                title: dealData.title,
                person_name: dealData.person_name,
                org_name: dealData.org_name,
                value: dealData.value,
                add_time: dealData.add_time,
                active: dealData.active,
                status: dealData.status,
                cc_email: dealData.cc_email
            })

            await deal.save();
        } catch (error) {
            console.error("Error creating deal:", error);
            throw new Error("Failed to create deal. Please try again.");
        }
    }

    async listAllDeals() {
        try {
            const deals = await DealSchema.find(); 
            return deals;
        }
        catch (error) {
            console.error("Error listing deals:", error);
            throw new Error("Failed to retrieve deals. Please try again.");
        }
    }

}

export { CreateDealsWithWonRepository };