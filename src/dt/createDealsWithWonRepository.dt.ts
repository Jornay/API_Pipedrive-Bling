export function dTcreateDealsWithWonRepository(dataDeals:any) {

    const dealsDataObject: any[]= []
    dataDeals.data.map((dataDeal:any) => {
        dealsDataObject.push({
            name: dataDeal.creator_user_id.name,
            title: dataDeal.title,
            person_name: dataDeal.person_name,
            org_name: dataDeal.org_name,
            value: dataDeal.value,
            add_time: dataDeal.add_time,
            active: dataDeal.active,
            status: dataDeal.status,
            cc_email: dataDeal.cc_email,
        })
    })
    return dealsDataObject

}

