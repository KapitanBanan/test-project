let inf = {
    displayedName: {
        displayedName: {
            value: ["Профиль маячковый ПВХ 10 мм L3м"],
            description: "Полное наименование товара для клиента"
        }
    },
    stock: {
        stocks: {
            "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
};

function getNameOfProduct() {

    return inf.displayedName.displayedName.value;

}

function getStoresIdsWithProducts() {

    let storeIds = [];
    for (let [region, stores] of Object.entries(inf.stock.stocks)) {
        for (let [idOfStore, quantity] of Object.entries(stores)) {
            if (quantity > 0) {
                storeIds.push(idOfStore);
            }
        }
    }
    return storeIds;
}

function getMaxQuantityOfRegion() {

    let response = [0, 0];

    for (let [region, stores] of Object.entries(inf.stock.stocks)) {
        for (let [idOfStore, quantity] of Object.entries(stores)) {
            if (quantity > parseInt(response[1])) {
                response[0] = idOfStore;
                response[1] = quantity;
            }
        }
    }

    return response;

}

console.log("\nИмя продукта: \n", getNameOfProduct(), "\n");

console.log("Номера магазинов с товаром в наличии: \n", getStoresIdsWithProducts(), "\n");

console.log("Номер магазина и значение с максимальным количеством товара в регионе: \n", getMaxQuantityOfRegion());